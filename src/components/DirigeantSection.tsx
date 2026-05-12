import { Link } from 'react-router-dom';
import Container from './Container';
import IndexLabel from './IndexLabel';

const PAIN_POINTS = [
  { text: "Sans vous, rien n’avance. Vous êtes sur le chemin critique de chaque décision." },
  { text: "70 % de votre temps part dans l’opérationnel. Le reste, c’est des urgences." },
  { text: "Vos infos sont éparpillées entre emails, carnets, fichiers et WhatsApp. Pas de vue d’ensemble." },
  { text: "Déléguer est compliqué. Vos collaborateurs n’ont pas les bonnes infos, alors vous reprenez la main." },
];

export default function DirigeantSection() {
  return (
    <section
      id="dirigeant"
      style={{
        paddingTop: 'var(--spacing-section-v)',
        paddingBottom: 'var(--spacing-section-v)',
      }}
    >
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="reveal mb-4">
            <IndexLabel text="03B — Pour le dirigeant" />
          </div>

          <h2 className="reveal mb-4" style={{ color: 'var(--ink)' }}>
            C’est une situation{' '}
            <em style={{ color: 'var(--accent)' }}>que je vois souvent.</em>
          </h2>

          <p className="reveal text-base mb-10" style={{ color: 'var(--ink-muted)', maxWidth: '580px' }}>
            Au-delà de l’organisation, il y a votre système de pilotage.
            Celui qui vous permet de voir clair, décider vite, et déléguer. Ça se structure.
          </p>

          <ul className="reveal mb-10" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--s-3)' }}>
            {PAIN_POINTS.map((p, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--s-3)',
                  fontSize: 'var(--step-0)',
                  color: 'var(--ink-muted)',
                  lineHeight: 1.6,
                  paddingBottom: 'var(--s-3)',
                  borderBottom: i < PAIN_POINTS.length - 1 ? '1px solid var(--rule)' : 'none',
                }}
              >
                <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>→</span>
                {p.text}
              </li>
            ))}
          </ul>

          <div className="reveal">
            <Link to="/entrepreneurs" className="btn-primary">
              Voir l’offre Pilotage Dirigeant
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
