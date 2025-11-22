import { Mail, Linkedin } from "lucide-react";
import { cardBaseClasses, sectionTitleGradientClasses } from "../sectionStyles";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 w-full bg-transparent flex flex-col items-center scroll-mt-24"
      aria-labelledby="contact-title"
    >
      <div className={`${cardBaseClasses} max-w-md w-full mx-auto p-10`}>
        <h2 id="contact-title" className={`${sectionTitleGradientClasses} mb-6`}>
          Contact
        </h2>
        <p className="mb-6 text-gray-200 text-center">
          Envie d’échanger sur un projet ? Discutons !
        </p>
        <address className="not-italic space-y-4 mb-8 text-center">
          <div className="flex items-center gap-2 bg-[#111418] rounded-lg px-4 py-3 justify-center">
            <Mail className="w-5 h-5 text-[#10b981]" aria-hidden="true" />
            <a
              href="mailto:maxime@herbaut.me"
              className="text-[#10b981] font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111418] rounded"
            >
              maxime@herbaut.me
            </a>
          </div>
          <div className="flex items-center gap-2 bg-[#111418] rounded-lg px-4 py-3 justify-center">
            <Linkedin className="w-5 h-5 text-[#10b981]" aria-hidden="true" />
            <a
              href="https://www.linkedin.com/in/maximeherbaut"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#10b981] font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111418] rounded"
            >
              maximeherbaut
              <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
            </a>
          </div>
        </address>
        <a
          href="https://calendly.com/maximeherbaut/30min"
          className="block text-center bg-gradient-to-r from-[#10b981] to-[#6366f1] hover:from-[#0d966c] hover:to-[#4f46e5] text-white font-bold rounded-xl py-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#10b981] focus-visible:ring-offset-[#0f1115]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prendre rendez-vous sur Calendly
          <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
        </a>
      </div>
    </section>
  );
}
