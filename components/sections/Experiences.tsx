import { experiencesData } from '../../data/experiences';
import { formatDescription } from '../../lib/experience';
import { cardBaseClasses } from '../sectionStyles';
import SectionHeading from '../ui/SectionHeading';

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 scroll-mt-24" aria-labelledby="experiences-title">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Parcours" title="Expériences" id="experiences-title" className="mb-12" />

        <div className="relative">
          <div className="absolute inset-y-0 left-5 hidden w-px bg-gradient-to-b from-brand to-transparent sm:block" />

          <div className="space-y-10">
            {experiencesData.map((exp, idx) => (
              <article
                key={`${exp.company}-${idx}`}
                className={`${cardBaseClasses} relative p-6 pl-12 sm:p-8 sm:pl-20`}
                aria-labelledby={`experience-${idx}`}
              >
                <span
                  className="absolute left-5 top-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-brand/60 bg-brand/10 text-brand shadow-lg sm:left-5"
                  aria-hidden="true"
                >
                  <span className="h-2 w-2 rounded-full bg-brand" />
                </span>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p id={`experience-${idx}`} className="text-2xl font-bold text-mist">
                      {exp.company}
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">{exp.role}</p>
                  </div>

                  <span className="inline-flex w-fit rounded-full border border-brand/30 bg-brand/15 px-4 py-1 text-xs font-semibold text-brand">
                    {exp.date}
                  </span>
                </div>

                <p
                  className="mt-4 text-base leading-relaxed text-fog"
                  dangerouslySetInnerHTML={{ __html: formatDescription(exp.description) }}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
