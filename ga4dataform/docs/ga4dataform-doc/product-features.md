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
</details>

<details>
  <summary>Partitioning & Clustering</summary>
  <p>Our tables use date-based partitioning rather than GA4's default date-sharding approach, leading to better performance and simpler query patterns.</p>
  <p>We implement clustering on all tables to potentially optimize query speeds and reduce processing costs.</p>
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
  <summary>GA4 Sessions Processing Steps</summary>
  <p>Our pipeline processes GA4 session data through several key steps:</p>
  <ol>
    <li>We extract and flatten the required columns from raw GA4 data</li>
    <li>We clean and prepare the events, followed by grouping them into sessions using unique session IDs</li>
    <li>We apply source/medium corrections by analyzing collected_traffic_source, event_params, UTM parameters, and various click IDs (like gclid, gbraid)</li>
    <li>We implement channel grouping and attribution models, with special handling for synthetic events, duplicates, and parameter variations to ensure data accuracy</li>
  </ol>
</details>

<details>
  <summary>Google Ads Traffic Misattribution Fix</summary>
  <p>A known issue in GA4's BigQuery export is the misclassification of Google Ads traffic as organic search when a "gclid" parameter is present. Our solution automatically corrects this misattribution by properly classifying events as paid traffic when gclid, gbraid, or wbraid parameters are detected.</p>
</details>

<details>
  <summary>Looker Studio Report Template</summary>
  <p>Access our ready-to-use Looker Studio dashboard template to jumpstart your GA4 reporting and analysis.</p>
</details>

<details>
  <summary>Basic Data Quality Checks</summary>
  <p>We include customized data validation rules for GA4 that can be easily enabled or disabled through the configuration file.</p>
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