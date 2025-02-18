"use strict";(self.webpackChunkga_4_dataform=self.webpackChunkga_4_dataform||[]).push([[316],{6596:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var o=s(4848),i=s(8453);const n={title:"FAQ & Known issues",description:"most common questions",sidebar_position:8,slug:"/faq"},a=void 0,r={id:"faq",title:"FAQ & Known issues",description:"most common questions",source:"@site/docs/8-faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/8-faq.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"FAQ & Known issues",description:"most common questions",sidebar_position:8,slug:"/faq"},sidebar:"tutorialSidebar",previous:{title:"Changelog",permalink:"/docs/changelog"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},c={},l=[{value:"FAQ",id:"faq",level:2},{value:"Known Issues",id:"known-issues",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"faq",children:"FAQ"}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:"How closely does GA4Dataform match the GA4 UI's Attribution logic?"}),(0,o.jsx)("p",{children:'GA4Dataform is designed to align closely with the GA4 UI, especially for properties that use the "Device-based" reporting identity. Here are some key details:'}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Channel Grouping:"})," The channel grouping logic in GA4Dataform matches closely with the GA4 UI, particularly for categories derived from common identifiers like ",(0,o.jsx)(t.code,{children:"source"}),", ",(0,o.jsx)(t.code,{children:"medium"}),", ",(0,o.jsx)(t.code,{children:"referrer"}),", and UTM parameters."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Limitations in Data Access:"}),' In some cases, GA4Dataform may differ slightly from the GA4 UI. For example, Google has additional insight into certain ad data, especially with Google Ads. When only autotagging is used, Google can distinguish between "Cross-network," "Paid Shopping," and "Paid Search," distinctions that are not fully visible in BigQuery data.']}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsxs)(t.strong,{children:[(0,o.jsx)(t.code,{children:"session_traffic_source_last_click"}),":"]})," For recent data, GA4 provides a ",(0,o.jsx)(t.code,{children:"session_traffic_source_last_click"})," column. You can use this Google-provided column for classification, ensuring consistency with Google's attribution logic."]}),"\n"]}),(0,o.jsx)("p",{children:"By leveraging these practices, GA4Dataform can achieve a close approximation to the GA4 UI's attribution, though some differences remain due to Google's proprietary data insights."})]}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:"Will my GA4 raw export table be impacted, affected, or updated by GA4Dataform?"}),(0,o.jsx)("p",{children:"No, your raw GA4 table remains untouched. GA4Dataform creates a new Dataform repository and a new dataset, so nothing will be overwritten."})]}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:"Can I use GA4Dataform with GA4 custom data collection?"}),(0,o.jsx)("p",{children:"GA4Dataform is specifically designed to model GA4 BigQuery export data. Consequently, it won't natively support custom schemas. However, you can explore our open-source version and adapt it to meet your specific needs."})]}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:"Does GA4Dataform get access to my data during or after installation?"}),(0,o.jsx)("p",{children:"We do not access your data during or after installation. We only check dataset sizes to estimate processing costs - this information is not stored on our servers."})]}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:"How can I uninstall GA4Dataform?"}),(0,o.jsxs)("p",{children:["We do not (yet) support an automated uninstallation of GA4Dataform. You will have to manually delete all the resources that are created in the Dataform repository including Releases, Workflows and Workspaces. For detailed steps, visit ",(0,o.jsx)(t.a,{href:"./quick-installation-guide#delete-dataform-repository",children:"delete Dataform repository"}),"."]})]}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:"Can I configure GA4Dataform to output tables to a different GCP project than my GA4 source data?"}),(0,o.jsx)("p",{children:"GA4Dataform currently requires both the source GA4 data and output tables to be in the same GCP project. To use GA4Dataform with a different project, you'll need to first migrate or copy your GA4 data to that project or use GA4Dataform Community."})]}),"\n",(0,o.jsx)(t.h2,{id:"known-issues",children:"Known Issues"}),"\n",(0,o.jsxs)(s,{children:[(0,o.jsx)("summary",{children:"Why is my Organic Search Traffic classified as Organic Shopping?"}),(0,o.jsxs)("p",{children:["Some users have reported that Google is appending auto-tagging parameters, such as ",(0,o.jsx)("code",{children:"srsltid"}),", to standard organic search listings. As a result, our model classifies this traffic as ",(0,o.jsx)("strong",{children:"Shopping Free Listings"})," because we follow the ",(0,o.jsx)("a",{href:"https://support.google.com/analytics/answer/11479699?hl=en",children:"default channel grouping"})," used in GA4."]})]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var o=s(6540);const i={},n=o.createContext(i);function a(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);