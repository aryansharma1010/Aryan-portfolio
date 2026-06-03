import { caps, tools, certs, edu } from '@/data/toolkit';

export default function Toolkit() {
  return (
    <div className="wrap">
      <section id="toolkit">
        <div className="sec-head reveal">
          <span className="sec-idx">05</span>
          <h2 className="sec-title">
            What I <em>do</em>
          </h2>
        </div>
        <div className="cap-grid reveal">
          {caps.map((c) => (
            <div key={c.h} className="cap">
              <h4>
                <b>{c.h}</b> {c.t}
              </h4>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
        <div className="tk-cols">
          <div className="tk reveal">
            <h5>Tools &amp; Stack</h5>
            <div className="chips">
              {tools.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>
          <div className="tk reveal">
            <h5>Certifications</h5>
            <ul className="stack-list">
              {certs.map((c, i) => (
                <li key={i}>
                  <b>{c.b}</b>
                  <span>{c.s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="tk reveal">
            <h5>Education</h5>
            <ul className="stack-list">
              {edu.map((e, i) => (
                <li key={i}>
                  <b>{e.b}</b>
                  <span>{e.s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
