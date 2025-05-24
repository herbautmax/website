import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV = [
  { label: 'À propos', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Expériences', id: 'experiences' },
  { label: 'Blog', id: 'blog' },
  { label: 'Contact', id: 'contact' },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const headerOffset = 90; // Hauteur du header + petite marge
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-40 backdrop-blur">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 mt-4 rounded-2xl shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 dark:bg-[#22272a]/80 dark:border-[#23272e] transition-all">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-[#10b981] to-[#6366f1] rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg group-hover:scale-110 transition">
            M<span className="-ml-1">H</span>
          </div>
          <span className="font-bold text-xl text-gray-50 group-hover:text-[#10b981] transition tracking-tight">
            Maxime Herbaut
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-7">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-200 hover:text-[#10b981] text-base font-semibold tracking-wide px-3 py-1 rounded-xl transition-all focus-visible:ring-2 ring-[#10b981] focus:outline-none"
              style={{ transitionDuration: '300ms' }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile nav toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 focus-visible:ring-2 ring-[#10b981]"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Mobile menu */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-[#22272a] shadow-2xl rounded-b-2xl border-t border-[#23272e] flex flex-col items-center py-4 md:hidden animate-in fade-in duration-200 z-50">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setOpen(false);
                  scrollToSection(item.id);
                }}
                className="text-gray-200 hover:text-[#10b981] text-lg font-semibold px-4 py-2 rounded-xl transition-all focus-visible:ring-2 ring-[#10b981] mb-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
