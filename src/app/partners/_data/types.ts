// Partner referral program — layer 2 (partner-type presets) plus the shape of
// a partner (layer 3). See Tailwind-Website/partner-program/PARTNER-PROGRAM-BUILD-PLAN.md.
//
// Copy can use two placeholders, filled per partner by fill():
//   {partner}   → the partner's display name, e.g. "Lighter Capital"
//   {readyWord} → the partner type's outcome, e.g. "funding-ready"

export type PartnerType = 'funder';
// 'advisor' (bookkeepers, accountants) gets added with the first advisor partner.

export type Stat = { n: string; l: string };

export type TypePreset = {
  readyWord: string;
  hero: { headline: string; headlineAccent: string; promise: string };
  gap: { eyebrow: string; heading: string; body: string };
  why: { heading: string; tiles: Stat[]; closing: string };
};

export type ReferralField = { field: string; tags: string[]; note?: string };

export type ListingField = { label: string; value: string };

export type Partner = {
  slug: string;
  name: string;
  type: PartnerType;
  contactName: string;
  referredNoun: string; // what the partner calls the people they refer
  portalRef: string; // ?ref= value used on the partner's directory listing
  whoFor: string[];
  notFor: string[];
  referralProfile: ReferralField[];
  messages: { sentence: string; email: string; short: string };
  listing: { fields: ListingField[]; longBlurb: string };
};

export const PRESETS: Record<PartnerType, TypePreset> = {
  funder: {
    readyWord: 'funding-ready',
    hero: {
      headline: 'Close the gap between promising and',
      headlineAccent: 'fundable.',
      promise:
        "A call with a growth expert to find what's holding your revenue back, and what it'll take to get funding-ready.",
    },
    gap: {
      eyebrow: "Where you're at",
      heading: 'The gap is smaller than it feels.',
      body:
        'Whether {partner} has said "not yet" or you\'re getting ready before you apply, here\'s the good news: the gap between promising and fundable is usually smaller than it feels, and almost always within your control. Funding isn\'t the goal. It\'s the fuel for the goal. Let\'s find what\'s in the way, and clear it.',
    },
    // Why Baidy: proof tiles carry the facts once each, the closing line says
    // what it means for the founder. No Jaegersoft MRR tile here: the
    // testimonial straight after this section already says it.
    why: {
      heading: "I've sat on both sides of the table.",
      tiles: [
        { n: '$200K → $12M ARR', l: 'As CRO of a B2B SaaS company: 7 to 60 people in three years, with equity raises along the way' },
        { n: '150+', l: 'Startups and scaleups taken through programs built for growth and investment readiness' },
        { n: 'Funder side', l: 'Investor due diligence on early and growth-stage hardware companies, and helping hardware businesses secure debt funding' },
        { n: '15 years', l: 'Of B2B growth leadership across software, professional services and emerging tech' },
      ],
      closing:
        'So I know what funders look for, and I know how to build the revenue engine that gets you there. Now, as a fractional CRO, I help founders do exactly that, without hiring a full-time sales leader.',
    },
  },
};

export function fill(text: string, partner: Partner): string {
  return text
    .replaceAll('{partner}', partner.name)
    .replaceAll('{readyWord}', PRESETS[partner.type].readyWord);
}
