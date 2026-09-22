const steps = [
  {
    number: "01",
    title: "Cuéntanos tu proyecto",
    desc: "Completa el formulario con cantidad, uso y fecha de entrega estimada.",
  },
  {
    number: "02",
    title: "Recibe tu cotización y muestra",
    desc: "Te enviamos precio, tiempos y una muestra digital de tu diseño en 24-48h.",
  },
  {
    number: "03",
    title: "Aprobamos el arte final",
    desc: "Ajustamos colores, materiales y acabados hasta que quede exactamente como lo imaginaste.",
  },
  {
    number: "04",
    title: "Producción y entrega",
    desc: "Fabricamos tu pedido y lo enviamos a tus oficinas, bodega o puntos de venta.",
  },
];

export default function Process() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Cómo funciona</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            De la idea a tu bodega en 4 pasos
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="text-5xl font-bold text-brand-100">
                {step.number}
              </span>
              <h3 className="mt-3 text-base font-semibold text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
