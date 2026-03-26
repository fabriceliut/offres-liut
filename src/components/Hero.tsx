import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from './Container';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const STATS = [
  { value: '+150', label: 'organisations accompagnées' },
  { value: '+15 ans', label: "d'expérience terrain" },
  { value: '40 000€', label: "d'économies observées/an" },
  { value: '10–90', label: 'salariés' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center overflow-hidden"
      style={{
        minHeight: '100vh',
        paddingTop: '96px',
        paddingBottom: '80px',
      }}
      aria-label="Introduction"
    >
      {/* Background subtle grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(118,107,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(118,107,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 100%)',
        }}
      />

      {/* Glow */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(118,107,255,0.08) 0%, transparent 70%)',
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          {/* Index label */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <span className="index-label">Fabrice Liut — Associé Opérationnel & Stratégique</span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ color: 'var(--text)' }}
            className="mb-6"
          >
            Design Organisationnel{' '}
            <span style={{ color: 'var(--primary)' }}>pour PME & PMI</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg mb-10 max-w-xl"
            style={{ color: 'var(--muted)' }}
          >
            Depuis plus de 15 ans, j'accompagne les dirigeants de PME & PMI
            (10–90 salariés) dans la transformation de leur organisation.
            Voici ce que je propose — et les résultats concrets obtenus.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="https://cal.com/fabrice-liut/45-min-meeting?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="2" y="3" width="12" height="11" rx="2" stroke="white" strokeWidth="1.3"/>
                <path d="M5 1.5V4.5M11 1.5V4.5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
                <path d="M2 7h12" stroke="white" strokeWidth="1.3"/>
              </svg>
              Prendre 45 min
            </a>
            <Link
              to="/entreprises"
              className="btn-secondary"
            >
              Découvrir le programme
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="card-base p-4"
                style={{ background: 'var(--surface)', textAlign: 'center' }}
              >
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  letterSpacing: '-0.03em',
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '4px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
