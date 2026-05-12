import Container from './Container';
import IndexLabel from './IndexLabel';

const STEPS = [
  {
    num: '01',
    title: '45 min pour poser le contexte',
    desc: "Vous posez le contexte. On identifie ce qui coince vraiment. Je vous dis ce que je ferais, et si je suis la bonne personne pour vous accompagner.",
    duration: '45 min',
  },
  {
    num: '02',
    title: 'Je viens, j\u2019observe',
    desc: "2 \u00e0 3 jours sur place pour comprendre vos flux de l\u2019int\u00e9rieur. Interviews, observation terrain, cartographie de l\u2019existant. Un \u00e9tat des lieux pr\u00e9cis.",
    duration: '2\u20133 jours',
  },
  {
    num: '03',
    title: 'On teste, on ajuste, on continue',
    desc: "On co-construit les ajustements. Pas un plan fig\u00e9 \u2014 des changements concrets qu\u2019on teste et qu\u2019on am\u00e9liore au fil de l\u2019eau. Vous gardez le lead.",
    duration: '3\u20136 mois',
  },
];

export default function HowWeWork() {
  return (
    <section
      id="deroulement"
      style={{
        paddingTop: 'var(--spacing-section-v)',
        paddingBottom: 'var(--spacing-section-v)',
        background: 'var(--bg-elevated)',
        borderTop: '1px solid var(--rule)',
        borderBottom: '1px solid var(--rule)',
      }}
    >
      <Container>
        <div className="reveal mb-4">
          <IndexLabel text="04 \u2014 D\u00e9roul\u00e9" />
        </div>

        <h2 className="reveal mb-4" style={{ color: 'var(--ink)' }}>
          Comment \u00e7a{' '}
          <em style={{ color: 'var(--accent)' }}>d\u00e9marre</em>
        </h2>

        <p className="reveal mb-14 max-w-xl" style={{ color: 'var(--ink-muted)' }}>
          Pas de programme packag\u00e9. On avance pas \u00e0 pas, en commen\u00e7ant toujours par comprendre.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="reveal"
              style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'var(--step-4)',
                color: 'var(--accent)',
                opacity: 0.4,
                lineHeight: 1,
                marginBottom: 'var(--s-4)',
                fontVariantNumeric: 'tabular-nums',
              }}>
                {step.num}
              </div>
              <div style={{
                display: 'inline-block',
                padding: '3px 10px',
                background: 'light-dark(oklch(55% 0.18 28 / 0.1), oklch(72% 0.16 28 / 0.15))',
                borderRadius: 'var(--r-pill)',
                fontSize: 'var(--step--1)',
                color: 'var(--accent)',
                fontWeight: 600,
                marginBottom: 'var(--s-3)',
              }}>
                {step.duration}
              </div>
              <h3 style={{ color: 'var(--ink)', marginBottom: 'var(--s-3)', fontStyle: 'normal', fontSize: 'var(--step-1)' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 'var(--step--1)', color: 'var(--ink-muted)', lineHeight: 1.65, margin: 0 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
