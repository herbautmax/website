// Ajoute un saut de ligne et une petite marge avant chaque "→", et garde la flèche avec le texte
export function formatDescription(text: string) {
  return text.replace(/\s*→\s*/g, '<br/><span class="inline-block mt-2 text-[#10b981]">→</span>&nbsp;');
}

// Tri décroissant par date de fin (ou "aujourd'hui"), puis par date de début
function yearOrMax(dateStr: string) {
  if (/aujourd'hui/i.test(dateStr)) return 9999;
  const years = dateStr.match(/\d{4}/g);
  return years ? parseInt(years[years.length - 1], 10) : 0;
}
function startYear(dateStr: string) {
  const years = dateStr.match(/\d{4}/g);
  return years ? parseInt(years[0], 10) : 0;
}
export function sortExperiencesDesc<T extends { date: string }>(arr: T[]): T[] {
  return [...arr].sort((a, b) => {
    const endB = yearOrMax(b.date), endA = yearOrMax(a.date);
    if (endB !== endA) return endB - endA;
    return startYear(b.date) - startYear(a.date);
  });
}
