"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Cuáles son los tiempos de entrega?",
    a: "Los envíos dentro de Colombia tardan entre 2 y 5 días hábiles dependiendo de la ciudad. Te enviamos el número de guía apenas despachamos tu pedido.",
  },
  {
    q: "¿Cómo elijo la talla correcta?",
    a: "Cada producto incluye una guía de tallas. Si tienes dudas, escríbenos por WhatsApp con la edad y estatura de tu peque y te ayudamos a elegir.",
  },
  {
    q: "¿Qué métodos de pago aceptan?",
    a: "Aceptamos tarjetas de crédito y débito, PSE y otros medios disponibles a través de Mercado Pago, de forma 100% segura.",
  },
  {
    q: "¿Hacen cambios o devoluciones?",
    a: "Sí, tienes hasta 5 días después de recibir tu pedido para solicitar un cambio de talla, siempre que la prenda esté sin uso y con sus etiquetas.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
      <div className="text-center mb-10">
        <span className="font-script text-2xl text-coral-deep">¿Tienes dudas?</span>
        <h2 className="font-display text-3xl sm:text-4xl text-ink mt-1">
          Preguntas frecuentes
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((item, i) => (
          <div
            key={item.q}
            className="rounded-2xl bg-white/70 border border-coral/10 overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={open === i}
            >
              <span className="font-display text-ink">{item.q}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-coral-deep transition-transform ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {open === i && (
              <p className="px-5 pb-4 text-sm text-ink/70 leading-relaxed">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
