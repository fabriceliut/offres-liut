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
  "Sans vous, rien n'avance. Vous \u00eates le goulot d'\u00e9tranglement de votre propre entreprise.",
  "Vous passez 70% de votre temps dans l'op\u00e9rationnel au lieu de piloter la strat\u00e9gie et le d\u00e9veloppement.",
  "Vos informations sont \u00e9parpill\u00e9es : emails, carnets, fichiers, WhatsApp. Impossible d'avoir une vue d'ensemble.",
  "D\u00e9l\u00e9guer est compliqu\u00e9 : vos collaborateurs n'ont pas les bonnes infos, alors vous reprenez la main.",
  "Le reporting vous prend des heures \u2014 et il est d\u00e9j\u00e0 obsol\u00e8te quand vous le finissez.",
];

const BENEFITS = [
  { value: '6-8h', label: "r\u00e9cup\u00e9r\u00e9es par semaine sur l'op\u00e9rationnel" },
  { value: '360\u00b0', label: "vue d'ensemble en temps r\u00e9el sur votre activit\u00e9" },
  { value: '\u00d72', label: "capacit\u00e9 de d\u00e9l\u00e9gation effective" },
];

const PROGRAM_STEPS = [
  { title: "Audit de votre pilotage", desc: "On cartographie votre r\u00e9alit\u00e9 : comment circule l'information, o\u00f9 vous perdez du temps, ce qui d\u00e9pend trop de vous. Sans filtre." },
  { title: "Priorisation des leviers", desc: "On identifie les 20% de changements qui vont lib\u00e9rer 80% de votre charge. On priorise par impact et facilit\u00e9." },
  { title: "Design du cockpit", desc: "On dessine ensemble votre syst\u00e8me de pilotage id\u00e9al : suivi projets, d\u00e9cisions, \u00e9quipes, indicateurs. Sur papier d'abord." },
  { title: "Construction sur Notion", desc: "Je construis votre cockpit sur Notion. Tableaux de bord, suivi de projets, syst\u00e8me de d\u00e9l\u00e9gation, bases de connaissances. Je fais le gros du technique." },
  { title: "Mise en route & formation", desc: "On bascule vers votre nouveau syst\u00e8me. Je vous forme et je forme vos managers proches pour que le syst\u00e8me vive au quotidien." },
  { title: "It\u00e9rations terrain", desc: "On ajuste selon l'usage r\u00e9el. Ce qui marche, on garde. Ce qui coince, on simplifie. Le syst\u00e8me s'adapte \u00e0 vous, pas l'inverse." },
  { title: "Structuration de la d\u00e9l\u00e9gation", desc: "On met en place les flux pour que vos collaborateurs aient l'info sans vous solliciter. Votre pr\u00e9sence devient strat\u00e9gique, pas op\u00e9rationnelle." },
  { title: "P\u00e9rennisation", desc: "On s'assure que le syst\u00e8me tient sans moi. Vous \u00eates autonome. Votre entreprise peut tourner m\u00eame quand vous n'\u00eates pas l\u00e0." },
];

export default function OfferEntrepreneurs() {
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
                <IndexLabel text="PROGRAMME — Pilotage Dirigeant" />
              </motion.div>

              <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="mb-5" style={{ color: 'var(--text)' }}>
                Vous dirigez une PME.
                <br />
                <span style={{ color: 'var(--primary)' }}>Votre organisation repose trop sur vous.</span>
              </motion.h1>

              <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="text-lg mb-4" style={{ color: 'var(--primary)', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>
                {"C'est une situation que je vois souvent. Voici ce que je mets en place."}
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
                  {"📊 Ce que vous vivez au quotidien"}
                </h2>
                <ul className="flex flex-col gap-3">
                  {PAIN_POINTS.map((point, i) => (
                    <li key={i} className="flex items-start gap-3" style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                      <span style={{ color: '#ef5350', fontWeight: 700, flexShrink: 0 }}>{"✗"}</span>
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
                {"↓"}
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
                  {"✓ Ce que je vous propose"}
                </h2>
                <p className="mb-4" style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {"Un accompagnement sur "}
                  <span style={{ color: 'var(--primary)', fontWeight: 600 }}>6 mois</span>
                  {" pour structurer votre pilotage. Vue d'ensemble, d\u00e9l\u00e9gation, temps lib\u00e9r\u00e9."}
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {"Le tout sur "}
                  <strong style={{ color: 'var(--text)' }}>Notion</strong>
                  {", construit sur-mesure. Je fais le technique, vous validez et pilotez."}
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

        {/* Ce que vous obtenez */}
        <section style={{ paddingTop: '48px', paddingBottom: 'var(--spacing-section-v)' }}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <div className="mb-4">
                <IndexLabel text="LIVRABLES — Ce que vous obtenez" />
              </div>
              <h2 className="mb-8" style={{ color: 'var(--text)' }}>
                {"Votre cockpit de "}
                <span style={{ color: 'var(--primary)' }}>direction</span>
              </h2>

              <div className="flex flex-col gap-4">
                {[
                  { title: "Tableau de bord strat\u00e9gique", desc: "Vue en temps r\u00e9el sur vos projets, vos indicateurs cl\u00e9s, et l'avancement de vos \u00e9quipes. Plus besoin de demander o\u00f9 on en est." },
                  { title: "Syst\u00e8me de d\u00e9l\u00e9gation structur\u00e9", desc: "Chaque t\u00e2che d\u00e9l\u00e9gu\u00e9e a un responsable, un d\u00e9lai, un suivi. Vos collaborateurs savent quoi faire sans vous solliciter." },
                  { title: "Base de connaissances centralis\u00e9e", desc: "Process, d\u00e9cisions, comptes-rendus, contacts cl\u00e9s : tout est au m\u00eame endroit. Finie la perte d'information." },
                  { title: "Gestion de projets simplifi\u00e9e", desc: "Suivi de vos chantiers en cours avec les jalons et les d\u00e9pendances. Vous voyez d'un coup d'\u0153il ce qui avance et ce qui bloque." },
                  { title: "Reporting automatis\u00e9", desc: "Les indicateurs se mettent \u00e0 jour automatiquement. Le reporting mensuel qui prenait 2 jours se fait en temps r\u00e9el." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                  >
                    <span style={{ color: 'var(--primary)', fontWeight: 700, flexShrink: 0 }}>{"→"}</span>
                    <div>
                      <span style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.9rem' }}>{item.title}</span>
                      <p style={{ color: 'var(--muted)', fontSize: '0.875rem', marginTop: '4px', lineHeight: 1.65 }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Prix */}
        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center p-8 rounded-2xl"
              style={{ background: 'rgba(118,107,255,0.08)', border: '1px solid var(--border-strong)' }}
            >
              <h2 className="mb-3" style={{ color: 'var(--text)', fontSize: '1.5rem' }}>{"L'investissement"}</h2>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 700, color: 'var(--primary)', margin: '16px 0' }}>
                {"13 000\u20ac"}
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                {"10 jours de travail effectif sur 6 mois"}
                <br />{"Payable en 3 fois, \u00e0 chaque \u00e9tape valid\u00e9e ensemble"}
              </p>
            </motion.div>
          </Container>
        </section>

        {/* ROI */}
        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)' }}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl mx-auto"
            >
              <div className="mb-4">
                <IndexLabel text="ROI — Sans blabla" />
              </div>
              <h2 className="mb-6" style={{ color: 'var(--text)' }}>
                {"Est-ce que \u00e7a "}
                <span style={{ color: 'var(--primary)' }}>vaut le coup ?</span>
              </h2>

              <p className="mb-8" style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                {"Je ne promets pas de formule magique. Je préfère regarder vos chiffres, poser des hypothèses simples et rester prudent."}
              </p>

              <div className="card-base p-6" style={{ background: 'var(--surface2)' }}>
                <div className="flex flex-col gap-4 mb-6">
                  <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                    <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{"🕐"}</span>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                      <strong style={{ color: 'var(--text)' }}>{"6 à 8h/semaine récupérées"}</strong>{" sur l'opérationnel. Réinvesties dans le commercial, la stratégie, ou vos équipes."}
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                    <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{"📊"}</span>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                      <strong style={{ color: 'var(--text)' }}>{"Des décisions plus rapides."}</strong>{" Vue d'ensemble claire = moins d'hésitation. Combien vous coûte une décision retardée d'une semaine ?"}
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                    <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{"🤝"}</span>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                      <strong style={{ color: 'var(--text)' }}>{"Votre entreprise tourne sans vous."}</strong>{" Vos managers ont l'info, vos équipes avancent. Moins de sollicitations, moins d'allers-retours."}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl text-center" style={{ background: 'rgba(118,107,255,0.08)', border: '1px solid var(--border-strong)' }}>
                  <p style={{ color: 'var(--text)', fontSize: '1rem', fontWeight: 600, marginBottom: '8px' }}>
                    {"Exemple concret"}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                    {"Un dirigeant récupère 6h/semaine → les réoriente vers le commercial."}
                    <br />{"Sur un pipe de 500k€, "}
                    <strong style={{ color: 'var(--success)' }}>{"+10% de conversion = 50 000€ de CA additionnel"}</strong>{"."}
                    <br />{"L'investissement de 13 000€ est remboursé sur un seul contrat de plus."}
                  </p>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Programme */}
        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
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
                {"Le parcours sur "}
                <span style={{ color: 'var(--primary)' }}>6 mois</span>
              </h2>

              {/* Format */}
              <div className="card-base p-5 mb-8" style={{ background: 'var(--surface2)' }}>
                <h3 className="mb-4" style={{ color: 'var(--primary)', fontSize: '1rem' }}>{"Format adapt\u00e9 \u00e0 votre agenda de dirigeant"}</h3>
                <div className="flex flex-col gap-3">
                  <div style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                    <strong style={{ color: 'var(--text)' }}>{"Sessions de 1 \u00e0 2h"}</strong>{" \u2014 En pr\u00e9sentiel ou \u00e0 distance, selon votre planning"}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65, borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
                    <strong style={{ color: 'var(--text)' }}>{"Workshops demi-journ\u00e9e"}</strong>{" \u2014 Pour les mises en place structurantes et la formation de vos managers"}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65, borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
                    <strong style={{ color: 'var(--text)' }}>Travail asynchrone</strong>{" \u2014 Je construis le syst\u00e8me, vous validez, on affine"}
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
                <IndexLabel text="OUTIL — Pourquoi Notion" />
              </div>
              <div className="card-base p-5" style={{ borderLeft: '3px solid var(--primary)' }}>
                <p className="mb-4" style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                  {"Notion est l'outil le plus adapt\u00e9 pour construire un cockpit de direction sur-mesure. Il est "}
                  <strong style={{ color: 'var(--text)' }}>flexible</strong>
                  {" (on construit exactement ce dont vous avez besoin), "}
                  <strong style={{ color: 'var(--text)' }}>{"\u00e9volutif"}</strong>
                  {" (le syst\u00e8me grandit avec votre entreprise), et "}
                  <strong style={{ color: 'var(--text)' }}>partageable</strong>
                  {" (vos managers y acc\u00e8dent facilement)."}
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                  {"Pas besoin d'\u00eatre technique. Quand c'est bien con\u00e7u, c'est aussi simple qu'un tableur \u2014 mais infiniment plus puissant."}
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
                Ça vous parle ?{' '}
                <span style={{ color: 'var(--primary)' }}>Échangeons.</span>
              </h2>
              <p className="mb-8" style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                45 min pour comprendre votre situation. Vous me dites ce qui bloque.
                <br />Je vous dis ce que je ferais. On décide après.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <a
                  href="https://cal.com/fabrice-liut/45-min-meeting?overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '1rem', padding: '16px 32px' }}
                >
                  {"Prendre 45 min"}
                </a>
                <Link to="/" className="btn-secondary" style={{ fontSize: '1rem', padding: '15px 28px' }}>
                  {"← Retour \u00e0 l'accueil"}
                </Link>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)', opacity: 0.7 }}>
                {"Pas s\u00fbr ? Pas grave. On \u00e9change, on voit si \u00e7a colle. Si ce n'est pas le bon moment, on se le dit."}
              </p>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
