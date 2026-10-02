"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { whatsappConfig as cfg, type DayKey } from "@/config/whatsapp";

const DAY_KEYS: DayKey[] = ["dom", "lun", "mar", "mie", "jue", "vie", "sab"];
const DAY_NAMES: Record<DayKey, string> = {
  dom: "el domingo",
  lun: "el lunes",
  mar: "el martes",
  mie: "el miércoles",
  jue: "el jueves",
  vie: "el viernes",
  sab: "el sábado",
};
const TEASER_KEY = "sublime-wa-teaser-closed";

interface Status {
  online: boolean;
  /** Texto corto para el encabezado del chat. */
  label: string;
}

function getStatus(now = new Date()): Status {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: cfg.timezone,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);
  const wd = parts.find((p) => p.type === "weekday")?.value ?? "Sun";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const idx = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(wd);
  const today = DAY_KEYS[idx < 0 ? 0 : idx];
  const slot = cfg.schedule[today];

  if (slot && hour >= slot[0] && hour < slot[1]) {
    return { online: true, label: "En línea · responde en minutos" };
  }
  // Próxima apertura
  for (let i = 0; i < 8; i++) {
    const key = DAY_KEYS[(idx + i) % 7];
    const s = cfg.schedule[key];
    if (!s) continue;
    if (i === 0 && hour >= s[0]) continue; // hoy ya pasó la apertura
    const when = i === 0 ? "hoy" : i === 1 ? "mañana" : DAY_NAMES[key];
    return { online: false, label: `Fuera de horario · abrimos ${when} ${formatHour(s[0])}` };
  }
  return { online: false, label: "Fuera de horario" };
}

function formatHour(h: number) {
  const suffix = h >= 12 ? "p. m." : "a. m.";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:00 ${suffix}`;
}

function track(source: string) {
  if (!cfg.tracking.enabled || typeof window === "undefined") return;
  const w = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (...a: unknown[]) => void;
  };
  const payload = { event: cfg.tracking.eventName, source, page: window.location.pathname };
  w.dataLayer?.push(payload);
  w.gtag?.("event", cfg.tracking.eventName, { source, page: payload.page });
}

function buildLink(message: string) {
  let text = message.trim() || cfg.defaultMessage;
  if (cfg.appendPageUrl && typeof window !== "undefined") {
    text += `\n\n(Escribo desde: ${window.location.href.split("#")[0]})`;
  }
  return `https://wa.me/${cfg.phone}?text=${encodeURIComponent(text)}`;
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.04 3C9.4 3 4 8.4 4 15.04c0 2.12.55 4.19 1.6 6.01L4 29l8.1-1.57a12 12 0 0 0 3.94.66h.01C22.7 28.09 28 22.69 28 16.05 28 9.4 22.68 3 16.04 3Zm0 22.06h-.01a9.97 9.97 0 0 1-5.08-1.39l-.36-.22-4.8.93.98-4.68-.24-.38a9.96 9.96 0 0 1-1.53-5.3C5 9.55 9.52 5.04 15.05 5.04c2.68 0 5.2 1.05 7.1 2.95a9.97 9.97 0 0 1 2.93 7.08c0 5.53-4.5 10.02-10.04 10.02Zm5.5-7.5c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.24-.58-.5-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.23 5.13 4.53.72.3 1.28.5 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<Status>({ online: true, label: "" });
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [scrolled, setScrolled] = useState(cfg.showAfterScrollPx === 0);
  const [text, setText] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const side = cfg.position === "left" ? "left" : "right";
  const rootStyle = useMemo(
    () => ({ [side]: cfg.offset.x, bottom: cfg.offset.y }) as React.CSSProperties,
    [side],
  );

  // Montaje + estado de horario (se recalcula cada minuto)
  useEffect(() => {
    const tick = () => setStatus(getStatus());
    const first = setTimeout(() => {
      setMounted(true);
      tick();
    }, 0);
    const id = setInterval(tick, 60_000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  // Mostrar tras scroll
  useEffect(() => {
    if (cfg.showAfterScrollPx === 0) return;
    const onScroll = () => setScrolled(window.scrollY > cfg.showAfterScrollPx);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Burbuja de invitación
  useEffect(() => {
    if (!cfg.teaser.enabled) return;
    try {
      if (cfg.teaser.oncePerSession && sessionStorage.getItem(TEASER_KEY)) return;
    } catch {}
    const show = setTimeout(() => setTeaser(true), cfg.teaser.delayMs);
    const hide =
      cfg.teaser.autoHideMs > 0
        ? setTimeout(() => setTeaser(false), cfg.teaser.delayMs + cfg.teaser.autoHideMs)
        : undefined;
    return () => {
      clearTimeout(show);
      if (hide) clearTimeout(hide);
    };
  }, []);

  const closeTeaser = useCallback(() => {
    setTeaser(false);
    try {
      sessionStorage.setItem(TEASER_KEY, "1");
    } catch {}
  }, []);

  const openPanel = useCallback(() => {
    setOpen(true);
    closeTeaser();
  }, [closeTeaser]);

  // Escape y clic fuera cierran el panel
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [open]);

  function send(message: string, source: string) {
    track(source);
    window.open(buildLink(message), "_blank", "noopener,noreferrer");
  }

  if (!cfg.enabled || !mounted || !scrolled) return null;

  const align = side === "left" ? "items-start" : "items-end";
  const greeting = status.online ? cfg.panel.greetingOnline : cfg.panel.greetingOffline;

  return (
    <div
      ref={rootRef}
      style={rootStyle}
      className={`fixed z-[60] flex flex-col gap-3 ${align}`}
    >
      {/* Ventana de chat */}
      {open && (
        <div
          role="dialog"
          aria-label={`Chat de WhatsApp con ${cfg.agentName}`}
          className="wa-pop w-[min(92vw,22rem)] overflow-hidden rounded-2xl border border-line bg-surface shadow-soft"
        >
          <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3 text-white">
            <div className="relative">
              <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white">
                <Image src={cfg.avatar} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
              </span>
              <span
                className={`absolute bottom-0 right-0 h-3 w-3 rounded-full ring-2 ring-[#075E54] ${
                  status.online ? "bg-[#25D366]" : "bg-gold-400"
                }`}
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{cfg.agentName}</p>
              <p className="truncate text-xs text-white/85">{status.label}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat"
              className="rounded-full p-1.5 text-white/90 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="space-y-3 bg-surface-alt px-4 py-4">
            <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-surface px-3.5 py-2.5 text-sm text-fg shadow-sm ring-1 ring-line-soft">
              {greeting}
            </div>

            <p className="pt-1 text-xs font-medium text-fg-muted">{cfg.panel.quickRepliesTitle}</p>
            <div className="flex flex-col gap-2">
              {cfg.quickReplies.map((q) => (
                <button
                  key={q.label}
                  type="button"
                  onClick={() => send(q.message, `quick:${q.label}`)}
                  className="flex items-center gap-2 rounded-xl border border-[#128C7E]/50 bg-surface px-3.5 py-2.5 text-left text-sm font-medium text-fg transition hover:border-[#25D366] hover:bg-[#25D366]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#128C7E]"
                >
                  <span aria-hidden="true">{q.emoji}</span>
                  {q.label}
                </button>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(text, "free-text");
              setText("");
            }}
            className="border-t border-line-soft bg-surface p-3"
          >
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={cfg.panel.inputPlaceholder}
                aria-label={cfg.panel.inputPlaceholder}
                maxLength={500}
                className="form-input !mt-0 flex-1 rounded-full"
              />
              <button
                type="submit"
                aria-label={cfg.panel.sendLabel}
                title={cfg.panel.sendLabel}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#128C7E] text-white transition hover:bg-[#075E54] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M3.4 20.4 21 12 3.4 3.6 3.39 10.1 15 12 3.39 13.9z" />
                </svg>
              </button>
            </div>
            <p className="mt-2 text-center text-[11px] text-fg-subtle">{cfg.panel.footnote}</p>
          </form>
        </div>
      )}

      {/* Burbuja de invitación */}
      {teaser && !open && (
        <div
          role="status"
          className="wa-pop relative w-[min(78vw,17rem)] rounded-2xl border border-line bg-surface p-4 pr-8 shadow-soft"
        >
          <button
            type="button"
            onClick={closeTeaser}
            aria-label="Cerrar mensaje"
            className="absolute right-2 top-2 rounded-full p-1 text-fg-subtle hover:bg-surface-alt hover:text-fg"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <p className="text-sm font-bold text-fg">{cfg.teaser.title}</p>
          <p className="mt-1 text-sm text-fg-muted">{cfg.teaser.text}</p>
          <button
            type="button"
            onClick={openPanel}
            className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#128C7E] px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-[#075E54]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {cfg.teaser.cta}
          </button>
        </div>
      )}

      {/* Botón flotante */}
      <button
        type="button"
        onClick={() => (open ? setOpen(false) : openPanel())}
        aria-label={open ? "Cerrar chat de WhatsApp" : "Chatear por WhatsApp"}
        aria-expanded={open}
        className="wa-fab relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-4px_rgba(37,211,102,0.65)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
      >
        {!open && status.online && <span className="wa-ring" aria-hidden="true" />}
        <WhatsAppIcon className="relative h-9 w-9" />
        {!open && (
          <span
            aria-hidden="true"
            className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-magenta-500 text-[11px] font-bold text-white ring-2 ring-page"
          >
            1
          </span>
        )}
      </button>
    </div>
  );
}
