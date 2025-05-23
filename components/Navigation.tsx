const links = [
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Expériences", href: "#experiences" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  return (
    <header className="w-full bg-white/80 sticky top-0 z-20 shadow-sm">
      <nav className="max-w-5xl mx-auto flex items-center px-4 py-4 gap-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#053638] rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow">
            MH
          </div>
          <span className="font-semibold text-lg tracking-tight text-gray-900">Maxime Herbaut</span>
        </div>
        <div className="ml-auto flex gap-6">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-[#10b981] transition font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
