import { motion } from 'framer-motion';
import Container from './Container';
import IndexLabel from './IndexLabel';

const SITUATIONS = [
  {
    num: '01',
    title: 'La croissance brouille les repères',
    desc: "Vous passez de 10 à 30, 50, 90 personnes. Les process informels craquent, la coordination devient lourde, des coûts cachés apparaissent.",
    signal: "Réunions qui s'allongent, doublons, délais qui glissent",
  },
  {
    num: '02',
    title: 'La communication coincé entre les équipes',
    desc: "Les informations se perdent, les décisions traînent, les équipes travaillent en silo. Tout le monde s'active mais le système perd de l'énergie.",
    signal: "Emails sans réponse, réunions qui n'aboutissent pas, turn-over en hausse",
  },
  {
    num: '03',
    title: 'Un sujet qui traîne',
    desc: "Un chantier ERP, lean, réorg — et ça patine. Résistances, manque d'adoption. Personne n'arrive à le faire avancer seul.",
    signal: "Équipes qui contournent les nouvelles procédures, retour aux anciennes habitudes",
  },
  {
    num: '04',
    title: 'Une direction qui porte tout',
    desc: "Vous faites le travail de 3 personnes. Votre entreprise repose trop sur vous. Déléguer est compliqué : sans vous, rien n'avance.",
    signal: "Vous êtes sur le chemin critique de tout, votre agenda déborde d'opérationnel",
  },
];

const cardVariants: import('framer-motion').Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Situations() {
  return (
    <section
      id="situations"
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
          <IndexLabel text="03 — Situations" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mb-4"
          style={{ color: 'var(--text)' }}
        >
          Quelques situations{' '}
          <span style={{ color: 'var(--primary)' }}>où j'interviens souvent</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mb-12 max-w-xl"
          style={{ color: 'var(--muted)' }}
        >
          L'entreprise grandit, mais l'organisation ne suit plus.
          Si l'une de ces situations vous parle, on a probablement quelque chose à explorer.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5">
          {SITUATIONS.map((situation, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="card-base p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="index-label">CAS {situation.num}</span>
              </div>
              <h3 className="mb-3" style={{ color: 'var(--text)', fontSize: '1rem' }}>
                {situation.title}
              </h3>
              <p className="mb-4" style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                {situation.desc}
              </p>
              <div style={{
                padding: '8px 12px',
                background: 'rgba(118,107,255,0.05)',
                borderLeft: '2px solid var(--primary)',
                borderRadius: '0 6px 6px 0',
                fontSize: '0.78rem',
                color: 'var(--accent)',
                fontStyle: 'italic',
              }}>
                {situation.signal}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
