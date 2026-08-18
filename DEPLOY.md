# Deploy — Dokploy (static app in Docker)

The site is a fully static Next.js export (`out/`) served by nginx inside a
single container. No server-side rendering, no Node at runtime.

## How the image works

- `Dockerfile` (multi-stage):
  1. `node:22-alpine` runs `npm ci && npm run build`. The prebuild generators
     (guides, departments, OG images) degrade gracefully inside the image: the
     four game-server repos are absent there, so the **committed** generated
     files in `src/data/` are used. Regenerate + commit them locally when
     server content changes.
  2. `nginx:alpine` serves `out/` with `nginx.conf.template` (security
     headers, gzip, caching, 404) and proxies the status endpoints.
- Status proxies: `/api/status/{estacion,marines,scp,monolith}` (plus legacy
  `/api/status` → estación) each `proxy_pass` to a game server's SS14 status
  API, configured via environment variables.

## Dokploy setup

1. Create an **Application**, source = this Git repo, branch `main`.
2. Build type: **Dockerfile** (it is at the repo root).
3. Container port: **80**. Attach the domain `estacioncapibara.com` — Dokploy's
   Traefik handles TLS/redirects.
4. Environment variables (real status endpoints of each SS14 server):

   ```
   STATUS_UPSTREAM_ESTACION=http://<host>:1212/status
   STATUS_UPSTREAM_SCP=http://<host>:1214/status
   ```

   Marines and Monolith already default to their live endpoints in the
   Dockerfile (`https://cmu.estacioncapibara.com/status` and
   `https://monolith.estacioncapibara.com/status`); set the variables only to
   override them.

   If the game servers run on the same Docker host, use the host's LAN IP or
   `host.docker.internal` (add it as extra host), not `127.0.0.1`.
5. Deploy. Subsequent pushes to `main` redeploy automatically if you enable
   auto-deploy.

## Local verification

```bash
docker build -t capibara-web .
docker run --rm -p 8080:80 capibara-web
# http://localhost:8080 — landing, /marines/, /wiki-scp/, etc.
curl -I http://localhost:8080/            # security headers
curl http://localhost:8080/api/status/estacion  # 502 unless a server is reachable
```

## Content update workflow

```bash
npm run generate-guides        # 4 wikis (needs the 4 server repos as siblings)
npm run generate-departments   # marines/scp/monolith departments
npm run extract-sprites && npm run extract-monolith-sprites
npm run extract-marines-sprites && npm run extract-scp-sprites
npm run check && npm run build # verify
git commit                     # generated data ships in the repo
```

Repo locations are overridable via `ESTACION_RESOURCES_ROOT`,
`MARINES_RESOURCES_ROOT`, `SCP_RESOURCES_ROOT`, `MONOLITH_RESOURCES_ROOT`.
