import type { Metadata } from "next"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import LifecycleStepper from "./LifecycleStepper"
import FaqSection from "./FaqSection"
import { FRACTIONAL_CRO_FAQS } from "./faqs"

export const metadata: Metadata = {
  title: "Fractional CRO & Growth Leader | Tailwind Growth",
  description:
    "A fractional Chief Revenue Officer and growth leader for Australian B2B founders. Strategy, pipeline and hands-on support across the whole customer lifecycle, without a full-time hire.",
  alternates: { canonical: "/fractional-cro/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Tailwind Growth",
    title: "Fractional CRO & Growth Leader | Tailwind Growth",
    description:
      "A fractional Chief Revenue Officer and growth leader for Australian B2B founders. Strategy, pipeline and hands-on support across the whole customer lifecycle, without a full-time hire.",
    url: "https://tailwindgrowth.ai/fractional-cro/",
    images: [{ url: "/assets/images/team-office.jpg", width: 1200, height: 630, alt: "Tailwind Growth: grow on your terms" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional CRO & Growth Leader | Tailwind Growth",
    description:
      "A fractional Chief Revenue Officer and growth leader for Australian B2B founders, across the whole customer lifecycle.",
    images: ["/assets/images/team-office.jpg"],
  },
}

const BOOK_URL = "https://calendar.app.google/x2YHKEPb5wzDa4JY6"

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FRACTIONAL_CRO_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
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
          <span className="eyebrow on-dark">
            <img
              className="star"
              src="/assets/logos/icon-lime.svg"
              alt=""
              aria-hidden="true"
            />
            Your fractional growth leader
          </span>
          <h1 className="growth-hero-h1">
            Someone in<br />
            your corner,<br />
            <span style={{ color: "var(--lime)" }}>who&apos;s done it before.</span>
          </h1>
          <p className="growth-hero-lead">
            We&apos;ve got every part of growing your business covered, not just the bit where deals get closed.
          </p>
          <div className="growth-hero-cta">
            <a
              className="btn btn-accent"
              href="#lifecycle"
              style={{ fontSize: 17, padding: "17px 40px" }}
            >
              Problems we solve
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Who This Is For ───────────────────────────────────────────────────────────

const SITUATIONS = [
  "Your pipeline's gone quiet since you lost a big client, or referrals have dried up for a while",
  "You've hit a ceiling you can't seem to break through on your own",
  "You tried bringing on a growth or business development hire and it didn't work out, or you're wary of trying",
  "An agency burned you. Expensive, transactional, and hard to see what you actually got for it",
  "You've just crossed a revenue milestone and want to build on it properly",
  "You've realised you're the bottleneck. Every deal, every relationship, every decision runs through you",
  "Something outside work made you rethink the balance, and you want a business that doesn't need you every hour of every day",
]

const NOT_FOR = [
  "Growth isn't a budget priority for you right now",
  "You're resistant to new tools or ways of working",
  "You're happy staying exactly the size you are",
  "You want someone to take it all off your plate with zero involvement from you. This is a partnership, not a hand-off",
  "You run a B2C business",
]

function WhoThisIsForSection() {
  return (
    <section className="section" id="who">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <img className="star" src="/assets/logos/icon-fullcolour.svg" alt="" aria-hidden="true" />
            Is this you?
          </span>
          <h2 style={{ margin: "16px 0 0" }}>Who this is for.</h2>
          <p>
            You&apos;re the founder or owner of a B2B tech or professional services business. You&apos;ve grown through referrals but hit a ceiling, and want to grow without hiring a sales team or paying for an expensive agency, or you&apos;re looking to unlock the next growth phase of the business. You&apos;re ambitious and open to new ways of working, but there&apos;s no one in the business dedicated to growth yet.
          </p>
        </div>

        <div className="cro-who-grid">
          <div className="cro-who-col">
            <h4>You might be here because...</h4>
            <ul>
              {SITUATIONS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="cro-who-col cro-who-col--not">
            <h4>This isn&apos;t the right fit if...</h4>
            <ul>
              {NOT_FOR.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Scope of Engagement — Customer Lifecycle ──────────────────────────────────

function ScopeOfEngagementSection() {
  return (
    <section className="section tint" id="lifecycle">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <img className="star" src="/assets/logos/icon-fullcolour.svg" alt="" aria-hidden="true" />
            The full picture
          </span>
          <h2 style={{ margin: "16px 0 0" }}>Problems we solve, stage by stage.</h2>
          <p>
            We can help you across some or all of the customer lifecycle: guide you if you need it, or embed capacity and free you up.
          </p>
        </div>
        <LifecycleStepper />
      </div>
    </section>
  )
}

// ─── How We Work Together ───────────────────────────────────────────────────────

// Option 2 content: icon card grid, mirroring the /growth/ WhyTailwindSection pattern.
const HOW_WE_WORK_CARDS = [
  {
    heading: "What it can look like",
    body: "Sprints on a specific problem. Monthly strategy and accountability sessions. Embedded retained support, no different to having a part-time team member. On-demand help when something comes up. Project-based work with a clear start and end. We pick whichever shape actually solves the problem in front of you.",
    list: [
      "Monthly sessions, or a standing cadence you set",
      "Async support between sessions, as needed",
      "In-person support, a few hours a week at your office",
    ],
    iconBg: "var(--indigo-050)",
    iconSrc: "/assets/logos/icon-fullcolour.svg",
  },
  {
    heading: "Not your typical agency or consultant",
    body: "I'm not here to hand you a slide deck and disappear. I get in the trenches with you: embedded, hands-on, doing the work alongside you. The goal is to free you up and build real capacity, with senior expertise you'd otherwise only get from a full-time hire.",
    iconBg: "var(--pine-100)",
    iconSrc: "/assets/logos/icon-pine.svg",
  },
  {
    heading: "Where the Tailwind platform fits in",
    body: "The Tailwind platform is the hygiene you need in place to grow properly, and it gives you 24/7 access to me. But the platform isn't the secret sauce. The expertise I bring to your business is.",
    iconBg: "var(--sky-tint)",
    iconSrc: "/assets/logos/icon-fullcolour.svg",
  },
  {
    heading: "Investment",
    body: "I've been in your shoes. My priority is giving you flexibility, value and a real return on investment. Let's have a chat about how that looks for your business.",
    iconBg: "var(--lime-100)",
    iconSrc: "/assets/logos/icon-pine.svg",
  },
]

function HowWeWorkSection() {
  return (
    <section className="section" id="how-we-work">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <img className="star" src="/assets/logos/icon-fullcolour.svg" alt="" aria-hidden="true" />
            How we work together
          </span>
          <h2 style={{ margin: "16px 0 0" }}>Whatever gets you unstuck.</h2>
          <p>
            There&apos;s no fixed package here. We shape the engagement around what actually moves your business, not a menu you have to fit yourself into.
          </p>
        </div>

        <div className="growth-why-grid cro-work-cards" style={{ marginTop: 48 }}>
          {HOW_WE_WORK_CARDS.map((card) => (
            <div key={card.heading} className="growth-why-card">
              <div className="feature-ic" style={{ background: card.iconBg, marginBottom: 16 }} aria-hidden="true">
                <img src={card.iconSrc} alt="" style={{ width: 26, height: 26 }} />
              </div>
              <h4>{card.heading}</h4>
              <p>{card.body}</p>
              {card.list && (
                <ul>
                  {card.list.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Why Me / Trust & Proof ─────────────────────────────────────────────────────

function TrustSection() {
  return (
    <section className="section tint" id="why-me">
      <div className="container">
        <div className="growth-founder-card">
          <div className="growth-founder-photo-wrap">
            <img
              src="/assets/images/founder-baidy.jpg"
              alt="Baidy, founder of Tailwind Growth"
            />
          </div>
          <div>
            <span className="founder-role">Founder &amp; Fractional Growth Leader</span>
            <h4>Baidy Barton</h4>
            <p>
              15 years building revenue for B2B businesses as a Commercialisation Director, Chief Revenue Officer, Investor and Partner at a global professional services firm. Baidy works fast and gets in the trenches with you. She is an embedded member of your team working with you to bring in new opportunities, grow the business and get outcomes.
            </p>
            <p style={{ marginTop: 16 }}>
              <strong style={{ color: "var(--midnight)" }}>
                She&apos;s not a consultant handing you a strategy and walking away. She&apos;s working alongside you in your business - she has skin in the game.
              </strong>
            </p>
          </div>
        </div>

        {/*
          Testimonial and case study placeholders — content pending (testimonials and
          case studies not yet collected). Not rendered in v1 per spec Section 7.
          Uncomment and populate once content exists:

          <TestimonialSection />
          <CaseStudySection />
        */}
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

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
          Grow on your<br />
          <span style={{ color: "var(--lime)" }}>terms today.</span>
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--fg-invert-2)", maxWidth: 460, margin: "0 auto 36px" }}>
          The system and the person, ready to go. Click below and let&apos;s get started.
        </p>
        <a
          className="btn btn-accent"
          href={BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 17, padding: "17px 40px" }}
        >
          Let&apos;s get growing
        </a>
        {/* Destination TBD — same open item as /growth/'s secondary CTA (community link not yet confirmed). Points to the booking URL for now, matching /growth/'s current fallback behaviour. */}
        <a
          href={BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="growth-secondary-cta"
          style={{ marginTop: 24, display: "block", fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.55)", textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.25)" }}
        >
          Join a community of founders harnessing their tailwind
        </a>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FractionalCroPage() {
  return (
    <>
      <Nav bookUrl={BOOK_URL} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <HeroSection />
        <WhoThisIsForSection />
        <ScopeOfEngagementSection />
        <HowWeWorkSection />
        <TrustSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
