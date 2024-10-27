---
title: Custom Configuration
description: Providing instructions on how to customize GA4Dataform.
sidebar_position: 5
slug: /custom-configuration
---

Here's a detailed explanation of the `config.js` file in the custom folder. This file allows users to customize various aspects of the GA4 Dataform model, focusing on parameters like event filtering, custom dimensions, and data validation checks.

---

## `config.js` - Custom Configuration File

### Purpose:
This configuration file provides a way for users to customize the behavior of the GA4 Dataform model. Below are the sections and parameters that can be modified:

---

### 1. GA4 Start Date (`GA4_START_DATE`)
```javascript
GA4_START_DATE: "2020-01-01"
```
**Description**: Defines the starting date for the GA4 data that the model should process.  
**Customization**: Change this date to reflect the earliest data you want to include in your reports. For example, if you started collecting GA4 data on a different date, modify this to match that date.

---

### 2. Custom Event Parameters (`CUSTOM_EVENT_PARAMS_ARRAY`)
```javascript
CUSTOM_EVENT_PARAMS_ARRAY: []
```
**Description**: This allows you to specify custom event parameters that are not part of the standard GA4 data. The custom parameters will be added to the `event_params_custom` column.  
**Customization**: Add parameters using the format `{ name: "paramname", type: "TYPE", renameTo: "outputcolumnname" }`.  
Example:
```javascript
CUSTOM_EVENT_PARAMS_ARRAY: [
  { name: "custom_param", type: "string", renameTo: "custom_output" }
]
```

---

### 3. Custom Item Parameters (`CUSTOM_ITEM_PARAMS_ARRAY`)
```javascript
CUSTOM_ITEM_PARAMS_ARRAY: []
```
**Description**: Similar to event parameters, but for **item custom dimensions and metrics**. These will be stored in the `items.item_params_custom.*` column.  
**Customization**: Add custom item parameters in the same format.  
Example:
```javascript
CUSTOM_ITEM_PARAMS_ARRAY: [
  { name: "stock_status", type: "string" }
]
```

---

### 4. Custom URL Parameters (`CUSTOM_URL_PARAMS_ARRAY`)
```javascript
CUSTOM_URL_PARAMS_ARRAY: []
```
**Description**: Allows you to extract custom URL parameters into their own columns.  
**Customization**: Define custom URL parameters you want to extract in the format `{ name: "param_name", cleaningMethod: "method" }`. Note that only strings are supported.  
Example:
```javascript
CUSTOM_URL_PARAMS_ARRAY: [
  { name: "q", cleaningMethod: lowerSQL }
]
```

---

### 5. Event and Hostname Filters
- **Events to Exclude (`EVENTS_TO_EXCLUDE`)**
```javascript
EVENTS_TO_EXCLUDE: []
```
**Description**: List the event names that should be excluded from the events table.  
**Customization**: Add event names you don’t want to process.  
Example: `EVENTS_TO_EXCLUDE: ["user_engagement", "scroll"]`

- **Hostname Exclude/Include (`HOSTNAME_EXCLUDE`, `HOSTNAME_INCLUDE_ONLY`)**
```javascript
HOSTNAME_EXCLUDE: []
HOSTNAME_INCLUDE_ONLY: []
```
**Description**: Exclude or include specific hostnames from the data.  
**Customization**: Add hostnames to either list based on whether you want to include or exclude them from the data.

---

### 6. Attribution Window (`LAST_NON_DIRECT_LOOKBACK_DAYS`)
```javascript
LAST_NON_DIRECT_LOOKBACK_DAYS: 90
```
**Description**: Defines the number of days to look back when assigning a source for a user who lands on your site without a direct source.  
**Customization**: Change the number of days to fit your attribution model.

---

### 7. Data Quality Assertions
These assertions check the data for consistency and quality. Users can enable or disable specific checks.

- **Event ID Uniqueness (`ASSERTIONS_EVENT_ID_UNIQUENESS`)**
```javascript
ASSERTIONS_EVENT_ID_UNIQUENESS: true
```
**Description**: Ensures that each event has a unique event ID.
  
- **Session ID Uniqueness (`ASSERTIONS_SESSION_ID_UNIQUENESS`)**
```javascript
ASSERTIONS_SESSION_ID_UNIQUENESS: true
```
**Description**: Ensures that each session has a unique session ID.
  
- **Session Duration Validity (`ASSERTIONS_SESSION_DURATION_VALIDITY`)**
```javascript
ASSERTIONS_SESSION_DURATION_VALIDITY: true
```
**Description**: Ensures that session durations are valid and within reasonable limits.

- **Session Validity (`ASSERTIONS_SESSIONS_VALIDITY`)**
```javascript
ASSERTIONS_SESSIONS_VALIDITY: true
```
**Description**: Validates that session data is correct.

- **Tables Timeliness (`ASSERTIONS_TABLES_TIMELINESS`)**
```javascript
ASSERTIONS_TABLES_TIMELINESS: true
```
**Description**: Checks if the GA4 tables are up to date.

- **Transaction ID Completeness (`ASSERTIONS_TRANSACTION_ID_COMPLETENESS`)**
```javascript
ASSERTIONS_TRANSACTION_ID_COMPLETENESS: false
```
**Description**: Checks if transaction IDs are present for purchase events.

- **User Pseudo ID Completeness (`ASSERTIONS_USER_PSEUDO_ID_COMPLETENESS`)**
```javascript
ASSERTIONS_USER_PSEUDO_ID_COMPLETENESS: false
```
**Description**: Ensures that the `user_pseudo_id` is present for all hits.

---

### How to Customize:

1. **Dates**: Adjust the `GA4_START_DATE` to match the date when you want the data processing to begin.
2. **Custom Parameters**: Add any custom event, item, or URL parameters that are specific to your business in the appropriate arrays.
3. **Filters**: Exclude certain events or hostnames from your dataset if they are not relevant to your analysis.
4. **Attribution**: Modify the lookback window for non-direct sessions if needed.
5. **Assertions**: Toggle data quality checks based on your requirements for accuracy and completeness.

---

This configuration file provides a high level of flexibility, allowing users to tailor the GA4 Dataform model to their specific data needs.


3. RESERVED_COLUMN_NAMES_ARRAY
This array contains a list of internal column names used by the package. These columns represent data that is automatically captured by GA4, such as event_id, event_name, user_id, and session_id. These are names the system should avoid overriding because they are critical for tracking.

4. URL_PARAMS_ARRAY
This array defines URL parameters commonly used in marketing campaigns (like utm_source and utm_medium). These parameters are extracted from URLs and processed using cleaning methods, such as lowerSQL, to ensure consistent formatting.

5. CORE_PARAMS_ARRAY
This is a crucial array that defines the core event parameters GA4 captures. These parameters cannot be removed or renamed and include elements such as:

ga_session_id: A unique ID for a session.
engagement_time_msec: The engagement time in milliseconds.
page_title: The title of the web page viewed.
These parameters cover a wide range of data categories, including page-specific data, campaign data (like utm parameters), ecommerce data (like transaction_id), and video-related events.

6. GA4_START_DATE
This defines the first date for processing GA4 events. Only events from this date onward will be processed.

DATA_IS_FINAL_DAYS
This sets a threshold of 3 days to determine when data is considered final. For instance, GA4 may receive backdated Measurement Protocol hits, so the system waits 3 days before considering the data complete.

LAST_NON_DIRECT_LOOKBACK_DAYS
This specifies how many days the system should look back to attribute non-direct traffic sources, useful in multi-touch attribution analysis.

ASSERTIONS_*

These assertions ensure data quality by verifying certain conditions.

8. 
const CUSTOM_EVENT_PARAMS_ARRAY = [];
const CUSTOM_USER_PROPERTIES_ARRAY = [];
const CUSTOM_ITEM_PARAMS_ARRAY = [];
These arrays allow the user to specify custom event parameters, user properties, and item parameters, but they're currently empty. If filled, they would add additional fields to the event data model.

9. Click ID Arrays
CLICK_IDS_ARRAY: Defines how to classify click IDs (like gclid, dclid, etc.) when source/medium/campaign is not explicitly set.
KNOWN_CLICK_IDS_ARRAY: Defines a list of known click IDs that should overwrite medium and campaign fields, particularly when no valid source is found.
For example:

javascript
Copy code

This means that if the click ID gclid is found, the medium should be set to "cpc", and the campaign to "(not set)".

10. Exclusion Lists (EVENTS_TO_EXCLUDE, HOSTNAME_EXCLUDE, HOSTNAME_INCLUDE_ONLY)
const EVENTS_TO_EXCLUDE = [];
const HOSTNAME_EXCLUDE = [];
const HOSTNAME_INCLUDE_ONLY = [];
These arrays allow users to exclude specific events, hostnames, or only include certain hostnames in the data processing. They are currently empty but can be populated with event or hostname values as needed.

11. Social Platforms Regex (SOCIAL_PLATFORMS_REGEX)
javascript
Copy code
const SOCIAL_PLATFORMS_REGEX = ['pinterest', 'facebook', ...];
This regex list is used to match social platforms (e.g., pinterest, facebook, twitter) in URL parameters to classify traffic correctly.

12. Core Configuration Object (coreConfig)

This object bundles all the configuration elements into a single object that is exported at the end of the file. It contains all the settings, parameters, and rules defined above and is meant to be imported and used in the main Dataform package processing logic.




#### Custom Google Analytics 4 parameters (CUSTOM_PARAMS_ARRAY)
#### Adding description here
#### Event filters
#### CLICK_IDS_ARRAY
#### URL_PARAMS_ARRAY
#### LAST_NON_DIRECT_LOOKBACK_DAYS
#### EVENTS_TO_EXLUDE