import { ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import Tag from '../ui/Tag';
import { experiencesData } from '../../data/experiences';
import { formatDescription } from '../../lib/experience';

export default function Experiences() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRight = (idx: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.querySelectorAll('.exp-card');
    const card = cards[idx + 1] as HTMLElement;
    if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  };

  return (
    <section id="experiences" className="py-24 scroll-mt-24" aria-labelledby="experiences-title">
      <h2 id="experiences-title" className="text-3xl font-extrabold mb-10 text-center text-white tracking-tight">
        Expériences
      </h2>
      <div className="relative max-w-[100vw] px-4" style={{ overflow: 'hidden' }}>
        <div
          ref={scrollRef}
          className="flex items-stretch gap-4 md:gap-8 pl-8 pr-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}
          tabIndex={0}
          role="list"
          aria-label="Parcours professionnel"
        >
          {experiencesData.map((exp, idx) => (
            <div key={exp.company + idx} className="flex items-center" role="listitem">
              <article
                className={`exp-card relative pt-6 min-w-[280px] md:min-w-[340px] max-w-xs bg-[#23272a] rounded-2xl shadow-xl p-6 border border-white/10 flex-shrink-0 flex flex-col h-full snap-start`}
                aria-labelledby={`experience-${idx}`}
              >
                {/* 🟢 Badge date dans le coin */}
                <div className="absolute top-0 right-0 bg-[#10b981]/20 text-[#10b981] text-xs font-semibold px-3 py-1 rounded-bl-2xl rounded-tr-2xl border border-[#10b981]/30">
                  {exp.date}
                </div>

                <div className="space-y-4">
                  {/* (on enlève l’ancien <Tag> placé en haut du contenu) */}
                  <header id={`experience-${idx}`} className="space-y-1">
                    <p className="text-2xl font-extrabold mb-1 text-white">{exp.company}</p>
                    <p className="text-[12px] tracking-[0.12em] uppercase text-gray-300">{exp.role}</p>
                  </header>
                  <p
                    className="text-sm text-gray-200 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatDescription(exp.description) }}
                  />
                </div>
              </article>

              {idx < experiencesData.length - 1 && (
                <button
                  type="button"
                  className="ml-2 p-2 rounded-full hover:bg-[#10b981]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#23272a] transition"
                  aria-label="Avancer"
                  onClick={() => scrollRight(idx)}
                >
                  <ChevronRight className="w-7 h-7 text-[#10b981]" aria-hidden="true" />
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
