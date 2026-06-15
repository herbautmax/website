import Head from 'next/head';
import {
  Briefcase, Mail, MapPin, Phone, GraduationCap, Sparkles,
  Soup, Volleyball, Mountain, Trees, Theater, Linkedin, Download
} from 'lucide-react';

import Chip from '../components/ui/Chip';
import { experiencesData } from '../data/experiences';
import { sortExperiencesDesc, formatDescription } from '../lib/experience';
import { passions } from '../data/passions';

const skills = [
  // 🧭 Product Management
  'Discovery & user research',
  'Delivery',
  "Facilitation d'ateliers",
  'Product builder',
  "Pilotage d'équipes pluridisciplinaires",
  'Management de projets',
  'Méthodologies agiles (Scrum, Kanban)',

  // 📊 Data & analytique
  'Data & analytics',
  'SQL / Snowflake',

  // 🤖 IA & automatisation
  'IA générative',
  'No-code & outils d’automatisation (n8n, Make, Supabase)',

  // 🧠 Design & expérience utilisateur
  'Design thinking',
  'Product Design Sprint',
  'Collaboration UX / UI',

  // 🌍 Langues & communication
  'Anglais C1 (TOEIC 905/990)',
  'Communication claire & vulgarisation technique',
];

const education = [
  {
    school: 'ITEEM Lille',
    degree:
      "Diplôme d’ingénieur de l'École Centrale de Lille et Skema Business School. Double compétence en ingénierie généraliste et management de projet, avec spécialisation e-business et mobilité connectée.",
    date: '2010 – 2015',
  },
];

// Mapping des icônes pour les passions (clés alignées avec /data/passions)
const iconMap = {
  soup: Soup,
  volleyball: Volleyball,
  mountain: Mountain,
  trees: Trees,
  theater: Theater,
} as const;

export default function CVPage() {
  const experiencesSorted = sortExperiencesDesc(experiencesData);

  return (
    <>
      <Head>
        <title>Maxime Herbaut — CV</title>
        <meta name="description" content="Curriculum vitae de Maxime Herbaut, Product Manager." />
      </Head>

      <div className="min-h-screen bg-ink font-sans text-fog">
        <main id="main-content" className="mx-auto max-w-5xl space-y-12 px-6 py-16" tabIndex={-1}>

          {/* Header */}
          <section
            className="rounded-3xl border border-white/10 bg-ink-800 p-8 shadow-card md:p-10"
            aria-labelledby="cv-header"
          >
            <div className="grid gap-8 md:grid-cols-[1.6fr,1fr] md:items-start">
              {/* Colonne gauche : Identité + pitch */}
              <header className="space-y-5" id="cv-header">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-brand md:text-sm">
                  <Sparkles className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                  <span className="font-label">Curriculum vitæ</span>
                  <span className="mx-2 h-3 w-px bg-white/20" aria-hidden="true" />
                  <span className="rounded-full bg-brand/15 px-2.5 py-1 text-brand ring-1 ring-inset ring-brand/30">
                    10 ans d’expérience
                  </span>
                </div>

                <h1 className="text-4xl font-bold leading-tight tracking-tightest text-mist md:text-5xl">
                  Maxime Herbaut
                </h1>

                <p className="text-lg font-semibold text-fog md:text-xl">
                  Product Manager · Digital Builder
                </p>

                <p className="max-w-2xl leading-relaxed text-fog">
                  Avec 10 ans d’expérience, mon approche reste la même : aller vite, bien, et ajuster avec l’usage.
                  <br className="hidden sm:block" />
                  La valeur se construit dans l’itération, pas dans la théorie.
                </p>
              </header>

              {/* Colonne droite : Coordonnées + action */}
              <aside
                className="flex flex-col justify-between space-y-4 rounded-2xl border border-white/10 bg-ink-950 p-6 md:p-7"
                aria-label="Coordonnées"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-fog">
                    <Mail className="h-5 w-5 text-brand" aria-hidden="true" />
                    <a
                      href="mailto:maxime@herbaut.me"
                      className="rounded transition hover:text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
                    >
                      maxime@herbaut.me
                      <span className="sr-only"> (ouvre votre client de messagerie)</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-fog">
                    <Phone className="h-5 w-5 text-brand" aria-hidden="true" />
                    <a
                      href="tel:+33660160713"
                      className="rounded transition hover:text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
                    >
                      +33 6 60 16 07 13
                      <span className="sr-only"> (composer ce numéro)</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-fog">
                    <Linkedin className="h-5 w-5 text-brand" aria-hidden="true" />
                    <a
                      href="https://www.linkedin.com/in/maximeherbaut"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded transition hover:text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
                    >
                      linkedin.com/in/maximeherbaut
                      <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
                    </a>
                  </div>
                </div>

                {/* Bouton optionnel */}
                <a
                  href="/cv-maxime-herbaut.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-brand/40 bg-brand/20 px-4 py-2 font-semibold text-brand transition hover:bg-brand/30"
                >
                  <Download className="h-4 w-4" /> Télécharger le CV
                </a>
              </aside>

              {/* Citation centrée sous les deux colonnes */}
              <div className="mt-8 flex justify-center md:col-span-2">
                <blockquote className="max-w-xl border-t border-white/10 pt-4 text-center italic leading-relaxed text-fog">
                  « La perfection, c’est quand il n’y a plus rien à enlever. »
                  <span className="mt-1 block text-sm text-muted">— Antoine de Saint-Exupéry</span>
                </blockquote>
              </div>
            </div>
          </section>

          {/* Expériences */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Briefcase className="h-7 w-7 text-brand" />
              <h2 className="text-3xl font-bold tracking-tightest text-mist">Expériences</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {experiencesSorted.map((experience) => (
                <article
                  key={`${experience.company}-${experience.role}`}
                  className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-ink-800 p-6 pt-8 shadow-card"
                >
                  {/* 🟢 Badge date dans le coin */}
                  <div className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-2xl border border-brand/30 bg-brand/20 px-3 py-1 text-xs font-semibold text-brand">
                    {experience.date}
                  </div>

                  <div className="space-y-3">
                    <header className="space-y-1">
                      <h3 className="text-2xl font-bold text-mist">{experience.company}</h3>
                      <p className="text-sm uppercase tracking-wide text-muted">{experience.role}</p>
                    </header>

                    <p
                      className="text-sm leading-relaxed text-fog"
                      dangerouslySetInnerHTML={{ __html: formatDescription(experience.description) }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Compétences */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Sparkles className="h-7 w-7 text-brand" />
              <h2 className="text-3xl font-bold tracking-tightest text-mist">Compétences clés</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Chip key={skill} variant="tint" className="rounded-xl px-4 py-2">
                  {skill}
                </Chip>
              ))}
            </div>
          </section>

          {/* Passions */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Soup className="h-7 w-7 text-brand" />
              <h2 className="text-3xl font-bold tracking-tightest text-mist">Passions</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {passions.map((p) => {
                const Icon = iconMap[p.icon] ?? Soup;
                return (
                  <Chip key={p.key} icon={<Icon className="h-5 w-5" />} className="px-4 py-2">
                    {p.label}
                  </Chip>
                );
              })}
            </div>
          </section>

          {/* Formation */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-7 w-7 text-brand" />
              <h2 className="text-3xl font-bold tracking-tightest text-mist">Formation</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-1">
              {education.map((item) => (
                <div
                  key={item.school}
                  className="relative rounded-2xl border border-white/10 bg-ink-800 p-8 shadow-card transition-all duration-300 hover:border-brand/40"
                >
                  {/* Date badge */}
                  <div className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-2xl bg-brand/20 px-3 py-1 text-xs font-semibold text-brand">
                    {item.date}
                  </div>

                  {/* Contenu */}
                  <h3 className="mb-1 text-2xl font-bold text-mist">{item.school}</h3>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand">
                    Diplôme d’ingénieur
                  </p>
                  <p className="text-sm leading-relaxed text-fog">{item.degree}</p>

                  {/* Ligne décorative */}
                  <div className="mt-5 h-[2px] w-20 rounded-full bg-brand/50" />
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
