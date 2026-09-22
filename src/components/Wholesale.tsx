const tiers = [
  {
    name: "Empresa",
    range: "50 – 199 unidades",
    price: "Desde $USD 1.90 / unidad",
    features: [
      "1 color de impresión incluido",
      "Muestra digital gratis",
      "Entrega en 7-10 días hábiles",
    ],
    highlighted: false,
  },
  {
    name: "Corporativo",
    range: "200 – 999 unidades",
    price: "Desde $USD 1.40 / unidad",
    features: [
      "Full color incluido",
      "Muestra física sin costo",
      "Entrega en 5-8 días hábiles",
      "Asesor de cuenta dedicado",
    ],
    highlighted: true,
  },
  {
    name: "Distribuidor",
    range: "1000+ unidades / recurrente",
    price: "Precio mayorista a convenir",
    features: [
      "Catálogo mayorista completo",
      "Condiciones de pago a crédito",
      "Prioridad de producción",
      "Material de venta y catálogo de marca blanca",
    ],
    highlighted: false,
  },
];

export default function Wholesale() {
  return (
    <section id="mayoreo" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Mayoreo y distribuidores</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Precios que mejoran con el volumen
          </h2>
          <p className="mt-4 text-base text-ink-500 sm:text-lg">
            Ya seas una empresa comprando para tu equipo o un distribuidor buscando
            un proveedor confiable, tenemos una escala de precios para ti. Los
            precios finales dependen de material, acabado y cantidad exacta.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-3xl border p-8 ${
                tier.highlighted
                  ? "border-brand-500 bg-ink-950 text-white shadow-soft"
                  : "border-ink-100 bg-white"
              }`}
            >
              {tier.highlighted && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
                  Más elegido
                </span>
              )}
              <h3
                className={`text-lg font-semibold ${
                  tier.highlighted ? "text-white" : "text-ink-900"
                }`}
              >
                {tier.name}
              </h3>
              <p
                className={`mt-1 text-sm ${
                  tier.highlighted ? "text-ink-300" : "text-ink-500"
                }`}
              >
                {tier.range}
              </p>
              <p
                className={`mt-6 text-2xl font-bold ${
                  tier.highlighted ? "text-white" : "text-ink-900"
                }`}
              >
                {tier.price}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2 text-sm ${
                      tier.highlighted ? "text-ink-200" : "text-ink-600"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        tier.highlighted ? "text-brand-400" : "text-brand-500"
                      }`}
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
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`mt-8 ${
                  tier.highlighted ? "btn-primary justify-center" : "btn-secondary justify-center"
                }`}
              >
                {tier.name === "Distribuidor" ? "Quiero ser distribuidor" : "Cotizar este plan"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
