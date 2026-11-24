/* iTu Solutions carousel | initialise with [data-itu-carousel] */
(() => {
  'use strict';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const init = (root) => {
    if (root.dataset.carouselReady === 'true') return;
    const track = root.querySelector('[data-carousel-track]');
    if (!track) return;
    const slides = [...track.querySelectorAll('[data-carousel-slide]')];
    if (slides.length < 2) return;
    root.dataset.carouselReady = 'true';
    const prev = root.querySelector('[data-carousel-prev]');
    const next = root.querySelector('[data-carousel-next]');
    const dotsHost = root.querySelector('[data-carousel-dots]');
    const autoplay = root.dataset.autoplay === 'true';
    const interval = Math.max(2500, Number(root.dataset.interval) || 5000);
    let index = 0, timer = null, startX = 0;
    const dots = dotsHost ? slides.map((_, i) => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'itu-carousel-dot';
      b.setAttribute('aria-label', `Go to slide ${i + 1}`);
      b.addEventListener('click', () => show(i)); dotsHost.append(b); return b;
    }) : [];
    function show(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        const active = i === index;
        slide.hidden = !active;
        slide.setAttribute('aria-hidden', String(!active));
      });
      dots.forEach((dot, i) => {
        dot.setAttribute('aria-current', i === index ? 'true' : 'false');
        dot.classList.toggle('is-active', i === index);
      });
      root.dispatchEvent(new CustomEvent('itu:carousel-change', { detail: { index } }));
    }
    const stop = () => { if (timer) window.clearInterval(timer); timer = null; };
    const start = () => {
      stop();
      if (autoplay && !reducedMotion.matches && !document.hidden) timer = window.setInterval(() => show(index + 1), interval);
    };
    prev?.addEventListener('click', () => { show(index - 1); start(); });
    next?.addEventListener('click', () => { show(index + 1); start(); });
    root.addEventListener('mouseenter', stop); root.addEventListener('mouseleave', start);
    root.addEventListener('focusin', stop); root.addEventListener('focusout', e => { if (!root.contains(e.relatedTarget)) start(); });
    document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
    track.addEventListener('touchstart', e => { startX = e.changedTouches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const delta = e.changedTouches[0].clientX - startX;
      if (Math.abs(delta) > 45) show(index + (delta < 0 ? 1 : -1));
    }, { passive: true });
    root.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') { show(index + 1); start(); }
      if (e.key === 'ArrowLeft') { show(index - 1); start(); }
    });
    reducedMotion.addEventListener?.('change', start);
    show(0); start();
  };
  const scan = (scope = document) => scope.querySelectorAll('[data-itu-carousel]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => scan()); else scan();
})();
