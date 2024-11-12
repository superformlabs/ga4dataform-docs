/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'overview',
    'faq',
    {
      type: 'category',
      label: 'GA4 Dataform Documentation',
      items: [
        'ga4dataform-doc/getting-started',
        'ga4dataform-doc/project-architecture',
        'ga4dataform-doc/product-features',
        'ga4dataform-doc/permissions',
        'ga4dataform-doc/session-table-description',
        'ga4dataform-doc/event-table-description',
        'ga4dataform-doc/custom-configuration',
        'ga4dataform-doc/assertions',
        'ga4dataform-doc/support-contact',
      ],
    },
    {
      type: 'category',
      label: 'GA4 Dataform Guide',
      items: [
        'ga4dataform-guide/quick-installation-guide',
        'ga4dataform-guide/post-installation-guide',
      ],
    },
  ],
};

export default sidebars;


export default sidebars;
