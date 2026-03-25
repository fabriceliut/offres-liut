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
  { value: '22 500€', label: 'investissement total*' },
  { value: '+17 500€', label: 'ROI net année 1**' },
];

const TIMELINE = [
  {
    phase: 'Phase 1',
    title: 'Observation & Diagnostic',
    days: 'Jours 1–2',
    items: [
      'Immersion complète dans votre organisation',
      'Interviews individuelles et collectives avec vos équipes',
      'Analyse terrain des process et flux de travail',
      'Identification des freins cachés et des talents sous-exploités',
    ],
  },
  {
    phase: 'Phase 2',
    title: "Priorisation & Plan d'Action",
    days: 'Jours 3–4',
    items: [
      "Co-construction du plan d'action avec vous",
      'Priorisation step-by-step : quick wins + moyen terme',
      'Définition des indicateurs de mesure',
      'Lancement des premières actions concrètes',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Itérations & Pilotage',
    days: 'Jours 5–8',
    items: [
      'Accompagnement terrain de la mise en œuvre',
      'Ajustements en temps réel selon les retours',
      'Points de pilotage réguliers',
      'Mesure de la progression sur les indicateurs clés',
      'Formation des équipes aux nouveaux process',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Bilan & Validation',
    days: 'Jours 9–10',
    items: [
      'Constat des changements installés',
      'Calcul précis des gains réalisés',
      "Validation de l'atteinte de l'objectif minimum",
      'Ajustements finaux pour pérenniser',
    ],
  },
];

const CASE_STUDIES = [
  {
    icon: '📐',
    title: 'Agence de communication — 14 personnes',
    before: [
      '12h/semaine perdues en réunions floues',
      'Validation client : 2-3 semaines',
      'Retards projet : 40% des dossiers',
      'Turnover : 3 départs/an',
      'Heures sup non facturées : ~80h/mois',
    ],
    after: [
      'Réunions divisées par 2, avec ordre du jour',
      'Validation client : 3-5 jours',
      'Retards projet : 8%',
      'Zéro départ, +2 embauches',
      '60h/mois récupérées et facturées',
    ],
    investment: '24 500€',
    gain: '52 000€',
    roi: '+27 500€',
    detail: 'Temps facturé + réduction turnover + meilleure rentabilité projet',
  },
  {
    icon: '⚙️',
    title: 'PME industrielle — 40 personnes',
    before: [
      'Taux de panne machines : 18%',
      'Stock dormant : 180k€',
      'Délai de livraison : 6 semaines',
      'Communication ateliers/bureau : emails perdus',
      'Reporting manuel : 2 jours/mois',
    ],
    after: [
      'Maintenance préventive : pannes à 6%',
      'Stock optimisé : 95k€ libérés',
      'Délai de livraison : 3,5 semaines',
      'Tableau de bord partagé temps réel',
      'Reporting auto : 4h/mois',
    ],
    investment: '40 500€',
    gain: '127 000€',
    roi: '+86 500€',
    detail: 'Réduction pannes + stock libéré + gain productivité + amélioration marges',
  },
];

const REASONS = [
  { title: 'Approche terrain', desc: 'Je suis avec vous et vos équipes, pas dans un bureau à distance' },
  { title: 'Actions concrètes', desc: 'On lance des quick wins dès les premières semaines' },
  { title: 'Mesure continue', desc: 'Chaque action est suivie, chaque gain est mesuré' },
  { title: 'Adaptabilité', desc: 'On ajuste en temps réel selon ce qui marche' },
  { title: 'Durabilité', desc: "L'objectif, c'est que ça tienne sans moi après les 6 mois" },
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
                10 Jours pour{' '}
                <span style={{ color: 'var(--primary)' }}>+ de Rentabilité</span>
              </motion.h1>

              <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
                6 mois d'accompagnement pour booster votre efficience, fluidifier votre organisation et augmenter votre rentabilité.
              </motion.p>

              <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex justify-center gap-4">
                {STATS.map((stat, i) => (
                  <div key={i} className="card-base p-4" style={{ background: 'var(--surface)', textAlign: 'center', minWidth: '140px' }}>
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
                *Accompagnement 15k€ + temps interne ~7,5k€ pour une entreprise de 10 salariés<br />
                **40 000€ d'économies − 22 500€ investissement = ROI net positif dès l'année 1
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
                <h2 className="mb-3" style={{ color: 'var(--text)', fontSize: '1.5rem' }}>Le retour sur investissement</h2>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: 'var(--primary)', margin: '16px 0' }}>
                  22 500€ → +17 500€ dès l'année 1
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Pour une entreprise de 10 personnes : investissement total de 22 500€
                  <br />(accompagnement + temps interne) pour 40 000€ d'économies.
                </p>
                <p style={{ color: 'var(--success)', fontSize: '0.95rem', fontWeight: 600, marginTop: '12px' }}>
                  Les années suivantes : 40 000€ de gains récurrents sans coût additionnel.
                </p>
              </div>

              {/* Investment breakdown */}
              <div className="card-base p-6" style={{ background: 'var(--surface2)' }}>
                <h3 className="mb-5" style={{ color: 'var(--text)', fontSize: '1.1rem' }}>
                  Votre investissement total (vraiment complet)
                </h3>
                <p className="mb-6" style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>
                  Soyons clairs sur le temps que ça vous demande. Parce qu'une transformation, ça mobilise aussi vos équipes.
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
                    <div className="flex justify-between pb-2" style={{ fontSize: '0.875rem', color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>
                      <span>Temps interne (10 pers. × 10h + dirigeant 25h)</span>
                      <span style={{ fontWeight: 600, color: 'var(--text)' }}>~7 500€</span>
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
                On commence par <span style={{ color: 'var(--primary)', fontWeight: 600 }}>45 minutes d'échange gratuit</span> pour comprendre votre contexte, valider qu'on peut travailler ensemble, et vous présenter la démarche en détail.
              </p>
              <p style={{ color: 'var(--muted)' }}>
                Si on décide de se lancer, on attaque le premier jour d'intervention. Pas de paperasse inutile, on y va.
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
                10 jours de travail effectif sur 6 mois pour réaliser toutes les actions et atteindre l'objectif. Une approche inspirée du design thinking, adaptée à votre réalité terrain.
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
                Prêt à investir dans{' '}
                <span style={{ color: 'var(--primary)' }}>votre efficience ?</span>
              </h2>
              <p className="mb-8" style={{ color: 'var(--muted)' }}>
                Commençons par 45 minutes pour faire connaissance et valider qu'on peut travailler ensemble.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <a
                  href="https://cal.com/fabrice-liut/45-min-meeting?overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '1rem', padding: '16px 32px' }}
                >
                  Réserver les 45 minutes
                </a>
                <Link to="/" className="btn-secondary" style={{ fontSize: '1rem', padding: '15px 28px' }}>
                  ← Retour à l'accueil
                </Link>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)', opacity: 0.7 }}>
                Pas d'engagement. Juste un échange pour voir si ça colle.
              </p>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
