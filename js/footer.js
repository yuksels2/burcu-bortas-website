document.addEventListener("DOMContentLoaded", function () {
  const footerHTML = `
  <footer>
    <div>
      <a href="index.html" class="footer-logo">
        Burcu Bortaş
        <small>Uzman Diyetisyen</small>
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
        <li><a href="mailto:info@burcubortas.com">📧 info@burcubortas.com</a></li>
        <li><a href="tel:+905xxxxxxxxx">📱 +90 (5xx) xxx xx xx</a></li>
        <li><a href="#">📍 İstanbul, Türkiye</a></li>
      </ul>
    </div>
    <div class="footer-bottom">
      <p>© 2025 Dyt. Burcu Bortaş. Tüm hakları saklıdır.</p>
      <div class="footer-social">
        <a href="#" class="social-link">in</a>
        <a href="#" class="social-link">ig</a>
        <a href="#" class="social-link">yt</a>
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
