import Image from "next/image";
import { displayAddress, showLocation, site } from "@/config/site";
import SocialLinks from "./SocialLinks";

const columns = [
  {
    title: "Producto",
    links: [
      { label: "Sublimación HD", href: "#solucion" },
      { label: "Durabilidad", href: "#solucion" },
      { label: "Broches y accesorios", href: "#solucion" },
      { label: "Preguntas frecuentes", href: "#faq" },
    ],
  },
  {
    title: "Empresas",
    links: [
      { label: "Plan Stock Asegurado", href: "#plan-stock" },
      { label: "Cómo funciona", href: "#proceso" },
      { label: "Cotizar ahora", href: "#contacto" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line-soft bg-surface py-14">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr]">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Sublime Lab"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-lg font-bold tracking-tight text-accent">
                Sublime Lab
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-fg-muted">
              Lanyards corporativos con sublimación HD sin límites de color.
              Diseño, durabilidad y reposición sin fricción para tu empresa.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-fg">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-fg-muted hover:text-fg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold text-fg">Contacto</h4>
            <address className="mt-4 space-y-2 text-sm not-italic text-fg-muted">
              {showLocation && (
                <p>
                  {displayAddress.street}
                  <br />
                  {[displayAddress.city, displayAddress.country].filter(Boolean).join(", ")}
                </p>
              )}
              <p>
                <a href={`https://wa.me/${site.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
                  {site.contact.displayPhone} (WhatsApp)
                </a>
              </p>
              <p>
                <a href={`mailto:${site.contact.email}`} className="hover:text-fg">
                  {site.contact.email}
                </a>
              </p>
            </address>
            <SocialLinks className="mt-4" />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line-soft pt-8 sm:flex-row">
          <p className="text-xs text-fg-subtle">
            © {new Date().getFullYear()} Sublime Lab · Creaciones sin límites.
          </p>
          <p className="text-xs text-fg-subtle">
            Hecho para empresas, agencias, startups y distribuidores.
          </p>
        </div>
      </div>
    </footer>
  );
}
