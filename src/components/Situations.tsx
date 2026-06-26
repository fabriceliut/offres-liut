import { m } from 'framer-motion';
import Container from './Container';
import IndexLabel from './IndexLabel';

const SITUATIONS = [
  {
    num: '01',
    title: 'Faire de la croissance un élan',
    desc: "Vous passez de 10 à 30, 50, 90 personnes. Le bon moment pour donner à votre organisation un cadre qui suit le rythme.",
    signal: "→ Une structure prête pour la prochaine étape.",
  },
  {
    num: '02',
    title: "Faire circuler l'info et les décisions",
    desc: "Quand l'information passe et que les décisions tombent vite, l'énergie va au bon endroit.",
    signal: "→ Des équipes alignées qui avancent ensemble.",
  },
  {
    num: '03',
    title: 'Réussir le grand chantier',
    desc: "ERP, lean, réorg — le moment de transformer un chantier en victoire d'équipe.",
    signal: "→ Une adoption réelle, pas sur le papier.",
  },
  {
    num: '04',
    title: 'Vous libérer du chemin critique',
    desc: "Reprendre de la hauteur, déléguer sereinement, retrouver du temps pour piloter.",
    signal: "→ Une entreprise qui tourne sans dépendre de tout vous.",
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
        <m.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <IndexLabel text="03 — Situations" />
        </m.div>

        <m.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mb-4"
          style={{ color: 'var(--text)' }}
        >
          Les moments où une meilleure organisation{' '}
          <span style={{ color: 'var(--primary)' }}>change tout</span>
        </m.h2>

        <m.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mb-12 max-w-xl"
          style={{ color: 'var(--muted)' }}
        >
          Votre entreprise grandit. Voici les moments où repenser l'organisation
          ouvre le plus de possibilités.
        </m.p>

        <div className="grid md:grid-cols-2 gap-5">
          {SITUATIONS.map((situation, i) => (
            <m.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="card-base p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="index-label">OPPORTUNITÉ {situation.num}</span>
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
            </m.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
