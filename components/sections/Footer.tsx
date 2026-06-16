import { content } from '../../content/site';

const linkClasses =
  'rounded text-sm text-muted transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.06] bg-ink-950">
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
            {content.brand}
          </span>
        </a>

        <span className="text-xs text-muted">
          © {new Date().getFullYear()} {content.brand} · {content.footer.copyrightSuffix}
        </span>

        <nav className="flex gap-6" aria-label={content.footer.navAriaLabel}>
          <a
            href={content.contactInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            {content.footer.linkedin}
          </a>
          <a href="/blog" className={linkClasses}>
            {content.footer.blog}
          </a>
        </nav>
      </div>
    </footer>
  );
}
