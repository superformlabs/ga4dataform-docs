"use strict";(self.webpackChunkga_4_dataform=self.webpackChunkga_4_dataform||[]).push([[930],{9364:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=t(4848),r=t(8453);const i={title:"Project Architecture",description:"How is GA4Dataform organised in Dataform and BigQuery",sidebar_position:2,slug:"/project-architecture"},o=void 0,d={id:"ga4dataform-doc/project-architecture",title:"Project Architecture",description:"How is GA4Dataform organised in Dataform and BigQuery",source:"@site/docs/ga4dataform-doc/project-architecture.md",sourceDirName:"ga4dataform-doc",slug:"/project-architecture",permalink:"/docs/project-architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ga4dataform-doc/project-architecture.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Project Architecture",description:"How is GA4Dataform organised in Dataform and BigQuery",sidebar_position:2,slug:"/project-architecture"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Product Features",permalink:"/docs/product-features"}},a={},c=[{value:"Dataform Directories",id:"dataform-directories",level:2},{value:"Model Descriptions",id:"model-descriptions",level:2},{value:"JavaScript Files",id:"javascript-files",level:2},{value:"Dataform Repository Structure:",id:"dataform-repository-structure",level:2},{value:"BigQuery Output",id:"bigquery-output",level:2}];function l(e){const s={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"dataform-directories",children:"Dataform Directories"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Directory"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"definitions"})}),(0,n.jsx)(s.td,{children:"Contains all folders and files related to building models"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"core/01_sources"})}),(0,n.jsx)(s.td,{children:"Contains declarations.js and (future) staging models"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"core/02_intermediate"})}),(0,n.jsx)(s.td,{children:"Contains intermediate models"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"core/03_outputs"})}),(0,n.jsx)(s.td,{children:"Contains output models that should be used for downstream queries"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"core/assertions"})}),(0,n.jsx)(s.td,{children:"Contains all the assertions that check the data quality of our model"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"core/extra"})}),(0,n.jsx)(s.td,{children:"Contains any extra files that fulfill an individual purpose"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"definitions/custom"})}),(0,n.jsx)(s.td,{children:"Contains all the custom models that are not part of the core package"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"includes"})}),(0,n.jsx)(s.td,{children:"Contains all JS files with reusable variables and functions that help manage the repository"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"includes/core/documentation"})}),(0,n.jsx)(s.td,{children:"Contains the JSON files of table fields and descriptions of the output tables"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"includes/core/extra"})}),(0,n.jsx)(s.td,{children:"Contains all extra files that fulfill an individual purpose"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"includes/custom"})}),(0,n.jsxs)(s.td,{children:["Contains all JS files that can be used to customize your setup (",(0,n.jsx)(s.code,{children:"config.js"}),")"]})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"model-descriptions",children:"Model Descriptions"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Model"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"int_ga4_sessions"})}),(0,n.jsxs)(s.td,{children:["GA4 intermediate sessions table that incrementally queries ",(0,n.jsx)(s.code,{children:"ga4_events"})," table and creates session-level dimensions and metrics"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"ga4_events"})}),(0,n.jsx)(s.td,{children:"GA4 output events table that incrementally queries the raw GA4 export and applies partitioning, clustering, cleaning, and several fixes"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"ga4_sessions"})}),(0,n.jsx)(s.td,{children:"GA4 output sessions table that adds last non-direct click attribution and can be used for further transformations or aggregations"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"demo_daily_sessions_report"})}),(0,n.jsx)(s.td,{children:"Demo daily session aggregate table that can be connected Looker Studio for reporting"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"demo_diagnostics"})}),(0,n.jsx)(s.td,{children:"Demo diagnostics table that checks for several issues in the past 64 days"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"source_categories"})}),(0,n.jsxs)(s.td,{children:["Materializes the ",(0,n.jsx)(s.code,{children:"core/extra/source_categories.json"})," file into a table. Used for Default Channel Grouping"]})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"javascript-files",children:"JavaScript Files"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"File"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"core/default_config.js"})}),(0,n.jsxs)(s.td,{children:["Contains default configuration options that are used as a fallback if ",(0,n.jsx)(s.code,{children:"custom/config.js"})," is not populated"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"core/helpers.js"})}),(0,n.jsx)(s.td,{children:"Contains all helper functions that are used to produce SQL code for different use cases"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"custom/config.js"})}),(0,n.jsxs)(s.td,{children:["Contains all configuration options that can be used to customize how and what data gets queried. It will always take precedence over ",(0,n.jsx)(s.code,{children:"core/default_config.js"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"core/extra/source_categories.json"})}),(0,n.jsx)(s.td,{children:"Contains which source category a domain should be treated as. Used for Default Channel Grouping"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"dataform-repository-structure",children:"Dataform Repository Structure:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"definitions\n\u251c\u2500\u2500 core\n\u2502   \u251c\u2500\u2500 01_sources\n\u2502   \u2502   \u251c\u2500\u2500 declarations.js\n\u2502   \u251c\u2500\u2500 02_intermediate\n\u2502   \u2502   \u251c\u2500\u2500 int_ga4_sessions.sqlx\n\u2502   \u251c\u2500\u2500 03_outputs\n\u2502   \u2502   \u251c\u2500\u2500 ga4_events.sqlx\n\u2502   \u2502   \u251c\u2500\u2500 ga4_sessions.sqlx\n\u2502   \u251c\u2500\u2500 assertions\n\u2502   \u2502   \u251c\u2500\u2500 assertion_logs.sqlx\n\u2502   \u2502   \u251c\u2500\u2500 assertions_event_id_uniqueness.sqlx\n\u2502   \u2502   \u251c\u2500\u2500 assertions_session_duration_validity.sqlx\n\u2502   \u2502   \u251c\u2500\u2500 assertions_session_id_uniqueness.sqlx\n\u2502   \u2502   \u251c\u2500\u2500 assertions_sessions_validity.sqlx\n\u2502   \u2502   \u251c\u2500\u2500 assertions_tables_timeliness.sqlx\n\u2502   \u2502   \u251c\u2500\u2500 assertions_transaction_id_completeness.sqlx\n\u2502   \u2502   \u251c\u2500\u2500 assertions_user_pseudo_id_completeness.sqlx\n\u2502   \u251c\u2500\u2500 extra\n\u2502   \u2502   \u251c\u2500\u2500 ga4\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 source_categories.js\n\u251c\u2500\u2500 custom\n\u2502   \u251c\u2500\u2500 demo_daily_sessions_report.sqlx\n\u2502   \u251c\u2500\u2500 demo_diagnostics.sqlx\nincludes\n\u251c\u2500\u2500 core\n\u2502   \u251c\u2500\u2500 documentation\n\u2502   \u2502   \u251c\u2500\u2500 ga4_events.json\n\u2502   \u2502   \u251c\u2500\u2500 ga4_sessions.json\n\u2502   \u251c\u2500\u2500 extra\n\u2502   \u2502   \u251c\u2500\u2500 source_categories.json\n\u2502   \u251c\u2500\u2500 default_config.js\n\u2502   \u251c\u2500\u2500 helpers.js\n\u251c\u2500\u2500 custom\n\u2502   \u251c\u2500\u2500 config.js\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 workflow_settings.yaml\n"})}),"\n",(0,n.jsx)(s.h2,{id:"bigquery-output",children:"BigQuery Output"}),"\n",(0,n.jsx)(s.p,{children:"GA4Dataform produces tables to 3 datasets in BigQuery."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"superform_outputs_123456"}),": used for storing the output tables that should be used for downstream queries\n",(0,n.jsx)(s.strong,{children:"superform_quality_123456"}),": used for storing the quality control results (assertions)\n",(0,n.jsx)(s.strong,{children:"superform_transformations_123456"}),": used for storing the intermediate and staging tables that are used during the build process"]}),"\n",(0,n.jsx)(s.p,{children:"If you leave the default dataset names untouched, you will see the following structure:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"Dataform-package (project)\n\u251c\u2500\u2500 superform_outputs_123456 (dataset)\n\u2502   \u251c\u2500\u2500 demo_daily_sessions_report (tables)\n\u2502   \u251c\u2500\u2500 demo_diagnostics\n\u2502   \u251c\u2500\u2500 ga4_events\n\u2502   \u251c\u2500\u2500 ga4_sessions\n\u251c\u2500\u2500 superform_quality_123456\n\u2502   \u251c\u2500\u2500 assertion_logs\n\u2502   \u251c\u2500\u2500 assertions_event_id_uniqueness\n\u2502   \u251c\u2500\u2500 assertions_session_duration_validity\n\u2502   \u251c\u2500\u2500 assertions_session_id_uniqueness\n\u2502   \u251c\u2500\u2500 assertions_sessions_validity\n\u2502   \u251c\u2500\u2500 assertions_tables_timeliness\n\u2502   \u251c\u2500\u2500 assertions_transaction_id_completeness\n\u2502   \u251c\u2500\u2500 assertions_user_pseudo_id_completeness\n\u251c\u2500\u2500 superform_transformations_123456\n\u2502   \u251c\u2500\u2500 int_ga4_sessions\n\u2502   \u251c\u2500\u2500 source_categories\n"})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>d});var n=t(6540);const r={},i=n.createContext(r);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);