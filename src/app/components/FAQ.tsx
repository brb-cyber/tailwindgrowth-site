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
    a: "Founders and owners of B2B services businesses (lawyers, accountants, engineers, designers, HR/IR practitioners, consultants, and similar) who've grown through referrals but hit a ceiling, and want to grow without hiring a sales team or paying for an expensive agency.",
  },
  {
    q: 'How is it different from a marketing agency or hiring a salesperson?',
    a: "You get both the system and a senior partner in one — for a fraction of the alternatives. Tailwind typically costs around 10% of a Chief Revenue Officer, 20% of a business development manager, and 33% of a traditional agency, without the transactional feel or the lock-in. It's built around how you already work, month to month.",
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
