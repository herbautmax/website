// Constructeurs de données structurées schema.org (JSON-LD).
// Alimentés par content/site.ts — pas de texte en dur ici.
// L'email est volontairement omis (masqué côté site, on évite de le ré-exposer).

import { content } from "../content/site";
import { Post } from "../types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const info = content.contactInfo;

// Toutes les compétences, aplaties depuis les groupes du CV.
const knowsAbout = content.cv.skillGroups.flatMap((g) => g.items);

// Personne — identité de Maxime, réutilisée comme auteur des articles.
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: content.brand,
    url: `${siteUrl}/`,
    image: `${siteUrl}/avatar-mh.png`,
    jobTitle: content.cv.role,
    description: content.cv.pitchLine,
    address: {
      "@type": "PostalAddress",
      addressLocality: info.location,
      addressCountry: "FR",
    },
    knowsAbout,
    sameAs: [info.linkedinUrl, "https://vinoteo.fr"],
  };
}

// Référence légère vers la Personne, pour le champ publisher.
const personRef = {
  "@type": "Person",
  name: content.brand,
  url: `${siteUrl}/`,
};

// Auteur « riche » : rattache chaque article à une identité professionnelle
// trouvable (métier + profils externes). C'est le signal E-E-A-T qui aide
// Google et les LLM à identifier Maxime comme Product Manager freelance.
const authorPerson = {
  "@type": "Person",
  name: content.brand,
  url: `${siteUrl}/`,
  jobTitle: "Product Manager freelance",
  sameAs: [info.linkedinUrl, "https://vinoteo.fr"],
};

// Site web — permet aux moteurs/agents de relier les pages au domaine.
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: content.brand,
    url: `${siteUrl}/`,
    inLanguage: "fr-FR",
    author: personRef,
  };
}

// Article de blog.
export function blogPostingSchema(post: Post) {
  const url = `${siteUrl}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title || content.meta.untitled,
    description: post.excerpt || undefined,
    datePublished: post.date || undefined,
    dateModified: post.date || undefined,
    ...(post.cover ? { image: post.cover } : {}),
    ...(post.tags?.length ? { keywords: post.tags.join(", ") } : {}),
    inLanguage: "fr-FR",
    author: authorPerson,
    publisher: personRef,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
  };
}
