export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-[75vh] pt-32 text-center w-full bg-gradient-to-b from-[#181b1f] to-[#23272a]">
      <div className="relative mb-7">
        <img
          src="/avatar-mh.png"
          alt="Maxime Herbaut"
          className="w-36 h-36 rounded-full border-4 border-[#181b1f] shadow-2xl mx-auto bg-[#23272a]"
        />
        <span className="absolute bottom-2 right-2 bg-[#10b981] text-xs px-2 py-1 rounded-xl font-bold text-white shadow">Product</span>
      </div>
      <h1 className="text-5xl sm:text-6xl font-black mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#10b981] via-white to-[#6366f1] drop-shadow-xl tracking-tight">Maxime Herbaut</h1>
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-300">Product Manager · Digital Builder</h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-8 leading-relaxed">
        J’aide les équipes à imaginer, concevoir et lancer des produits digitaux utiles, robustes, et élégants.
      </p>
      <a
        href="#contact"
        className="inline-block bg-gradient-to-r from-[#10b981] to-[#6366f1] text-white text-lg font-bold px-8 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-[#10b981]/40 transition-all focus:outline-none"
      >
        Me contacter
      </a>
    </section>
  );
}
