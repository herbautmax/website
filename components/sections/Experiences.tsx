import { experiencesData } from '../../data/experiences';
import { formatDescription } from '../../lib/experience';

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 scroll-mt-24" aria-labelledby="experiences-title">
      <h2
        id="experiences-title"
        className="mb-12 text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
      >
        Expériences
      </h2>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-5 hidden w-px bg-gradient-to-b from-[#10b981] to-transparent sm:block" />

          <div className="space-y-10">
            {experiencesData.map((exp, idx) => (
              <article
                key={`${exp.company}-${idx}`}
                className="relative rounded-3xl border border-white/5 bg-[#1d2125] p-6 pl-12 shadow-[0_15px_40px_-30px_rgba(16,185,129,0.8)] transition hover:border-[#10b981]/40 hover:shadow-[0_25px_50px_-30px_rgba(16,185,129,1)] sm:p-8 sm:pl-20"
                aria-labelledby={`experience-${idx}`}
              >
                <span
                  className="absolute left-5 top-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-[#10b981]/60 bg-[#10b981]/10 text-[#10b981] shadow-lg sm:left-5"
                  aria-hidden="true"
                >
                  <span className="h-2 w-2 rounded-full bg-[#10b981]" />
                </span>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p id={`experience-${idx}`} className="text-2xl font-extrabold text-white">
                      {exp.company}
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400">{exp.role}</p>
                  </div>

                  <span className="inline-flex w-fit rounded-full border border-[#10b981]/30 bg-[#10b981]/15 px-4 py-1 text-xs font-semibold text-[#10b981]">
                    {exp.date}
                  </span>
                </div>

                <p
                  className="mt-4 text-base leading-relaxed text-gray-200"
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
