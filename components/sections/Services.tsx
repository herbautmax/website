export default function Services() {
  return (
    <section id="services" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Services</h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
          <div className="font-bold text-[#10b981] text-lg mb-2">Concevoir</div>
          <p className="text-gray-600">Ateliers, design sprint, cadrage MVP/V1.</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
          <div className="font-bold text-[#10b981] text-lg mb-2">Créer</div>
          <p className="text-gray-600">Prototypage, MVP no-code, automatisation, IA.</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
          <div className="font-bold text-[#10b981] text-lg mb-2">Développer</div>
          <p className="text-gray-600">Discovery, delivery, tests utilisateurs.</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
          <div className="font-bold text-[#10b981] text-lg mb-2">Fédérer</div>
          <p className="text-gray-600">Montée en puissance des équipes produit.</p>
        </div>
      </div>
    </section>
  );
}
