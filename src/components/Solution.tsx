import Image from "next/image";

const features = [
  {
    title: "Sublimación HD sin límites",
    desc: "Imprimimos cualquier logotipo, degradado o diseño sin restricciones de color. Tu manual de marca se respetará al 100%.",
  },
  {
    title: "Durabilidad garantizada",
    desc: "Cinta de poliéster suave al tacto pero ultra resistente. No raspa el cuello y soporta el uso rudo diario.",
  },
  {
    title: "Broches y accesorios a medida",
    desc: "Elige entre ganchos tipo caimán, mosquetones, broches de seguridad antiahogo o portacelulares.",
  },
];

export default function Solution() {
  return (
    <section id="solucion" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Nuestra solución</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            El lanyard perfecto para tu empresa
          </h2>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden rounded-2xl">
              <Image
                src="/images/product-navy-gold-flatlay.webp"
                alt="Lanyards Sublime Lab con accesorios: broches, mosquetones y portagafetes"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/product-navy-gold-closeup.webp"
                alt="Detalle de costura y broche de seguridad de un lanyard Sublime Lab"
                width={700}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/product-woman-wearing.webp"
                alt="Colaboradora usando lanyard corporativo Sublime Lab con gafete de identificación"
                width={700}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
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
                <div>
                  <h3 className="text-base font-semibold text-fg">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-fg-muted">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
