import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="w-full py-24" aria-label="Témoignages">
      <div className="mx-auto max-w-6xl px-6">
        <ul className="grid gap-6 md:grid-cols-2" role="list">
          {testimonials.map((t) => (
            <li key={t.author + t.role}>
              <figure className="flex h-full flex-col justify-between rounded-3xl border border-white/[0.07] bg-ink p-10 shadow-card">
                <blockquote className="text-2xl font-medium leading-snug tracking-tight text-mist">
                  « {t.quote} »
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span
                    className="h-12 w-12 rounded-full border border-white/10 bg-ink-800"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="block text-sm font-semibold text-mist">{t.author}</span>
                    <span className="block text-sm text-brand">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
