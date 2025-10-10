export type Experience = {
  company: string;
  role: string;
  date: string;
  description: string;
};

export const experiencesData: Experience[] = [
  {
    company: "Villa Finder",
    role: "Développeur web (stage)",
    date: "juin 2014 — avr. 2015",
    description:
      "Développement du nouveau site en Symfony2 et AngularJS, dédié à la location de villas à Bali. → Mise en production avec succès en moins de 6 mois.",
  },
  {
    company: "Freelance",
    role: "Développeur web",
    date: "juin 2015 — avr. 2016",
    description: "Développement de 5 sites vitrines avec CMS intégré.",
  },
  {
    company: "Tymate",
    role: "Chef de projets",
    date: "avr. 2016 — déc. 2018",
    description:
      "Pilotage de squads produit pluridisciplinaires et accompagnement des clients sur la discovery et le delivery produit.",
  },
  {
    company: "Tymate",
    role: "Directeur de projets",
    date: "jan. 2019 — avr. 2022",
    description:
      "Encadrement d’une équipe de 4 chefs de projets, mise en place du Product Design Sprint. → Plus de 15 produits livrés pour des clients comme Sergic, Roquette ou Norauto.",
  },
  {
    company: "Artifakt",
    role: "Product Manager",
    date: "mai 2022 — juin 2023",
    description:
      "Pilotage de la roadmap, discovery, conception avec le Product Designer et animation d’une équipe de 6 ingénieurs. → Cycle de release accéléré (hebdomadaire). → Nouveau système de facturation. → Design system unifié.",
  },
  {
    company: "Sergic",
    role: "Product Manager (Data et Syndic)",
    date: "juin 2023 — aujourd’hui",
    description:
      "Pilotage de la refonte de l’ERP métier et de la stack Data (Snowflake, Power BI). → Indicateurs partagés à 1 250 collaborateurs. → Intégration d’IA générative dans la gestion des factures. → Migration progressive des agences sur le nouvel ERP.",
  },
];
