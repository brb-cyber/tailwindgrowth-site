import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import Testimonials from "../../components/Testimonials"
import BookButton from "../_components/BookButton"
import PartnerFaq from "../_components/PartnerFaq"
import { PARTNERS, getPartner } from "../_data"
import { AFTER_CALL, CALL_STEPS, FAQS, PARTNER_BOOK_URL } from "../_data/core"
import { PRESETS, fill, type Partner } from "../_data/types"

// Partner offer page: where a partner's prospects (staff referrals and the
// partner's self-serve directory) book a complimentary call. noindex, and not
// linked from the nav, footer or sitemap. Spec and build plan live in
// Tailwind-Website/partner-program/.

export const dynamicParams = false

export function generateStaticParams() {
  return PARTNERS.map((p) => ({ partner: p.slug }))
}

export function generateMetadata({ params }: { params: { partner: string } }): Metadata {
  const partner = getPartner(params.partner)
  if (!partner) return {}
  const title = `Get fundable with ${partner.name} | Tailwind Growth`
  const description = fill(PRESETS[partner.type].hero.promise, partner)
  return {
    title,
    description,
    robots: { index: false, follow: false },
    openGraph: {
      type: "website",
      siteName: "Tailwind Growth",
      title,
      description,
      images: [{ url: "/assets/images/team-office.jpg", width: 1200, height: 630, alt: "Tailwind Growth" }],
    },
  }
}

const CTA_LABEL = "Book your complimentary call"

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeroSection({ partner }: { partner: Partner }) {
  const { hero } = PRESETS[partner.type]
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
          {/* v1: partner name in text only, no logo until permission is confirmed */}
          <span className="eyebrow on-dark">
            <img className="star" src="/assets/logos/icon-lime.svg" alt="" aria-hidden="true" />
            In partnership with {partner.name}
          </span>
          <h1 className="growth-hero-h1">
            {hero.headline} <span style={{ color: "var(--lime)" }}>{hero.headlineAccent}</span>
          </h1>
          <p className="growth-hero-lead partner-hero-lead">{fill(hero.promise, partner)}</p>
          <div className="growth-hero-cta">
            <BookButton href={PARTNER_BOOK_URL} partner={partner.slug} label={CTA_LABEL} />
          </div>
          <p className="partner-hero-meta">45 minutes · Complimentary · Nothing to prepare</p>
        </div>
      </div>
    </section>
  )
}

// ─── The gap ─────────────────────────────────────────────────────────────────

function GapSection({ partner }: { partner: Partner }) {
  const { gap } = PRESETS[partner.type]
  return (
    <section className="section" id="gap">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <img className="star" src="/assets/logos/icon-fullcolour.svg" alt="" aria-hidden="true" />
            {gap.eyebrow}
          </span>
          <h2 style={{ margin: "16px 0 0" }}>{gap.heading}</h2>
          <p className="sprint-pullquote">{fill(gap.body, partner)}</p>
        </div>
      </div>
    </section>
  )
}

// ─── What happens on the call ────────────────────────────────────────────────

function CallSection({ partner }: { partner: Partner }) {
  return (
    <section className="section tint" id="the-call">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <img className="star" src="/assets/logos/icon-fullcolour.svg" alt="" aria-hidden="true" />
            The call
          </span>
          <h2 style={{ margin: "16px 0 0" }}>What happens on the call.</h2>
          <p>45 minutes. Nothing to prepare. Just bring your business.</p>
        </div>
        <div className="steps">
          {CALL_STEPS.map((s, i) => (
            <div className="step" key={s.title}>
              <div className="n">{i + 1}</div>
              <h4>{s.title}</h4>
              <p>{fill(s.body, partner)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── What happens after ──────────────────────────────────────────────────────

function AfterSection({ partner }: { partner: Partner }) {
  return (
    <section className="section" id="after">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <img className="star" src="/assets/logos/icon-fullcolour.svg" alt="" aria-hidden="true" />
            After the call
          </span>
          <h2 style={{ margin: "16px 0 0" }}>Then it&apos;s your call.</h2>
          <p>
            Run with it yourself, or work on it together. Either way, when you&apos;re close to {partner.name}&apos;s
            criteria, you go back to them ready.
          </p>
        </div>
        <div className="growth-why-grid">
          {AFTER_CALL.map((a) => (
            <div className="growth-why-card" key={a.title}>
              <h4>{a.title}</h4>
              <p>{fill(a.body, partner)}</p>
              {a.price && <p className="partner-price">{a.price}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Who it's for ────────────────────────────────────────────────────────────

function WhoForSection({ partner }: { partner: Partner }) {
  return (
    <section className="section tint" id="who">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <img className="star" src="/assets/logos/icon-fullcolour.svg" alt="" aria-hidden="true" />
            Is this you?
          </span>
          <h2 style={{ margin: "16px 0 0" }}>Who this is for.</h2>
        </div>
        <div className="cro-who-grid">
          <div className="cro-who-col">
            <h4>This is for you if...</h4>
            <ul>
              {partner.whoFor.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="cro-who-col cro-who-col--not">
            <h4>This probably isn&apos;t for you if...</h4>
            <ul>
              {partner.notFor.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Why Baidy ───────────────────────────────────────────────────────────────

function WhyBaidySection({ partner }: { partner: Partner }) {
  const { why } = PRESETS[partner.type]
  return (
    <section className="section" id="why-me">
      <div className="container">
        <div className="section-head partner-why-head">
          <span className="eyebrow">
            <img className="star" src="/assets/logos/icon-fullcolour.svg" alt="" aria-hidden="true" />
            Why Baidy
          </span>
          <h2 style={{ margin: "16px 0 0" }}>{why.heading}</h2>
        </div>
        <div className="partner-why">
          <div className="partner-why-person">
            <div className="growth-founder-photo-wrap">
              <img src="/assets/images/founder-baidy.jpg" alt="Baidy, founder of Tailwind Growth" />
            </div>
            <div>
              <span className="founder-role">Fractional CRO, Tailwind Growth</span>
              <h4>Baidy Barton</h4>
            </div>
          </div>
          <div className="partner-why-tiles">
            {why.tiles.map((t) => (
              <div className="growth-why-card" key={t.n}>
                <div className="disp">{t.n}</div>
                <p>{t.l}</p>
              </div>
            ))}
            <div className="growth-why-card partner-why-closing">
              <p>{fill(why.closing, partner)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CTA (bottom) ────────────────────────────────────────────────────────────

function CtaSection({ partner }: { partner: Partner }) {
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
          Let&apos;s see what we can<br />
          <span style={{ color: "var(--lime)" }}>unlock.</span>
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--fg-invert-2)", maxWidth: 460, margin: "0 auto 28px" }}>
          You&apos;ve got nothing to lose. 45 minutes, complimentary, and nothing to prepare.
        </p>
        <BookButton href={PARTNER_BOOK_URL} partner={partner.slug} label={CTA_LABEL} />
      </div>
    </section>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function PartnerOfferPage({ params }: { params: { partner: string } }) {
  const partner = getPartner(params.partner)
  if (!partner) notFound()
  const faqs = FAQS.map((f) => ({ q: fill(f.q, partner), a: fill(f.a, partner) }))

  return (
    <>
      <Nav bookUrl={PARTNER_BOOK_URL} />
      <main>
        <HeroSection partner={partner} />
        <GapSection partner={partner} />
        <CallSection partner={partner} />
        <AfterSection partner={partner} />
        <WhoForSection partner={partner} />
        <WhyBaidySection partner={partner} />
        {/* Shared homepage testimonials; the wrapper tints it so sections keep alternating */}
        <div className="partner-testimonials">
          <Testimonials />
        </div>
        <PartnerFaq faqs={faqs} />
        <CtaSection partner={partner} />
      </main>
      <Footer />
    </>
  )
}
