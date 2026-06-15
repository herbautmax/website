import Button from '../ui/Button';
import { eyebrowClasses } from '../sectionStyles';

const clients = ['Sergic', 'Roquette', 'Norauto', '+12 équipes'];

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full bg-ink pt-32 pb-16 scroll-mt-24"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-[1.25fr_1fr]">
          {/* Texte */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/35 px-4 py-1.5 text-sm text-brand">
              <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
              Disponible pour missions · Lille &amp; remote
            </span>

            <span className={`${eyebrowClasses} mb-3`}>Maxime Herbaut</span>

            <h1
              id="hero-title"
              className="text-5xl font-bold tracking-tightest text-mist sm:text-6xl lg:text-7xl"
            >
              Product Manager &amp;{' '}
              <span className="text-brand">digital builder</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog">
              J’aide les équipes à imaginer, concevoir et lancer des produits digitaux
              utiles, robustes, et élégants.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <Button href="#contact">Me contacter</Button>
              <Button href="#experiences" variant="outline">
                Voir mes missions
              </Button>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <img
                src="/avatar-mh.png"
                alt="Maxime Herbaut"
                className="h-44 w-44 rounded-full border-4 border-brand bg-ink-800 shadow-card sm:h-52 sm:w-52"
              />
              <span
                className="absolute bottom-2 right-2 rounded-xl bg-brand px-2.5 py-1 text-xs font-bold text-brand-ink shadow"
                aria-hidden="true"
              >
                Product
              </span>
            </div>
          </div>
        </div>

        {/* Preuve sociale */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="mb-4 font-label text-xs uppercase tracking-wide text-muted">
            Ils m’ont fait confiance
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2" role="list">
            {clients.map((name, idx) => (
              <li key={name} className="flex items-center gap-x-6">
                <span className="text-2xl font-bold text-fog">{name}</span>
                {idx < clients.length - 1 && (
                  <span className="text-brand/40" aria-hidden="true">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
