---
title: FAQ
description: most common questions
sidebar_position: 10
slug: /faq
---

<details>
  <summary>How closely does GA4Dataform match the GA4 UI's Attribution logic?</summary>
  <p>GA4Dataform is designed to align closely with the GA4 UI, especially for properties that use the "Device-based" reporting identity. Here are some key details:</p>

  - **Channel Grouping:** The channel grouping logic in GA4Dataform matches closely with the GA4 UI, particularly for categories derived from common identifiers like `source`, `medium`, `referrer`, and UTM parameters.
  - **Limitations in Data Access:** In some cases, GA4Dataform may differ slightly from the GA4 UI. For example, Google has additional insight into certain ad data, especially with Google Ads. When only autotagging is used, Google can distinguish between "Cross-network," "Paid Shopping," and "Paid Search," distinctions that are not fully visible in BigQuery data.
  - **`session_traffic_source_last_click`:** For recent data, GA4 provides a `session_traffic_source_last_click` column. You can use this Google-provided column for classification, ensuring consistency with Google's attribution logic.

  <p>By leveraging these practices, GA4Dataform can achieve a close approximation to the GA4 UI's attribution, though some differences remain due to Google's proprietary data insights.</p>
</details>

<details>
  <summary>Will my GA4 raw export table be impacted, affected, or updated by GA4Dataform?</summary>
  <p>No, your raw GA4 table remains untouched. GA4Dataform creates a new Dataform repository and a new dataset, so nothing will be overwritten.</p>
</details>
