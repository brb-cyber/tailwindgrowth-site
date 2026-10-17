import postsData from './posts.json';

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  answer: string;
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { q: string; a: string }[];
  cta: { href: string; label: string; text: string };
};

// Newest first. Content lives in posts.json; add new articles to the top.
export const POSTS: Post[] = postsData;

export const BASE_URL = 'https://tailwindgrowth.ai';

export function postUrl(slug: string) {
  return `${BASE_URL}/insights/${slug}/`;
}

export function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
