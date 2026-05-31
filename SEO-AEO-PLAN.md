# SEO + AI-EO Optimisation Plan — tailwindgrowth.ai
_Agreed 2026-05-31 — Last updated 2026-05-31_

## Key Decisions

- No long-form blog. LinkedIn/Instagram is the primary content channel.
- **Insights page:** Hidden from main nav. Linked in footer. Included in sitemap. Baidy pastes best LinkedIn posts here ~2x/month (10 min effort).
- **Content bridge reminder:** Phase 4 monitoring agent sends a standing reminder to update Insights.
- **Terminology:** "Fractional growth leader" used in all visible copy. "Fractional sales leader" kept in llms.txt only as a search alias.
- **areaServed:** Australia-wide.
- **Monitoring cadence:** Fortnightly (1st and 15th of each month, 11am Sydney time).

---

## Phase 1 — Technical Foundations ✅ Complete

- [x] `sitemap.xml` — auto-generated via `src/app/sitemap.ts`
- [x] `robots.txt` — auto-generated via `src/app/robots.ts`, points to sitemap
- [x] `llms.txt` — AI crawler briefing file at `/public/llms.txt`, expanded with keyword aliases
- [x] Web app manifest — `src/app/manifest.ts`
- [x] Insights page — `src/app/insights/page.tsx` with Blog + BlogPosting schema, seeded with 2 posts
- [x] Footer link to Insights — added to Company links in `Footer.tsx`
- [x] Google Search Console — verified (auto-verified via Squarespace/Google link), sitemap submitted, indexing requested for both pages
- [x] Google Analytics 4 — live (Measurement ID: G-RPYDSCW6XE)
- [ ] OG image — branded 1200×630px card (Canva, logo + tagline on dark bg) — still to do
- [ ] Image optimisation — convert JPGs to WebP — still to do

## Phase 2 — On-Page SEO ✅ Complete

- [x] Keyword research — targets: tailwind growth, B2B growth partner Australia, AI-native B2B growth partner, fractional growth leader Australia, outsourced business development Australia, people-first AI-native growth, B2B client acquisition Australia
- [x] Title tag — updated to "Tailwind Growth — AI-Native B2B Growth Partner | Australia"
- [x] Meta + OG descriptions — updated with Australia, fractional growth leader, professional services
- [x] Image alt text — hero image updated with location + category keywords
- [x] Schema expansion — 3 Service schemas added (AI growth system, fractional growth leader, pipeline management)
- [x] Founder schema — enriched with knowsAbout list and "Fractional Growth Leader" job title

## Phase 3 — AI-EO ✅ Complete

- [x] FAQ expanded from 5 → 15 questions targeting AI tool queries (fractional growth leader, grow without hiring, AI-native definition, outsourced BDM comparison, lock-in, results timeline, cost, industries, technical requirements)
- [x] FAQPage schema in layout.tsx synced to match all 15 questions
- [x] `llms.txt` — expanded with competitor comparison, keyword aliases, and core AI questions
- [ ] Off-site citations — Flying Solo, Startup Daily, Smart Company, HARO/Sourcebottle — ongoing

## Phase 4 — Automated Monitoring Agent ✅ Complete

- [x] Fortnightly scheduled Claude agent created (Routine ID: trig_01Gob3qaupbfKmH3ttDihn6J)
  - Runs: 1st and 15th of each month at 11am Sydney time
  - First run: 1 June 2026
  - Gmail connected — sends report to baidy@tailwindgrowth.ai
  - Subject: "Tailwind Growth — Fortnightly SEO & AI-EO Report"
  - Checks: technical health, search presence, AI answer presence
  - Includes: traffic light status, prioritised action list, Insights page reminder
  - Manage at: https://claude.ai/code/routines/trig_01Gob3qaupbfKmH3ttDihn6J

---

## Remaining / Ongoing Tasks

| Task | Priority | Notes |
|---|---|---|
| OG image | Medium | Create 1200×630px branded card in Canva (logo + tagline on dark background) |
| Image optimisation | Low | Convert JPGs in `/public/assets/images/` to WebP format |
| Off-site citations | High | Get listed on Flying Solo, Startup Daily, Smart Company; respond to HARO/Sourcebottle |
| LinkedIn launch post | High | Wednesday — link to tailwindgrowth.ai to signal Google + drive first traffic |
| Insights page updates | Ongoing | Paste 2–3 LinkedIn posts fortnightly (agent will remind you) |
| Sitemap status | Check | Confirm GSC sitemap status changes from "Couldn't fetch" to "Success" |

---

## Keyword Targets

| Tier | Keywords |
|---|---|
| Branded | tailwind growth, tailwindgrowth.ai |
| Category | B2B growth partner Australia, AI-native B2B growth partner, people-first AI-native growth, fractional growth leader Australia |
| Intent | outsourced business development Australia, B2B client acquisition Australia, grow professional services business Australia, alternative to marketing agency B2B |
| Alias (llms.txt only) | fractional sales leader Australia, fractional CRO Australia |
