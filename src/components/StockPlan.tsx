const perks = [
  {
    title: "Precio congelado por 12 meses",
    desc: "Sin importar si pides 10 o 500 lanyards en tus siguientes reposiciones.",
  },
  {
    title: "Diseño archivado y listo",
    desc: "¿Entró personal nuevo? Solo nos envías un correo y procesamos sus lanyards de inmediato, sin demoras de configuración.",
  },
  {
    title: "Despacho prioritario en 48 horas",
    desc: "Para tus eventos corporativos de última hora o ingresos masivos.",
  },
];

export default function StockPlan() {
  return (
    <section id="plan-stock" className="bg-brand-950 py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow bg-white/10 text-gold-200 ring-white/20">
            🚀 Plan Corporativo Continuo
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Olvídate de volver a cotizar: únete al Plan Stock Asegurado
          </h2>
          <p className="mt-4 text-base text-brand-100 sm:text-lg">
            Diseñamos un sistema exclusivo para empresas en crecimiento. Al
            hacer tu primer pedido con nosotros, obtienes:
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-7"
            >
              <h3 className="text-lg font-semibold text-white">
                {perk.title}
              </h3>
              <p className="mt-2 text-sm text-brand-100">{perk.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contacto" className="btn-primary">
            Quiero asegurar mi stock
          </a>
        </div>
      </div>
    </section>
  );
}
