export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-900">Contact</h2>
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition duration-200">
        <p className="mb-6 text-lg text-gray-600">Envie d'échanger sur un projet ? Discutons !</p>
        <ul className="space-y-3 text-lg">
          <li>
            <span className="font-semibold">Email</span> : <a href="mailto:maxime@herbaut.com" className="text-[#10b981] hover:text-[#059669] transition-colors duration-200">maxime@herbaut.com</a>
          </li>
          <li>
            <span className="font-semibold">LinkedIn</span> : <a href="https://www.linkedin.com/in/maximeherbaut/" target="_blank" className="text-[#10b981] hover:text-[#059669] transition-colors duration-200">maximeherbaut</a>
          </li>
          <li>
            <a href="https://calendly.com/..." className="text-[#10b981] hover:text-[#059669] transition-colors duration-200">Prends rendez-vous sur Calendly</a>
          </li>
        </ul>
      </div>
    </section>
  );
}