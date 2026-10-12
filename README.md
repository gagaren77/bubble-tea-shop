# Bubble tea shop website template

A fast, one-page website for a bubble tea / boba shop. Built with
[Astro 5](https://astro.build) + [Tailwind CSS 4](https://tailwindcss.com),
shipped as a tiny nginx Docker image, and deployed with
[Coolify](https://coolify.io).

Live example: **Miss B's Tea Time**, Chicago → https://bubble.geekysquirrels.com

Sections: hero with live "open now / opens at" status · menu with prices ·
photo gallery · about + review quotes · hours, phone, Instagram, Google Map ·
SEO (Open Graph + `LocalBusiness` JSON-LD).

---

## Reuse it for another tea shop (10 minutes)

1. **Fork / clone** this repo.
2. **Edit one file:** `src/data/shop.ts` — name, tagline, address, phone,
   Instagram, order link (Grubhub / DoorDash / Toast …), hours, menu, review
   quotes, about text.
3. **Swap photos:** drop `.webp` images (≈1200 px on the long side) into
   `public/photos/` and update the paths in `shop.ts`.
   Tip: `cwebp -q 70 in.jpg -o out.webp` or any online converter.
4. **Rebrand colors / fonts** (optional): the tokens at the top of
   `src/styles/global.css` (`--color-blush`, `--color-forest`, …) and the
   Google Fonts link in `src/layouts/Base.astro`.
5. **Set the domain:** `siteUrl` in `shop.ts` (used for canonical / OG tags).
6. Commit, push, deploy (below).

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321  (hot reload)
npm run build      # static output in dist/
npm run preview    # serve dist/ locally
```

Or with Docker, exactly as it runs in production:

```bash
docker compose up --build   # http://localhost:8080
```

## Deploy with Coolify

1. Coolify → **Projects → + New** (or open an existing project) → **+ New Resource**.
2. Choose **Public Repository** (or your connected GitHub App source) and paste
   the repo URL, branch `main`.
3. **Build Pack: Dockerfile**. Port: `80`.
4. Set the domain, e.g. `https://bubble.geekysquirrels.com` (DNS A-record must
   already point to the Coolify server; Coolify's Traefik issues the Let's
   Encrypt certificate automatically).
5. **Deploy**. Every later push to `main` redeploys if the webhook / GitHub App
   is connected (Coolify → application → *Webhooks*).

The Dockerfile is two stages: `node:22-alpine` builds the static site,
`nginx:1.27-alpine` serves `dist/` with gzip and long cache headers for photos.

## Project layout

```
src/
  data/shop.ts          ← ALL content & contact info (edit this)
  pages/index.astro     ← the page layout / sections
  components/           ← Nav, OpenStatus (live hours pill)
  layouts/Base.astro    ← <head>, fonts, SEO, JSON-LD
  styles/global.css     ← Tailwind + brand tokens
public/photos/          ← images
Dockerfile, nginx.conf, docker-compose.yml
```

## Notes

- Hours are evaluated in the shop's time zone (`timeZone` in `shop.ts`) in the
  visitor's browser, so the "Open now" pill is always right regardless of
  where the site is hosted.
- The map is a plain Google Maps embed — no API key needed.
- Photos in the example site are customer photos from the shop's Google
  listing; replace them with the shop's own photos when available.
