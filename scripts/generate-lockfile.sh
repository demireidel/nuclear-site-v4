#!/usr/bin/env bash
set -euo pipefail
corepack enable || true
rm -rf node_modules pnpm-lock.yaml
pnpm install --lockfile-only
pnpm install --frozen-lockfile
if git diff --quiet -- pnpm-lock.yaml; then
  echo "✓ lockfile stable"
else
  echo "✗ lockfile drift detected"
  git --no-pager diff -- pnpm-lock.yaml || true
  exit 1
fi
echo "done"
