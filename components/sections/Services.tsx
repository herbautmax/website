import { Compass, Sparkle, Hammer, Users } from 'lucide-react';
import { cardBaseClasses } from '../sectionStyles';
import SectionHeading from '../ui/SectionHeading';

const services = [
  {
    icon: Compass,
    slug: 'concevoir',
    title: 'Concevoir',
    description: 'Vision et stratégie produit : ateliers, Design Sprint, définition du MVP/V1.',
  },
  {
    icon: Sparkle,
    slug: 'creer',
    title: 'Créer',
    description: 'Prototypage rapide : MVP no-code, automatisations, IA générative et POC.',
  },
  {
    icon: Hammer,
    slug: 'developper',
    title: 'Développer',
    description: 'Discovery & Delivery : roadmap, tests utilisateurs, itération.',
  },
  {
    icon: Users,
    slug: 'federer',
    title: 'Fédérer',
    description: 'Structuration des équipes produit : rituels, priorisation, KPIs, culture data-driven.',
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-ink py-20 scroll-mt-24" aria-labelledby="services-title">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <SectionHeading eyebrow="Ce que je fais" title="Services" id="services-title" className="mb-12" />

        <ul className="grid gap-8 sm:gap-10 md:grid-cols-2 xl:grid-cols-4" role="list">
          {services.map((service) => {
            const slug = service.slug;
            const Icon = service.icon;

            return (
              <li key={service.title} className="w-full">
                <article
                  className={`${cardBaseClasses} h-full w-full p-8 md:p-10 flex flex-col text-left`}
                  aria-labelledby={`service-${slug}`}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                    <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
                  </div>
                  <h3 id={`service-${slug}`} className="mb-2 text-lg font-bold text-mist">
                    {service.title}
                  </h3>
                  <p className="text-muted">{service.description}</p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
