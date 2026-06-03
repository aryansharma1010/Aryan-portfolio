import { useEffect } from 'react';

export function useDoodleDrawOn() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const doods = Array.from(document.querySelectorAll<HTMLElement>('.dood'));

    doods.forEach((d) => {
      const p = d.querySelector<SVGPathElement>('path.draw');
      if (p) {
        try { p.style.setProperty('--len', String(p.getTotalLength())); } catch {}
      }
    });

    const draw = () => doods.forEach((d) => d.classList.add('drawn'));
    if (reduce) {
      draw();
    } else {
      const t = setTimeout(draw, 850);
      return () => clearTimeout(t);
    }
  }, []);
}
