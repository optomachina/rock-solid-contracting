# Rock Solid Contractors — Sequenced Execution Queue

Client: Joel, owner of Rock Solid Contractors (Tucson, AZ — serves Tucson, Phoenix, and between).
Last updated: 2026-04-25 (rewritten from 30/60/90 plan into atomic, sequential queue).

## How to use this file

Grab the **next unchecked task at the top of the active section**. Each task is atomic — one Claude Code session, one logical unit of work. If a task is blocked (waiting on Joel, waiting on DNS propagation, waiting on Google approval), skip past `## Blocked` to the next unblocked one and come back later.

**Status sections (in order):**
1. `## Now` — work the next item from this list. Ship it. Move it down.
2. `## Next` — queued, will move up as `Now` clears.
3. `## Later` — known work, not yet sequenced.
4. `## Blocked / Needs Joel or external` — anything we can't move ourselves.

**Doc discipline (borrowed from Red Door Paint Pros repo):** when a task surfaces a new fact, append it under `## Confirmed Facts`. When it surfaces a guess, put it under `## Assumptions`. When it surfaces a question only Joel can answer, put it under `## Open Questions`.

**Cross-business reuse:** Joel also owns Red Door Paint Pros (full GHL ops hub at `~/Documents/GitHub/Red Door Paint Pros`). Automation logic (review request, appointment reminders, no-show recovery, post-job referral) is documented there as Workflow 02/03/04 — port the *logic*, not the GHL specifics, into whatever CRM Joel picks for Rock Solid.

---

## Confirmed Facts (as of 2026-04-25)

- Site live at azrocksolid.com.
- Estimate form posts to `src/app/api/estimate/route.ts`, sends via Resend if `RESEND_API_KEY` set; falls back to log-only.
- Form `to:` is already a `string[]` — adding an SMS gateway recipient is a single-line change at line 107.
- Joel intends to drop PaintScout long-term.
- Joel will choose his Rock Solid CRM (likely DripJobs).
- Joel has GHL ops experience from Red Door (location ID `4UVft3V40G6E7UQgeGpl`).
- Recent commits: Resend wired, phone swapped, gstack routing rules added, growth plan written.
- Outbound SMS posture: kill grey-market sends; new posture is **email + call first**, automated SMS only after explicit consent (mirrors Red Door's stated position).

## Assumptions

- $200/mo ad budget holds for 90 days.
- Joel can text a Google review link from his phone within 24h of job completion.
- AZ ROC license + insurance qualify for Google Local Services Ads / Google Guaranteed.
- Rock Solid will benefit from the same automation patterns as Red Door (review request, no-show recovery, post-job referral) — different CRM, same logic.

## Open Questions for Joel

- Which CRM (DripJobs, GHL, sheet-first)? Locks the automation porting target.
- Carrier for personal phone (Verizon = `@vtext.com`, AT&T = `@txt.att.net`, T-Mobile = `@tmomail.net`)? Needed for SMS-alert env var.
- Financing partner preference (Hearth / GreenSky / Acorn)?
- Comfortable with `$100 Amex gift card` referral incentive amount?

---

## Now

### 1. Add Vercel Analytics
- File: `src/app/layout.tsx`
- Install `@vercel/analytics`, add `<Analytics />` to root layout, commit.
- Verify in Vercel dashboard within 10 min of next prod deploy.
- Why: need traffic signal before any 30-day decision; zero infra cost.

### 2. Add Google Analytics 4 + Search Console
- Create GA4 property for `azrocksolid.com`, drop measurement ID into `src/app/layout.tsx` (Next.js `Script` component, `afterInteractive`).
- Verify Search Console via DNS TXT record; submit sitemap (Next.js auto-generates at `/sitemap.xml` once route is added — see task 4).
- Add `NEXT_PUBLIC_GA_ID` env var.
- Why: GA4 is the canonical conversion-tracking spine for the LSA + content work later.

### 3. Wire SMS-alert recipient into estimate route
- File: `src/app/api/estimate/route.ts` (line 107).
- Read `process.env.ESTIMATE_ALSO_NOTIFY` (carrier email-to-SMS address). If set, push into the `to:` array.
- Build a stripped second body for SMS (subject becomes `NEW LEAD — {name} / {phone} / {service}`); for now just send the same email — the SMS gateway truncates.
- Add `ESTIMATE_ALSO_NOTIFY` to Vercel Production env vars (Joel will provide carrier).
- Test: 3 form submissions, confirm Joel's phone vibrates within 60s.
- Why: launch-blocker step 3 from the original plan; no leads = no business.

### 4. Add `app/sitemap.ts` and `app/robots.ts`
- Create `src/app/sitemap.ts` returning `/`, `/services/*`, `/projects/*` (placeholder — pages don't exist yet, return only existing routes).
- Create `src/app/robots.ts` allowing all, pointing at `/sitemap.xml`.
- Verify both render in browser at `azrocksolid.com/sitemap.xml` and `/robots.txt`.
- Why: prerequisite for Search Console submission in task 2.

### 5. Add `LocalBusiness` + `GeneralContractor` JSON-LD to root layout
- File: `src/app/layout.tsx`.
- Single `<script type="application/ld+json">` block with: business name, address (Joel's actual address or service-area markup if no storefront), phone, hours, service area (Tucson + every named community), priceRange, sameAs (link to GBP).
- Validate via Google's Rich Results Test before commit.
- Why: schema is one of the cheapest SEO wins; Google needs explicit signal for local intent.

### 6. Pin phone number in header (above the fold, `tel:` linked)
- Inspect current `src/app/page.tsx` and `src/app/layout.tsx` for header structure.
- Add prominent click-to-call button (Joel's number) in a fixed or sticky header. Tailwind classes only.
- Mobile-first: thumb-reachable, contrast checked.
- Why: contractors get most leads from mobile search → call. Reducing friction here is higher ROI than any landing-page work.

---

## Next

### 7. Build first `/services/*` page (highest-revenue service)
- Confirm with Joel which service is highest-margin or highest-volume; default to **outdoor living** (Tucson + pergola/patio market).
- Route: `src/app/services/outdoor-living/page.tsx`.
- ~500 words: problem statement, what's included, materials, typical timeline, 3-5 real photos (placeholder if Joel hasn't sent any), FAQ section, CTA to estimate form.
- Local keywords: "Tucson outdoor living contractor", "Phoenix pergola installation".
- Update `app/sitemap.ts` to include this route.

### 8. Repeat task 7 for the other 4 services
- One per session. Routes: `/services/kitchen-remodel`, `/services/bathroom-remodel`, `/services/flooring`, `/services/whole-home-remodel`.
- Each is a separate atomic task. Don't batch — Claude Code on iOS is fine, but a single 5-page change is harder to review than 5 separate one-page sessions.
- Same template as task 7. Vary keywords by service.

### 9. Write Google Business Profile audit checklist
- File: `.context/gbp-audit.md` (gitignored, internal working doc).
- Checklist: name, primary category (`General Contractor`), additional categories (`Bathroom Remodeler`, `Kitchen Remodeler`, etc.), services list, service-area towns, hours, description (250-750 chars, keyword-rich), photo categories (logo, cover, interior, team, vehicle, before/after × 5), GBP messaging toggle ON.
- Send to Joel as a single-message punch list he can knock down on his phone.
- Why: GBP is the highest-leverage non-paid channel for local services. Joel does this himself.

### 10. Build review-request playbook (CRM-agnostic, ports to whatever Joel picks)
- File: `.context/review-request-playbook.md`.
- Borrow logic from Red Door's `automations/WORKFLOW_04_POST_JOB_REVIEW_AND_REFERRAL.md`.
- Steps: trigger = job-complete tag, 4h delay, send "thank you + Google review short link" SMS or email, branch on response (positive → referral ask, negative → Joel-only internal alert).
- Include the actual SMS copy: "Hey {first}, Joel here from Rock Solid. Really appreciated working with you on the {service}. If you have 30 seconds, would mean a lot if you'd leave us a quick Google review: {short_link}".
- Includes Google review short link generation steps (g.page/r/...).

### 11. Implement review-request playbook in Joel's chosen CRM
- Blocked on: Joel's CRM choice (see Open Questions).
- When unblocked: port playbook from task 10 into chosen tool, send 1 test to a friendly past customer, then enable for all completed jobs.
- Set `Target: 5 reviews in first 30 days`.

### 12. Build new-quote 7-day follow-up playbook
- File: `.context/new-quote-followup-playbook.md`.
- Borrow logic from Red Door's `automations/WORKFLOW_02_NEW_QUOTE_7_DAY.md`.
- Days 0/2/5/7: progressively warmer follow-ups via email + call (no SMS yet — see consent posture). Stop on reply or signed proposal.
- Same drill as task 10–11: write playbook, then implement once CRM is picked.

### 13. Apply for Google Local Services Ads / Google Guaranteed
- Joel-driven task. License + insurance + background check + business verification. 2-3 week approval window.
- Move to `Now` after the first 5 reviews land (don't burn budget without social proof).
- Why: pay-per-lead, not pay-per-click. Right shape for $200/mo and high-intent local search.

---

## Later

### 14. Build Service Areas page
- Route: `src/app/service-areas/page.tsx` listing Tucson, Oro Valley, Marana, Vail, Sahuarita, Green Valley, Catalina Foothills, Casa Grande, Phoenix metro, etc.
- Short paragraph per area; each links to relevant `/services/*` page.

### 15. Two case studies
- Routes: `src/app/projects/[slug]/page.tsx` (dynamic route).
- Format: hero photo, before/after gallery, scope, materials, budget range, timeline, "what client wanted vs. what we delivered", testimonial pull-quote.
- Source the photos from Joel; without them, this is dead.

### 16. Homepage testimonial cards
- Pull top 3 reviews from GBP.
- Render as cards on homepage. Link each to GBP.

### 17. CTA copy A/B test
- PostHog free tier OR ship-and-watch (just rotate the copy weekly via env var).
- Variants: "Request Estimate", "Get a Free Quote", "Schedule a Walkthrough".
- Pick winner after 50+ submissions.

### 18. Standalone `/estimate` page
- Route: `src/app/estimate/page.tsx`.
- Same form component as homepage section, but on its own URL — shareable in SMS / GBP messages / ads.

### 19. Three guide blog posts (bottom-funnel keywords)
- Routes: `src/app/guides/[slug]/page.tsx`.
- Slugs: `pergola-cost-tucson`, `kitchen-remodel-timeline-arizona`, `bathroom-permits-pima-county`.
- 800-1500 words each. Bottom-funnel = high commercial intent.

### 20. Filterable gallery
- Component change: add filter chips (Outdoor / Kitchen / Bath / Flooring / Whole-Home).
- Source photos from Joel + completed projects.

### 21. Financing badge
- Wait for Joel to pick partner (Hearth / GreenSky / Acorn). Add badge + linked landing page section.

### 22. Houzz Pro free profile
- Joel-driven. Mostly a content-fill exercise.

### 23. Nextdoor Business profile
- Joel-driven. Verify, claim, post weekly.

### 24. Referral kickback program
- $100 Amex gift card per referred lead that becomes a signed job.
- Track in chosen CRM (custom field: `referred_by_contact_id`).

### 25. Operator dashboard for Joel
- Single-page dashboard: leads/month, close rate, avg job size, CAC.
- Ship in chosen CRM if it supports it; otherwise Google Sheet pulled from CRM via Zapier.

### 26. Automated 24h estimate follow-up SMS
- Only after explicit consent posture is locked (TCPA for AZ + double opt-in language).
- Trigger: estimate sent, no response 24h.
- Borrow logic from Red Door's draft estimate-follow-up workflow.

---

## Blocked / Needs Joel or external

- **CRM choice** — blocks tasks 11, 24, 25, 26.
- **Carrier provider for SMS gateway** — blocks task 3 verification.
- **Joel's address** for `LocalBusiness` schema (or service-area-only posture) — blocks task 5.
- **Google LSA approval** (2-3 wk) — blocks task 13 going live.
- **Google Workspace + `contact@azrocksolid.com`** — Joel-driven, ~20 min, ~$7/mo (from original plan, status unknown).
- **Resend domain verification** (SPF/DKIM/DMARC DNS records on `azrocksolid.com`) — likely already done since the form is wired, but confirm in Resend dashboard before assuming.
- **Photos for `/services/*` pages and case studies** — blocks tasks 7, 8, 15, 20.
- **DripJobs vs GHL vs sheet decision** — blocks all CRM-side work.

---

## Pushback list (ammunition when Joel asks)

- **Facebook / Instagram ads** — wrong channel at this budget. Contractors convert on search intent. Skip until >$500/mo ad spend.
- **Fancy rebrand** — current site is fine. Polish after reviews + content exist.
- **Thumbtack / HomeAdvisor** — shared leads, race to the bottom. LSA instead.
- **GoHighLevel from day one for Rock Solid** — Joel already learned GHL on Red Door. The tradeoff is real: GHL = cross-business reuse but heavy. DripJobs = lighter but new tool. Joel picks; the playbooks (tasks 10, 12, 26) port to either.
- **AI chat widget on the homepage** — premature. Real humans answer faster than the AI you'd configure right now. Revisit at Phase 4 (Future State Roadmap-style).

---

## Reference: Red Door cross-pollination

When you need patterns or copy, read these files in `~/Documents/GitHub/Red Door Paint Pros/`:

- `automations/WORKFLOW_02_NEW_QUOTE_7_DAY.md` — 7-day estimate follow-up logic.
- `automations/WORKFLOW_03_APPOINTMENT_AND_NO_SHOW.md` — appointment reminder + no-show recovery.
- `automations/WORKFLOW_04_POST_JOB_REVIEW_AND_REFERRAL.md` — review request + referral ask logic.
- `automations/BEST_PRACTICES_GHL.md` — GHL safety patterns (loop-breakers, draft-first, pilot cohorts).
- `docs/OPERATING_CONTEXT.md` — example of the `Confirmed Facts / Assumptions / Open Questions` doc style we're using here.
- `howto.md` — Active Solutions account map; ignore unless Joel asks about that account specifically.

Don't copy-paste GHL specifics — the *logic* transfers, the *implementation* depends on whatever CRM Joel picks for Rock Solid.

---

## Targets (recap)

- **Day 30:** form delivers SMS-and-email, 5 GBP reviews, 5 indexed `/services` pages, GA4 + Vercel Analytics + Search Console live, schema validated.
- **Day 60:** 12 reviews, 2 case studies live, LSA approved (not yet spending), baseline conversion rate known.
- **Day 90:** 25 reviews, page 1 for 3+ local keywords, 15+ leads/month, LSA at break-even or better, Joel has a weekly operating rhythm.
