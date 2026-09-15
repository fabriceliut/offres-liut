import { m, type Variants } from 'framer-motion';
import Container from '../components/Container';
import IndexLabel from '../components/IndexLabel';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CAL = 'https://cal.com/fabrice-liut/45-min-meeting?overlayCalendar=true';

const STATS = [
  { value: '+3 185 h', label: 'rendues / an à un client' },
  { value: 'x4,5', label: 'retour moyen observé' },
  { value: '48h → 20min', label: 'un délai clé, BDR Therma' },
  { value: '+150', label: 'organisations · 15 ans' },
];

const PAINS = [
  { title: 'Tout remonte à vous', desc: "Décisions, arbitrages, urgences. L'entreprise ralentit quand vous n'êtes pas là." },
  { title: "Recruter n'a rien réglé", desc: 'Vous avez ajouté des personnes, pas de la clarté. La coordination coûte plus qu\'elle ne rapporte.' },
  { title: 'Vous subissez vos journées', desc: 'Le temps part en réunions et en rattrapage. Le travail de fond attend.' },
];

const OFFRES = [
  {
    step: "Palier 1 · La porte d'entrée",
    title: 'Diagnostic Flux & Leviers',
    featured: true,
    promise: 'Vos flux cartographiés et les 3 leviers qui rendent le plus de temps — chiffrés, priorisés, prêts à décider.',
    meta: [['Durée', '2 à 3 semaines'], ['Prix', 'Forfait fixe'], ['Livrable', 'Plan de leviers chiffré']],
    points: ['Immersion terrain, lecture de vos flux réels', 'Les 3 leviers à plus fort rendement', 'Temps et coût récupérables estimés', 'Une décision claire en sortie'],
    note: "Sans risque : vous repartez avec un plan actionnable, même si on s'arrête là.",
  },
  {
    step: 'Palier 2 · Le cœur',
    title: 'Cockpit Dirigeant',
    featured: false,
    promise: "On déploie les leviers et on installe votre cockpit de pilotage : l'organisation tourne, même quand vous n'êtes plus là.",
    meta: [['Durée', '6 mois, jalonnés'], ['Prix', 'Forfait (~13 000 €)'], ['Livrable', 'Cockpit de pilotage Notion']],
    points: ['Mise en œuvre avec vos équipes', 'Rituels et process qui tiennent sans vous', 'Un cockpit de pilotage clair et vivant', 'Vous sortez du chemin critique'],
    note: "La suite naturelle d'un diagnostic validé.",
  },
  {
    step: 'Palier 3 · Optionnel',
    title: 'Maintien & relais',
    featured: false,
    promise: "Le système reste vivant et se transmet à un relais interne, pour ne plus dépendre d'un intervenant extérieur.",
    meta: [['Durée', 'Borné dans le temps'], ['Prix', 'Accompagnement léger'], ['Livrable', 'Passation & suivi']],
    points: ['Points de pilotage réguliers', "Montée en autonomie d'un relais interne", 'Ajustements au fil de la croissance'],
    note: 'Jamais un abonnement sans fin — seulement si utile.',
  },
];

const STEPS = [
  { n: '01', title: 'Cadrage — 45 min', desc: 'On vérifie que le sujet et le moment sont les bons. Sans engagement.' },
  { n: '02', title: 'Diagnostic — 2-3 sem.', desc: 'Immersion terrain, lecture des flux, 3 leviers chiffrés et une décision.' },
  { n: '03', title: 'Déploiement — 6 mois', desc: 'Mise en œuvre avec vos équipes et installation du cockpit de pilotage.' },
  { n: '04', title: 'Autonomie', desc: "L'organisation tourne sans vous — et sans moi. C'est le but." },
];

const TESTIMONIALS = [
  { quote: "Un process terrain passé de 48h à 20 minutes par intervention. Fabrice a compris nos flux en 2 jours et a simplifié ce qui nous bloquait depuis des mois.", who: 'BDR Therma · Industrie thermique' },
  { quote: "+3 185 heures récupérées par an en simplifiant la coordination. L'investissement a été remboursé 4,5 fois.", who: 'Dirigeant · PME de services, 30 personnes' },
  { quote: "+12% de temps facturable, −12% de délais, turn-over en baisse. On a clarifié les rôles et fluidifié le fonctionnement entre les équipes.", who: 'Direction · PME IT, 90 personnes' },
];

const FIT_YES = [
  'Vous dirigez une PME/PMI de 30 à 90 personnes, en croissance',
  'Vous êtes devenu le goulot de votre entreprise',
  "Recruter n'a pas résolu le problème de fond",
  "Vous voulez un résultat mesurable, pas un rapport de plus",
];
const FIT_NO = [
  'Vous cherchez du conseil sans engager de décision',
  'Vous voulez un exécutant à l\'heure, pas une transformation',
  'Le sujet n\'est pas prioritaire pour vous, dirigeant',
  "Vous n'êtes pas prêt à impliquer vos équipes",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const reveal = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

export default function OfferDiagnostic() {
  return (
    <>
      <Header />
      <main>
        <section id="hero" className="relative flex flex-col justify-center overflow-hidden" style={{ minHeight: '100vh', paddingTop: '96px', paddingBottom: '80px' }} aria-label="Introduction">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(118,107,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(118,107,255,0.04) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 100%)',
          }} />
          <div aria-hidden="true" className="absolute pointer-events-none" style={{
            top: '20%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px',
            background: 'radial-gradient(circle, rgba(118,107,255,0.08) 0%, transparent 70%)',
          }} />
          <Container className="relative z-10">
            <div className="max-w-3xl">
              <m.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-6">
                <span className="index-label">Design Organisationnel · PME &amp; PMI · Lyon</span>
              </m.div>
              <m.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" style={{ color: 'var(--text)' }} className="mb-6">
                Sortez du <span style={{ color: 'var(--primary)' }}>chemin critique</span> de votre propre entreprise.
              </m.h1>
              <m.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="text-lg mb-10 max-w-xl" style={{ color: 'var(--muted)' }}>
                Votre PME a grandi plus vite que son organisation. Je réorganise vos flux pour vous rendre l'équivalent d'un à deux temps pleins — sans recruter — en 6 mois.
              </m.p>
              <m.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-nowrap gap-3 mb-16">
                <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flexShrink: 0 }}>Réserver mon diagnostic</a>
                <a href="#offres" className="btn-secondary" style={{ flexShrink: 0 }}>Voir l'accompagnement</a>
              </m.div>
              <m.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {STATS.map((s, i) => (
                  <div key={i} className="card-base p-4" style={{ background: 'var(--surface)', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '-0.03em' }}>{s.value}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '4px' }}>{s.label}</div>
                  </div>
                ))}
              </m.div>
            </div>
          </Container>
        </section>

        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <Container>
            <m.div {...reveal} className="mb-4"><IndexLabel text="01 — Le vrai blocage" /></m.div>
            <m.h2 {...reveal} className="mb-4" style={{ color: 'var(--text)' }}>Ce n'est pas votre stratégie qui coince. C'est que tout repasse par vous.</m.h2>
            <m.p {...reveal} className="mb-12 max-w-xl" style={{ color: 'var(--muted)' }}>La croissance a empilé des process et des habitudes que personne n'a redessinés. Résultat : vous êtes le goulot.</m.p>
            <div className="grid md:grid-cols-3 gap-5">
              {PAINS.map((p, i) => (
                <m.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="card-base p-6" style={{ background: 'var(--surface2)' }}>
                  <h3 style={{ color: 'var(--text)', fontSize: '1.05rem', marginBottom: '8px' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.65 }}>{p.desc}</p>
                </m.div>
              ))}
            </div>
          </Container>
        </section>

        <section id="offres" style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)' }}>
          <Container>
            <m.div {...reveal} className="mb-4"><IndexLabel text="02 — L'accompagnement" /></m.div>
            <m.h2 {...reveal} className="mb-4" style={{ color: 'var(--text)' }}>Un chemin clair, à prix et périmètre fixes.</m.h2>
            <m.p {...reveal} className="mb-12 max-w-xl" style={{ color: 'var(--muted)' }}>On avance par palier. Chacun se paie sur un résultat, pas sur des jours — et vous décidez de la suite à chaque étape.</m.p>
            <div className="grid md:grid-cols-3 gap-5 items-stretch">
              {OFFRES.map((o, i) => (
                <m.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="card-base p-6" style={{ background: 'var(--surface2)', display: 'flex', flexDirection: 'column', borderColor: o.featured ? 'var(--primary)' : undefined, boxShadow: o.featured ? '0 0 0 1px var(--primary), var(--sh-elevate)' : undefined }}>
                  {o.featured && <div className="index-label mb-3" style={{ alignSelf: 'flex-start', color: 'white', background: 'var(--primary)', borderColor: 'var(--primary)' }}>Commencez ici</div>}
                  <div className="index-label mb-3" style={{ alignSelf: 'flex-start' }}>{o.step}</div>
                  <h3 style={{ color: 'var(--text)', fontSize: '1.25rem', marginBottom: '8px' }}>{o.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6, minHeight: '72px' }}>{o.promise}</p>
                  <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', margin: '16px 0', padding: '12px 0' }}>
                    {o.meta.map(([k, v]) => (
                      <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', padding: '3px 0' }}>
                        <span style={{ color: 'var(--muted)' }}>{k}</span>
                        <span style={{ color: 'var(--text)', fontWeight: 600 }}>{v}</span>
                      </div>
                    ))}
                  </div>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {o.points.map((pt) => (
                      <li key={pt} style={{ position: 'relative', paddingLeft: '20px', marginBottom: '8px', fontSize: '0.86rem', color: 'var(--muted)' }}>
                        <span style={{ position: 'absolute', left: 0, color: 'var(--primary)', fontWeight: 700 }}>→</span>{pt}
                      </li>
                    ))}
                  </ul>
                  <p style={{ marginTop: 'auto', paddingTop: '16px', fontSize: '0.78rem', color: 'var(--muted)', fontStyle: 'italic' }}>{o.note}</p>
                </m.div>
              ))}
            </div>
          </Container>
        </section>

        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <Container>
            <m.div {...reveal} className="mb-4"><IndexLabel text="03 — Le déroulé" /></m.div>
            <m.h2 {...reveal} className="mb-12" style={{ color: 'var(--text)' }}>De la première conversation aux résultats.</m.h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {STEPS.map((s, i) => (
                <m.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} style={{ borderTop: '3px solid var(--primary)', paddingTop: '16px' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--primary)' }}>{s.n}</div>
                  <h3 style={{ color: 'var(--text)', fontSize: '1.05rem', margin: '6px 0' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted)' }}>{s.desc}</p>
                </m.div>
              ))}
            </div>
          </Container>
        </section>

        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)' }}>
          <Container>
            <m.div {...reveal} className="mb-4"><IndexLabel text="04 — Résultats" /></m.div>
            <m.h2 {...reveal} className="mb-12" style={{ color: 'var(--text)' }}>Des résultats concrets, chez de vraies PME.</m.h2>
            <div className="grid md:grid-cols-3 gap-5">
              {TESTIMONIALS.map((t, i) => (
                <m.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="card-base p-6" style={{ background: 'var(--surface2)' }}>
                  <p style={{ color: 'var(--text)', fontSize: '0.95rem', lineHeight: 1.6 }}>« {t.quote} »</p>
                  <p style={{ marginTop: '14px', fontSize: '0.8rem', color: 'var(--muted)' }}>{t.who}</p>
                </m.div>
              ))}
            </div>
          </Container>
        </section>

        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <Container>
            <m.div {...reveal} className="mb-4"><IndexLabel text="05 — Pour qui" /></m.div>
            <m.h2 {...reveal} className="mb-12" style={{ color: 'var(--text)' }}>On travaillera bien ensemble si…</m.h2>
            <div className="grid md:grid-cols-2 gap-5">
              <m.div {...reveal} className="card-base p-6" style={{ background: 'rgba(118,107,255,0.08)', borderColor: 'var(--border-strong)' }}>
                <h3 style={{ color: 'var(--text)', marginBottom: '12px' }}>C'est pour vous</h3>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {FIT_YES.map((f) => (
                    <li key={f} style={{ position: 'relative', paddingLeft: '24px', marginBottom: '10px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--primary)', fontWeight: 700 }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
              </m.div>
              <m.div {...reveal} className="card-base p-6" style={{ background: 'var(--surface2)' }}>
                <h3 style={{ color: 'var(--text)', marginBottom: '12px' }}>Ce n'est pas le moment</h3>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {FIT_NO.map((f) => (
                    <li key={f} style={{ position: 'relative', paddingLeft: '24px', marginBottom: '10px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--muted)', fontWeight: 700 }}>✕</span>{f}
                    </li>
                  ))}
                </ul>
              </m.div>
            </div>
          </Container>
        </section>

        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)' }}>
          <Container>
            <div className="card-base" style={{ background: 'var(--primary)', textAlign: 'center', padding: '56px 28px', border: 'none' }}>
              <h2 style={{ color: 'white', marginBottom: '14px' }}>Commençons par un diagnostic.</h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '46ch', margin: '0 auto 28px' }}>45 minutes pour vérifier que le moment est le bon. Puis un diagnostic à prix fixe qui vous rend, dès la fin, un plan chiffré actionnable.</p>
              <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: 'white', color: 'var(--primary)' }}>Réserver mon diagnostic</a>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
