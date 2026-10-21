#!/usr/bin/env bash
# Cria as issues da pasta issues/ no repositório atual usando o GitHub CLI (gh).
# Uso: ./scripts/criar-issues.sh
set -euo pipefail
cd "$(dirname "$0")/.."

for label in refatoracao metodo-longo arrow-anti-pattern numeros-magicos switch-statements classe-deus codigo-duplicado; do
  gh label create "$label" --force >/dev/null
done

for arquivo in issues/*.md; do
  titulo=$(sed -n '1p' "$arquivo")
  labels=$(sed -n '2p' "$arquivo" | sed 's/^labels: //')
  tail -n +4 "$arquivo" | gh issue create --title "$titulo" --label "$labels" --body-file -
done
