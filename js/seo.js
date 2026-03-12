// SEO - Her sayfaya otomatik inject edilir
// Her HTML dosyasında <head> içinde şu satır olmalı:
// <script src="js/seo.js"></script>
// Ve sayfaya özel <meta> tagları ayrıca tanımlanmalı (title, description, canonical)

(function() {
  const head = document.head;

  // --- ORTAK META TAGLAR ---
  const commonMetas = [
    { name: 'author', content: 'Dyt. Burcu Bortaş' },
    { name: 'robots', content: 'index, follow' },
    { name: 'keywords', content: 'ankara diyetisyen, diyetisyen ankara, online diyetisyen, beslenme danışmanı ankara, kilo verme, insülin direnci diyeti, PCOS beslenmesi, sporcu beslenmesi, gebelik beslenmesi, dyt burcu bortaş' },
  ];

  commonMetas.forEach(({ name, content }) => {
    if (!document.querySelector(`meta[name="${name}"]`)) {
      const tag = document.createElement('meta');
      tag.name = name;
      tag.content = content;
      head.appendChild(tag);
    }
  });

  // --- OPEN GRAPH ---
  const pageUrl = window.location.href;
  const pageTitle = document.title;
  const pageDesc = document.querySelector('meta[name="description"]')?.content || '';
  const ogImage = 'https://www.dytburcubortas.com/images/bb-logo-kb.png';

  const ogTags = [
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: pageUrl },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDesc },
    { property: 'og:image', content: ogImage },
    { property: 'og:locale', content: 'tr_TR' },
    { property: 'og:site_name', content: 'Dyt. Burcu Bortaş' },
  ];

  ogTags.forEach(({ property, content }) => {
    if (!document.querySelector(`meta[property="${property}"]`)) {
      const tag = document.createElement('meta');
      tag.setAttribute('property', property);
      tag.content = content;
      head.appendChild(tag);
    }
  });

  // --- SCHEMA MARKUP (Dietitian) ---
  if (!document.querySelector('script[type="application/ld+json"]')) {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Dietitian",
      "name": "Dyt. Burcu Bortaş",
      "url": "https://www.dytburcubortas.com",
      "logo": "https://www.dytburcubortas.com/images/bb-logo-kb.png",
      "image": "https://www.dytburcubortas.com/images/bb-logo-kb.png",
      "description": "Ankara diyetisyen Burcu Bortaş. Kilo yönetimi, insülin direnci, PCOS, gebelik ve sporcu beslenmesi alanlarında 7+ yıl deneyimli uzman diyetisyen.",
      "telephone": "+905527178643",
      "email": "info@burcubortas.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ankara",
        "addressCountry": "TR"
      },
      "areaServed": [
        { "@type": "City", "name": "Ankara" },
        { "@type": "Country", "name": "Türkiye" }
      ],
      "knowsAbout": [
        "Kilo Yönetimi",
        "İnsülin Direnci",
        "PCOS Beslenmesi",
        "Sporcu Beslenmesi",
        "Gebelik Beslenmesi",
        "Tıbbi Beslenme Tedavisi",
        "Çocuk Beslenmesi"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Beslenme Danışmanlığı Hizmetleri",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kilo Yönetimi ve Kilo Kontrolü" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tıbbi Beslenme Tedavisi" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sporcu Beslenmesi" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gebelik ve Emzirme Beslenmesi" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Online Beslenme Danışmanlığı" } }
        ]
      }
    };

    const schemaTag = document.createElement('script');
    schemaTag.type = 'application/ld+json';
    schemaTag.textContent = JSON.stringify(schema);
    head.appendChild(schemaTag);
  }

})();
