import { motion } from 'framer-motion';
import Container from './Container';
import IndexLabel from './IndexLabel';

const SITUATIONS = [
  {
    num: '01',
    title: 'Croissance qui crée du chaos',
    desc: "Vous avez doublé de taille en 3 ans. Vos processus d'il y a 5 ans ne tiennent plus. Les managers passent leur temps à éteindre des feux.",
    signal: "Signal : réunions qui n'aboutissent plus, informations qui se perdent",
  },
  {
    num: '02',
    title: 'Flux de production en tension',
    desc: "Les délais glissent, les coûts augmentent, la qualité fluctue. Tout le monde s'active mais le système perd de l'énergie.",
    signal: "Signal : heures sup constantes, turnover en hausse, clients qui s'impatientent",
  },
  {
    num: '03',
    title: 'Projet de transformation bloqué',
    desc: "Vous avez lancé un chantier ERP, lean, réorg — et ça patine. Résistances, manque d'adoption, résultats qui ne viennent pas.",
    signal: "Signal : équipes qui contournent les nouvelles procédures, retour aux anciennes habitudes",
  },
  {
    num: '04',
    title: "Direction qui s'épuise",
    desc: "Vous faites le travail de 3 personnes. Votre organisation repose trop sur vous, vous n'arrivez pas à déléguer réellement.",
    signal: "Signal : vous êtes sur le chemin critique de tout, votre agenda est plein de réunions opérationnelles",
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
          Vous reconnaissez-vous{' '}
          <span style={{ color: 'var(--primary)' }}>dans ces situations ?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mb-12 max-w-xl"
          style={{ color: 'var(--muted)' }}
        >
          Des situations fréquentes dans les PME en croissance.
          Si l'une d'elles résonne, on a probablement quelque chose à explorer ensemble.
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
