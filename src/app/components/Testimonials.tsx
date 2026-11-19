import { Eyebrow } from './Nav';

// Single source of truth for every testimonial. Rendered on the homepage,
// /growth-sprint/, /fractional-cro/ and the partner pages. Quotes are
// condensed from people's own words (an email, a call transcript, a LinkedIn
// post), not written fresh. See BUILT-TO-GROW-SPRINT-LANDING-PAGE-SPEC-TEMPLATE.md
// Section 13/14 for source material and sign-off status.
//
// Clients come first; program-partner endorsements (`partner: true`) go after
// them and are left off the partner referral pages, so one partner's
// endorsement doesn't appear on another partner's page.
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
    // Condensed from the Growth Engine Monthly call, 9 Nov 2026. Approved by
    // Dan, including the 20% half-year revenue figure (Nov 2026).
    quote:
      "When we started I was drowning, and Baidy was the lifeboat I needed. She helped me rethink our pricing before a major client negotiation, and that deal alone paid for her. Since then we've seen a 20% uplift in half-year revenue.",
    name: 'Dan Godden',
    role: 'Director',
    company: 'SolveSimple',
    photo: '/assets/images/dan-godden.avif',
    logo: '/assets/logos/clients/solvesimple.avif',
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
    // on a white card), so it sits in a small dark chip.
    logoOnDark: true,
  },
  {
    // Built from Tim's LinkedIn post on the Sprint (Nov 2026), plus the 2027
    // co-funding agreed on 18 Nov 2026. Approved by Tim, including publishing
    // the 2027 commitment (Nov 2026). The supplied Dantia SVG has white lettering
    // (dark-background version); dantia.svg is a copy with those letters set
    // to Dantia navy (#021D41). The Supporters-banner PNG is too padded to
    // read at card-logo size.
    quote:
      "Through the Built to Grow Sprint, Tailwind is helping our first cohort of 14 local business owners strengthen their sales capability, build better pipelines and win more work. That's why we're co-funding the program again in 2027: more successful businesses means a stronger local economy.",
    name: 'Tim Browne',
    role: 'CEO',
    company: 'Dantia',
    photo: '/assets/images/tim-browne.webp',
    logo: '/assets/logos/clients/dantia.svg',
    partner: true,
  },
]

export default function Testimonials({ includePartners = true }: { includePartners?: boolean }) {
  const testimonials = includePartners ? TESTIMONIALS : TESTIMONIALS.filter((t) => !t.partner)
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-head">
          <Eyebrow>Client results</Eyebrow>
          <h2 style={{ margin: '16px 0 0' }}>Don&apos;t take our word for it.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t) => (
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
