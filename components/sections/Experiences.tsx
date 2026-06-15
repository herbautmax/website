import { experiencesData } from '../../data/experiences';
import { sortExperiencesDesc, formatDescription } from '../../lib/experience';
import { eyebrowClasses, sectionTitleClasses } from '../sectionStyles';

export default function Experiences() {
  const experiences = sortExperiencesDesc(experiencesData);

  return (
    <section
      id="experiences"
      className="w-full border-y border-white/[0.06] bg-ink py-24 scroll-mt-24"
      aria-labelledby="experiences-title"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-4">
          <span className={eyebrowClasses}>Expériences</span>
          <h2 id="experiences-title" className={sectionTitleClasses}>
            Un fil produit, plusieurs terrains
          </h2>
        </div>

        <ul className="flex flex-col" role="list">
          {experiences.map((exp, idx) => (
            <li
              key={`${exp.company}-${idx}`}
              className={`grid grid-cols-1 gap-2 border-t border-white/[0.08] py-7 sm:grid-cols-[11rem_1fr_auto] sm:gap-8 sm:items-baseline ${
                idx === experiences.length - 1 ? 'border-b' : ''
              }`}
            >
              <span className="font-label text-sm text-muted">{exp.date}</span>

              <div>
                <h3 className="text-xl font-bold tracking-tight text-mist sm:text-[1.35rem]">
                  {exp.role}
                </h3>
                <p
                  className="mt-1.5 text-[0.95rem] leading-relaxed text-muted"
                  dangerouslySetInnerHTML={{ __html: formatDescription(exp.description) }}
                />
              </div>

              <span className="text-sm font-medium text-fog sm:text-right">{exp.company}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
