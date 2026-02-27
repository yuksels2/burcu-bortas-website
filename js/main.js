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
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ─── FLOATING ACTION BUTTONS ───
const fabStyles = document.createElement('style');
fabStyles.textContent = `
  #fab-container {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    z-index: 9999;
  }
  #fab-wp, #fab-call {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    box-shadow: 0 4px 20px rgba(0,0,0,0.18);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  #fab-wp {
    background: #25D366;
  }
  #fab-call {
    background: #3A5A40;
  }
  #fab-wp:hover, #fab-call:hover {
    transform: scale(1.1) translateY(-2px);
    box-shadow: 0 8px 28px rgba(0,0,0,0.22);
  }
  #fab-wp svg, #fab-call svg {
    flex-shrink: 0;
  }
  @media (max-width: 900px) {
    #fab-container {
      bottom: 1.5rem;
      right: 1.2rem;
    }
    #fab-wp, #fab-call {
      width: 52px;
      height: 52px;
    }
  }
`;
document.head.appendChild(fabStyles);

const fabContainer = document.createElement('div');
fabContainer.id = 'fab-container';
fabContainer.innerHTML = `
  <a href="https://wa.me/905527178643?text=Merhaba%20Burcu%20Han%C4%B1m%2C%20beslenme%20dan%C4%B1%C5%9Fmanl%C4%B1%C4%9F%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
     id="fab-wp" target="_blank" rel="noopener" aria-label="WhatsApp'tan yaz">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.862L.054 23.177a.75.75 0 0 0 .918.919l5.375-1.485A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.523-5.205-1.431l-.364-.217-3.773 1.043 1.056-3.695-.236-.381A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  </a>
  <a href="tel:+905527178643" id="fab-call" aria-label="Ara">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  </a>
`;
document.body.appendChild(fabContainer);
