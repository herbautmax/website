import { useState } from 'react';

const links = [
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Expériences", href: "#experiences" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/80 backdrop-blur-sm sticky top-0 z-20 border-b border-gray-100">
      <nav className="max-w-5xl mx-auto flex items-center px-4 py-4 gap-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#053638] rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg transition duration-200 hover:shadow-xl hover:scale-105">
            MH
          </div>
          <span className="font-semibold text-lg tracking-tight text-gray-900">Maxime Herbaut</span>
        </div>
        
        {/* Desktop Menu */}
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

        {/* Mobile Menu Button */}
        <button
          className="ml-auto md:hidden p-2 text-gray-600 hover:text-[#10b981] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all duration-200 ease-out"
               style={{ transform: isMenuOpen ? 'translateY(8px) rotate(45deg)' : 'none' }} />
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all duration-200 ease-out"
               style={{ opacity: isMenuOpen ? 0 : 1 }} />
          <div className="w-6 h-0.5 bg-current transition-all duration-200 ease-out"
               style={{ transform: isMenuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 bg-white/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'top-[73px] opacity-100' : '-top-full opacity-0'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col gap-6">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-[#10b981] transition-colors duration-200 font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}