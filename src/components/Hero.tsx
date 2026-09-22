const stats = [
  { value: "+250", label: "empresas atendidas" },
  { value: "48h", label: "cotización y muestra digital" },
  { value: "10+", label: "acabados y materiales" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink-950">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(239,97,17,0.35), transparent 45%), radial-gradient(circle at 85% 0%, rgba(239,97,17,0.25), transparent 40%)",
        }}
      />
      <div className="container-page relative py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div>
            <span className="section-eyebrow bg-white/10 text-brand-200 ring-white/20">
              Fabricante y distribuidor mayorista
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Lanyards y porta-gafetes que llevan la marca de tu empresa a todas partes
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-200">
              Producimos lanyards personalizados para empresas, agencias y startups,
              y ofrecemos precios especiales por volumen para distribuidores. Diseño,
              muestra digital y producción en tiempos récord.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#contacto" className="btn-primary">
                Solicita tu cotización
              </a>
              <a href="#mayoreo" className="btn-secondary bg-transparent text-white ring-1 ring-white/30 hover:bg-white/10 hover:text-white">
                Ver precios de mayoreo
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-2xl font-bold text-white sm:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs text-ink-300 sm:text-sm">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-brand-500/20 blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Corporativo", desc: "Logo a color, cordón tejido" },
                  { title: "Eventos", desc: "Producción express, full color" },
                  { title: "Distribuidores", desc: "Precio especial por volumen" },
                  { title: "Personalizado", desc: "Broches, colores y anchos a elegir" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white/10 p-5 text-white ring-1 ring-white/10"
                  >
                    <div className="mb-3 h-10 w-10 rounded-full bg-brand-500/90" />
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-1 text-xs text-ink-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
