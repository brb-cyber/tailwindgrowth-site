import { Eyebrow } from './Nav';

const SERVICES = [
  {
    icon: 'vector-6',
    title: 'A system to automate the grind',
    description:
      'Your AI-powered sales assistant handles the admin-heavy 70% of winning new work — so you can focus on high value connection.',
  },
  {
    icon: 'vector-3',
    title: 'Daily guidance on priorities',
    description:
      'Know exactly what to work on today to move every opportunity forward.',
  },
  {
    icon: 'vector-9',
    title: 'A senior partner in your corner',
    description:
      'Monthly sessions with an experienced revenue leader to set strategy, stay accountable and execute — plus retained support embedded in your team.',
  },
];

export default function Services() {
  return (
    <section className="section tint" id="services">
      <div className="container">
        <div className="section-head">
          <Eyebrow>What we handle</Eyebrow>
          <h2 className="disp">Work less. Win more.</h2>
        </div>
        <div className="svc-grid">
          {SERVICES.map((s) => (
            <div className="svc" key={s.title}>
              <div className="svc-ic">
                <img src={`/assets/vectors/${s.icon}-pine.svg`} alt="" aria-hidden="true" />
              </div>
              <h4>{s.title}</h4>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
