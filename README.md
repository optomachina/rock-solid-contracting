# azrocksolid.com — Rock Solid Contractors

Marketing site for Rock Solid Contractors, a Tucson-based full-service remodeling and general contracting company serving southern Arizona (Tucson, Phoenix, and the communities between).

Next.js 14 (App Router) + TypeScript + Tailwind, deployed on Vercel.

## Sections
- Hero with service area + CTAs
- Services (outdoor living, kitchens, bathrooms, flooring, whole-home, general contracting)
- Our Work photo gallery with lightbox
- About / trust block
- Estimate request form with date/time picker and photo/video upload
- Footer with placeholder contact info

## Development
```bash
npm install
npm run dev
```
Then open http://localhost:3000.

## Estimate submissions
Submissions hit `POST /api/estimate`. The current implementation validates and logs the submission to the server. Wire up email delivery (e.g. Resend to `contact@azrocksolid.com`) and file storage (e.g. Vercel Blob) before launch — there's a `TODO` marker in `src/app/api/estimate/route.ts`.

## Gallery
Renamed copies of the source photos live in `public/gallery/`. The original Google-named sources (under `/Images`) are gitignored.

## Placeholder contact info (replace before launch)
- Email: `contact@azrocksolid.com`
- Phone: `(520) 555-0100`
- Address: Tucson, AZ

## Deploy
Pushed to GitHub as `rock-solid-contracting`, deployed to Vercel. Production domain: `azrocksolid.com`.
