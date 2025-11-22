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
import { cardBaseClasses, sectionTitleGradientClasses } from '../sectionStyles';



export default function About() {
  return (
    <section id="about" className="py-24 px-4 w-full bg-transparent scroll-mt-24" aria-labelledby="about-title">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 id="about-title" className={sectionTitleGradientClasses}>
          À propos
        </h2>
        <p className="mt-3 text-base text-gray-300">
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
        {/* À propos */}
        <article className={`${cardBaseClasses} h-full flex flex-col p-10 text-left`} aria-labelledby="about-details">
          <h3 id="about-details" className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Briefcase className="w-7 h-7 text-[#10b981]" aria-hidden="true" />
            À propos
          </h3>
          <ul className="space-y-4 text-gray-100 text-lg">
            <li className="flex items-center gap-3">
              <MapPin className="text-[#6366f1] w-6 h-6" aria-hidden="true" />
              <span>Lille</span>
            </li>
            <li className="flex items-center gap-3">
              <Briefcase className="text-[#10b981] w-6 h-6" aria-hidden="true" />
              <span>10 ans en agence & start-up & freelance</span>
            </li>
            <li className="flex items-center gap-3">
              <Compass className="text-[#6366f1] w-6 h-6" aria-hidden="true" />
              <span>Product discovery, delivery & strategy</span>
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
        <article className={`${cardBaseClasses} h-full flex flex-col p-10 text-left`} aria-labelledby="passions-title">
          <h3 id="passions-title" className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Soup className="w-7 h-7 text-[#10b981]" aria-hidden="true" />
            Passions
          </h3>
          <ul className="flex flex-wrap gap-3">
            <li>
              <span className="flex items-center gap-2 bg-[#134e4a] text-[#f0fdf4] rounded-lg px-4 py-2 font-semibold text-lg">
                <Soup className="w-6 h-6" aria-hidden="true" />
                Cuisine & gastronomie
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
