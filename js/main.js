// ─── SCROLL REVEAL ───
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

// ─── NAV SCROLL EFFECT ───
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.padding = '1rem 4rem';
    nav.style.boxShadow = '0 4px 24px rgba(58,90,64,0.08)';
  } else {
    nav.style.padding = '1.4rem 4rem';
    nav.style.boxShadow = 'none';
  }
});

// ─── HAMBURGER MENU ───
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}
