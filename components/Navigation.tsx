import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { buttonClasses } from './ui/Button';
import { content } from '../content/site';

const NAV = content.nav.items;

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
      <div className="border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10"
        aria-label="Navigation principale"
      >
        <a href="#hero" className="group flex select-none items-center gap-3 focus-visible:outline-none">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-[0.6rem] bg-brand text-base font-extrabold tracking-tightest text-brand-ink"
            aria-hidden="true"
          >
            MH
          </span>
          <span className="text-[1.05rem] font-bold tracking-tight text-mist transition group-hover:text-brand">
            {content.brand}
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex" role="list">
          {NAV.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(event) => handleNavClick(event, item.id)}
                className="rounded-lg px-2 py-1 text-base font-medium text-muted transition hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(event) => handleNavClick(event, 'contact')}
              className={buttonClasses('primary', 'sm', 'focus-visible:ring-offset-ink-950')}
            >
              {content.nav.contact}
            </a>
          </li>
        </ul>

        {/* Mobile nav toggle */}
        <button
          type="button"
          className="rounded-md p-2 text-mist hover:bg-brand/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 md:hidden"
          aria-label={content.nav.menuLabel}
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
            className="absolute top-full left-0 z-50 w-full border-t border-white/10 bg-ink-950/95 shadow-lg backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col items-center py-4" role="list">
              {[...NAV, { label: content.nav.contact, id: 'contact' }].map((item) => (
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
      </div>
    </header>
  );
}
