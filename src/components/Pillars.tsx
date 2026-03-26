import { motion } from 'framer-motion';
import Container from './Container';
import IndexLabel from './IndexLabel';

const PILLARS = [
  {
    num: '01',
    title: 'Immersion terrain',
    desc: "Je passe du temps dans votre usine, avec vos équipes. Je regarde comment ça tourne vraiment — pas le flux théorique du dernier audit. Un regard extérieur permet souvent de voir ce qui est devenu invisible au quotidien.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'On remonte aux causes',
    desc: "On ne reste pas sur les symptômes. Je cartographie vos flux, je cherche les goulots, les frictions silencieuses, les ressources sous-exploitées. C'est ce qui me permet de proposer des actions ciblées.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="19" cy="5" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="19" cy="19" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 12h4M13 12h2M16.7 6.3L13 10M16.7 17.7L13 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Avec vos équipes, pas pour elles',
    desc: "Les solutions sont construites avec ceux qui vont les utiliser. Ateliers, prototypage rapide, tests terrain. Si vos équipes ne se les approprient pas, ça ne sert à rien.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="10" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="10" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6.5 10V7a1 1 0 011-1h9a1 1 0 011 1v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 6V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const cardVariants: import('framer-motion').Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Pillars() {
  return (
    <section
      id="piliers"
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
          <IndexLabel text="02 — Les piliers" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mb-4"
          style={{ color: 'var(--text)' }}
        >
          Comment je travaille
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mb-12 max-w-xl"
          style={{ color: 'var(--muted)' }}
        >
          Chaque mission suit le même fil. Du terrain à la solution,
          de l'observation à l'action. C'est ce que j'ai vu fonctionner.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-5">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="card-base p-6"
              style={{ background: 'var(--surface2)' }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div style={{
                  color: 'var(--primary)',
                  background: 'rgba(118,107,255,0.1)',
                  borderRadius: '10px',
                  padding: '10px',
                  flexShrink: 0,
                }}>
                  {pillar.icon}
                </div>
                <div>
                  <div className="index-label mb-2">PILIER {pillar.num}</div>
                  <h3 style={{ color: 'var(--text)', fontSize: '1.05rem' }}>{pillar.title}</h3>
                </div>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
