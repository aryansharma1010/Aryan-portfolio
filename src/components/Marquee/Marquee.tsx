const items = [
  'Performance Marketing',
  'CRM & Lifecycle',
  'Content & Social',
  'Brand Campaigns',
  'Growth',
  'Storytelling',
];

const doubled = [...items, ...items];

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
