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
    icon: '🔥',
    text: "Sans vous, rien n'avance. Vous êtes sur le chemin critique de chaque décision.",
  },
  {
    icon: '⏱',
    text: "70% de votre temps part dans l'opérationnel. Le reste, c'est des urgences.",
  },
  {
    icon: '📊',
    text: "Vos infos sont éparpillées entre emails, carnets, fichiers et WhatsApp. Pas de vue d'ensemble.",
  },
  {
    icon: '🎯',
    text: "Déléguer est compliqué. Vos collaborateurs n'ont pas les bonnes infos, alors vous reprenez la main.",
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
            <IndexLabel text="03B — Pour le dirigeant" />
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
            C'est une situation{' '}
            <span style={{ color: 'var(--primary)' }}>que je vois souvent.</span>
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
            Au-delà de l'organisation, il y a votre système de pilotage.
            Celui qui vous permet de voir clair, décider vite, et déléguer. Ça se structure.
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
              On structure votre pilotage en <span style={{ color: 'var(--primary)' }}>6 mois</span>
            </h3>
            <p className="mb-6" style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 24px' }}>
              Je construis votre cockpit de direction sur Notion. Vue d'ensemble, délégation, reporting.
              Vous gardez le lead. Je fais le technique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-6">
              <div className="text-center">
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>6-8h</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>récupérées/semaine</div>
              </div>
              <div className="hidden sm:block" style={{ width: '1px', background: 'var(--border)', alignSelf: 'stretch' }} aria-hidden="true" />
              <div className="text-center">
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>360°</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>vision en temps réel</div>
              </div>
              <div className="hidden sm:block" style={{ width: '1px', background: 'var(--border)', alignSelf: 'stretch' }} aria-hidden="true" />
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
              <span className="hidden sm:inline">Découvrir l'offre Pilotage Dirigeant</span>
              <span className="sm:hidden">Offre Pilotage Dirigeant</span>
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
