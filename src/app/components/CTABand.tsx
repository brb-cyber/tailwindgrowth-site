export default function CTABand({ bookUrl }: { bookUrl: string }) {
  return (
    <section className="section" id="get-started">
      <div className="container">
        <div className="cta-band">
          <img
            className="motif"
            src="/assets/vectors/vector-2-lime.svg"
            alt=""
            aria-hidden="true"
            style={{ width: 180, height: 180, left: -30, bottom: -40 }}
          />
          <img
            className="motif"
            src="/assets/vectors/vector-5-white.svg"
            alt=""
            aria-hidden="true"
            style={{ width: 130, height: 130, right: -10, top: -30, opacity: 0.35 }}
          />
          <div style={{ position: 'relative' }}>
            <h2 className="disp">
              Let&apos;s work <span className="lime">together.</span>
            </h2>
            <p>
              Book a growth call. Spend less of your week chasing work and more of it
              building the business you actually want — and we&apos;ll handle the rest.
            </p>
            <a
              className="btn btn-accent"
              href={bookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a growth call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
