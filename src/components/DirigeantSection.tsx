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

const PAIN_POINTS = [
  {
    icon: '🧠',
    text: "Charge mentale débordante : vous jonglez avec trop d'informations, de projets et de décisions",
  },
  {
    icon: '⏱',
    text: 'Vous perdez un temps fou à chercher vos documents, vos notes, vos infos',
  },
  {
    icon: '🔄',
    text: 'Vous avez essayé 10 outils différents — rien ne tient sur la durée',
  },
  {
    icon: '🎯',
    text: "Vous n'arrivez pas à vous concentrer sur ce qui compte vraiment : développer votre activité",
  },
];

export default function DirigeantSection() {
  return (
    <section
      id="dirigeant"
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
            <IndexLabel text="DOSSIER 03B — Pour le dirigeant" />
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
            Et vous, dirigeant ?{' '}
            <span style={{ color: 'var(--primary)' }}>Votre propre organisation tient-elle la route ?</span>
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
            Au-delà de transformer l'organisation de votre entreprise, il y a votre propre
            système personnel. Celui qui vous permet de garder le cap, de décider vite,
            et de ne rien laisser filer.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {PAIN_POINTS.map((point, i) => (
              <motion.div
                key={i}
                custom={i + 3}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="card-base p-5 flex items-start gap-3"
              >
                <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{point.icon}</span>
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
              Sortir du chaos en <span style={{ color: 'var(--primary)' }}>6 mois</span>
            </h3>
            <p className="mb-6" style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 24px' }}>
              Un accompagnement dédié pour construire votre système d'organisation personnel sur-mesure.
              Moins de charge mentale, plus de temps, focus sur l'essentiel.
            </p>
            <div className="flex flex-wrap gap-6 justify-center mb-6">
              <div className="text-center">
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>-50%</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>charge mentale</div>
              </div>
              <div style={{ width: '1px', background: 'var(--border)', alignSelf: 'stretch' }} aria-hidden="true" />
              <div className="text-center">
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>+30%</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>temps gagné/semaine</div>
              </div>
              <div style={{ width: '1px', background: 'var(--border)', alignSelf: 'stretch' }} aria-hidden="true" />
              <div className="text-center">
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--success)' }}>13 000€</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>investissement</div>
              </div>
            </div>
            <Link
              to="/entrepreneurs"
              className="btn-primary"
              style={{ fontSize: '0.95rem', padding: '14px 28px' }}
            >
              Découvrir l'offre Organisation Personnelle
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
