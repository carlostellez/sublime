# Despliegue en AWS S3 + CloudFront

El sitio se exporta como archivos estáticos (`npm run build` → carpeta `out/`) y se sube a S3.
Se recomienda **CloudFront delante del bucket**: da HTTPS, dominio propio, compresión y los encabezados de seguridad.

## 1. Crear la infraestructura (una sola vez)

1. **Bucket S3** privado (Block Public Access activado), por ejemplo `front-sublimelab`.
2. **Certificado en ACM** en la región `us-east-1` para `www.tudominio.com` (y el dominio raíz).
3. **Distribución de CloudFront**
   - Origen: el bucket S3 con **Origin Access Control (OAC)**; acepta la política de bucket que CloudFront sugiere.
   - *Default root object*: `index.html`
   - *Viewer protocol policy*: Redirect HTTP to HTTPS · Compresión activada.
   - *Alternate domain names*: tu dominio + el certificado de ACM.
   - **Páginas de error personalizadas**: códigos `403` y `404` → ruta `/404.html`, código de respuesta `404`.
   - *Response headers policy*: usa la administrada **SecurityHeadersPolicy** (o una propia con HSTS, `X-Content-Type-Options`, `Referrer-Policy`).
4. **DNS** (Route 53 u otro): registro `CNAME`/`ALIAS` del dominio hacia la distribución.

## 2. Permisos IAM mínimos para quien despliega

```json
{
  "Version": "2012-10-17",
  "Statement": [
    { "Effect": "Allow", "Action": ["s3:ListBucket"], "Resource": "arn:aws:s3:::front-sublimelab" },
    { "Effect": "Allow", "Action": ["s3:PutObject", "s3:DeleteObject", "s3:GetObject"], "Resource": "arn:aws:s3:::front-sublimelab/*" },
    { "Effect": "Allow", "Action": ["cloudfront:CreateInvalidation"], "Resource": "arn:aws:cloudfront::ID_CUENTA:distribution/ID_DISTRIBUCION" },
    { "Effect": "Allow", "Action": ["sts:GetCallerIdentity"], "Resource": "*" }
  ]
}
```

## 3. Desplegar

```bash
cp deploy.env.example .env.deploy     # completa bucket, URL y (opcional) ID de CloudFront
aws configure                         # o: aws sso login
npm run deploy:s3 -- --dry-run        # prueba sin subir nada
npm run deploy:s3                     # construye y publica
```

El script usa tres reglas de caché: `_next/static` (1 año, inmutable), imágenes (7 días) y HTML/sitemap/robots (siempre revalida), y luego invalida CloudFront.

## 4. Después de publicar

- Verifica `https://tudominio/sitemap.xml` y `https://tudominio/robots.txt`.
- Registra el dominio en Google Search Console y Bing Webmaster y envía el sitemap.
- Prueba la vista previa al compartir (LinkedIn Post Inspector, WhatsApp).

## Limitaciones del hosting estático

- **El formulario de contacto aún no envía datos** (tiene un `TODO` en `ContactForm.tsx`). En S3 no hay servidor: conéctalo a un servicio externo (API Gateway + Lambda/SES, Formspree, etc.) o a WhatsApp.
- Las imágenes ya vienen optimizadas en `.webp`; las originales en PNG quedaron en `design-sources/` (no se publican).
