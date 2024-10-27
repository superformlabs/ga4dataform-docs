---
title: Permissions
description: Access needed
sidebar_position: 7
slug: /pernissions
---

Detailed list of all the permissions requiered to run the installer:

| **Permissions**                               | **Why do we need it?**                                 | **What roles have this permission?**                                                     |
|------------------------------------------------|--------------------------------------------------------|------------------------------------------------------------------------------------------|
| `bigquery.datasets.get`                        | List out the available GA4 datasets                     | BigQuery Data Viewer, BigQuery User, BigQuery Admin                                       |
| `dataform.releaseConfigs.create`               | Create release configurations for Dataform workflows    | Dataform Admin                                                                           |
| `dataform.releaseConfigs.list`                 | List release configurations                             | Dataform Admin, Dataform Editor, Dataform Viewer                                          |
| `dataform.repositories.create`                 | Create Dataform repositories                            | Dataform Admin, Dataform Editor, Code Creator, Code Editor, Code Owner                    |
| `dataform.repositories.fetchHistory`           | Fetch the commit history of a repository                | Dataform Admin, Dataform Editor, Dataform Viewer, Code Creator, Code Editor, Code Owner, Code Viewer |
| `dataform.repositories.get`                    | Get details of a specific repository                    | Dataform Admin, Dataform Editor, Dataform Viewer, Code Creator, Code Editor, Code Owner, Code Viewer |
| `dataform.repositories.list`                   | List all repositories                                   | Dataform Admin, Dataform Editor, Dataform Viewer, Code Creator, Code Editor, Code Owner, Code Viewer |
| `dataform.repositories.update`                 | Update repository settings                              | Dataform Admin, Code Owner                                                                |
| `dataform.workflowConfigs.create`              | Create workflow configurations                          | Dataform Admin                                                                           |
| `dataform.workflowConfigs.list`                | List workflow configurations                            | Dataform Admin, Dataform Editor, Dataform Viewer                                          |
| `dataform.workspaces.commit`                   | Commit changes to a workspace                           | Dataform Admin, Code Editor, Code Owner, Dataform Editor                                  |
| `dataform.workspaces.create`                   | Create new workspaces                                   | Dataform Admin, Code Editor, Code Owner, Dataform Editor                                  |
| `dataform.workspaces.fetchFileGitStatuses`     | Get Git status of files in a workspace                  | Dataform Admin, Dataform Editor, Dataform Viewer, Code Creator, Code Editor, Code Owner, Code Viewer |
| `dataform.workspaces.get`                      | Get details of a specific workspace                     | Dataform Admin, Dataform Editor, Dataform Viewer, Code Creator, Code Editor, Code Owner, Code Viewer |
| `dataform.workspaces.installNpmPackages`       | Install NPM packages in a workspace                     | Dataform Admin, Code Editor, Code Owner, Dataform Editor                                  |
| `dataform.workspaces.list`                     | List all workspaces                                     | Dataform Admin, Dataform Editor, Dataform Viewer, Code Creator, Code Editor, Code Owner, Code Viewer |
| `dataform.workspaces.makeDirectory`            | Create directories in a workspace                       | Dataform Admin, Code Editor, Code Owner, Dataform Editor                                  |
| `dataform.workspaces.pull`                     | Pull changes from a repository to a workspace           | Dataform Admin, Code Editor, Code Owner, Dataform Editor                                  |
| `dataform.workspaces.push`                     | Push changes from a workspace to a repository           | Dataform Admin, Code Editor, Code Owner, Dataform Editor                                  |
| `dataform.workspaces.queryDirectoryContents`   | List contents of a directory in a workspace             | Dataform Admin, Dataform Editor, Dataform Viewer, Code Creator, Code Editor, Code Owner, Code Viewer |
| `dataform.workspaces.readFile`                 | Read files in a workspace                               | Dataform Admin, Dataform Editor, Dataform Viewer, Code Creator, Code Editor, Code Owner, Code Viewer |
| `dataform.workspaces.writeFile`                | Write files in a workspace                              | Dataform Admin, Code Editor, Code Owner, Dataform Editor                                  |
| `iam.serviceAccounts.setIamPolicy`             | Set IAM policies for service accounts                   | Service Account Admin, Project IAM Admin                                                  |
| `resourcemanager.projects.get`                 | Get project details                                     | Viewer, Editor, Owner                                                                     |
| `resourcemanager.projects.getIamPolicy`        | Get IAM policies for projects                           | Security Reviewer, Project IAM Admin                                                     |
| `resourcemanager.projects.setIamPolicy`        | Set IAM policies for projects                           | Project IAM Admin, Owner                                                                  |
| `serviceusage.services.enable`                 | Enable GCP services                                     | Service Usage Admin, Owner                                                                |
| `serviceusage.services.list`                   | List available GCP services                             | Service Usage Consumer, Service Usage Admin                                               |
