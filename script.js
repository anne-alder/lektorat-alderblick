const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const previouslyFocused = new Map();

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  previouslyFocused.set(id, document.activeElement);
  modal.hidden = false;
  document.body.classList.add('modal-open');
  const panel = modal.querySelector('.modal-panel');
  if (panel) panel.focus();
}

function closeModal(modal) {
  if (!modal) return;
  modal.hidden = true;
  const openModals = document.querySelectorAll('.modal:not([hidden])');
  if (!openModals.length) document.body.classList.remove('modal-open');
  const previous = previouslyFocused.get(modal.id);
  if (previous && typeof previous.focus === 'function') previous.focus();
}

document.querySelectorAll('[data-modal-open]').forEach((button) => {
  button.addEventListener('click', () => openModal(button.getAttribute('data-modal-open')));
});

document.querySelectorAll('[data-modal-close]').forEach((button) => {
  button.addEventListener('click', () => closeModal(button.closest('.modal')));
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  const openModalElement = document.querySelector('.modal:not([hidden])');
  if (openModalElement) closeModal(openModalElement);
});

document.querySelectorAll('img[data-fallback]').forEach((img) => {
  img.addEventListener('error', () => {
    const fallback = img.getAttribute('data-fallback');
    if (fallback && img.src !== fallback) {
      img.src = fallback;
    }
  }, { once: true });
});

const revealSelectors = [
  '.hero-copy',
  '.portrait-card',
  '.trust-grid > div',
  '.section-heading',
  '.qualification-box',
  '.service-card',
  '.price-note',
  '.reference-card',
  '.timeline li',
  '.direct-contact',
  '.contact-form'
];

const revealTargets = revealSelectors.flatMap((selector) => Array.from(document.querySelectorAll(selector)));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (revealTargets.length) {
  revealTargets.forEach((element, index) => {
    element.classList.add('reveal');
    element.style.setProperty('--reveal-delay', `${Math.min((index % 4) * 70, 210)}ms`);
  });

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach((element) => element.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });

    revealTargets.forEach((element) => revealObserver.observe(element));
  }
}

