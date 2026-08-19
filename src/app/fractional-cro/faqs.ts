// Plain data module (no "use client") so both the client-side accordion
// (FaqSection.tsx) and the server-rendered page (page.tsx, for FAQPage JSON-LD)
// can import the same content without crossing the client/server boundary.

export const FRACTIONAL_CRO_FAQS = [
  {
    q: 'What does a fractional CRO do?',
    a: "A fractional Chief Revenue Officer (or fractional growth leader) is a senior revenue leader who works with your business part time or embedded, covering everything from strategy to hands-on execution across the whole customer lifecycle: getting found, winning new work, onboarding clients well, and keeping them for the long run. You get the expertise of a full-time CRO without the full-time cost.",
  },
  {
    q: 'Is a fractional CRO the same as a fractional growth leader?',
    a: 'Yes. At Tailwind Growth we use the terms interchangeably. Fractional CRO is the more familiar title if you’ve come from a corporate or scaled-business background. Fractional growth leader is how we describe the same role day to day: someone embedded in your business, driving growth strategy and execution, without the full-time headcount.',
  },
  {
    q: 'Is this just about winning new work, or does it cover more than that?',
    a: 'More than that. A fractional CRO covers the whole customer lifecycle: awareness and go-to-market, winning new work, onboarding, retention and account growth, referrals and partnerships, and the systems and data (RevOps) that hold it all together.',
  },
  {
    q: 'How much time will this take each month?',
    a: 'It depends on what you need. Some clients want a monthly strategy and accountability session. Others want embedded, retained support closer to a part-time team member. We shape the cadence around your business, not a fixed package.',
  },
  {
    q: 'How is this different from hiring a full-time CRO?',
    a: "A full-time CRO is a significant salary commitment most businesses under $5M in revenue can't justify yet. A fractional CRO gives you the same calibre of strategic and hands-on support, scaled to what your business actually needs and can afford right now, and able to flex up as you grow.",
  },
  {
    q: 'What size business is a fractional CRO right for?',
    a: "Typically founder-led B2B professional services businesses, from sole trader up to around 8 people, doing between $200K and $5M in revenue, who've grown mainly through referrals and are ready for something more consistent.",
  },
  {
    q: 'How do I get started?',
    a: "Book a call. We'll talk through where your business is at and where you want it to go, and map out what working together could look like. No pitch, no pressure.",
  },
]
