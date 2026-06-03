export interface Cap {
  h: string;
  t: string;
  d: string;
}

export interface CertOrEdu {
  b: string;
  s: string;
}

export const caps: Cap[] = [
  { h: '01', t: 'Performance Marketing', d: 'Google, Meta & LinkedIn Ads: ROI optimization, scaling, and user acquisition that pays back.' },
  { h: '02', t: 'CRM & Lifecycle', d: 'Email, Push, WhatsApp & SMS journeys: segmentation, onboarding, win back, and retention.' },
  { h: '03', t: 'Content & Social', d: 'Social strategy, SEO, scripting and community growth for brands, creators, and founders.' },
  { h: '04', t: 'Brand & Campaigns', d: '360° campaigns, ATL/BTL, launches and creative direction with a consistent brand voice.' },
];

export const tools: string[] = [
  'Meta Ads Manager', 'Google Ads', 'LinkedIn Ads', 'Google Analytics 4',
  'Google Tag Manager', 'HubSpot', 'CleverTap', 'Mailchimp',
  'WATI', 'GupShup', 'SQL', 'Mixpanel',
];

export const certs: CertOrEdu[] = [
  { b: 'Fundamentals of Digital Marketing', s: 'Google · 2021' },
  { b: 'Google Ads · Search', s: 'Google · Certified' },
  { b: 'Analytics Individual Qualification', s: 'Google · Certified' },
  { b: 'Content Marketing', s: 'LinkedIn Learning' },
  { b: 'Community Management', s: 'LinkedIn Learning' },
];

export const edu: CertOrEdu[] = [
  { b: 'Master of Business Management', s: 'NMIMS, Mumbai · 2024 to 2026' },
  { b: 'B.Tech', s: 'Graphic Era University · 2015 to 2019 · GPA 7.0' },
];
