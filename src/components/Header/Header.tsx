'use client';
import { useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function Header() {
  const { theme, toggle } = useTheme();
  const headerRef = useRef<HTMLElement>(null);

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const a = document.createElement('a');
    a.href = '/Aryan_Sharma_Resume.pdf';
    a.download = 'Aryan_Sharma_Resume.pdf';
    a.click();
  };

  const toggleNav = () => headerRef.current?.classList.toggle('open');
  const closeNav = () => headerRef.current?.classList.remove('open');

  return (
    <header ref={headerRef} id="top-header">
      <div className="wrap">
        <nav>
          <a href="#top-header" className="brand">
            <span className="dot" />
            Aryan Sharma
          </a>
          <div className="nav-links">
            <a href="#about" onClick={closeNav}>About</a>
            <a href="#impact" onClick={closeNav}>Impact</a>
            <a href="#featured" onClick={closeNav}>Rally</a>
            <a href="#golden-aces" onClick={closeNav}>Golden Aces</a>
            <a href="#geeksforgeeks" onClick={closeNav}>GFG</a>
            <a href="#crm" onClick={closeNav}>CRM</a>
            <a href="#work" onClick={closeNav}>Work</a>
            <a href="#experience" onClick={closeNav}>Experience</a>
            <a href="#contact" onClick={closeNav}>Contact</a>
          </div>
          <a className="btn ghost" href="/Aryan_Sharma_Resume.pdf" onClick={handleResumeClick}>
            Résumé ↓
          </a>
          <button
            className="theme-toggle"
            id="themeToggle"
            type="button"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title="Toggle light / dark"
          >
            <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4.5" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          </button>
          <button className="nav-toggle" id="navToggle" aria-label="Menu" onClick={toggleNav}>
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>
    </header>
  );
}
