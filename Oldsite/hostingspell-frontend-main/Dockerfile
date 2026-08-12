# Stage 1 - deps
# Install production + dev dependencies
FROM node:22-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --prefer-offline --no-audit

# Stage 2 - builder
# Build the Next.js app with standalone output
FROM node:22-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

# Clean any previous build artifacts to avoid checksum issues
RUN rm -rf .next

# Build with explicit output format
RUN npm run build

# Verify the build output exists
RUN test -d .next/standalone || (echo "Build failed: .next/standalone not found" && exit 1)

# Stage 3 - runner
# Minimal production image using standalone output
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy public assets
COPY --from=builder /app/public ./public

# Copy standalone server and static assets
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Verify critical files exist
RUN test -f server.js || (echo "Error: server.js not found in standalone output" && exit 1)

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
