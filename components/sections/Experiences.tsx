import { ChevronRight } from 'lucide-react';
import { useRef } from 'react';

export const experiencesData = [
  {
    company: "Villa Finder",
    role: "Développeur web (stage)",
    date: "juin 2014 — avr 2015",
    description:
      "Mise en place d'un outil interne de gestion des demandes clients et automatisation des tâches répétitives pour accélérer le traitement des leads.",
  },
  {
    company: "Freelance",
    role: "Développeur web",
    date: "juin 2015 — avr 2016",
    description:
      "Accompagnement d'une dizaine de clients sur des MVP orientés e-commerce et SaaS avec une approche centrée utilisateur et des livraisons rapides.",
  },
  {
    company: "Tymate",
    role: "Chef de projets",
    date: "avr 2016 — déc 2018",
    description:
      "Pilotage de squads produit pluridisciplinaires et déploiement de méthodologies agiles qui ont réduit le time-to-market de 30 %.",
  },
  {
    company: "Tymate",
    role: "Directeur de projets",
    date: "jan 2019 — avr 2022",
    description:
      "Structuration du pôle delivery et accompagnement des clients grands comptes dans la définition de roadmaps à forte valeur business.",
  },
  {
    company: "Artifakt",
    role: "Product Manager",
    date: "mai 2022 — juin 2023",
    description:
      "Pilotage de la refonte de la plateforme d'hébergement cloud et lancement d'initiatives data-driven pour améliorer l'onboarding des utilisateurs.",
  },
  {
    company: "Weasyn",
    role: "Associé / CPO",
    date: "sept 2023 — décembre 2024",
    description:
      "Co-création de l'offre produit, animation d'ateliers discovery et construction d'un backlog priorisé pour accélérer l'atteinte du product-market fit.",
  },
  {
    company: "Sergic",
    role: "Product Manager (Data et Syndic)",
    date: "Juin 2023 — aujourd'hui",
    description:
      "Déploiement d'une stratégie data pour le métier du syndic et coordination des chantiers digitaux visant à améliorer l'expérience client et collaborateurs.",
  }
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
          {experiencesData.map((exp, idx) => (
            <div key={exp.company + idx} className="flex items-center">
              <div
                className="exp-card min-w-[280px] md:min-w-[340px] max-w-xs bg-[#23272a] rounded-2xl shadow-xl p-6 border border-white/10 flex-shrink-0 flex flex-col justify-between h-full snap-start"
              >
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-extrabold mb-1 text-white">{exp.company}</div>
                    <div className="text-base text-gray-400">{exp.role}</div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                <div className="text-[#10b981] text-base font-semibold mt-4">{exp.date}</div>
              </div>
              {/* Flèche entre chaque card (jamais à la fin) */}
              {idx < experiencesData.length - 1 && (
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
