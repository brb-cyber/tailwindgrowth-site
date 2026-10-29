// Partner referral program — layer 1 (Tailwind core): the same for every partner.
// Copy confirmed by Baidy in the spec and build plan (2026-10-21).

export const SITE = 'https://tailwindgrowth.ai';
export const CONTACT_EMAIL = 'baidy@tailwindgrowth.ai';

// Shared "Partner referral" schedule: 45 mins, name + email only (no intake
// questions, by design, so attribution comes from ?ref= in GA4 plus asking
// "how did you find me?" on the call).
export const PARTNER_BOOK_URL = 'https://calendar.app.google/C69VLgThCxx5DSNw6';

export const CALL_STEPS = [
  {
    title: 'Understand your business',
    body: "Where it's at today, and the goals and targets you're working towards.",
  },
  {
    title: 'Diagnose the blocker',
    body: "Pinpoint what's standing between you and getting {readyWord}.",
  },
  {
    title: 'Walk through the scorecard',
    body:
      "I'll show you how funders score a business like yours. After the call, I'll send you the scorecard so you can score your own business and pick your top 3 moves.",
  },
];

export const AFTER_CALL = [
  {
    title: 'Do it yourself, with a head start',
    body:
      'A 90-minute session to go through your scorecard, lock in your highest-priority actions and work out the numbers to hit.',
    price: '$295 + GST',
  },
  {
    title: 'Do it together',
    body:
      'Hands-on support over 3 to 6 months to build the revenue engine and get {readyWord}, scoped to your stage and paid monthly.',
  },
];

export const FAQS = [
  {
    q: 'Is the call really free? What\'s the catch?',
    a: "Absolutely, no catch. When you win, we all win. I'm happy to have a 45-minute chat with anyone looking to grow. If we gel and I can add value down the track, that's a bonus.",
  },
  {
    q: 'What am I going to get out of it?',
    a: "A clear picture of what's holding your growth back, from someone who's built revenue engines from the inside. We'll talk about where your business is at and where you want it to go, pinpoint the blocker, and I'll walk you through the scorecard funders would use on you. After the call, I'll send you the scorecard so you can score your business yourself and pick your top 3 moves. Whatever you decide to do next, you'll know what to work on first.",
  },
  {
    q: 'Is this a sales pitch?',
    a: "Nope. It's a chance for me to learn about your business, what's blocking your growth, and how to get you {readyWord}.",
  },
  {
    q: 'Does {partner} see what we talk about?',
    a: "Nope, not a thing. What we talk about stays between us. You're welcome to share anything from our chat with {partner}, of course.",
  },
  {
    q: 'Do I have to work with you after the call?',
    a: "Of course not. Ideally, you'll leave the call with the insight you need to get {readyWord} and run with it yourself. If you'd like extra support, guidance and accountability to get there, I can help with that.",
  },
  {
    q: 'Is this financial advice?',
    a: "No. It's growth and revenue readiness. I leave financial advice to the professionals.",
  },
];

export const SHARE = {
  // Two lines: headline / headlineLine2 + headlineAccent (lime)
  headline: 'Thanks for thinking',
  headlineLine2: 'of',
  headlineAccent: 'Tailwind.',
  intro:
    "Everything you need is on this page: what to say, what to send, and who's a good fit. Copy, paste, done.",
  steps: [
    {
      title: "Spot a founder who's close",
      body: 'Not quite there on your criteria yet, or an existing customer who wants to grow faster.',
    },
    {
      title: 'Send the link or the message',
      body: 'Copy it below. Takes about 30 seconds.',
    },
    {
      title: 'They come back ready',
      body: "Baidy helps them build the revenue engine. When they're closer to your criteria, they come back to you.",
    },
  ],
  loopBack:
    "If I've met with someone you referred and they're happy for me to, I'll send you a short email heads-up on how they're tracking, especially when they're getting close to your criteria. Otherwise, what we talk about stays between us.",
};
