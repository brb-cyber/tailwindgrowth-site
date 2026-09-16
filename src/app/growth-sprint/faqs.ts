// Plain data module (no "use client") so both the client-side accordion
// (FaqSection.tsx) and the server-rendered page (page.tsx, for FAQPage JSON-LD)
// can import the same content without crossing the client/server boundary.
//
// Content confirmed final by Baidy — from the scaffold's listed questions, in her voice.

export const GROWTH_SPRINT_FAQS = [
  {
    q: 'Why should I part with my money and time for this?',
    a: "Because the alternative is doing what you've probably been doing: waiting for the phone to ring and hoping this quarter's better than last. Five sessions and $625 is a lot cheaper than another year of feast and famine, and you leave with an actual system, not just a pep talk.",
  },
  {
    q: "Can't I just use AI for this?",
    a: "You could... but you'd get a long and waffly strategy that isn't fit for purpose for your business or market (AI models are geared to international and US markets which don't translate here), you wouldn't get to connect with an amazing community of business owners at the same stage, and you wouldn't get an expert to hold you to account and help you implement the growth strategy.",
  },
  {
    q: 'What makes you qualified to run this?',
    a: "I've built revenue functions from scratch, not just written about them. I took a SaaS company from $200K to $12M ARR in three years. I built a national practice from nothing at PKF (top 10 professional services firm). And I've run structured growth programs for 150+ startups and scaleups. I've done the thing, I'm not teaching from a textbook. The biggest thing? I actually care about your business and making sure you get results. I'm invested in your success, you aren't just another number.",
  },
  {
    q: 'What if I miss a session?',
    a: "Life happens. Talk to me and we'll figure out how to get you caught up — that might mean a quick catch-up call or working through that session's materials in your own time before the next one.",
  },
  {
    q: 'Is this a one-off, or is there ongoing support?',
    a: 'Both, kind of. The five sessions are the sprint. What actually makes it stick is the three months of monthly accountability sessions afterwards, all included within the program.',
  },
  {
    q: 'My business is really small, is this still for me?',
    a: "Yes! The program is built to work whether you're a sole operator or running a small team. The scale of what you build changes, the process doesn't.",
  },
  {
    q: 'I run a product business. Is this program for me?',
    a: 'Yes, absolutely! As long as you identify as a B2B business (ie your customers are other businesses), this program will equip you with everything you need to grow.',
  },
  {
    q: 'I started my business this year. Is this program for me?',
    a: "Yes, it absolutely is. Now is the right time to take a step back and evaluate your progress to date, shape your growth strategy and get tactical support to take it to the next level. This is also the best place to come and build your community of fellow business owners at similar stages in their journey. It'll be the best decision you make all year.",
  },
  {
    q: "I can't attend in-person but I really want to be part of the program. Can I still join the program?",
    a: "Yes! Even though it'd be great for you to meet everyone in person, we appreciate that location and distance can make that hard, and we want to make this program to accessible to as many people as possible. Please signup and we'll see you online!",
  },
  {
    q: "I've launched my own fractional business. Is this program for me?",
    a: "Yes, absolutely! I've been in your shoes. This is the perfect program for you to implement systems and structure to grow your fractional business into one that's sustainable, scalable, enduring and one you love.",
  },
  {
    q: 'How do I get there? Is there parking?',
    a: 'If you\'re attending face-to-face, head up to <a href="https://share.google/kUX217yghEw7e9bfN" target="_blank" rel="noopener noreferrer">Dashworks</a>, check in upstairs at reception and they\'ll take you through to the room where the magic will happen. Parking is easy too! You can park for free for up to 3 hours at Charlestown Square. Enter the car park closest to Dashworks for the shortest walk.',
  },
  {
    q: "I'm attending online. How do I access the sessions?",
    a: "We'll share the videoconference details in the lead up to the program kick-off. Stay tuned.",
  },
]
