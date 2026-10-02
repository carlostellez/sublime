#!/usr/bin/env bash
# Despliega el sitio estático (carpeta /out) en un bucket de S3 y, opcionalmente, invalida CloudFront.
#
# Uso:
#   npm run deploy:s3                 # construye y sube
#   npm run deploy:s3 -- --dry-run    # muestra qué subiría, sin cambiar nada
#   npm run deploy:s3 -- --skip-build # sube la carpeta /out existente
#
# Configuración: copia deploy.env.example a .env.deploy (o exporta las variables).
set -euo pipefail

cd "$(dirname "$0")/.."

DRY_RUN=""
SKIP_BUILD="0"
for arg in "$@"; do
  case "$arg" in
    --dry-run)    DRY_RUN="--dryrun" ;;
    --skip-build) SKIP_BUILD="1" ;;
    -h|--help)    sed -n '2,10p' "$0"; exit 0 ;;
    *) echo "Opción desconocida: $arg" >&2; exit 1 ;;
  esac
done

if [ -f .env.deploy ]; then
  set -a; . ./.env.deploy; set +a
fi

: "${S3_BUCKET:?Falta S3_BUCKET (nombre del bucket). Revisa deploy.env.example}"
: "${NEXT_PUBLIC_SITE_URL:?Falta NEXT_PUBLIC_SITE_URL (URL pública final, sin / al final)}"

command -v aws >/dev/null 2>&1 || { echo "Instala AWS CLI v2: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html" >&2; exit 1; }

AWS_ARGS=()
[ -n "${AWS_PROFILE:-}" ] && AWS_ARGS+=(--profile "$AWS_PROFILE")
[ -n "${AWS_REGION:-}" ]  && AWS_ARGS+=(--region "$AWS_REGION")

echo "→ Verificando credenciales de AWS…"
aws "${AWS_ARGS[@]}" sts get-caller-identity --query Arn --output text >/dev/null \
  || { echo "No hay credenciales válidas de AWS (aws configure / aws sso login)." >&2; exit 1; }

if [ "$SKIP_BUILD" = "0" ]; then
  echo "→ Construyendo el sitio (${NEXT_PUBLIC_SITE_URL})…"
  [ -d node_modules ] || npm ci
  export NEXT_PUBLIC_SITE_URL
  npm run build
fi

[ -f out/index.html ] || { echo "No existe out/index.html. Ejecuta el build primero." >&2; exit 1; }

DEST="s3://${S3_BUCKET}"

echo "→ [1/3] Archivos versionados (_next/static): caché de 1 año"
aws "${AWS_ARGS[@]}" s3 sync out "$DEST" $DRY_RUN --delete \
  --exclude "*" --include "_next/static/*" \
  --cache-control "public,max-age=31536000,immutable"

echo "→ [2/3] Imágenes y fuentes: caché de 7 días"
aws "${AWS_ARGS[@]}" s3 sync out "$DEST" $DRY_RUN --delete \
  --exclude "*" --include "images/*" \
  --cache-control "public,max-age=604800"

echo "→ [3/3] HTML, sitemap, robots y demás: siempre revalidar"
aws "${AWS_ARGS[@]}" s3 sync out "$DEST" $DRY_RUN --delete \
  --exclude "_next/static/*" --exclude "images/*" \
  --cache-control "public,max-age=0,must-revalidate"

if [ -n "${CLOUDFRONT_DISTRIBUTION_ID:-}" ] && [ -z "$DRY_RUN" ]; then
  echo "→ Invalidando CloudFront (${CLOUDFRONT_DISTRIBUTION_ID})…"
  aws "${AWS_ARGS[@]}" cloudfront create-invalidation \
    --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" --paths "/*" \
    --query "Invalidation.Id" --output text
fi

echo "✔ Listo. Sitio publicado: ${NEXT_PUBLIC_SITE_URL}"
