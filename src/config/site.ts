/**
 * Datos centrales del sitio: SEO, contacto, ubicación y redes.
 * ⚠️ Completa los campos marcados con "PENDIENTE". Mientras estén vacíos:
 *   - en desarrollo (npm run dev) se muestran textos de ejemplo para ver el diseño;
 *   - en producción NO se muestran ni se envían a los buscadores (así nunca
 *     se publican datos falsos).
 */
import { whatsappConfig } from "@/config/whatsapp";

const isDev = process.env.NODE_ENV !== "production";
const pick = (real: string, placeholder: string) => real || (isDev ? placeholder : "");

export const site = {
  /** URL pública. Se define con NEXT_PUBLIC_SITE_URL (ver .env.example). */
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),
  name: "Sublime Lab",
  legalName: "Sublime Lab",
  slogan: "Creaciones sin límites",
  locale: "es_CO",
  language: "es-CO",
  title: "Lanyards personalizados con sublimación HD para empresas",
  description:
    "Fabricamos lanyards corporativos con sublimación HD: colores vibrantes que no se destiñen, entrega en todo Colombia y Plan Stock Asegurado. Cotiza gratis tu montaje digital.",
  keywords: [
    "lanyards personalizados",
    "lanyards corporativos",
    "lanyards sublimados",
    "sublimación HD",
    "porta gafetes empresariales",
    "cintas para carnet personalizadas",
    "lanyards al por mayor",
    "lanyards para eventos",
    "lanyards Colombia",
    "Sublime Lab",
  ],
  themeColor: { light: "#ffffff", dark: "#0b0d14" },
  ogImage: { url: "/images/og-sublime-lab.jpg", width: 1200, height: 630 },
  logo: "/images/logo.png",

  contact: {
    phone: whatsappConfig.phone, // solo dígitos
    displayPhone: whatsappConfig.displayPhone,
    whatsapp: whatsappConfig.phone,
    email: "ventas@sublimelab.com", // PENDIENTE: confirmar correo real
  },

  /**
   * Ubicación del taller. PENDIENTE: completar con los datos reales.
   * lat/lng son opcionales pero mejoran el SEO local y el mapa.
   */
  location: {
    street: "Carrera 57 # 4-47",
    neighborhood: "", // Ej: "Chapinero"
    city: "Bogotá",
    region: "Bogotá D.C.",
    postalCode: "",
    country: "Colombia",
    countryCode: "CO",
    lat: null as number | null,
    lng: null as number | null,
    /** Enlace de Google Maps "Cómo llegar" (opcional; si está vacío se arma solo). */
    mapsUrl: "",
    /** Zonas a las que despachan. */
    areaServed: "Todo Colombia",
  },

  /** Redes sociales. PENDIENTE: pegar las URLs reales de cada perfil. */
  socials: [
    { id: "linkedin", label: "LinkedIn", url: "" }, // https://www.linkedin.com/company/...
    { id: "instagram", label: "Instagram", url: "" }, // https://www.instagram.com/...
    { id: "facebook", label: "Facebook", url: "" }, // https://www.facebook.com/...
    { id: "tiktok", label: "TikTok", url: "" }, // https://www.tiktok.com/@...
    { id: "youtube", label: "YouTube", url: "" }, // https://www.youtube.com/@...
  ] as { id: SocialId; label: string; url: string }[],

  /** Códigos de verificación (opcional): Search Console y Bing. */
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
  },
};

export type SocialId = "linkedin" | "instagram" | "facebook" | "tiktok" | "youtube";

/** Dirección real (sin ejemplos). Solo es válida si hay calle y ciudad. */
export const hasRealAddress = Boolean(site.location.street && site.location.city);

/** Dirección para mostrar en pantalla (con ejemplos solo en desarrollo). */
export const displayAddress = {
  street: pick(site.location.street, "Calle 00 # 00-00 (dirección por confirmar)"),
  neighborhood: site.location.neighborhood,
  city: pick(site.location.city, "Tu ciudad"),
  region: site.location.region,
  country: site.location.country,
};

/** Redes para mostrar: reales; en desarrollo, todas con enlace de ejemplo. */
export const visibleSocials = site.socials
  .map((s) => ({ ...s, url: s.url || (isDev ? "#" : "") }))
  .filter((s) => s.url);

/** Redes reales para los buscadores (JSON-LD sameAs). */
export const realSocialUrls = site.socials.map((s) => s.url).filter(Boolean);

export const showLocation = hasRealAddress || isDev;

export function mapsQuery() {
  const l = displayAddress;
  return [l.street, l.neighborhood, l.city, l.region, l.country].filter(Boolean).join(", ");
}

export function mapsLink() {
  return (
    site.location.mapsUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery())}`
  );
}

export function mapsEmbedSrc() {
  const q =
    site.location.lat != null && site.location.lng != null
      ? `${site.location.lat},${site.location.lng}`
      : mapsQuery();
  return `https://www.google.com/maps?q=${encodeURIComponent(q)}&z=16&output=embed`;
}

/** Horario legible, agrupando días iguales: [["Lun – Vie","8:00 a. m. – 6:00 p. m."], ...] */
export function scheduleRows(): [string, string][] {
  const order = ["lun", "mar", "mie", "jue", "vie", "sab", "dom"] as const;
  const names: Record<string, string> = { lun: "Lun", mar: "Mar", mie: "Mié", jue: "Jue", vie: "Vie", sab: "Sáb", dom: "Dom" };
  const fmt = (h: number) => `${h % 12 === 0 ? 12 : h % 12}:00 ${h >= 12 ? "p. m." : "a. m."}`;
  const rows: { days: string[]; text: string }[] = [];
  for (const d of order) {
    const s = whatsappConfig.schedule[d];
    const text = s ? `${fmt(s[0])} – ${fmt(s[1])}` : "Cerrado";
    const last = rows[rows.length - 1];
    if (last && last.text === text) last.days.push(names[d]);
    else rows.push({ days: [names[d]], text });
  }
  return rows.map((r) => [r.days.length > 1 ? `${r.days[0]} – ${r.days[r.days.length - 1]}` : r.days[0], r.text]);
}
