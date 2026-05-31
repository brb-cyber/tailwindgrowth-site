import { Eyebrow } from './Nav';

export default function TheSystem() {
  return (
    <section className="section" id="thesystem">
      <div className="container">
        <div className="section-head">
          <Eyebrow>AI-native B2B growth system</Eyebrow>
          <h2 className="disp">Harness your tailwind.</h2>
          <p>
            Most founders are stuck choosing between hiring a salesperson they can&apos;t
            afford and an agency that treats them like a number. We give you both the
            system and the senior partner — built around how you already work.
          </p>
        </div>
        <div className="duo">
          <div className="feature-card">
            <div className="feature-ic">
              <img src="/assets/vectors/vector-5-indigo.svg" alt="" aria-hidden="true" />
            </div>
            <h3>The system</h3>
            <p>
              A repeatable, AI-native growth system to automate the grind and make it
              easier to grow. It handles the admin-heavy 70% of winning new work.
            </p>
          </div>
          <div className="feature-card dark">
            <div className="feature-ic">
              <img src="/assets/vectors/vector-9-lime.svg" alt="" aria-hidden="true" />
            </div>
            <h3>The partner</h3>
            <p>
              A seasoned growth leader embedded in your team — strategy, accountability
              and a senior sounding board, without a full-time hire on the books.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
