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

const PAIN_POINTS = [
  "Vous jonglez avec une montagne d'informations, de ressources et de projets en même temps",
  'Vous perdez un temps fou à chercher vos documents, vos notes, vos infos',
  'Vous avez essayé 10 outils différents, rien ne tient sur la durée',
  'Vous vous sentez submergé·e, la charge mentale est énorme',
  'Vous savez que ça vous empêche de vous concentrer sur ce qui compte vraiment : développer votre activité',
];

const BENEFITS = [
  { value: '-50%', label: 'de charge mentale' },
  { value: '+30%', label: 'de temps gagné/semaine' },
  { value: '100%', label: 'focus sur vos vraies priorités' },
];

const PROGRAM_STEPS = [
  { title: 'État des lieux', desc: "On regarde tout : vos outils actuels, vos flux d'information, vos points de blocage. Sans filtre." },
  { title: 'Définition & Priorisation', desc: 'Les bonnes questions pour identifier vos besoins réels, les plus précieux. On priorise ce qui compte vraiment.' },
  { title: 'Design du système', desc: "On dessine ensemble votre système d'organisation idéal. Structure, logique, workflows. Tout sur papier d'abord." },
  { title: 'Mise en place sur Notion', desc: 'Je construis votre système sur Notion. Bases de données, templates, automatisations. La grosse partie technique, je la fais.' },
  { title: 'Formation & Bonnes pratiques', desc: 'Je vous forme à Notion et aux bonnes pratiques : gestion de la connaissance, des ressources, des projets. Vous devenez autonome.' },
  { title: 'Itérations & Suivi', desc: 'On ajuste le système selon votre usage réel. Ce qui marche, on garde. Ce qui coince, on améliore.' },
  { title: 'Délégation facilitée', desc: "Recommandations pour déléguer facilement. Votre système est prêt pour accueillir d'autres personnes." },
  { title: 'Coaching organisation', desc: "Au-delà de l'outil, on travaille vos habitudes, votre façon de gérer votre temps et vos priorités." },
];

const FUTURE_BENEFITS = [
  'Embaucher vos premiers collaborateurs',
  'Déléguer efficacement sans tout réexpliquer',
  'Scaler votre activité sans perdre le contrôle',
  'Gérer plusieurs projets complexes simultanément',
];

export default function OfferEntrepreneurs() {
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
                <IndexLabel text="PROGRAMME — Organisation Personnelle" />
              </motion.div>

              <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="mb-5" style={{ color: 'var(--text)' }}>
                Vous êtes débordé·e.
                <br />
                <span style={{ color: 'var(--primary)' }}>Votre organisation est un chaos.</span>
              </motion.h1>

              <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="text-lg mb-4" style={{ color: 'var(--primary)', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>
                Il est temps d'en sortir. Définitivement.
              </motion.p>
            </div>
          </Container>
        </section>

        {/* Situation actuelle */}
        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: '48px' }}>
          <Container>
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="card-base p-6"
                style={{ borderLeft: '3px solid #ef5350' }}
              >
                <h2 className="mb-5" style={{ color: '#ef5350', fontSize: '1.3rem' }}>
                  📊 Votre situation maintenant
                </h2>
                <ul className="flex flex-col gap-3">
                  {PAIN_POINTS.map((point, i) => (
                    <li key={i} className="flex items-start gap-3" style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                      <span style={{ color: '#ef5350', fontWeight: 700, flexShrink: 0 }}>✗</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="text-center py-6"
                style={{ color: 'var(--primary)', fontSize: '2rem' }}
              >
                ↓
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="card-base p-6"
                style={{ borderLeft: '3px solid var(--success)' }}
              >
                <h2 className="mb-5" style={{ color: 'var(--success)', fontSize: '1.3rem' }}>
                  ✓ Ce que je vous propose
                </h2>
                <p className="mb-4" style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Un accompagnement intensif sur <span style={{ color: 'var(--primary)', fontWeight: 600 }}>6 mois</span> pour sortir du chaos, installer un système d'organisation qui tient, et reprendre le contrôle.
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Je construis avec vous un système sur-mesure sur <strong style={{ color: 'var(--text)' }}>Notion</strong>, adapté à votre façon de travailler. Je fais la grosse partie du boulot au départ, puis progressivement vous prenez le relais jusqu'à être complètement autonome.
                </p>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Benefits */}
        <section style={{ paddingTop: '48px', paddingBottom: '48px' }}>
          <Container>
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {BENEFITS.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="card-base p-5 text-center"
                  style={{ borderLeft: '3px solid var(--primary)' }}
                >
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: 'var(--primary)' }}>
                    {b.value}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '4px' }}>{b.label}</div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Prix */}
        <section style={{ paddingTop: '48px', paddingBottom: 'var(--spacing-section-v)' }}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center p-8 rounded-2xl"
              style={{ background: 'rgba(118,107,255,0.08)', border: '1px solid var(--border-strong)' }}
            >
              <h2 className="mb-3" style={{ color: 'var(--text)', fontSize: '1.5rem' }}>L'investissement qui se rembourse</h2>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 700, color: 'var(--primary)', margin: '16px 0' }}>
                13 000€
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Payable en 3 fois, à chaque étape validée ensemble
                <br />selon la progression mesurée et les bénéfices constatés
              </p>
            </motion.div>
          </Container>
        </section>

        {/* ROI */}
        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl mx-auto"
            >
              <div className="mb-4">
                <IndexLabel text="ROI — Calcul transparent et réaliste" />
              </div>
              <h2 className="mb-8" style={{ color: 'var(--text)' }}>
                Le calcul du ROI <span style={{ color: 'var(--primary)' }}>(transparent)</span>
              </h2>

              <div className="card-base p-6" style={{ background: 'var(--surface2)' }}>
                <div className="mb-6 p-4 rounded-xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <div style={{ fontWeight: 600, color: 'var(--success)', fontSize: '1rem', marginBottom: '8px' }}>🕐 Gain 1 : Temps libéré (+30%)</div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                    Si vous travaillez 40h/semaine, 30% de temps libéré = <strong style={{ color: 'var(--text)' }}>12h/semaine récupérées</strong>
                    <br />→ 48h/mois → 576h/an
                    <br />→ À votre taux horaire de ~100€/h : <strong style={{ color: 'var(--success)' }}>~57 600€ de valeur/an</strong>
                  </p>
                </div>

                <div className="mb-6 p-4 rounded-xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <div style={{ fontWeight: 600, color: 'var(--success)', fontSize: '1rem', marginBottom: '8px' }}>🧠 Gain 2 : Efficacité (+30%)</div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                    Charge mentale réduite de 50% = vous êtes 30% plus efficace sur votre temps de travail
                    <br />→ Meilleure prise de décision, plus de focus sur ce qui rapporte
                    <br />→ Conversion en CA ou qualité : <strong style={{ color: 'var(--success)' }}>~20 000€ de valeur/an (conservateur)</strong>
                  </p>
                </div>

                <div className="p-4 rounded-xl" style={{ background: 'var(--surface)', borderTop: '2px solid var(--primary)' }}>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between" style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>
                      <span>Temps libéré (valeur)</span>
                      <span>57 600€/an</span>
                    </div>
                    <div className="flex justify-between" style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>
                      <span>Efficacité gagnée (valeur)</span>
                      <span>20 000€/an</span>
                    </div>
                    <div className="flex justify-between pt-2" style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--success)', borderTop: '1px solid var(--border)' }}>
                      <span>VALEUR TOTALE ANNÉE 1</span>
                      <span>77 600€</span>
                    </div>
                    <div className="flex justify-between" style={{ fontSize: '0.875rem', color: 'var(--muted)', opacity: 0.8 }}>
                      <span>Investissement</span>
                      <span>− 13 000€</span>
                    </div>
                    <div className="flex justify-between pt-2" style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--success)', borderTop: '2px solid var(--success)' }}>
                      <span>GAIN NET ANNÉE 1</span>
                      <span>+64 600€</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl text-center" style={{ background: 'rgba(118,107,255,0.08)', border: '1px solid var(--border-strong)' }}>
                  <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                    En comptant conservateur (50% des gains réalisés dès la première année)
                  </p>
                  <p style={{ color: 'var(--text)', fontSize: '1rem', fontWeight: 600, margin: '8px 0' }}>
                    Votre investissement est remboursé en ~18 mois
                  </p>
                  <p style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>
                    Ensuite : 60 000€+ de gains nets qui s'accumulent chaque année
                  </p>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Starting Pack */}
        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: '48px' }}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <div className="card-base p-6" style={{ borderLeft: '3px solid var(--primary)' }}>
                <h3 className="mb-4" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>
                  🚀 C'est un Starting Pack pour votre avenir
                </h3>
                <p className="mb-5" style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Ce système d'organisation n'est pas juste pour vous aujourd'hui. C'est <strong style={{ color: 'var(--text)' }}>la base</strong> qui va vous servir quand vous allez :
                </p>
                <ul className="flex flex-col gap-2 mb-5">
                  {FUTURE_BENEFITS.map((item, i) => (
                    <li key={i} className="flex items-start gap-2" style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                      <span style={{ color: 'var(--primary)', fontWeight: 700, flexShrink: 0 }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="p-4 rounded-xl text-center" style={{ background: 'var(--surface)', border: '1px solid var(--border-strong)' }}>
                  <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                    Les bénéfices se cumulent année après année
                  </p>
                  <p style={{ color: 'var(--muted)', fontSize: '0.82rem', marginTop: '4px' }}>
                    C'est un investissement pour toutes vos futures années d'entrepreneuriat
                  </p>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Programme */}
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
                <IndexLabel text="PARCOURS — 10 jours sur 6 mois" />
              </div>
              <h2 className="mb-5" style={{ color: 'var(--text)' }}>
                Le parcours sur <span style={{ color: 'var(--primary)' }}>6 mois</span>
              </h2>

              {/* Format */}
              <div className="card-base p-5 mb-8" style={{ background: 'var(--surface)' }}>
                <h3 className="mb-4" style={{ color: 'var(--primary)', fontSize: '1rem' }}>Format flexible adapté à votre rythme</h3>
                <div className="flex flex-col gap-3">
                  <div style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                    <strong style={{ color: 'var(--text)' }}>Sessions de 1h à distance</strong> — Pour avancer régulièrement, ajuster, itérer
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65, borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
                    <strong style={{ color: 'var(--text)' }}>Workshops 1/2 journée</strong> — Pour les grosses mises en place, les décisions structurantes
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65, borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
                    <strong style={{ color: 'var(--text)' }}>Travail asynchrone</strong> — Je construis, vous validez, on affine
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {PROGRAM_STEPS.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                    className="card-base p-5"
                    style={{ borderTop: '2px solid var(--primary)' }}
                  >
                    <h3 className="mb-2" style={{ color: 'var(--primary)', fontSize: '0.95rem' }}>
                      {i + 1}. {step.title}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Pourquoi Notion */}
        <section style={{ paddingTop: '48px', paddingBottom: 'var(--spacing-section-v)' }}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <div className="mb-4">
                <IndexLabel text="OUTIL — Pourquoi Notion" />
              </div>
              <div className="card-base p-5" style={{ borderLeft: '3px solid var(--primary)' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                  Notion est <strong style={{ color: 'var(--text)' }}>évolutif</strong>. Votre système grandit avec vous. Vous commencez seul·e, vous pourrez facilement intégrer d'autres personnes au fur et à mesure de votre développement. C'est flexible, puissant, et surtout : ça reste simple à utiliser au quotidien quand c'est bien conçu.
                </p>
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
              <h2 className="mb-4" style={{ color: 'var(--text)' }}>
                Alors, <span style={{ color: 'var(--primary)' }}>on y va ?</span>
              </h2>
              <p className="mb-3" style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                Vous êtes dans le chaos maintenant.
                <br />Je peux vous en sortir en 6 mois.
                <br />Ça coûte 13 000€.
              </p>
              <p className="mb-8" style={{ color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1.3rem' }}>
                Go ou No Go ?
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <a
                  href="https://cal.com/fabrice-liut/45-min-meeting?overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '1rem', padding: '16px 32px' }}
                >
                  Réserver 45 min pour en parler
                </a>
                <Link to="/" className="btn-secondary" style={{ fontSize: '1rem', padding: '15px 28px' }}>
                  ← Retour à l'accueil
                </Link>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)', opacity: 0.7 }}>
                Premier échange gratuit. On valide ensemble que ça colle avant de se lancer.
              </p>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
