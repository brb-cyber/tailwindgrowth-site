'use client'

import { useState } from 'react'

const STAGES = [
  {
    name: 'Awareness',
    covered: 'GTM strategy, marketing strategy, alignment between the two, launching new products.',
    problems: [
      "Marketing spend that's disconnected from real pipeline outcomes. Traffic without meetings.",
      'Launching a new product line with no capacity or playbook to run the launch',
      "Naming a brand new market category so buyers actually understand what you're selling",
      'Positioning a new offering as distinct from your core brand',
      'Messaging AI or automation capability honestly, without it reading as jargon or overclaiming',
    ],
  },
  {
    name: 'Acquisition',
    covered: 'Pipeline strategy, pre-qualification and qualification frameworks and playbooks, enablement, collateral and business cases.',
    problems: [
      'No structured pipeline. Reactive, feast or famine once referrals dry up',
      'No pre-qualification or qualification framework, so time gets spent on the wrong prospects',
      'No CRM or tracking system, and pipeline math never calculated',
      'Manual, unfiltered lead intake with no way to screen or de-duplicate opportunities',
      'No collateral or business case to support outreach',
      'Long enterprise deal cycles create dead zones with no interim offer to bridge cash flow',
    ],
  },
  {
    name: 'Conversion',
    covered: 'Pricing strategy, contract negotiation, closing, support calls.',
    problems: [
      'Pricing built on gut feel or historic under-charging, not a bottom-up cost base',
      'No tiered pricing structure exists for a new service line',
      'Discounting too readily to close deals, with no policy for when or how much',
      'Contract or payment terms exposing cash flow to risk. Backloaded terms, scope creep',
      "Complex packaging with informal acceptance that won't hold up as deals scale",
    ],
  },
  {
    name: 'Onboarding',
    covered: 'Onboarding, customer success.',
    problems: [
      'New clients arrive with no formal onboarding sequence, inconsistent across customers',
      'Low early adoption discipline on a new platform or system',
      'Migrating a founder off ad hoc tools like spreadsheets, without adding admin burden',
      'Risk of running parallel systems during onboarding, creating duplicate data entry',
    ],
  },
  {
    name: 'Retention',
    covered: 'Customer success, account management, revenue retention, land and expand, stickiness.',
    problems: [
      'Utilisation running above 100% for consecutive months, no capacity buffer',
      'Revenue concentrated in one or two anchor clients, exposing the business to a large swing',
      'No system for delegating or upskilling the team so the founder can step back from delivery',
      'Wants an accountability cadence but is inconsistent using the system between sessions',
      'Cross-sell or expand opportunity sitting unused in an existing relationship',
    ],
  },
  {
    name: 'Advocacy',
    covered: 'Partnerships, referrals, customer insights feeding into product development, partner enablement.',
    problems: [
      'No channel partner strategy exists, even inside an otherwise mature playbook',
      'Partner messaging needs reframing to reduce channel conflict',
      'Existing case studies are too high level and lack real metrics',
      'Partner relationships are the single most effective source of new work, but managed informally',
      'A new product needs a distribution or channel partner motion designed from zero',
      'Testing a white label or named partner arrangement with no contract review process',
    ],
  },
  {
    name: 'RevOps',
    covered: 'Data, tooling, process and systems, metrics, playbooks.',
    problems: [
      "Pipeline prioritisation logic exists only in the founder's head, not systemised",
      'Manual, hours long reporting process with an uncertain path to needed compliance certification',
      'Poor CRM or contact data hygiene. Target lists thin or stale',
      'Core admin tooling breaks under real use, forcing workarounds',
      'No capacity or utilisation forecasting tying pipeline to when you need to start winning new work',
      "No central knowledge base or playbook repository. Process knowledge lives in the founder's head",
      'Billing or utilisation cadence mismatched to how the business actually runs',
    ],
  },
]

export default function LifecycleStepper() {
  const [active, setActive] = useState(0)
  const stage = STAGES[active]

  return (
    <div className="cro-stepper">
      <div className="cro-stepper-nav" role="tablist" aria-label="Customer lifecycle stages">
        {STAGES.map((s, i) => (
          <button
            key={s.name}
            type="button"
            role="tab"
            aria-selected={active === i}
            className={'cro-stepper-tab' + (active === i ? ' active' : '')}
            onClick={() => setActive(i)}
          >
            <span className="cro-stepper-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="cro-stepper-label">{s.name}</span>
          </button>
        ))}
      </div>
      <div className="cro-stepper-panel" role="tabpanel">
        <div className="cro-stepper-covered">
          <span className="cro-stepper-eyebrow">What&apos;s covered</span>
          <p>{stage.covered}</p>
        </div>
        <div className="cro-stepper-problems">
          <span className="cro-stepper-eyebrow">Problems we solve</span>
          <ul>
            {stage.problems.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
