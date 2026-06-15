import { Soup, Volleyball, Mountain, Trees, Theater } from 'lucide-react';
import { eyebrowClasses, sectionTitleClasses } from '../sectionStyles';
import Chip from '../ui/Chip';
import { content } from '../../content/site';

const about = content.home.about;

const passionIcons = {
  soup: Soup,
  volleyball: Volleyball,
  mountain: Mountain,
  trees: Trees,
  theater: Theater,
} as const;

export default function About() {
  return (
    <section id="about" className="w-full py-24 scroll-mt-24" aria-labelledby="about-title">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          {/* Titre */}
          <div className="flex flex-col gap-4">
            <span className={eyebrowClasses}>{about.eyebrow}</span>
            <h2 id="about-title" className={sectionTitleClasses}>
              {about.title}
            </h2>
          </div>

          {/* Bio + stats */}
          <div>
            <p className="mb-6 text-lg leading-relaxed text-fog sm:text-xl">
              {about.bio1}
            </p>
            <p className="mb-9 text-lg leading-relaxed text-muted sm:text-xl">
              {about.bio2}
            </p>

            <dl className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {about.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/[0.07] bg-ink p-6">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-4xl font-extrabold tracking-tightest text-brand">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-sm text-muted">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>

            {/* Passions */}
            <div className="mt-10 border-t border-white/[0.08] pt-8">
              <p className="mb-4 font-label text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                {about.passionsLabel}
              </p>
              <ul className="flex flex-wrap gap-3">
                {about.passions.map(({ iconKey, label }) => {
                  const Icon = passionIcons[iconKey];
                  return (
                    <li key={label}>
                      <Chip icon={<Icon className="h-5 w-5" />}>{label}</Chip>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
