export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Results', href: '#results' },
  { label: 'Settings', href: '#settings' },
];

export const heroMetrics = [
  { label: 'CRM Total', value: '$476,500', valueClass: 'text-[#FFFFFF]' },
  { label: 'Ledger Total', value: '$425,500', valueClass: 'text-[#FFFFFF]' },
  { label: 'Discrepancy', value: '-$51,000', valueClass: 'text-[#FF6B6B]' },
  { label: 'Accounts', value: '4 of 4', valueClass: 'text-[#FFFFFF]' },
];

export const heroDiscrepancies = [
  { name: 'Acme Corp', crm: '$124,000', ledger: '$98,000', diff: '-$26,000', negative: true },
  { name: 'TechCo Inc', crm: '$87,500', ledger: '$87,500', diff: '$0', negative: false },
  { name: 'Global Ltd', crm: '$210,000', ledger: '$185,000', diff: '-$25,000', negative: true },
  { name: 'Nexus LLC', crm: '$55,000', ledger: '$55,000', diff: '$0', negative: false },
];

export const heroStats = [
  { value: '$2.4M', label: 'Avg revenue recovered per enterprise', width: 'w-[195.9375px]' },
  { value: '48h', label: 'Time to first discrepancy found', width: 'w-[161.640625px]' },
  { value: '99.9%', label: 'Audit coverage', width: 'w-[78.421875px]' },
];

export const integrations = [
  { name: 'Salesforce', width: 'w-[100px]' },
  { name: 'HubSpot', width: 'w-[89px]' },
  { name: 'Pipedrive', width: 'w-[93px]' },
  { name: 'Xero', width: 'w-[65px]' },
  { name: 'QuickBooks', width: 'w-[108px]' },
  { name: 'Sage', width: 'w-[68px]' },
  { name: 'NetSuite', width: 'w-[89px]' },
];

export const outcomesData = [
  {
    icon: '📊',
    title: 'Revenue Assurance',
    description: 'Automatically reconcile every deal in your CRM against your accounting ledger. Surface discrepancies before they become write-offs.',
    features: ['Real-time CRM sync', 'Ledger reconciliation', 'Automated alerts'],
  },
  {
    icon: '🔍',
    title: 'Fraud Assurance',
    description: 'Detect unusual booking patterns, split deals, and timing anomalies that indicate potential revenue manipulation or misrepresentation.',
    features: ['Pattern detection', 'Anomaly scoring', 'Audit trail'],
  },
  {
    icon: '✅',
    title: 'Compliance Assurance',
    description: 'Maintain SOX, ASC 606, and IFRS 15 compliance with continuous audit logs and revenue recognition validation.',
    features: ['SOX compliance', 'ASC 606 support', 'IFRS 15 ready'],
  },
];

export const discrepancyRows = [
  { deal: 'Enterprise Seat', crm: '$48,000', ledger: '$36,000', gap: '-$12,000', status: 'Flagged' },
  { deal: 'Pro License', crm: '$24,000', ledger: '$24,000', gap: '$0', status: 'Matched' },
  { deal: 'Add-on Module', crm: '$18,500', ledger: '$5,500', gap: '-$13,000', status: 'Flagged' },
  { deal: 'Support Tier', crm: '$8,000', ledger: '$8,000', gap: '$0', status: 'Matched' },
  { deal: 'Training Pack', crm: '$12,000', ledger: '$11,000', gap: '-$1,000', status: 'Warning' },
];

export const discrepancyCards = [
  {
    title: 'Methodology & Matching Engine',
    description:
      'Auditor Alpha uses fuzzy matching and semantic normalization to reconcile deal names across CRM and ledger systems, even when naming conventions differ.',
  },
  {
    title: 'Smart AI Detection',
    description:
      'Our ML model is trained on 14M+ revenue records to identify split deals, deferred revenue misclassifications, and common revenue recognition errors.',
  },
  {
    title: 'Forensic Rules',
    description:
      '100+ built-in audit rules covering timing, amount, account, and entity discrepancies. Fully configurable per your revenue recognition policy.',
  },
];
