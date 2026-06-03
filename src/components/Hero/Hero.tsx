'use client';
import { useDoodleDrawOn } from '@/hooks/useDoodleDrawOn';

export default function Hero() {
  useDoodleDrawOn();

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const a = document.createElement('a');
    a.href = '/Aryan_Sharma_Resume.pdf';
    a.download = 'Aryan_Sharma_Resume.pdf';
    a.click();
  };

  return (
    <div className="wrap">
      <section className="hero" style={{ borderTop: 'none' }}>
        <div className="hero-grid">
          <div>
            <span className="kicker">
              <span className="live" />
              Available for work · Gurugram, IN
            </span>
            <h1 className="hero-name">
              <span className="hw">Aryan</span>
              <br />
              <span className="hw">Sharma</span>
            </h1>
            <p className="hero-tag">
              A <b>full stack marketer</b> &amp;{' '}
              <span className="dood dood-ul">
                storyteller
                <svg viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true">
                  <path className="draw" d="M4,13 C42,5 72,5 102,11 C132,17 168,16 196,8" />
                </svg>
              </span>{' '}
              building brands that move people and the numbers.
            </p>
            <div className="hero-actions">
              <svg className="dood dood-arrow" viewBox="0 0 60 40" aria-hidden="true">
                <path className="draw" d="M5,30 C14,16 30,10 47,14 M40,6 L47,14 L37,18" />
              </svg>
              <a href="#featured" className="btn accent">View Featured Work →</a>
              <a className="btn ghost" href="/Aryan_Sharma_Resume.pdf" onClick={handleResumeClick}>
                Download résumé ↓
              </a>
            </div>
          </div>
          <div className="hero-photo">
            <div className="frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-photo.webp"
                alt="Portrait of Aryan Sharma"
                width={360}
                height={450}
              />
            </div>
            <span className="badge">
              <i>●</i> 6 yrs experience
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
