---
title: Product Features
description: Overview of the key functionalities and capabilities of the product.
sidebar_position: 4
slug: /product-features
---

## Core Features
### Basic features

<details>
  <summary>Custom Configuration</summary>
  <p>A single configuration file lets you control all aspects of your data processing: from unnesting custom parameters (event, item, URL) and user properties to filtering data based on hostname or event_name dimensions. Check out the "Custom Configuration" tab to learn more!</p>
</details>

<details>
  <summary>Incremental loading</summary>
  <p>The incrementality works by processing only new GA4 event data without reprocessing the entire dataset. Here's a summary of how this is implemented:</p>
  
  **1. Checkpoint Management:**
  
  - A `date_checkpoint` variable is declared and set to the day after the most recent `event_date` found in the existing table (`stg_ga4_events`).
  - This ensures that only data newer than the most recent processed date is considered for the next load.

  ```
  set date_checkpoint = (
  select max(event_date) + 1 
  from `project_id.superform_transformations.stg_ga4_events` 
  where is_final = true
);
  ``` 
  2. **Deletion of Updated Data:**
  
  - Any existing records from the target table (`stg_ga4_events`) where `event_date` is equal to or greater than the `date_checkpoint` are deleted. This ensures that if GA4 has re-processed any past data, it gets removed and replaced by fresh data.
  ```
  delete from `project_id.superform_transformations.stg_ga4_events`
  where event_date >= date_checkpoint;
  ```

  3. **Filtering New Data:**
  - The pipeline processes only the new GA4 events by using `_table_suffix` to fetch data from BigQuery tables (`events_*`) where the `event_date` (derived from `_table_suffix`) is greater than or equal to the `date_checkpoint`.
  - This prevents reprocessing old event data.

  ```
  and parse_date('%Y%m%d', regexp_extract(_table_suffix, '[0-9]+')) >= date_checkpoint;
  ```

  4. **Filtering out Intraday Events:**
  - Intraday data, which might still be incomplete or subject to change, is excluded from the query using this condition:

  ```
  and contains_substr(_table_suffix, 'intraday') is false;
  ```

  5. **Finalization Logic:**
  - The field `is_final` is computed in the process to determine whether the data is final (older than 3 days). This is used to manage the checkpoint logic, ensuring incremental processing only on data that is finalized.

  ```
  date_diff(current_date(), cast(event_date as date format 'YYYYMMDD'), day) > 3 as is_final;
  ```

</details>


<details>
  <summary>Partitioning & Clustering</summary>
  <p>Our tables use date-based partitioning rather than GA4's default date-sharding approach, leading to better performance and simpler query patterns.</p>
  <p>We have implemented clustering on all tables to potentially optimize query speeds and reduce processing costs.</p>

  | Table                        | Partitioned By | Clustered By           |
|------------------------------|----------------|-------------------------|
| demo_daily_sessions_report.sqlx | session_date   | None                    |
| ga4_events.sqlx          | event_date     | event_name, session_id              |
| int_ga4_sessions.sqlx        | session_date   | session_id              |
| ga4_sessions.sqlx | session_date | session_id


</details>

<details>
  <summary>Default Channel Grouping</summary>
  <p>We implemented GA4's Default Channel Grouping logic as a JavaScript function. While our implementation closely mirrors GA4's behavior, it may not provide exact matches in all cases since the BigQuery export lacks certain parameters used in GA4's channel grouping (e.g.: "Source platform" and "Google Ads campaign type").</p>
  <p>Feel free to use our helper function as a template to create your own, custom channel grouping!</p>
</details>

<details>
  <summary>Last Non-Direct Click Session Source</summary>
  <p>Whether you agree with last non-direct click attribution or not, GA4 UI predominantly uses this model for conversion attribution. We replicated this approach to provide you with a more comparable dataset. Whether you should compare the GA4 UI to the BigQuery export is another question. For more insight, check out <a href="https://developers.google.com/analytics/blog/2023/bigquery-vs-ui" target="_blank">this article</a>.</p>
</details>

<details>
  <summary>Sessionization</summary>
  <p>The GA4 session table provide the following information:</p>

  - **Source / Medium / Campaign** for at least three standard attributions:
    - Last click
    - Last non-direct click (with a particular lookback window, default 90 days)
    - First click
  - For each attribution, **Default Channel Groups** — following the same rules as in Google Analytics 4.
  - **Landing page, landing page referrer, and exit page**, which can also be structured with a prepared hostname, page path, and query parameters.
  - Session properties like: `is_direct_session`, `is_engaged_session`, `is_debug_session`, `is_cross_domain`
  - **Unique session_id**
  - **Session duration**
  - **engagement time**
  - **User information:** `user_id`, `last_user_id`, `user_pseudo_id`
  - etc...

  <p>These columns are often essential for building reports and simplifying data pipelines based on session data.</p>

  ### Common Session Processing Pipeline

  1. **Extract all necessary columns** from raw GA4 data to flat event tables.
  2. **Clean and prepare events**.
  3. **Group events into sessions** using the unique `session_id`.
  4. **Adjust Google’s default source / medium rules** and add channel grouping.
  5. **Add last non-direct attribution**.

  **Sources to calculate source / medium include:**
  
  - `collected_traffic_source` column
  - Source and medium from `event_params`
  - UTM parameters from `page_location`
  - Click IDs from `event_params` or `page_location`, such as `gbraid`, `wbraid`, `gclid`, `dclid`, `srsltid`, and more.

  <p>Once all sources are combined, additional logic is applied to create a fixed source/medium. For example:</p>

  - If `gclid`, `gbraid`, or `wbraid` is present, then source/medium should be `google / cpc`.
  - If the referrer matches `%android-app://com.google%`, then source/medium should be `google / organic`.
  - There are special rules for click IDs, social platforms, and apps.

  <p>For channel grouping, Google provides a list with over 1,100 rules to define groups for known domains.</p>
  <p>After these steps, we calculate last non-direct attribution and compare it with the GA UI and values in `session_traffic_source_last_click`. Source/medium fixes can sometimes reduce direct traffic by 15-20%, improving attribution for paid campaigns.</p>

</details>

<details>
  <summary>Google Ads Traffic Misattribution Fix</summary>
  <p>A known issue in GA4's BigQuery export is the misclassification of Google Ads traffic as organic search when a "gclid" parameter is present. Our solution automatically corrects this misattribution by properly classifying events as paid traffic when gclid, gbraid, or wbraid parameters are detected.</p>
</details>

<details>
  <summary>Looker Studio Report Template</summary>
  <p>Access our ready-to-use Looker Studio dashboard template to jumpstart your GA4 reporting and analysis (coming soon).</p>
</details>

<details>
  <summary>Basic Data Quality Checks</summary>
  <p>We include customized data validation rules for GA4 that can be easily enabled or disabled through the configuration file. See the assertions section for more details</p>
</details>

<details>
  <summary>Comprehensive GA4 Data Diagnostics</summary>
- Cardinality Analysis:
  - Tracks unique pages, sources, mediums, and campaign names
  - Monitors hostname variations
  - Provides both daily and weekly views

- Data Quality Checks:
  - Identifies duplicate transaction IDs
  - Detects empty item payloads in ecommerce events
  - Monitors cookieless hits and measurement protocol hits
  - Tracks self-referral sessions

- Performance Metrics:
  - Complete ecommerce event tracking
  - Session quality monitoring
  - Referrer analysis and tracking

- Diagnostic Ratios:
  - Calculates percentages of problematic events
  - Tracks data collection quality metrics
  - Monitors implementation consistency
</details>

### Additional Features
<details>
  <summary>Event ID</summary>
  <p>We create a unique event ID based on event_name, event_timestamp, user_pseudo_id, ga_session_id, batch_page_id, batch_ordering_id, batch_event_index, engagement_time_msec.</p>
</details>
<details>
  <summary>Timestamp Handling</summary>
  <p>Standardized timestamp struct containing event_date_YYYYMMDD, event_timestamp_micros, event_timestamp_utc, and user_first_touch_timestamp for consistent temporal analysis.</p>
</details>
<details>
  <summary>Landing and Exit Page Tracking</summary>
  <p>We automatically capture and structure session landing and exit pages for seamless funnel analysis and user journey tracking.</p>
</details>
<details>
  <summary>Session Indicators</summary>
  <p>Built-in flags for engaged sessions and debug sessions to help monitor data collection quality.</p>
</details>
<details>
  <summary>Cross-Domain Tracking</summary>
  <p>Supports cross-domain tracking through _gl parameter handling in URL parameters.</p>
</details>
<details>
  <summary>Traffic Source Detection</summary>
  <p>Boolean flag indicating the presence of traffic source data for comprehensive attribution tracking.</p>
</details>
