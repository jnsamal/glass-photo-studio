# Skyglass Studio

A photography studio website built with **Next.js 15** (App Router), **TypeScript**,
and **Tailwind CSS v4**, in a sky-blue-and-white **liquid glass** visual style —
frosted, translucent panels with soft refracted-light edges over a bright,
airy background.

## Pages

- **Home** — hero, featured work, services, testimonial, booking CTA
- **Gallery** — filterable grid (Portrait / Wedding / Editorial / Landscape / Product)
  with a full-size lightbox and keyboard navigation
- **About** — studio story, working philosophy, process, and gear list
- **Contact** — validated contact form with a simulated send flow, plus studio details

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Demonstration imagery

`src/lib/photos.ts` holds the photo data (source URL, category, alt text, and
an illustrative EXIF-style caption). It's currently populated with hotlinked
Unsplash photography for demonstration. To use your own work:

1. Replace `src` with your own image URLs (or drop files in `public/` and use
   local paths like `/photos/your-image.jpg`).
2. If you hotlink from a new domain, add it to `images.remotePatterns` in
   `next.config.ts`.
3. Update `alt`, `category`, `camera`, and `settings` to match.

Every image renders through `PhotoFrame`, which falls back to a soft gradient
placeholder if a URL ever fails to load, so a broken link never shows a
broken-image icon.

## Fonts

Fraunces (display), Inter (body), and IBM Plex Mono (captions/labels) are
self-hosted as static files in `src/fonts/` and loaded with `next/font/local`
— no runtime requests to Google Fonts, and no layout shift.

## Customizing the palette

Colors and glass-surface variables live at the top of `src/app/globals.css`
(`--sky-50` ... `--sky-700`, `--ink-900`, and the `--glass-*` tokens), then are
exposed to Tailwind via the `@theme inline` block, so `bg-sky-400`,
`text-ink-900`, etc. are all available as utility classes.

## Contact form

`src/components/ContactForm.tsx` currently validates client-side and
simulates a send. To make it functional, wire the `onSubmit` handler to:

- A Next.js Route Handler (`src/app/api/contact/route.ts`) that emails you, or
- A hosted form service (Formspree, Resend, etc.)

## Deploying

Works out of the box on Vercel (https://vercel.com) or any Node hosting that
supports Next.js 15. No environment variables are required for the current
feature set.
