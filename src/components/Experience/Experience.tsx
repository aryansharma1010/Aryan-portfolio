import { xp } from '@/data/experience';

export default function Experience() {
  return (
    <div className="wrap">
      <section id="experience">
        <div className="sec-head reveal">
          <span className="sec-idx">04</span>
          <h2 className="sec-title">Experience</h2>
        </div>
        <div>
          {xp.map((x, i) => (
            <div key={i} className="xp-row">
              <div className="xp-when">
                {x.when}
                {x.now && (
                  <>
                    <br />
                    <span className="xp-now">Now</span>
                  </>
                )}
              </div>
              <div>
                <div className="xp-co">{x.co}</div>
                <div className="xp-role">{x.role}</div>
              </div>
              <ul className="xp-points">
                {x.pts.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
