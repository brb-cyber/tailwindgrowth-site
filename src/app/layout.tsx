import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://tailwindgrowth.ai'),
  title: 'Tailwind Growth — AI-Native B2B Growth Partner | Australia',
  description:
    'Tailwind Growth is an AI-native B2B growth partner for professional services founders across Australia. The system and a fractional sales leader to win more clients — without hiring a sales team or paying an agency.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Tailwind Growth',
    title: 'Tailwind Growth — AI-Native B2B Growth Partner Australia',
    description:
      "People-first, AI-native B2B growth partner for Australian founders. The system and a fractional sales leader to win more clients — without hiring a sales team.",
    url: 'https://tailwindgrowth.ai/',
    images: [{ url: '/assets/images/team-office.jpg', width: 1200, height: 630, alt: 'Tailwind Growth — Grow on your terms' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tailwind Growth — AI-Native B2B Growth Partner Australia',
    description: 'People-first, AI-native B2B growth partner for Australian founders. Fractional sales leader + growth system.',
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
      jobTitle: 'Founder & Fractional Sales Leader',
      worksFor: { '@id': 'https://tailwindgrowth.ai/#org' },
      description:
        'B2B revenue expert with 15+ years\' experience as a Commercialisation Director, Investor, Chief Revenue Officer of a B2B software company and Partner at a global professional services firm.',
      sameAs: ['https://www.linkedin.com/company/tailwind-growth/'],
      knowsAbout: [
        'B2B growth',
        'client acquisition',
        'fractional sales leadership',
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
      name: 'Fractional Sales Leader & Growth Partner',
      provider: { '@id': 'https://tailwindgrowth.ai/#org' },
      description:
        'A seasoned fractional sales leader embedded in your business — strategy, accountability, and senior growth support without a full-time hire. Works directly with every client.',
      areaServed: 'AU',
      serviceType: 'Fractional Chief Revenue Officer',
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
        text: "Founders and owners of B2B professional services businesses — lawyers, accountants, engineers, designers, HR/IR practitioners, management consultants, and similar — who've grown through referrals but hit a ceiling, and want to grow without hiring a sales team or paying for an expensive agency.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I grow my professional services business without hiring more staff?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most founders try to grow by hiring — a salesperson, a BDM, or an agency. Each is expensive, slow to ramp, and often disconnected from how professional services actually wins work. Tailwind Growth takes a different approach: an AI-powered system handles the admin-heavy 70% of winning new work — prospecting, outreach, follow-up — while Baidy works directly with you as a fractional sales leader. Consistent pipeline, no new headcount.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is a fractional sales leader?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A fractional sales leader is a senior revenue professional who works with your business on a part-time or embedded basis — giving you the expertise of a Chief Revenue Officer or Head of Sales without the full-time cost or commitment. At Tailwind Growth, Baidy serves as your fractional sales leader: setting strategy, driving accountability, and working directly in your pipeline every month.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is Tailwind Growth a marketing agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Traditional marketing agencies focus on brand awareness, content, and ad campaigns — activity that's hard to connect directly to new clients. Tailwind Growth focuses entirely on client acquisition: building your pipeline, managing outreach, and converting opportunities into revenue. You don't pay for impressions. You pay for a system that wins work.",
      },
    },
    {
      '@type': 'Question',
      name: 'How is it different from a marketing agency or hiring a salesperson?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "You get both the system and a senior partner in one — for a fraction of the alternatives. Tailwind typically costs around 10% of a Chief Revenue Officer, 20% of a business development manager, and 33% of a traditional agency, without the transactional feel or the lock-in. It's built around how you already work, month to month.",
      },
    },
    {
      '@type': 'Question',
      name: 'How is Tailwind Growth different from outsourced business development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Traditional outsourced business development is transactional — a team cold calling on your behalf with a script that doesn't reflect how your business actually wins work. Tailwind Growth is different: Baidy works directly with you, the approach is built around your existing relationships and reputation, and the AI system supports rather than replaces the human work. It's a partnership, not a vendor relationship.",
      },
    },
    {
      '@type': 'Question',
      name: "What does 'AI-native' mean for a B2B growth partner?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "AI-native means the growth system is designed around AI from the ground up — not a traditional approach with AI bolted on. Tailwind Growth uses AI to handle research, personalisation, outreach sequencing, and pipeline tracking that used to require a full sales team. The result: founders get consistent, high-quality pipeline activity without the overhead of multiple hires.",
      },
    },
    {
      '@type': 'Question',
      name: 'What industries or businesses does Tailwind Growth work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Tailwind Growth works with founders of B2B professional services businesses — lawyers, accountants, engineers, HR and IR practitioners, management consultants, designers, and similar firms. The common thread: they sell expertise and relationships, have grown primarily through referrals, and want a more consistent, scalable pipeline without a traditional sales team.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a lock-in contract?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Tailwind Growth is month-to-month. There's no long-term contract or lock-in. It's built to earn your business every month.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most clients see pipeline activity within the first 30 days — new conversations, re-engaged contacts, and a clearer picture of where opportunities sit. Meaningful revenue outcomes typically follow within 60–90 days, depending on your sales cycle. Growth strategy and accountability compound over time, so clients who stay consistent see the biggest results.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Tailwind Growth cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Tailwind Growth is priced as a fraction of the alternatives — typically around 10% of a Chief Revenue Officer, 20% of a business development manager, and 33% of a traditional marketing agency. Book a growth call for a conversation about what's right for your business.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to understand AI or be technical to use Tailwind Growth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Not at all. The AI system runs in the background — you don't interact with it directly. What you interact with is Baidy: strategy sessions, pipeline reviews, and clear guidance on what to do each day. If you can use email and a calendar, you can use Tailwind Growth.",
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Tailwind Growth based?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We're based in Australia (specifically, Newcastle and Sydney) and work with ambitious B2B founders across the country.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Book a growth call. We'll map a clear next step together — no pitch, no pressure.",
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
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-RPYDSCW6XE" strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-RPYDSCW6XE');`}
      </Script>
      <body>{children}</body>
    </html>
  );
}
