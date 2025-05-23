export default function Contact() {
  return (
    <section id="contact" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Contact</h2>
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow p-6 border border-gray-100">
        <p className="mb-4">Envie d’échanger sur un projet ? Discutons !</p>
        <ul className="space-y-1 text-base">
          <li>
            <span className="font-semibold">Email</span> : <a href="mailto:maxime@herbaut.com" className="text-[#10b981] hover:underline">maxime@herbaut.com</a>
          </li>
          <li>
            <span className="font-semibold">LinkedIn</span> : <a href="https://www.linkedin.com/in/maximeherbaut/" target="_blank" className="text-[#10b981] hover:underline">maximeherbaut</a>
          </li>
          <li>
            <a href="https://calendly.com/..." className="text-[#10b981] hover:underline">Prends rendez-vous sur Calendly</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
