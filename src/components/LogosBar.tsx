const segments = [
  "Empresas corporativas",
  "Agencias de eventos",
  "Startups",
  "Distribuidores POP",
  "Organizadores de congresos",
];

export default function LogosBar() {
  return (
    <section className="border-b border-ink-100 bg-ink-50/60 py-8">
      <div className="container-page">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-ink-500">
          Confían en Lanyers
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {segments.map((segment) => (
            <span
              key={segment}
              className="text-sm font-medium text-ink-400"
            >
              {segment}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
