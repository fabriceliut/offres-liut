import { Link } from 'react-router-dom';

type OfferKey = 'place-nette' | 'diagnostic' | 'entreprises' | 'entrepreneurs' | 'ia';

const OFFERS: Array<{ key: OfferKey; label: string; to: string }> = [
  { key: 'place-nette', label: 'Faire place nette', to: '/place-nette' },
  { key: 'diagnostic', label: 'Diagnostic', to: '/diagnostic' },
  { key: 'entreprises', label: 'Programme Entreprises', to: '/entreprises' },
  { key: 'entrepreneurs', label: 'Cockpit Dirigeant', to: '/entrepreneurs' },
  { key: 'ia', label: 'Intégration IA', to: '/ia' },
];

export default function OfferCrossNav({ current }: { current: OfferKey }) {
  return (
    <nav className="flex flex-wrap gap-2 justify-center items-center mt-5" aria-label="Naviguer entre les offres">
      <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>Voir aussi :</span>
      {OFFERS.map((offer) => offer.key === current ? (
        <span key={offer.key} aria-current="page" style={{ padding: '5px 10px', borderRadius: 'var(--r-pill)', background: 'var(--primary)', color: 'white', fontSize: '0.76rem', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
          {offer.label}
        </span>
      ) : (
        <Link key={offer.key} to={offer.to} style={{ padding: '5px 10px', borderRadius: 'var(--r-pill)', border: '1px solid var(--border-strong)', color: 'var(--muted)', fontSize: '0.76rem', textDecoration: 'none' }}>
          {offer.label}
        </Link>
      ))}
    </nav>
  );
}
