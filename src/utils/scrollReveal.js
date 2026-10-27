// Simple scroll reveal utility using IntersectionObserver
// Observes elements and adds the `in-view` class when they intersect.

(function () {
  // Don't run in SSR / non-browser env
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const selector = '[data-sr], .scroll-animate, section';

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.12,
  };

  function onIntersect(entries, observer) {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting) {
        // optional delay from data-sr-delay (ms)
        const delay = parseInt(el.dataset.srDelay || el.dataset.srdelay || 0, 10) || 0;
        if (delay) el.style.transitionDelay = `${delay}ms`;

        // optional animation name via data-sr-anim (e.g. "fade" or "float")
        const anim = el.dataset.srAnim || el.dataset.sranim;
        if (anim) el.setAttribute('data-sr-anim', anim);

        // add direction class if present in dataset (srDir) or (already set by init)
        const dir = el.dataset.srDir || el.dataset.srdir;
        if (dir) el.classList.add(`sr-${dir}`);

        el.classList.add('in-view');

        // If you want the animation to run only once, unobserve after showing
        observer.unobserve(el);
      }
    });
  }

  function init() {
    const io = new IntersectionObserver(onIntersect, observerOptions);

    const candidates = Array.from(document.querySelectorAll(selector));
    if (!candidates.length) return;

    candidates.forEach((el, i) => {
      // Add base class if not present so CSS can target it
      if (!el.classList.contains('scroll-animate')) el.classList.add('scroll-animate');

      // Optionally add a small stagger for grid children
      if (el.parentElement && el.parentElement.classList.contains('grid')) {
        // compute index among siblings for consistent staggering
        const siblings = Array.from(el.parentElement.children).filter((n) => n.matches(selector));
        const idx = Math.max(0, siblings.indexOf(el));
        const stagger = (idx % 8) * 80; // small stagger in ms
        if (!el.dataset.srDelay) el.dataset.srDelay = stagger;

        // for a dispersed look, assign a random direction if none provided
        if (!el.dataset.srDir && !el.dataset.srdir) {
          const dirs = ['left', 'right', 'up', 'down', 'zoom'];
          const pick = dirs[Math.floor(Math.random() * dirs.length)];
          el.dataset.srDir = pick;
          // set CSS variable for delay so grid > * can pick it if needed
          el.style.setProperty('--sr-delay', `${stagger}ms`);
        }
      }

      io.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

