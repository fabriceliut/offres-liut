import { Link } from 'react-router-dom';
import Container from './Container';
import IndexLabel from './IndexLabel';

const PAIN_POINTS = [
  { text: "Sans vous, rien n\u2019avance. Vous \u00eates sur le chemin critique de chaque d\u00e9cision." },
  { text: "70\u00a0% de votre temps part dans l\u2019op\u00e9rationnel. Le reste, c\u2019est des urgences." },
  { text: "Vos infos sont \u00e9parpill\u00e9es entre emails, carnets, fichiers et WhatsApp. Pas de vue d\u2019ensemble." },
  { text: "D\u00e9l\u00e9guer est compliqu\u00e9. Vos collaborateurs n\u2019ont pas les bonnes infos, alors vous reprenez la main." },
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
            <IndexLabel text="03B \u2014 Pour le dirigeant" />
          </div>

          <h2 className="reveal mb-4" style={{ color: 'var(--ink)' }}>
            C\u2019est une situation{' '}
            <em style={{ color: 'var(--accent)' }}>que je vois souvent.</em>
          </h2>

          <p className="reveal text-base mb-10" style={{ color: 'var(--ink-muted)', maxWidth: '580px' }}>
            Au-del\u00e0 de l\u2019organisation, il y a votre syst\u00e8me de pilotage.
            Celui qui vous permet de voir clair, d\u00e9cider vite, et d\u00e9l\u00e9guer. \u00c7a se structure.
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
                <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>\u2192</span>
                {p.text}
              </li>
            ))}
          </ul>

          <div className="reveal">
            <Link to="/entrepreneurs" className="btn-primary">
              Voir l\u2019offre Pilotage Dirigeant
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
