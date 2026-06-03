import { useEffect } from 'react';

export function useCountUp(selector = '.stat .num, .ft-stat .n') {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasIO = 'IntersectionObserver' in window;
    const numRe = /(\d[\d,]*(?:\.\d+)?)/;

    type CountEl = HTMLElement & { _final?: string };
    const counters = Array.from(document.querySelectorAll<CountEl>(selector));

    counters.forEach((el) => {
      el._final = el.innerHTML;
      if (!reduce && hasIO) {
        const m = el._final.match(numRe);
        if (m) {
          const dec = m[1].indexOf('.') >= 0 ? m[1].split('.')[1].length : 0;
          el.innerHTML = el._final.replace(m[1], dec > 0 ? (0).toFixed(dec) : '0');
        }
      }
    });

    function runCount(el: CountEl) {
      const final = el._final ?? el.innerHTML;
      const m = final.match(numRe);
      if (!m || reduce) { el.innerHTML = final; return; }
      const raw = m[1];
      const dec = raw.indexOf('.') >= 0 ? raw.split('.')[1].length : 0;
      const target = parseFloat(raw.replace(/,/g, ''));
      const dur = 1100;
      const t0 = performance.now();
      const fmt = (v: number) => (dec > 0 ? v.toFixed(dec) : String(Math.round(v)));
      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        el.innerHTML = final.replace(raw, fmt(target * e));
        if (p < 1) requestAnimationFrame(step);
        else el.innerHTML = final;
      };
      requestAnimationFrame(step);
    }

    if (hasIO) {
      const co = new IntersectionObserver(
        (es) => {
          es.forEach((en) => {
            if (en.isIntersecting) {
              runCount(en.target as CountEl);
              co.unobserve(en.target);
            }
          });
        },
        { threshold: 0.45 }
      );
      counters.forEach((el) => co.observe(el));
      return () => co.disconnect();
    }
  }, [selector]);
}
