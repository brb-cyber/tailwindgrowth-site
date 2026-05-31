'use client';

import { useState } from 'react';
import { Eyebrow } from './Nav';

const FAQS = [
  {
    q: 'What does Tailwind Growth do?',
    a: 'Tailwind Growth is a people-first, AI-native B2B growth partner. We give founders an AI-powered growth system plus a seasoned growth leader embedded in their team — handling the admin-heavy 70% of winning new work, so they can focus on high-value connection.',
  },
  {
    q: 'Who is Tailwind Growth for?',
    a: "Founders and owners of B2B professional services businesses — lawyers, accountants, engineers, designers, HR/IR practitioners, management consultants, and similar — who've grown through referrals but hit a ceiling, and want to grow without hiring a sales team or paying for an expensive agency.",
  },
  {
    q: 'How do I grow my professional services business without hiring more staff?',
    a: "Most founders try to grow by hiring — a salesperson, a BDM, or an agency. Each is expensive, slow to ramp, and often disconnected from how professional services actually wins work. Tailwind Growth takes a different approach: an AI-powered system handles the admin-heavy 70% of winning new work — prospecting, outreach, follow-up — while Baidy works directly with you as a fractional growth leader. Consistent pipeline, no new headcount.",
  },
  {
    q: 'What is a fractional growth leader?',
    a: "A fractional growth leader is a senior revenue professional who works with your business on a part-time or embedded basis — giving you the expertise of a Chief Revenue Officer or Head of Sales without the full-time cost or commitment. At Tailwind Growth, Baidy serves as your fractional growth leader: setting strategy, driving accountability, and working directly in your pipeline every month.",
  },
  {
    q: 'Is Tailwind Growth a marketing agency?',
    a: "No. Traditional marketing agencies focus on brand awareness, content, and ad campaigns — activity that's hard to connect directly to new clients. Tailwind Growth focuses entirely on client acquisition: building your pipeline, managing outreach, and converting opportunities into revenue. You don't pay for impressions. You pay for a system that wins work.",
  },
  {
    q: 'How is it different from a marketing agency or hiring a salesperson?',
    a: "You get both the system and a senior partner in one — for a fraction of the alternatives. Tailwind typically costs around 10% of a Chief Revenue Officer, 20% of a business development manager, and 33% of a traditional agency, without the transactional feel or the lock-in. It's built around how you already work, month to month.",
  },
  {
    q: 'How is Tailwind Growth different from outsourced business development?',
    a: "Traditional outsourced business development is transactional — a team cold calling on your behalf with a script that doesn't reflect how your business actually wins work. Tailwind Growth is different: Baidy becomes an embedded member of your team, working alongside you as if he were on the payroll — building on your existing relationships and reputation, with the AI system handling the grind in the background. It's a partnership, not a vendor relationship.",
  },
  {
    q: "What does 'AI-native' mean for a B2B growth partner?",
    a: "AI-native means the growth system is designed around AI from the ground up — not a traditional approach with AI bolted on. Tailwind Growth uses AI to handle research, personalisation, outreach sequencing, and pipeline tracking that used to require a full sales team. The result: founders get consistent, high-quality pipeline activity without the overhead of multiple hires.",
  },
  {
    q: 'What industries or businesses does Tailwind Growth work with?',
    a: "Tailwind Growth works with founders of B2B professional services businesses — lawyers, accountants, engineers, HR and IR practitioners, management consultants, designers, and similar firms. The common thread: they sell expertise and relationships, have grown primarily through referrals, and want a more consistent, scalable pipeline without a traditional sales team.",
  },
  {
    q: 'Is there a lock-in contract?',
    a: "No. Tailwind Growth is month-to-month. There's no long-term contract or lock-in. It's built to earn your business every month.",
  },
  {
    q: 'How long does it take to see results?',
    a: "Most clients see pipeline activity within the first 30 days — new conversations, re-engaged contacts, and a clearer picture of where opportunities sit. Meaningful revenue outcomes typically follow within 60–90 days, depending on your sales cycle. Growth strategy and accountability compound over time, so clients who stay consistent see the biggest results.",
  },
  {
    q: 'How much does Tailwind Growth cost?',
    a: "Tailwind Growth is priced as a fraction of the alternatives — typically around 10% of a Chief Revenue Officer, 20% of a business development manager, and 33% of a traditional marketing agency. Book a growth call for a conversation about what's right for your business.",
  },
  {
    q: 'Do I need to understand AI or be technical to use Tailwind Growth?',
    a: "Not at all. The AI system runs in the background — you don't interact with it directly. What you interact with is Baidy: strategy sessions, pipeline reviews, and clear guidance on what to do each day. If you can use email and a calendar, you can use Tailwind Growth.",
  },
  {
    q: 'Where is Tailwind Growth based?',
    a: "We're based in Australia (specifically, Newcastle and Sydney) and work with ambitious B2B founders across the country.",
  },
  {
    q: 'How do I get started?',
    a: "Book a growth call. We'll map a clear next step together — no pitch, no pressure.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section tint" id="faq">
      <div className="container">
        <div className="section-head">
          <Eyebrow>Common questions</Eyebrow>
          <h2 className="disp">Good to know.</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div className={'faq-item' + (openIndex === i ? ' open' : '')} key={i}>
              <button
                className="faq-q"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                aria-expanded={openIndex === i}
              >
                <span>{f.q}</span>
                <span className="faq-ic" aria-hidden="true"></span>
              </button>
              <div className="faq-a" aria-hidden={openIndex !== i}>
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
