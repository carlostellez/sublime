import { faqs } from "@/content/faqs";
import { hasRealAddress, realSocialUrls, site } from "@/config/site";
import { whatsappConfig } from "@/config/whatsapp";

const DAY_EN: Record<string, string> = {
  lun: "Monday", mar: "Tuesday", mie: "Wednesday", jue: "Thursday", vie: "Friday", sab: "Saturday", dom: "Sunday",
};

const hh = (h: number) => `${String(h).padStart(2, "0")}:00`;

export default function JsonLd() {
  const orgId = `${site.url}/#organization`;
  const l = site.location;

  const openingHoursSpecification = Object.entries(whatsappConfig.schedule)
    .filter(([, s]) => s)
    .map(([d, s]) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: DAY_EN[d],
      opens: hh(s![0]),
      closes: hh(s![1]),
    }));

  const graph = [
    {
      "@type": "Organization",
      "@id": orgId,
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      logo: `${site.url}${site.logo}`,
      slogan: site.slogan,
      email: site.contact.email,
      telephone: `+${site.contact.phone}`,
      ...(realSocialUrls.length ? { sameAs: realSocialUrls } : {}),
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: `+${site.contact.phone}`,
          email: site.contact.email,
          areaServed: l.countryCode,
          availableLanguage: ["Spanish"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: site.language,
      publisher: { "@id": orgId },
    },
    {
      // Negocio local / taller: solo incluye dirección si es real
      "@type": "LocalBusiness",
      "@id": `${site.url}/#localbusiness`,
      name: `${site.name} – Taller de sublimación`,
      image: `${site.url}${site.ogImage.url}`,
      url: site.url,
      telephone: `+${site.contact.phone}`,
      email: site.contact.email,
      parentOrganization: { "@id": orgId },
      areaServed: { "@type": "Country", name: l.country },
      openingHoursSpecification,
      ...(hasRealAddress
        ? {
            address: {
              "@type": "PostalAddress",
              streetAddress: [l.street, l.neighborhood].filter(Boolean).join(", "),
              addressLocality: l.city,
              ...(l.region ? { addressRegion: l.region } : {}),
              ...(l.postalCode ? { postalCode: l.postalCode } : {}),
              addressCountry: l.countryCode,
            },
          }
        : {}),
      ...(hasRealAddress && l.lat != null && l.lng != null
        ? { geo: { "@type": "GeoCoordinates", latitude: l.lat, longitude: l.lng } }
        : {}),
    },
    {
      "@type": "Service",
      "@id": `${site.url}/#service`,
      name: "Lanyards corporativos personalizados con sublimación HD",
      serviceType: "Fabricación de lanyards personalizados",
      description: site.description,
      provider: { "@id": orgId },
      areaServed: { "@type": "Country", name: l.country },
      audience: { "@type": "BusinessAudience", audienceType: "Empresas, agencias, startups y distribuidores" },
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
