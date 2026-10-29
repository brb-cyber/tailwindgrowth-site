'use client'

import { useState } from 'react'

// Same accordion as growth-sprint/FaqSection.tsx, but takes its questions as a
// prop because the copy is filled per partner ({partner}, {readyWord}).
export default function PartnerFaq({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <img className="star" src="/assets/logos/icon-fullcolour.svg" alt="" aria-hidden="true" />
            Good to know
          </span>
          <h2 className="disp" style={{ margin: '16px 0 0' }}>Questions you&apos;re probably wondering.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div className={'faq-item' + (openIndex === i ? ' open' : '')} key={f.q}>
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
  )
}
