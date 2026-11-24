/* iTu Solutions parallax | add data-itu-parallax and optional data-speed */
(() => {
  'use strict';
  const items = [...document.querySelectorAll('[data-itu-parallax]')];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!items.length || reduce.matches) return;
  let raf = 0;
  const update = () => {
    raf = 0;
    const vh = window.innerHeight || 1;
    items.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > vh) return;
      const speed = Math.min(0.35, Math.max(0, Number(el.dataset.speed) || 0.12));
      const midpoint = rect.top + rect.height / 2;
      const offset = (midpoint - vh / 2) * speed;
      const direction = el.dataset.direction === 'down' ? -1 : 1;
      const y = Math.max(-90, Math.min(90, offset * direction));
      el.style.setProperty('--itu-parallax-y', `${y.toFixed(1)}px`);
      el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
    });
  };
  const request = () => { if (!raf) raf = requestAnimationFrame(update); };
  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request, { passive: true });
  update();
})();
