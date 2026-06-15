// Tout le texte « en dur » du site, centralisé pour édition facile.
// Mono-langue (FR). Les icônes restent dans les composants (mappées par clé).

export const content = {
  brand: "Maxime Herbaut",

  // Infos de contact réutilisées (Contact, Footer, CV)
  contactInfo: {
    email: "maxime@herbaut.me",
    emailHref: "mailto:maxime@herbaut.me",
    phone: "+33 6 60 16 07 13",
    phoneHref: "tel:+33660160713",
    linkedinUrl: "https://www.linkedin.com/in/maximeherbaut",
    linkedinLabel: "linkedin.com/in/maximeherbaut",
    bookingUrl: "https://calendar.app.google/mp1wi1iaEw7J5A4w6",
    location: "Lille",
  },

  // Métadonnées SEO / OG
  meta: {
    home: {
      title: "Maxime Herbaut — Product Manager & Digital Builder",
      description:
        "Découvrez le profil de Maxime Herbaut, Product Manager à Lille : services, expériences et articles autour du produit et de l'innovation.",
      ogDescription:
        "Product Manager à Lille : discovery, delivery, no-code & IA. Services, expériences et blog.",
      twitterDescription:
        "Product Manager à Lille : discovery, delivery, no-code & IA.",
    },
    blogList: {
      title: "Tous les articles | Maxime Herbaut",
      description:
        "Retrouvez tous les articles du blog de Maxime Herbaut, Product Manager à Lille.",
    },
    cv: {
      title: "Maxime Herbaut — CV",
      description: "Curriculum vitae de Maxime Herbaut, Product Manager.",
    },
    untitled: "Untitled",
  },

  nav: {
    items: [
      { label: "À propos", id: "about" },
      { label: "Services", id: "services" },
      { label: "Expériences", id: "experiences" },
      { label: "Blog", id: "blog" },
    ],
    contact: "Contact",
    menuLabel: "Menu",
  },

  home: {
    hero: {
      badge: "Disponible pour missions · Lille & remote",
      titleLine1: "Product Manager",
      titlePrefix: "&",
      titleHighlight: "digital builder",
      subtitle:
        "J'aide les équipes à imaginer, concevoir et lancer des produits digitaux utiles, robustes et élégants : de la discovery au delivery.",
      ctaPrimary: "Me contacter",
      ctaSecondary: "Voir mes missions",
      avatarAlt: "Maxime Herbaut",
      avatarBadge: "Product",
      socialProof: "Ils m'ont fait confiance",
      clients: [
        { name: "Sergic", className: "tracking-tight" },
        { name: "ROQUETTE", className: "tracking-wide" },
        { name: "Norauto", className: "tracking-tightest" },
        { name: "+12 équipes produit", className: "italic font-semibold" },
      ],
    },
    about: {
      eyebrow: "À propos",
      title: "Le produit, de l'intuition au lancement.",
      bio1:
        "Product Manager depuis 10 ans, j'ai piloté des produits B2B et B2C dans différents secteurs.",
      bio2:
        "Aujourd'hui en freelance, j'embarque les équipes sur des cycles courts : cadrer juste, prototyper vite, livrer ce qui compte. Et j'intègre l'IA là où elle fait gagner du temps réel.",
      stats: [
        { value: "10 ans", label: "en product" },
        { value: "15+", label: "produits lancés" },
        { value: "1 250", label: "collaborateurs outillés" },
      ],
      passionsLabel: "En dehors du produit",
      passions: [
        { iconKey: "soup", label: "Cuisine & gastronomie" },
        { iconKey: "volleyball", label: "Volley, beach-volley" },
        { iconKey: "mountain", label: "Randonnée" },
        { iconKey: "trees", label: "Nature" },
        { iconKey: "theater", label: "Théâtre" },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Quatre façons de travailler ensemble",
      intro:
        "Sur les différentes étapes d'un produit.",
      items: [
        {
          iconKey: "compass",
          slug: "concevoir",
          title: "Concevoir",
          description:
            "Discovery, interviews, cadrage du problème et des objectifs. On part sur la bonne idée.",
        },
        {
          iconKey: "penLine",
          slug: "creer",
          title: "Créer",
          description:
            "Prototypage, design des parcours, tests utilisateurs. On valide avant de coder.",
        },
        {
          iconKey: "code",
          slug: "developper",
          title: "Développer",
          description:
            "Delivery, priorisation, no-code & IA. On livre ce qui compte, vite et proprement.",
        },
        {
          iconKey: "users",
          slug: "federer",
          title: "Fédérer",
          description:
            "Animation d'équipe, rituels, montée en compétence produit & IA des collaborateurs.",
        },
      ],
    },
    experiences: {
      eyebrow: "Expériences",
      title: "Un fil produit, plusieurs terrains",
    },
    testimonials: {
      ariaLabel: "Témoignages",
    },
    blogPreview: {
      eyebrow: "Blog",
      title: "Méthode produit & IA",
      allLink: "Tous les articles →",
      allLinkAria: "Accéder à tous les articles du blog",
      empty: "Aucun article pour le moment.",
    },
    contact: {
      eyebrow: "Contact",
      title: "On construit votre prochain produit ?",
      text:
        "Envie d’échanger sur un projet ? Discutons !",
      ctaBook: "Prendre rendez-vous",
      ctaEmail: "maxime@herbaut.me",
      ctaLinkedin: "LinkedIn",
      newTabSr: " (ouvre dans un nouvel onglet)",
    },
  },

  footer: {
    copyrightSuffix: "Product Manager freelance · Lille",
    navAriaLabel: "Liens de pied de page",
    linkedin: "LinkedIn",
    email: "Email",
    blog: "Blog",
  },

  blog: {
    eyebrow: "Le blog",
    title: "Tous les articles",
    intro:
      "Retrouvez l'ensemble des publications pour approfondir les thématiques produit, design et innovation.",
    backToArticles: "← Tous les articles",
    homeAriaLabel: "Revenir à l'accueil",
    scrollTopAria: "Retour en haut de la page",
    scrollTopTitle: "Retour en haut",
  },

  cv: {
    eyebrow: "Curriculum vitæ",
    badge: "10 ans d'expérience",
    role: "Product Manager · Digital Builder",
    pitchLine: "J'aide les équipes à imaginer, concevoir et lancer des produits digitaux utiles, robustes et élégants : de la discovery au delivery.",
    contactAriaLabel: "Coordonnées",
    emailSr: " (ouvre votre client de messagerie)",
    phoneSr: " (composer ce numéro)",
    linkedinSr: " (ouvre dans un nouvel onglet)",
    download: "Télécharger le CV",
    pdfHref: "/cv-maxime-herbaut.pdf",
    quote: "« La perfection, c'est quand il n'y a plus rien à enlever. »",
    quoteAuthor: "— Antoine de Saint-Exupéry",
    sections: {
      experiences: "Expériences",
      skills: "Compétences clés",
      passions: "Passions",
      formation: "Formation",
    },
    degreeLabel: "Diplôme d'ingénieur",
    skillGroups: [
      {
        title: "Product",
        items: [
          "Discovery & user research",
          "Product builder",
          "Product Design Sprint",
          "Design thinking",
          "Méthodologies agiles (Scrum, Kanban)",
        ],
      },
      {
        title: "Delivery",
        items: [
          "Delivery",
          "Pilotage d'équipes pluridisciplinaires",
          "Management de projets",
          "Facilitation d'ateliers",
        ],
      },
      {
        title: "Data & IA",
        items: [
          "Data & analytics",
          "SQL / Snowflake",
          "IA générative",
          "No-code & automatisation (n8n, Make, Supabase)",
        ],
      },
      {
        title: "Soft skills",
        items: [
          "Communication & vulgarisation technique",
          "Collaboration UX / UI",
          "Anglais C1 (TOEIC 905/990)",
        ],
      },
    ],
    education: [
      {
        school: "ITEEM Lille",
        degree:
          "Diplôme d'ingénieur de l'École Centrale de Lille et Skema Business School. Double compétence en ingénierie généraliste et management de projet, avec spécialisation e-business et mobilité connectée.",
        date: "2010 – 2015",
      },
    ],
  },
} as const;

export type SiteContent = typeof content;
