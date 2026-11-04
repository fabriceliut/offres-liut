import { Link } from 'react-router-dom';
import Container from './Container';

const GROUPS = [
  { title: 'Commencer', links: [{ label: 'Faire place nette', to: '/place-nette' }, { label: 'Diagnostic Flux & Leviers', to: '/diagnostic' }] },
  { title: 'Construire', links: [{ label: 'Programme Entreprises', to: '/entreprises' }, { label: 'Cockpit Dirigeant', to: '/entrepreneurs' }, { label: 'Intégration IA', to: '/ia' }] },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ padding: '64px 0 40px', borderTop: '1px solid var(--border)' }}>
      <Container>
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10 pb-12">
          <div>
            <div className="flex items-center gap-2 mb-4"><span style={{ color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>liut.offres</span></div>
            <p style={{ maxWidth: '32ch', fontSize: '0.9rem' }}>Un parcours pour rendre votre organisation plus lisible, votre pilotage plus léger et vos outils plus utiles.</p>
          </div>
          {GROUPS.map((group) => <div key={group.title}><div style={{ marginBottom: '12px', color: 'var(--text)', fontFamily: 'var(--font-heading)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{group.title}</div><div className="flex flex-col gap-2">{group.links.map((link) => <Link key={link.to} to={link.to} style={{ color: 'var(--muted)', fontSize: '0.86rem' }}>{link.label}</Link>)}</div></div>)}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
          <span style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>© {year} Fabrice Liut</span>
          <div className="flex flex-wrap justify-center gap-4"><a href="https://liut.me/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>liut.me</a><a href="https://www.linkedin.com/in/liut/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>LinkedIn</a><a href="https://cal.com/fabrice-liut/45-min-meeting?overlayCalendar=true" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>Prendre 45 min</a></div>
        </div>
      </Container>
    </footer>
  );
}
