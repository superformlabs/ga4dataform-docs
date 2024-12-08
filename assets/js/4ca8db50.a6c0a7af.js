"use strict";(self.webpackChunkga_4_dataform=self.webpackChunkga_4_dataform||[]).push([[342],{3915:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=o(4848),i=o(8453);const r={title:"Dataform Basics",description:"The guide will guide you throught the basics of Dataform.",sidebar_position:5,slug:"/dataform-basics-guide"},n=void 0,a={id:"guides/dataform-basics-guide",title:"Dataform Basics",description:"The guide will guide you throught the basics of Dataform.",source:"@site/docs/4-guides/dataform-basics-guide.md",sourceDirName:"4-guides",slug:"/dataform-basics-guide",permalink:"/docs/dataform-basics-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/4-guides/dataform-basics-guide.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Dataform Basics",description:"The guide will guide you throught the basics of Dataform.",sidebar_position:5,slug:"/dataform-basics-guide"},sidebar:"tutorialSidebar",previous:{title:"Budget Alerts and Limit Quotas in Google Cloud Platform",permalink:"/docs/gcp-cost-control-guide"},next:{title:"Project Architecture",permalink:"/docs/project-architecture"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Check worflow execution",id:"check-worflow-execution",level:2},{value:"Check workflow execution after runnin GA4 installer",id:"check-workflow-execution-after-runnin-ga4-installer",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["This guide introduces the essential elements of the Dataform UI, tailored specifically for GA4Dataform users. If you are new to Dataform, we recommend starting with the ",(0,s.jsx)(t.strong,{children:"overview"})," section. If you\u2019re already familiar with the GA4Dataform interface, feel free to skip ahead to the sections that interest you."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"If you\u2019ve installed GA4Dataform, authorized data processing, and scheduled your workflow using the optional next steps, you can benefit from GA4Dataform without ever opening the Dataform interface (theoricaly!). However, if you\u2019re looking to customize GA4Dataform or are simply curious to learn more, this guide is here to help you."})}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"Dataform is seamlessly integrated into Google Cloud Platform (GCP), providing a user-friendly interface to manage your Dataform project (including GA4Dataform project). Here\u2019s how you can access Dataform from the GCP console:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Use the search bar"}),': Type "Dataform" into the search bar at the top of the console.']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Navigate via the menu"}),": Open the top-left burger menu, go to ",(0,s.jsx)(t.strong,{children:"BigQuery"}),' under "Products," and click on ',(0,s.jsx)(t.strong,{children:"Dataform"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"screenshot",src:o(144).A+"",width:"2882",height:"1528"})}),"\n",(0,s.jsxs)(t.p,{children:["When you open Dataform, you\u2019ll see a list of repositories\u2014these are essentially your projects. If you\u2019ve just installed GA4Dataform, you should find a repository named something like ",(0,s.jsx)(t.code,{children:"superform_analytics_*"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"screenshot",src:o(9108).A+"",width:"1628",height:"876"})}),"\n",(0,s.jsx)(t.p,{children:"Click on the repository you want to work on. Once inside, you\u2019ll find 4 main sections:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"screenshot",src:o(7372).A+"",width:"2890",height:"1190"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Development Workspaces"}),": Write your models and scripts, define data sources, set up lineage, configure table materialization and more..."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Workflow Execution Logs"}),": Track and review the execution history of your project."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Release and Scheduling"}),": Schedule when your BigQuery tables ared refreshed and manage project compilation settings."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Settings"}),": Configure project variables and connect your repository to GitHub."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This guide will take you through these sections to perform specific tasks and make the most of GA4Dataform."}),"\n",(0,s.jsx)(t.h2,{id:"check-worflow-execution",children:"Check worflow execution"}),"\n",(0,s.jsx)(t.p,{children:'In Dataform, a workflow defines the set of SQL queries that make up a data model. These queries are executed in a specific order to build tables in BigQuery. The complete execution of all these queries is referred to as a "workflow."'}),"\n",(0,s.jsx)(t.p,{children:"If you're not seeing the expected tables in BigQuery, or if tables appear incomplete, have missing dates, or other issues, the first thing to check is whether your workflows have been executed correctly and without errors."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"screenshot",src:o(6993).A+"",width:"2788",height:"1444"})}),"\n",(0,s.jsxs)(t.p,{children:["Above is an example of workflows executed over time. Some executions are marked in green, indicating success, while others are red, indicating errors. By examining the ",(0,s.jsx)(t.strong,{children:"Source"})," column, you can determine for eah row, whether a single model, an entire workspace, or a full workflow was executed. You can drill down into each execution to review the detailed execution of all the models of the workflow you have selected."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"screenshot",src:o(2260).A+"",width:"2822",height:"1394"})}),"\n",(0,s.jsx)(t.p,{children:"Lastly, by clicking on a specific query, you can access detailed information about its process and failure raisons is thee is one. This is particularly useful for troubleshooting when a model hasn\u2019t run as expected."}),"\n",(0,s.jsx)(t.h3,{id:"check-workflow-execution-after-runnin-ga4-installer",children:"Check workflow execution after runnin GA4 installer"}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.mdxAdmonitionTitle,{}),(0,s.jsxs)(t.p,{children:["This section is specifically for users who have authorized data processing for their historical GA4 data via the optional steps after using the GA4 installer. If you\u2019re new to Dataform, we recommend reviewing the previous ",(0,s.jsx)(t.strong,{children:"Overview"})," and ",(0,s.jsx)(t.strong,{children:"How to Check Workflow Execution"})," sections first."]})]}),"\n",(0,s.jsx)(t.p,{children:"If you\u2019re allowing GA4Dataform to process a relatively large GA4 dataset, running the Superform workflow may take several minutes, dozens of minutes, or even hours. If you can't see the table outputs in BigQuery, follow these steps to check your workflow execution:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Access Dataform."}),"\n",(0,s.jsxs)(t.li,{children:["Open the ",(0,s.jsx)(t.code,{children:"superform_analytics_*"})," repository."]}),"\n",(0,s.jsxs)(t.li,{children:["Navigate to the ",(0,s.jsx)(t.strong,{children:"Workflow Execution Logs"})," section."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"screenshot",src:o(3661).A+"",width:"2850",height:"480"})}),"\n",(0,s.jsxs)(t.p,{children:["If the workflow status is not green yet, you can click the ",(0,s.jsx)(t.strong,{children:"Refresh"})," button. Feel free to click it multiple times until the workflow completes successfully and turns green."]}),"\n",(0,s.jsxs)(t.p,{children:["Contact ",(0,s.jsx)(t.a,{href:"mailto:support@ga4dataform.com",children:"support@ga4dataform.com"})," if:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"You don\u2019t see any workflow execution logs."}),"\n",(0,s.jsx)(t.li,{children:"The workflow execution turns red."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7372:(e,t,o)=>{o.d(t,{A:()=>s});const s=o.p+"assets/images/dataform-main-ui-b8f49f576a85cc188bd671c88747ab2e.png"},9108:(e,t,o)=>{o.d(t,{A:()=>s});const s=o.p+"assets/images/dataform-repository-c1dbaff0218be2228879fcdf4dd0cbf4.png"},144:(e,t,o)=>{o.d(t,{A:()=>s});const s=o.p+"assets/images/gcp-basics-dataform-access-cbbd0c5ceedaf0ffbdf09841e9656e4d.png"},2260:(e,t,o)=>{o.d(t,{A:()=>s});const s=o.p+"assets/images/workflow-execution-details-e5f0ee36823b9d4fa12ec3cfe581c1e0.png"},6993:(e,t,o)=>{o.d(t,{A:()=>s});const s=o.p+"assets/images/workflow-execution-logs-1d2257531376b714abb96c094e1aa49b.png"},3661:(e,t,o)=>{o.d(t,{A:()=>s});const s=o.p+"assets/images/workflow-execution-validation-e4c8f1fbbe736464161f220689f36329.png"},8453:(e,t,o)=>{o.d(t,{R:()=>n,x:()=>a});var s=o(6540);const i={},r=s.createContext(i);function n(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);