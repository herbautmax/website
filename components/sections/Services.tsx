import { Compass, PenLine, Code, Users } from 'lucide-react';
import { cardBaseClasses, eyebrowClasses, sectionTitleClasses } from '../sectionStyles';
import { content } from '../../content/site';

const servicesContent = content.home.services;

const serviceIcons = {
  compass: Compass,
  penLine: PenLine,
  code: Code,
  users: Users,
} as const;

export default function Services() {
  return (
    <section
      id="services"
      className="w-full border-y border-white/[0.06] bg-ink py-24 scroll-mt-24"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <div className="flex flex-col gap-4">
            <span className={eyebrowClasses}>{servicesContent.eyebrow}</span>
            <h2 id="services-title" className={sectionTitleClasses}>
              {servicesContent.title}
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-muted">
            {servicesContent.intro}
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4" role="list">
          {servicesContent.items.map((service) => {
            const Icon = serviceIcons[service.iconKey];
            return (
              <li key={service.title} className="w-full">
                <article
                  className={`${cardBaseClasses} h-full w-full p-8 text-left`}
                  aria-labelledby={`service-${service.slug}`}
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                    <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
                  </div>
                  <h3 id={`service-${service.slug}`} className="mb-2.5 text-xl font-bold tracking-tight text-mist">
                    {service.title}
                  </h3>
                  <p className="text-[0.95rem] leading-relaxed text-muted">{service.description}</p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
