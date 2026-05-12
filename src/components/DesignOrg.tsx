import Container from './Container';
import IndexLabel from './IndexLabel';

const DIFFERENTIATIONS = [
  {
    label: 'Mon approche',
    desc: "Je viens sur le terrain, je comprends vos flux de l’intérieur, et on co-construit ensemble ce qui manque. Pas un plan figé, mais des ajustements concrets qu’on teste et qu’on améliore.",
    accent: true,
  },
  {
    label: 'Conseil classique',
    desc: "Diagnostic générique, recommandations théoriques, peu d’appropriation par les équipes. Le rapport finit dans un tiroir.",
    accent: false,
  },
];

export default function DesignOrg() {
  return (
    <section
      id="methode"
      style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)' }}
    >
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="reveal mb-4">
            <IndexLabel text="01 — La méthode" />
          </div>

          <h2 className="reveal mb-5" style={{ color: 'var(--ink)' }}>
            Ce que je fais,{' '}
            <em style={{ color: 'var(--accent)' }}>concrètement</em>
          </h2>

          <p className="reveal text-base mb-10" style={{ color: 'var(--ink-muted)', maxWidth: '580px' }}>
            J’appelle ça le Design Organisationnel. En pratique : je regarde comment
            votre entreprise fonctionne vraiment, et on ajuste ce qui coince — avec vos équipes,
            pas dans un rapport que personne ne lit.
          </p>

          <div className="reveal grid md:grid-cols-2 gap-4">
            {DIFFERENTIATIONS.map((d, i) => (
              <div
                key={i}
                className="card-base p-6"
                style={{
                  borderColor: d.accent ? 'var(--accent)' : 'var(--rule)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  {d.accent && (
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--accent)',
                      flexShrink: 0,
                      display: 'inline-block',
                    }} aria-hidden="true" />
                  )}
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: 'var(--step--1)',
                    color: d.accent ? 'var(--accent)' : 'var(--ink-muted)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}>
                    {d.label}
                  </span>
                </div>
                <p style={{ fontSize: 'var(--step--1)', color: 'var(--ink-muted)', lineHeight: 1.65, margin: 0 }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
