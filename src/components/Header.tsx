import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Container from './Container';
import { useActiveSection, scrollToSection } from '../lib/anchors';

const NAV_ITEMS = [
  { label: 'Parcours', id: 'parcours' },
  { label: 'Offres', id: 'offres' },
  { label: 'Méthode', id: 'methode' },
  { label: 'Résultats', id: 'resultats' },
];

const OFFER_LINKS = [
  { label: 'Faire place nette', to: '/place-nette', group: 'Commencer' },
  { label: 'Diagnostic Flux & Leviers', to: '/diagnostic', group: 'Voir large' },
  { label: 'Programme Entreprises', to: '/entreprises', group: 'Structurer' },
  { label: 'Cockpit Dirigeant', to: '/entrepreneurs', group: 'Piloter' },
  { label: 'Intégration IA', to: '/ia', group: 'Accélérer' },
];

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);
const CAL = 'https://cal.com/fabrice-liut/45-min-meeting?overlayCalendar=true';

function Brand({ home }: { home: boolean }) {
  const mark = (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="8" width="18" height="14" rx="2" fill="none" stroke="#766BFF" strokeWidth="1.5"/>
      <rect x="8" y="5" width="18" height="14" rx="2" fill="none" stroke="rgba(118,107,255,0.35)" strokeWidth="1.5"/>
      <line x1="8" y1="13" x2="18" y2="13" stroke="#766BFF" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="8" y1="16.5" x2="15" y2="16.5" stroke="rgba(118,107,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="23" cy="23" r="2.5" fill="#766BFF"/>
    </svg>
  );
  const content = <>{mark}<span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.03em', color: 'var(--text)' }}>liut<span style={{ color: 'var(--primary)' }}>.</span>offres</span></>;
  return home ? <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 focus-visible:outline-none" aria-label="Retour en haut">{content}</button> : <Link to="/" className="flex items-center gap-2 focus-visible:outline-none" aria-label="Retour à l'accueil">{content}</Link>;
}

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

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMenuOpen(false));
    return () => cancelAnimationFrame(frame);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const goTo = (id: string) => { scrollToSection(id); setMenuOpen(false); };

  return (
    <m.header initial={false} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ background: scrolled ? 'rgba(7,7,10,0.9)' : 'transparent', borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none', WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none' }}>
      <Container>
        <div className="flex items-center justify-between h-16">
          <Brand home={isHomePage} />

          {isHomePage ? (
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
              {NAV_ITEMS.map((item) => (
                <button key={item.id} onClick={() => goTo(item.id)} className="relative px-3 py-1.5 text-sm transition-colors duration-150" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, color: activeSection === item.id ? 'var(--text)' : 'var(--muted)', background: 'none', border: 'none', cursor: 'pointer' }}>
                  {activeSection === item.id && <m.span layoutId="navIndicator" className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 rounded-full" style={{ background: 'var(--primary)' }} aria-hidden="true" />}
                  {item.label}
                </button>
              ))}
              <details className="relative ml-1">
                <summary className="list-none px-3 py-1.5 text-sm cursor-pointer" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, color: 'var(--muted)' }}>Les offres <span aria-hidden="true">⌄</span></summary>
                <div className="absolute right-0 top-full mt-3 w-64 p-2 rounded-lg" style={{ background: 'rgba(20,20,29,0.98)', border: '1px solid var(--border)', boxShadow: 'var(--sh-elevate)' }}>
                  {OFFER_LINKS.map((link) => <Link key={link.to} to={link.to} className="block rounded-md px-3 py-2.5 transition-colors duration-150" style={{ color: 'var(--text)', fontSize: '0.82rem' }}><span style={{ display: 'block', color: 'var(--primary)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{link.group}</span>{link.label}</Link>)}
                </div>
              </details>
            </nav>
          ) : (
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation secondaire">
              <Link to="/#parcours" className="px-3 py-1.5 text-sm" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, color: 'var(--muted)' }}>Parcours</Link>
              <Link to="/#offres" className="px-3 py-1.5 text-sm" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, color: 'var(--muted)' }}>Les offres</Link>
              <Link to="/" className="px-3 py-1.5 text-sm" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, color: 'var(--muted)' }}>← Accueil</Link>
            </nav>
          )}

          <div className="hidden md:flex items-center gap-3"><a href={CAL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.82rem' }}>Prendre 45 min</a></div>

          <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen} style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}>
            <span className="sr-only">{menuOpen ? 'Fermer' : 'Menu'}</span>
            <div className="flex flex-col gap-1" aria-hidden="true">
              <span className="block w-5 h-0.5 transition-all duration-200" style={{ background: 'var(--text)', transform: menuOpen ? 'rotate(45deg) translate(2px, 2px)' : 'none' }} />
              <span className="block h-0.5 transition-all duration-200" style={{ background: 'var(--text)', width: menuOpen ? '20px' : '14px', opacity: menuOpen ? 0 : 1 }} />
              <span className="block w-5 h-0.5 transition-all duration-200" style={{ background: 'var(--text)', transform: menuOpen ? 'rotate(-45deg) translate(2px, -2px)' : 'none' }} />
            </div>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen && <m.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} style={{ background: 'rgba(13,13,20,0.98)', borderTop: '1px solid var(--border)', backdropFilter: 'blur(12px)' }}>
          <Container>
            <nav className="py-4 flex flex-col gap-1" aria-label="Menu mobile">
              {isHomePage ? NAV_ITEMS.map((item) => <button key={item.id} onClick={() => goTo(item.id)} className="text-left px-3 py-2.5 rounded-lg" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: '0.95rem', color: activeSection === item.id ? 'var(--primary)' : 'var(--text)', background: activeSection === item.id ? 'rgba(118,107,255,0.1)' : 'transparent', border: 'none' }}>{item.label}</button>) : <Link to="/" onClick={() => setMenuOpen(false)} className="px-3 py-2.5" style={{ color: 'var(--text)' }}>← Retour à l'accueil</Link>}
              <div className="my-2" style={{ borderTop: '1px solid var(--border)' }} />
              <div className="px-3 pt-1 pb-2" style={{ color: 'var(--muted)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Les offres</div>
              {OFFER_LINKS.map((link) => <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)} className="px-3 py-2.5 rounded-lg" style={{ color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: '0.92rem' }}>{link.label} →</Link>)}
              <div className="pt-3 pb-2"><a href={CAL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center" onClick={() => setMenuOpen(false)}>Prendre 45 min</a></div>
            </nav>
          </Container>
        </m.div>}
      </AnimatePresence>
    </m.header>
  );
}
