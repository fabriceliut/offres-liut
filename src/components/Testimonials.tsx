import { motion } from 'framer-motion';
import Container from './Container';
import IndexLabel from './IndexLabel';

const TESTIMONIALS = [
  {
    quote: "Un process terrain passé de 48h à 20 minutes par intervention. Fabrice a compris nos flux en 2 jours et a simplifié ce qui nous bloquait depuis des mois.",
    author: 'BDR Therma',
    company: 'Industrie thermique',
    result: '48h → 20 min/intervention',
  },
  {
    quote: "+3 185 heures récupérées par an en simplifiant la coordination. L'investissement a été remboursé 4,5 fois.",
    author: 'Dirigeant',
    company: 'PME de services, 30 personnes',
    result: 'Retour x4,5',
  },
  {
    quote: "+12% de temps facturable, −12% de délais, turn-over en baisse. On a clarifié les rôles et fluid le fonctionnement entre les équipes.",
    author: 'Direction',
    company: 'PME IT, 90 personnes',
    result: '+12% temps facturable',
  },
];

export default function Testimonials() {
  return (
    <section
      id="temoignages"
      style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)' }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <IndexLabel text="05 — Retours terrain" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mb-4"
          style={{ color: 'var(--text)' }}
        >
          Résultats{' '}
          <span style={{ color: 'var(--primary)' }}>récents</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mb-12 max-w-xl"
          style={{ color: 'var(--muted)' }}
        >
          Quelques exemples concrets de missions récentes.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="card-base p-6 flex flex-col"
            >
              {/* Result badge */}
              <div className="mb-4">
                <span style={{
                  display: 'inline-block',
                  padding: '4px 10px',
                  background: 'rgba(57,217,138,0.1)',
                  border: '1px solid rgba(57,217,138,0.25)',
                  borderRadius: 'var(--r-pill)',
                  fontSize: '0.75rem',
                  color: 'var(--success)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                }}>
                  {t.result}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="flex-1 mb-5">
                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className="mb-3 opacity-40" aria-hidden="true">
                  <path d="M0 18V10.5C0 4.5 3.5 1.5 10.5 0L12 2.5C9 3.5 7 5 6.5 7.5H10.5V18H0ZM13.5 18V10.5C13.5 4.5 17 1.5 24 0L25.5 2.5C22.5 3.5 20.5 5 20 7.5H24V18H13.5Z" fill="var(--primary)"/>
                </svg>
                <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.65, fontStyle: 'italic' }}>
                  "{t.quote}"
                </p>
              </blockquote>

              {/* Author */}
              <div style={{
                paddingTop: '16px',
                borderTop: '1px solid var(--border)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  color: 'var(--text)',
                }}>
                  {t.author}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '2px' }}>
                  {t.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
