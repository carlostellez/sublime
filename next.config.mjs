/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportación estática: `npm run build` genera la carpeta /out lista para S3.
  output: "export",
  poweredByHeader: false,
  compress: true,
  // El optimizador de imágenes de Next necesita servidor; en S3 usamos imágenes ya optimizadas (.webp).
  images: { unoptimized: true },
  // Los encabezados de seguridad/caché se configuran en CloudFront (ver docs/DEPLOY_S3.md).
};

export default nextConfig;
