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

# Status upstreams for the four game servers. Override these in Dokploy
# (Environment tab) with the real host:port of each SS14 server's status API.
ENV STATUS_UPSTREAM_ESTACION=http://127.0.0.1:1212/status \
    STATUS_UPSTREAM_MARINES=http://127.0.0.1:1213/status \
    STATUS_UPSTREAM_SCP=http://127.0.0.1:1214/status \
    STATUS_UPSTREAM_MONOLITH=http://127.0.0.1:1215/status

EXPOSE 80
