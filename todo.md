# TODO — audit contenu / SEO / design

Issu de l'audit du 2026-09-11. Points classés du plus important au plus mineur.

## SEO

- [ ] **Articles sans image de partage** *(impact moyen)*
  Dans `components/BlogHead.tsx`, `og:image` / `twitter:image` ne sont posés **que si l'article a une cover Notion**. Un article sans cover → carte de partage vide sur LinkedIn/Twitter.
  → Ajouter un fallback vers `/og-image.png`.

- [ ] **Titre des articles sans suffixe de marque** *(faible)*
  La home (`— Product Manager & Product Builder`) et la liste blog (`| Maxime Herbaut`) ont un suffixe ; les articles affichent le titre brut (`components/BlogHead.tsx`).
  → Ajouter « Titre | Maxime Herbaut ».

- [ ] **Liste blog : `twitter:title` / `twitter:description` manquants** *(faible)*
  `pages/blog/index.tsx` n'a que `twitter:card`. La home et le CV ont les deux.
  → Aligner.

## Design (charte « Émeraude »)

- [ ] **Hex brut au lieu du token** *(faible, facile)*
  `lib/experience.ts:3` utilise `text-[#12B981]` pour la flèche `→` au lieu de `text-brand`. Seule entorse à la règle « tokens, pas de hex » (hors vue print du CV qui a sa propre palette blanche, légitime).

## Nettoyage

- [ ] **Champs de contenu morts** *(optionnel)*
  `content.home.contact.ctaEmail` / `emailSr` définis mais jamais utilisés — la section Contact n'affiche que « Prendre rendez-vous » + LinkedIn.

## Contenu *(géré dans Notion, décision côté Maxime)*

- [ ] **Duplicate content potentiel** *(SEO)*
  Deux articles au sujet quasi identique : `comment-chatgpt-a-aide-maxime-a-creer-son-site` **et** `comment-j-ai-utilise-chatgpt-pour-creer-mon-site`.
  → Risque de cannibalisation SEO — envisager d'en fusionner un ou de rediriger.

## Maintenance différée (hors audit — montées de version majeures)

- [ ] `@notionhq/client` 3 → 5 (vérifier le mapping des propriétés du blog)
- [ ] Tailwind 3 → 4 (migration config + vérif visuelle)
- [ ] Next 15 → 16 (`next lint` définitivement retiré — déjà anticipé via ESLint CLI)
- [ ] `lucide-react` 0.511 → 1.45 (vérifier que les icônes utilisées existent encore)
