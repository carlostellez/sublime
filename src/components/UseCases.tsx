const cases = [
  {
    tag: "Empresas",
    title: "Identificación corporativa",
    desc: "Lanyards con logo para colaboradores, visitantes y contratistas. Refuerza tu imagen en cada acceso.",
  },
  {
    tag: "Agencias",
    title: "Eventos y activaciones",
    desc: "Producción express para congresos, ferias y activaciones de marca, con acabados premium.",
  },
  {
    tag: "Startups",
    title: "Cultura y branding",
    desc: "Kits de bienvenida y merchandising con tu identidad, sin mínimos imposibles de alcanzar.",
  },
  {
    tag: "Distribuidores",
    title: "Reventa mayorista",
    desc: "Catálogo mayorista con márgenes atractivos para tiendas de artículos promocionales y POP.",
  },
];

export default function UseCases() {
  return (
    <section id="casos-de-uso" className="bg-ink-50/60 py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Casos de uso</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Un producto, muchas formas de usarlo
          </h2>
          <p className="mt-4 text-base text-ink-500 sm:text-lg">
            Trabajamos con empresas, agencias, startups y distribuidores que buscan
            calidad, rapidez y precio competitivo.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cases.map((item) => (
            <div
              key={item.tag}
              className="flex gap-5 rounded-2xl border border-ink-100 bg-white p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-sm font-bold text-white">
                {item.tag.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                  {item.tag}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ink-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
