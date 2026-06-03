'use client';
import { useState, useEffect, useCallback, useRef } from 'react';

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false);
  const lastFocusRef = useRef<HTMLElement | null>(null);

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const a = document.createElement('a');
    a.href = '/Aryan_Sharma_Resume.pdf';
    a.download = 'Aryan_Sharma_Resume.pdf';
    a.click();
  };

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    lastFocusRef.current = document.activeElement as HTMLElement;
    setModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setModalOpen(false);
    lastFocusRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    document.body.style.overflow = 'hidden';
    const firstOpt = document.querySelector<HTMLElement>('.connect-opt');
    firstOpt?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [modalOpen, closeModal]);

  return (
    <>
      <div className="wrap">
        <section id="contact">
          <div className="sec-head reveal" style={{ marginBottom: 8 }}>
            <span className="sec-idx">06</span>
          </div>
          <h2 className="cta-big reveal">
            Let&apos;s make
            <br />
            something <em>that grows.</em>
          </h2>
          <div className="contact-grid">
            <div className="contact-links reveal">
              <a className="clink" href="mailto:as089096@gmail.com">
                <span>Email</span>
                <span>as089096@gmail.com</span>
              </a>
              <a className="clink" href="tel:+918006658381">
                <span>Phone</span>
                <span>+91 80066 58381</span>
              </a>
              <a
                className="clink"
                href="https://www.linkedin.com/in/aryansharma010"
                target="_blank"
                rel="noopener"
              >
                <span>LinkedIn</span>
                <span>/in/aryansharma010 ↗</span>
              </a>
              <a
                className="clink"
                href="https://aryanportfoliogfg.vercel.app/"
                target="_blank"
                rel="noopener"
              >
                <span>Behance / Work</span>
                <span>View galleries ↗</span>
              </a>
            </div>
            <div className="contact-cta reveal">
              <a
                className="btn accent"
                role="button"
                tabIndex={0}
                style={{ cursor: 'pointer' }}
                onClick={openModal}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(e as unknown as React.MouseEvent); } }}
              >
                Start a conversation →
              </a>
              <a
                className="btn ghost"
                href="/Aryan_Sharma_Resume.pdf"
                onClick={handleResumeClick}
              >
                Download résumé ↓
              </a>
            </div>
          </div>
        </section>
      </div>

      {modalOpen && (
        <div
          className="connect-overlay"
          id="connectModal"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div
            className="connect-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="connectTitle"
          >
            <button
              className="connect-close"
              type="button"
              aria-label="Close"
              onClick={closeModal}
            >
              ×
            </button>
            <span className="connect-eyebrow">Say hello</span>
            <h3 className="connect-title" id="connectTitle">
              How would you like to connect?
            </h3>
            <div className="connect-actions">
              <a
                className="btn accent connect-opt"
                href="mailto:as089096@gmail.com"
                onClick={() => setTimeout(closeModal, 150)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
                  <path d="M3 6l9 6 9-6" />
                </svg>
                Mail me
              </a>
              <a
                className="btn connect-opt connect-li"
                href="https://www.linkedin.com/in/aryansharma010"
                target="_blank"
                rel="noopener"
                onClick={() => setTimeout(closeModal, 150)}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
                Message me on LinkedIn
              </a>
            </div>
            <span className="connect-foot">as089096@gmail.com</span>
          </div>
        </div>
      )}
    </>
  );
}
