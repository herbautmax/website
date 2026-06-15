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
  Compass,
} from 'lucide-react';
import { cardBaseClasses } from '../sectionStyles';
import SectionHeading from '../ui/SectionHeading';
import Chip from '../ui/Chip';

const facts = [
  { icon: MapPin, label: 'Lille' },
  { icon: Briefcase, label: '10 ans en agence & start-up & freelance' },
  { icon: Compass, label: 'Product discovery, delivery & strategy' },
  { icon: Leaf, label: 'Expérience utilisateur & impact' },
  { icon: Bot, label: 'No-code, automatisation, IA' },
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
    <section id="about" className="w-full bg-transparent py-24 px-4 scroll-mt-24" aria-labelledby="about-title">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="À propos" title="À propos" id="about-title" className="mb-12" />

        <div className="grid gap-8 md:grid-cols-2 items-stretch">
          {/* À propos */}
          <article className={`${cardBaseClasses} h-full flex flex-col p-10 text-left`} aria-labelledby="about-details">
            <h3 id="about-details" className="mb-6 flex items-center gap-3 text-2xl font-bold text-mist">
              <Briefcase className="h-7 w-7 text-brand" aria-hidden="true" />
              À propos
            </h3>
            <ul className="space-y-4 text-lg text-fog">
              {facts.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <Icon className="h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Passions */}
          <article className={`${cardBaseClasses} h-full flex flex-col p-10 text-left`} aria-labelledby="passions-title">
            <h3 id="passions-title" className="mb-6 flex items-center gap-3 text-2xl font-bold text-mist">
              <Soup className="h-7 w-7 text-brand" aria-hidden="true" />
              Passions
            </h3>
            <ul className="flex flex-wrap gap-3">
              {passions.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <Chip icon={<Icon className="h-5 w-5" />} className="text-base">
                    {label}
                  </Chip>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
