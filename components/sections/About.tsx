import { Soup, Volleyball, Mountain, Trees, Theater } from 'lucide-react';
import { eyebrowClasses, sectionTitleClasses } from '../sectionStyles';
import Chip from '../ui/Chip';

const stats = [
  { value: '10 ans', label: 'en product' },
  { value: '15+', label: 'produits lancés' },
  { value: '1 250', label: 'collaborateurs outillés' },
];

const passions = [
  { icon: Soup, label: 'Cuisine & gastronomie' },
  { icon: Volleyball, label: 'Volley, beach-volley' },
  { icon: Mountain, label: 'Randonnée' },
  { icon: Trees, label: 'Nature' },
  { icon: Theater, label: 'Théâtre' },
];

export default function About() {
  return (
    <section id="about" className="w-full py-24 scroll-mt-24" aria-labelledby="about-title">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          {/* Titre */}
          <div className="flex flex-col gap-4">
            <span className={eyebrowClasses}>À propos</span>
            <h2 id="about-title" className={sectionTitleClasses}>
              Le produit, de l’intuition au lancement.
            </h2>
          </div>

          {/* Bio + stats */}
          <div>
            <p className="mb-6 text-lg leading-relaxed text-fog sm:text-xl">
              Product Manager depuis 10 ans, j’ai piloté des produits B2B et B2C dans la proptech,
              l’industrie et le retail. Mon truc : relier le besoin terrain, la faisabilité technique
              et l’impact business — sans jamais sacrifier la finition.
            </p>
            <p className="mb-9 text-lg leading-relaxed text-muted sm:text-xl">
              Aujourd’hui en freelance, j’embarque les équipes sur des cycles courts : cadrer juste,
              prototyper vite, livrer ce qui compte. Et j’intègre l’IA là où elle fait gagner du temps réel.
            </p>

            <dl className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {stats.map((stat) => (
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
                En dehors du produit
              </p>
              <ul className="flex flex-wrap gap-3">
                {passions.map(({ icon: Icon, label }) => (
                  <li key={label}>
                    <Chip icon={<Icon className="h-5 w-5" />}>{label}</Chip>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
