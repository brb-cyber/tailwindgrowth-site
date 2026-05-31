# SEO + AI-EO Optimisation Plan — tailwindgrowth.ai
_Agreed 2026-05-31_

## Key Decisions

- No long-form blog. LinkedIn/Instagram is the primary content channel.
- **Insights page:** Hidden from main nav. Linked in footer. Included in sitemap. Baidy pastes best LinkedIn posts here ~2x/month (10 min effort).
- **Content bridge reminder:** Phase 4 monitoring agent sends a standing reminder to update Insights.
- **areaServed:** Australia-wide.
- **Monitoring cadence:** Fortnightly to start, monthly once stable.

---

## Phase 1 — Technical Foundations

- [x] `sitemap.xml` — auto-generated via `src/app/sitemap.ts`
- [x] `robots.txt` — auto-generated via `src/app/robots.ts`, points to sitemap
- [x] `llms.txt` — AI crawler briefing file at `/public/llms.txt`
- [x] Web app manifest — `src/app/manifest.ts`
- [x] Insights page — `src/app/insights/page.tsx` with Blog + BlogPosting schema
- [x] Footer link to Insights — added to Company links in `Footer.tsx`
- [ ] Google Search Console — needs Baidy to complete (see setup steps below)
- [ ] Google Analytics 4 — needs Baidy to complete (see setup steps below)
- [ ] OG image — branded 1200×630px card (Canva, logo + tagline on dark bg)
- [ ] Image optimisation — convert JPGs to WebP (manual or tooling step)

## Phase 2 — On-Page SEO

- [ ] Keyword research — 5-10 target terms across branded / category / intent tiers
- [ ] H1/H2 optimisation for target keywords
- [ ] Image alt text audit
- [ ] Schema expansion — Service schema per pillar, PriceRange
- [ ] Founder schema — add LinkedIn URL, structured credentials

## Phase 3 — AI-EO

- [ ] Expand FAQ from 5 → 12-15 questions (questions ideal clients ask AI tools)
- [ ] `llms.txt` — done (Phase 1)
- [ ] Off-site citations — Flying Solo, Startup Daily, Smart Company, HARO/Sourcebottle

## Phase 4 — Automated Monitoring Agent

- [ ] Fortnightly scheduled Claude agent:
  1. Checks search performance + technical issues
  2. Checks AI answer presence for target questions
  3. Sends plain-English action list ranked by priority
  4. Includes standing reminder to update Insights with latest LinkedIn posts

---

## GSC + GA Setup Steps (for Baidy to complete)

### Google Search Console
1. Go to https://search.google.com/search-console
2. Sign in with your Google account
3. Click "Add property" → choose "URL prefix" → enter `https://tailwindgrowth.ai`
4. Choose the "HTML tag" verification method — copy the `<meta>` tag it gives you
5. Paste the tag into `layout.tsx` inside the `<head>` block
6. Push to GitHub — wait ~2 min for deploy — click "Verify"
7. Once verified: go to Sitemaps → submit `https://tailwindgrowth.ai/sitemap.xml`

### Google Analytics 4
1. Go to https://analytics.google.com
2. Create a new property → name it "Tailwind Growth" → set timezone Australia/Sydney
3. Create a Web data stream → enter `https://tailwindgrowth.ai`
4. Copy the Measurement ID (looks like `G-XXXXXXXXXX`)
5. Add the GA4 script to `layout.tsx` (Claude will do this step once you have the ID)
