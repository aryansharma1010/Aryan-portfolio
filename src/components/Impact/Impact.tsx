'use client';
import { useCountUp } from '@/hooks/useCountUp';
import { stats } from '@/data/impact';

export default function Impact() {
  useCountUp('.stat .num, .ft-stat .n');

  return (
    <div className="wrap">
      <section id="impact">
        <div className="sec-head reveal">
          <span className="sec-idx">02</span>
          <h2 className="sec-title">
            Impact<em>, the numbers that moved</em>
          </h2>
        </div>
        <div className="impact-grid reveal">
          {stats.map((s, i) => (
            <div key={i} className="stat">
              <div className="num">
                {s.hl ? <span>{s.num}</span> : s.num}
              </div>
              <div className="lbl">{s.lbl}</div>
              <div className="src">{s.src}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
