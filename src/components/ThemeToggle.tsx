"use client";

const STORAGE_KEY = "sublime-theme";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* almacenamiento no disponible: el tema solo dura esta visita */
    }
  }

  // El icono se decide por CSS (clase .dark en <html>) para evitar
  // diferencias de hidratación y parpadeos.
  return (
    <button
      type="button"
      onClick={toggle}
      title="Cambiar entre modo claro y oscuro"
      aria-label="Cambiar entre modo claro y oscuro"
      className={`group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-surface text-fg transition hover:border-accent hover:bg-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
    >
      {/* Luna: visible en modo claro (acción: ir a oscuro) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 text-brand-600 transition-transform group-hover:-rotate-12 dark:hidden"
        aria-hidden="true"
      >
        <path d="M21.75 15.5A9.75 9.75 0 0 1 8.5 2.25a.75.75 0 0 0-1-.9A10.5 10.5 0 1 0 22.65 16.5a.75.75 0 0 0-.9-1Z" />
      </svg>
      {/* Sol: visible en modo oscuro (acción: ir a claro) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        className="hidden h-5 w-5 text-gold-400 transition-transform group-hover:rotate-45 dark:block"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    </button>
  );
}
