# ./angular/Dockerfile
# Multi-stage build for Angular app (Node 20 build, nginx runtime)
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

# copy source and build
COPY . .

# Build angular app
RUN npm run build

# runtime
FROM nginx:stable-alpine AS runtime
# remove default nginx index
RUN rm -rf /usr/share/nginx/html/*

# copy built files
COPY --from=builder /app/dist/ng-front/browser /usr/share/nginx/html

# Recommended: custom nginx.conf for SPA fallback
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
