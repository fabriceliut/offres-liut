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
    label: 'Mon approche',
    desc: "Je viens sur le terrain, je comprends vos flux de l'intérieur, et on co-construit ensemble ce qui manque. Pas un plan figé, mais des ajustements concrets qu'on teste et qu'on améliore.",
    accent: true,
  },
  {
    label: 'Conseil classique',
    desc: "Diagnostic générique, recommandations théoriques, peu d'appropriation par les équipes. Le rapport finit dans un tiroir.",
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
            Ce que je fais,{' '}
            <span style={{ color: 'var(--primary)' }}>concrètement</span>
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
            J'appelle ça le Design Organisationnel. En pratique : je regarde comment
            votre entreprise fonctionne vraiment, et on ajuste ce qui coince — avec vos équipes,
            pas dans un rapport que personne ne lit.
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
              <strong style={{ color: 'var(--accent)' }}>Ce que ça donne :</strong>{' '}
              les équipes s'approprient les changements, les résultats
              sont mesurables dès les premiers mois, et l'organisation tourne mieux — même quand je ne suis plus là.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
