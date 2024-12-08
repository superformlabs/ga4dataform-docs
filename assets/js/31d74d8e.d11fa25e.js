"use strict";(self.webpackChunkga_4_dataform=self.webpackChunkga_4_dataform||[]).push([[789],{5516:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=r(4848),i=r(8453);const a={title:"Hidden Configuration",description:"Showing which config options are hidden and why",sidebar_position:3,slug:"/hidden-configuration"},s=void 0,o={id:"product-features/hidden-configuration",title:"Hidden Configuration",description:"Showing which config options are hidden and why",source:"@site/docs/3-product-features/3-hidden-configuration.md",sourceDirName:"3-product-features",slug:"/hidden-configuration",permalink:"/docs/hidden-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3-product-features/3-hidden-configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Hidden Configuration",description:"Showing which config options are hidden and why",sidebar_position:3,slug:"/hidden-configuration"},sidebar:"tutorialSidebar",previous:{title:"Misattribution Fixes",permalink:"/docs/misattribution-fixes"},next:{title:"Assertions",permalink:"/docs/assertions"}},c={},d=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"There are several configuration settings that we maintain internally, primarily due to their specialized use cases."}),"\n",(0,t.jsx)(n.p,{children:"Click on each card below to see more details!"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Standard Event Parameters"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const CORE_PARAMS_ARRAY = [\r\n  // never remove, do not rename - this can break the core model\r\n\r\n  {\r\n      type: "string",\r\n      name: "ignore_referrer"\r\n  },\r\n  {\r\n      type: "int",\r\n      name: "ga_session_id"\r\n  },\r\n  {\r\n      type: "int",\r\n      name: "ga_session_number"\r\n  },\r\n  // and on and on\r\n];\n'})}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)("strong",{children:"Description"}),": Essential event parameters that are required for the core functionality of GA4Dataform. These parameters should never be removed or renamed as they are critical for features like session tracking and referral handling. Each parameter is strictly typed and serves a specific purpose in the data model."]})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Standard URL Parameters"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const URL_PARAMS_ARRAY = [\r\n  // url parameters to extract to own column\r\n\r\n  { name: "utm_marketing_tactic",cleaningMethod: lowerSQL},\r\n  { name: "utm_source_platform",cleaningMethod: lowerSQL },\r\n  { name: "utm_term",cleaningMethod: lowerSQL },\r\n  { name: "utm_content",cleaningMethod: lowerSQL },\r\n  { name: "utm_source",cleaningMethod: lowerSQL },\r\n  { name: "utm_medium",cleaningMethod: lowerSQL },\r\n  { name: "utm_campaign",cleaningMethod: lowerSQL },\r\n  { name: "utm_id",cleaningMethod: lowerSQL },\r\n  { name: "utm_creative_format",cleaningMethod: lowerSQL },\r\n\r\n  // gtm and ga\r\n  { name: "gtm_debug" },\r\n  { name: "_gl" }\r\n];\n'})}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)("strong",{children:"Description"}),": A predefined list of URL parameters that we extract and process from your website's URLs. This includes standard UTM parameters for campaign tracking, as well as Google Tag Manager and Google Analytics specific parameters. Each parameter can have an optional cleaning method (e.g., converting to lowercase) applied during extraction."]})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Click ID parsing from URL"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const CLICK_IDS_ARRAY = [\r\n// how to classify click ids (from collected_traffic_source) when there is no source/medium/campaign found?\r\n// (defaults should be fine)\r\n\r\n// name: from collected_traffic_source\r\n// medium and campaign: fill in with this value when needed (meaning: when found to be organic/referral)\r\n// note: we never overwrite MEDIUM, CAMPAIGN if explitly set. We only overwrite when campaign is "(organic)", "(referral)" or NULL\r\n{name:\'gclid\', source:"google", medium:"cpc", campaign: "(not set)", sources:["url","collected_traffic_source"] },\r\n{name:\'dclid\', source:"google", medium:"cpc", campaign: "(not set)", sources:["url","collected_traffic_source"] },\r\n{name:\'srsltid\', source:"google", medium:"organic", campaign: "Shopping Free Listings", sources:["url","collected_traffic_source"] },\r\n{name:\'gbraid\', source:"google",  medium:"cpc", campaign: "(not set)", sources:["url"]},\r\n{name:\'wbraid\', source:"google",  medium:"cpc", campaign: "(not set)", sources:["url"] },\r\n{name:\'msclkid\', source:"bing", medium:"cpc", campaign: "(not set)", sources:["url"] }\r\n];\n'})}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)("strong",{children:"Description"}),": Defines how different advertising click IDs (like Google Ads' gclid or Microsoft Ads' msclkid) should be interpreted when determining traffic sources. Each entry specifies default values for source, medium, and campaign that should be applied when these IDs are present but no explicit UTM parameters are set. This ensures consistent attribution across different advertising platforms."]})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"DATA_IS_FINAL_DAYS - Incrementality variable"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const DATA_IS_FINAL_DAYS = 3;\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"date_diff(current_date(), cast(event_date as date format 'YYYYMMDD'), day) > ${config.DATA_IS_FINAL_DAYS} as is_final\n"})}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)("strong",{children:"Description"}),': Defines how many days must pass before we consider GA4 data to be "final" (no longer subject to changes). This value is used in incremental processing to determine which data should be reprocessed. The default value is set to 3 days because GA4 Measurement Protocol allows hits to be sent up to 72 hours in the past.']})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var t=r(6540);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);