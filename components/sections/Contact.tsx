import { Mail, Linkedin } from "lucide-react";
import { cardBaseClasses, sectionTitleClasses, eyebrowClasses } from "../sectionStyles";
import { buttonClasses } from "../ui/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex w-full flex-col items-center bg-transparent py-20 scroll-mt-24"
      aria-labelledby="contact-title"
    >
      <div className={`${cardBaseClasses} mx-auto w-full max-w-md p-10`}>
        <div className="mb-6 flex flex-col items-center gap-2 text-center">
          <span className={eyebrowClasses}>Contact</span>
          <h2 id="contact-title" className={sectionTitleClasses}>
            Contact
          </h2>
        </div>

        <p className="mb-6 text-center text-fog">Envie d’échanger sur un projet ? Discutons !</p>

        <address className="not-italic mb-8 space-y-4 text-center">
          <div className="flex items-center justify-center gap-2 rounded-lg bg-ink-950 px-4 py-3">
            <Mail className="h-5 w-5 text-brand" aria-hidden="true" />
            <a
              href="mailto:maxime@herbaut.me"
              className="rounded font-semibold text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              maxime@herbaut.me
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-lg bg-ink-950 px-4 py-3">
            <Linkedin className="h-5 w-5 text-brand" aria-hidden="true" />
            <a
              href="https://www.linkedin.com/in/maximeherbaut"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded font-semibold text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              maximeherbaut
              <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
            </a>
          </div>
        </address>

        <a
          href="https://calendar.app.google/mp1wi1iaEw7J5A4w6"
          className={buttonClasses('primary', 'md', 'w-full')}
          target="_blank"
          rel="noopener noreferrer"
        >
          Prendre rendez-vous
          <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
        </a>
      </div>
    </section>
  );
}
