import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { POSTS, BASE_URL, postUrl, formatDate } from './posts';

export const metadata: Metadata = {
  title: 'Insights — Tailwind Growth',
  description:
    'Thinking on B2B growth, client acquisition, and what it actually takes to scale a professional services business in Australia.',
  alternates: { canonical: '/insights/' },
  robots: { index: true, follow: true },
};

const BOOK_URL = 'https://calendar.app.google/x2YHKEPb5wzDa4JY6';

const articlesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Tailwind Growth Insights',
  url: `${BASE_URL}/insights/`,
  publisher: { '@id': `${BASE_URL}/#org` },
  blogPost: POSTS.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    dateModified: p.updated ?? p.date,
    author: { '@id': `${BASE_URL}/#baidy` },
    url: postUrl(p.slug),
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
              <a href="/insights/abc-command/" className="insight-card" style={{ maxWidth: '68ch' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--indigo)', marginBottom: '0.75rem' }}>
                  Free Tool — Claude Code
                </p>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  Fix your copy in seconds. No editor required.
                </h2>
                <p style={{ lineHeight: 1.75, opacity: 0.85, marginBottom: '1rem' }}>
                  The <code style={{ background: 'var(--indigo-100)', color: 'var(--indigo)', borderRadius: '4px', padding: '0.1em 0.4em', fontSize: '0.9em' }}>/abc</code> command checks your writing for spelling and grammar in Australian English — annotated corrections, plain-English explanations, and a clean corrected version ready to paste. Free setup guide inside.
                </p>
                <span style={{ color: 'var(--indigo)', fontWeight: 600, fontSize: '0.9375rem' }}>
                  Get the command →
                </span>
              </a>

              <a href="/insights/notes-command/" className="insight-card" style={{ maxWidth: '68ch' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--indigo)', marginBottom: '0.75rem' }}>
                  Free Tool — Claude Code
                </p>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  Turn photos of your notes into markdown. Instantly.
                </h2>
                <p style={{ lineHeight: 1.75, opacity: 0.85, marginBottom: '1rem' }}>
                  The <code style={{ background: 'var(--indigo-100)', color: 'var(--indigo)', borderRadius: '4px', padding: '0.1em 0.4em', fontSize: '0.9em' }}>/notes</code> command is a custom Claude Code slash command that reads photos of your handwritten notes and transcribes them into clean, dated markdown files — in seconds. Free setup guide inside.
                </p>
                <span style={{ color: 'var(--indigo)', fontWeight: 600, fontSize: '0.9375rem' }}>
                  Get the setup guide →
                </span>
              </a>

              {POSTS.map((post) => (
                <a key={post.slug} href={`/insights/${post.slug}/`} className="insight-card" style={{ maxWidth: '68ch' }}>
                  <time
                    dateTime={post.date}
                    style={{ fontSize: '0.875rem', opacity: 0.5, display: 'block', marginBottom: '0.75rem' }}
                  >
                    {formatDate(post.date)}
                  </time>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.3 }}>
                    {post.title}
                  </h2>
                  <p style={{ lineHeight: 1.75, opacity: 0.85, marginBottom: '1rem' }}>{post.description}</p>
                  <span style={{ color: 'var(--indigo)', fontWeight: 600, fontSize: '0.9375rem' }}>
                    Read the article →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
