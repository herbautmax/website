import { Compass, Sparkle, Hammer, Users } from 'lucide-react';

const services = [
  {
    icon: <Compass className="w-10 h-10 text-indigo-400 mb-4" />,
    title: "Concevoir",
    description: "Ateliers, design sprint, cadrage MVP/V1."
  },
  {
    icon: <Sparkle className="w-10 h-10 text-yellow-400 mb-4" />,
    title: "Créer",
    description: "Prototypage, MVP no-code, automatisation, IA."
  },
  {
    icon: <Hammer className="w-10 h-10 text-blue-400 mb-4" />,
    title: "Développer",
    description: "Discovery, delivery, tests utilisateurs."
  },
  {
    icon: <Users className="w-10 h-10 text-green-400 mb-4" />,
    title: "Fédérer",
    description: "Montée en puissance des équipes produit."
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 w-full bg-[#181b1f]">
      <h2 className="text-3xl font-extrabold mb-10 text-center text-white tracking-tight">
        Services
      </h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-[#23272a] rounded-2xl shadow-xl p-8 border border-white/10 hover:scale-105 hover:shadow-2xl hover:border-[#10b981] transition group flex flex-col items-center text-center"
          >
            {service.icon}
            <div className="font-bold text-[#10b981] text-lg mb-2">
              {service.title}
            </div>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

