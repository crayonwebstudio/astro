// Omnimerce site data. Content source: Omnimerce Website Content & SEO Master Draft (supplied by milan, 2026-10-21).
// SITE_URL is the single configuration point for the canonical domain. At production go-live on omnimerce.online,
// change this one constant (and public/robots.txt + public/sitemap.xml) and rebuild.
export const SITE_URL = 'https://astro.woodwolfdigital.com';

export const site = {
  name: 'Omnimerce',
  tagline: 'Commerce Without Complexity',
  positioning: 'AI-Powered Ecommerce Solutions',
  description: 'Connect ecommerce ERP, manufacturing, inventory, marketplaces and AI automation with tailored solutions built around your business.',
  email: 'hallo@omnimerce.online',
  ctaLabel: 'Discuss Your Project',
  ctaHref: '/contact/',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions/' },
  { label: 'Industries', href: '/industries/' },
  { label: 'Our Approach', href: '/our-approach/' },
  { label: 'Insights', href: '/insights/' },
  { label: 'About Us', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export type Block =
  | { type: 'text'; eyebrow?: string; h2: string; paras: string[]; image?: string; imageRatio?: 'wide' | 'std' | 'tall' }
  | { type: 'features'; eyebrow?: string; h2: string; intro?: string; items: { t: string; d: string }[]; image?: string }
  | { type: 'list'; eyebrow?: string; h2: string; intro?: string; items: string[] }
  | { type: 'steps'; eyebrow?: string; h2: string; intro?: string; items: { t: string; d?: string }[] };

export interface Solution {
  slug: string;
  name: string;
  title: string;
  metaDesc: string;
  h1: string;
  heroParas: string[];
  heroImage: string;
  heroCta: string;
  blocks: Block[];
  faq: { q: string; a: string }[];
  ctaH2: string;
  overview: { h2: string; intro: string; bullets: string[]; image: string; cta: string };
}

export const solutions: Solution[] = [
  {
    slug: 'ecommerce-erp-accounting',
    name: 'ERP & Accounting',
    title: 'Ecommerce ERP & Accounting Integration | Omnimerce',
    metaDesc: 'Connect ecommerce sales, purchasing, inventory and accounting with an ERP solution tailored to your business operations.',
    h1: 'ERP for ecommerce businesses that need connected operations.',
    heroParas: [
      'As your ecommerce business grows, spreadsheets and disconnected systems make it harder to maintain accurate product data, control stock and understand financial performance.',
      'Omnimerce helps implement and connect ERP workflows that bring purchasing, sales, inventory and accounting closer together.',
    ],
    heroImage: 'ERP interface showing products, stock valuation, sales orders, invoices and purchasing in a clean business dashboard.',
    heroCta: 'Discuss Your ERP Requirements',
    blocks: [
      {
        type: 'text', h2: 'Your business data should tell one consistent story.',
        paras: [
          'When orders, inventory, purchasing and accounting operate separately, teams spend time reconciling information instead of using it.',
          'We help identify the right source of truth for each business record, connect the relevant systems and establish workflows that reduce duplication.',
        ],
      },
      {
        type: 'features', h2: 'What we deliver',
        items: [
          { t: 'ERP implementation and configuration', d: 'Configure business processes, permissions, workflows and reporting around your operational requirements.' },
          { t: 'Sales and purchasing', d: 'Connect quotations, orders, purchase receipts, invoices and supplier workflows.' },
          { t: 'Product and customer data', d: 'Establish consistent product, SKU, variant, supplier and customer records.' },
          { t: 'Accounting integration', d: 'Connect sales, purchases, payments, expenses and reconciliation workflows, with tax requirements reviewed for the relevant jurisdiction.' },
          { t: 'Business reporting', d: 'Create useful views of sales, costs, stock valuation and operational performance.' },
        ],
        image: 'ERP dashboard with purchasing, sales, accounting and inventory sections visible together.',
      },
      {
        type: 'text', eyebrow: 'ERPNext expertise', h2: 'Build on a capable ERP foundation.',
        paras: [
          'Where suitable, Omnimerce can use ERPNext as the operational foundation for inventory, accounting, purchasing, sales and manufacturing.',
          'The implementation depends on your business requirements, existing systems and the functionality needed. Custom interfaces, integrations and workflows can be developed around the ERP where appropriate.',
        ],
      },
      {
        type: 'steps', h2: 'Implementation process',
        items: [
          { t: 'Review', d: 'Review your current processes and systems.' },
          { t: 'Define', d: 'Define the data model, responsibilities and integration points.' },
          { t: 'Configure', d: 'Configure the ERP and required workflows.' },
          { t: 'Migrate', d: 'Migrate and validate agreed data.' },
          { t: 'Test', d: 'Test representative business transactions.' },
          { t: 'Roll out', d: 'Support rollout and agreed improvements.' },
        ],
      },
    ],
    faq: [
      { q: 'Can ERPNext manage ecommerce operations?', a: 'ERPNext supports ERP functions including inventory, accounting, sales, purchasing and manufacturing. Ecommerce channel connectivity and specific workflows may require configuration or additional integrations.' },
      { q: 'Can you integrate our existing store with an ERP?', a: 'Yes, subject to the available APIs, data models and integration requirements.' },
      { q: 'Will we need to replace our accounting system?', a: 'Not necessarily. We assess whether integration, configuration or consolidation is the most practical option.' },
      { q: 'Can the ERP show profit per product?', a: 'It can support product-level profitability analysis when reliable product costs, fees, shipping costs, returns and revenue data are available.' },
    ],
    ctaH2: 'Build an ERP workflow that fits your business.',
    overview: {
      h2: 'Bring your business operations into focus.',
      intro: 'Connect sales, purchasing, accounting, inventory and operational reporting through an ERP solution configured around your processes.',
      bullets: ['ERP implementation and configuration', 'Accounting and financial workflows', 'Product, customer and supplier data', 'Purchasing and sales management', 'Reporting and business visibility', 'Integration with ecommerce channels'],
      image: 'ERP dashboard with sales, purchase, finance and inventory panels.',
      cta: 'Explore ERP & Accounting',
    },
  },
  {
    slug: 'manufacturing-inventory',
    name: 'Manufacturing & Inventory',
    title: 'Manufacturing & Inventory Solutions for Ecommerce | Omnimerce',
    metaDesc: 'Connect bills of materials, production, material costs, warehouses and ecommerce stock availability in one operational workflow.',
    h1: 'Connect manufacturing, inventory and ecommerce demand.',
    heroParas: [
      'When you manufacture or assemble products and sell them online, inventory is more than a stock count. You need to know what materials are available, what production requires, what products are ready to ship and what each item actually costs.',
      'Omnimerce helps connect manufacturing and inventory processes with your ecommerce operations.',
    ],
    heroImage: 'Small-to-medium manufacturing facility with raw materials, assembly workstations, finished goods and barcode-labeled storage.',
    heroCta: 'Discuss Manufacturing Automation',
    blocks: [
      {
        type: 'list', eyebrow: 'What we solve', h2: 'Know what you can make, what you can sell and what it costs.',
        items: [
          'Raw material availability is disconnected from production planning.',
          'Finished stock is not synchronized with online channels.',
          'Product costs do not reflect actual material or labour usage.',
          'Reordering depends on manual checks.',
          'Bundles and kits make stock calculations difficult.',
          'Returns and damaged goods create inventory discrepancies.',
        ],
      },
      {
        type: 'features', h2: 'Manufacturing capabilities',
        items: [
          { t: 'Bills of materials', d: 'Define materials, components and quantities required to produce each item.' },
          { t: 'Production workflows', d: 'Track work orders, production stages, material consumption and finished goods.' },
          { t: 'Product costing', d: 'Combine material costs, labour and applicable overheads to understand manufacturing cost.' },
          { t: 'Quality and wastage', d: 'Record inspection outcomes, material waste and rejected products where required.' },
          { t: 'Procurement planning', d: 'Use stock levels, supplier lead times and demand to support purchasing decisions.' },
        ],
      },
      {
        type: 'features', h2: 'Inventory capabilities',
        items: [
          { t: 'Central inventory', d: 'Maintain stock records across warehouses and locations.' },
          { t: 'Stock allocation', d: 'Calculate available stock after reservations, safety stock and other constraints.' },
          { t: 'Marketplace synchronization', d: 'Publish appropriate stock quantities to connected sales channels.' },
          { t: 'Barcode operations', d: 'Support scanning workflows for receiving, picking, packing and stock counts.' },
          { t: 'Replenishment', d: 'Generate purchasing recommendations using defined stock and demand rules.' },
        ],
        image: 'Inventory workflow showing available, reserved, damaged and in-transit stock categories.',
      },
      {
        type: 'steps', h2: 'Example workflow: a customer orders a manufactured product',
        items: [
          { t: 'Order received', d: 'The order enters the operational system.' },
          { t: 'Stock checked', d: 'Inventory is checked and reserved.' },
          { t: 'Requirement identified', d: 'If stock is insufficient, the system identifies the replenishment or production requirement.' },
          { t: 'Production', d: 'Production consumes the required materials.' },
          { t: 'Finished goods', d: 'Finished goods are recorded and made available for fulfilment.' },
          { t: 'Dispatch', d: 'The order is dispatched and the related transactions are updated.' },
        ],
      },
    ],
    faq: [
      { q: 'Can you support both manufactured and purchased products?', a: 'Yes. A business can manufacture some products, purchase others and assemble additional products from components.' },
      { q: 'Can inventory be synchronized across marketplaces?', a: 'Yes, where the required APIs and connector capabilities are available. Allocation rules and synchronization safeguards must be defined.' },
      { q: 'Can manufacturing costs be connected to ecommerce profitability?', a: 'Yes, provided the manufacturing costs and downstream selling expenses are captured consistently.' },
    ],
    ctaH2: 'Connect the factory floor to your online sales.',
    overview: {
      h2: 'Connect what you make, what you stock and what you sell.',
      intro: 'Improve visibility across raw materials, production, finished goods and stock availability. We help connect manufacturing workflows to ecommerce demand.',
      bullets: ['Bills of materials and production workflows', 'Material consumption and product costing', 'Inventory and warehouse management', 'Replenishment planning', 'Stock allocation across channels', 'Production and inventory reporting'],
      image: 'Manufacturing workflow from raw materials to assembly, finished product and warehouse stock.',
      cta: 'Explore Manufacturing Solutions',
    },
  },
  {
    slug: 'marketplace-integration',
    name: 'Marketplace Integrations',
    title: 'Ecommerce Marketplace Integration & Order Sync | Omnimerce',
    metaDesc: 'Connect Amazon, Flipkart, Shopify, WooCommerce and other supported channels with your ERP, inventory and order workflows.',
    h1: 'Manage multiple ecommerce channels without multiplying manual work.',
    heroParas: [
      'Selling across marketplaces and your own store can expand your reach. But every additional channel creates another place to manage product listings, stock quantities, prices, orders and returns.',
      'Omnimerce designs marketplace integrations that connect your channels with your operational systems.',
    ],
    heroImage: 'Multiple ecommerce channel interfaces connected to a central product, inventory and order management dashboard.',
    heroCta: 'Discuss Marketplace Integration',
    blocks: [
      {
        type: 'features', h2: 'Connect your channels',
        items: [
          { t: 'Marketplace connectors', d: 'Integrate supported marketplaces such as Amazon and Flipkart, subject to API access, account eligibility and business requirements.' },
          { t: 'Store integrations', d: 'Connect platforms such as Shopify and WooCommerce with your product, order and inventory workflows.' },
          { t: 'ERP integration', d: 'Connect ecommerce activity to ERP and accounting systems, with defined ownership of key records.' },
          { t: 'Shipping and fulfilment', d: 'Connect supported shipping providers and fulfilment workflows where required.' },
        ],
        image: 'Integration diagram with Amazon, Flipkart, Shopify, WooCommerce, ERP and shipping systems around a central integration layer.',
      },
      {
        type: 'features', h2: 'What the integration covers',
        items: [
          { t: 'Product synchronization', d: 'Map SKUs, variants, attributes, titles, descriptions, images and channel-specific listing fields.' },
          { t: 'Inventory synchronization', d: 'Publish available quantities based on stock, reservations, safety stock and channel allocation rules.' },
          { t: 'Order synchronization', d: 'Bring orders into the operational system while preserving external identifiers and order status.' },
          { t: 'Fulfilment updates', d: 'Transmit shipment and tracking information to supported channels.' },
          { t: 'Returns and refunds', d: 'Connect return and refund events to the relevant operational and financial workflows.' },
          { t: 'Settlement reconciliation', d: 'Use available settlement data to reconcile payouts, fees, refunds and related financial records.' },
        ],
      },
      {
        type: 'list', eyebrow: 'Reliability matters', h2: 'Integrations should be recoverable, not mysterious.',
        intro: 'A successful integration must handle more than the normal transaction. We design for:',
        items: ['API rate limits and pagination.', 'Duplicate events and safe retries.', 'Failed synchronization jobs.', 'Mapping and validation errors.', 'Token renewal and credential management.', 'Monitoring and reconciliation.', 'Clear error messages and recovery procedures.'],
        image: undefined,
      },
      {
        type: 'steps', h2: 'How we implement integrations',
        items: [
          { t: 'Map', d: 'Map systems and data ownership.' },
          { t: 'Document', d: 'Document the required events and data fields.' },
          { t: 'Design', d: 'Design mapping, synchronization and conflict rules.' },
          { t: 'Implement', d: 'Implement and test the connector.' },
          { t: 'Validate', d: 'Validate with representative orders and products.' },
          { t: 'Deploy', d: 'Deploy with monitoring and recovery procedures.' },
        ],
      },
    ],
    faq: [
      { q: 'Which marketplaces can you integrate?', a: "The exact options depend on the marketplace's APIs, account permissions and the required workflows. Amazon and Flipkart are initial candidates, with other supported channels assessed project by project." },
      { q: 'Can the integration update inventory automatically?', a: 'Yes, where the relevant APIs and workflows support it. Safe allocation rules, monitoring and error handling are essential.' },
      { q: 'Can one SKU connect to different marketplace listings?', a: 'Yes. A canonical product can map to multiple external listings, each with its own identifier, attributes, pricing and listing content.' },
      { q: 'Can you integrate a custom ecommerce website?', a: 'Yes, where a suitable API or another maintainable integration method is available.' },
    ],
    ctaH2: "Let's connect your ecommerce channels.",
    overview: {
      h2: 'Keep your products, orders and inventory connected.',
      intro: "Managing multiple channels shouldn't require maintaining multiple versions of the same business data. We connect stores, marketplaces and operational systems with clearly defined synchronization rules.",
      bullets: ['Product and variant mapping', 'Inventory and price synchronization', 'Order ingestion and fulfilment updates', 'Returns and refund workflows', 'Settlement and fee reconciliation', 'Integration monitoring and error recovery'],
      image: 'Connected marketplace and storefront icons linked to a central ERP and inventory system.',
      cta: 'Explore Marketplace Integrations',
    },
  },
];

solutions.push(
  {
    slug: 'ai-product-content',
    name: 'AI Product Content',
    title: 'AI Product Content & Image Generation for Ecommerce | Omnimerce',
    metaDesc: 'Streamline ecommerce product descriptions, marketplace listings, SEO metadata and AI-assisted product imagery with controlled workflows.',
    h1: 'Create better product content with AI-powered workflows.',
    heroParas: [
      'Launching products across multiple ecommerce channels takes time. Every listing needs accurate information, compelling descriptions, suitable images and channel-specific formatting.',
      'Omnimerce helps build AI-assisted workflows that turn reliable product data into consistent content at scale.',
    ],
    heroImage: 'A clean product content studio showing one original product photo and multiple approved outputs: studio image, lifestyle image, close-up and dimension infographic.',
    heroCta: 'Discuss Your AI Content Workflow',
    blocks: [
      {
        type: 'features', h2: 'What you can generate',
        items: [
          { t: 'Product descriptions', d: 'Generate clear, customer-focused copy based on verified product information.' },
          { t: 'Marketplace listings', d: 'Prepare channel-specific titles, bullet points, descriptions and attribute suggestions.' },
          { t: 'Product imagery', d: 'Create studio-style backgrounds, approved lifestyle compositions and supporting product visuals.' },
          { t: 'SEO metadata', d: 'Generate proposed meta titles, descriptions, image alt text and product FAQs.' },
          { t: 'Dimension graphics', d: 'Prepare dimension-led graphics from verified measurements and specified units.' },
          { t: 'Localized content', d: 'Adapt content for different languages and markets while maintaining product facts and brand terminology.' },
        ],
        image: 'Four content outputs for the same physical product, showing studio photography, lifestyle photography, a detail crop and a dimension graphic.',
      },
      {
        type: 'steps', eyebrow: 'Product identity comes first', h2: 'AI should improve the presentation, not change the product.',
        intro: undefined,
        items: [
          { t: 'Start verified', d: 'Start with approved source images and product data.' },
          { t: 'Generate', d: 'Generate the requested content or image variation.' },
          { t: 'Validate', d: 'Validate factual details and visual consistency.' },
          { t: 'Review', d: 'Review outputs against channel requirements.' },
          { t: 'Approve and publish', d: 'Approve and publish the final assets.' },
          { t: 'Track versions', d: 'Store versions and track where approved content is used.' },
        ],
      },
      {
        type: 'text', h2: 'Move from one-off generation to a repeatable process.',
        paras: [
          'For large catalogues, the workflow can support queued jobs, reusable brand rules, content templates, approval statuses, cost tracking and controlled publication.',
          'This helps teams process many SKUs without treating every product as an entirely separate manual project.',
        ],
      },
      {
        type: 'list', h2: 'Brand and quality controls',
        items: ['Approved tone of voice and terminology.', 'Required product facts and prohibited claims.', 'Channel-specific content limits.', 'Image dimension and format requirements.', 'Version history and approval status.', 'Human review for important factual or visual changes.'],
      },
    ],
    faq: [
      { q: 'Can AI generate product images from existing photographs?', a: 'Yes, suitable models can create edited or contextualized images from reference photographs. Results vary, so product identity and visual accuracy should be checked before publication.' },
      { q: 'Can product content be generated in bulk?', a: 'Yes. A suitable workflow can process product records in batches, subject to the chosen models, API limits, review requirements and budget.' },
      { q: 'Can AI generate marketplace-specific descriptions?', a: 'Yes. The workflow can apply different structures, field requirements and content rules to each supported channel.' },
      { q: 'Will AI content automatically improve rankings?', a: 'Not automatically. Search performance depends on relevance, usefulness, technical implementation, competition and many other factors. AI-generated content should be reviewed for accuracy and value.' },
    ],
    ctaH2: 'Turn your product data into a repeatable content workflow.',
    overview: {
      h2: 'Create product content more efficiently.',
      intro: 'Develop a repeatable workflow for product descriptions, marketplace listings, SEO metadata and AI-assisted product imagery.',
      bullets: ['Product descriptions and listing copy', 'Channel-specific content generation', 'Product image editing and lifestyle imagery', 'Dimension graphics from verified specifications', 'Bulk content workflows', 'Review, approval and publishing'],
      image: 'Original product image next to approved lifestyle, close-up and dimension graphic variations.',
      cta: 'Explore AI Product Content',
    },
  },
  {
    slug: 'marketing-automation',
    name: 'Marketing Automation',
    title: 'Ecommerce Social Media & Marketing Automation | Omnimerce',
    metaDesc: 'Connect product data, AI-assisted content creation, social media scheduling and campaign reporting in a more efficient workflow.',
    h1: 'Turn your product catalogue into coordinated marketing.',
    heroParas: [
      'Your product catalogue contains the raw material for social posts, seasonal campaigns, product launches and promotional content. The challenge is turning that information into consistent, useful communication.',
      'Omnimerce helps connect product information, AI-assisted creative workflows, publishing tools and performance reporting.',
    ],
    heroImage: 'A content calendar with product photos, post drafts, publishing dates and campaign status labels.',
    heroCta: 'Discuss Marketing Automation',
    blocks: [
      {
        type: 'features', h2: 'What we can automate',
        items: [
          { t: 'Content planning', d: 'Organize product launches, seasonal campaigns and recurring content themes.' },
          { t: 'AI-assisted copywriting', d: 'Prepare captions, hashtags, campaign text and platform-specific variations.' },
          { t: 'Creative production', d: 'Reuse approved product imagery and create suitable creative variations.' },
          { t: 'Scheduling and publishing', d: 'Connect supported social platforms and scheduling workflows using available official APIs and account permissions.' },
          { t: 'Campaign reporting', d: 'Bring available engagement, traffic and conversion data into useful reports.' },
        ],
        image: 'Weekly social content planner showing approved posts across Instagram, Facebook, Pinterest and LinkedIn, with format and status labels.',
      },
      {
        type: 'steps', h2: 'An example workflow',
        items: [
          { t: 'Select', d: 'Select a product or campaign.' },
          { t: 'Retrieve', d: 'Retrieve verified product information and approved assets.' },
          { t: 'Generate', d: 'Generate proposed posts for the selected platforms.' },
          { t: 'Review', d: 'Review and approve the content.' },
          { t: 'Schedule', d: 'Schedule publication where supported.' },
          { t: 'Measure', d: 'Collect available performance data.' },
          { t: 'Improve', d: 'Use the results to improve future campaigns.' },
        ],
      },
      {
        type: 'text', h2: 'Keep the brand consistent.',
        paras: ['Define brand voice, approved terminology, visual guidelines, promotional rules and review responsibilities. This helps AI-generated content remain consistent with your business and avoids unsupported product claims.'],
      },
    ],
    faq: [
      { q: 'Can posts be generated automatically from products?', a: 'Yes. Product data and approved assets can be used to prepare draft posts, subject to your workflow and content rules.' },
      { q: 'Can all social networks be scheduled through one integration?', a: 'Not always. Publishing features, account eligibility and API permissions vary by platform.' },
      { q: 'Can the system report sales from social media?', a: 'It can report the sales and conversions supported by connected analytics, campaign tracking and attribution data. The completeness of that reporting depends on the data available.' },
    ],
    ctaH2: 'Make marketing easier to plan, produce and measure.',
    overview: {
      h2: 'Turn product information into coordinated campaigns.',
      intro: 'Connect product data, approved content and campaign workflows to make social media and marketing execution more consistent.',
      bullets: ['Social content planning', 'Product-led campaign creation', 'Caption and creative generation', 'Social media scheduling', 'Publishing workflow integrations', 'Campaign performance reporting'],
      image: 'Content calendar showing scheduled product campaigns and creative approval statuses.',
      cta: 'Explore Marketing Automation',
    },
  },
  {
    slug: 'ecommerce-seo',
    name: 'Ecommerce SEO',
    title: 'Ecommerce SEO, AI Search Visibility & Analytics | Omnimerce',
    metaDesc: 'Improve ecommerce technical SEO, product content, Google search performance, AI search visibility and conversion measurement.',
    h1: 'Turn ecommerce search data into meaningful improvements.',
    heroParas: [
      'Search visibility depends on more than keywords. Your site structure, product content, technical health, internal linking, user experience and measurement all influence how effectively your store serves customers and appears in search.',
      'Omnimerce helps identify issues, prioritize improvements and connect SEO work to business outcomes.',
    ],
    heroImage: 'SEO dashboard showing search performance, technical audit issues, product page recommendations and organic conversion metrics.',
    heroCta: 'Discuss Your SEO Strategy',
    blocks: [
      {
        type: 'list', h2: 'Technical SEO',
        intro: 'Improve the technical foundations that help search engines discover and understand your website.',
        items: ['Crawlability and indexability checks.', 'XML sitemap and robots.txt review.', 'Canonical and redirect validation.', 'Broken link detection.', 'Duplicate and thin content identification.', 'Core Web Vitals and performance review.', 'Structured data validation.'],
      },
      {
        type: 'list', h2: 'Product and category SEO',
        intro: 'Improve the pages that help customers discover and evaluate your products.',
        items: ['Product title and meta description recommendations.', 'Category structure and internal linking.', 'Product descriptions and buying guidance.', 'Image alt text and media optimization.', 'Product and breadcrumb structured data.', 'Duplicate content and variant handling.'],
      },
      {
        type: 'text', eyebrow: 'SEO performance dashboard', h2: 'Understand what is working and what needs attention.',
        paras: [
          'Connect available search and analytics data to track organic clicks and impressions, search click-through rate and average position, indexed and excluded pages, organic landing-page performance, product and category page conversions, technical issues by severity, and completed fixes with subsequent performance changes.',
          'Use official data sources where available and licensed providers where additional keyword or competitor data is required.',
        ],
        image: 'Product page optimization panel showing a product image, title, metadata fields, structured data status and improvement checklist.',
      },
      {
        type: 'text', eyebrow: 'AEO and GEO', h2: 'Make your content easier to understand, retrieve and reference.',
        paras: [
          'Answer Engine Optimization (AEO) focuses on making useful answers easy to extract. Generative Engine Optimization (GEO) focuses on improving how your brand and content can be understood and referenced in AI-generated responses.',
          'We help establish clear service and product descriptions, useful question-and-answer content, consistent business information, descriptive headings and well-structured pages.',
          'No implementation can guarantee inclusion in a particular AI answer or search result.',
        ],
      },
      {
        type: 'text', eyebrow: 'Search experience', h2: 'SEO that connects to conversion.',
        paras: ['Traffic is only one part of performance. We also review whether visitors can understand your products, compare options, find important information and complete the next step. This can include page clarity, navigation, product information, mobile usability, calls to action and conversion measurement.'],
      },
    ],
    faq: [
      { q: 'Can you audit our entire ecommerce store?', a: 'Yes. The scope depends on the store size, platform, crawl requirements and the data sources available.' },
      { q: 'Can AI automatically fix SEO issues?', a: 'AI can help identify issues and prepare proposed fixes. Changes should be validated and reviewed before publication, especially when they affect URLs, indexing, templates or structured data.' },
      { q: 'Can you monitor AI search visibility?', a: 'Available tracking options depend on the sources and tools used. AI search results can be variable, so reporting should explain what was measured and its limitations.' },
      { q: 'Can SEO work be connected to revenue?', a: 'Where reliable analytics, consent and conversion data are available, organic landing pages can be evaluated against conversions and revenue. Attribution remains imperfect and should be interpreted carefully.' },
    ],
    ctaH2: 'Build an SEO process that leads to measurable improvements.',
    overview: {
      h2: 'Make search visibility measurable and actionable.',
      intro: 'Improve technical SEO, product page content, site structure and search performance reporting. Connect search insights to practical improvement work.',
      bullets: ['Technical SEO audits', 'Product and category page optimization', 'Search Console and analytics integration', 'Keyword and content opportunity research', 'SEO issue prioritization', 'Organic traffic and conversion reporting'],
      image: 'SEO dashboard with a crawl issue list, search performance chart and product page opportunities.',
      cta: 'Explore Ecommerce SEO',
    },
  },
  {
    slug: 'custom-integrations',
    name: 'Custom Integrations',
    title: 'Custom Ecommerce Integrations & Workflow Automation | Omnimerce',
    metaDesc: 'Connect ecommerce APIs, ERP systems, marketplaces and business applications with custom integrations and reliable automation workflows.',
    h1: 'Connect the systems your business depends on.',
    heroParas: [
      'Every business has its own combination of software, data and operational rules. When standard integrations do not cover the complete workflow, custom development can connect the missing pieces.',
      'Omnimerce designs integrations and automation around your systems, requirements and operational constraints.',
    ],
    heroImage: 'Clean integration architecture showing business applications exchanging data through a central API and automation layer.',
    heroCta: 'Discuss a Custom Integration',
    blocks: [
      {
        type: 'list', h2: 'What we build',
        items: ['API integrations between ecommerce platforms and ERP systems.', 'Custom product and order synchronization.', 'Data transformation and migration workflows.', 'Automated notifications and operational tasks.', 'AI-assisted business processes.', 'Integration monitoring and exception handling.', 'Custom dashboards and reporting interfaces.'],
      },
      {
        type: 'text', eyebrow: 'Designed for reliability', h2: 'A useful integration must handle failures as carefully as successful transactions.',
        paras: ['We consider authentication, permissions, validation, rate limits, idempotency, retry logic, monitoring, reconciliation and audit history as part of the implementation.'],
        image: 'Integration monitoring screen with event logs, timestamps, retry status and an error detail panel.',
      },
      {
        type: 'steps', h2: 'How we approach a project',
        items: [
          { t: 'Understand', d: 'Map the current systems and the problem to solve.' },
          { t: 'Design', d: 'Define data ownership, API contracts, events and failure scenarios.' },
          { t: 'Build', d: 'Implement the integration and required automation.' },
          { t: 'Validate', d: 'Test normal cases, exceptions, retries and data consistency.' },
          { t: 'Operate', d: 'Deploy with appropriate monitoring and documentation.' },
        ],
      },
    ],
    faq: [
      { q: 'Can you connect software that does not have a ready-made connector?', a: 'Potentially, if the software exposes an appropriate API, export mechanism or other maintainable integration method.' },
      { q: 'Can you automate existing manual processes?', a: 'Yes. We first map the process, identify exceptions and determine which steps can be automated safely.' },
      { q: 'Can the integration be maintained as APIs change?', a: 'We can design for monitoring, documentation and maintainability, with ongoing support agreed as part of the project.' },
    ],
    ctaH2: 'Tell us which systems need to work together.',
    overview: {
      h2: 'Connect the systems that make your business work.',
      intro: 'When off-the-shelf connectors do not cover your requirements, custom integrations and workflow development can bridge the gap. We assess APIs, data models, business rules and exception handling to create integrations that fit your operations.',
      bullets: [],
      image: 'Technical but approachable integration architecture connecting ERP, marketplace, warehouse, shipping and analytics systems.',
      cta: 'Discuss a Custom Integration',
    },
  },
);

export interface Industry {
  slug: string;
  name: string;
  title: string;
  metaDesc: string;
  h1: string;
  heroParas: string[];
  heroImage: string;
  heroCta: string;
  challenges?: string[];
  improve?: string[];
  approachParas: string[];
  capabilities?: string[];
  faq: { q: string; a: string }[];
  ctaH2: string;
  cardText: string;
  cardCta: string;
}

export const industries: Industry[] = [
  {
    slug: 'ecommerce-manufacturers',
    name: 'Manufacturers',
    title: 'Ecommerce Solutions for Manufacturers | Omnimerce',
    metaDesc: 'Connect manufacturing, BOMs, inventory, product costing and marketplace operations with ecommerce technology solutions.',
    h1: 'Connect production to your ecommerce business.',
    heroParas: ['Manufacturers selling online must coordinate materials, production schedules, finished goods, product data and customer orders. When these processes operate separately, stock shortages, delays and unclear costs become harder to manage.', 'Omnimerce helps connect manufacturing workflows with ERP, inventory and ecommerce channels.'],
    heroImage: 'Manufacturer assembling physical products while a production and stock dashboard is visible in the background.',
    heroCta: 'Discuss a Manufacturing Project',
    challenges: ['Production planning relies on disconnected spreadsheets.', 'Raw material consumption is difficult to reconcile.', 'Finished goods are not synchronized with marketplace stock.', 'Product costs do not reflect actual production.', 'Product information must be maintained across multiple channels.'],
    approachParas: ['We assess your manufacturing model, product structures, purchasing processes, inventory locations and sales channels. Then we identify the appropriate ERP workflows, integrations and automation opportunities.'],
    capabilities: ['Bills of materials and work orders.', 'Raw material and finished-goods inventory.', 'Supplier and purchasing workflows.', 'Product cost and margin reporting.', 'Marketplace product and stock synchronization.', 'AI-assisted product content and imagery.'],
    faq: [
      { q: 'Can this support made-to-order products?', a: 'Potentially, depending on production planning, lead times, stock allocation and the required customer-order workflow.' },
      { q: 'Can it support both wholesale and direct-to-consumer sales?', a: 'Yes, where the required pricing, inventory and order workflows are included in the implementation.' },
    ],
    ctaH2: 'Connect what you manufacture with what you sell.',
    cardText: 'Connect production planning, materials, product costs, inventory and online sales.',
    cardCta: 'Manufacturing Solutions',
  },
  {
    slug: 'multichannel-ecommerce',
    name: 'Multichannel sellers',
    title: 'Multichannel Ecommerce Operations & Inventory Solutions | Omnimerce',
    metaDesc: 'Connect marketplace orders, inventory, product listings and fulfilment for growing multichannel ecommerce businesses.',
    h1: 'Run multiple sales channels with greater control.',
    heroParas: ['Every new sales channel creates additional opportunities, but it also adds operational complexity. Product listings, pricing, inventory, orders and returns must remain coordinated.', 'Omnimerce helps connect your sales channels with the systems behind your business.'],
    heroImage: 'Ecommerce operator reviewing orders and stock levels across several sales channels on a central dashboard.',
    heroCta: 'Discuss Your Channels',
    improve: ['Central product and SKU management.', 'Inventory allocation and synchronization.', 'Order ingestion and fulfilment workflows.', 'Product listing mapping.', 'Returns and refund processes.', 'Settlement and fee reconciliation.', 'Performance reporting across channels.'],
    approachParas: ['We review your current channels, ERP, inventory model and order workflows. We then define data ownership and synchronization rules before implementing the necessary integrations.'],
    faq: [
      { q: 'Can I manage different listings for the same product?', a: 'Yes. A central product can be mapped to channel-specific listings with their own identifiers and content.' },
      { q: 'Can stock be allocated differently across channels?', a: 'Yes. Allocation rules can account for available stock, safety stock, reservations and business priorities.' },
    ],
    ctaH2: 'Simplify your multichannel operations.',
    cardText: 'Manage product records, inventory and orders across supported marketplaces and storefronts.',
    cardCta: 'Marketplace Solutions',
  },
];

export const industryCardsExtra = [
  { name: 'Wholesale and distribution', text: 'Connect purchasing, supplier information, warehouse operations and order processing.', cta: 'Operations Solutions', href: '/solutions/ecommerce-erp-accounting/' },
  { name: 'Ecommerce brands', text: 'Streamline product content, digital merchandising, SEO and campaign workflows.', cta: 'AI & Growth Solutions', href: '/solutions/ai-product-content/' },
  { name: 'Agencies and multi-store operators', text: 'Improve catalogue operations, reporting and repeatable workflows across multiple stores or clients.', cta: 'Discuss Multi-Store Operations', href: '/contact/' },
];
