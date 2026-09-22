const columns = [
  {
    title: "Producto",
    links: ["Materiales", "Personalización", "Tiempos de entrega", "Preguntas frecuentes"],
  },
  {
    title: "Clientes",
    links: ["Empresas", "Agencias", "Startups", "Distribuidores"],
  },
  {
    title: "Compañía",
    links: ["Sobre Lanyers", "Casos de éxito", "Contacto", "Política de privacidad"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white py-14">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-base font-bold text-white">
                L
              </span>
              <span className="text-lg font-bold tracking-tight text-ink-900">
                Lanyers
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-ink-500">
              Fabricamos y distribuimos lanyards y porta-gafetes personalizados
              para empresas, agencias, startups y distribuidores mayoristas.
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
            © {new Date().getFullYear()} Lanyers. Todos los derechos reservados.
          </p>
          <p className="text-xs text-ink-400">
            Hecho para empresas, agencias, startups y distribuidores.
          </p>
        </div>
      </div>
    </footer>
  );
}
