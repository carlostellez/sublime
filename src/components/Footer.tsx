import Image from "next/image";

const columns = [
  {
    title: "Producto",
    links: ["Sublimación HD", "Durabilidad", "Broches y accesorios", "Preguntas frecuentes"],
  },
  {
    title: "Empresas",
    links: ["Plan Stock Asegurado", "Cómo funciona", "Cotizar ahora"],
  },
  {
    title: "Sublime Lab",
    links: ["Sobre nosotros", "Contacto", "Política de privacidad"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white py-14">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Sublime Lab"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-lg font-bold tracking-tight text-brand-700">
                Sublime Lab
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-ink-500">
              Lanyards corporativos con sublimación HD sin límites de color.
              Diseño, durabilidad y reposición sin fricción para tu empresa.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-ink-900">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-ink-500 hover:text-ink-800"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-100 pt-8 sm:flex-row">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} Sublime Lab · Creaciones sin límites.
          </p>
          <p className="text-xs text-ink-400">
            Hecho para empresas, agencias, startups y distribuidores.
          </p>
        </div>
      </div>
    </footer>
  );
}
