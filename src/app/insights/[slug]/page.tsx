import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { POSTS, BASE_URL, postUrl, formatDate } from '../posts';

const BOOK_URL = 'https://calendar.app.google/x2YHKEPb5wzDa4JY6';

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Tailwind Growth`,
    description: post.description,
    alternates: { canonical: `/insights/${post.slug}/` },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'article',
      siteName: 'Tailwind Growth',
      title: post.title,
      description: post.description,
      url: postUrl(post.slug),
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: ['Baidy Barton'],
      images: [{ url: '/assets/images/team-office.jpg', width: 1200, height: 630, alt: 'Tailwind Growth' }],
    },
  };
}

export default function InsightArticle({ params }: { params: { slug: string } }) {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    url: postUrl(post.slug),
    mainEntityOfPage: postUrl(post.slug),
    image: `${BASE_URL}/assets/images/team-office.jpg`,
    author: { '@id': `${BASE_URL}/#baidy` },
    publisher: { '@id': `${BASE_URL}/#org` },
    isPartOf: { '@type': 'Blog', name: 'Tailwind Growth Insights', url: `${BASE_URL}/insights/` },
    articleBody: [post.answer, ...post.sections.flatMap((s) => [s.heading, ...s.paragraphs])].join(' '),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const bodyText = { marginBottom: '1rem', lineHeight: 1.75, opacity: 0.85 } as const;

  return (
    <>
      <Nav bookUrl={BOOK_URL} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        <section className="section" style={{ paddingTop: '8rem' }}>
          <div className="container">
            <article style={{ maxWidth: '68ch' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                <a href="/insights/" style={{ color: 'var(--indigo)', fontWeight: 600, fontSize: '0.9375rem', textDecoration: 'none' }}>
                  ← All insights
                </a>
              </p>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '1rem' }}>
                {post.title}
              </h1>
              <p style={{ fontSize: '0.875rem', opacity: 0.6, marginBottom: '2rem' }}>
                By <a href="/#about" style={{ color: 'inherit' }}>Baidy Barton</a>, Founder of Tailwind Growth ·{' '}
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </p>

              <div
                style={{
                  background: 'var(--indigo-050)',
                  borderLeft: '4px solid var(--indigo)',
                  borderRadius: '8px',
                  padding: '1.25rem 1.5rem',
                  marginBottom: '2.5rem',
                }}
              >
                <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--indigo)', marginBottom: '0.5rem' }}>
                  The short answer
                </p>
                <p style={{ lineHeight: 1.75, margin: 0 }}>{post.answer}</p>
              </div>

              {post.sections.map((section) => (
                <section key={section.heading} style={{ marginBottom: '2rem' }}>
                  <h2 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.3 }}>
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((para, i) => (
                    <p key={i} style={bodyText}>
                      {para}
                    </p>
                  ))}
                </section>
              ))}

              <section style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.3 }}>
                  Frequently asked questions
                </h2>
                {post.faqs.map((f) => (
                  <div key={f.q} style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.4 }}>{f.q}</h3>
                    <p style={{ ...bodyText, marginBottom: 0 }}>{f.a}</p>
                  </div>
                ))}
              </section>

              <a href={post.cta.href} className="insight-card">
                <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--indigo)', marginBottom: '0.75rem' }}>
                  {post.cta.label}
                </p>
                <p style={{ lineHeight: 1.75, opacity: 0.85, marginBottom: '1rem' }}>{post.cta.text}</p>
                <span style={{ color: 'var(--indigo)', fontWeight: 600, fontSize: '0.9375rem' }}>Find out more →</span>
              </a>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
