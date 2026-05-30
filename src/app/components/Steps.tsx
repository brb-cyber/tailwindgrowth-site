import { Eyebrow } from './Nav';

const STEPS = [
  {
    n: '01',
    title: 'Sign up & go live',
    description:
      'Create your account in a minute. In parallel, we handle all the customisation for you — you don’t touch a thing.',
  },
  {
    n: '02',
    title: 'Growth strategy session',
    description:
      'A focused session to co-create your growth strategy, set goals and markers, and design the plan to embed it.',
  },
  {
    n: '03',
    title: 'Monthly accountability',
    description:
      'We meet to work active opportunities, review your pipeline, share learnings and stay on track. Your growth partner, on call.',
  },
];

export default function Steps() {
  return (
    <section className="section indigo">
      <div className="container">
        <div className="section-head">
          <Eyebrow dark>Your journey</Eyebrow>
          <h2 className="disp">It&apos;s as easy as.</h2>
        </div>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.n}>
              <div className="n disp">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
