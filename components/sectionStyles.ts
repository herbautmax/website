// Titre de section : blanc, serré, PLUS de dégradé.
export const sectionTitleClasses =
  'text-4xl sm:text-5xl font-bold tracking-tightest text-mist';

// On garde le nom pour ne pas casser les imports existants, mais SANS dégradé.
export const sectionTitleGradientClasses = sectionTitleClasses;

// Eyebrow réutilisable au-dessus des titres (Space Grotesk, majuscules, émeraude)
export const eyebrowClasses =
  'font-label text-sm font-semibold tracking-[0.16em] uppercase text-brand';

// Carte : surface pleine + bordure fine, plus de dégradé. Hover discret émeraude.
export const cardBaseClasses =
  'rounded-3xl border border-white/[0.07] bg-ink-800 shadow-card transition-all duration-300 ' +
  'hover:-translate-y-1 hover:border-brand/60 hover:shadow-card-hover ' +
  'focus-within:ring-2 focus-within:ring-brand/50';
