"use strict";(self.webpackChunkga_4_dataform=self.webpackChunkga_4_dataform||[]).push([[290],{6221:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(4848),t=n(8453);const o={title:"Configure Google Cloud Platform to run GA4Dataform installer",description:"checklist to make sure that Google Cloud Platform is correctly configured.",sidebar_position:1,slug:"/gcp-configuration-guide"},r=void 0,a={id:"guides/gcp-configuration-guide",title:"Configure Google Cloud Platform to run GA4Dataform installer",description:"checklist to make sure that Google Cloud Platform is correctly configured.",source:"@site/docs/5-guides/gcp-configuration-guide.md",sourceDirName:"5-guides",slug:"/gcp-configuration-guide",permalink:"/docs/gcp-configuration-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5-guides/gcp-configuration-guide.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Configure Google Cloud Platform to run GA4Dataform installer",description:"checklist to make sure that Google Cloud Platform is correctly configured.",sidebar_position:1,slug:"/gcp-configuration-guide"},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/docs/category/guides"},next:{title:"Quick Installation Guide",permalink:"/docs/quick-installation-guide"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Check Access Permissions",id:"check-access-permissions",level:2},{value:"Check Billing Status",id:"check-billing-status",level:2},{value:"Enable the Service Usage API",id:"enable-the-service-usage-api",level:2},{value:"Verify GA4 BigQuery Export Setup",id:"verify-ga4-bigquery-export-setup",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"This guide provides detailed instructions for configuring Google Cloud Platform (GCP) to ensure a seamless setup for the GA4Dataform installer. It is primarily designed for beginners, while advanced users should find it straightforward to meet the requirements outlined in the introduction without needing additional guidance."}),"\n",(0,s.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(i.p,{children:'GA4Dataform is a set of SQL models and JavaScripts designed to run within Dataform. It doesn\u2019t require a dedicated installation process\u2014connecting our repository with a Dataform repository is all it takes to "deploy" GA4Dataform.'}),"\n",(0,s.jsx)(i.p,{children:"However, to assist less technical users and save time for advanced users, we\u2019ve developed an installer. This installer simplifies the entire Dataform deployment and configuration process, including setting up repositories, workspaces, schedulers, and more."}),"\n",(0,s.jsx)(i.p,{children:"For the installer to work effectively, it requires certain permissions within a Google Cloud Project (GCP) and must meet specific prerequisites."}),"\n",(0,s.jsx)(i.p,{children:"This guide will walk you through the key steps to prepare before running GA4Dataform installer:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Checking access permissions."}),"\n",(0,s.jsx)(i.li,{children:"Enabling the Service Usage API."}),"\n",(0,s.jsx)(i.li,{children:"Verifying your GA4 BigQuery export."}),"\n",(0,s.jsx)(i.li,{children:"Confirming your billing status."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Each of these steps is detailed in the sections below."}),"\n",(0,s.jsx)(i.h2,{id:"check-access-permissions",children:"Check Access Permissions"}),"\n",(0,s.jsx)(i.p,{children:"Ensure that your account has the necessary permissions to run our installer."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Open the ",(0,s.jsxs)(i.a,{href:"https://console.cloud.google.com/iam-admin",children:[(0,s.jsx)(i.strong,{children:"IAM & Admin"})," page"]}),"."]}),"\n",(0,s.jsx)(i.li,{children:"Use the email filter to quickly locate your account."}),"\n",(0,s.jsxs)(i.li,{children:["Verify that your account has one of the following roles:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Viewer, Project IAM Admin, Service Usage Admin"}),"\n",(0,s.jsx)(i.li,{children:"Editor, Project IAM Admin"}),"\n",(0,s.jsx)(i.li,{children:"Owner\nOr custom role which has all permissions from permissions page."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Example of account with owner access\n",(0,s.jsx)(i.img,{alt:"screenshot",src:n(1488).A+"",width:"890",height:"332"})]}),"\n",(0,s.jsxs)(i.p,{children:["If your account lacks the required permissions, contact your GCP administrator to request access or reach us at\n",(0,s.jsx)(i.a,{href:"mailto:support@ga4dataform.com",children:"support@ga4dataform.com"})," for assistance."]}),"\n",(0,s.jsx)(i.h2,{id:"check-billing-status",children:"Check Billing Status"}),"\n",(0,s.jsx)(i.p,{children:"Ensure that your project has an active billing account."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Navigate to the ",(0,s.jsxs)(i.a,{href:"https://console.cloud.google.com/billing",children:[(0,s.jsx)(i.strong,{children:"Billing"})," page"]}),"."]}),"\n",(0,s.jsx)(i.li,{children:"Verify that you can access the billing overview page. If so, your billing account is active."}),"\n",(0,s.jsxs)(i.li,{children:["If you see a message stating \u201cThis project has no billing account,\u201d you need to activate your billing account. Check the ",(0,s.jsx)(i.a,{href:"https://cloud.google.com/billing/docs/how-to/modify-project.",children:(0,s.jsx)(i.strong,{children:"official google documentation"})})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"An active billing account is essential for BigQuery exports and other paid GCP services."}),"\n",(0,s.jsx)(i.admonition,{title:"BigQuery Cost",type:"warning",children:(0,s.jsx)(i.p,{children:"Creating a billing account won't directly generate any cost. However, using GA4Dataform will generate BigQuery costs, so please keep an eye on your Billing. We're not responsible for any charges that may come up."})}),"\n",(0,s.jsx)(i.h2,{id:"enable-the-service-usage-api",children:"Enable the Service Usage API"}),"\n",(0,s.jsxs)(i.p,{children:["Activate the ",(0,s.jsx)(i.strong,{children:"Service Usage API"})," to enable the GA4Dataform installer to function properly."]}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Open the ",(0,s.jsx)(i.a,{href:"https://console.cloud.google.com/marketplace/product/google/serviceusage.googleapis.com",children:(0,s.jsx)(i.strong,{children:"Service Usage API page"})}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Check if the API is enabled. If not, click the ",(0,s.jsx)(i.strong,{children:"Enable"})," button (typically blue and located near the top of the page)."]}),"\n",(0,s.jsxs)(i.li,{children:["Wait for the confirmation message indicating the API has been successfully enabled. Once activated, the button will change to ",(0,s.jsx)(i.strong,{children:"Disable"})," to indicate the API is enabled."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Before"}),"\n",(0,s.jsx)(i.img,{alt:"screenshot",src:n(3989).A+"",width:"1443",height:"646"})]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"After"}),"\n",(0,s.jsx)(i.img,{alt:"screenshot",src:n(5444).A+"",width:"793",height:"411"})]}),"\n",(0,s.jsx)(i.h2,{id:"verify-ga4-bigquery-export-setup",children:"Verify GA4 BigQuery Export Setup"}),"\n",(0,s.jsx)(i.p,{children:"Ensure that your GA4 property is properly linked to BigQuery."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Navigate to ",(0,s.jsx)(i.a,{href:"https://console.cloud.google.com/bigquery",children:(0,s.jsx)(i.strong,{children:"BigQuery"})})," from the GCP menu."]}),"\n",(0,s.jsx)(i.li,{children:"Look for a dataset named after your GA4 property."}),"\n",(0,s.jsxs)(i.li,{children:["Confirm that the dataset contains tables such as ",(0,s.jsx)(i.code,{children:"events_YYYYMMDD"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"screenshot",src:n(3895).A+"",width:"907",height:"605"})}),"\n",(0,s.jsx)(i.p,{children:"If the dataset or tables are missing, revisit the GA4 interface to ensure the BigQuery linking is correctly configured."}),"\n",(0,s.jsx)(i.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(i.p,{children:"Once you have validated all these steps, you're ready to run the GA4Dataform installer."}),"\n",(0,s.jsxs)(i.p,{children:["For further assistance, feel free to reach us at ",(0,s.jsx)(i.a,{href:"mailto:support@ga4dataform.com",children:"support@ga4dataform.com"}),"."]})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3895:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/bq_export-9861424a202034d0ba3bfa051973813c.png"},1488:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/iam-831dea55d45ec05d979d8b9fb99c5ab9.png"},5444:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/service_usage_api_after-eb2744894c6fc0e1d47a30377983d840.png"},3989:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/service_usage_api_before-3fadb6be7f6021df5220fbb83cba54b3.png"},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var s=n(6540);const t={},o=s.createContext(t);function r(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);