import { Compass, Sparkle, Hammer, Users } from 'lucide-react';

const services = [
  {
    icon: <Compass className="w-10 h-10 text-indigo-400 mb-4" aria-hidden="true" />,
    title: "Concevoir",
    description: "Ateliers, design sprint, cadrage MVP/V1."
  },
  {
    icon: <Sparkle className="w-10 h-10 text-yellow-400 mb-4" aria-hidden="true" />,
    title: "Créer",
    description: "Prototypage, MVP no-code, automatisation, IA."
  },
  {
    icon: <Hammer className="w-10 h-10 text-blue-400 mb-4" aria-hidden="true" />,
    title: "Développer",
    description: "Discovery, delivery, tests utilisateurs."
  },
  {
    icon: <Users className="w-10 h-10 text-green-400 mb-4" aria-hidden="true" />,
    title: "Fédérer",
    description: "Montée en puissance des équipes produit."
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 w-full bg-[#181b1f] scroll-mt-24" aria-labelledby="services-title">
      <h2 id="services-title" className="text-3xl font-extrabold mb-10 text-center text-white tracking-tight">
        Services
      </h2>
      <ul className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4" role="list">
        {services.map((service) => {
          const slug = service.title
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]+/g, '-');

          return (
            <li key={service.title} className="flex">
              <article
                className="bg-[#23272a] rounded-2xl shadow-xl p-8 border border-white/10 hover:scale-[1.02] hover:shadow-2xl hover:border-[#10b981] transition group flex flex-col items-center text-center focus-within:outline-none"
                aria-labelledby={`service-${slug}`}
              >
                {service.icon}
                <h3 id={`service-${slug}`} className="font-bold text-[#10b981] text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-200">{service.description}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

