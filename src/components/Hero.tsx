import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-950">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(201,130,47,0.30), transparent 45%), radial-gradient(circle at 85% 0%, rgba(198,69,136,0.20), transparent 40%)",
        }}
      />
      <div className="container-page relative py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div>
            <span className="section-eyebrow bg-white/10 text-gold-200 ring-white/20">
              Sublimación HD · Sin límites de color
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              La imagen de tu empresa, reflejada en la calidad de tu equipo
            </h1>
            <p className="mt-6 max-w-xl text-lg text-brand-100">
              Lanyards corporativos Premium con sublimación de alta definición.
              Colores vibrantes que no se caen con el lavado ni el uso diario.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#contacto" className="btn-primary">
                Solicitar diseños y cotización gratis
              </a>
              <a
                href="#plan-stock"
                className="btn-secondary bg-transparent text-white ring-1 ring-white/30 hover:bg-white/10 hover:text-white"
              >
                Conoce el Plan Stock Asegurado
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gold-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-soft">
              <Image
                src="/images/product-colorful-desk.webp"
                alt="Lanyard corporativo con sublimación HD de alta definición"
                width={1200}
                height={750}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
