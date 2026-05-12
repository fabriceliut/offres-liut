import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from './Container';
import { useActiveSection, scrollToSection } from '../lib/anchors';

const NAV_ITEMS = [
  { label: 'Méthode', id: 'methode' },
  { label: 'Piliers', id: 'piliers' },
  { label: 'Situations', id: 'situations' },
  { label: 'Témoignages', id: 'temoignages' },
];

const OFFER_LINKS = [
  { label: 'Offre Dirigeant', to: '/entrepreneurs' },
  { label: 'Intégration IA', to: '/ia' },
];

const SECTION_IDS = NAV_ITEMS.map(n => n.id);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '';
  const activeSection = useActiveSection(isHomePage ? SECTION_IDS : []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(7,7,10,0.88)'
          : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          {isHomePage ? (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              aria-label="Retour en haut"
            >
              <LogoMark />
              <LogoText />
            </button>
          ) : (
            <Link to="/" className="flex items-center gap-2" aria-label="Retour à l'accueil">
              <LogoMark />
              <LogoText />
            </Link>
          )}

          {/* Desktop nav */}
          {isHomePage ? (
            <nav className="hidden md:flex items-center gap-1" aria-label="Navigation principale">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-3 py-1.5 text-sm transition-colors duration-150"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    color: activeSection === item.id ? 'var(--text)' : 'var(--muted)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 'var(--step--1)',
                  }}
                >
                  {activeSection === item.id && (
                    <span
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 rounded-full"
                      style={{ background: 'var(--accent)' }}
                      aria-hidden="true"
                    />
                  )}
                  {item.label}
                </button>
              ))}
              <span className="mx-1" style={{ color: 'var(--border)' }} aria-hidden="true">|</span>
              {OFFER_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-3 py-1.5 transition-colors duration-150"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    color: 'var(--muted)',
                    fontSize: 'var(--step--1)',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ) : (
            <nav className="hidden md:flex items-center gap-1" aria-label="Navigation">
              <Link
                to="/"
                className="px-3 py-1.5 text-sm transition-colors duration-150"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 500, color: 'var(--muted)', fontSize: 'var(--step--1)' }}
              >
                ← Accueil
              </Link>
            </nav>
          )}

          {/* CTA desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://cal.com/fabrice-liut/45-min-meeting?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '9px 18px', fontSize: 'var(--step--1)' }}
            >
              Prendre 45 min
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}
          >
            <div className="flex flex-col gap-1" aria-hidden="true">
              <span className="block w-5 h-0.5 transition-all duration-200" style={{
                background: 'var(--text)',
                transform: menuOpen ? 'rotate(45deg) translate(2px, 2px)' : 'none',
              }} />
              <span className="block h-0.5 transition-all duration-200" style={{
                background: 'var(--text)',
                width: menuOpen ? '20px' : '14px',
                opacity: menuOpen ? 0 : 1,
              }} />
              <span className="block w-5 h-0.5 transition-all duration-200" style={{
                background: 'var(--text)',
                transform: menuOpen ? 'rotate(-45deg) translate(2px, -2px)' : 'none',
              }} />
            </div>
          </button>
        </div>
      </Container>

      {/* Mobile menu — CSS transition, no Framer Motion */}
      <div
        style={{
          background: '248,244,0.97, rgba(20,18,25,0.97))',
          borderTop: menuOpen ? '1px solid var(--border)' : '1px solid transparent',
          backdropFilter: 'blur(12px)',
          overflow: 'hidden',
          maxHeight: menuOpen ? '420px' : '0',
          opacity: menuOpen ? 1 : 0,
          transition: 'max-height 0.25s var(--ease-out-quart), opacity 0.2s ease',
        }}
        aria-hidden={!menuOpen}
      >
        <Container>
          <nav className="py-4 flex flex-col gap-1" aria-label="Menu mobile">
            {isHomePage ? (
              <>
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { scrollToSection(item.id); setMenuOpen(false); }}
                    className="text-left px-3 py-2.5 rounded transition-colors duration-150"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      fontSize: 'var(--step-0)',
                      color: activeSection === item.id ? 'var(--accent)' : 'var(--text)',
                      background: activeSection === item.id ? 'oklch(72% 0.16 28 / 0.1)' : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="my-2" style={{ borderTop: '1px solid var(--border)' }} />
                {OFFER_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="px-3 py-2.5 rounded transition-colors duration-150"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--step-0)', color: 'var(--accent)' }}
                  >
                    {link.label} →
                  </Link>
                ))}
              </>
            ) : (
              <>
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2.5 rounded transition-colors duration-150"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 'var(--step-0)', color: 'var(--text)' }}
                >
                  ← Retour à l’accueil
                </Link>
                <div className="my-2" style={{ borderTop: '1px solid var(--border)' }} />
                {OFFER_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="px-3 py-2.5 rounded transition-colors duration-150"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--step-0)', color: 'var(--accent)' }}
                  >
                    {link.label} →
                  </Link>
                ))}
              </>
            )}
            <div className="pt-2 pb-2">
              <a
                href="https://cal.com/fabrice-liut/45-min-meeting?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
                onClick={() => setMenuOpen(false)}
              >
                Prendre 45 min
              </a>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="8" width="18" height="14" rx="2" fill="none" stroke="var(--accent)" strokeWidth="1.5"/>
      <rect x="8" y="5" width="18" height="14" rx="2" fill="none" stroke="oklch(72% 0.16 28 / 0.3)" strokeWidth="1.5"/>
      <line x1="8" y1="13" x2="18" y2="13" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="8" y1="16.5" x2="15" y2="16.5" stroke="oklch(72% 0.16 28 / 0.5)" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="23" cy="23" r="2.5" fill="var(--accent)"/>
    </svg>
  );
}

function LogoText() {
  return (
    <span style={{
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '1rem',
      letterSpacing: '-0.03em',
      color: 'var(--text)',
    }}>
      liut<span style={{ color: 'var(--accent)' }}>.</span>offres
    </span>
  );
}
