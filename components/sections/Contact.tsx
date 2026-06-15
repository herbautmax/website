import { content } from '../../content/site';

const ringOnBrand =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ink focus-visible:ring-offset-2 focus-visible:ring-offset-brand';

const contact = content.home.contact;
const info = content.contactInfo;

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
            {contact.eyebrow}
          </span>
          <h2
            id="contact-title"
            className="mt-4 text-4xl font-extrabold leading-[1.02] tracking-tightest text-brand-ink sm:text-5xl"
          >
            {contact.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-ink/80">
            {contact.text}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <a
              href={info.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-xl bg-brand-ink px-7 py-3.5 text-base font-semibold text-brand transition-colors hover:bg-black ${ringOnBrand}`}
            >
              {contact.ctaBook}
              <span className="sr-only">{contact.newTabSr}</span>
            </a>
            <a
              href={info.emailHref}
              className={`inline-flex items-center justify-center rounded-xl border border-brand-ink/30 px-7 py-3.5 text-base font-semibold text-brand-ink transition-colors hover:bg-brand-ink/10 ${ringOnBrand}`}
            >
              {contact.ctaEmail}
            </a>
            <a
              href={info.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-xl border border-brand-ink/30 px-7 py-3.5 text-base font-semibold text-brand-ink transition-colors hover:bg-brand-ink/10 ${ringOnBrand}`}
            >
              {contact.ctaLinkedin}
              <span className="sr-only">{contact.newTabSr}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
