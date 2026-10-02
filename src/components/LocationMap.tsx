"use client";

import { useState } from "react";

interface Props {
  /** Dirección de destino (taller), texto o "lat,lng". */
  destination: string;
  /** Mapa por defecto (solo el taller). */
  defaultSrc: string;
  title: string;
  country: string;
}

export default function LocationMap({ destination, defaultSrc, title, country }: Props) {
  const [origin, setOrigin] = useState("");
  const [input, setInput] = useState("");
  const [locating, setLocating] = useState(false);
  const [error, setError] = useState("");

  const src = origin
    ? `https://www.google.com/maps?saddr=${encodeURIComponent(origin)}&daddr=${encodeURIComponent(destination)}&output=embed`
    : defaultSrc;

  const dirLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}${
    origin ? `&origin=${encodeURIComponent(origin)}` : ""
  }&travelmode=driving`;

  function useMyLocation() {
    setError("");
    if (!("geolocation" in navigator)) {
      setError("Tu navegador no permite detectar la ubicación. Escribe tu ciudad.");
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setOrigin(`${pos.coords.latitude},${pos.coords.longitude}`);
        setInput("Mi ubicación actual");
        setLocating(false);
      },
      () => {
        setLocating(false);
        setError("No pudimos acceder a tu ubicación. Escribe tu ciudad y trazamos la ruta.");
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 },
    );
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const city = input.trim();
    if (!city) return;
    setError("");
    setOrigin(`${city}, ${country}`);
  }

  function reset() {
    setOrigin("");
    setInput("");
    setError("");
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-soft">
      <form onSubmit={submit} className="space-y-3 border-b border-line-soft p-4">
        <label htmlFor="map-origin" className="block text-sm font-semibold text-fg">
          ¿Desde dónde nos visitas? Te mostramos la ruta
        </label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            id="map-origin"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu ciudad o barrio"
            autoComplete="address-level2"
            className="form-input !mt-0 flex-1"
          />
          <div className="flex gap-2">
            <button type="submit" className="btn-primary !px-5 !py-2.5">
              Trazar ruta
            </button>
            <button
              type="button"
              onClick={useMyLocation}
              disabled={locating}
              className="btn-secondary !px-4 !py-2.5 disabled:opacity-60"
              title="Usar mi ubicación actual"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                <circle cx="12" cy="12" r="8" />
              </svg>
              {locating ? "Ubicando…" : "Mi ubicación"}
            </button>
          </div>
        </div>
        {error && (
          <p role="alert" className="text-xs text-magenta-600 dark:text-magenta-400">
            {error}
          </p>
        )}
        {origin && (
          <p className="flex flex-wrap items-center gap-x-3 text-xs text-fg-muted">
            Ruta desde <strong className="text-fg">{input}</strong>
            <button type="button" onClick={reset} className="font-semibold text-accent hover:underline">
              Quitar ruta
            </button>
          </p>
        )}
      </form>

      <iframe
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-72 w-full border-0 sm:h-80 lg:h-[20rem]"
      />

      <div className="border-t border-line-soft p-3 text-right">
        <a
          href={dirLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
        >
          {origin ? "Abrir ruta en Google Maps →" : "Cómo llegar en Google Maps →"}
        </a>
      </div>
    </div>
  );
}
