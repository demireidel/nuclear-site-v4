FROM node:22.19.0-alpine AS base
WORKDIR /app
ENV NODE_ENV=production
RUN corepack enable

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store pnpm fetch || true

FROM base AS builder
COPY . .
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store pnpm install --frozen-lockfile || pnpm install && pnpm build

FROM base AS runner
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000
CMD ["node", ".next/standalone/server.js"]
