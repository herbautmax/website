const linkClasses =
  'rounded text-sm text-muted transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-10 text-center sm:flex-row sm:text-left">
        <a
          href="/"
          className="group flex items-center gap-3 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-[0.55rem] bg-brand text-sm font-extrabold tracking-tightest text-brand-ink"
            aria-hidden="true"
          >
            MH
          </span>
          <span className="text-sm font-semibold text-mist transition-colors group-hover:text-brand">
            Maxime Herbaut
          </span>
        </a>

        <span className="text-xs text-muted">
          © {new Date().getFullYear()} Maxime Herbaut · Product Manager freelance · Lille
        </span>

        <nav className="flex gap-6" aria-label="Liens de pied de page">
          <a
            href="https://www.linkedin.com/in/maximeherbaut"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            LinkedIn
          </a>
          <a href="mailto:maxime@herbaut.me" className={linkClasses}>
            Email
          </a>
          <a href="/blog" className={linkClasses}>
            Blog
          </a>
        </nav>
      </div>
    </footer>
  );
}
