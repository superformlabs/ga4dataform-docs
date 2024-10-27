---
title: Getting Started
description: What's needed to get started
sidebar_position: 3
slug: /geting-started
---

## Requirements
To use GA4Dataform you need:
- A Google Cloud project with billing enabled
- An active GA4 property with BigQuery export configured. If the export is configured correctly you’ll see a data set analytics_property_id in BigQuery.
- A license key. You’ll receive the license key in the receipt email after ordering the product in the [Superform Labs store](https://store.ga4dataform.com/). The license key is linked to the email address used in the store. License keys are valid for a limited time (dependent on the product plan) and can be used as often as you want, unless there is a reason to disable your license key.

## Installation Guide
- **New installation**: Instructions are provided when running the installer.
- **Update**: You can run the installer again to update the app. Update is "non-destructive". A new workspace will be create. Each update will be retro-compatible with previous version of the model. full-refresh of your model is not necessary. 

:::tip Access Management for Beginners
Once installed, GA4Dataform requires no special permissions to operate correctly. However, the installer itself needs certain permissions to set up and run Dataform in a few clicks only. To use the installer, obtaining GCP Project Owner access is recommended. After installation, it is advisable to revoke these permissions. For a more detailed breakdown of permissions, refer to the Permissions page. If the installer requires permissions that exceed your company's policies, consider using our open-source version instead.
:::

## Using GA4Dataform after installation
- **Releases and Scheduling**: The installer will automatically create a Release and a Workflow configuration using the dataform API. The release will be triggered at 9AM UTC+00:00 and the workflow will be triggered at 10AM UTC+00:00. These values can be modified directly from the dataform UI without impacting the functionality of the project. 
- **Git Connection**: GA4Dataform is not (yet) linked to any git repository. If any changes and customisation are made to the project, changes should be committed to the default Dataform repository.
- **Custom Folders**: Custom folders are available to let you customize some parameters. see the custom section.
- **Version**: The version of the package installed is available in the package.json file. 

:::warning BigQuery Cost
Using GA4Dataform will generate BigQuery costs, so please keep an eye on your Billing. We're not responsible for any charges that may come up.
:::