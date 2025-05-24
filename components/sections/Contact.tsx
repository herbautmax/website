// Contact.tsx (extrait)

import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 w-full bg-transparent flex flex-col items-center"
    >
      <div className="max-w-md w-full bg-[#23272a] rounded-2xl shadow-xl p-10 border border-white/10 mx-auto">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-white tracking-tight">
          Contact
        </h2>
        <p className="mb-6 text-gray-300 text-center">
          Envie d’échanger sur un projet ? Discutons !
        </p>
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2 bg-[#181b1f] rounded-lg px-4 py-3">
            <Mail className="w-5 h-5 text-[#10b981]" />
            <span className="text-[#10b981] font-semibold">
              maxime@herbaut.com
            </span>
          </div>
          <div className="flex items-center gap-2 bg-[#181b1f] rounded-lg px-4 py-3">
            <Linkedin className="w-5 h-5 text-[#10b981]" />
            <span className="text-[#10b981] font-semibold">
              maximeherbaut
            </span>
          </div>
        </div>
        <a
          href="https://calendly.com/..."
          className="block text-center bg-[#10b981] hover:bg-[#11936c] text-white font-bold rounded-lg py-3 transition"
        >
          Prendre rendez-vous sur Calendly
        </a>
      </div>
    </section>
  );
}
