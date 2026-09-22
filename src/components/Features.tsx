const features = [
  {
    title: "Personalización total",
    desc: "Logo, colores corporativos, tipografía y broches a tu elección: seguro, gancho, mosquetón o clip.",
  },
  {
    title: "Materiales de calidad",
    desc: "Poliéster tejido, satín, nylon reciclado y algodón. Resistentes al uso diario y a lavado.",
  },
  {
    title: "Producción rápida",
    desc: "Muestra digital en 24-48h y entrega de producción en 5 a 10 días hábiles según volumen.",
  },
  {
    title: "Precios por volumen",
    desc: "Escalas de precio pensadas para compra corporativa, agencias y distribuidores mayoristas.",
  },
  {
    title: "Envíos a todo el país",
    desc: "Coordinamos logística para entregas en oficinas, bodegas o directo a tus puntos de venta.",
  },
  {
    title: "Soporte de diseño",
    desc: "Nuestro equipo te ayuda a preparar el arte final y a elegir el material ideal para tu marca.",
  },
];

export default function Features() {
  return (
    <section id="producto" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Producto</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Lanyards pensados para el uso diario de tu empresa
          </h2>
          <p className="mt-4 text-base text-ink-500 sm:text-lg">
            Desde identificación de personal hasta material promocional de eventos,
            fabricamos lanyards que representan tu marca con la calidad que tu
            empresa necesita.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-ink-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-ink-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
