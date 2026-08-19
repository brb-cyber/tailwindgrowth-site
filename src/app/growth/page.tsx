import type { Metadata } from "next"
import { Suspense } from "react"
import GrowthNav from "./GrowthNav"
import Footer from "../components/Footer"
import CtaButton from "./CtaButton"
import FeatureJourney from "../components/FeatureJourney"

export const metadata: Metadata = {
  title: "Growth on Your Terms | Tailwind Growth",
  description:
    "The system and the person to win more work — without the chaos. Tailwind gives SME founders the AI-powered growth engine and a fractional growth leader in their corner.",
  robots: { index: false, follow: false },
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
            Your growth engine, activated
          </span>
          <h1 className="growth-hero-h1">
            Growth on your<br />
            terms is a<br />
            <span style={{ color: "var(--lime)" }}>click away.</span>
          </h1>
          <p className="growth-hero-lead">
            Finally, everything you need to win new work, and someone in your corner who&apos;s done it before.
          </p>
          <div className="growth-hero-cta">
            <Suspense
              fallback={
                <a
                  className="btn btn-accent"
                  href="https://calendar.app.google/x2YHKEPb5wzDa4JY6"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 17, padding: "17px 40px" }}
                >
                  Let&apos;s get growing
                </a>
              }
            >
              <CtaButton size="lg" />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Trust bar ───────────────────────────────────────────────────────────────

function TrustBar() {
  const items = [
    "Google CASA Tier 2 approved",
    "Foundation clients live on platform",
    "Built on tools you already use",
  ]
  return (
    <div className="growth-trust-bar">
      <div className="container">
        <div className="growth-trust-bar-inner">
          {items.map((item) => (
            <span key={item} className="growth-trust-item">
              <span className="growth-trust-dot" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Feature Journey — see ../components/FeatureJourney.tsx ──────────────────

// ─── Features Grid ────────────────────────────────────────────────────────────

const HERO_FEATURES = [
  {
    name: "Today's Priorities",
    label: "Prioritisation Agent",
    bg: "linear-gradient(135deg, var(--indigo) 0%, var(--indigo-700) 100%)",
    problem: "Wasting your 30-minute window between calls just working out what to do and where each deal stands",
    benefit: "Surfaces the 3 highest-priority actions across your entire pipeline. Skip the digging, go straight to action, and always know exactly what to work on.",
    preview: ["1. Send proposal to Apex Consulting", "2. Follow up with Northgate Co.", "3. Review onboarding for ClientX"],
  },
  {
    name: "Sales Advisor",
    label: "AI Sales Coach",
    bg: "linear-gradient(135deg, var(--pine) 0%, var(--pine-400) 100%)",
    problem: "A deal has gone stuck and you are not sure what to do next. You just want a second opinion.",
    benefit: "On-demand advice, tailored to that specific lead, on the action to take today to get the opportunity moving again.",
    preview: ["Analysing deal context...", "Recommended: Send value email", "Next step: Schedule follow-up call"],
  },
  {
    name: "Automate the Grind",
    label: "Full pipeline automation",
    bg: "linear-gradient(135deg, var(--indigo) 0%, var(--pine) 100%)",
    problem: "Juggling email, calendar, docs, follow-ups across separate tools means nothing is ever in one place",
    benefit: "Integrates with Gmail, Calendar and Drive. Pre-built docs go out in one click. Automated reminders and follow-ups so nothing slips through.",
    preview: ["Meeting brief sent", "Proposal delivered", "Follow-up scheduled"],
  },
  {
    name: "Pipeline Helper",
    label: "Capacity and Forecast",
    bg: "linear-gradient(135deg, var(--pine-800) 0%, var(--pine) 100%)",
    problem: "Guessing at capacity or tracking it in a spreadsheet, and waking up at 3am wondering if there is enough pipeline",
    benefit: "Full visibility of your pipeline and capacity. Proactive notifications when it is time to go out and win more work, so you never get caught short.",
    preview: ["Next available: 14 July", "Pipeline helper: Start filling now", "3 projects in delivery"],
  },
]

const SUPPORT_FEATURES = [
  {
    name: "One-Click Migration",
    desc: "Import and migration handled for you. Sign up, share one detail from your existing CRM, and the rest is done.",
    iconBg: "#eef2ff",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{ color: "#4f46e5" }}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
  },
  {
    name: "Contacts and Relationships",
    desc: "Keep referrers, your network and past clients in one place. See when you last checked in and turn a conversation into a tracked lead in one click.",
    iconBg: "#f0fdf4",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{ color: "#16a34a" }}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    name: "Help When You Need It",
    desc: "Searchable FAQs and short how-to videos built straight into the app. Get the answer in seconds, not a support queue.",
    iconBg: "#e0f2fe",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{ color: "#0284c7" }}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    name: "Growth Partner in Your Corner",
    desc: "Monthly strategy and accountability sessions plus on-demand support from an experienced revenue leader. Unlock the next stage of growth without adding headcount.",
    iconBg: "#fefce8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{ color: "#ca8a04" }}>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
]

function FeaturesGridSection() {
  return (
    <section className="section tint" id="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <img className="star" src="/assets/logos/icon-fullcolour.svg" alt="" aria-hidden="true" />
            The platform
          </span>
          <h2 style={{ margin: "16px 0 0" }}>Every feature, built for one job.</h2>
          <p>Winning new work, and keeping you sane while you do it.</p>
        </div>

        <div className="growth-hero-features">
          {HERO_FEATURES.map((f) => (
            <div key={f.name} className="growth-hero-card">
              <div className="growth-hero-card-preview" style={{ background: f.bg }}>
                <span className="pv-name">{f.name}</span>
                <div style={{ display: "flex", flexDirection: "column", gap: 7, width: "100%", maxWidth: 220, marginTop: 8 }}>
                  {f.preview.map((line) => (
                    <div key={line} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 6, height: 6, borderRadius: 3, background: "rgba(255,255,255,0.5)", flexShrink: 0 }} />
                      <div style={{ height: 5, borderRadius: 3, background: "rgba(255,255,255,0.3)", flex: 1 }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="growth-hero-card-body">
                <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--indigo)", display: "block", marginBottom: 8 }}>
                  {f.label}
                </span>
                <h4>{f.name}</h4>
                <p><strong style={{ color: "var(--midnight)", fontWeight: 600 }}>The problem:</strong> {f.problem}</p>
                <p style={{ marginTop: 8 }}><strong style={{ color: "var(--midnight)", fontWeight: 600 }}>What changes:</strong> {f.benefit}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48 }}>
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-500)", marginBottom: 20 }}>
            Also included
          </p>
          <div className="growth-support-features">
            {SUPPORT_FEATURES.map((f) => (
              <div key={f.name} className="growth-support-card">
                <div className="feature-ic" style={{ background: f.iconBg, marginBottom: 16 }} aria-hidden="true">
                  {f.icon}
                </div>
                <h5>{f.name}</h5>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Why Tailwind ─────────────────────────────────────────────────────────────

const WHY_CARDS = [
  {
    heading: "Google CASA Tier 2 approved",
    body: "The same security bar required of enterprise Google Workspace integrations. Not common for early-stage SaaS. Your data, your pipeline, your client info, taken seriously.",
    iconBg: "var(--indigo-050)",
    iconSrc: "/assets/logos/icon-fullcolour.svg",
  },
  {
    heading: "Built from the ground up for SMEs",
    body: "Not enterprise software turned down. Not a CRM adapted sideways. Every decision was made for how SME service businesses actually win work.",
    iconBg: "var(--pine-100)",
    iconSrc: "/assets/logos/icon-pine.svg",
  },
  {
    heading: "Works where you already work",
    body: "Runs inside Gmail, Google Calendar and Drive. No new inbox to check. No new tool to learn. No copy-pasting between systems. It slots into the tools you already live in.",
    iconBg: "var(--sky-tint)",
    iconSrc: "/assets/logos/icon-fullcolour.svg",
  },
  {
    heading: "Join the Tailwind community",
    body: "You are not going it alone. Join a community of founders harnessing their tailwind. Share what is working, get a second opinion when a deal goes sideways, and grow alongside people who get it.",
    iconBg: "var(--lime-100)",
    iconSrc: "/assets/logos/icon-pine.svg",
  },
]

function WhyTailwindSection() {
  return (
    <section className="section" id="why">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <img className="star" src="/assets/logos/icon-fullcolour.svg" alt="" aria-hidden="true" />
            Why Tailwind
          </span>
          <h2 style={{ margin: "16px 0 0" }}>Not another growth tool.<br />A growth partner.</h2>
          <p>The platform and the person, working together, designed for businesses like yours.</p>
        </div>
        <div className="growth-why-grid">
          {WHY_CARDS.map((card) => (
            <div key={card.heading} className="growth-why-card">
              <div className="feature-ic" style={{ background: card.iconBg, marginBottom: 16 }} aria-hidden="true">
                <img src={card.iconSrc} alt="" style={{ width: 26, height: 26 }} />
              </div>
              <h4>{card.heading}</h4>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GrowthStepsSection() {
  const steps = [
    {
      n: "01",
      title: "Sign up & go live",
      body: "Create your account in a minute. In parallel, we handle all the customisation for you — you don't touch a thing.",
      iconBg: "var(--indigo-050)",
      numColor: "var(--indigo)",
    },
    {
      n: "02",
      title: "Growth strategy session",
      body: "A focused session to co-create your growth strategy, set goals and markers, and design the plan to embed it.",
      iconBg: "var(--pine-100)",
      numColor: "var(--pine)",
    },
    {
      n: "03",
      title: "Monthly accountability",
      body: "We meet to work active opportunities, review your pipeline, share learnings and stay on track. Your growth partner, on call.",
      iconBg: "var(--lime-100)",
      numColor: "var(--pine)",
    },
  ]
  return (
    <section className="section tint" id="how">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <img className="star" src="/assets/logos/icon-fullcolour.svg" alt="" aria-hidden="true" />
            Your journey
          </span>
          <h2 style={{ margin: "16px 0 0" }}>It&apos;s as easy as.</h2>
        </div>
        <div className="growth-why-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {steps.map((s) => (
            <div key={s.n} className="growth-why-card">
              <div
                className="feature-ic"
                style={{ background: s.iconBg, marginBottom: 16 }}
                aria-hidden="true"
              >
                <span style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: s.numColor, lineHeight: 1 }}>
                  {s.n}
                </span>
              </div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FounderSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="growth-founder-card">
          <div className="growth-founder-photo-wrap">
            <img
              src="/assets/images/founder-baidy.jpg"
              alt="Baidy, Founder of Tailwind Growth"
            />
          </div>
          <div>
            <span className="founder-role">Founder and Fractional Growth Leader</span>
            <h4>Baidy Barton</h4>
            <p>
              15 years building revenue for B2B businesses as a Commercialisation Director, Chief Revenue Officer, Investor and Partner at a global professional services firm. Baidy works fast and gets in the trenches with you. She is an embedded member of your team every month, working in your pipeline with you and executing the bespoke strategy that an AI-powered system alone cannot deliver.
            </p>
            <p style={{ marginTop: 16 }}>
              <strong style={{ color: "var(--midnight)" }}>Her investment in your success is not a sales pitch. It is how the model works.</strong>
            </p>
            <a href="/fractional-cro/" className="growth-journey-cta" style={{ marginTop: 16 }}>
              Learn more about your fractional CRO &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Bottom CTA ───────────────────────────────────────────────────────────────

function BottomCtaSection() {
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
        <Suspense
          fallback={
            <a
              className="btn btn-accent"
              href="https://calendar.app.google/x2YHKEPb5wzDa4JY6"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 17, padding: "17px 40px" }}
            >
              Let&apos;s get growing
            </a>
          }
        >
          <CtaButton size="lg" />
        </Suspense>
        <Suspense
          fallback={
            <a
              href="https://calendar.app.google/x2YHKEPb5wzDa4JY6"
              target="_blank"
              rel="noopener noreferrer"
              className="growth-secondary-cta"
              style={{ marginTop: 24, display: "block", fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.55)", textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.25)" }}
            >
              Join a community of founders harnessing their tailwind
            </a>
          }
        >
          <CtaButton variant="link" />
        </Suspense>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GrowthPage() {
  return (
    <>
      <GrowthNav />
      <main>
        <HeroSection />
        <FeatureJourney />
        <FeaturesGridSection />
        <WhyTailwindSection />
        <GrowthStepsSection />
        <FounderSection />
        <BottomCtaSection />
      </main>
      <Footer />
    </>
  )
}
