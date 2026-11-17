# Finch & Flange Plumbing — concept demo

A mobile-first static website for **Finch & Flange Plumbing**, a fictional plumber in Brisbane and South East Queensland. It is a concept demo by **JS Web Services** (Joel’s small web design business for local businesses). It is not a real plumbing business. Prices, reviews, licence numbers, the address, and the phone number are examples. The phone number is reserved by the ACMA for use in fiction.

## Build

Requires Node.js 22.23.4 or newer (the Astro release in this repo).

```bash
npm ci && npm run build
```

Static files are written to `dist/`.

```bash
npm run dev
```

## Notes

- The enquiry form does not send data anywhere. Submitting it shows a confirmation in the browser.
- Canonical URLs, Open Graph, and `public/robots.txt` use `https://plumber-demo-wb6b.onrender.com`.
- Illustrations and icons are original SVG. There are no stock photos.
