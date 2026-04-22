# Rock Solid Contractors — Growth Plan

Client: Joel, owner of Rock Solid Contractors (Tucson, AZ — serves Tucson, Phoenix, and between).
Starting state (2026-04-22): GBP live w/ 1 five-star review, <$200/mo ad budget, licensed/insured AZ ROC, grey-market outbound SMS + word of mouth, no CRM (evaluating DripJobs / GoHighLevel), site at azrocksolid.com with estimate form not yet delivering email end-to-end.

Organizing principle: **reviews > reputation > reach.** Can't buy our way in at this budget — earn compounding trust signals, then pour gas on them.

---

## Part 1 — Fastest launch blocker (this week)

Goal: prospect hits azrocksolid.com, submits the estimate form, Joel sees the lead on his phone within seconds.

### Step 1 — Domain email (~20 min, ~$7/mo)
- [ ] Buy Google Workspace for `azrocksolid.com`
- [ ] Create `contact@azrocksolid.com`
- [ ] Forward to Joel's personal Gmail so he checks one inbox

### Step 2 — Resend setup (~30 min, free tier)
- [ ] Create Resend account
- [ ] Verify `azrocksolid.com` as sending domain (SPF / DKIM / DMARC DNS records)
- [ ] Generate API key
- [ ] Set Vercel Production env vars:
  - `RESEND_API_KEY=<key>`
  - `ESTIMATE_TO_EMAIL=contact@azrocksolid.com`
  - `ESTIMATE_FROM_EMAIL=Rock Solid Estimates <estimates@azrocksolid.com>`

### Step 3 — Instant SMS alert to Joel (~10 min, free)
- [ ] Use carrier email-to-SMS gateway (Verizon `@vtext.com`, AT&T `@txt.att.net`, etc.)
- [ ] Add `ESTIMATE_ALSO_NOTIFY` env var
- [ ] CC that address in the Resend `to:` array in `src/app/api/estimate/route.ts` (~5 lines)
- [ ] Strip to a short "NEW LEAD — name / phone / service" text for SMS recipient

### Step 4 — Test 3 submissions before Joel sees it
- [ ] Joel actually receives the SMS
- [ ] Resend dashboard shows delivery (not spam)
- [ ] Reply-to hits the lead's email correctly

### Step 5 — Add Vercel Analytics (same sitting)
- [ ] Install `@vercel/analytics` + one-line import in root layout — need *some* traffic read before 30-day mark

---

## Part 2 — 30 / 60 / 90 day plan

### Days 0–30 — Foundation & Signal
**Goal: form works, leads are tracked, reviews start flowing.**

**Web / tech**
- [ ] Launch blocker above complete (estimate form live + SMS alert)
- [ ] Vercel Analytics installed
- [ ] Google Search Console verified on `azrocksolid.com`, sitemap submitted
- [ ] `/services/*` landing pages — one per service (outdoor living, kitchen, bath, flooring, whole-home). ~500 words each, real photos, local keywords ("Tucson kitchen remodel")
- [ ] Schema markup: `LocalBusiness` + `GeneralContractor` JSON-LD in root layout
- [ ] Phone number prominent in header, `tel:` linked, above the fold

**Google Business Profile (highest-ROI lever)**
- [ ] GBP audit — services list, service areas (Tucson + every town he'll drive to), keyword-rich description, hours, full photo set (before/after, team, logo, vehicle)
- [ ] Turn on GBP messaging so prospects can text from search results
- [ ] Post 1x/week to GBP (photo + 1 line)

**Reviews engine**
- [ ] Build review-request flow v1: Google Sheet of every completed / current job; when wrapped, Joel texts prewritten message with Google review short link (`g.page/r/...`). Blaine owns sheet + reminders.
- [ ] **Target: 5 new reviews in 30 days**

**Ops**
- [ ] CRM pick — lean DripJobs (contractor fit, built-in estimating + pipeline + review requests). GoHighLevel is over-featured for a solo GC. Google Sheet for 30 days is fine — don't let tooling block momentum.
- [ ] Document intake → estimate → proposal → job → invoice → review flow on one page (even rough)

**Outbound (legal track, starting now)**
- [ ] Kill grey-market SMS before it kills the domain
- [ ] Replace with: referral asks to every past client, 10 doors/week flyer drops in recent project neighborhoods, Joel personal presence on LinkedIn / Nextdoor

**30-day success criteria:** 5 GBP reviews • form delivers • 1 CRM in use • 5 local pages indexed.

---

### Days 31–60 — Conversion & Content
**Goal: turn the site into a lead-converting asset, not a brochure.**

**Content / SEO**
- [ ] Launch **2 case studies** from real jobs — before/after photos, scope, materials, budget range, timeline, "what client wanted vs. what we delivered" — at `/projects/<slug>`
- [ ] Add **Service Areas page** listing every Tucson-area community (Oro Valley, Marana, Vail, Sahuarita, Green Valley, Catalina Foothills, etc.) with short paragraph each
- [ ] FAQ section on homepage + per-service pages. Answer the 10 questions Joel gets every sales call (licensed, how long, financing, permits…)

**Conversion**
- [ ] A/B test CTA copy: "Request Estimate" vs. "Get a Free Quote" vs. "Schedule a Walkthrough" (PostHog free tier or ship-and-watch)
- [ ] Consider "financing available" badge (Hearth / GreenSky / Acorn) if Joel wants it — close mechanism for kitchen/bath
- [ ] Make gallery filterable by service type

**Reviews**
- [ ] **Target: 12 total reviews by day 60**
- [ ] Turn top 3 reviews into homepage testimonial cards with project photos

**Ops + light paid**
- [ ] Apply for **Google Local Services Ads (LSA) / Google Guaranteed** — needs license + insurance + background check, 2–3 wk approval. Start now even if not activated yet. Pay-per-lead, ideal for <$200 budget.
- [ ] Google Tag Manager + GA4 installed with conversion tracking

**60-day success criteria:** 12 reviews • 2 case studies live • LSA approved • baseline conversion rate known.

---

### Days 61–90 — Scale & Systematize
**Goal: predictable lead flow, documented ops, ready to add a second crew or take Phoenix seriously.**

**Acquisition**
- [ ] LSA live, spending $200/mo budget — track CPL vs. close rate
- [ ] If organic traffic growing: 4 more case studies (one per service)
- [ ] Nextdoor Business profile live
- [ ] Houzz Pro free profile live

**Site**
- [ ] `/estimate` as its own standalone page (shareable in SMS/ads, not just homepage section)
- [ ] Blog / Guides section — 3 posts on bottom-funnel keywords:
  - [ ] "How much does a backyard pergola cost in Tucson?"
  - [ ] "Kitchen remodel timeline in Arizona"
  - [ ] "What permits do I need to add a bathroom in Pima County?"

**Reviews & referrals**
- [ ] **Target: 25 total reviews by day 90**
- [ ] Launch referral kickback — $100 Amex gift card for any referred lead that becomes a signed job

**Ops / Joel's life**
- [ ] CRM decision locked in
- [ ] Estimate template, proposal template, contract template in CRM
- [ ] Automated review request on job-complete (DripJobs & GHL both do this)
- [ ] Automated SMS follow-up 24h after estimate if no response
- [ ] One-page dashboard for Joel: leads/month, close rate, avg job size, CAC

**90-day success criteria:** 25 reviews • page 1 for 3+ local keywords • 15+ leads/month • LSA break-even or better • Joel has a weekly operating rhythm.

---

## Pushback list (when Joel asks)

- **Facebook / Instagram ads** — wrong channel at this budget. Contractors convert on search intent. Skip until >$500/mo.
- **Fancy rebrand** — current site is fine. Design polish after reviews + content exist.
- **Thumbtack / HomeAdvisor** — shared leads, race to the bottom. LSA instead.
- **GoHighLevel from day one** — Swiss Army knife Joel will mis-wield. DripJobs or sheet-first.
