import {
  displayAddress,
  hasRealAddress,
  mapsEmbedSrc,
  mapsLink,
  mapsQuery,
  scheduleRows,
  showLocation,
  site,
} from "@/config/site";
import SocialLinks from "./SocialLinks";
import LocationMap from "./LocationMap";

const trust = [
  { title: "Taller propio", desc: "Producimos nosotros mismos: control total de color y calidad en cada lote." },
  { title: "Visita y conoce el proceso", desc: "Agenda por WhatsApp y ve tus lanyards en producción." },
  { title: "Despacho a todo el país", desc: `Enviamos a ${site.location.areaServed.toLowerCase()} con seguimiento.` },
];

function Row({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-fg-subtle">{label}</p>
        <div className="mt-0.5 text-sm text-fg">{children}</div>
      </div>
    </div>
  );
}

const ic = "h-5 w-5";
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export default function Location() {
  if (!showLocation) return null;
  const a = displayAddress;
  const rows = scheduleRows();

  return (
    <section id="ubicacion" className="py-20 sm:py-28" aria-labelledby="ubicacion-titulo">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Nuestro taller</span>
          <h2 id="ubicacion-titulo" className="mt-4 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Somos un taller real, con dirección y gente que te atiende
          </h2>
          <p className="mt-4 text-base text-fg-muted sm:text-lg">
            Fabricamos en {a.city}
            {site.location.country ? `, ${site.location.country}` : ""}. Escríbenos, llámanos o pasa a conocernos.
          </p>
          {!hasRealAddress && (
            <p className="mt-4 rounded-lg border border-dashed border-gold-500 bg-gold-500/10 px-3 py-2 text-xs text-fg-muted">
              Vista de desarrollo: completa la dirección real en <code>src/config/site.ts</code>. En producción esta
              sección se oculta hasta que lo hagas.
            </p>
          )}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 rounded-3xl border border-line bg-surface p-7 shadow-soft sm:p-8">
            <address className="space-y-6 not-italic">
              <Row
                label="Dirección del taller"
                icon={
                  <svg viewBox="0 0 24 24" className={ic} {...stroke}>
                    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                }
              >
                <p className="font-semibold">{a.street}</p>
                <p className="text-fg-muted">
                  {[a.neighborhood, a.city, a.region].filter(Boolean).join(", ")} · {a.country}
                </p>
                <a
                  href={mapsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-semibold text-accent underline-offset-4 hover:underline"
                >
                  Cómo llegar en Google Maps →
                </a>
              </Row>

              <Row
                label="WhatsApp y teléfono"
                icon={
                  <svg viewBox="0 0 24 24" className={ic} {...stroke}>
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
                  </svg>
                }
              >
                <a
                  href={`https://wa.me/${site.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-accent"
                >
                  {site.contact.displayPhone}
                </a>
                <span className="text-fg-muted"> · llamadas y WhatsApp</span>
              </Row>

              <Row
                label="Correo de ventas"
                icon={
                  <svg viewBox="0 0 24 24" className={ic} {...stroke}>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                }
              >
                <a href={`mailto:${site.contact.email}`} className="font-semibold hover:text-accent">
                  {site.contact.email}
                </a>
              </Row>

              <Row
                label="Horario de atención"
                icon={
                  <svg viewBox="0 0 24 24" className={ic} {...stroke}>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                }
              >
                <dl className="space-y-0.5">
                  {rows.map(([days, hours]) => (
                    <div key={days} className="flex gap-3">
                      <dt className="w-24 shrink-0 text-fg-muted">{days}</dt>
                      <dd className="font-medium">{hours}</dd>
                    </div>
                  ))}
                </dl>
              </Row>
            </address>

            <div className="border-t border-line-soft pt-6">
              <p className="mb-3 text-sm font-semibold text-fg">Síguenos y conecta con nosotros</p>
              <SocialLinks />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <LocationMap
              destination={mapsQuery()}
              defaultSrc={mapsEmbedSrc()}
              title={`Mapa de la ubicación del taller de ${site.name}`}
              country={site.location.country}
            />
            <ul className="grid gap-4 sm:grid-cols-3">
              {trust.map((t) => (
                <li key={t.title} className="rounded-2xl border border-line bg-surface p-4">
                  <p className="text-sm font-semibold text-fg">{t.title}</p>
                  <p className="mt-1 text-xs text-fg-muted">{t.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
