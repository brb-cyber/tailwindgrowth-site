import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://tailwindgrowth.ai'),
  title: 'Tailwind Growth — Grow on your terms | B2B growth partner',
  description:
    'Tailwind Growth is a people-first, AI-native B2B growth partner. We give ambitious founders the system and a seasoned growth leader to grow on your terms — so you focus on the work, and we handle the rest.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Tailwind Growth',
    title: 'Tailwind Growth — Grow on your terms',
    description:
      "A people-first, AI-native B2B growth partner. The system you've always needed, paired with a seasoned growth leader on your team.",
    url: 'https://tailwindgrowth.ai/',
    images: [{ url: '/assets/images/team-office.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tailwind Growth — Grow on your terms',
    description: 'A people-first, AI-native B2B growth partner for ambitious founders.',
    images: ['/assets/images/team-office.jpg'],
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': 'https://tailwindgrowth.ai/#org',
      name: 'Tailwind Growth',
      url: 'https://tailwindgrowth.ai/',
      slogan: 'Grow on your terms',
      description:
        'A people-first, AI-native B2B growth partner that gives ambitious founders the system and expertise to grow on their terms.',
      email: 'baidy@tailwindgrowth.ai',
      areaServed: 'AU',
      founder: { '@id': 'https://tailwindgrowth.ai/#baidy' },
      sameAs: [
        'https://www.linkedin.com/company/tailwind-growth/',
        'https://www.instagram.com/tailwind_growth/',
      ],
      address: { '@type': 'PostalAddress', addressRegion: 'NSW', addressCountry: 'AU' },
    },
    {
      '@type': 'Person',
      '@id': 'https://tailwindgrowth.ai/#baidy',
      name: 'Baidy',
      jobTitle: 'Founder',
      worksFor: { '@id': 'https://tailwindgrowth.ai/#org' },
      description:
        'B2B revenue expert with 15+ years\' experience as a Commercialisation Director, Investor, Chief Revenue Officer of a B2B software company and Partner at a global professional services firm.',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Tailwind Growth do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tailwind Growth is a people-first, AI-native B2B growth partner. We give founders an AI-powered growth system plus a seasoned growth leader embedded in their team — handling the admin-heavy 70% of winning new work, so they can focus on high-value connection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is Tailwind Growth for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Founders and owners of B2B services businesses (lawyers, accountants, engineers, designers, HR/IR practitioners, consultants, and similar) who\'ve grown through referrals but hit a ceiling, and want to grow without hiring a sales team or paying for an expensive agency.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is it different from a marketing agency or hiring a salesperson?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You get both the system and a senior partner in one — for a fraction of the alternatives. Tailwind typically costs around 10% of a Chief Revenue Officer, 20% of a business development manager, and 33% of a traditional agency, without the transactional feel or the lock-in. It\'s built around how you already work, month to month.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Tailwind Growth based?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We\'re based in Australia (specifically, Newcastle and Sydney) and work with ambitious B2B founders across the country.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Book a growth call. We\'ll map a clear next step together — no pitch, no pressure.',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/logos/icon-fullcolour.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
