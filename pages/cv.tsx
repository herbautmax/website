import Head from 'next/head';
import { useState, useEffect } from 'react';
import {
  Briefcase, Mail, MapPin, Phone, GraduationCap, Sparkles,
  Soup, Volleyball, Mountain, Trees, Theater, Linkedin, Download
} from 'lucide-react';

import Chip from '../components/ui/Chip';
import JsonLd from '../components/JsonLd';
import { personSchema } from '../lib/structuredData';
import { experiencesData } from '../data/experiences';
import { sortExperiencesDesc, formatDescription } from '../lib/experience';
import { passions } from '../data/passions';
import { content } from '../content/site';

const cv = content.cv;
const info = content.contactInfo;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

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

  // Vue print compacte (1 page A4) déclenchée par ?print=1.
  // useEffect évite tout mismatch d'hydratation (le param est lu côté client).
  const [isPrint, setIsPrint] = useState(false);
  useEffect(() => {
    setIsPrint(new URLSearchParams(window.location.search).get('print') === '1');
  }, []);

  return (
    <>
      <Head>
        <title>{content.meta.cv.title}</title>
        <meta name="description" content={content.meta.cv.description} />
        <meta property="og:title" content={content.meta.cv.title} />
        <meta property="og:description" content={content.meta.cv.description} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={`${siteUrl}/cv`} />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta property="og:site_name" content={content.brand} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.meta.cv.title} />
        <meta name="twitter:description" content={content.meta.cv.description} />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        <link rel="canonical" href={`${siteUrl}/cv`} />
      </Head>
      <JsonLd data={personSchema()} />

      {isPrint ? (
        <PrintCV experiences={experiencesSorted} />
      ) : (
        <WebCV experiences={experiencesSorted} />
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Vue WEB (aérée, fond sombre)                                        */
/* ------------------------------------------------------------------ */

function WebCV({ experiences }: { experiences: typeof experiencesData }) {
  const contactLink =
    'inline-flex items-center gap-2 rounded text-fog transition hover:text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40';

  return (
    <div className="min-h-screen bg-ink font-sans text-fog">
      <main id="main-content" className="mx-auto max-w-5xl space-y-12 px-6 py-16" tabIndex={-1}>

        {/* Header épuré : avatar + identité + coordonnées */}
        <section
          className="rounded-3xl border border-white/[0.06] bg-ink-800 p-8 shadow-card md:p-10"
          aria-labelledby="cv-header"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <img
              src="/avatar-mh.png"
              alt={content.brand}
              className="h-28 w-28 shrink-0 rounded-full border-4 border-brand bg-ink-800 object-cover"
            />
            <div className="space-y-2">
              <h1 id="cv-header" className="text-4xl font-bold tracking-tightest text-mist sm:text-5xl">
                {content.brand}
              </h1>
              <p className="text-lg font-semibold text-fog">{cv.role}</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1 text-sm">
                <a href={info.emailHref} className={contactLink}>
                  <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
                  {info.email}
                  <span className="sr-only">{cv.emailSr}</span>
                </a>
                <a href={info.phoneHref} className={contactLink}>
                  <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
                  {info.phone}
                  <span className="sr-only">{cv.phoneSr}</span>
                </a>
                <a href={info.linkedinUrl} target="_blank" rel="noopener noreferrer" className={contactLink}>
                  <Linkedin className="h-4 w-4 text-brand" aria-hidden="true" />
                  {info.linkedinLabel}
                  <span className="sr-only">{cv.linkedinSr}</span>
                </a>
              </div>
            </div>
            <a
              href={cv.pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand/40 bg-brand/20 px-4 py-2 font-semibold text-brand transition hover:bg-brand/30 sm:ml-auto sm:self-start"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> {cv.download}
            </a>
          </div>
        </section>

        {/* Expériences — timeline verticale chronologique */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Briefcase className="h-7 w-7 text-brand" aria-hidden="true" />
            <h2 className="text-3xl font-bold tracking-tightest text-mist">{cv.sections.experiences}</h2>
          </div>
          <ul className="flex flex-col" role="list">
            {experiences.map((exp, idx) => (
              <li
                key={`${exp.company}-${exp.role}`}
                className={`grid grid-cols-1 gap-2 border-t border-white/[0.08] py-7 sm:grid-cols-[11rem_1fr_auto] sm:items-baseline sm:gap-8 ${
                  idx === experiences.length - 1 ? 'border-b' : ''
                }`}
              >
                <span className="font-label text-sm text-muted">{exp.date}</span>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-mist sm:text-[1.35rem]">{exp.role}</h3>
                  <p
                    className="mt-1.5 text-[0.95rem] leading-relaxed text-muted"
                    dangerouslySetInnerHTML={{ __html: formatDescription(exp.description) }}
                  />
                </div>
                <span className="text-sm font-medium text-fog sm:text-right">{exp.company}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Compétences — regroupées par famille */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Sparkles className="h-7 w-7 text-brand" aria-hidden="true" />
            <h2 className="text-3xl font-bold tracking-tightest text-mist">{cv.sections.skills}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {cv.skillGroups.map((group) => (
              <div key={group.title} className="space-y-3">
                <h3 className="font-label text-sm font-semibold uppercase tracking-wide text-brand">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Chip key={skill} variant="tint" className="rounded-xl px-3.5 py-1.5">
                      {skill}
                    </Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Passions */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Soup className="h-7 w-7 text-brand" aria-hidden="true" />
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
            <GraduationCap className="h-7 w-7 text-brand" aria-hidden="true" />
            <h2 className="text-3xl font-bold tracking-tightest text-mist">{cv.sections.formation}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-1">
            {cv.education.map((item) => (
              <div
                key={item.school}
                className="relative rounded-2xl border border-white/[0.06] bg-ink-800 p-8 shadow-card transition-all duration-300 hover:border-brand/40"
              >
                <div className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-2xl bg-brand/20 px-3 py-1 text-xs font-semibold text-brand">
                  {item.date}
                </div>
                <h3 className="mb-1 text-2xl font-bold text-mist">{item.school}</h3>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand">
                  {item.label}
                </p>
                <p className="text-sm leading-relaxed text-fog">{item.degree}</p>
                <div className="mt-5 h-[2px] w-20 rounded-full bg-brand/50" />
              </div>
            ))}
          </div>
        </section>

        {/* Citation (web uniquement) */}
        <blockquote className="border-t border-white/10 pt-6 text-center italic leading-relaxed text-fog">
          {cv.quote}
          <span className="mt-1 block text-sm text-muted">{cv.quoteAuthor}</span>
        </blockquote>

      </main>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Vue PRINT (compacte, 1 page A4, fond blanc, ATS-friendly)          */
/* ------------------------------------------------------------------ */

function PrintCV({ experiences }: { experiences: typeof experiencesData }) {
  const sectionTitle = 'text-[13px] font-bold uppercase tracking-wide text-brand';

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto w-[210mm] min-h-[297mm] bg-white px-[14mm] py-[12mm] font-sans text-[#181B1F]"
    >
      <div className="grid grid-cols-[34%_1fr] gap-8">

        {/* ----- Colonne gauche : identité + infos ----- */}
        <aside className="space-y-5">
          <div className="space-y-3">
            <img
              src="/avatar-mh.png"
              alt={content.brand}
              className="h-24 w-24 rounded-full object-cover ring-2 ring-brand"
            />
            <div>
              <h1 className="text-[22px] font-bold leading-tight tracking-tight">{content.brand}</h1>
              <p className="text-[12px] font-semibold text-brand">{cv.role}</p>
            </div>
          </div>

          {/* Coordonnées */}
          <div className="space-y-1.5 text-[10.5px] leading-[1.35]">
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
              <span>{info.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
              <span>{info.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
              <span>{info.linkedinLabel}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
              <span>{info.location}</span>
            </div>
          </div>

          {/* Compétences groupées */}
          <div className="space-y-2">
            <h2 className={sectionTitle}>{cv.sections.skills}</h2>
            {cv.skillGroups.map((group) => (
              <div key={group.title} className="space-y-0.5">
                <p className="text-[10px] font-bold">{group.title}</p>
                <p className="text-[10.5px] leading-[1.35] text-[#3A3F47]">
                  {group.items.join(' · ')}
                </p>
              </div>
            ))}
          </div>

          {/* Formation */}
          <div className="space-y-1.5">
            <h2 className={sectionTitle}>{cv.sections.formation}</h2>
            {cv.education.map((item) => (
              <div key={item.school} className="space-y-0.5">
                <p className="text-[11px] font-bold">{item.school}</p>
                <p className="text-[10px] font-semibold text-brand">
                  {item.label} · {item.date}
                </p>
                <p className="text-[10px] leading-[1.3] text-[#3A3F47]">{item.degree}</p>
              </div>
            ))}
          </div>

          {/* Passions */}
          <div className="space-y-1.5">
            <h2 className={sectionTitle}>{cv.sections.passions}</h2>
            <p className="text-[10.5px] leading-[1.35] text-[#3A3F47]">
              {passions.map((p) => p.label).join(' · ')}
            </p>
          </div>
        </aside>

        {/* ----- Colonne droite : expériences en timeline ----- */}
        <section className="space-y-3">
          <h2 className={sectionTitle}>{cv.sections.experiences}</h2>
          <ol className="space-y-3 border-l border-[#E2E5E9] pl-4">
            {experiences.map((exp) => (
              <li key={`${exp.company}-${exp.role}`} className="relative break-inside-avoid">
                <span
                  className="absolute -left-[21px] top-1 h-2 w-2 rounded-full bg-brand"
                  aria-hidden="true"
                />
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-[12px] font-bold">
                    {exp.company} <span className="font-semibold text-[#3A3F47]">· {exp.role}</span>
                  </p>
                  <span className="shrink-0 text-[10px] font-semibold text-brand">{exp.date}</span>
                </div>
                <p
                  className="mt-0.5 text-[10.5px] leading-[1.35] text-[#3A3F47]"
                  dangerouslySetInnerHTML={{ __html: formatDescription(exp.description) }}
                />
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
