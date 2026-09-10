'use client'

import { useState } from 'react'
import { GROWTH_SPRINT_FAQS } from './faqs'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <section className="section tint" id="faq">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <img className="star" src="/assets/logos/icon-fullcolour.svg" alt="" aria-hidden="true" />
            Good to know
          </span>
          <h2 className="disp" style={{ margin: '16px 0 0' }}>Questions you're probably wondering.</h2>
        </div>
        <div className="faq-list">
          {GROWTH_SPRINT_FAQS.map((f, i) => (
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
