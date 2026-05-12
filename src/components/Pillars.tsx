import Container from './Container';
import IndexLabel from './IndexLabel';

const PILLARS = [
  {
    num: '01',
    title: 'Immersion terrain',
    desc: "Je viens sur place. Je passe du temps avec vos équipes, dans l'atelier, dans les bureaux. Je regarde comment ça tourne vraiment — pas le schéma théorique.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'On cherche ce qui coince',
    desc: "Je cartographie vos flux, je trouve les goulots, les frictions silencieuses. On ne reste pas sur les symptômes — on remonte aux causes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="19" cy="5" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="19" cy="19" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 12h4M13 12h2M16.7 6.3L13 10M16.7 17.7L13 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Avec vos équipes, pas pour elles',
    desc: "On construit les solutions avec ceux qui vont les utiliser. Ateliers, tests terrain, ajustements. Si vos équipes ne se les approprient pas, ça ne sert à rien.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="10" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="10" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6.5 10V7a1 1 0 011-1h9a1 1 0 011 1v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 6V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Pillars() {
  return (
    <section
      id="piliers"
      style={{
        paddingTop: 'var(--spacing-section-v)',
        paddingBottom: 'var(--spacing-section-v)',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <Container>
        <div className="reveal mb-4">
          <IndexLabel text="02 — Les piliers" />
        </div>

        <h2 className="reveal mb-4" style={{ color: 'var(--text)' }}>
          Comment je travaille
        </h2>

        <p className="reveal mb-12 max-w-xl" style={{ color: 'var(--muted)' }}>
          Chaque mission suit le même fil :
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {PILLARS.map((pillar, i) => (
            <div
              key={i}
              className="card-base reveal p-6"
              style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
            >
              <div className="flex items-start gap-4 mb-4">
                <div style={{
                  color: 'var(--accent)',
                  background: 'oklch(72% 0.16 28 / 0.12)',
                  borderRadius: '6px',
                  padding: '10px',
                  flexShrink: 0,
                }}>
                  {pillar.icon}
                </div>
                <div>
                  <div className="index-label mb-2">PILIER {pillar.num}</div>
                  <h3 style={{ color: 'var(--text)', fontSize: 'var(--step-0)', fontStyle: 'normal' }}>{pillar.title}</h3>
                </div>
              </div>
              <p style={{ fontSize: 'var(--step--1)', color: 'var(--muted)', lineHeight: 1.65 }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
