import Head from 'next/head';
import { Briefcase, Mail, MapPin, Phone, GraduationCap, Sparkles } from 'lucide-react';
import { experiencesData } from '../components/sections/Experiences';

const skills = [
  'Discovery & user research',
  'Priorisation produit',
  'Facilitation d\'ateliers',
  'Produit data & analytics',
  'Go-to-market',
  'Pilotage d\'équipes pluridisciplinaires',
];

const education = [
  {
    school: 'HEI Lille',
    degree: 'Diplôme d\'ingénieur – Informatique & Management',
    date: '2010 – 2015',
  },
  {
    school: 'Product Management Academy',
    degree: 'Certification Product Strategy',
    date: '2021',
  },
];

export default function CVPage() {
  return (
    <>
      <Head>
        <title>Maxime Herbaut — CV</title>
        <meta name="description" content="Curriculum vitae de Maxime Herbaut, Product Manager." />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-[#181b1f] via-[#22272a] to-[#191b1f] text-gray-100 font-sans">
        <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">
          <section className="bg-[#22272a] rounded-3xl border border-white/10 shadow-2xl p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm uppercase tracking-widest text-[#10b981] font-semibold">
                  <Sparkles className="w-5 h-5" /> Curriculum vitæ
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white">Maxime Herbaut</h1>
                <p className="text-xl text-gray-300 font-semibold">Product Manager · Digital Builder</p>
                <p className="text-gray-400 leading-relaxed max-w-2xl">
                  J\'ai orchestré la conception et le lancement de produits digitaux pour des scale-ups et grands comptes,
                  en alignant les enjeux business, design et techniques afin de livrer rapidement de la valeur mesurable.
                </p>
              </div>
              <div className="bg-[#181b1f] border border-white/10 rounded-2xl p-6 space-y-4 w-full md:max-w-xs">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-[#10b981]" />
                  <span>maxime.herbaut@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-[#10b981]" />
                  <span>+33 6 12 34 56 78</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-[#10b981]" />
                  <span>Lille, France</span>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Briefcase className="w-7 h-7 text-[#10b981]" />
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Expériences professionnelles</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {experiencesData.map((experience) => (
                <article
                  key={`${experience.company}-${experience.role}`}
                  className="bg-[#22272a] border border-white/10 rounded-2xl p-6 shadow-lg flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <header>
                      <p className="text-sm text-[#10b981] font-semibold">{experience.date}</p>
                      <h3 className="text-2xl font-bold text-white">{experience.company}</h3>
                      <p className="text-sm uppercase tracking-wide text-gray-400">{experience.role}</p>
                    </header>
                    <p className="text-gray-300 leading-relaxed text-sm">{experience.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-[#10b981]" />
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Compétences clés</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-[#10b981]/15 text-[#10b981] font-semibold px-4 py-2 rounded-xl border border-[#10b981]/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-[#10b981]" />
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Formation</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {education.map((item) => (
                <div key={item.school} className="bg-[#22272a] border border-white/10 rounded-2xl p-6 shadow-lg">
                  <p className="text-sm text-[#10b981] font-semibold">{item.date}</p>
                  <h3 className="text-xl font-bold text-white">{item.school}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.degree}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
