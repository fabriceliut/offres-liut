import { motion } from 'framer-motion';
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
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="mb-6 flex justify-center">
            <span className="index-label">06 — Commençons</span>
          </div>

          <h2 className="mb-5" style={{ color: 'var(--text)' }}>
            On prend{' '}
            <span style={{ color: 'var(--primary)' }}>45 minutes ensemble ?</span>
          </h2>

          <p className="mb-8" style={{ color: 'var(--muted)', fontSize: '1rem' }}>
            Vous posez le contexte. On identifie ce qui coincé vraiment.
            Je vous dis ce que je ferais, et si je suis la bonne personne pour vous accompagner.
          </p>

          {/* Two conditions */}
          <div
            className="mb-10 p-5 rounded-2xl text-left max-w-md mx-auto"
            style={{
              background: 'var(--surface2)',
              border: '1px solid var(--border-strong)',
            }}
          >
            <p className="mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text)' }}>
              Deux conditions pour que ça fonctionne bien :
            </p>
            <div className="flex items-start gap-2 mb-2" style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65 }}>
              <span style={{ color: 'var(--primary)', fontWeight: 700, flexShrink: 0 }}>→</span>
              Vous gardez le lead sur votre entreprise
            </div>
            <div className="flex items-start gap-2" style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65 }}>
              <span style={{ color: 'var(--primary)', fontWeight: 700, flexShrink: 0 }}>→</span>
              Vous êtes prêt à arrêter ce qui ne marche plus
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href="https://cal.com/fabrice-liut/45-min-meeting?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '1rem', padding: '16px 32px' }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <rect x="2.5" y="3.5" width="13" height="12" rx="2" stroke="white" strokeWidth="1.4"/>
                <path d="M6 2V5M12 2V5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                <path d="M2.5 8h13" stroke="white" strokeWidth="1.4"/>
              </svg>
              Prendre 45 min
            </a>
            <Link
              to="/entreprises"
              className="btn-secondary"
              style={{ fontSize: '1rem', padding: '15px 28px' }}
            >
              Découvrir le programme
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9.5 4.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* LinkedIn link */}
          <a
            href="https://www.linkedin.com/in/liut/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors duration-150"
            style={{ fontSize: '0.875rem', color: 'var(--muted)' }}
            aria-label="Profil LinkedIn de Fabrice Liut"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.3"/>
              <circle cx="4.5" cy="5" r="1" fill="currentColor"/>
              <path d="M4.5 7v4.5M7 7v4.5M7 8.5a2.5 2.5 0 015 0v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            Suivre Fabrice Liut sur LinkedIn
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
