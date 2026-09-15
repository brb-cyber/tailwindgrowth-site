import type { Metadata } from "next"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import CurriculumStepper from "./CurriculumStepper"
import FaqSection from "./FaqSection"
import { GROWTH_SPRINT_FAQS } from "./faqs"

export const metadata: Metadata = {
  title: "Built to Grow Sprint | Tailwind Growth",
  description:
    "A 5-week, in-person growth sprint for Lake Macquarie and Newcastle B2B business owners. Leave with your ideal customer, a growth plan, a pipeline system that runs without you, and 3 months of follow up support to make it happen.",
  alternates: { canonical: "/growth-sprint/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Tailwind Growth",
    title: "Built to Grow Sprint | Tailwind Growth",
    description:
      "A 5-week, in-person growth sprint for Lake Macquarie and Newcastle B2B business owners. Leave with your ideal customer, a growth plan, and a pipeline system that runs without you.",
    url: "https://tailwindgrowth.ai/growth-sprint/",
    images: [{ url: "/assets/images/team-office.jpg", width: 1200, height: 630, alt: "Tailwind Growth: grow on your terms" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Built to Grow Sprint | Tailwind Growth",
    description:
      "A 5-week, in-person growth sprint for Lake Macquarie and Newcastle B2B business owners.",
    images: ["/assets/images/team-office.jpg"],
  },
}

// Everywhere this page links to registration goes through this one constant.
const BOOK_URL = "https://events.humanitix.com/built-to-grow-sprint"

// Single source of truth for the current cohort's specifics, so a future
// cohort (different partner, venue, dates) only requires editing this object —
// per the spec's "evergreen home" requirement.
const CURRENT_COHORT = {
  partner: "Dantia",
  venue: "Dashworks",
  location: "Lake Macquarie",
  startDateLabel: "28 October 2026",
  startDateISO: "2026-10-28",
  schedule: "Wednesdays, 8–10am",
  cohortSize: "10 to 15",
  fee: 625,
  coFundedValue: 2750,
  privateValue: 7500,
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GROWTH_SPRINT_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

// Addition beyond the fractional-cro precedent: this page describes an actual
// dated, priced course, so a Course/CourseInstance schema is a stronger fit
// than fractional-cro's ongoing-service framing. Flagged for Baidy to confirm.
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Built to Grow Sprint",
  description:
    "A 5-session, in-person growth sprint for B2B business owners in the Lake Macquarie and Newcastle region, plus three months of post-program accountability.",
  provider: { "@type": "Organization", name: "Tailwind Growth", sameAs: "https://tailwindgrowth.ai/" },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Onsite",
    startDate: CURRENT_COHORT.startDateISO,
    location: {
      "@type": "Place",
      name: CURRENT_COHORT.venue,
      address: { "@type": "PostalAddress", addressLocality: "Lake Macquarie", addressRegion: "NSW", addressCountry: "AU" },
    },
  },
  offers: {
    "@type": "Offer",
    price: CURRENT_COHORT.fee,
    priceCurrency: "AUD",
    url: "https://tailwindgrowth.ai/growth-sprint/",
  },
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="growth-hero" id="top">
      <img
        className="growth-hero-motif"
        src="/assets/vectors/vector-7-white.svg"
        alt=""
        aria-hidden="true"
        style={{ width: 340, height: 340, top: -60, right: -60 }}
      />
      <img
        className="growth-hero-motif"
        src="/assets/vectors/vector-3-lime.svg"
        alt=""
        aria-hidden="true"
        style={{ width: 220, height: 220, bottom: -40, left: -40 }}
      />
      <div className="container">
        <div className="growth-hero-inner">
          <span className="eyebrow on-dark sprint-program-kicker">
            <img
              className="star"
              src="/assets/logos/icon-lime.svg"
              alt=""
              aria-hidden="true"
            />
            Built to Grow Sprint
          </span>
          <h1 className="growth-hero-h1">
            Unlock reliable<br />
            growth, <span style={{ color: "var(--lime)" }}>without<br />the pain.</span>
          </h1>
          <p className="growth-hero-lead">
            A 5-week sprint that takes you from &ldquo;who are we chasing?&rdquo; to &ldquo;here&apos;s the system that brings in work&rdquo;, plus the follow-up to make sure it delivers.
          </p>
          <p style={{ marginBottom: 14, fontSize: 14, fontWeight: 600, color: "var(--lime)", letterSpacing: ".04em" }}>
            Only 15 spots — applications close 21 October.
          </p>
          <div className="growth-hero-cta">
            <a
              className="btn btn-accent"
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 17, padding: "17px 40px" }}
            >
              Secure your spot
            </a>
          </div>
          <p style={{ marginTop: 22, fontSize: 14, fontWeight: 600, color: "var(--lime)", letterSpacing: ".04em" }}>
            Kicking off {CURRENT_COHORT.startDateLabel}
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── The Problem We're Solving ─────────────────────────────────────────────────

function ProblemSection() {
  return (
    <section className="section" id="problem">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <img className="star" src="/assets/logos/icon-fullcolour.svg" alt="" aria-hidden="true" />
            Your challenge
          </span>
          <h2 style={{ margin: "16px 0 0" }}>A ceiling you don&apos;t know how to break through.</h2>
          <p>
            You&apos;ve grown on referrals. Perhaps you&apos;ve hit year two with referrals starting to plateau and growth stalling. Or it&apos;s feast and famine, you&apos;re either slammed with projects and then realise there is nothing lined up next. Or you feel like to grow would mean &ldquo;feeding the beast&rdquo;, and think that means you just need to hustle harder.
          </p>
          <p>There is no program like this operating within the region for businesses like yours.</p>
          <p className="sprint-pullquote">
            Get the foundations right and manage the pipeline, and you start the chain reaction: your business grows, your team level up, and your whole community benefits.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Who This Is For ───────────────────────────────────────────────────────────

const WHO_SITUATIONS = [
  "You've relied on referrals as your main source of new work",
  "You're launching a new product or service",
  "You're past the startup phase and wondering how to take the business to the next level",
  "You're super busy, but everything feels reliant on you",
  "You're ambitious and need some guidance to hit your goals",
  "You're looking to build a community of business owners at a similar stage, so the journey feels less lonely",
  "Growth and distribution in 2026 is confusing, and you want to cut through the noise to get clarity on what works",
  "You're sick of programs that promise results and leave you feeling like it was a waste of time",
]

const WHO_NOT_FOR = [
  "You don't have a product or service in market yet",
  "You're resistant to trying anything new",
  "You're happy staying exactly the size you are",
]

function WhoThisIsForSection() {
  return (
    <section className="section tint" id="who">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <img className="star" src="/assets/logos/icon-fullcolour.svg" alt="" aria-hidden="true" />
            Is this you?
          </span>
          <h2 style={{ margin: "16px 0 0" }}>Who this is for.</h2>
          <p>
            You run a B2B business - sole trader through to a growing team. You&apos;ve launched, hit a ceiling, or you&apos;re just tired of word-of-mouth being your only growth strategy. You&apos;re ambitious and open to doing things differently.
          </p>
        </div>

        <div className="cro-who-grid">
          <div className="cro-who-col">
            <h4>You might be here because...</h4>
            <ul>
              {WHO_SITUATIONS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="cro-who-col cro-who-col--not">
            <h4>This isn&apos;t the right fit if...</h4>
            <ul>
              {WHO_NOT_FOR.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p style={{ marginTop: 20, fontSize: 14, color: "var(--ink-500)" }}>
              That&apos;s fine. It&apos;s not a fit for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── The Solution ───────────────────────────────────────────────────────────────

function SolutionSection() {
  return (
    <section className="section" id="solution">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <img className="star" src="/assets/logos/icon-fullcolour.svg" alt="" aria-hidden="true" />
            The solution
          </span>
          <h2 style={{ margin: "16px 0 0" }}>
            From &ldquo;who are we chasing&rdquo; to<br />&ldquo;here&apos;s the system that brings in work&rdquo;
          </h2>
          <p>
            The Built to Grow Sprint is for ambitious B2B businesses that want to grow but are facing growing pains, feeling overwhelmed, or just not sure how. It&apos;s a practical, in-person program that gives you the systems and skills to unlock growth and grow more deliberately.
          </p>
        </div>

        <div className="sprint-solution-grid" style={{ marginTop: 48 }}>
          <div className="growth-why-card">
            <div className="feature-ic" style={{ background: "var(--indigo-050)", marginBottom: 16 }} aria-hidden="true">
              <img src="/assets/logos/icon-fullcolour.svg" alt="" style={{ width: 26, height: 26 }} />
            </div>
            <h4>What it looks like</h4>
            <p>
              Five weekly 2-hour sessions, plus three monthly follow-up accountability sessions after the program ends. Eight sessions in total, all built around practical action.
            </p>
            <p style={{ marginTop: 16 }}>
              {CURRENT_COHORT.schedule}, at {CURRENT_COHORT.venue} (or online if you can&apos;t make it face to face). You leave each week with something built and ready to be implemented the same day.
            </p>
          </div>
          <div className="growth-why-card">
            <div className="feature-ic" style={{ background: "var(--pine-100)", marginBottom: 16 }} aria-hidden="true">
              <img src="/assets/logos/icon-pine.svg" alt="" style={{ width: 26, height: 26 }} />
            </div>
            <h4>What it takes you through</h4>
            <p>
              Sessions 1–2: get clear on exactly who you&apos;re chasing and how you&apos;ll win them, your Ideal Customer Profile, growth strategy, and 12 month and 90 day plans.
            </p>
            <p style={{ marginTop: 16 }}>
              Sessions 3–5: build the system that brings that work in consistently, your pipeline, lead sources, qualification filter, follow-up cadence, tracker, and your first AI automation.
            </p>
          </div>
          <div className="growth-why-card">
            <div className="feature-ic" style={{ background: "var(--lime-100)", marginBottom: 16 }} aria-hidden="true">
              <img src="/assets/logos/icon-pine.svg" alt="" style={{ width: 26, height: 26 }} />
            </div>
            <h4>Your digital workbook</h4>
            <p>
              Everything you build across the sprint, your ICP, your plans, your pipeline tracker, all of it, lives in your own online portal you can come back to any time, not scattered across notebooks and sticky notes.
            </p>
          </div>
        </div>

        <div className="sprint-accountability">
          <h4>The game changer: what happens after.</h4>
          <p>
            Three months of monthly accountability sessions after the program ends, included in the sprint. This is where it sticks, most programs fail because nothing happens after week five. Not this one.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Program Breakdown (Curriculum) ─────────────────────────────────────────────

function CurriculumSection() {
  return (
    <section className="section tint" id="curriculum">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <img className="star" src="/assets/logos/icon-fullcolour.svg" alt="" aria-hidden="true" />
            The program
          </span>
          <h2 style={{ margin: "16px 0 0" }}>Five sessions. Three follow-ups. One system.</h2>
          <p>Every session, you leave with something built, not just notes.</p>
        </div>
        <CurriculumStepper />
      </div>
    </section>
  )
}

// ─── Credibility / Why Baidy ────────────────────────────────────────────────────

const PROOF_STATS = [
  { n: "$200K → $12M", l: "ARR at SaaS company in three years" },
  { n: "15 years", l: "of B2B growth leadership" },
  { n: "150+", l: "startups and scaleups run through structured programs" },
]

function TrustSection() {
  return (
    <section className="section" id="why-me">
      <div className="container">
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap", marginBottom: 48 }}>
          {PROOF_STATS.map((s) => (
            <div key={s.l} style={{ flex: "1 1 200px" }}>
              <div className="disp" style={{ fontSize: 34, color: "var(--indigo)" }}>{s.n}</div>
              <p style={{ fontSize: 14, color: "var(--ink-500)", margin: "8px 0 0", lineHeight: 1.5 }}>{s.l}</p>
            </div>
          ))}
        </div>

        <div className="growth-founder-card">
          <div className="growth-founder-photo-wrap">
            <img src="/assets/images/founder-baidy.jpg" alt="Baidy, founder of Tailwind Growth" />
          </div>
          <div>
            <span className="founder-role">Founder, Tailwind Growth</span>
            <h4>Baidy Barton</h4>
            <p>
              I&apos;ve spent 15 years in B2B growth leadership across software, professional services, and emerging technology. As Chief Revenue Officer at Yellow Canary, an enterprise RegTech, I took the business from $200K to $12M ARR and from 7 to 60 people in three years. Before that, as a Partner at PKF, I built the firm&apos;s national Governance, Risk and Compliance division from scratch, growing it to the firm&apos;s fastest-growing and most profitable practice.
            </p>
            <p style={{ marginTop: 16 }}>
              I&apos;ve recruited and delivered structured programs for 150+ startups and scaleups across services, software and hardware, attracting over 340 applications and supporting participants to secure customers and build for growth.
            </p>
            <p style={{ marginTop: 16 }}>
              <strong style={{ color: "var(--midnight)" }}>
                This program isn&apos;t another framework to forget by Friday. It&apos;s built for business owners who need it to work the next day. That&apos;s something I&apos;m passionate about, and you can hold me to it.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Supporters Banner ──────────────────────────────────────────────────────────
// Dantia file choice (Dantia-Logo-2.png, the light-background version) and
// partner sign-off on being listed are both still open items — see the spec
// and build plan. The Business Centre asset is the RGB-REVERSE (white) file,
// the only version supplied, so it sits in a dark chip to stay legible; swap
// for a non-reverse file if/when one is available.

function SupportersSection() {
  return (
    <section className="sprint-supporters">
      <div className="container">
        <span className="sprint-supporters-label">Proudly supported by</span>
        <div className="sprint-supporters-row">
          <img src="/assets/partners/dantia-logo.png" alt="Dantia" />
          <img src="/assets/partners/lake-mac-business-logo.svg" alt="Lake Macquarie Business" />
          <span className="sprint-supporter-chip">
            <img src="/assets/partners/business-centre-logo-reverse.svg" alt="The Business Centre" />
          </span>
        </div>
      </div>
    </section>
  )
}

// ─── Investment ─────────────────────────────────────────────────────────────────

const INCLUDES = [
  "Five 2-hour in-person sessions (or you can attend online if needed)",
  "Three monthly accountability sessions after the program ends",
  "Every artifact you build along the way: your ICP, growth strategy, 12-month and 90-day plans, pipeline stage map, lead source audit, qualification filter, follow-up templates, pipeline tracker, metrics snapshot, delegation map, and one working AI automation",
  "Ongoing access to your digital workbook to hold everything you've built",
  "A peer group of 10-15 ambitious business owners",
]

function InvestmentSection() {
  return (
    <section className="section" id="investment">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <img className="star" src="/assets/logos/icon-fullcolour.svg" alt="" aria-hidden="true" />
            Investment
          </span>
          <h2 style={{ margin: "16px 0 0" }}>Real growth, made accessible.</h2>
        </div>

        <div className="sprint-investment">
          <div className="sprint-investment-card">
            <p className="sprint-investment-fee">
              ${CURRENT_COHORT.fee} ex GST
            </p>
            <p>
              We care so deeply about making this practical program accessible to as many business owners as possible, that {CURRENT_COHORT.partner} and Tailwind have partnered to co-fund it. Meaning what would have cost ${CURRENT_COHORT.coFundedValue.toLocaleString()} (or ${CURRENT_COHORT.privateValue.toLocaleString()}+ if done privately) is available to you for only ${CURRENT_COHORT.fee}.
            </p>
            <p className="sprint-investment-value">
              All Tailwind clients have achieved 100% ROI (ie new clients) before the sprint is even finished. It&apos;s a no-brainer.
            </p>
            <a
              className="btn btn-accent"
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 28, width: "100%", justifyContent: "center", fontSize: 16, padding: "15px 32px" }}
            >
              Secure your spot
            </a>
          </div>
          <div className="sprint-investment-includes">
            <h4>What&apos;s included</h4>
            <ul>
              {INCLUDES.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CTA (bottom) ───────────────────────────────────────────────────────────────

function CtaSection() {
  return (
    <section className="growth-bottom-cta" id="get-started">
      <img
        src="/assets/vectors/vector-2-lime.svg"
        alt=""
        aria-hidden="true"
        style={{ position: "absolute", width: 200, height: 200, left: -40, bottom: -40, opacity: 0.15, pointerEvents: "none" }}
      />
      <div className="container" style={{ position: "relative" }}>
        <h2 className="disp" style={{ fontSize: 60, color: "#fff", marginBottom: 20 }}>
          Secure your spot in the<br />
          <span style={{ color: "var(--lime)" }}>Built to Grow Sprint.</span>
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--fg-invert-2)", maxWidth: 460, margin: "0 auto 20px" }}>
          Leave your worries about where your next client is coming from behind. Start 2027 in control of your business&apos;s growth.
        </p>
        <p style={{ fontSize: 15, fontWeight: 600, color: "var(--lime)", maxWidth: 460, margin: "0 auto 24px" }}>
          Only 15 spots available. Applications close 21 October — sooner if we fill up.
        </p>
        <a
          className="btn btn-accent"
          href={BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 17, padding: "17px 40px" }}
        >
          Secure your spot
        </a>
        <p style={{ marginTop: 24, fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.55)" }}>
          Kicking off {CURRENT_COHORT.startDateLabel}. See you there!
        </p>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GrowthSprintPage() {
  return (
    <>
      <Nav bookUrl={BOOK_URL} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <main>
        <HeroSection />
        <ProblemSection />
        <WhoThisIsForSection />
        <SolutionSection />
        <CurriculumSection />
        <TrustSection />
        <SupportersSection />
        <InvestmentSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
