import { MetadataRoute } from 'next';
import { POSTS } from './insights/posts';

const BASE = 'https://tailwindgrowth.ai';

// No lastModified on fixed pages: a date that changes on every build tells
// search engines nothing. Dated content (Insights articles) carries its own.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/fractional-cro/`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/growth-sprint/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/insights/`, changeFrequency: 'weekly', priority: 0.7 },
    // abc-command and notes-command are deliberately left out: their content is
    // email-gated, so Google sees near-identical pages and flags them as
    // "Duplicate without user-selected canonical". They stay live and linked
    // from /insights/; they just aren't submitted for indexing.
    ...POSTS.map((p) => ({
      url: `${BASE}/insights/${p.slug}/`,
      lastModified: p.updated ?? p.date,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
}
