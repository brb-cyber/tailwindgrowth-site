# How to Update the Tailwind Growth Website

**Live URL:** https://tailwindgrowth.ai  
**GitHub repo:** https://github.com/brb-cyber/tailwindgrowth-site  
**Local project folder:** `C:\Users\blaff\OneDrive\Documents\Tailwind\Tailwind-Website\tailwindgrowth-site`

---

## How updates work

Every time you push a change to GitHub, the site automatically rebuilds and deploys within ~2 minutes. You never need to manually upload anything.

---

## Making a content change

### Step 1 — Edit the right file

All website content lives in:
```
src/app/components/
```

| File | What it controls |
|------|-----------------|
| `Nav.tsx` | Navigation bar (logo, links, Book a call button) |
| `Hero.tsx` | Hero section (headline, subheading, buttons, trust row) |
| `TheSystem.tsx` | "Harness your tailwind" section (two feature cards) |
| `Services.tsx` | "Work less. Win more." section (three service cards) |
| `Steps.tsx` | "It's as easy as." section (three steps) |
| `AboutFounder.tsx` | Founder story section |
| `FAQ.tsx` | FAQ accordion (questions and answers) |
| `CTABand.tsx` | "Let's work together." CTA section |
| `Footer.tsx` | Footer (links, social, copyright) |

Other important files:
| File | What it controls |
|------|-----------------|
| `src/app/layout.tsx` | Page title, meta description, Open Graph, JSON-LD structured data |
| `public/sitemap.xml` | Sitemap (update `lastmod` date when making significant changes) |
| `public/robots.txt` | Search engine crawl rules |
| `public/llms.txt` | AI answer engine description of Tailwind Growth |

### Step 2 — Push the change to GitHub

Open a terminal and run:

```powershell
cd "C:\Users\blaff\OneDrive\Documents\Tailwind\Tailwind-Website\tailwindgrowth-site"
git add .
git commit -m "brief description of what you changed"
git push
```

### Step 3 — Watch it deploy

Go to **https://github.com/brb-cyber/tailwindgrowth-site/actions** and watch the build. Green tick = live. Takes ~2 minutes.

---

## Common update examples

### Change the FAQ questions or answers
Edit `src/app/components/FAQ.tsx` — find the `FAQS` array at the top and update the `q` (question) and `a` (answer) fields.

**Important:** Also update the matching FAQ entries in `src/app/layout.tsx` (search for `faqSchema`) so the structured data stays in sync with what's on the page.

### Change the "Book a call" link
The booking URL is set in one place: `src/app/page.tsx`

```tsx
const BOOK_URL = 'https://calendar.app.google/x2YHKEPb5wzDa4JY6';
```

Update that URL and it will update every button on the site.

### Add or change an image
1. Copy the new image into `public/assets/images/`
2. Update the `src` path in the relevant component (e.g. `src="/assets/images/your-new-image.jpg"`)

### Update the meta description or page title
Edit `src/app/layout.tsx` — find the `metadata` object near the top.

### Re-enable the hidden sections
Two sections are commented out in `src/app/page.tsx` — ready to turn on when you have the content:
- `TrustBar` — client logo strip (re-enable when you have client logos)
- `CaseStudy` — testimonial section (re-enable when you have a testimonial)

To enable, uncomment the relevant line in `src/app/page.tsx` and add the component import at the top.

---

## Testing a change locally before pushing

```powershell
cd "C:\Users\blaff\OneDrive\Documents\Tailwind\Tailwind-Website\tailwindgrowth-site"
npm run build
npx serve out
```

Open `http://localhost:3000` to preview. When happy, push as per Step 2 above.

---

## Useful links

| Resource | URL |
|----------|-----|
| Live site | https://tailwindgrowth.ai |
| GitHub repo | https://github.com/brb-cyber/tailwindgrowth-site |
| GitHub Actions (deploy log) | https://github.com/brb-cyber/tailwindgrowth-site/actions |
| GitHub Pages settings | https://github.com/brb-cyber/tailwindgrowth-site/settings/pages |
| Squarespace DNS | https://account.squarespace.com/domains |
| Book a call link | https://calendar.app.google/x2YHKEPb5wzDa4JY6 |
| Sign in link | https://buddy.tailwindgrowth.ai |
