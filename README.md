# Biite - Astro rebuild (no CMS)

Structure inspired by biite.nl homepage layout. All text lives in ONE file:

**`src/data/content.ts`** - edit this file to change every page.

No CMS, no database, no admin. Just edit the file, then:

```bash
npm install
npm run dev     # local preview at http://localhost:4321
npm run build   # static output in dist/
```

## What is in the content file
- site: name, email, phone, CTA
- nav: top navigation
- home: hero, quote, services (4 cards), about, process steps
- werkwijze, over, expertiseIndex, contactPage, footer

## Pages
- `/` homepage
- `/expertise/` + 4 detail pages
- `/werkwijze/` - 5 fases
- `/over/` - bureau
- `/blog/` - starter, add .astro files in src/pages/blog/
- `/contact/` - form is front-end only, connect Formspree / Netlify Forms / own endpoint for submissions
- `/privacy/` , `/algemene-voorwaarden/` - replace with your own legal text

## Images
Put your own photos in `/public/` and reference them as `/your-photo.jpg`.
Placeholders are used now. Do not reuse photos from the original site unless you own them.

## Deploy
Any static host works: Netlify, Vercel, Cloudflare Pages, Coolify (static). Build command: `npm run build`, output: `dist`.

## 1:1 layout - how to replace photos
Layout now matches biite.nl section order 1:1:
1 Hero + stats meter, 2 Quote, 3 Services grid (image 6 + 2 cards, then 2 cards + image 6), 4 About (image 5 cols, text 6 cols), 5 Process 01-03, 6 Final CTA + footer.

Photos are placeholders with REPLACE IMAGE labels. To replace:
- Put your new photo in /public/, e.g. /public/diensten-1.jpg, /public/portret.jpg
- In src/pages/index.astro, replace the placeholder divs with <img src="/diensten-1.jpg" ... />
- About portrait: aspect 4:5. Services images: 1600 x 744.

Text: all copy lives in src/data/content.ts. If you own the original copy, paste your exact text there.
