import Nav from './components/Nav';
import Hero from './components/Hero';
import TheSystem from './components/TheSystem';
import Services from './components/Services';
import FeatureJourney from './components/FeatureJourney';
import AboutFounder from './components/AboutFounder';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTABand from './components/CTABand';
import Footer from './components/Footer';

const BOOK_URL = 'https://calendar.app.google/x2YHKEPb5wzDa4JY6';

// Homepage FAQ schema. Kept here, not in layout.tsx, so pages with their own
// FAQ (fractional-cro, growth-sprint, insights articles) don't get two FAQPage blocks.
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
        text: "Most founders try to grow by hiring — a salesperson, a BDM, or an agency. Each is expensive, slow to ramp, and often disconnected from how professional services actually wins work. Tailwind Growth takes a different approach: an AI-powered system handles the admin-heavy 70% of winning new work — prospecting, outreach, follow-up — while Baidy works directly with you as a fractional growth leader. Consistent pipeline, no new headcount.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is a fractional growth leader?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A fractional growth leader is a senior revenue professional who works with your business on a part-time or embedded basis — giving you the expertise of a Chief Revenue Officer or Head of Sales without the full-time cost or commitment. At Tailwind Growth, Baidy serves as your fractional growth leader: setting strategy, driving accountability, and working directly in your pipeline every month.",
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
        text: "Traditional outsourced business development is transactional — a team cold calling on your behalf with a script that doesn't reflect how your business actually wins work. Tailwind Growth is different: Baidy becomes an embedded member of your team, working alongside you as if she were on the payroll — building on your existing relationships and reputation, with the AI system handling the grind in the background. It's a partnership, not a vendor relationship.",
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
        text: "Tailwind Growth works with founders of B2B professional services businesses — lawyers, accountants, engineers, HR and IR practitioners, management consultants, designers, and similar firms. The common thread: they have strong relationships with clients and provide expertise, have grown primarily through referrals, and want a more consistent, scalable pipeline without a traditional sales team.",
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
        text: "Our clients see impact from day one through clarity over their growth strategy, and their time being freed up from admin to be able to do the things that move the needle - new conversations, re-engaged contacts, and a clearer picture of where opportunities sit. Meaningful revenue outcomes typically follow within 60–90 days, depending on your sales cycle. Growth strategy and accountability compound over time, so clients who stay consistent see the biggest results.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Tailwind Growth cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Tailwind Growth is priced to give you value and flexibility. The good news is that means that it's priced as a fraction of the alternatives — typically around 10% of a Chief Revenue Officer, 20% of a business development manager, and 33% of a traditional marketing agency. Let's chat to see about what's right for your business.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to understand AI or be technical to use Tailwind Growth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Not at all, we believe that good AI is invisible. The AI system runs in the background — you don't interact with it directly. What you interact with is Baidy: strategy sessions, pipeline reviews, and clear guidance on what to do each day. If you can use email and a calendar, you can use Tailwind Growth.",
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

export default function Home() {
  return (
    <>
      <Nav bookUrl={BOOK_URL} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        <Hero bookUrl={BOOK_URL} />
        <TheSystem />
        <Services />
        <FeatureJourney />
        <AboutFounder />
        <Testimonials />
        <FAQ />
        <CTABand bookUrl={BOOK_URL} />
      </main>
      <Footer />
    </>
  );
}
