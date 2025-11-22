import Head from 'next/head';
import {
  Briefcase, Mail, MapPin, Phone, GraduationCap, Sparkles,
  Soup, Volleyball, Mountain, Trees, Theater, Linkedin, Download
} from 'lucide-react';

import Tag from '../components/ui/Tag';
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

      <div className="min-h-screen bg-gradient-to-b from-[#181b1f] via-[#22272a] to-[#191b1f] text-gray-100 font-sans">
        <main id="main-content" className="max-w-5xl mx-auto px-6 py-16 space-y-12" tabIndex={-1}>
         
         
          {/* Header */}
          <section
            className="rounded-3xl border border-white/10 bg-[#22272a]/95 shadow-2xl p-8 md:p-10"
            aria-labelledby="cv-header"
          >
            <div className="grid gap-8 md:grid-cols-[1.6fr,1fr] md:items-start">
              {/* Colonne gauche : Identité + pitch */}
              <header className="space-y-5" id="cv-header">
                <div className="flex items-center gap-3 text-xs md:text-sm uppercase tracking-widest text-[#10b981] font-semibold">
                  <Sparkles className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                  <span>Curriculum vitæ</span>
                  <span className="mx-2 h-3 w-px bg-white/20" aria-hidden="true" />
                  <span className="rounded-full bg-[#10b981]/15 px-2.5 py-1 text-[#10b981] ring-1 ring-inset ring-[#10b981]/30">
                    10 ans d’expérience
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
                  Maxime Herbaut
                </h1>

                <p className="text-lg md:text-xl text-gray-300 font-semibold">
                  Product Manager · Digital Builder
                </p>

                <p className="max-w-2xl text-gray-300 leading-relaxed">
                  Avec 10 ans d’expérience, mon approche reste la même : aller vite, bien, et ajuster avec l’usage.
                  <br className="hidden sm:block" />
                  La valeur se construit dans l’itération, pas dans la théorie.
                </p>
              </header>

              {/* Colonne droite : Coordonnées + action */}
              <aside
                className="rounded-2xl border border-white/10 bg-[#181b1f] p-6 md:p-7 space-y-4 flex flex-col justify-between"
                aria-label="Coordonnées"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="h-5 w-5 text-[#10b981]" aria-hidden="true" />
                    <a
                      href="mailto:maxime@herbaut.me"
                      className="transition hover:text-[#10b981] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/40 rounded"
                    >
                      maxime@herbaut.me
                      <span className="sr-only"> (ouvre votre client de messagerie)</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="h-5 w-5 text-[#10b981]" aria-hidden="true" />
                    <a
                      href="tel:+33660160713"
                      className="transition hover:text-[#10b981] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/40 rounded"
                    >
                      +33 6 60 16 07 13
                      <span className="sr-only"> (composer ce numéro)</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <Linkedin className="h-5 w-5 text-[#10b981]" aria-hidden="true" />
                    <a
                      href="https://www.linkedin.com/in/maximeherbaut"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-[#10b981] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/40 rounded"
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
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#10b981]/20 text-[#10b981] font-semibold px-4 py-2 border border-[#10b981]/40 hover:bg-[#10b981]/30 transition"
                >
                  <Download className="h-4 w-4" /> Télécharger le CV
                </a>
              </aside>

              {/* Citation centrée sous les deux colonnes */}
              <div className="md:col-span-2 mt-8 flex justify-center">
                <blockquote className="max-w-xl text-center text-gray-200 italic border-t border-white/10 pt-4 leading-relaxed">
                  « La perfection, c’est quand il n’y a plus rien à enlever. »
                  <span className="block text-gray-500 text-sm mt-1">— Antoine de Saint-Exupéry</span>
                </blockquote>
              </div>
            </div>
          </section>



          <section className="space-y-6">
             <div className="flex items-center gap-3">
              <Briefcase className="w-7 h-7 text-[#10b981]" />
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Expériences</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {experiencesSorted.map((experience) => (
                <article
                  key={`${experience.company}-${experience.role}`}
                  className="relative pt-8 bg-[#22272a] border border-white/10 rounded-2xl p-6 shadow-lg flex flex-col justify-between"
                >
                  {/* 🟢 Badge date dans le coin */}
                  <div className="absolute top-0 right-0 bg-[#10b981]/20 text-[#10b981] text-xs font-semibold px-3 py-1 rounded-bl-2xl rounded-tr-2xl border border-[#10b981]/30">
                    {experience.date}
                  </div>

                  <div className="space-y-3">
                    <header className="space-y-1">
                      {/* (on enlève le <Tag> ici aussi) */}
                      <h3 className="text-2xl font-bold text-white">{experience.company}</h3>
                      <p className="text-sm uppercase tracking-wide text-gray-400">{experience.role}</p>
                    </header>

                    <p
                      className="text-gray-300 leading-relaxed text-sm"
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
              <Sparkles className="w-7 h-7 text-[#10b981]" />
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Compétences clés</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-[#10b981]/15 text-[#10b981] font-semibold px-4 py-2 rounded-xl border border-[#10b981]/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Passions */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Soup className="w-7 h-7 text-[#10b981]" />
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Passions</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {passions.map((p) => {
                // On utilise ici p.icon, et non plus p.key
                const iconMap = {
                  soup: Soup,
                  volleyball: Volleyball,
                  mountain: Mountain,
                  trees: Trees,
                  theater: Theater,
                } as const;

                const Icon = iconMap[p.icon] ?? Soup;

                return (
                  <span
                    key={p.key}
                    className="flex items-center gap-2 bg-[#10b981]/20 text-[#10b981] rounded-lg px-4 py-2 font-semibold"
                  >
                    <Icon className="w-5 h-5" />
                    {p.label}
                  </span>
                );
              })}
            </div>
          </section>


          {/* Formation */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-[#10b981]" />
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Formation</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-1">
              {education.map((item) => (
                <div
                  key={item.school}
                  className="relative bg-gradient-to-br from-[#22272a] to-[#1a1d20] border border-white/10 rounded-2xl p-8 shadow-lg hover:border-[#10b981]/40 transition-all duration-300"
                >
                  {/* Date badge */}
                  <div className="absolute top-0 right-0 bg-[#10b981]/20 text-[#10b981] text-xs font-semibold px-3 py-1 rounded-bl-2xl rounded-tr-2xl">
                    {item.date}
                  </div>

                  {/* Contenu */}
                  <h3 className="text-2xl font-bold text-white mb-1">{item.school}</h3>
                  <p className="text-[#10b981] font-semibold text-sm uppercase tracking-wide mb-3">
                    Diplôme d’ingénieur
                  </p>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {item.degree}
                  </p>

                  {/* Ligne décorative */}
                  <div className="mt-5 h-[2px] w-20 bg-[#10b981]/50 rounded-full" />
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
