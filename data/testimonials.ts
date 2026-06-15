export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

// ⚠️ Placeholders à remplacer par de vraies citations clients.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Maxime a cadré en deux semaines un sujet sur lequel on tournait en rond depuis six mois. Clair, structuré, et il livre.",
    author: "Directrice Produit",
    role: "Scale-up proptech",
  },
  {
    quote:
      "Le bon mix entre vision produit et exécution. Nos équipes ont gagné en autonomie, et l’IA est enfin entrée dans nos rituels.",
    author: "Head of Digital",
    role: "Groupe retail",
  },
];
