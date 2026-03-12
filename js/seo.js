(function () {
  const head = document.head;

  // --- KEYWORDS ---
  if (!document.querySelector('meta[name="keywords"]')) {
    const keywords = document.createElement('meta');
    keywords.name = 'keywords';
    keywords.content = [
      // Şehir bazlı
      'ankara diyetisyen', 'çankaya diyetisyen', 'diyetisyen ankara',
      'diyetisyen çankaya', 'ankara beslenme uzmanı', 'çankaya beslenme danışmanı',
      'ankara online diyetisyen', 'online diyetisyen ankara',
      // Hizmet bazlı
      'kilo verme ankara', 'kilo vermek için diyetisyen',
      'insülin direnci diyetisyen ankara', 'insülin direnci beslenme programı',
      'pcos diyetisyen ankara', 'polikistik over diyeti',
      'hashimoto diyetisyeni', 'tiroid diyeti ankara',
      'gebelik diyetisyeni ankara', 'hamilelikte beslenme',
      'sporcu diyetisyeni ankara', 'sporcu beslenmesi ankara',
      'çocuk diyetisyeni ankara', 'çocuk beslenmesi',
      'bağırsak sağlığı diyetisyen', 'ibs beslenme programı',
      'kolesterol diyeti ankara', 'hipertansiyon diyeti',
      'lipödem diyeti', 'metabolizma hızlandırma',
      // Marka
      'dyt burcu bortaş', 'burcu bortaş diyetisyen',
      'dytburcubortas', 'burcu bortaş ankara',
    ].join(', ');
    head.appendChild(keywords);
  }

  // --- ORTAK META ---
  const metas = [
    { name: 'author', content: 'Dyt. Burcu Bortaş' },
    { name: 'robots', content: 'index, follow' },
    { name: 'googlebot', content: 'index, follow' },
    { name: 'geo.region', content: 'TR-06' },
    { name: 'geo.placename', content: 'Ankara, Çankaya' },
    { name: 'geo.position', content: '39.9334;32.8597' },
    { name: 'ICBM', content: '39.9334, 32.8597' },
    { name: 'language', content: 'Turkish' },
    { name: 'revisit-after', content: '7 days' },
  ];

  metas.forEach(({ name, content }) => {
    if (!document.querySelector(`meta[name="${name}"]`)) {
      const tag = document.createElement('meta');
      tag.name = name;
      tag.content = content;
      head.appendChild(tag);
    }
  });

  // --- OPEN GRAPH ---
  const pageTitle = document.title;
  const pageDesc = document.querySelector('meta[name="description"]')?.content || '';
  const canonical = document.querySelector('link[rel="canonical"]')?.href || window.location.href;
  const ogImage = 'https://www.dytburcubortas.com/images/bb-logo-kb.png';

  const ogTags = [
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: canonical },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDesc },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '400' },
    { property: 'og:image:height', content: '400' },
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

  // --- TWITTER CARD ---
  const twitterTags = [
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDesc },
    { name: 'twitter:image', content: ogImage },
  ];

  twitterTags.forEach(({ name, content }) => {
    if (!document.querySelector(`meta[name="${name}"]`)) {
      const tag = document.createElement('meta');
      tag.name = name;
      tag.content = content;
      head.appendChild(tag);
    }
  });

  // --- SCHEMA: Dietitian (ana sayfa ve hakkımda) ---
  if (!document.querySelector('script[type="application/ld+json"]')) {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Dietitian",
      "name": "Dyt. Burcu Bortaş",
      "alternateName": ["Burcu Bortaş Diyetisyen", "Diyetisyen Burcu Bortaş"],
      "url": "https://www.dytburcubortas.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.dytburcubortas.com/images/bb-logo-kb.png"
      },
      "image": "https://www.dytburcubortas.com/images/bb-logo-kb.png",
      "description": "Ankara Çankaya diyetisyen Burcu Bortaş. Kilo yönetimi, insülin direnci, PCOS, gebelik, sporcu ve tıbbi beslenme tedavisi. 7+ yıl klinik deneyim. Online ve yüz yüze randevu.",
      "telephone": "+905527178643",
      "email": "info@burcubortas.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Çankaya",
        "addressRegion": "Ankara",
        "addressCountry": "TR"
      },
      "areaServed": [
        { "@type": "City", "name": "Ankara" },
        { "@type": "AdministrativeArea", "name": "Çankaya" },
        { "@type": "Country", "name": "Türkiye" }
      ],
      "knowsAbout": [
        "Kilo Yönetimi", "İnsülin Direnci", "PCOS", "Hashimoto",
        "Sporcu Beslenmesi", "Gebelik Beslenmesi", "Tıbbi Beslenme",
        "Çocuk Beslenmesi", "Bağırsak Sağlığı", "Lipödem"
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Lisans",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Gazi Üniversitesi"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Beslenme Danışmanlığı Hizmetleri",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kilo Yönetimi ve Kilo Kontrolü", "areaServed": "Ankara" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tıbbi Beslenme Tedavisi", "areaServed": "Ankara" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sporcu Beslenmesi", "areaServed": "Ankara" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gebelik ve Emzirme Beslenmesi", "areaServed": "Ankara" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Online Beslenme Danışmanlığı", "areaServed": "Türkiye" } }
        ]
      },
      "priceRange": "₺₺",
      "openingHours": "Mo-Fr 09:00-18:00",
      "sameAs": [
        "https://www.instagram.com/dytburcubortas",
        "https://www.linkedin.com/in/burcubortas"
      ]
    };

    const schemaTag = document.createElement('script');
    schemaTag.type = 'application/ld+json';
    schemaTag.textContent = JSON.stringify(schema, null, 2);
    head.appendChild(schemaTag);
  }

})();
