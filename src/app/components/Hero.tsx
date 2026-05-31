import { Eyebrow } from './Nav';

export default function Hero({ bookUrl }: { bookUrl: string }) {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <Eyebrow>A people-first, AI-native B2B growth partner</Eyebrow>
          <h1 className="disp">
            Grow on<br />your <span className="lime">terms.</span>
          </h1>
          <p className="lead">
            The system you&apos;ve always needed, paired with a seasoned growth leader on
            your team. You focus on the work — we handle the rest.
          </p>
          <div className="hero-cta">
            <a
              className="btn btn-primary"
              href={bookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a growth call
            </a>
            <a className="btn btn-ghost" href="#thesystem">
              See how it works
            </a>
          </div>
          <div className="hero-trust">
            <div className="avatars" aria-hidden="true">
              <span>JD</span>
              <span>MR</span>
              <span>SK</span>
              <span>+</span>
            </div>
            <span>Trusted by ambitious founders across Australia</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <img
            className="hero-img"
            src="/assets/images/team-office.jpg"
            alt="Tailwind Growth team — AI-native B2B growth partners in Australia"
          />
          <div className="hero-overlay"></div>
          <div className="hero-photo">
            <img
              className="hero-motif"
              src="/assets/vectors/vector-7-lime.svg"
              alt=""
              style={{ position: 'absolute', top: 36, right: 28, width: 130, height: 130 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
