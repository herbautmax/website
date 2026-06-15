import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { buttonClasses } from './ui/Button';

const NAV = [
  { label: 'À propos', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Expériences', id: 'experiences' },
  { label: 'Blog', id: 'blog' },
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
  const menuId = 'primary-navigation-menu';

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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    setOpen(false);
    scrollToSection(id);
  };

  // Affichage dynamique du header
  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-transform duration-300
        ${showHeader ? 'translate-y-0' : '-translate-y-full'}
      `}
      style={{ willChange: 'transform' }}
    >
      <nav
        className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-xl border border-white/[0.06] bg-ink-800/90 px-4 py-3 backdrop-blur sm:px-8"
        aria-label="Navigation principale"
      >
        <a href="#hero" className="group flex select-none items-center gap-3 focus-visible:outline-none">
          <div className="relative h-10 w-10">
            <Image
              src="/logo.png"
              alt="Logo Maxime Herbaut"
              width={40}
              height={40}
              className="rounded-lg"
              priority
            />
          </div>
          <span className="text-lg font-semibold text-mist transition group-hover:text-brand">
            Maxime Herbaut
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex" role="list">
          {NAV.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(event) => handleNavClick(event, item.id)}
                className="rounded-lg px-2 py-1 text-base font-medium text-muted transition hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-800"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(event) => handleNavClick(event, 'contact')}
              className={buttonClasses('primary', 'sm', 'focus-visible:ring-offset-ink-800')}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile nav toggle */}
        <button
          type="button"
          className="rounded-md p-2 text-mist hover:bg-brand/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-800 md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile menu */}
        {open && (
          <div
            id={menuId}
            className="absolute top-full left-0 z-50 w-full rounded-b-xl border-t border-white/10 bg-ink-800 shadow-lg md:hidden"
          >
            <ul className="flex flex-col items-center py-4" role="list">
              {[...NAV, { label: 'Contact', id: 'contact' }].map((item) => (
                <li key={item.id} className="w-full text-center">
                  <a
                    href={`#${item.id}`}
                    onClick={(event) => handleNavClick(event, item.id)}
                    className="mb-1 block rounded-lg px-4 py-2 text-lg font-medium text-fog transition hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-800"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
