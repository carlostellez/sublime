/**
 * Configuración del botón flotante de WhatsApp.
 * Todo lo editable vive aquí: número, mensajes, horarios, posición, etc.
 * (No hace falta tocar el componente WhatsAppButton.tsx.)
 */

export type DayKey = "dom" | "lun" | "mar" | "mie" | "jue" | "vie" | "sab";

/** Horario [hora inicio, hora fin) en formato 24h, o null si no se atiende ese día. */
export type DaySchedule = [number, number] | null;

export interface QuickReply {
  /** Texto del botón. */
  label: string;
  /** Emoji decorativo del botón. */
  emoji: string;
  /** Mensaje que se pre-escribe en WhatsApp al elegir esta opción. */
  message: string;
}

export const whatsappConfig = {
  /** Interruptor general: false oculta todo el sistema. */
  enabled: true,

  /** Número en formato internacional, solo dígitos (57 = Colombia). */
  phone: "573204915878",
  /** Cómo se muestra el número en la página (información de contacto). */
  displayPhone: "+57 320 491 5878",

  /** Identidad que se muestra en la ventana de chat. */
  agentName: "Sublime Lab",
  agentRole: "Asesor de lanyards corporativos",
  avatar: "/images/logo.png",

  /** Lado de la pantalla y separación (px) respecto al borde. */
  position: "right" as "right" | "left",
  offset: { x: 20, y: 20 },

  /** Zona horaria y horario de atención. */
  timezone: "America/Bogota",
  schedule: {
    lun: [8, 18],
    mar: [8, 18],
    mie: [8, 18],
    jue: [8, 18],
    vie: [8, 18],
    sab: [9, 13],
    dom: null,
  } as Record<DayKey, DaySchedule>,

  /** Burbuja llamativa que aparece sola junto al botón. */
  teaser: {
    enabled: true,
    /** Milisegundos antes de mostrarla tras cargar la página. */
    delayMs: 5000,
    /** Se oculta sola tras este tiempo (0 = nunca). */
    autoHideMs: 14000,
    /** Si el visitante la cierra, no se vuelve a mostrar en esta sesión. */
    oncePerSession: true,
    title: "¿Tu logo en un lanyard HD? 🎨",
    text: "Recibe hoy tu montaje digital GRATIS en menos de 12 horas. Sin compromiso.",
    cta: "Chatear ahora",
  },

  /** Mensajes dentro de la ventana de chat. */
  panel: {
    greetingOnline:
      "¡Hola! 👋 Soy del equipo de Sublime Lab. Cuéntanos qué necesitas y te respondemos en minutos.",
    greetingOffline:
      "¡Hola! 👋 Ahora estamos fuera de horario, pero déjanos tu mensaje y te respondemos en cuanto abramos.",
    quickRepliesTitle: "Elige un tema para empezar:",
    inputPlaceholder: "Escribe tu mensaje…",
    sendLabel: "Enviar por WhatsApp",
    footnote: "Se abrirá WhatsApp con tu mensaje listo para enviar.",
  },

  /** Opciones rápidas (pueden ser de 1 a 5). */
  quickReplies: [
    {
      label: "Quiero cotizar lanyards",
      emoji: "💬",
      message:
        "Hola Sublime Lab 👋 Quiero cotizar lanyards personalizados para mi empresa. ¿Me ayudan con una cotización y un montaje digital gratis?",
    },
    {
      label: "Plan Stock Asegurado",
      emoji: "🚀",
      message:
        "Hola Sublime Lab 👋 Me interesa el Plan Stock Asegurado (precio congelado por 12 meses). ¿Me explican cómo funciona?",
    },
    {
      label: "Pedido mínimo y tiempos",
      emoji: "⏱️",
      message:
        "Hola Sublime Lab 👋 ¿Cuál es el pedido mínimo y los tiempos de entrega de los lanyards?",
    },
    {
      label: "Ya tengo mi logo",
      emoji: "🎨",
      message:
        "Hola Sublime Lab 👋 Ya tengo el logo de mi empresa y quiero ver cómo quedaría en un lanyard. ¿Cómo se los envío?",
    },
  ] as QuickReply[],

  /** Mensaje por defecto si el visitante abre WhatsApp desde el botón sin elegir nada. */
  defaultMessage:
    "Hola Sublime Lab 👋 Quiero información sobre lanyards corporativos con sublimación HD.",

  /** Añade al mensaje la página desde la que escribe (útil para medir). */
  appendPageUrl: true,

  /** Eventos de analítica: se envían a dataLayer (GTM) y gtag si existen. */
  tracking: {
    enabled: true,
    eventName: "whatsapp_click",
  },

  /** Mostrar el botón solo después de hacer scroll (px). 0 = siempre visible. */
  showAfterScrollPx: 0,
};

export type WhatsAppConfig = typeof whatsappConfig;
