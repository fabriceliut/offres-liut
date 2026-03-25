import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Container from './Container';
import { useActiveSection, scrollToSection } from '../lib/anchors';

const NAV_ITEMS = [
  { label: 'Méthode', id: 'methode' },
  { label: 'Piliers', id: 'piliers' },
  { label: 'Situations', id: 'situations' },
  { label: 'Témoignages', id: 'temoignages' },
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

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
              className="flex items-center gap-2 focus-visible:outline-none"
              aria-label="Retour en haut"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="4" y="8" width="18" height="14" rx="2" fill="none" stroke="#766BFF" strokeWidth="1.5"/>
                <rect x="8" y="5" width="18" height="14" rx="2" fill="none" stroke="rgba(118,107,255,0.35)" strokeWidth="1.5"/>
                <line x1="8" y1="13" x2="18" y2="13" stroke="#766BFF" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="8" y1="16.5" x2="15" y2="16.5" stroke="rgba(118,107,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="23" cy="23" r="2.5" fill="#766BFF"/>
              </svg>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: '-0.03em',
                color: 'var(--text)',
              }}>
                liut<span style={{ color: 'var(--primary)' }}>.</span>offres
              </span>
            </button>
          ) : (
            <Link
              to="/"
              className="flex items-center gap-2 focus-visible:outline-none"
              aria-label="Retour à l'accueil"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="4" y="8" width="18" height="14" rx="2" fill="none" stroke="#766BFF" strokeWidth="1.5"/>
                <rect x="8" y="5" width="18" height="14" rx="2" fill="none" stroke="rgba(118,107,255,0.35)" strokeWidth="1.5"/>
                <line x1="8" y1="13" x2="18" y2="13" stroke="#766BFF" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="8" y1="16.5" x2="15" y2="16.5" stroke="rgba(118,107,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="23" cy="23" r="2.5" fill="#766BFF"/>
              </svg>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: '-0.03em',
                color: 'var(--text)',
              }}>
                liut<span style={{ color: 'var(--primary)' }}>.</span>offres
              </span>
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
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 500,
                    color: activeSection === item.id ? 'var(--text)' : 'var(--muted)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 rounded-full"
                      style={{ background: 'var(--primary)' }}
                      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                      aria-hidden="true"
                    />
                  )}
                  {item.label}
                </button>
              ))}
            </nav>
          ) : (
            <nav className="hidden md:flex items-center gap-1" aria-label="Navigation">
              <Link
                to="/"
                className="px-3 py-1.5 text-sm transition-colors duration-150"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, color: 'var(--muted)' }}
              >
                ← Accueil
              </Link>
            </nav>
          )}

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://cal.com/fabrice-liut/45-min-meeting?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '0.82rem' }}
            >
              Prendre 45 min
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}
          >
            <span className="sr-only">{menuOpen ? 'Fermer' : 'Menu'}</span>
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

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              background: 'rgba(13,13,20,0.97)',
              borderTop: '1px solid var(--border)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <Container>
              <nav className="py-4 flex flex-col gap-2" aria-label="Menu mobile">
                {isHomePage ? (
                  <>
                    {NAV_ITEMS.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => { scrollToSection(item.id); setMenuOpen(false); }}
                        className="text-left px-3 py-2.5 rounded-lg transition-colors duration-150"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 500,
                          fontSize: '0.95rem',
                          color: activeSection === item.id ? 'var(--primary)' : 'var(--text)',
                          background: activeSection === item.id ? 'rgba(118,107,255,0.1)' : 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        {item.label}
                      </button>
                    ))}
                  </>
                ) : (
                  <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className="text-left px-3 py-2.5 rounded-lg transition-colors duration-150"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      color: 'var(--text)',
                    }}
                  >
                    ← Retour à l'accueil
                  </Link>
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
