import { Link } from 'react-router-dom';
import Container from './Container';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        paddingTop: '40px',
        paddingBottom: '40px',
        borderTop: '1px solid var(--border)',
      }}
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="4" y="8" width="18" height="14" rx="2" fill="none" stroke="#766BFF" strokeWidth="1.5"/>
              <rect x="8" y="5" width="18" height="14" rx="2" fill="none" stroke="rgba(118,107,255,0.35)" strokeWidth="1.5"/>
              <circle cx="23" cy="23" r="2.5" fill="#766BFF"/>
            </svg>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: '0.85rem',
              color: 'var(--muted)',
            }}>
              © {year} Fabrice Liut — Design Organisationnel pour PMI
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/liut/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-150"
              style={{ color: 'var(--muted)', fontSize: '0.82rem', fontFamily: 'var(--font-heading)' }}
              aria-label="LinkedIn de Fabrice Liut"
            >
              LinkedIn
            </a>
            <span style={{ color: 'var(--border)', fontSize: '0.82rem' }} aria-hidden="true">·</span>
            <Link
              to="/entreprises"
              className="transition-colors duration-150"
              style={{ color: 'var(--muted)', fontSize: '0.82rem', fontFamily: 'var(--font-heading)' }}
            >
              Offre Entreprises
            </Link>
            <span style={{ color: 'var(--border)', fontSize: '0.82rem' }} aria-hidden="true">·</span>
            <Link
              to="/entrepreneurs"
              className="transition-colors duration-150"
              style={{ color: 'var(--muted)', fontSize: '0.82rem', fontFamily: 'var(--font-heading)' }}
            >
              Offre Dirigeants
            </Link>
            <span style={{ color: 'var(--border)', fontSize: '0.82rem' }} aria-hidden="true">·</span>
            <span style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>
              Mentions légales disponibles sur demande
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
