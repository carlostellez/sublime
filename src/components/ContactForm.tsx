"use client";

import { useState } from "react";

const interestOptions = [
  "Compra para mi empresa",
  "Agencia / eventos",
  "Startup",
  "Quiero ser distribuidor",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: conectar con backend/CRM/servicio de email (ej. un endpoint en src/app/api/).
    setSubmitted(true);
  }

  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl bg-brand-500">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
            <div className="text-white">
              <span className="section-eyebrow bg-white/15 text-white ring-white/25">
                Cotización
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Cuéntanos qué necesitas y te respondemos en menos de 24h
              </h2>
              <p className="mt-4 max-w-md text-brand-50">
                Sin compromiso. Ideal para empresas que necesitan lanyards
                corporativos, agencias con eventos próximos o distribuidores
                interesados en el catálogo mayorista.
              </p>

              <div className="mt-8 space-y-3 text-sm text-brand-50">
                <p className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  ventas@lanyers.com
                </p>
                <p className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  +57 300 000 0000 (WhatsApp)
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-soft sm:p-8">
              {submitted ? (
                <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-ink-900">
                    ¡Gracias! Recibimos tu solicitud
                  </h3>
                  <p className="mt-2 text-sm text-ink-500">
                    Un asesor de Lanyers se pondrá en contacto contigo muy pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-ink-700"
                      >
                        Nombre completo
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="mt-1 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-ink-700"
                      >
                        Empresa
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        className="mt-1 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-ink-700"
                      >
                        Correo electrónico
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="quantity"
                        className="block text-sm font-medium text-ink-700"
                      >
                        Cantidad aproximada
                      </label>
                      <input
                        id="quantity"
                        name="quantity"
                        type="text"
                        placeholder="Ej. 500 unidades"
                        className="mt-1 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-sm font-medium text-ink-700"
                    >
                      Me interesa
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className="mt-1 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                    >
                      {interestOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-ink-700"
                    >
                      Mensaje (opcional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="mt-1 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    Enviar solicitud
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
