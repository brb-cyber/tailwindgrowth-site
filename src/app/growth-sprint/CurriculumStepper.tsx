'use client'

import { useState } from 'react'

const SESSIONS = [
  {
    title: "Know Who You're Chasing",
    question: "Which clients are actually worth chasing, and how do you know?",
    about:
      "Most business owners take work from whoever shows up. If the phone rings and the job sounds reasonable, you say yes. The problem is that not all clients are equal — the wrong ones cost you far more than their invoice is worth. This session starts by looking at your best and worst clients and working out what made the difference. By the end, you'll have a clear, written picture of who you should be chasing, and the confidence to walk away from the ones you shouldn't.",
    output:
      "A completed Ideal Customer Profile (ICP) and a red flags list you can use to qualify every new enquiry from here on.",
  },
  {
    title: 'Build Your Growth Plan',
    question: "What's your plan to win the right clients, consistently?",
    about:
      "Most business owners want to grow but don't have a clear plan for how. They rely on referrals, hope the phone keeps ringing, and scramble when it doesn't. This session turns your ICP into a real growth strategy — a deliberate answer to \"how will I win more of the right clients?\" It breaks into a 12-month plan and a 90-day plan you can actually run. This isn't a corporate strategy day. It's two hours and a clear head, and you leave with something you can act on Monday morning.",
    output: 'A one-page growth strategy, a 12-month plan to deliver it, and a 90-day action plan to get started the week after this session.',
  },
  {
    title: 'Build Your Pipeline',
    question: 'What actually happens when a new lead comes in?',
    about:
      "Most business owners don't have a pipeline. They have a list of people sitting somewhere in their inbox, notebook, or head. This session starts by getting honest about what your current system actually looks like, then uses what you already know about your best clients to build something better. By the end, you'll have a clear picture of where your pipeline stands today, a proper stage map in your own language, and a decision made about where your next clients are going to come from.",
    output:
      'A map of your current system, customer insights that show why clients really choose you, a personalised pipeline stage map, and a lead source audit with one new channel you\'re committed to building.',
  },
  {
    title: 'Qualify, Follow Up, Track',
    question: 'How do you stop losing work you should have won?',
    about:
      "Most business owners lose work not because of their price or their skill, but because they followed up too late, not at all, or spent time chasing the wrong leads in the first place. This session gives you three practical tools to fix that: a simple filter to qualify new enquiries quickly, a follow-up cadence so nothing falls through the cracks, and a pipeline tracker so you can see everything in one place. You'll leave this session with all three set up and working, not just planned.",
    output:
      'A qualification filter to spot the right clients fast, a follow-up cadence with message templates ready to use, and a live pipeline tracker with your current leads loaded in.',
  },
  {
    title: 'Make It Run Without You',
    question: 'How do you keep the system going and start getting out of the way?',
    about:
      "Building the system is one thing. Keeping it running is another. This final session is about making your pipeline sustainable: knowing the numbers that tell you at a glance if you're on track, working out what you can start handing off, and setting up one practical AI automation to save you time.",
    output: 'A simple metrics snapshot and weekly review routine, a delegation map of pipeline tasks you can hand off, and one AI automation set up and running in your business.',
  },
  {
    num: 'Session 6-8',
    title: 'Make It Stick',
    question: "How do you make sure it's still running in three months?",
    about:
      "Most programs end after the last session, and so does the momentum. This is different — three monthly accountability sessions after the sprint wraps, built into the program from the start, not sold as an add-on. Each one checks in on what's working, troubleshoots what isn't, and keeps you moving instead of letting the plan gather dust in a drawer. By the end of these three months, the system isn't just built, it's running, and it's yours.",
    output:
      "Three monthly accountability check-ins, a system you've actually used and refined for three months, and the confidence that it keeps running long after the sprint ends.",
  },
]

export default function CurriculumStepper() {
  const [active, setActive] = useState(0)
  const session = SESSIONS[active]

  return (
    <div className="cro-stepper">
      <div className="cro-stepper-nav" role="tablist" aria-label="Sprint sessions">
        {SESSIONS.map((s, i) => (
          <button
            key={s.title}
            type="button"
            role="tab"
            aria-selected={active === i}
            className={'cro-stepper-tab' + (active === i ? ' active' : '')}
            onClick={() => setActive(i)}
          >
            <span className="cro-stepper-num">{s.num ?? 'Session ' + (i + 1)}</span>
            <span className="cro-stepper-label">{s.title}</span>
          </button>
        ))}
      </div>
      <div className="sprint-stepper-panel" role="tabpanel">
        <h4 className="sprint-stepper-question">{session.question}</h4>
        <p>{session.about}</p>
        <div className="sprint-stepper-output sprint-stepper-output--takeaway">
          <span>You&apos;ll walk away with</span>
          <p>{session.output}</p>
        </div>
      </div>
    </div>
  )
}
