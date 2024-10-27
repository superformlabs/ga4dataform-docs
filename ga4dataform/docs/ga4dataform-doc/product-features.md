---
title: Product Features
description: Overview of the key functionalities and capabilities of the product.
sidebar_position: 4
slug: /product-features
---

## Core Features
### Basic features

<details>
  <summary>Incremental loading</summary>
</details>

<details>
  <summary>Partitioning & Clustering</summary>
</details>

<details>
  <summary>Default channel grouping</summary>
</details>

<details>
  <summary>Last non-direct click attribution model (session-based)</summary>
</details>

<details>
  <summary>GA4 Sessions Processing Steps</summary>
</details>

<details>
  <summary>Paid Search misattribution</summary>
  <p>Easy fix for Paid Search misattribution when gclid, gbraid or wbraid are available.</p>
</details>

<details>
  <summary>Event ID</summary>
  <p>Creating unique event ID based on event_name, event_timestamp_micros, user_pseudo_id, ga_session_id, batch_page_id, batch_ordering_id, batch_event_index, engagement_time_msec.</p>
</details>

<details>
  <summary>Default Filtering</summary>
  <p>Session with null session_id and user_pseudo_id null are filtered from final input (in the stg_ga4_sessions model). Duplicated hits are removed.</p>
</details>

### Peripheral features

<details>
  <summary>Time struct</summary>
  <p>Struct containing event_date_YYYYMMDD, event_timestamp_micros, event_timestamp_utc, user_first_touch_timestamp</p>
</details>

<details>
  <summary>user_first_touch_timestamp_utc</summary>
</details>

<details>
  <summary>synthetic_bundle</summary>
  <p>Synthetic events are filtered out in the stg_ga4_events.sqlx model.</p>
</details>

<details>
  <summary>Engaged session</summary>
</details>

<details>
  <summary>Debug session</summary>
</details>

<details>
  <summary>With cross domain</summary>
  <p>Url_params._gl</p>
</details>

<details>
  <summary>has_source</summary>
</details>