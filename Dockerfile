# ── Stage 1: Build frontend ────────────────────────────────────────────────────
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

# ── Stage 2: Run backend ───────────────────────────────────────────────────────
FROM node:20-alpine
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm ci --omit=dev
COPY backend/ ./
# Copia o frontend compilado para onde o Express espera
COPY --from=frontend-builder /app/frontend/dist /app/frontend/dist
EXPOSE 3001
CMD ["node", "index.js"]
