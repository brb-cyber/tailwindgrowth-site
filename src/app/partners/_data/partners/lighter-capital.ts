// Partner referral program — layer 3: Lighter Capital (pilot partner).
// Source: partner-program/LIGHTER-CAPITAL-LANDING-PAGE-SPEC-TEMPLATE.md, Part D.
// v1 is for Kylie's review: LC's name in text only, no LC logo until permission
// is confirmed on that call.

import type { Partner } from '../types';
import { PARTNER_BOOK_URL } from '../core';

export const lighterCapital: Partner = {
  slug: 'lighter-capital',
  name: 'Lighter Capital',
  type: 'funder',
  contactName: 'Kylie',
  referredNoun: 'prospects',
  portalRef: 'lc-portal',

  whoFor: [
    'You run a B2B SaaS, software, tech-enabled services, hardware or physical AI business',
    "You're building recurring revenue, but you're not quite where funders need you to be yet",
    'Sales still run through you, and you want a revenue engine that doesn\'t',
    'Your revenue is lumpy, concentrated or not yet recurring, and you want to fix that',
    "You're already funded and want to make that funding count",
  ],
  notFor: [
    "You don't have a product in market yet",
    'You mainly sell to consumers (B2C)',
    "You're happy staying exactly the size you are",
  ],

  // Shown as a table on the share page and exported as the CSV record.
  // Fixed tag values so LC can filter and search by them (spec D3).
  referralProfile: [
    {
      field: 'Segments',
      tags: ['B2B SaaS / software (incl. compliance & RegTech)', 'Hardware / physical & industrial AI', 'B2B services'],
    },
    { field: 'Business model', tags: ['SaaS / software', 'Hardware', 'Physical / industrial AI', 'Tech-enabled services'] },
    { field: 'Customer type', tags: ['B2B'] },
    {
      field: 'Revenue (ARR)',
      tags: ['<$100K ARR', '$100–200K ARR', '$200K+ ARR (other criteria not met)'],
      note: '$100–200K ARR is the sweet spot. $200K+ qualifies on revenue but is held back by concentration, steadiness or revenue that isn\'t recurring.',
    },
    {
      field: 'Recurring revenue share',
      tags: ['Mostly recurring', 'Mixed', 'Mostly one-off / project'],
      note: 'Lighter Capital counts recurring revenue only.',
    },
    { field: 'Revenue trend', tags: ['Growing', 'Flat', 'Lumpy / inconsistent', 'Declining'] },
    { field: 'Stage', tags: ['Early revenue', 'Product-market fit', 'Scaling'] },
    { field: 'Industry', tags: ['RegTech', 'Compliance', 'FinTech', 'ClimateTech', 'Industrial / hardware', 'Other'] },
    {
      field: 'Refer when (why not fundable yet)',
      tags: [
        'Below $200K ARR',
        'Revenue not recurring',
        'Revenue not steady',
        'Customer concentration',
        'Founder-led sales only',
        'No pipeline visibility',
        'High churn',
        'Other',
      ],
      note: 'The most useful field: it tells you when to refer.',
    },
  ],

  messages: {
    sentence:
      'Have a chat with Baidy at Tailwind Growth. She helps founders grow revenue in a way funders can back, and she\'ll have a complimentary chat.',
    email: `Hi [name],

Thanks again for chatting with us. We really like what you're building. You're not quite at the point where we can fund you yet, but you're not far off.

What usually makes the difference is revenue that's predictable and repeatable.

That's where Baidy at Tailwind Growth comes in. She's a fractional CRO who helps founders build the growth engine funders look for. Before Tailwind, she was CRO of a B2B software company and grew it from $200K to $12M ARR. She's offering you a complimentary session to score your business the way a funder would, find where you can pick up the most ground, and map out your top 3 moves.

Once your numbers are closer to where we need them, come back and let's have another chat.

Book a time here: ${PARTNER_BOOK_URL}

[Your name]`,
    short: `Hi [name], as promised: Baidy at Tailwind Growth is a fractional CRO who helps founders build the predictable revenue growth funders look for. She'll have a complimentary chat. ${PARTNER_BOOK_URL}`,
  },

  // Spec C5. Trimmed to LC's field limits once the portal's format is known.
  listing: {
    fields: [
      { label: 'Name', value: 'Baidy Barton, Tailwind Growth' },
      { label: 'Title', value: 'Fractional CRO' },
      { label: 'Category / speciality', value: 'Growth & revenue · Sales & go-to-market · Funding readiness' },
      {
        label: 'Short blurb',
        value:
          "Baidy is a fractional CRO who helps B2B founders build predictable, repeatable revenue that funders can back. Before Tailwind Growth, she was CRO of a B2B SaaS company, growing it from $200K to $12M ARR. Book a complimentary 45-minute call to find what's holding your growth back.",
      },
      { label: 'Offer', value: 'Complimentary 45-minute call' },
      {
        label: "Who it's for",
        value:
          "B2B SaaS / software (incl. compliance & RegTech), hardware and physical / industrial AI, and B2B services founders who want to grow revenue, whether you're getting funding-ready or making your funding count",
      },
      { label: 'Link', value: 'https://tailwindgrowth.ai/partners/lighter-capital/?ref=lc-portal' },
    ],
    longBlurb: `Funders back revenue that's predictable and repeatable: you know who your best customers are, sales don't all run through the founder, and the numbers show where growth is coming from. That's what Baidy helps B2B founders build.

Baidy is a fractional CRO and the founder of Tailwind Growth. Before Tailwind, she was CRO of a B2B SaaS company, growing it from $200K to $12M ARR and from 7 to 60 people in three years. She's taken 150+ startups and scaleups through structured programs for growth and investment readiness, done investor due diligence on hardware companies, helped hardware companies secure debt funding, and been part of equity raises at SaaS companies.

Whether you're working towards funding or want to make your funding count, book a complimentary 45-minute call. You'll get a clear view of what's holding your growth back and a scorecard to map your next moves.`,
  },
};
