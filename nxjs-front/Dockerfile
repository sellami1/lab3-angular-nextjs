# ./nextjs/Dockerfile
# Multi-stage build for Next.js (Node 20)
FROM node:20-alpine AS builder

WORKDIR /app

# install build deps
COPY package*.json ./
RUN npm ci

# copy source and build
COPY . .
RUN npm run build

# remove dev deps to keep final image small (optional)
RUN npm prune --production

# runtime image
FROM node:20-alpine AS runner
WORKDIR /app

# copy built app + prod deps from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

EXPOSE 3000

# assume package.json has "start": "next start -p $PORT"
CMD ["npm", "run", "start"]
