import {
  MapPin,
  Briefcase,
  Leaf,
  Bot,
  Soup,
  Volleyball,
  Mountain,
  Trees,
  Theater,
  Compass
} from 'lucide-react';



export default function About() {
  return (
    <section id="about" className="py-24 px-4 w-full bg-transparent scroll-mt-24" aria-labelledby="about-title">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
        {/* À propos */}
        <article className="bg-[#22272a] rounded-2xl shadow-xl p-10 border border-white/10 h-full flex flex-col" aria-labelledby="about-title">
          <h2 id="about-title" className="text-3xl font-extrabold mb-6 text-[#10b981] flex items-center gap-3">
            <Briefcase className="w-8 h-8" aria-hidden="true" /> À propos
          </h2>
          <ul className="space-y-4 text-gray-100 text-lg">
            <li className="flex items-center gap-3">
              <MapPin className="text-[#6366f1] w-6 h-6" aria-hidden="true" />
              <span>Lille</span>
            </li>
            <li className="flex items-center gap-3">
              <Briefcase className="text-[#10b981] w-6 h-6" aria-hidden="true" />
              <span>8+ ans agence & start-up</span>
            </li>
            <li className="flex items-center gap-3">
              <Compass className="text-[#6366f1] w-6 h-6" aria-hidden="true" />
              <span>Discovery, delivery, design sprint</span>
            </li>
            <li className="flex items-center gap-3">
              <Leaf className="text-[#10b981] w-6 h-6" aria-hidden="true" />
              <span>Expérience utilisateur & impact</span>
            </li>
            <li className="flex items-center gap-3">
              <Bot className="text-[#6366f1] w-6 h-6" aria-hidden="true" />
              <span>No-code, automatisation, IA</span>
            </li>
          </ul>
        </article>
        {/* Passions */}
        <article className="bg-[#22272a] rounded-2xl shadow-xl p-10 border border-white/10 h-full flex flex-col" aria-labelledby="passions-title">
          <h2 id="passions-title" className="text-3xl font-extrabold mb-6 text-[#10b981] flex items-center gap-3">
            <Soup className="w-8 h-8" aria-hidden="true" /> Passions
          </h2>
          <ul className="flex flex-wrap gap-3">
            <li>
              <span className="flex items-center gap-2 bg-[#134e4a] text-[#f0fdf4] rounded-lg px-4 py-2 font-semibold text-lg">
                <Soup className="w-6 h-6" aria-hidden="true" />
                Cuisine & bons produits
              </span>
            </li>
            <li>
              <span className="flex items-center gap-2 bg-[#134e4a] text-[#f0fdf4] rounded-lg px-4 py-2 font-semibold text-lg">
                <Volleyball className="w-6 h-6" aria-hidden="true" />
                Volley, beach-volley
              </span>
            </li>
            <li>
              <span className="flex items-center gap-2 bg-[#134e4a] text-[#f0fdf4] rounded-lg px-4 py-2 font-semibold text-lg">
                <Mountain className="w-6 h-6" aria-hidden="true" />
                Randonnée
              </span>
            </li>
            <li>
              <span className="flex items-center gap-2 bg-[#134e4a] text-[#f0fdf4] rounded-lg px-4 py-2 font-semibold text-lg">
                <Trees className="w-6 h-6" aria-hidden="true" />
                Nature
              </span>
            </li>
            <li>
              <span className="flex items-center gap-2 bg-[#134e4a] text-[#f0fdf4] rounded-lg px-4 py-2 font-semibold text-lg">
                <Theater className="w-6 h-6" aria-hidden="true" />
                Théâtre
              </span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
