import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

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
    const headerOffset = 90;
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
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Only hide if not menu open
          if (!open) {
            if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
              setShowHeader(false); // scroll down, hide
            } else {
              setShowHeader(true); // scroll up, show
            }
            lastScrollY.current = currentScrollY;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [open]);

  // Affichage dynamique du header
  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-transform duration-300
        ${showHeader ? 'translate-y-0' : '-translate-y-full'}
      `}
      style={{ willChange: 'transform' }}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3 mt-4 bg-[#23272a]/90 rounded-xl shadow-none border border-transparent">
        <a href="#hero" className="flex items-center gap-3 group select-none">
          <div className="w-10 h-10 relative">
            <Image
              src="/logo.png"
              alt="Logo Maxime Herbaut"
              width={40}
              height={40}
              className="rounded-lg"
              priority
            />
          </div>
          <span className="font-semibold text-lg text-gray-50 group-hover:text-[#10b981] transition">
            Maxime Herbaut
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-[#10b981] text-base font-medium px-2 py-1 rounded-lg transition"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile nav toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-[#10b981]/10 focus-visible:ring-2 ring-[#10b981]"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile menu */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-[#23272a] shadow-lg rounded-b-xl border-t border-[#23272e] flex flex-col items-center py-4 md:hidden z-50">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setOpen(false);
                  scrollToSection(item.id);
                }}
                className="text-gray-200 hover:text-[#10b981] text-lg font-medium px-4 py-2 rounded-lg transition mb-1"
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
