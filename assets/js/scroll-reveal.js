/* iTu Solutions scroll reveal */
(() => {
  'use strict';
  const elements = document.querySelectorAll('.itu-reveal');
  if (!elements.length) return;
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el => el.classList.add('is-visible')); return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('is-visible', entry.isIntersecting);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
  elements.forEach(el => observer.observe(el));
})();
