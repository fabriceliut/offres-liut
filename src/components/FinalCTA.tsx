import { Link } from 'react-router-dom';
import Container from './Container';

export default function FinalCTA() {
  return (
    <section
      id="contact"
      style={{
        paddingTop: 'var(--spacing-section-v)',
        paddingBottom: 'var(--spacing-section-v)',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <Container>
        <div className="reveal max-w-2xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <span className="index-label">06 — Commençons</span>
          </div>

          <h2 className="mb-5" style={{ color: 'var(--text)' }}>
            On prend{' '}
            <em style={{ color: 'var(--accent)' }}>45 minutes ensemble ?</em>
          </h2>

          <p className="mb-8" style={{ color: 'var(--muted)', fontSize: 'var(--step-0)' }}>
            Vous posez le contexte. On identifie ce qui coince vraiment.
            Je vous dis ce que je ferais, et si je suis la bonne personne pour vous accompagner.
          </p>

          <div
            className="mb-10 p-5 text-left max-w-md mx-auto"
            style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-card)',
            }}
          >
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--step--1)', color: 'var(--text)', marginBottom: 'var(--s-3)' }}>
              Deux conditions pour que ça fonctionne bien :
            </p>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--s-2)', fontSize: 'var(--step--1)', color: 'var(--muted)', lineHeight: 1.65, marginBottom: 'var(--s-2)' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>→</span>
              Vous gardez le lead sur votre entreprise
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--s-2)', fontSize: 'var(--step--1)', color: 'var(--muted)', lineHeight: 1.65 }}>
              <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>→</span>
              Vous êtes prêt à arrêter ce qui ne marche plus
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href="https://cal.com/fabrice-liut/45-min-meeting?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M5 1.5V4.5M11 1.5V4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                <path d="M2 7h12" stroke="currentColor" strokeWidth="1.4"/>
              </svg>
              Prendre 45 min
            </a>
            <Link to="/entreprises" className="btn-secondary">
              Voir le programme complet
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <p style={{ fontSize: 'var(--step--1)', color: 'var(--muted)', fontStyle: 'italic' }}>
            Basé à Lyon — Déplacements France
          </p>
        </div>
      </Container>
    </section>
  );
}
