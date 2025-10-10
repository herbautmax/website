export type Passion = { key: string; label: string; icon: "soup"|"volleyball"|"mountain"|"trees"|"theater"; };

export const passions: Passion[] = [
  { key: "cuisine",   label: "Cuisine & bons produits", icon: "soup" },
  { key: "volley",    label: "Volley, beach-volley",     icon: "volleyball" },
  { key: "rando",     label: "Randonnée",                icon: "mountain" },
  { key: "nature",    label: "Nature",                   icon: "trees" },
  { key: "theatre",   label: "Théâtre",                  icon: "theater" },
];