export interface WorkItem {
  f: string;
  t: string;
  g: string;
  u: string;
}

export function getImgUrl(filename: string, width = 828): string {
  return `https://aryanportfoliogfg.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F${filename}&w=${width}&q=80`;
}

export const work: WorkItem[] = [
  { f: 'samsungEvent.1d6758df.jpeg', t: 'Samsung Galaxy Fold · Launch Event', g: 'Event · Brand Experience', u: 'https://www.behance.net/gallery/229601497/Samsung-Launch-Event-Planning' },
  { f: '3dMotion.1d4f2089.png', t: 'NeoZAP · 3D Motion Graphics', g: 'Motion · 3D · Branding', u: 'https://www.behance.net/gallery/227023855/3D-motion-Graphic-Branding-Videos-for-NeoZAP' },
  { f: 'CRMPoster.84b83269.jpeg', t: 'CRM Portfolio', g: 'CRM · Lifecycle · Funnels', u: 'https://www.behance.net/gallery/227664911/CRM-Portfolio' },
  { f: 'inAppBanners.732871a9.png', t: 'NeoZAP · In App Banner Videos', g: 'Motion · Product', u: 'https://www.behance.net/gallery/227022393/In-App-Banner-Videos-for-NeoZAP' },
  { f: 'emailers.9504eeb9.png', t: 'NeoZAP · Email Campaigns', g: 'Email · CRM · Design', u: 'https://www.behance.net/gallery/227022003/Emailers-for-NeoZAP' },
  { f: 'BrandingWorkForNeo.ccce963e.png', t: 'NeoZAP · Branding & Banners', g: 'Branding · Digital', u: 'https://www.behance.net/gallery/227021269/BrandingBanner-Work-for-NeoZAP' },
  { f: 'yeKesiBimariHai.c03c4e80.jpg', t: 'Branding Ads', g: 'Advertising · Creative', u: 'https://aryanportfoliogfg.vercel.app/work/brandingads' },
  { f: 'CreateTheNextBigApp.72493d7e.jpg', t: 'Product Ads', g: 'Product · Performance', u: 'https://aryanportfoliogfg.vercel.app/work/productads' },
  { f: 'Mario.482cfa6c.png', t: 'Mario Themed Campaign', g: 'Concept · Gaming', u: 'https://aryanportfoliogfg.vercel.app/work/marioads' },
  { f: 'GamingNostalgia.be302ff0.png', t: 'Gaming Nostalgia', g: 'Concept · Social', u: 'https://aryanportfoliogfg.vercel.app/work/gamingads' },
  { f: 'gfgGate.475a6360.png', t: 'GeeksforGeeks · Display Campaign', g: 'Performance · Display', u: 'https://aryanportfoliogfg.vercel.app/work/gfgdisplayads' },
  { f: 'campusMantri.4b42e021.png', t: 'Motion Graphic Ads', g: 'Motion · Campaign', u: 'https://aryanportfoliogfg.vercel.app/work/motiongraphicads' },
  { f: 'gfgReview.9299857b.jpg', t: 'GeeksforGeeks · Year in Review', g: 'Content · Editorial', u: 'https://aryanportfoliogfg.vercel.app/work/geekreview' },
  { f: 'geekdigest.dd19d7d9.png', t: 'Geeks Digest', g: 'Editorial · Strategy', u: 'https://aryanportfoliogfg.vercel.app/work/geekdigest' },
  { f: 'gfgInsta.3040a28f.png', t: 'GeeksforGeeks · Instagram', g: 'Social · Content', u: 'https://aryanportfoliogfg.vercel.app/work/geekinstagram' },
];
