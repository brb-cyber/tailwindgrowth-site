import { Eyebrow } from './Nav';

// Single source of truth for both testimonials — imported as-is on the
// homepage and reused verbatim on /growth-sprint/. Quotes are condensed
// from clients' own raw feedback (an email, in Lisa's case), not written
// fresh. See BUILT-TO-GROW-SPRINT-LANDING-PAGE-SPEC-TEMPLATE.md Section 13/14
// for source material and sign-off status.
const TESTIMONIALS = [
  {
    quote:
      "Tailwind formulated our growth strategy and automated a pipeline that used to be manually driven and admin heavy, freeing up leadership capacity for revenue-generating work. We saw immediate results: MRR up 40% in the first quarter.",
    name: 'Vivek Jayachandran',
    role: 'Managing Director',
    company: 'Jaegersoft',
    photo: '/assets/images/vivek-jayachandran.png',
    logo: '/assets/logos/clients/jaegersoft.svg',
  },
  {
    quote:
      "I love the comprehensiveness of the structured sessions. Staying broad helps me test the big assumptions, and once that's clearer, we go narrow. The energy, open mind and clarity is terrific, it's precisely what I needed.",
    name: 'Lisa Main',
    role: 'Founder',
    company: 'Main Bureau',
    photo: '/assets/images/lisa-main.png',
    // Source photo has her positioned right-of-centre in a wide frame — the
    // default center-center crop pushes her further right still. Shifted to
    // land on her actual face position.
    avatarPosition: '78% center',
    logo: '/assets/logos/clients/main-bureau.webp',
    // Main Bureau only supplied a light/reverse-colour wordmark (near-invisible
    // on a white card) — same situation as the Business Centre logo on the
    // Sprint page's Supporters banner, fixed the same way: a small dark chip.
    logoOnDark: true,
  },
]

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-head">
          <Eyebrow>Client results</Eyebrow>
          <h2 style={{ margin: '16px 0 0' }}>Don&apos;t take our word for it.</h2>
        </div>
        <div className="testimonial-grid">
          {TESTIMONIALS.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-person">
                <img
                  className="testimonial-avatar"
                  src={t.photo}
                  alt={t.name}
                  style={t.avatarPosition ? { objectPosition: t.avatarPosition } : undefined}
                />
                <div>
                  <p className="testimonial-name">{t.name}</p>
                  <p className="testimonial-role">{t.role}, {t.company}</p>
                </div>
                {t.logoOnDark ? (
                  <span className="testimonial-logo-chip">
                    <img className="testimonial-logo" src={t.logo} alt={t.company} />
                  </span>
                ) : (
                  <img className="testimonial-logo" src={t.logo} alt={t.company} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
