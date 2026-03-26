import { useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Container from '../components/Container';
import Footer from '../components/Footer';
import IndexLabel from '../components/IndexLabel';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const STATS = [
  { value: '10 jours', label: 'de travail effectif' },
  { value: '6 mois', label: "d'accompagnement terrain" },
  { value: 'x4,5', label: 'retour moyen observé' },
];

const TIMELINE = [
  {
    phase: 'Phase 1',
    title: 'Je viens, j\'observe',
    days: 'Jours 1–2',
    items: [
      'Immersion sur le terrain avec vos équipes',
      'Interviews individuelles et collectives',
      'Analyse des process et des flux réels',
      'Identification de ce qui coînce et de ce qui marche déjà',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'On priorise ensemble',
    days: 'Jours 3–4',
    items: [
      'Co-construction du plan d\'action avec vous',
      'Quick wins + chantiers moyen terme',
      'Définition des indicateurs simples',
      'Lancement des premières actions',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'On teste, on ajuste, on continue',
    days: 'Jours 5–8',
    items: [
      'Accompagnement terrain de la mise en place',
      'Ajustements en temps réel',
      'Points de pilotage réguliers',
      'Formation des équipes aux nouveaux process',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Bilan & autonomie',
    days: 'Jours 9–10',
    items: [
      'Constat de ce qui a changé',
      'Mesure des gains réalisés',
      'Ajustements pour pérenniser',
      'Vous êtes autonome. L\'entreprise tourne.',
    ],
  },
];

const CASE_STUDIES = [
  {
    icon: '📐',
    title: 'PME de services — 30 personnes',
    before: [
      'Coordination entre équipes floue',
      'Heures perdues en allers-retours',
      'Reporting manuel et obsolète',
      'Direction sur-sollicitée en permanence',
    ],
    after: [
      '+3 185 heures récupérées par an',
      'Coordination simplifiée entre les équipes',
      'Reporting automatisé, en temps réel',
      'Direction libérée de l\'opérationnel',
    ],
    investment: '15 000€',
    gain: '67 500€',
    roi: 'x4,5',
    detail: 'Temps récupéré + réduction coordination + meilleure rentabilité',
  },
  {
    icon: '⚙️',
    title: 'PME IT — 90 personnes',
    before: [
      'Rôles mal définis entre les équipes',
      'Délais de livraison en augmentation',
      'Turn-over en hausse',
      'Temps facturable en baisse',
    ],
    after: [
      '+12% de temps facturable',
      '−12% sur les délais de livraison',
      'Turn-over en baisse',
      'Rôles clarifiés, fonctionnement fluide',
    ],
    investment: '18 000€',
    gain: 'Multi-levier',
    roi: 'ROI < 6 mois',
    detail: 'Temps facturable + réduction délais + baisse turn-over',
  },
];

const REASONS = [
  { title: 'Terrain', desc: 'Je viens sur place, avec vos équipes. Pas de diagnostic à distance.' },
  { title: 'Concret', desc: 'On lance des actions dès les premières semaines.' },
  { title: 'Mesuré', desc: 'Chaque action est suivie, chaque gain est vérifié.' },
  { title: 'Adapté', desc: 'On ajuste en temps réel selon ce qui marche.' },
  { title: 'Autonomie', desc: "L'objectif : que ça tienne sans moi."},
];

export default function OfferEntreprises() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden"
          style={{
            minHeight: '70vh',
            paddingTop: '140px',
            paddingBottom: '80px',
          }}
        >
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
          <Container className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-6">
                <IndexLabel text="PROGRAMME — Entreprises" />
              </motion.div>

              <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="mb-5" style={{ color: 'var(--text)' }}>
                10 jours sur le terrain,{' '}
                <span style={{ color: 'var(--primary)' }}>des résultats mesurés</span>
              </motion.h1>

              <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
                Un accompagnement de 6 mois. Voici comment ça se passe,
                ce que ça implique, et ce que ça donne concrètement.
              </motion.p>

              <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
                {STATS.map((stat, i) => (
                  <div key={i} className="card-base p-4" style={{ background: 'var(--surface)', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '-0.03em' }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '4px' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.p custom={4} variants={fadeUp} initial="hidden" animate="visible" className="mt-6" style={{ fontSize: '0.78rem', color: 'var(--muted)', opacity: 0.6 }}>
                *Retour moyen observé sur les missions de structuration d'entreprises de 10 à 90 salariés
              </motion.p>
            </div>
          </Container>
        </section>

        {/* ROI Box */}
        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-8">
                <IndexLabel text="ROI — Retour sur investissement" />
              </div>

              <div className="mb-10 p-8 rounded-2xl text-center" style={{ background: 'rgba(118,107,255,0.08)', border: '1px solid var(--border-strong)' }}>
                <h2 className="mb-3" style={{ color: 'var(--text)', fontSize: '1.5rem' }}>Ce que ça donne, concrètement</h2>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.2rem, 4vw, 2rem)', fontWeight: 700, color: 'var(--primary)', margin: '16px 0' }}>
                  Retour moyen observé : x4,5
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  PME de services, 30 personnes : +3 185 heures récupérées par an.
                  <br />PME IT, 90 personnes : +12% de temps facturable, −12% de délais.
                </p>
                <p style={{ color: 'var(--success)', fontSize: '0.95rem', fontWeight: 600, marginTop: '12px' }}>
                  BDR Therma : un process terrain passé de 48h à 20 minutes.
                </p>
              </div>

              {/* Investment breakdown */}
              <div className="card-base p-6" style={{ background: 'var(--surface2)' }}>
                <h3 className="mb-5" style={{ color: 'var(--text)', fontSize: '1.1rem' }}>
                  Ce que ça implique pour vous
                </h3>
                <p className="mb-6" style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>
                  Soyons clairs sur le temps que ça demande. Une structuration, ça mobilise aussi vos équipes.
                </p>

                <div className="mb-5 p-4 rounded-xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <div className="mb-3">
                    <span style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.9rem' }}>👔 Dirigeant :</span>
                    <span style={{ color: 'var(--muted)', fontSize: '0.875rem' }}> environ 2-3h par jour effectif</span>
                    <div style={{ color: 'var(--muted)', fontSize: '0.78rem', opacity: 0.7, marginTop: '2px' }}>
                      Soit ~25h sur les 6 mois pour valider les orientations et piloter
                    </div>
                  </div>
                  <div>
                    <span style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.9rem' }}>👥 Équipes :</span>
                    <span style={{ color: 'var(--muted)', fontSize: '0.875rem' }}> environ 1h par collaborateur par jour effectif</span>
                    <div style={{ color: 'var(--muted)', fontSize: '0.78rem', opacity: 0.7, marginTop: '2px' }}>
                      Soit ~10h par personne sur 6 mois pour interviews, tests, ajustements
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl" style={{ background: 'var(--surface)', borderLeft: '3px solid var(--primary)' }}>
                  <div style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.9rem', marginBottom: '12px' }}>
                    Exemple pour une entreprise de 10 personnes :
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between" style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>
                      <span>Accompagnement Fabrice Liut</span>
                      <span style={{ fontWeight: 600, color: 'var(--text)' }}>15 000€</span>
                    </div>
                    <div className="flex justify-between gap-2 pb-2" style={{ fontSize: '0.875rem', color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>
                      <span>Temps interne (10 pers. × 10h + dirigeant 25h)</span>
                      <span style={{ fontWeight: 600, color: 'var(--text)', whiteSpace: 'nowrap' }}>~7 500€</span>
                    </div>
                    <div className="flex justify-between pt-1" style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)' }}>
                      <span>INVESTISSEMENT TOTAL</span>
                      <span>22 500€</span>
                    </div>
                    <div className="flex justify-between" style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--success)' }}>
                      <span>Économies année 1</span>
                      <span>40 000€</span>
                    </div>
                    <div className="flex justify-between" style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--success)' }}>
                      <span>ROI NET première année</span>
                      <span>+17 500€</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted)', opacity: 0.6, marginTop: '12px' }}>
                    Les années suivantes : 40 000€ d'économies récurrentes sans coût additionnel
                  </p>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Comment ça marche */}
        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: '48px' }}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <div className="mb-4">
                <IndexLabel text="DÉMARRAGE — Comment ça marche" />
              </div>
              <h2 className="mb-5" style={{ color: 'var(--text)' }}>
                Comment <span style={{ color: 'var(--primary)' }}>ça marche ?</span>
              </h2>
              <p className="mb-4" style={{ color: 'var(--muted)' }}>
                On commence par <span style={{ color: 'var(--primary)', fontWeight: 600 }}>45 minutes d'échange</span> pour comprendre votre contexte.
                Vous me dites ce qui bloque. Je vous dis ce que je ferais, et si je suis la bonne personne.
              </p>
              <p style={{ color: 'var(--muted)' }}>
                Si on décide d'avancer, on attaque. Pas de paperasse inutile.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Programme des 10 jours */}
        <section style={{ paddingTop: '48px', paddingBottom: 'var(--spacing-section-v)' }}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <div className="mb-4">
                <IndexLabel text="PROGRAMME — 10 jours sur 6 mois" />
              </div>
              <h2 className="mb-5" style={{ color: 'var(--text)' }}>
                Le programme des <span style={{ color: 'var(--primary)' }}>10 jours</span>
              </h2>
              <p className="mb-10" style={{ color: 'var(--muted)' }}>
                10 jours de travail effectif sur 6 mois. Voici le déroulé type, ajusté à chaque contexte.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto relative">
              {/* Timeline line */}
              <div
                aria-hidden="true"
                className="absolute left-4 top-0 bottom-0 w-px hidden md:block"
                style={{ background: 'linear-gradient(to bottom, var(--border-strong), var(--border), transparent)' }}
              />

              <div className="flex flex-col gap-6">
                {TIMELINE.map((phase, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="card-base p-6 md:ml-12 relative"
                    style={{ background: 'var(--surface2)' }}
                  >
                    {/* Timeline dot */}
                    <div
                      aria-hidden="true"
                      className="absolute hidden md:block"
                      style={{
                        left: '-44px',
                        top: '24px',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: 'var(--primary)',
                        border: '3px solid var(--bg)',
                        boxShadow: '0 0 0 2px var(--primary)',
                      }}
                    />
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <IndexLabel text={phase.phase} />
                      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--text)', fontSize: '1rem' }}>
                        {phase.title}
                      </span>
                      <span style={{
                        padding: '3px 10px',
                        background: 'rgba(118,107,255,0.08)',
                        borderRadius: 'var(--r-pill)',
                        fontSize: '0.72rem',
                        color: 'var(--accent)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 500,
                      }}>
                        {phase.days}
                      </span>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2" style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                          <span style={{ color: 'var(--primary)', fontWeight: 700, flexShrink: 0 }}>→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
                className="mt-8 p-5 rounded-xl md:ml-12"
                style={{ background: 'var(--surface)', borderLeft: '3px solid var(--primary)', border: '1px solid var(--border)' }}
              >
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                  <strong style={{ color: 'var(--text)' }}>Et après ?</strong> On peut prévoir des points de suivi sur les 6 mois suivants pour mesurer le ROI à 1 an et valider la pérennité des changements. C'est optionnel, on en discute ensemble selon vos besoins.
                </p>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Exemples de transformations */}
        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <IndexLabel text="RÉSULTATS — Cas concrets" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mb-10"
              style={{ color: 'var(--text)' }}
            >
              Exemples de <span style={{ color: 'var(--primary)' }}>transformations</span>
            </motion.h2>

            <div className="flex flex-col gap-8">
              {CASE_STUDIES.map((cs, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="card-base p-6"
                  style={{ background: 'var(--surface2)' }}
                >
                  <h3 className="mb-5" style={{ color: 'var(--text)', fontSize: '1.1rem' }}>
                    {cs.icon} {cs.title}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-5">
                    <div className="p-4 rounded-xl" style={{ background: 'var(--surface)', borderLeft: '3px solid #ef5350' }}>
                      <div style={{ fontWeight: 600, color: '#ef5350', fontSize: '0.9rem', marginBottom: '10px' }}>❌ Avant</div>
                      <ul className="flex flex-col gap-1.5">
                        {cs.before.map((item, j) => (
                          <li key={j} style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>→ {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 rounded-xl" style={{ background: 'var(--surface)', borderLeft: '3px solid var(--success)' }}>
                      <div style={{ fontWeight: 600, color: 'var(--success)', fontSize: '0.9rem', marginBottom: '10px' }}>✓ Après 6 mois</div>
                      <ul className="flex flex-col gap-1.5">
                        {cs.after.map((item, j) => (
                          <li key={j} style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>→ {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl" style={{ background: 'var(--surface)', borderLeft: '3px solid var(--primary)' }}>
                    <div className="flex flex-wrap items-center gap-6">
                      <div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '2px' }}>Investissement total</div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--text)' }}>{cs.investment}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '2px' }}>Gain annuel</div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--success)' }}>{cs.gain}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '2px' }}>ROI net année 1</div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--success)' }}>{cs.roi}</div>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--muted)', opacity: 0.6, marginTop: '8px' }}>{cs.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Pourquoi ça marche */}
        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)' }}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <div className="mb-4">
                <IndexLabel text="APPROCHE — Pourquoi ça marche" />
              </div>
              <h2 className="mb-8" style={{ color: 'var(--text)' }}>
                Pourquoi <span style={{ color: 'var(--primary)' }}>ça marche ?</span>
              </h2>
              <div className="flex flex-col gap-4">
                {REASONS.map((reason, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                  >
                    <span style={{ color: 'var(--primary)', fontWeight: 700, flexShrink: 0 }}>→</span>
                    <div>
                      <span style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.9rem' }}>{reason.title}</span>
                      <span style={{ color: 'var(--muted)', fontSize: '0.875rem' }}> — {reason.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* CTA */}
        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="mb-5" style={{ color: 'var(--text)' }}>
                On en discute ?{' '}
                <span style={{ color: 'var(--primary)' }}>45 minutes.</span>
              </h2>
              <p className="mb-8" style={{ color: 'var(--muted)' }}>
                Vous posez le contexte. On identifie ce qui coînce. Je vous dis ce que je ferais.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <a
                  href="https://cal.com/fabrice-liut/45-min-meeting?overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '1rem', padding: '16px 32px' }}
                >
                  Prendre 45 min
                </a>
                <Link to="/" className="btn-secondary" style={{ fontSize: '1rem', padding: '15px 28px' }}>
                  ← Retour à l'accueil
                </Link>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)', opacity: 0.7 }}>
                Pas sûr ? Pas grave. On échange, on voit si ça colle. Si ce n'est pas le bon moment, on se le dit.
              </p>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
