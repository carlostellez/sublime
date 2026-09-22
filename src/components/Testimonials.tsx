const testimonials = [
  {
    quote:
      "Cambiamos de proveedor por Lanyers y no nos arrepentimos: la calidad del tejido es superior y el tiempo de entrega se cumplió al pie de la letra.",
    author: "Gerente de Compras",
    company: "Empresa de tecnología, 300+ empleados",
  },
  {
    quote:
      "Como agencia de eventos necesitamos rapidez y consistencia en cada activación. Lanyers nos ha respondido siempre con producción express de calidad.",
    author: "Directora de Producción",
    company: "Agencia de eventos corporativos",
  },
  {
    quote:
      "Los márgenes como distribuidor son atractivos y el catálogo mayorista nos permite ofrecer variedad a nuestros clientes sin quedarnos sin stock.",
    author: "Dueño",
    company: "Distribuidora de artículos POP",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-ink-950 py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow bg-white/10 text-brand-200 ring-white/20">
            Clientes
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Empresas y distribuidores que confían en nosotros
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <blockquote className="text-sm leading-relaxed text-ink-100">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">{t.author}</p>
                <p className="text-xs text-ink-400">{t.company}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
