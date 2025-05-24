export default function Footer() {
  return (
    <footer className="w-full text-center py-6 text-gray-500 text-sm bg-[#191b1f] border-t border-[#23272e]">
      Maxime Herbaut © {new Date().getFullYear()} — 
      <a href="#contact" className="hover:underline text-[#10b981] ml-2">Contact</a>
    </footer>
  );
}
