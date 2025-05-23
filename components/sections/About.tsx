export default function About() {
  return (
    <section id="about" className="text-center py-24 flex flex-col items-center">
      <img
        src="/avatar-mh.png"
        alt="Maxime Herbaut"
        className="w-32 h-32 rounded-full mb-8 shadow-xl object-cover border-4 border-white transform hover:scale-105 transition duration-200"
        style={{ background: "#e5e7eb" }}
      />
      <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-gray-900 tracking-tight">
        Product Manager, Digital Builder
      </h1>
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-[#10b981] tracking-tight">
        Chef de projet digital & Product Builder (IA, no-code)
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-3 text-lg leading-relaxed">
        Basé à Lille, j'aide les équipes à imaginer, concevoir et lancer des produits digitaux utiles et robustes.<br />
        <span className="text-gray-500 text-base">
          8+ ans d'expérience en agence & startup.<br />
          Passionné de design sprint, technique, discovery, tests, automatisation, cuisine, volley, théâtre, UX.
        </span>
      </p>
    </section>
  );
}