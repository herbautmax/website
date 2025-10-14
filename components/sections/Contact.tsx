import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 w-full bg-transparent flex flex-col items-center scroll-mt-24"
      aria-labelledby="contact-title"
    >
      <div className="max-w-md w-full bg-[#23272a] rounded-2xl shadow-xl p-10 border border-white/10 mx-auto">
        <h2 id="contact-title" className="text-3xl font-extrabold mb-6 text-center text-white tracking-tight">
          Contact
        </h2>
        <p className="mb-6 text-gray-200 text-center">
          Envie d’échanger sur un projet ? Discutons !
        </p>
        <address className="not-italic space-y-4 mb-8 text-center">
          <div className="flex items-center gap-2 bg-[#181b1f] rounded-lg px-4 py-3 justify-center">
            <Mail className="w-5 h-5 text-[#10b981]" aria-hidden="true" />
            <a
              href="mailto:maxime@herbaut.me"
              className="text-[#10b981] font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#181b1f] rounded"
            >
              maxime@herbaut.me
            </a>
          </div>
          <div className="flex items-center gap-2 bg-[#181b1f] rounded-lg px-4 py-3 justify-center">
            <Linkedin className="w-5 h-5 text-[#10b981]" aria-hidden="true" />
            <a
              href="https://www.linkedin.com/in/maximeherbaut"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#10b981] font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#181b1f] rounded"
              aria-label="Profil LinkedIn de Maxime Herbaut (nouvel onglet)"
            >
              maximeherbaut
            </a>
          </div>
        </address>
        <a
          href="https://calendly.com/maximeherbaut/30min"
          className="block text-center bg-[#10b981] hover:bg-[#11936c] text-white font-bold rounded-lg py-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#10b981] focus-visible:ring-offset-[#23272a]"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Prendre rendez-vous sur Calendly (nouvel onglet)"
        >
          Prendre rendez-vous sur Calendly
        </a>
      </div>
    </section>
  );
}
