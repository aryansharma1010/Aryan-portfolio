export interface Stat {
  num: string;
  hl?: boolean;
  lbl: string;
  src: string;
}

export const stats: Stat[] = [
  { num: '2 Cr+', hl: true, lbl: 'Views, Pan India', src: 'Agra Adventure Rally 2026 · PR + news partners' },
  { num: '50K+', lbl: 'Users segmented', src: 'CRM lifecycle journeys @ Neofinity' },
  { num: '+25%', hl: true, lbl: 'Conversion lift', src: 'Iterative A/B testing @ Neofinity' },
  { num: '5%', lbl: 'Avg CTR · 30M+ reach', src: 'Video & display campaigns @ GeeksforGeeks' },
  { num: '1.2M', lbl: 'Monthly YouTube views', src: 'Scaled from 600K via SEO @ GeeksforGeeks' },
  { num: '+40%', hl: true, lbl: 'Community engagement', src: 'Instagram & Discord @ GeeksforGeeks' },
];
