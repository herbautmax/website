export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-ink-950 py-6 text-center text-sm text-muted">
      <a
        href="/"
        className="rounded font-semibold transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
      >
        Maxime Herbaut
      </a>{' '}
      © {new Date().getFullYear()} —
      <a
        href="mailto:maxime@herbaut.me"
        className="ml-2 rounded text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
      >
        Contact
      </a>
    </footer>
  );
}
