# Static site image for Dokploy: build the Next.js export, serve it with nginx.
#
# The guide/department generators degrade gracefully when the four game-server
# repos are absent (as they are inside this image): the committed generated
# data files in src/data are used instead.

FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html

# nginx's entrypoint runs envsubst on /etc/nginx/templates/*.template,
# writing the result to /etc/nginx/conf.d/.
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY nginx-status-proxy.conf /etc/nginx/status-proxy.conf

# Status upstreams for the four game servers. Marines and Monolith point at
# their live status APIs; estación and SCP still use placeholders — override
# any of these in Dokploy (Environment tab) when the real endpoint changes.
ENV STATUS_UPSTREAM_ESTACION=http://127.0.0.1:1212/status \
    STATUS_UPSTREAM_MARINES=https://cmu.estacioncapibara.com/status \
    STATUS_UPSTREAM_SCP=http://127.0.0.1:1214/status \
    STATUS_UPSTREAM_MONOLITH=https://monolith.estacioncapibara.com/status

EXPOSE 80
