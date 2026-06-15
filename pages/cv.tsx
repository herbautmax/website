import Head from 'next/head';
import {
  Briefcase, Mail, MapPin, Phone, GraduationCap, Sparkles,
  Soup, Volleyball, Mountain, Trees, Theater, Linkedin, Download
} from 'lucide-react';

import Chip from '../components/ui/Chip';
import { experiencesData } from '../data/experiences';
import { sortExperiencesDesc, formatDescription } from '../lib/experience';
import { passions } from '../data/passions';
import { content } from '../content/site';

const cv = content.cv;

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
        <title>{content.meta.cv.title}</title>
        <meta name="description" content={content.meta.cv.description} />
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
                  <span className="font-label">{cv.eyebrow}</span>
                  <span className="mx-2 h-3 w-px bg-white/20" aria-hidden="true" />
                  <span className="rounded-full bg-brand/15 px-2.5 py-1 text-brand ring-1 ring-inset ring-brand/30">
                    {cv.badge}
                  </span>
                </div>

                <h1 className="text-4xl font-bold leading-tight tracking-tightest text-mist md:text-5xl">
                  {content.brand}
                </h1>

                <p className="text-lg font-semibold text-fog md:text-xl">
                  {cv.role}
                </p>

                <p className="max-w-2xl leading-relaxed text-fog">
                  {cv.pitchLine1}
                  <br className="hidden sm:block" />
                  {cv.pitchLine2}
                </p>
              </header>

              {/* Colonne droite : Coordonnées + action */}
              <aside
                className="flex flex-col justify-between space-y-4 rounded-2xl border border-white/10 bg-ink-950 p-6 md:p-7"
                aria-label={cv.contactAriaLabel}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-fog">
                    <Mail className="h-5 w-5 text-brand" aria-hidden="true" />
                    <a
                      href={content.contactInfo.emailHref}
                      className="rounded transition hover:text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
                    >
                      {content.contactInfo.email}
                      <span className="sr-only">{cv.emailSr}</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-fog">
                    <Phone className="h-5 w-5 text-brand" aria-hidden="true" />
                    <a
                      href={content.contactInfo.phoneHref}
                      className="rounded transition hover:text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
                    >
                      {content.contactInfo.phone}
                      <span className="sr-only">{cv.phoneSr}</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-fog">
                    <Linkedin className="h-5 w-5 text-brand" aria-hidden="true" />
                    <a
                      href={content.contactInfo.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded transition hover:text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
                    >
                      {content.contactInfo.linkedinLabel}
                      <span className="sr-only">{cv.linkedinSr}</span>
                    </a>
                  </div>
                </div>

                {/* Bouton optionnel */}
                <a
                  href={cv.pdfHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-brand/40 bg-brand/20 px-4 py-2 font-semibold text-brand transition hover:bg-brand/30"
                >
                  <Download className="h-4 w-4" /> {cv.download}
                </a>
              </aside>

              {/* Citation centrée sous les deux colonnes */}
              <div className="mt-8 flex justify-center md:col-span-2">
                <blockquote className="max-w-xl border-t border-white/10 pt-4 text-center italic leading-relaxed text-fog">
                  {cv.quote}
                  <span className="mt-1 block text-sm text-muted">{cv.quoteAuthor}</span>
                </blockquote>
              </div>
            </div>
          </section>

          {/* Expériences */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Briefcase className="h-7 w-7 text-brand" />
              <h2 className="text-3xl font-bold tracking-tightest text-mist">{cv.sections.experiences}</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {experiencesSorted.map((experience) => (
                <article
                  key={`${experience.company}-${experience.role}`}
                  className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-ink-800 p-6 pt-8 shadow-card"
                >
                  {/* Badge date dans le coin */}
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
              <h2 className="text-3xl font-bold tracking-tightest text-mist">{cv.sections.skills}</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {cv.skills.map((skill) => (
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
              <h2 className="text-3xl font-bold tracking-tightest text-mist">{cv.sections.passions}</h2>
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
              <h2 className="text-3xl font-bold tracking-tightest text-mist">{cv.sections.formation}</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-1">
              {cv.education.map((item) => (
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
                    {cv.degreeLabel}
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
