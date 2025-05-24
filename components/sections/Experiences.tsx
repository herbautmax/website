import { ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const experiences = [
  {
    company: "Villa Finder",
    role: "Développeur web (stage)",
    date: "juin 2014 — avr 2015",
  },
  {
    company: "Freelance",
    role: "Développeur web",
    date: "juin 2015 — avr 2016",
  },
  {
    company: "Tymate",
    role: "Chef de projets",
    date: "avr 2016 — déc 2018",
  },
  {
    company: "Tymate",
    role: "Directeur de projets",
    date: "jan 2019 — avr 2022",
  },
  {
    company: "Artifakt",
    role: "Product Manager",
    date: "mai 2022 — juin 2023",
  },
  {
    company: "Sergic",
    role: "Product Manager Data",
    date: "juin 2023 — aujourd’hui",
  },
  {
    company: "Weasyn",
    role: "Associé / CPO",
    date: "sept 2023 — aujourd’hui",
  },
];

export default function Experiences() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Avancer d'une carte vers la droite
  const scrollRight = (idx: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.querySelectorAll('.exp-card');
    const card = cards[idx + 1] as HTMLElement;
    if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  };

  return (
    <section id="experiences" className="py-24">
      <h2 className="text-3xl font-extrabold mb-10 text-center text-white tracking-tight">
        Expériences
      </h2>
      <div
        className="relative max-w-[100vw] px-4"
        style={{ overflow: 'hidden' }}
      >
        <div
          ref={scrollRef}
          className="flex items-stretch gap-4 md:gap-8 pl-8 pr-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: 'smooth',
          }}
          tabIndex={0}
        >
          {experiences.map((exp, idx) => (
            <div key={exp.company + idx} className="flex items-center">
              <div
                className="exp-card min-w-[280px] md:min-w-[340px] max-w-xs bg-[#23272a] rounded-2xl shadow-xl p-6 border border-white/10 flex-shrink-0 flex flex-col justify-between h-full snap-start"
              >
                <div>
                  <div className="text-2xl font-extrabold mb-1 text-white">{exp.company}</div>
                  <div className="text-base text-gray-400">{exp.role}</div>
                </div>
                <div className="text-[#10b981] text-base font-semibold mt-4">{exp.date}</div>
              </div>
              {/* Flèche entre chaque card (jamais à la fin) */}
              {idx < experiences.length - 1 && (
                <button
                  type="button"
                  className="ml-2 p-2 rounded-full hover:bg-[#10b981]/15 focus-visible:ring-2 focus:ring-[#10b981] transition"
                  aria-label="Avancer"
                  onClick={() => scrollRight(idx)}
                  tabIndex={0}
                >
                  <ChevronRight className="w-7 h-7 text-[#10b981]" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Style pour cacher la barre de scroll */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
