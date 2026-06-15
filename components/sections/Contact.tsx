const ringOnBrand =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ink focus-visible:ring-offset-2 focus-visible:ring-offset-brand';

export default function Contact() {
  return (
    <section id="contact" className="w-full scroll-mt-24 px-6 pb-24 pt-8" aria-labelledby="contact-title">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.6rem] bg-brand px-8 py-16 sm:px-16 sm:py-20">
        {/* halo décoratif */}
        <div
          className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-brand-ink/10"
          aria-hidden="true"
        />

        <div className="relative max-w-2xl">
          <span className="font-label text-sm font-semibold uppercase tracking-[0.16em] text-brand-ink">
            Contact
          </span>
          <h2
            id="contact-title"
            className="mt-4 text-4xl font-extrabold leading-[1.02] tracking-tightest text-brand-ink sm:text-5xl"
          >
            On construit votre prochain produit ?
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-ink/80">
            Parlez-moi de votre sujet en deux lignes. Je reviens vers vous sous 24&nbsp;h avec une
            première lecture.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <a
              href="https://calendar.app.google/mp1wi1iaEw7J5A4w6"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-xl bg-brand-ink px-7 py-3.5 text-base font-semibold text-brand transition-colors hover:bg-black ${ringOnBrand}`}
            >
              Prendre rendez-vous
              <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
            </a>
            <a
              href="mailto:maxime@herbaut.me"
              className={`inline-flex items-center justify-center rounded-xl border border-brand-ink/30 px-7 py-3.5 text-base font-semibold text-brand-ink transition-colors hover:bg-brand-ink/10 ${ringOnBrand}`}
            >
              maxime@herbaut.me
            </a>
            <a
              href="https://www.linkedin.com/in/maximeherbaut"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-xl border border-brand-ink/30 px-7 py-3.5 text-base font-semibold text-brand-ink transition-colors hover:bg-brand-ink/10 ${ringOnBrand}`}
            >
              LinkedIn
              <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
