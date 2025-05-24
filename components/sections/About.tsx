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
    <section id="about" className="py-24 px-4 w-full bg-transparent">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* À propos */}
        <div className="bg-[#22272a] rounded-2xl shadow-xl p-10 border border-white/10 h-full flex flex-col">
          <h3 className="text-3xl font-extrabold mb-6 text-[#10b981] flex items-center gap-3">
            <Briefcase className="w-8 h-8" /> À propos
          </h3>
          <ul className="space-y-4 text-gray-200 text-lg">
            <li className="flex items-center gap-3">
              <MapPin className="text-[#6366f1] w-6 h-6" />
              <span>Lille</span>
            </li>
            <li className="flex items-center gap-3">
              <Briefcase className="text-[#10b981] w-6 h-6" />
              <span>8+ ans agence & start-up</span>
            </li>
            <li className="flex items-center gap-3">
              <Compass className="text-[#6366f1] w-6 h-6" />
              <span>Discovery, delivery, design sprint</span>
            </li>
            <li className="flex items-center gap-3">
              <Leaf className="text-[#10b981] w-6 h-6" />
              <span>Expérience utilisateur & impact</span>
            </li>
            <li className="flex items-center gap-3">
              <Bot className="text-[#6366f1] w-6 h-6" />
              <span>No-code, automatisation, IA</span>
            </li>
          </ul>
        </div>
        {/* Passions */}
        <div className="bg-[#22272a] rounded-2xl shadow-xl p-10 border border-white/10 h-full flex flex-col">
          <h3 className="text-3xl font-extrabold mb-6 text-[#10b981] flex items-center gap-3">
            <Soup className="w-8 h-8" /> Passions
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="flex items-center gap-2 bg-[#10b981]/20 text-[#10b981] rounded-lg px-4 py-2 font-bold text-lg">
              <Soup className="w-6 h-6" />
              Cuisine & bons produits
            </span>
            <span className="flex items-center gap-2 bg-[#10b981]/20 text-[#10b981] rounded-lg px-4 py-2 font-bold text-lg">
              <Volleyball className="w-6 h-6" />
              Volley, beach-volley
            </span>
            <span className="flex items-center gap-2 bg-[#10b981]/20 text-[#10b981] rounded-lg px-4 py-2 font-bold text-lg">
              <Mountain className="w-6 h-6" />
              Randonnée
            </span>
            <span className="flex items-center gap-2 bg-[#10b981]/20 text-[#10b981] rounded-lg px-4 py-2 font-bold text-lg">
              <Trees className="w-6 h-6" />
              Nature
            </span>
            <span className="flex items-center gap-2 bg-[#10b981]/20 text-[#10b981] rounded-lg px-4 py-2 font-bold text-lg">
              <Theater className="w-6 h-6" />
              Théâtre
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
