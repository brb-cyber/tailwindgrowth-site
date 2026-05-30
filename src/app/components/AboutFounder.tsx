import { Eyebrow } from './Nav';

export default function AboutFounder() {
  return (
    <section className="section founder-sec" id="about">
      <div className="container founder">
        <div className="founder-visual">
          <img
            className="founder-photo"
            src="/assets/images/founder-baidy.jpg"
            alt="Baidy, founder of Tailwind Growth"
          />
          <div className="founder-overlay"></div>
          <img
            className="founder-mark"
            src="/assets/logos/icon-white.svg"
            alt=""
            aria-hidden="true"
          />
          <div className="founder-badge">
            <span className="fb-name">Baidy</span>
            <span className="fb-role">Founder, Tailwind Growth</span>
          </div>
        </div>
        <div>
          <Eyebrow>Why I built Tailwind</Eyebrow>
          <h2 className="disp">The system I wish I&apos;d had.</h2>
          <p className="founder-lead">
            For years I built high-growth businesses and lost my weekends to the admin of
            winning new work — chasing proposals, following up, prepping for calls.
          </p>
          <p className="founder-body">
            With ten things on the list, I was lucky to get through three, and sales always
            slipped to a future problem. Early on, I&apos;d second-guess every move. I knew
            there had to be a better way — so I built Tailwind: the system and growth partner
            I wish I&apos;d had, to take the pain out of growing and give founders the engine
            and expertise to grow on their terms.
          </p>
          <p className="founder-cred">
            I&apos;ve been in your shoes. I&apos;ve spent 15+ years helping B2B businesses
            grow revenue as a Commercialisation Director, Investor, Chief Revenue Officer of
            a B2B software company and Partner at a global professional services firm.
          </p>
          <p className="founder-pull">
            Australia&apos;s go-to revenue expert for B2B
            <span className="text-indigo">.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
