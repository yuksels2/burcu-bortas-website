document.addEventListener("DOMContentLoaded", function () {
  const footerHTML = `
  <footer>
    <div>
      <a href="index.html" class="footer-logo">
        Burcu Bortaş
        <small>Diyetisyen</small>
      </a>
      <p class="footer-desc">Sağlığınızı bilim ve sevgiyle yönetmenize eşlik eden bütüncül beslenme danışmanlığı.</p>
    </div>
    <div>
      <p class="footer-heading">Sayfalar</p>
      <ul class="footer-links">
        <li><a href="hakkimda.html">Hakkımda</a></li>
        <li><a href="hizmetler.html">Hizmetler</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="iletisim.html">İletişim</a></li>
      </ul>
    </div>
    <div>
      <p class="footer-heading">İletişim</p>
      <ul class="footer-links">
        <li><a href="mailto:burcubortas@gmail.com">📧 burcubortas@gmail.com</a></li>
        <li><a href="tel:+905527178643">📱 +90 (552) 717 86 43</a></li>
        <li><a href="#">📍 Ankara, Türkiye</a></li>
      </ul>
    </div>
    <div class="footer-bottom">
      <p>© 2025 Dyt. Burcu Bortaş. Tüm hakları saklıdır.</p>
      <div class="footer-social">
        <a href="https://www.instagram.com/dyt.burcubortas/" target="_blank" class="social-link" aria-label="Instagram">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/burcu-borta%C5%9F-202539398/" target="_blank" class="social-link" aria-label="LinkedIn">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  </footer>
  `;

  // Mevcut footer varsa değiştir, yoksa body'nin sonuna ekle
  const existing = document.querySelector("footer");
  if (existing) {
    existing.outerHTML = footerHTML;
  } else {
    document.body.insertAdjacentHTML("beforeend", footerHTML);
  }
});
