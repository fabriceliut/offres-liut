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
    <nav
      className="flex flex-wrap gap-x-2 gap-y-2 justify-center items-center mt-6 mb-8 py-4"
      style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
      aria-label="Naviguer entre les offres"
    >
      <span className="basis-full sm:basis-auto text-center sm:text-left" style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>Voir aussi :</span>
      {OFFERS.map((offer) => offer.key === current ? (
        <span key={offer.key} aria-current="page" style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center', padding: '8px 12px', borderRadius: 'var(--r-pill)', background: 'var(--primary)', color: 'white', fontSize: '0.76rem', fontFamily: 'var(--font-heading)', fontWeight: 600, whiteSpace: 'nowrap' }}>
          {offer.label}
        </span>
      ) : (
        <Link key={offer.key} to={offer.to} style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center', padding: '8px 12px', borderRadius: 'var(--r-pill)', border: '1px solid var(--border-strong)', color: 'var(--muted)', fontSize: '0.76rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>
          {offer.label}
        </Link>
      ))}
    </nav>
  );
}
