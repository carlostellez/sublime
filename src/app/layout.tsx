import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lanyers | Lanyards y porta-gafetes personalizados para empresas",
  description:
    "Lanyers fabrica lanyards y porta-gafetes personalizados para empresas, agencias y startups. Precios especiales al por mayor para distribuidores. Cotiza tu pedido hoy.",
  keywords: [
    "lanyards personalizados",
    "porta gafetes empresariales",
    "lanyards al por mayor",
    "distribuidor de lanyards",
    "material POP corporativo",
  ],
  openGraph: {
    title: "Lanyers | Lanyards personalizados para empresas y distribuidores",
    description:
      "Fabricación y venta al por mayor de lanyards y porta-gafetes personalizados. Cotiza en minutos.",
    type: "website",
    locale: "es_LA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
