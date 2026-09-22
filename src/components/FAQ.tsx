"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Cuál es el pedido mínimo?",
    answer:
      "Atendemos desde 50 unidades para el primer pedido, pero habilitamos reposiciones desde 20 unidades para las empresas del Plan Corporativo Continuo.",
  },
  {
    question: "¿Hacen envíos a nivel nacional?",
    answer:
      "Sí, enviamos de forma segura a todas las sedes de tu empresa, sin importar en qué ciudad estén.",
  },
  {
    question: "¿Qué pasa si mi logo tiene muchos colores?",
    answer:
      "La sublimación transfiere el color directamente a la tela, lo que permite colores ilimitados, fotos y degradados sin costo extra.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ink-50/70 py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Preguntas frecuentes</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Resolvemos tus dudas antes de que las tengas
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-ink-200 rounded-2xl border border-ink-200 bg-white">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-ink-900">
                    {faq.question}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 shrink-0 text-brand-600 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-ink-500">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
