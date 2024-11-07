---
title: Custom Configuration
description: Providing instructions on how to customize GA4Dataform.
sidebar_position: 5
slug: /custom-configuration
---

GA4 Dataform Model Custom Configuration ("config.js")
  
  Here's a detailed explanation of the "config.js" file in the custom folder. This file allows users to customize various aspects of the GA4 Dataform model, focusing on parameters like event filtering, custom dimensions, and data validation checks.

  "config.js" - Custom Configuration File

  Purpose:
  This configuration file provides a way for users to customize the behavior of the GA4 Dataform model. Below are the sections and parameters that can be modified:

<details>
  <summary>GA4 Start Date</summary>
  ```
  GA4_START_DATE: "2020-01-01"
  ```
  <strong>Description</strong>: Defines the starting date for the GA4 data that the model should process.  
  <strong>Customization</strong>: Change this date to reflect the earliest data you want to include in your reports. For example, if you started collecting GA4 data on a different date, modify this to match that date.
</details>

<details>
  <summary>Custom Event Parameters</summary>
  ```
  CUSTOM_EVENT_PARAMS_ARRAY: []
  ```
  <strong>Description</strong>: This allows you to specify custom event parameters that are not part of the standard GA4 data. The custom parameters will be added to the `event_params_custom` column.  
  <strong>Customization</strong>: Add parameters using the format `"{ name: "paramname", type: "TYPE", renameTo: "outputcolumnname" }"`.  
  <strong>Example:</strong>
  ```
  CUSTOM_EVENT_PARAMS_ARRAY: [
    { name: 'custom_param', type: 'string', renameTo: 'custom_output' },
    { name: 'n_items', type: 'int', description: 'The number of items in the shopping cart at the time of the event' }
  ]
  ```
</details>

<details>
  <summary>Custom Item Parameters</summary>
  ```
  CUSTOM_ITEM_PARAMS_ARRAY: []
  ```
  <strong>Description</strong>: Similar to event parameters, but for item custom dimensions and metrics. These will be stored in the `items.item_params_custom.*` column.  
  <strong>Customization</strong>: Add custom item parameters in the same format.  
  <strong>Example:</strong>
  ```
  CUSTOM_ITEM_PARAMS_ARRAY: [
    { name: "stock_status", type: "string" }
  ]
  ```
</details>

<details>
  <summary>Custom URL Parameters</summary>
  ```
  CUSTOM_URL_PARAMS_ARRAY: []
  ```
  <strong>Description</strong>: Allows you to extract custom URL parameters into their own columns.  
  <strong>Customization</strong>: Define custom URL parameters you want to extract in the format `"{ name: "param_name", cleaningMethod: method }"`. Note that url params will always be strings.
  <strong>Cleaning Methods</strong>: For now, the only cleaning method supported is `lowerSQL`. This will transform the string to lower case. Note: use `lowerSQL` without quotes.
  <strong>Example:</strong>
  ```
  CUSTOM_URL_PARAMS_ARRAY: [
    { name: "q", cleaningMethod: lowerSQL, description: "internal search engine term used - transformed to lowe case" },
    { name: "product-size", renameTo: "size" }
  ]
  ```
</details>

<details>
  <summary>Event and Hostname Filters</summary>
  
  <strong>Events to Exclude</strong>
  ```
  EVENTS_TO_EXCLUDE: []
  ```
  <strong>Description</strong>: List the event names that should be excluded from the events table.  
  <strong>Customization</strong>: Add event names you don’t want to process.  
  <strong>Example:</strong> 
  ```
  EVENTS_TO_EXCLUDE: ["user_engagement", "scroll"]
  ``` 
  <strong>Hostname Exclude/Include</strong>
  
  ```
  HOSTNAME_EXCLUDE: []
  HOSTNAME_INCLUDE_ONLY: []
  ```
  <strong>Description</strong>: Exclude or include specific hostnames from the data.  
  <strong>Customization</strong>: Add hostnames to either list based on whether you want to include or exclude them from the data.
  <strong>Example:</strong>
  ```
  HOSTNAME_EXCLUDE: []
  HOSTNAME_INCLUDE_ONLY: [ "www.ga4dataform.com", "ga4dataform.com" ]
  ```
</details>

<details>
  <summary>Attribution Window</summary>
  ```
  LAST_NON_DIRECT_LOOKBACK_DAYS: 90
  ```
  <strong>Description</strong>: Defines the number of days to look back when assigning a source for a user who lands on your site without a direct source.  
  <strong>Customization</strong>: Change the number of days to fit your attribution model.
</details>

<details>
  <summary>Data Quality Assertions</summary>
  <p>These assertions check the data for consistency and quality. Users can enable or disable specific checks.</p>

  <strong>Event ID Uniqueness</strong>
  ```
  ASSERTIONS_EVENT_ID_UNIQUENESS: true
  ```
  Ensures that each event has a unique event ID.

  <strong>Session ID Uniqueness</strong>
  ```
  ASSERTIONS_SESSION_ID_UNIQUENESS: true
  ```
  Ensures that each session has a unique session ID.

  <strong>Session Duration Validity</strong>
  ```
  ASSERTIONS_SESSION_DURATION_VALIDITY: true
  ```
  Ensures that session durations are valid and within reasonable limits.

  <strong>Session Validity</strong>
  ```
  ASSERTIONS_SESSIONS_VALIDITY: true
  ```
  Validates that session data is correct.

  <strong>Tables Timeliness</strong>
  ```
  ASSERTIONS_TABLES_TIMELINESS: true
  ```
  Checks if the GA4 tables are up to date.

  <strong>Transaction ID Completeness</strong>
  ```
  ASSERTIONS_TRANSACTION_ID_COMPLETENESS: false
  ```
  Checks if transaction IDs are present for purchase events.

  <strong>User Pseudo ID Completeness</strong>
  ```
  ASSERTIONS_USER_PSEUDO_ID_COMPLETENESS: false
  ```
  Ensures that the "user_pseudo_id" is present for all hits.
</details>

