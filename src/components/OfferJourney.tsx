import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from './Container';
import IndexLabel from './IndexLabel';

type JourneyKey = 'place-nette' | 'diagnostic' | 'entreprises' | 'entrepreneurs' | 'ia';

const STEPS: Array<{ key: JourneyKey; label: string; caption: string; to: string }> = [
  { key: 'place-nette', label: 'Faire place nette', caption: 'Débloquer un sujet', to: '/place-nette' },
  { key: 'diagnostic', label: 'Diagnostic', caption: 'Voir les leviers', to: '/diagnostic' },
  { key: 'entreprises', label: 'Structurer', caption: 'Faire tenir l’organisation', to: '/entreprises' },
  { key: 'entrepreneurs', label: 'Piloter', caption: 'Sortir du quotidien', to: '/entrepreneurs' },
  { key: 'ia', label: 'Accélérer', caption: 'Augmenter les flux', to: '/ia' },
];

export default function OfferJourney({ current }: { current: JourneyKey }) {
  return (
    <section
      aria-labelledby="journey-title"
      style={{
        padding: 'clamp(56px, 8vw, 96px) 0',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <Container>
        <div className="max-w-2xl mb-10">
          <IndexLabel text="La logique d’ensemble" />
          <h2 id="journey-title" className="mt-5 mb-4" style={{ color: 'var(--text)' }}>
            Les offres se complètent. <span style={{ color: 'var(--primary)' }}>Elles ne se remplacent pas.</span>
          </h2>
          <p>
            On ne vous pousse pas vers un programme standard. On part de votre point de départ,
            puis on ajoute uniquement la brique qui devient utile ensuite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3" role="list" aria-label="Parcours des offres">
          {STEPS.map((step, index) => {
            const active = step.key === current;
            return (
              <m.div
                key={step.key}
                role="listitem"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.04, duration: 0.35 }}
              >
                <Link
                  to={step.to}
                  aria-current={active ? 'page' : undefined}
                  className="card-base block h-full p-4"
                  style={{
                    background: active ? 'rgba(118,107,255,0.12)' : 'var(--bg)',
                    borderColor: active ? 'var(--primary)' : 'var(--border)',
                  }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        color: active ? 'var(--primary)' : 'var(--muted)',
                      }}
                    >
                      0{index + 1}
                    </span>
                    {index < STEPS.length - 1 && (
                      <span aria-hidden="true" className="hidden md:block" style={{ color: 'var(--border-strong)' }}>→</span>
                    )}
                  </div>
                  <strong style={{ display: 'block', color: 'var(--text)', fontFamily: 'var(--font-heading)', fontSize: '0.95rem' }}>
                    {step.label}
                  </strong>
                  <span style={{ display: 'block', marginTop: '6px', color: 'var(--muted)', fontSize: '0.78rem', lineHeight: 1.45 }}>
                    {step.caption}
                  </span>
                  {active && (
                    <span style={{ display: 'inline-block', marginTop: '16px', color: 'var(--primary)', fontSize: '0.72rem', fontWeight: 700 }}>
                      Vous êtes ici
                    </span>
                  )}
                </Link>
              </m.div>
            );
          })}
        </div>

        <p className="mt-6" style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
          La suite naturelle : transmettre le système à un relais interne et continuer sans dépendance.
        </p>
      </Container>
    </section>
  );
}
