# Lanyers — Landing Page

Landing page en Next.js 14 (App Router) + TypeScript + Tailwind CSS para **Lanyers**, fabricante y distribuidor de lanyards/porta-gafetes personalizados para empresas, agencias, startups y venta al por mayor.

## Requisitos

- Node.js 18.18 o superior (recomendado 20+)
- npm 9+

## Empezar

Instala las dependencias (esto descarga paquetes desde npm, así que hazlo desde tu terminal normal con conexión a internet):

```bash
npm install
```

Levanta el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura

```
src/
  app/
    layout.tsx      # Layout raíz, metadata, fuente
    page.tsx         # Composición de la landing (todas las secciones)
    globals.css       # Estilos base + Tailwind
  components/
    Header.tsx        # Nav + CTA
    Hero.tsx           # Sección principal
    LogosBar.tsx       # Barra de marcas/confianza
    Features.tsx       # Beneficios del producto
    UseCases.tsx        # Segmentos: empresas, agencias, startups, eventos
    Wholesale.tsx        # Mayoreo y distribuidores (tabla de precios por volumen)
    Process.tsx           # Cómo funciona (4 pasos)
    Testimonials.tsx       # Testimonios de clientes
    ContactForm.tsx         # Formulario de cotización
    Footer.tsx               # Pie de página
```

## Scripts

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción
- `npm run start` — sirve el build de producción
- `npm run lint` — corre ESLint

## Personalización

- Colores de marca: `tailwind.config.ts` (paleta `brand` y `ink`)
- Contenido: cada componente en `src/components/` tiene su copy en español, listo para ajustar precios, textos y CTAs reales.
- Formulario: `ContactForm.tsx` está listo en el front-end; falta conectar el `action`/`onSubmit` a tu backend, CRM o servicio de email (ej. Resend, HubSpot, un endpoint propio en `src/app/api/`).
