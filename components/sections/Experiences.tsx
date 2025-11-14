import { ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { experiencesData } from '../../data/experiences';
import { formatDescription } from '../../lib/experience';

export default function Experiences() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = (idx: number) => {
    if (!scrollRef.current) return;

    const cards = scrollRef.current.querySelectorAll('.exp-card');
    const card = cards[idx + 1] as HTMLElement | undefined;
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }
  };

  return (
    <section id="experiences" className="py-24 scroll-mt-24" aria-labelledby="experiences-title">
      <h2 id="experiences-title" className="text-3xl font-extrabold mb-10 text-center text-white tracking-tight">
        Expériences
      </h2>

      <div className="relative max-w-[100vw] px-4">
        <div
          ref={scrollRef}
          className="flex items-stretch gap-4 md:gap-8 pl-4 pr-12 sm:pl-8 sm:pr-16 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}
          tabIndex={0}
          role="list"
          aria-label="Parcours professionnel"
        >
          {experiencesData.map((exp, idx) => (
            <div key={exp.company + idx} className="flex items-center" role="listitem">
              <article
                className="exp-card relative flex h-full min-w-[280px] max-w-sm flex-shrink-0 flex-col rounded-2xl border border-white/10 bg-[#23272a] p-8 pt-6 shadow-xl transition-transform duration-300 hover:scale-[1.02] hover:border-[#10b981] md:min-w-[340px] md:p-10"
                aria-labelledby={`experience-${idx}`}
              >
                <div className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-2xl border border-[#10b981]/30 bg-[#10b981]/20 px-3 py-1 text-xs font-semibold text-[#10b981]">
                  {exp.date}
                </div>

                <div className="space-y-4">
                  <header id={`experience-${idx}`} className="space-y-1">
                    <p className="text-2xl font-extrabold text-white">{exp.company}</p>
                    <p className="text-[12px] uppercase tracking-[0.12em] text-gray-300">{exp.role}</p>
                  </header>
                  <p
                    className="text-sm leading-relaxed text-gray-200"
                    dangerouslySetInnerHTML={{ __html: formatDescription(exp.description) }}
                  />
                </div>
              </article>

              {idx < experiencesData.length - 1 && (
                <button
                  type="button"
                  className="ml-2 -mr-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#10b981]/40 bg-[#10b981]/15 text-[#10b981] shadow-lg shadow-black/30 backdrop-blur-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#181b1f]"
                  aria-label="Avancer"
                  onClick={() => scrollRight(idx)}
                >
                  <ChevronRight className="h-6 w-6" aria-hidden="true" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
