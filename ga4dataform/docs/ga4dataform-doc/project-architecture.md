---
title: Project architecture
description: How is GA4Dataform organised in Dataform and BigQuery
sidebar_position: 7
slug: /project-architecture
---

## Dataform Directories:

| Directory                    | Description                                                                                       |
|------------------------------|---------------------------------------------------------------------------------------------------|
| **01_sources**               | Contains declarations and staging models                                                          |
| **02_intermediate**          | Contains intermediate models                                                                      |
| **03_outputs**               | Contains output models                                                                            |
| **03_outputs/aggregated**    | Contains different aggregated tables that can be directly connected to Looker Studio or other visualization tools |
| **03_outputs/base**          | Contains output tables that should be used for aggregations                                       |
| **assertions**               | Contains all the assertions that check the data quality of our model                               |
| **extra**                    | Is it needed?                                                                                     |
| **unit_testing**             | Contains models related to unit testing                                                           |
| **includes**                 | Contains all JS files with reusable variables and functions that help manage the repository        |

## Model Description:

| Model                        | Description                                                                                                             |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| **stg_ga4_events**           | GA4 staging events table that incrementally queries the raw GA4 export and applies partitioning, clustering, cleaning, and several fixes |
| **stg_ga4_sessions**         | GA4 staging sessions table that incrementally queries `stg_ga4_events` table and creates session-level dimensions and metrics |
| **int_ga4_events**           | GA4 intermediate events table that widens the staging table with useful dimensions                                        |
| **int_ga4_sessions**         | GA4 intermediate sessions table that widens the staging table with useful dimensions                                      |
| **ga4_events**               | GA4 output events table that can be used for further transformations or aggregations                                      |
| **ga4_sessions**             | GA4 output sessions table that fixes sessions broken by midnight, adds last non-direct click attribution, and can be used for further transformations or aggregations |
| **demo_daily_sessions_report** |                                                                                                                         |
| **demo_diagnostics**         |                                                                                                                         |
| **unit_test**                |  


## Dataform Repository Structure:
```
definitions
├── **01_sources**
│   ├── `declarations.js`
│   ├── `stg_ga4_events.sqlx`
│   ├── `stg_ga4_sessions.sqlx`
├── **02_intermediate**
│   ├── `int_ga4_events.sqlx`
│   ├── `int_ga4_sessions.sqlx`
├── **03_outputs**
│   ├── **aggregated**
│   │   ├── `demo_daily_sessions_report.sqlx`
│   │   ├── `demo_diagnostics.sqlx`
│   ├── **base**
│   │   ├── `ga4_events.sqlx`
│   │   ├── `ga4_sessions.sqlx`
├── **assertions**
│   ├── `assertion_logs.sqlx`
│   ├── `assertions_event_id_uniqueness.sqlx`
│   ├── `assertions_session_duration_validity.sqlx`
│   ├── `assertions_session_id_uniqueness.sqlx`
│   ├── `assertions_sessions_validity.sqlx`
│   ├── `assertions_tables_timeliness.sqlx`
│   ├── `assertions_transaction_id_completeness.sqlx`
│   ├── `assertions_user_pseudo_id_completeness.sqlx`
├── **extra**
│   ├── **ga4**
│   │   ├── `source_categories.js`
├── **unit_testing**
│   ├── `unit_test.sqlx`
├── **includes**
│   ├── `core_params.js`
│   ├── `custom_config.js`
│   ├── `helpers.js`
├── `.gitignore`
├── `dataform.json`
├── `package-lock.json`
├── `package.json`
```


## BigQuery Output
GA4Dataform generates tables in BigQuery. Everything will be under the dataform-package project with the following structure: 

```
Dataform-package (project)
├── superform_outputs (dataset)
│   ├── demo_daily_sessions_report (tables)
│   ├── demo_diagnostics
│   ├── ga4_events
│   ├── ga4_sessions
├── superform_transformations
│   ├── int_ga4_events
│   ├── int_ga4_sessions
│   ├── source_categories
│   ├── stg_ga4_events
│   ├── stg_ga4_sessions
├── Superform_quality
│   ├── assertion_logs
```