# Install dependencies
FROM node:24-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

# Build application
FROM node:24-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN --mount=type=secret,id=app_env,target=/app/.env,required=true \
    mkdir -p public \
    && npm run build \
    && rm -f .next/standalone/.env .next/standalone/.env.*

# Run application
FROM node:24-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

RUN addgroup -S nodejs -g 1001 \
    && adduser -S nextjs -u 1001 -G nodejs \
    && mkdir -p .next \
    && chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

CMD ["node", "server.js"]
