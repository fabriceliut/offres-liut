import { motion } from 'framer-motion';
import Container from './Container';
import IndexLabel from './IndexLabel';

const TESTIMONIALS = [
  {
    quote: "En 4 mois, on a réduit nos délais de livraison de 30% et libéré 2 semaines par an de travail pour chaque chef d'atelier. Ce que Fabrice a vu en 2 jours, on cherchait depuis 2 ans.",
    author: 'Directeur industriel',
    company: 'Métallurgie, 55 salariés',
    result: '−30% délais livraison',
  },
  {
    quote: "J'avais peur de dépenser 15 000€ pour du vent. On a récupéré l'investissement en 8 mois. Ce qui m'a convaincu : Fabrice ne nous a pas donné un rapport — il nous a aidé à changer.",
    author: 'PDG',
    company: 'Sous-traitant aéronautique, 38 salariés',
    result: 'ROI en 8 mois',
  },
  {
    quote: "Notre équipe de direction était épuisée. Fabrice a restructuré nos instances de décision en 6 semaines. Aujourd'hui je passe 40% de temps en moins sur l'opérationnel.",
    author: 'Présidente',
    company: 'Plasturgie, 72 salariés',
    result: '−40% temps opérationnel DG',
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
          <IndexLabel text="DOSSIER 05 — Retours terrain" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mb-4"
          style={{ color: 'var(--text)' }}
        >
          Ce qu'en disent{' '}
          <span style={{ color: 'var(--primary)' }}>ceux qui l'ont vécu</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mb-12 max-w-xl"
          style={{ color: 'var(--muted)' }}
        >
          Des PME industrielles qui ont transformé leur organisation.
          Des résultats mesurables, des équipes qui ont porté le changement.
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
