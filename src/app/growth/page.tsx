import type { Metadata } from "next"
import { Suspense } from "react"
import GrowthNav from "./GrowthNav"
import Footer from "../components/Footer"
import CtaButton from "./CtaButton"

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

// ─── Feature Journey ─────────────────────────────────────────────────────────

const JOURNEY_ITEMS = [
  {
    label: "Contacts and Relationships",
    heading: "Keep track of your contacts",
    body: "Keep track of your contacts and automate relationship-building. Automated check-ins, emails and reminders keep you front of mind. See all your history with them in one place: emails, calendar and more. One-click convert to a lead.",
    previewLabel: "Contacts",
    previewBg: "linear-gradient(135deg, var(--pine) 0%, var(--pine-400) 100%)",
  },
  {
    label: "First Contact Automation",
    heading: "Send personalised emails and schedule",
    body: "Send personalised emails to inbound leads automatically, or with one click if you prefer, to schedule discovery calls and warm them up.",
    previewLabel: "First Contact",
    previewBg: "linear-gradient(135deg, var(--indigo) 0%, var(--indigo-700) 100%)",
  },
  {
    label: "Meeting Prep",
    heading: "Turn up to your discovery call prepared",
    body: "Your pre-meeting brief, including company research, lands straight in your inbox before every call. Your transcript is then auto-imported so you can determine next steps without scrambling for notes.",
    previewLabel: "Meeting Brief",
    previewBg: "linear-gradient(135deg, var(--pine) 0%, var(--indigo) 100%)",
  },
  {
    label: "Document Workflow",
    heading: "Need to send a scope? Proposal? Agreement? Onboarding form?",
    body: "It is all managed within the system for smooth client onboarding. Stop worrying about when docs need to go out or when to follow up. You will get reminded when to send and can do it in one click. Follow-ups are sorted too. Need to send a second version? Too easy. You will see the full message history. Peace of mind and a freed-up day.",
    previewLabel: "Send Proposal",
    previewBg: "linear-gradient(135deg, var(--indigo) 0%, var(--pine) 100%)",
  },
  {
    label: "Pipeline Visibility",
    heading: "Stop wondering about your capacity or managing it in a spreadsheet",
    body: "Get full visibility. See your next available slot to schedule a project. Know exactly when to start filling the pipeline again before you come up for air and find an empty patch ahead.",
    previewLabel: "Pipeline Forecast",
    previewBg: "linear-gradient(135deg, var(--pine-800) 0%, var(--pine) 100%)",
  },
  {
    label: "Daily Direction",
    heading: "Always know what to work on",
    body: "Your Prioritisation Agent tells you the 3 highest-priority actions to take across your entire pipeline each day. Skip the digging. Go straight to action.",
    previewLabel: "Today's Priorities",
    previewBg: "linear-gradient(135deg, var(--indigo) 0%, var(--indigo-700) 100%)",
  },
  {
    label: "Deal Unsticker",
    heading: "Deal stuck?",
    body: "Your Sales Advisor Agent gives you on-demand advice on what action to take to move that specific opportunity forward. Your own sales advisor, without the commission.",
    previewLabel: "Sales Advisor",
    previewBg: "linear-gradient(135deg, var(--pine) 0%, var(--indigo) 100%)",
  },
  {
    label: "The Differentiator",
    heading: "Your own growth leader",
    body: "Think of the Tailwind platform as the sales assistant that never sleeps: pipeline management, outreach, documents, follow-ups, all handled. But strategy, judgement calls, and the bespoke work of growing a services business? That is Baidy's domain. As your embedded fractional growth leader, she works on the things that move the needle: channel partner strategy, target mapping, inbound engine development, deal reviews. Access to senior revenue expertise you would not otherwise get, without the full-time cost.",
    previewLabel: "Growth Leader",
    previewBg: "linear-gradient(150deg, var(--lime-600) 0%, var(--pine) 100%)",
    isKeyDifferentiator: true,
  },
  {
    label: "Onboarding",
    heading: "One-click migration and onboarding, and we do it for you",
    body: "Switching platforms is a painful chore you keep putting off. Not here. Import and migration are handled for you. Sign up, share one detail from your existing CRM, and the rest is done.",
    previewLabel: "One-Click Migration",
    previewBg: "linear-gradient(135deg, var(--indigo-700) 0%, var(--pine) 100%)",
  },
]

function FeatureJourneySection() {
  return (
    <section className="growth-journey section" id="journey">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <img className="star" src="/assets/logos/icon-fullcolour.svg" alt="" aria-hidden="true" />
            What working with Tailwind actually feels like
          </span>
          <h2 style={{ fontSize: 40, margin: "16px 0 0" }}>Day-to-day, this is what changes.</h2>
          <p>From keeping contacts warm to closing deals. From knowing your capacity to never losing sleep over the pipeline. Here is the journey, step by step.</p>
        </div>

        <div style={{ marginTop: 64 }}>
          {JOURNEY_ITEMS.map((item, i) => (
            <div
              key={item.heading}
              className="growth-journey-item"
              style={item.isKeyDifferentiator ? { background: "var(--indigo-050)", borderRadius: "var(--r-xl)", padding: "48px", border: "1px solid var(--indigo-100)", marginBottom: 0 } : {}}
            >
              <div className={i % 2 === 1 ? "growth-journey-text" : "growth-journey-text"}>
                <div className="growth-journey-label">{item.label}</div>
                <h3 style={item.isKeyDifferentiator ? { fontSize: 30, color: "var(--indigo)" } : {}}>
                  {item.heading}
                </h3>
                <p>{item.body}</p>
              </div>
              <div
                className="growth-journey-visual"
                aria-hidden="true"
                style={{ background: item.previewBg, order: i % 2 === 1 ? -1 : 1 }}
              >
                <span className="feature-name" style={{ color: "#fff" }}>{item.previewLabel}</span>
                <FeaturePreviewDots />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturePreviewDots() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%", maxWidth: 180 }} aria-hidden="true">
      {[72, 100, 58].map((w, i) => (
        <div
          key={i}
          style={{
            height: 6,
            borderRadius: 4,
            background: "rgba(255,255,255,0.35)",
            width: `${w}%`,
          }}
        />
      ))}
    </div>
  )
}

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
  },
  {
    name: "Contacts and Relationships",
    desc: "Keep referrers, your network and past clients in one place. See when you last checked in and turn a conversation into a tracked lead in one click.",
  },
  {
    name: "Help When You Need It",
    desc: "Searchable FAQs and short how-to videos built straight into the app. Get the answer in seconds, not a support queue.",
  },
  {
    name: "Growth Partner in Your Corner",
    desc: "Monthly strategy and accountability sessions plus on-demand support from an experienced revenue leader. Unlock the next stage of growth without adding headcount.",
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

          {/* Founder card */}
          <div className="growth-founder-card">
            <div className="growth-founder-photo-wrap">
              <img
                src="/assets/images/founder-baidy.jpg"
                alt="Baidy, Founder of Tailwind Growth"
              />
            </div>
            <div>
              <span className="founder-role">Founder and Fractional Growth Leader</span>
              <h4>Baidy</h4>
              <p>
                15 years building revenue for B2B businesses as a Commercialisation Director, Chief Revenue Officer, Investor and Partner at a global professional services firm. Baidy is not a consultant who observes from the sideline. She is an embedded member of your team every month, working in your pipeline with you and executing the bespoke strategy that software alone cannot deliver.
              </p>
              <p style={{ marginTop: 16 }}>
                <strong style={{ color: "var(--midnight)" }}>Her investment in your success is not a sales pitch. It is how the model works.</strong>
              </p>
            </div>
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
        <TrustBar />
        <FeatureJourneySection />
        <FeaturesGridSection />
        <WhyTailwindSection />
        <BottomCtaSection />
      </main>
      <Footer />
    </>
  )
}
