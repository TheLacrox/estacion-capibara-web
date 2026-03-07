# Nginx Configuration — SEO & Security Fixes

Add these directives to your nginx server block for `estacioncapibara.com`.

## Security Headers

```nginx
# HSTS — force HTTPS on all future visits (CRITICAL)
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

# Content Security Policy — prevent XSS attacks (HIGH)
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self' https://www.google-analytics.com https://cdn.ss14.io; frame-ancestors 'self'; worker-src 'self' blob:;" always;

# Permissions Policy — disable unused browser features (MEDIUM)
add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()" always;
```

## Performance

```nginx
# Brotli compression — 15-25% smaller than gzip (MEDIUM)
# Requires nginx brotli module (nginx-mod-http-brotli or libnginx-mod-brotli)
brotli on;
brotli_comp_level 6;
brotli_types text/html text/css application/javascript application/json image/svg+xml text/plain application/xml;

# Cache-Control for HTML pages (MEDIUM)
location / {
    add_header Cache-Control "public, max-age=3600, stale-while-revalidate=86400";
    # Re-add security headers here since add_header in a location block
    # overrides server-level add_header directives
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self' https://www.google-analytics.com https://cdn.ss14.io; frame-ancestors 'self'; worker-src 'self' blob:;" always;
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
}
```

## Manifest Content-Type Fix

```nginx
# Fix .webmanifest MIME type (LOW)
location ~* \.webmanifest$ {
    types { application/manifest+json webmanifest; }
    add_header Cache-Control "public, max-age=86400";
}
```

## Installing Brotli (if not installed)

```bash
# Ubuntu/Debian
sudo apt install libnginx-mod-brotli

# Then restart nginx
sudo systemctl restart nginx
```

## Quick Test After Applying

```bash
# Check security headers
curl -I https://estacioncapibara.com/ 2>/dev/null | grep -iE "strict-transport|content-security|permissions-policy"

# Check brotli
curl -H "Accept-Encoding: br" -I https://estacioncapibara.com/ 2>/dev/null | grep -i content-encoding

# Check manifest content-type
curl -I https://estacioncapibara.com/manifest.webmanifest 2>/dev/null | grep -i content-type
```

## Important Note on `add_header`

Nginx's `add_header` directive is **not inherited** into `location` blocks. If you already have `location` blocks in your config, you need to repeat all `add_header` directives inside each one, or use the `ngx_headers_more` module (`more_set_headers`) which does inherit.
