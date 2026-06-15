import Button from '../ui/Button';

const clients = [
  { name: 'Sergic', className: 'tracking-tight' },
  { name: 'ROQUETTE', className: 'tracking-wide' },
  { name: 'Norauto', className: 'tracking-tightest' },
  { name: '+12 équipes produit', className: 'italic font-semibold' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full border-b border-white/[0.06] bg-ink pt-28 scroll-mt-24"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-12">
        <div className="grid items-center gap-14 md:grid-cols-[1.25fr_1fr]">
          {/* Texte */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand/35 px-4 py-1.5 text-sm font-medium text-brand">
              <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
              Disponible pour missions · Lille &amp; remote
            </span>

            <h1
              id="hero-title"
              className="text-[2.75rem] font-extrabold leading-[0.95] tracking-tightest text-mist sm:text-6xl lg:text-7xl"
            >
              Product Manager<br />
              &amp; <span className="text-brand">digital builder</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              J’aide les équipes à imaginer, concevoir et lancer des produits digitaux
              utiles, robustes et élégants — de la discovery au delivery.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4 md:justify-start">
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
                className="h-56 w-56 rounded-full border-4 border-brand bg-ink-800 object-cover shadow-card sm:h-64 sm:w-64 lg:h-72 lg:w-72"
              />
              <span
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1.5 text-xs font-bold text-brand-ink shadow"
                aria-hidden="true"
              >
                Product
              </span>
            </div>
          </div>
        </div>

        {/* Preuve sociale */}
        <div className="mt-16 border-t border-white/[0.08] pt-8">
          <p className="mb-5 font-label text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Ils m’ont fait confiance
          </p>
          <ul className="flex flex-wrap items-center gap-x-12 gap-y-3" role="list">
            {clients.map((client) => (
              <li key={client.name} className={`text-2xl font-bold text-fog ${client.className}`}>
                {client.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
