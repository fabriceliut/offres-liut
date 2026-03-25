import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from './Container';
import IndexLabel from './IndexLabel';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const IA_POINTS = [
  {
    icon: '⚡',
    text: "Automatiser les tâches répétitives qui mangent le temps de vos équipes — tris, résumés, reporting, relances.",
  },
  {
    icon: '📊',
    text: "Augmenter vos décisions avec des données en temps réel. Moins d'intuition, plus de lucidité.",
  },
  {
    icon: '🔒',
    text: "Sécuriser vos flux. L'IA intégrée proprement, c'est un coffre-fort. Bricolée, c'est une passoire.",
  },
];

export default function IASection() {
  return (
    <section
      id="ia"
      style={{
        paddingTop: 'var(--spacing-section-v)',
        paddingBottom: 'var(--spacing-section-v)',
      }}
    >
      <Container>
        <div className="max-w-3xl mx-auto">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mb-4"
          >
            <IndexLabel text="03C — L'accélérateur" />
          </motion.div>

          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mb-4"
            style={{ color: 'var(--text)' }}
          >
            Et l'IA dans tout ça ?{' '}
            <span style={{ color: 'var(--primary)' }}>Aux bons endroits, pas partout.</span>
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="text-base mb-10"
            style={{ color: 'var(--muted)', maxWidth: '580px' }}
          >
            Une organisation bien structurée, c'est la fondation.
            L'IA, c'est l'accélérateur — mais seulement là où elle crée de la valeur.
            Pas de gadget, pas d'usine à gaz. Du chirurgical.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {IA_POINTS.map((point, i) => (
              <motion.div
                key={i}
                custom={i + 3}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="card-base p-5"
              >
                <span style={{ fontSize: '1.3rem', display: 'block', marginBottom: '8px' }}>{point.icon}</span>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="card-base p-8 text-center"
            style={{
              borderColor: 'var(--border-strong)',
              background: 'linear-gradient(135deg, var(--surface) 0%, var(--surface2) 100%)',
            }}
          >
            <h3 className="mb-3" style={{ color: 'var(--text)', fontSize: '1.15rem' }}>
              L'IA comme <span style={{ color: 'var(--primary)' }}>levier, pas comme gadget</span>
            </h3>
            <p className="mb-6" style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 24px' }}>
              Je diagnostique vos flux, j'intègre l'IA là où ça rapporte,
              et je forme vos équipes pour qu'elles se l'approprient. Le tout, sécurisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-6">
              <div className="text-center">
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>1-2h</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>gagnées par jour / personne</div>
              </div>
              <div className="hidden sm:block" style={{ width: '1px', background: 'var(--border)', alignSelf: 'stretch' }} aria-hidden="true" />
              <div className="text-center">
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>0</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>migration nécessaire</div>
              </div>
              <div className="hidden sm:block" style={{ width: '1px', background: 'var(--border)', alignSelf: 'stretch' }} aria-hidden="true" />
              <div className="text-center">
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--success)' }}>100%</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>sur vos outils existants</div>
              </div>
            </div>
            <Link
              to="/ia"
              className="btn-primary"
              style={{ fontSize: '0.95rem', padding: '14px 28px' }}
            >
              <span className="hidden sm:inline">Découvrir l'offre Intégration IA</span>
              <span className="sm:hidden">Offre Intégration IA</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
