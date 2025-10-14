export default function Footer() {
  return (
    <footer className="w-full text-center py-6 text-gray-500 text-sm bg-[#191b1f] border-t border-[#23272e]">
      <a
        href="/"
        className="hover:text-[#10b981] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#191b1f] rounded"
      >
        Maxime Herbaut
      </a>{' '}
      © {new Date().getFullYear()} —
      <a
        href="mailto:maxime@herbaut.me"
        className="hover:underline text-[#10b981] ml-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#191b1f] rounded"
      >
        Contact
      </a>
    </footer>
  );
}
