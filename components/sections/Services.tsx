export default function Services() {
  return (
    <section id="services" className="py-24">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Services</h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition duration-200 hover:-translate-y-1">
          <div className="font-bold text-[#10b981] text-xl mb-3">Concevoir</div>
          <p className="text-gray-600 leading-relaxed">Ateliers, design sprint, cadrage MVP/V1.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition duration-200 hover:-translate-y-1">
          <div className="font-bold text-[#10b981] text-xl mb-3">Créer</div>
          <p className="text-gray-600 leading-relaxed">Prototypage, MVP no-code, automatisation, IA.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition duration-200 hover:-translate-y-1">
          <div className="font-bold text-[#10b981] text-xl mb-3">Développer</div>
          <p className="text-gray-600 leading-relaxed">Discovery, delivery, tests utilisateurs.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition duration-200 hover:-translate-y-1">
          <div className="font-bold text-[#10b981] text-xl mb-3">Fédérer</div>
          <p className="text-gray-600 leading-relaxed">Montée en puissance des équipes produit.</p>
        </div>
      </div>
    </section>
  );
}