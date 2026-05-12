import Container from './Container';
import IndexLabel from './IndexLabel';

const TESTIMONIALS = [
  {
    quote: "Un process terrain pass\u00e9 de 48h \u00e0 20 minutes par intervention. Fabrice a compris nos flux en 2 jours et a simplifi\u00e9 ce qui nous bloquait depuis des mois.",
    author: 'BDR Therma',
    company: 'Industrie thermique',
    result: '48h \u2192 20\u00a0min/intervention',
  },
  {
    quote: "+3\u00a0185 heures r\u00e9cup\u00e9r\u00e9es par an en simplifiant la coordination. L\u2019investissement a \u00e9t\u00e9 rembours\u00e9 4,5 fois.",
    author: 'Dirigeant',
    company: 'PME de services, 30 personnes',
    result: 'Retour x4,5',
  },
  {
    quote: "+12\u00a0% de temps facturable, \u221212\u00a0% de d\u00e9lais, turn-over en baisse. On a clarifi\u00e9 les r\u00f4les et fluid le fonctionnement entre les \u00e9quipes.",
    author: 'Direction',
    company: 'PME IT, 90 personnes',
    result: '+12\u00a0% temps facturable',
  },
];

export default function Testimonials() {
  return (
    <section
      id="temoignages"
      style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)' }}
    >
      <Container>
        <div className="reveal mb-4">
          <IndexLabel text="05 \u2014 Retours terrain" />
        </div>

        <h2 className="reveal mb-4" style={{ color: 'var(--ink)' }}>
          R\u00e9sultats{' '}
          <em style={{ color: 'var(--accent)' }}>r\u00e9cents</em>
        </h2>

        <p className="reveal mb-12 max-w-xl" style={{ color: 'var(--ink-muted)' }}>
          Quelques exemples concrets de missions r\u00e9centes.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="card-base reveal p-6 flex flex-col"
              style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
            >
              <div style={{
                display: 'inline-block',
                padding: '4px 10px',
                background: 'light-dark(oklch(55% 0.18 28 / 0.1), oklch(72% 0.16 28 / 0.15))',
                borderRadius: 'var(--r-pill)',
                fontSize: 'var(--step--1)',
                color: 'var(--accent)',
                fontWeight: 700,
                marginBottom: 'var(--s-4)',
                alignSelf: 'flex-start',
              }}>
                {t.result}
              </div>

              <blockquote style={{
                flex: 1,
                fontSize: 'var(--step--1)',
                color: 'var(--ink-muted)',
                lineHeight: 1.7,
                marginBottom: 'var(--s-4)',
                margin: '0 0 var(--s-4)',
                fontStyle: 'italic',
              }}>
                \u00ab\u00a0{t.quote}\u00a0\u00bb
              </blockquote>

              <footer style={{
                paddingTop: 'var(--s-4)',
                borderTop: '1px solid var(--rule)',
              }}>
                <div style={{
                  fontWeight: 600,
                  fontSize: 'var(--step--1)',
                  color: 'var(--ink)',
                  fontFamily: 'var(--font-body)',
                }}>
                  {t.author}
                </div>
                <div style={{ fontSize: 'var(--step--1)', color: 'var(--ink-muted)' }}>
                  {t.company}
                </div>
              </footer>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
