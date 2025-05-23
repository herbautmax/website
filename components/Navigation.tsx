import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const links = [
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Expériences", href: "#experiences" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white/80 backdrop-blur sticky top-0 z-20 shadow-sm">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-secondary rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow">
            MH
          </div>
          <span className="font-semibold text-lg tracking-tight text-gray-900">Maxime Herbaut</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {links.map((link, index) => (
            <motion.a
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              href={link.href}
              className="text-gray-700 hover:text-primary transition font-medium"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600 hover:text-primary transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t"
        >
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition font-medium"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}