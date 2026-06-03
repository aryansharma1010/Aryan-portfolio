import { useEffect } from 'react';

export function use3dTilt(selector = '.work-grid .card') {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const cards = Array.from(document.querySelectorAll<HTMLElement>(selector));
    const cleanups: (() => void)[] = [];

    cards.forEach((card) => {
      const onMove = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transition = 'transform .08s ease-out';
        card.style.transform = `perspective(720px) rotateX(${-py * 7}deg) rotateY(${px * 9}deg) translateY(-4px)`;
      };
      const onLeave = () => {
        card.style.transition = 'transform .55s cubic-bezier(.2,.7,.2,1)';
        card.style.transform = '';
      };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      });
    });

    return () => cleanups.forEach((c) => c());
  }, [selector]);
}
