'use client';
import { use3dTilt } from '@/hooks/use3dTilt';
import { work, getImgUrl } from '@/data/work';

export default function WorkGrid() {
  use3dTilt('.work-grid .card');

  return (
    <div className="wrap">
      <section id="work">
        <div className="sec-head reveal">
          <span className="sec-idx">03</span>
          <h2 className="sec-title">
            Selected <em>work</em>
          </h2>
        </div>
        <div className="work-grid">
          {work.map((w, i) => (
            <a key={w.f} className="card" href={w.u} target="_blank" rel="noopener">
              <div className="thumb">
                <span className="num-tag">{String(i + 1).padStart(2, '0')}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  loading="lazy"
                  decoding="async"
                  src={getImgUrl(w.f)}
                  alt={w.t}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <div className="meta">
                <div>
                  <h3>{w.t}</h3>
                  <div className="tags">{w.g}</div>
                </div>
                <span className="view">View ↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
