const steps = [
  {
    number: "01",
    title: "Envías tu logo",
    desc: "Sube tu logotipo en el formulario de abajo.",
  },
  {
    number: "02",
    title: "Aprobamos el montaje digital",
    desc: "Nuestro equipo diseña una muestra digital exacta de cómo quedará tu lanyard en menos de 12 horas.",
  },
  {
    number: "03",
    title: "Recibes y repones cuando quieras",
    desc: "Producimos, enviamos a tu oficina y activamos tu cuenta corporativa para futuros pedidos exprés.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Cómo funciona</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Proceso de compra en 3 simples pasos
          </h2>
          <p className="mt-4 text-base text-fg-muted sm:text-lg">
            Sabemos que no tienes tiempo que perder. Por eso lo hacemos
            ridículamente fácil.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="text-5xl font-bold text-accent/25">
                {step.number}
              </span>
              <h3 className="mt-3 text-base font-semibold text-fg">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-fg-muted">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
