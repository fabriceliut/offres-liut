import { motion, type Variants } from 'framer-motion';
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

const DIFFERENTIATIONS = [
  {
    label: 'Design Organisationnel',
    desc: "On part de votre réalité terrain, on co-construit avec vos équipes, et on vise des solutions qui tiennent dans le temps.",
    accent: true,
  },
  {
    label: 'Conseil classique',
    desc: "Diagnostic générique, recommandations théoriques, peu d'appropriation par les équipes, et résultats difficiles à mesurer.",
    accent: false,
  },
];

export default function DesignOrg() {
  return (
    <section
      id="methode"
      style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)' }}
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
            <IndexLabel text="01 — La méthode" />
          </motion.div>

          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mb-5"
            style={{ color: 'var(--text)' }}
          >
            Le Design Organisationnel,{' '}
            <span style={{ color: 'var(--primary)' }}>c'est quoi exactement ?</span>
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
            Ce n'est pas du conseil classique. C'est une approche qui traite l'organisation
            comme un système vivant — avec des méthodes issues du design,
            de la systémique et de l'intelligence collective. C'est cette approche que je pratique depuis 15 ans.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid md:grid-cols-2 gap-4"
          >
            {DIFFERENTIATIONS.map((item, i) => (
              <div
                key={i}
                className="card-base p-6"
                style={{
                  borderColor: item.accent ? 'var(--border-strong)' : 'var(--border)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {item.accent && (
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'var(--primary)',
                      borderRadius: '2px 2px 0 0',
                    }}
                  />
                )}
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  color: item.accent ? 'var(--text)' : 'var(--muted)',
                  marginBottom: '10px',
                }}>
                  {item.accent ? '✦ ' : '✕ '}{item.label}
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-8 p-5 rounded-2xl"
            style={{
              background: 'rgba(118,107,255,0.06)',
              border: '1px solid var(--border-strong)',
            }}
          >
            <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.65 }}>
              <strong style={{ color: 'var(--accent)' }}>Ce que j'observe sur le terrain :</strong>{' '}
              Les équipes s'approprient les solutions, les résultats sont mesurables dès les
              premiers mois, et l'organisation gagne en autonomie — pas en dépendance.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
