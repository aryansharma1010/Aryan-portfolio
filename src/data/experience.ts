export interface Job {
  when: string;
  now?: boolean;
  co: string;
  role: string;
  pts: string[];
}

export const xp: Job[] = [
  {
    when: 'Jul 2025 to Present',
    now: true,
    co: 'Revamp',
    role: 'Marketing Lead',
    pts: [
      'Lead 360° marketing for Golden Aces (gaming & entertainment) and Rajdarbar Realty.',
      'Headed The Agra Adventure Rally 2026, a housefull event with 3 sponsors, 8 influencers, and news + PR partners.',
      'Drove 2 Cr+ views Pan India across the campaign.',
    ],
  },
  {
    when: 'May 2024 to Jun 2025',
    co: 'Neofinity',
    role: 'Sr. Marketing Executive',
    pts: [
      'Owned growth & lifecycle for NeoZAP and NeoVault across Email, SMS, WhatsApp, Push & Social.',
      'Built CRM segmentation for 50K+ users and lifted conversion +25% via iterative A/B testing.',
      'Led GTM and gamification for NeoVault; benchmarked behaviour with SQL & Mixpanel.',
    ],
  },
  {
    when: 'Aug 2021 to May 2024',
    co: 'GeeksforGeeks',
    role: 'Social Media Executive',
    pts: [
      'Ran video & display campaigns: 5% avg CTR and 30M+ reach.',
      'Scaled the YouTube channel from 600K to 1.2M monthly views through SEO driven content.',
      'Grew the community +40% in engagement across Instagram & Discord; led ATL/BTL drives.',
    ],
  },
  {
    when: 'Aug 2020 to Aug 2021',
    co: 'boAt Lifestyle',
    role: 'Social Media Executive',
    pts: [
      "Led Instagram & YouTube for Red Gear (boAt's gaming brand) and Misfit.",
      'Drove product launch campaigns with influencer collaborations.',
      'Built marketing collaterals with creative teams and external agencies.',
    ],
  },
];
