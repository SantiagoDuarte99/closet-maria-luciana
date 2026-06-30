const testimonials = [
  {
    name: "Daniela R.",
    text: "La calidad de la tela y los detalles son hermosos. Mi hija no se quería quitar el vestido floral.",
  },
  {
    name: "Camila G.",
    text: "Pedí el conjunto playero para nuestras vacaciones y llegó súper rápido. Le quedó perfecto y es comodísimo.",
  },
  {
    name: "Laura M.",
    text: "El romper de bebé es precioso, se ve tal cual en las fotos. Definitivamente voy a volver a comprar aquí.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center mb-12">
        <span className="font-script text-2xl text-coral-deep">Lo que dicen las mamás</span>
        <h2 className="font-display text-3xl sm:text-4xl text-ink mt-1">
          Familias que confían en nosotros
        </h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="rounded-3xl bg-white/70 border border-coral/10 p-6 flex flex-col gap-4"
          >
            <div className="flex gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="text-ink/75 text-sm leading-relaxed">“{t.text}”</p>
            <p className="font-display text-coral-deep text-sm mt-auto">{t.name}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-ink/40 mt-6">
        Testimonios de ejemplo — reemplázalos por opiniones reales de tus clientas.
      </p>
    </section>
  );
}
