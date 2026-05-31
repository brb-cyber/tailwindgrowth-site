import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Insights — Tailwind Growth',
  description:
    'Thinking on B2B growth, client acquisition, and what it actually takes to scale a professional services business in Australia.',
  alternates: { canonical: '/insights/' },
  robots: { index: true, follow: true },
};

const BOOK_URL = 'https://calendar.app.google/x2YHKEPb5wzDa4JY6';

const POSTS: { title: string; date: string; body: string[] }[] = [
  {
    title: 'Why most B2B founders hit a growth ceiling — and what to do about it',
    date: '2026-05-28',
    body: [
      "Most B2B services founders I talk to have the same story. They've built something good. Their clients love them. Work comes in through referrals and the occasional introduction. And then it stops — not because the business is bad, but because referrals are random.",
      "The ceiling isn't a quality problem. It's a system problem. When winning new work depends entirely on who happens to think of you at the right moment, growth is out of your hands. You're not running a pipeline — you're waiting for luck.",
      "The fix isn't hiring a salesperson (expensive, slow to ramp, and they often don't understand professional services). It isn't a marketing agency (great at impressions, rarely focused on actual client acquisition). And it definitely isn't more networking events.",
      "The fix is a repeatable system: who you're targeting, how you're reaching them, and what happens to every opportunity once it exists. Built into how you already work, not bolted on top of it. That's what Tailwind Growth is.",
    ],
  },
  {
    title: "What 'AI-native' actually means for a B2B services business",
    date: '2026-05-20',
    body: [
      "Every agency and consultant is calling themselves AI-native right now. Most of them mean they've added ChatGPT to their workflow. That's not the same thing.",
      "For a growth system, AI-native means the system is designed around AI from the ground up — not retrofitted. It means using AI to handle the research, the personalisation, the follow-up sequencing, and the pipeline tracking that used to require either a full sales team or hours of manual work from the founder.",
      "The result is that a solo founder with the right system can run a pipeline that used to require three or four people. Not because AI replaces the human connection — it doesn't — but because AI handles everything that isn't human connection.",
      "At Tailwind Growth, AI handles the 70% that was always admin. You handle the 30% that requires you — the relationship, the expertise, the judgment. That's what we mean by AI-native.",
    ],
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

const articlesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Tailwind Growth Insights',
  url: 'https://tailwindgrowth.ai/insights/',
  publisher: {
    '@type': 'Organization',
    name: 'Tailwind Growth',
    url: 'https://tailwindgrowth.ai/',
  },
  blogPost: POSTS.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    datePublished: p.date,
    author: {
      '@type': 'Person',
      name: 'Baidy',
      url: 'https://tailwindgrowth.ai/#baidy',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tailwind Growth',
    },
    url: `https://tailwindgrowth.ai/insights/`,
    articleBody: p.body.join(' '),
  })),
};

export default function Insights() {
  return (
    <>
      <Nav bookUrl={BOOK_URL} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articlesSchema) }}
      />
      <main>
        <section className="section" style={{ paddingTop: '8rem' }}>
          <div className="container">
            <div className="section-head">
              <h1 className="disp">Thinking out loud.</h1>
              <p style={{ maxWidth: '52ch', marginTop: '1rem', fontSize: '1.125rem', lineHeight: 1.7 }}>
                On B2B growth, client acquisition, and what it actually takes to scale a professional
                services business — without burning out or selling your soul to an agency.
              </p>
            </div>
            <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              {POSTS.map((post, i) => (
                <article key={i} style={{ maxWidth: '68ch' }}>
                  <time
                    dateTime={post.date}
                    style={{ fontSize: '0.875rem', opacity: 0.5, display: 'block', marginBottom: '0.75rem' }}
                  >
                    {formatDate(post.date)}
                  </time>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.3 }}>
                    {post.title}
                  </h2>
                  {post.body.map((para, j) => (
                    <p key={j} style={{ marginBottom: '1rem', lineHeight: 1.75, opacity: 0.85 }}>
                      {para}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
