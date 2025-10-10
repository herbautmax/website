export default function Footer() {
  return (
    <footer className="w-full text-center py-6 text-gray-500 text-sm bg-[#191b1f] border-t border-[#23272e]">
      <a 
        href="/" 
        className="hover:text-[#10b981] font-semibold transition-colors"
      >
        Maxime Herbaut
      </a>{' '}
      © {new Date().getFullYear()} — 
      <a 
        href="mailto:maxime@herbaut.me" 
        className="hover:underline text-[#10b981] ml-2"
      >
        Contact
      </a>
    </footer>
  );
}
