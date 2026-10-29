import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Nav from "../../../components/Nav"
import Footer from "../../../components/Footer"
import CopyButton from "../../_components/CopyButton"
import { PARTNERS, getPartner, offerUrl } from "../../_data"
import { CONTACT_EMAIL, PARTNER_BOOK_URL, SHARE } from "../../_data/core"
import type { Partner } from "../../_data/types"

// Partner share page: everything the partner's staff need to refer, with Copy
// and Download buttons (modelled on investrural.com.au/share). noindex and
// unlinked; the partner contact gets this URL by email.

export const dynamicParams = false

export function generateStaticParams() {
  return PARTNERS.map((p) => ({ partner: p.slug }))
}

export function generateMetadata({ params }: { params: { partner: string } }): Metadata {
  const partner = getPartner(params.partner)
  if (!partner) return {}
  return {
    title: `Partner share kit: ${partner.name} | Tailwind Growth`,
    description: `Everything ${partner.name} needs to refer founders to Tailwind Growth: what to say, what to send, and who's a good fit.`,
    robots: { index: false, follow: false },
  }
}

const JUMP_LINKS = [
  { id: "links", label: "The links" },
  { id: "say", label: "What to say" },
  { id: "send", label: "What to send" },
  { id: "who", label: "Who to refer" },
  { id: "listing", label: "Directory listing" },
  { id: "next", label: "What happens next" },
  { id: "logos", label: "Logos" },
]

function Card({ title, note, text, copyLabel }: { title: string; note?: string; text: string; copyLabel?: string }) {
  return (
    <div className="share-card">
      <div className="share-card-head">
        <div>
          <h4>{title}</h4>
          {note && <p className="share-card-note">{note}</p>}
        </div>
        <CopyButton text={text} label={copyLabel} />
      </div>
      <p className="share-card-text">{text}</p>
    </div>
  )
}

function SectionHead({ id, eyebrow, title, intro }: { id: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-head share-head" id={id}>
      <span className="eyebrow">
        <img className="star" src="/assets/logos/icon-fullcolour.svg" alt="" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 style={{ margin: "16px 0 0" }}>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  )
}

// ─── Intro + how to refer ────────────────────────────────────────────────────

function IntroSection({ partner }: { partner: Partner }) {
  return (
    <section className="growth-hero" id="top" style={{ padding: "96px 0 80px" }}>
      <div className="container">
        <div className="growth-hero-inner">
          <span className="eyebrow on-dark">
            <img className="star" src="/assets/logos/icon-lime.svg" alt="" aria-hidden="true" />
            Partner share kit · {partner.name}
          </span>
          <h1 className="growth-hero-h1">
            {SHARE.headline}
            <br />
            {SHARE.headlineLine2} <span style={{ color: "var(--lime)" }}>{SHARE.headlineAccent}</span>
          </h1>
          <p className="growth-hero-lead">{SHARE.intro}</p>
        </div>
      </div>
    </section>
  )
}

function StepsSection() {
  return (
    <section className="section tint" style={{ padding: "72px 0" }}>
      <div className="container">
        <SectionHead id="how" eyebrow="How to refer" title="Three steps. That's it." />
        <div className="steps">
          {SHARE.steps.map((s, i) => (
            <div className="step" key={s.title}>
              <div className="n">{i + 1}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
        <nav className="share-jump" aria-label="Jump to">
          {JUMP_LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`}>{l.label}</a>
          ))}
        </nav>
      </div>
    </section>
  )
}

// ─── The links ───────────────────────────────────────────────────────────────

function LinksSection({ partner }: { partner: Partner }) {
  const qrBase = `/partners/${partner.slug}/qr-offer-page`
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          id="links"
          eyebrow="The links"
          title="Book a call, or find out more."
          intro="The booking link is the fastest route: one click and they're booking. The landing page has more detail if they'd like to read up first."
        />
        <div className="share-grid">
          <Card title="Booking link" note="Straight to Baidy's calendar. 45 minutes, complimentary." text={PARTNER_BOOK_URL} copyLabel="Copy link" />
          <Card title="Landing page (more details)" note="Good for your portal, newsletters, or anyone who wants to read first." text={offerUrl(partner)} copyLabel="Copy link" />
        </div>
        <div className="share-card share-qr">
          <img src={`${qrBase}.png`} alt={`QR code linking to ${offerUrl(partner)}`} />
          <div>
            <h4>QR code</h4>
            <p className="share-card-note">Links to the landing page. Handy for slides, events or print.</p>
            <div className="share-downloads">
              <a className="share-copy-btn" href={`${qrBase}.png`} download>Download PNG</a>
              <a className="share-copy-btn" href={`${qrBase}.svg`} download>Download SVG</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── What to say / send ──────────────────────────────────────────────────────

function MessagesSection({ partner }: { partner: Partner }) {
  return (
    <section className="section tint">
      <div className="container">
        <SectionHead id="say" eyebrow="What to say" title="The one-liner." intro="For when you're on a call with a founder who isn't quite there yet." />
        <div style={{ marginTop: 40 }}>
          <Card title="Say this" text={partner.messages.sentence} />
        </div>

        <div style={{ marginTop: 88 }}>
          <SectionHead id="send" eyebrow="What to send" title="Ready-to-send messages." intro="Swap in their name and yours, and hit send." />
        </div>
        <div className="share-grid" style={{ gridTemplateColumns: "1.4fr 1fr" }}>
          <Card title="Email" text={partner.messages.email} />
          <Card title="LinkedIn or text message" text={partner.messages.short} />
        </div>
      </div>
    </section>
  )
}

// ─── Who to refer ────────────────────────────────────────────────────────────

function WhoSection({ partner }: { partner: Partner }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          id="who"
          eyebrow="Who to refer"
          title="Who's a good fit."
          intro="Fixed tags, so you can filter and search. Download the CSV to import Baidy's profile into your CRM or partner database."
        />
        <div className="share-downloads" style={{ marginTop: 28 }}>
          <a className="share-copy-btn" href={`/partners/${partner.slug}/referral-profile.csv`} download={`tailwind-growth-${partner.slug}-referral-profile.csv`}>
            Download CSV
          </a>
        </div>
        <div className="share-table-wrap">
          <table className="share-table">
            <thead>
              <tr><th>Field</th><th>Tags</th></tr>
            </thead>
            <tbody>
              {partner.referralProfile.map((f) => (
                <tr key={f.field}>
                  <td>{f.field}</td>
                  <td>
                    <div className="share-tags">
                      {f.tags.map((t) => <span key={t}>{t}</span>)}
                    </div>
                    {f.note && <p className="share-card-note" style={{ marginTop: 10 }}>{f.note}</p>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

// ─── Directory listing ───────────────────────────────────────────────────────

function ListingSection({ partner }: { partner: Partner }) {
  return (
    <section className="section tint">
      <div className="container">
        <SectionHead
          id="listing"
          eyebrow="Directory listing"
          title="Baidy's listing for your portal."
          intro="Copy each field into your partner directory. Edit as much as you like to fit your format."
        />
        <div className="share-grid">
          {partner.listing.fields.map((f) => (
            <Card key={f.label} title={f.label} text={f.value} />
          ))}
          <Card title="Long blurb" text={partner.listing.longBlurb} />
        </div>
        <div className="share-downloads" style={{ marginTop: 24 }}>
          <a className="share-copy-btn" href="/assets/images/founder-baidy.jpg" download="baidy-barton-headshot.jpg">Download headshot</a>
          <a className="share-copy-btn" href="/assets/logos/logo-feature-fullcolour.png" download="tailwind-growth-logo.png">Download logo</a>
        </div>
      </div>
    </section>
  )
}

// ─── What happens next ───────────────────────────────────────────────────────

function NextSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead id="next" eyebrow="What happens next" title="The loop back to you." />
        <p className="sprint-pullquote">{SHARE.loopBack}</p>
      </div>
    </section>
  )
}

// ─── Logos + contact ─────────────────────────────────────────────────────────

const LOGOS = [
  { label: "Logo (dark, for light backgrounds)", src: "/assets/logos/logo-main-black.svg", dark: false },
  { label: "Logo (white, for dark backgrounds)", src: "/assets/logos/logo-main-white.svg", dark: true },
]

function LogosSection() {
  return (
    <section className="section tint">
      <div className="container">
        <SectionHead
          id="logos"
          eyebrow="Logos"
          title="The Tailwind Growth logo."
          intro="Use the dark logo on light backgrounds and the white logo on dark ones. Please don't stretch, recolour or add effects."
        />
        <div className="share-grid">
          {LOGOS.map((l) => (
            <div className="share-card" key={l.src}>
              <div className={"share-logo-preview" + (l.dark ? " dark" : "")}>
                <img src={l.src} alt="Tailwind Growth" />
              </div>
              <div className="share-card-head" style={{ marginTop: 18 }}>
                <h4>{l.label}</h4>
                <a className="share-copy-btn" href={l.src} download>Download</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="growth-bottom-cta" style={{ padding: "80px 0" }}>
      <div className="container">
        <h2 className="disp" style={{ fontSize: 48, color: "#fff", marginBottom: 16 }}>
          Questions? <span style={{ color: "var(--lime)" }}>Just ask.</span>
        </h2>
        <p style={{ fontSize: 18, color: "var(--fg-invert-2)", margin: 0 }}>
          Baidy Barton · <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "var(--lime)" }}>{CONTACT_EMAIL}</a>
        </p>
      </div>
    </section>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function PartnerSharePage({ params }: { params: { partner: string } }) {
  const partner = getPartner(params.partner)
  if (!partner) notFound()

  return (
    <>
      <Nav bookUrl={PARTNER_BOOK_URL} />
      <main>
        <IntroSection partner={partner} />
        <StepsSection />
        <LinksSection partner={partner} />
        <MessagesSection partner={partner} />
        <WhoSection partner={partner} />
        <ListingSection partner={partner} />
        <NextSection />
        <LogosSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
