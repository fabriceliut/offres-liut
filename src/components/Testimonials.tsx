import Container from './Container';
import IndexLabel from './IndexLabel';

const TESTIMONIALS = [
  {
    quote: "Un process terrain passé de 48h à 20 minutes par intervention. Fabrice a compris nos flux en 2 jours et a simplifié ce qui nous bloquait depuis des mois.",
    author: 'BDR Therma',
    company: 'Industrie thermique',
    result: '48h → 20 min/intervention',
  },
  {
    quote: "+3 185 heures récupérées par an en simplifiant la coordination. L’investissement a été remboursé 4,5 fois.",
    author: 'Dirigeant',
    company: 'PME de services, 30 personnes',
    result: 'Retour x4,5',
  },
  {
    quote: "+12 % de temps facturable, −12 % de délais, turn-over en baisse. On a clarifié les rôles et fluid le fonctionnement entre les équipes.",
    author: 'Direction',
    company: 'PME IT, 90 personnes',
    result: '+12 % temps facturable',
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
          <IndexLabel text="05 — Retours terrain" />
        </div>

        <h2 className="reveal mb-4" style={{ color: 'var(--ink)' }}>
          Résultats{' '}
          <em style={{ color: 'var(--accent)' }}>récents</em>
        </h2>

        <p className="reveal mb-12 max-w-xl" style={{ color: 'var(--ink-muted)' }}>
          Quelques exemples concrets de missions récentes.
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
                « {t.quote} »
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
