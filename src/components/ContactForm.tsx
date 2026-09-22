"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: conectar con backend/CRM/servicio de email (ej. un endpoint en src/app/api/)
    // y subir el archivo del logo a almacenamiento (S3, Vercel Blob, etc.).
    setSubmitted(true);
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : null);
  }

  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl bg-gold-500">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
            <div className="text-white">
              <span className="section-eyebrow bg-white/15 text-white ring-white/25">
                Muestra digital gratis
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Déjanos tus datos y recibe hoy mismo un montaje digital
                gratuito de tu logo en nuestros lanyards
              </h2>
              <p className="mt-4 max-w-md text-gold-50">
                Sin compromiso. Nuestro equipo prepara tu muestra en menos de
                2 horas para que veas exactamente cómo quedará tu marca.
              </p>

              <div className="mt-8 space-y-3 text-sm text-gold-50">
                <p className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  ventas@sublimelab.com
                </p>
                <p className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  +57 300 000 0000 (WhatsApp)
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-soft sm:p-8">
              {submitted ? (
                <div className="flex h-full min-h-[380px] flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-700">
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
                    ¡Gracias! Ya estamos en tu montaje digital
                  </h3>
                  <p className="mt-2 text-sm text-ink-500">
                    Un asesor de Sublime Lab te enviará la muestra en menos de
                    2 horas.
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
                        Nombre y apellido
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
                        Nombre de la empresa
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
                        Correo corporativo
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
                        Cantidad estimada
                      </label>
                      <input
                        id="quantity"
                        name="quantity"
                        type="text"
                        placeholder="Ej. 50, 100, 500+"
                        className="mt-1 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="logo"
                      className="block text-sm font-medium text-ink-700"
                    >
                      Adjuntar logo / vector
                    </label>
                    <label
                      htmlFor="logo"
                      className="mt-1 flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-dashed border-ink-300 px-3 py-2.5 text-sm text-ink-500 hover:border-brand-400 hover:text-brand-700"
                    >
                      <span className="truncate">
                        {fileName ?? "PNG, SVG, PDF o AI (máx. 10MB)"}
                      </span>
                      <span className="shrink-0 rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold text-ink-700">
                        Elegir archivo
                      </span>
                      <input
                        id="logo"
                        name="logo"
                        type="file"
                        accept=".png,.jpg,.jpeg,.svg,.pdf,.ai"
                        className="sr-only"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    Obtener mi muestra digital gratis
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
