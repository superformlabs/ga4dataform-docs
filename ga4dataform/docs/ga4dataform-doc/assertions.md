---
title: Assertions
description: Description of assertions available in the core free product
sidebar_position: 6
slug: /assertions
---

## Assertions logic 
Each assertion execution is logged in a dedicated BigQuery table easily accessible (`assertion_logs`). Failed or passed assertions result are log. Assertions log table contains:
- Execution date of assertions
- Name of the assertion
- Model on which the assertion has been run
- A sample of flawed values if any anomalies has been detected (i.e list of duplicated event id)
- The status of the assertion, failed or passed. 
- A detailed error message. 

Assertions can be independently deactivated in the custom_config.js configuration file. 

All Assertions are tagged with the string “assertions”

## Assertions categories

We have 5 main categories of assertions:

**Uniqueness**: Checking if the column we are testing contains duplicates values 

**Validity**: Checking if the column or table we are testing is “valid” from a business point of view. I.e session duration should never be negative. 

**Timeliness**: Checking if tables we are testing are “on time”. I.e we expect that the max(date) of the event table to be the same as the max(date) of the session table.

**Freshness**: We expect tables to be up to date. Freshness is an expectation that needs to be set by the user depending on their own context. 

**Completeness**: Check if the column we are testing is complete and that we are not missing any values. 

## Description

This folder contains assertion files:


| Assertion                                  | Description                                                                                                             |
|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| **assertion_logs**                         | Building an incremental table to log results of all the assertions.                                                     |
| **assertions_event_id_uniqueness**         | Check if the event ID is unique. Returns sample of duplicate event IDs if the assertion fails.                          |
| **assertions_session_duration_validity**   | Check if session duration is not negative.                                                                              |
| **assertions_session_id_uniqueness**       | Check if session ID is unique. Returns sample of session IDs if the assertion fails.                                     |
| **assertions_sessions_validity**           | Check the validation of sessions using multiple criteria: `landing_page_location`, `user_pseudo_id`, `session_id`, `session_date`, `device.category`, and `session_start_timestamp_utc` should not be null. |
| **assertions_tables_timeliness**           | Check if session and events tables across different layers (staging, intermediate, etc.) are always synchronized.       |
| **assertions_transaction_id_completeness** | Check for null or “not set” transaction IDs.                                                                             |
| **assertions_user_pseudo_id_completeness** | Check for null `user_pseudo_id`. Note: this is normal for cookieless pings (hits where consent is not granted)
