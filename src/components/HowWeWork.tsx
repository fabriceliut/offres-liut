import { motion } from 'framer-motion';
import Container from './Container';
import IndexLabel from './IndexLabel';

const STEPS = [
  {
    num: '01',
    title: '45 min pour poser le contexte',
    desc: "Vous posez le contexte. On identifie ce qui coincé vraiment. Je vous dis ce que je ferais, et si je suis la bonne personne pour vous accompagner.",
    duration: '45 min',
  },
  {
    num: '02',
    title: 'Je viens, j\u2019observe',
    desc: "2 à 3 jours sur place pour comprendre vos flux de l'intérieur. Interviews, observation terrain, cartographie de l'existant. Un état des lieux précis.",
    duration: '2–3 jours',
  },
  {
    num: '03',
    title: 'On teste, on ajuste, on continue',
    desc: "On co-construit les ajustements. Pas un plan figé — des changements concrets qu'on teste et qu'on améliore au fil de l'eau. Vous gardez le lead.",
    duration: '3–6 mois',
  },
];

export default function HowWeWork() {
  return (
    <section
      id="deroulement"
      style={{
        paddingTop: 'var(--spacing-section-v)',
        paddingBottom: 'var(--spacing-section-v)',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <IndexLabel text="04 — Déroulé" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mb-4"
          style={{ color: 'var(--text)' }}
        >
          Comment ça{' '}
          <span style={{ color: 'var(--primary)' }}>démarre</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mb-14 max-w-xl"
          style={{ color: 'var(--muted)' }}
        >
          Pas de programme packagé. On avance pas à pas,
          en commençant toujours par comprendre.
        </motion.p>

        <div className="relative">
          {/* Connecting line desktop */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-8 left-0 right-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, var(--border-strong), transparent)',
              top: '32px',
              left: '16.67%',
              right: '16.67%',
            }}
          />

          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="card-base p-6"
                style={{ background: 'var(--surface2)' }}
              >
                {/* Step number */}
                <div className="flex items-center gap-3 mb-5">
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(118,107,255,0.12)',
                    border: '1px solid var(--border-strong)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    color: 'var(--primary)',
                    flexShrink: 0,
                  }}>
                    {step.num}
                  </div>
                  <div style={{
                    padding: '3px 10px',
                    background: 'rgba(118,107,255,0.08)',
                    borderRadius: 'var(--r-pill)',
                    fontSize: '0.72rem',
                    color: 'var(--accent)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}>
                    {step.duration}
                  </div>
                </div>

                <h3 className="mb-3" style={{ color: 'var(--text)', fontSize: '1rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
