import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://tailwindgrowth.ai'),
  title: 'Tailwind Growth — AI-Native B2B Growth Partner | Australia',
  description:
    'Tailwind Growth is an AI-native B2B growth partner for professional services founders across Australia. The system and a fractional growth leader to win more clients — without hiring a sales team or paying an agency.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Tailwind Growth',
    title: 'Tailwind Growth — AI-Native B2B Growth Partner Australia',
    description:
      "People-first, AI-native B2B growth partner for Australian founders. The system and a fractional growth leader to win more clients — without hiring a sales team.",
    url: 'https://tailwindgrowth.ai/',
    images: [{ url: '/assets/images/team-office.jpg', width: 1200, height: 630, alt: 'Tailwind Growth — Grow on your terms' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tailwind Growth — AI-Native B2B Growth Partner Australia',
    description: 'People-first, AI-native B2B growth partner for Australian founders. Fractional growth leader + growth system.',
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
        'https://growthgossip.substack.com/',
        'https://events.humanitix.com/host/tailwind-growth',
      ],
      address: { '@type': 'PostalAddress', addressRegion: 'NSW', addressCountry: 'AU' },
    },
    {
      '@type': 'Event',
      '@id': 'https://tailwindgrowth.ai/#hif-2026',
      name: 'The Future of AI Services: Services Are the New Software',
      description:
        'A 45-minute provocation at Hunter Innovation Festival 2026, moderated by Baidy Barton, Founder of Tailwind Growth.',
      startDate: '2026-11-24',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: {
        '@type': 'Place',
        name: 'NEX, Newcastle Exhibition & Convention Centre',
        address: { '@type': 'PostalAddress', addressLocality: 'Newcastle', addressRegion: 'NSW', addressCountry: 'AU' },
      },
      organizer: { '@type': 'Organization', name: 'Hunter Innovation Festival', url: 'https://www.hunterif.com.au/' },
      performer: { '@id': 'https://tailwindgrowth.ai/#baidy' },
      url: 'https://www.hunterif.com.au/at-a-glance#speakers',
    },
    {
      '@type': 'Person',
      '@id': 'https://tailwindgrowth.ai/#baidy',
      name: 'Baidy Barton',
      givenName: 'Baidy',
      familyName: 'Barton',
      jobTitle: 'Founder & Fractional CRO | Growth Leader',
      worksFor: { '@id': 'https://tailwindgrowth.ai/#org' },
      description:
        'B2B revenue expert with 15+ years\' experience as a Commercialisation Director, Investor, Chief Revenue Officer of a B2B software company and Partner at a global professional services firm.',
      sameAs: [
        'https://www.linkedin.com/in/baidybarton/',
        'https://growthgossip.substack.com/',
      ],
      subjectOf: [
        { '@type': 'WebPage', name: 'Hunter Innovation Festival 2026 speakers', url: 'https://www.hunterif.com.au/at-a-glance#speakers' },
        { '@type': 'WebPage', name: 'Built to Grow Sprint, Lake Macquarie Business', url: 'https://www.lakemacbusiness.com.au/event/built-to-grow-sprint/' },
      ],
      knowsAbout: [
        'B2B growth',
        'client acquisition',
        'fractional growth leadership',
        'revenue strategy',
        'professional services growth',
        'AI-native business development',
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://tailwindgrowth.ai/#service-system',
      name: 'AI-Powered B2B Growth System',
      provider: { '@id': 'https://tailwindgrowth.ai/#org' },
      description:
        'A repeatable, AI-native growth system that automates the admin-heavy 70% of winning new work — prospecting, outreach, follow-up, and pipeline management for B2B professional services firms.',
      areaServed: 'AU',
      serviceType: 'B2B Growth System',
    },
    {
      '@type': 'Service',
      '@id': 'https://tailwindgrowth.ai/#service-partner',
      name: 'Fractional Growth Leader & B2B Growth Partner',
      provider: { '@id': 'https://tailwindgrowth.ai/#org' },
      description:
        'A seasoned fractional growth leader embedded in your business — strategy, accountability, and senior growth support without a full-time hire. Works directly with every client.',
      url: 'https://tailwindgrowth.ai/fractional-cro/',
      areaServed: 'AU',
      serviceType: 'Fractional Growth Leader',
    },
    {
      '@type': 'Service',
      '@id': 'https://tailwindgrowth.ai/#service-guidance',
      name: 'B2B Pipeline Management & Monthly Accountability',
      provider: { '@id': 'https://tailwindgrowth.ai/#org' },
      description:
        'Daily guidance on priorities plus monthly accountability sessions to review pipeline, work active opportunities, and stay on track. Outsourced business development for Australian professional services firms.',
      areaServed: 'AU',
      serviceType: 'Business Development Consulting',
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
      </head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-RPYDSCW6XE" strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-RPYDSCW6XE');`}
      </Script>
      <body>{children}</body>
    </html>
  );
}
