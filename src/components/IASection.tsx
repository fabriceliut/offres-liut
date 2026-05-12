import { Link } from 'react-router-dom';
import Container from './Container';
import IndexLabel from './IndexLabel';

const IA_POINTS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2l1.5 4.5H16l-3.7 2.7 1.4 4.3L10 11l-3.7 2.5 1.4-4.3L4 6.5h4.5L10 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Automatiser ce qui mange le temps de vos \u00e9quipes \u2014 tris, r\u00e9sum\u00e9s, reporting, relances.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="10" width="4" height="7" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="8" y="6" width="4" height="11" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="13" y="3" width="4" height="14" rx="1" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
    text: "Prendre des d\u00e9cisions avec des donn\u00e9es en temps r\u00e9el. Moins d\u2019intuition, plus de lucidit\u00e9.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M8 10l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "S\u00e9curiser vos flux. L\u2019IA int\u00e9gr\u00e9e proprement, c\u2019est un coffre-fort. Bricol\u00e9e, c\u2019est une passoire.",
  },
];

export default function IASection() {
  return (
    <section
      id="ia"
      style={{
        paddingTop: 'var(--spacing-section-v)',
        paddingBottom: 'var(--spacing-section-v)',
        background: 'var(--bg-elevated)',
        borderTop: '1px solid var(--rule)',
        borderBottom: '1px solid var(--rule)',
      }}
    >
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="reveal mb-4">
            <IndexLabel text="03C \u2014 L\u2019acc\u00e9l\u00e9rateur" />
          </div>

          <h2 className="reveal mb-4" style={{ color: 'var(--ink)' }}>
            Et l\u2019IA dans tout \u00e7a\u00a0?{' '}
            <em style={{ color: 'var(--accent)' }}>Aux bons endroits, pas partout.</em>
          </h2>

          <p className="reveal text-base mb-10" style={{ color: 'var(--ink-muted)', maxWidth: '580px' }}>
            L\u2019IA peut acc\u00e9l\u00e9rer ce qui est d\u00e9j\u00e0 bien structur\u00e9.
            Pas de gadget. Du chirurgical. On ne touche qu\u2019\u00e0 ce qui cr\u00e9e de la valeur.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {IA_POINTS.map((point, i) => (
              <div
                key={i}
                className="card-base reveal p-5"
                style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
              >
                <div style={{
                  color: 'var(--accent)',
                  marginBottom: 'var(--s-3)',
                }}>
                  {point.icon}
                </div>
                <p style={{ fontSize: 'var(--step--1)', color: 'var(--ink-muted)', lineHeight: 1.65, margin: 0 }}>
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal">
            <Link to="/ia" className="btn-primary">
              Voir l\u2019offre Int\u00e9gration IA
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
