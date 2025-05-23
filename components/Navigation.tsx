const links = [
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Expériences", href: "#experiences" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm sticky top-0 z-20 border-b border-gray-100">
      <nav className="max-w-5xl mx-auto flex items-center px-4 py-4 gap-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#053638] rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg transition duration-200 hover:shadow-xl hover:scale-105">
            MH
          </div>
          <span className="font-semibold text-lg tracking-tight text-gray-900">Maxime Herbaut</span>
        </div>
        <div className="ml-auto hidden md:flex gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-[#10b981] transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}