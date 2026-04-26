# Design System — Rock Solid Contractors

**System name:** Field Notes from a Stonemason
**Version:** v1.0 (2026-04-25)
**Source of truth.** Read this file before making any visual or UI decision. Do not deviate without explicit approval.

## Product Context

- **What this is:** Marketing site for Rock Solid Contractors (azrocksolid.com). Lead generation for full-service remodeling and general contracting jobs.
- **Who it's for:** Tucson + Phoenix homeowners hiring for kitchens, bathrooms, flooring, outdoor living (pergolas, outdoor kitchens, stonework), whole-home remodels, and general contracting. Demographic skews older (50+), with bad eyes, ready to spend $20k–$200k+.
- **Space:** Home services / remodeling in southern Arizona (Sonoran desert).
- **Project type:** Marketing site (Next.js 14 App Router, TypeScript, Tailwind, deployed to Vercel).

## The Memorable Thing

**Stone, timber, time.**

Every visual decision serves this. Heavy, material-forward, honest to stone/timber/precision craft, Sonoran-rooted. NOT soft farmhouse beige. NOT generic AZ stock photos. NOT lifestyle marketing.

If a design choice doesn't reinforce this, change it.

## Aesthetic Direction

- **Direction:** Editorial / industrial. Closer to a Klim type specimen, a New Yorker reported piece, or a Japanese carpentry studio's site than to any contractor in Arizona.
- **Decoration level:** Intentional — hairline rules, oldstyle figures, mono serial numbers (PROJECT №247), warm paper grain on caliche surfaces. No decorative blobs, no illustrations, no purple gradients.
- **Mood:** Quarried, sun-struck, exacting. The calm authority of a structural drawing rather than the polish of a brochure.
- **What we are NOT:** brutalist (too cold for residential buyers), farmhouse (every other AZ contractor does this), desert-modern minimal (too generic).

## Typography

The editorial-industrial triple: **serif display + serif body + mono numerals.** Each role does one thing. No ambiguity.

- **Display:** **Fraunces** (variable, Google Fonts) at `opsz: 144, wght: 700, SOFT: 30, WONK: 0`. Open letterforms, weight without compression, generous spacing. Reads as editorial-confident, not stamped-industrial. Headlines, section labels, services index names, the wordmark.
- **Editorial italic:** **Fraunces italic** at `opsz: 144, wght: 600, SOFT: 50, WONK: 1`. The WONK axis adds slight irregularity that reads like hand-set type. Used for taglines, pull quotes, the iron-rust accent moments inside a headline (`<em>` slots), and reported-piece captions.
- **Body:** **Newsreader** (variable, Google Fonts). Editorial serif with gravity. Contrasts with the display weight while staying in the serif family.
- **Data / utility:** **JetBrains Mono** (Google Fonts). Measurements, license #, project counts, lead times, dimensions, dates, addresses. Tabular figures everywhere a number lives.
- **Loading:** Google Fonts via `<link rel="preconnect">` + `<link href="...family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&family=JetBrains+Mono:wght@400;500;700&family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&display=swap">`.

### Type Scale (older readers — generous)

| Role | Size | Line-height | Letter-spacing | Notes |
|------|------|-------------|----------------|-------|
| Hero headline | clamp(56px, 7.4vw, 108px) | 1.0 | -0.015em | Sentence case, NOT uppercase |
| Section H2 | clamp(40px, 5.2vw, 76px) | 1.02 | -0.01em | Sentence case |
| Services row name | clamp(32px, 4vw, 52px) | 1.02 | -0.005em | Sentence case |
| File №042 (correspondence) | 64px | 1.0 | -0.01em | Iron color |
| Body large (hero, letter) | 22–23px | 1.55 | 0 | Newsreader |
| Body | 19px | 1.6 | 0 | Newsreader, default |
| Body small / footer items | 19px | 1.5 | 0 | Newsreader, NOT smaller |
| Mono meta strip | 13px | — | 0.1em | Uppercase, JetBrains Mono |
| Mono labels (§01, FIG. 01) | 11–13px | — | 0.14–0.18em | Uppercase, JetBrains Mono |
| Button label | 13–15px | — | 0.12–0.14em | Uppercase, JetBrains Mono 500 |

**Hard rule:** body size is **never smaller than 19px**. Footer copy is **19px**, not 14px or 16px. The demographic has bad eyes; we don't make them squint.

### Type Don'ts

- Do NOT use: Inter, Roboto, Arial, Helvetica, Open Sans, Lato, Montserrat, Poppins, Space Grotesk, system-ui, Geist Sans (overused/blacklisted).
- Do NOT uppercase the hero or section headlines. Mono labels and buttons are uppercase; body type is sentence case.
- Do NOT use Anton, Oswald, or condensed industrial grotesques as the primary display — they read too cramped for our older demographic.

## Color

Material palette. Not beige-and-brick. Gypsum dust, sun-bleached canvas, oxidized iron, mesquite bark, and cut stone — the literal material palette of southern Arizona construction.

```css
:root {
  --rs-basalt:   #171411;  /* primary surface (dark mode default) */
  --rs-caliche:  #E8DDC9;  /* paper / light surface */
  --rs-iron:     #A64A2A;  /* oxidized rebar — primary accent (stamps, buttons, NOT gradients) */
  --rs-iron-hover: #C45A32;
  --rs-varnish:  #A8956B;  /* desert varnish — dividers, secondary accent */
  --rs-mesquite: #5C6B3A;  /* palo verde — semantic success */
  --rs-dust:     #C8721E;  /* afternoon dust — semantic warning */
  --rs-sand:     #D9CDB6;  /* text on dark */
  --rs-shadow:   #5F5649;  /* muted text */

  /* Theme tokens (dark mode default) */
  --bg: var(--rs-basalt);
  --surface: #1f1a16;
  --paper: var(--rs-caliche);
  --text: var(--rs-sand);
  --text-muted: var(--rs-shadow);
  --accent: var(--rs-iron);
  --accent-hover: var(--rs-iron-hover);
  --line: #3a3128;
  --on-paper-text: #1F1C17;
  --on-paper-muted: #5F5649;
  --on-paper-line: var(--rs-varnish);
}

[data-theme="light"] {
  --bg: var(--rs-caliche);
  --surface: #f1e7d3;
  --paper: var(--rs-basalt);
  --text: #1F1C17;
  --text-muted: #5F5649;
  --line: var(--rs-varnish);
  --on-paper-text: var(--rs-sand);
  --on-paper-muted: var(--rs-shadow);
  --on-paper-line: #3a3128;
}
```

- **Approach:** Restrained. Iron-rust is the only true accent. Use it as a stamp (small, deliberate) — never as a gradient, never as a fill that exceeds ~10% of the viewport.
- **Dark mode is the default** for marketing surfaces (hero, services, CTA, footer). Caliche-paper sections breathe between the dark — used for the Correspondence (client letter) section and About/process content.
- **Semantic:** mesquite (success), dust (warning), iron (error / primary). Info colors borrow varnish or basalt depending on surface.
- **Contrast:** every text/surface combination must clear WCAG AA (4.5:1 for body, 3:1 for large display). Verify before committing.

## Spacing

- **Base unit:** 8px.
- **Density:** Editorial. Generous whitespace, large dead space between sections, vertical rhythm built on hard 1px hairlines in `--rs-varnish` (light) or `--line` (dark).
- **Scale:** 2xs(2) xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48) 3xl(64) 4xl(96) 5xl(128).
- **Section padding:** 96–120px top/bottom on desktop.

## Layout

- **Approach:** Asymmetric editorial poster. Hybrid grid (12-col responsive baseline) but layouts deliberately break the grid for the hero, correspondence section, and capabilities index.
- **Hero:** NOT a centered hero. 38/62 split — left column has metadata strip + display headline + tagline italic + body + dual CTAs; right column is ONE close-crop photograph (joinery, stone edge, hand-on-material). Above both columns: a hairline rule with mono metadata `TUC + PHX · LIC #ROC-XXXXXX · EST. 2008 · BUILT LIKE THE DESERT, NOT FOR THE DESERT`.
- **Services:** Numbered typographic INDEX, not a card grid. `01 Outdoor Living / 02 Kitchens / 03 Bathrooms / 04 Flooring / 05 Whole-Home / 06 General Contracting`. Each row reveals a thumbnail on hover.
- **Testimonials:** ONE full-section client letter ("Correspondence, File №042") per scroll-section. Set as actual correspondence — display-weight file number in iron, mono dl of metrics (Project / Address / Build dates / Budget / Lead time / Crew), photo slot with FIG. caption, italic pull quote, italic signature. NOT a carousel.
- **Photography direction:** tactile detail crops, monochrome-warm grade, no wide-angle pergola sunsets, no smiling families, no stock photos. Show the work — slab edges, timber joinery, steel brackets, masonry texture, hands at work.
- **Grid:** max content width 1440px, 32px gutter on desktop, 16px on mobile.
- **Border-radius:** 2px max, often 0. NEVER bubble radius. Buttons are hard-edged rectangles. Cards (rare) have hairline borders, not rounded corners.

## Motion

- **Approach:** Minimal-functional. The site feels like print, not theater. No scroll-driven choreography, no entrance animations on every block.
- **Easing:** enter (ease-out), exit (ease-in), move (ease-in-out).
- **Duration:** micro 50–100ms, short 150–250ms, medium 250–400ms (rare).
- **Hover:** 200–250ms ease-out background or color change. Underline reveal on links via mono caret `→`, not pill backgrounds.

## Components

- **Buttons:**
  - Primary: iron-rust fill, white text, hard-edged 0px radius, 12–18px padding, JetBrains Mono uppercase 13–15px, mono caret `→`.
  - Ghost: transparent, text in `--text`, mono caret in iron, no border. Hover shifts text to iron.
  - NEVER: gradient fill, pill radius, drop shadow, glow.
- **Forms:**
  - Inputs are bottom-border-only (no full borders, no rounded fills). Border-bottom 1px in `--line`, focus shifts to `--rs-iron`.
  - Labels are JetBrains Mono uppercase 11–13px in `--text-muted`.
  - 16–17px input text in Newsreader.
- **Cards:** Avoid where possible. Prefer typographic hierarchy + hairline rules. When unavoidable, hairline border 1px, 0px radius, generous padding.

## Iconography

Avoid. The system replaces icons with display-type labels and mono labels. If an icon is genuinely needed (social, contact), use a 1.5px-stroke line icon at 16–20px, in `--text-muted`. NEVER colored circles behind icons.

## Voice / Copy Adjacency

The design system implies a copy posture. Headlines are sentence case, declarative, short, with one italic emphasis word in iron-rust. Body copy is plain English — no marketing speak, no "Built for X," no "elevate your home." Mono metadata is factual: dates, dimensions, license #, lead times, budget ranges. Captions are catalog-style: `FIG. 01 STONE PILLAR, FOOTHILLS PROJECT — DETAIL OF TIMBER BEAM JOINERY, SHOT MARCH 2026`.

## Anti-slop Checklist

Reject any design that includes:

- Purple/violet gradients
- 3-column feature grid with icons in colored circles
- Centered hero with full-width sunset stock photo
- Uniform bubble border-radius (`rounded-2xl` everywhere)
- Gradient buttons or gradient CTAs
- system-ui / -apple-system as primary display or body font
- Smiling-family stock photography
- "Built for X" / "Designed for Y" / "Elevate your home" / "Your dream home awaits" copy patterns
- Inter, Roboto, Helvetica, Open Sans, Lato, Montserrat, Poppins, Space Grotesk, Geist Sans
- Anton, Oswald, or condensed industrial grotesques as primary display (too cramped for our demographic)
- Footer copy below 19px

## Deliberate Risks (where we depart from category)

1. **Dark basalt as primary surface** instead of warm-light beige. Every other AZ contractor uses warm-light beige. Going dark = serious-craft positioning. Mitigation: caliche-paper sections breathe between the dark.
2. **Services as a numbered typographic INDEX** instead of an icon-card grid. Signals "the work speaks; we don't need wrench icons." Mitigation: easy A/B fallback to cards if bounce spikes.

## Safe Choices (table stakes)

- Real photography of YOUR work, monochrome-warm grade
- Clear primary CTA "Request a Free Estimate" with iron-rust fill in persistent header + hero
- License # + service area visible in persistent header meta strip
- WCAG AA+ contrast on every text/surface combination
- Body copy at 19px+ for older readers
- Sentence-case headlines, not screaming uppercase

## Implementation notes (for engineers)

- The current `globals.css` defines `--brand-red`, `--brand-sand`, `--brand-ink`. Rename to the `--rs-*` token set above. Map `btn-primary` to use `--rs-iron`, drop the `rounded-md` from buttons (use 0px radius), bump padding.
- `tailwind.config.ts` `theme.extend.colors` should expose all `--rs-*` tokens as Tailwind utilities (`bg-basalt`, `text-sand`, `border-varnish`, `text-iron`, etc.).
- Add Fraunces, Newsreader, JetBrains Mono to `<head>` via Google Fonts preconnect.
- Replace the current `Hero.tsx` centered/full-bleed pattern with the 38/62 asymmetric grid.
- Replace `Services.tsx` icon-card pattern with the typographic index.
- Add a `Correspondence.tsx` component for the client-letter pattern (replaces or supplements the existing About/testimonial flow).

## Reference: preview file

A working HTML preview of this system applied to realistic Rock Solid screens lives at:

`.context/design-system/preview.html`

Open it in a browser, toggle dark/light, and use it as the visual source of truth alongside this DESIGN.md.

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-25 | Initial design system created. | Created by `/design-consultation` to lock in 'Field Notes from a Stonemason' aesthetic for Rock Solid Contractors. Memorable thing: 'Built like the desert, not for the desert.' |
| 2026-04-25 | Display face: Fraunces 700 (chosen over Anton/Oswald). | First proposal used Anton (condensed industrial grotesque); user feedback flagged it as too cramped for the older Tucson/Phoenix demographic. Swapped to Fraunces variable for weight + readability. |
| 2026-04-25 | Body type minimum: 19px. | User feedback: customer demographic skews older with bad eyes. Footer 16px → 19px, body 17px → 19px. |
| 2026-04-25 | Headlines moved from UPPERCASE to sentence case. | Matched the readability bias. Mono labels and buttons remain uppercase; body / display is sentence case. |
| 2026-04-25 | Services as typographic index, not icon grid. | Risk 2 from the proposal — accepted. Signals craftsman's capabilities ledger. Easy A/B fallback if bounce rate spikes. |
| 2026-04-25 | Dark basalt as primary surface, caliche paper as accent. | Risk 1 — accepted. Differentiates from every other AZ contractor's warm-light-beige template. Caliche sections break the dark rhythm. |
| 2026-04-25 | Tagline changed from "Built like the desert, not for the desert" to "Stone, timber, time." | Original chiasmus collapsed under scrutiny (the desert isn't *built*; it's eroded), read as defensive, and was sonically thin (two "desert"s in nine words). New line is a three-noun materials-and-horizon stamp; works in both italic Fraunces (hero) and uppercase mono (header strip). |
