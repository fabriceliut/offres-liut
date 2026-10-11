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
  { value: '3 semaines', label: "du cadrage au point d'étape" },
  { value: '2 journées', label: 'sur place avec vos équipes' },
  { value: '3 400 €', label: 'forfait HT, prix ferme' },
];

const CONSTAT = [
  { title: 'Ce que vous voyez', items: ['Tout remonte à vous ou à une ou deux personnes', "L'information circule mal, on se répète", 'Chacun sa méthode, ses fichiers, ses outils'] },
  { title: 'Ce que ça coûte', items: ['Du temps perdu en recherches, relances, ressaisies', 'Des erreurs et des reprises', 'Des décisions qui traînent, des personnes clés épuisées'] },
  { title: 'Ce qui bloque', items: ["Vous savez qu'il faut structurer", 'Vous ne savez pas par où commencer', 'Et le quotidien gagne toujours'] },
];

const CE_NEST_PAS = [
  'Un questionnaire en ligne à remplir seul',
  'Des recommandations générées par une IA',
  'Un rapport de 80 pages et quarante problèmes listés',
  "Un engagement long avant d'avoir vu quoi que ce soit",
];

const CEST = [
  'Du temps sur le terrain avec vos personnes clés',
  'Un regard qui croise le technique et l’humain, sur le terrain',
  'On part de ce qui vous gêne, on vérifie où agir en premier',
  'Un premier changement mis en pratique avec vous',
];

const TIMELINE = [
  { phase: 'Semaine 1', title: 'Voir', days: 'Cadrage + terrain', items: ['Cadrage avec vous (1h30)', 'Une journée sur place : 4 personnes clés', 'Le travail réel, et où ça coince vraiment'] },
  { phase: 'Semaine 2', title: 'Choisir', days: 'Atelier', items: ['Je croise ce qui a été dit, vu et ressenti', 'Atelier sur place (2h30) avec vos personnes clés', 'Trois priorités au maximum'] },
  { phase: 'Semaines 2 et 3', title: 'Agir', days: 'Mise en pratique', items: ['On construit le premier changement avec votre référent', 'Il sert sur de vrais cas la semaine suivante', "Puis on l'ajuste ensemble"] },
  { phase: '30 jours après', title: 'Vérifier', days: 'Point d’étape', items: ['Point d’étape (1h) 30 jours après la mise en pratique', 'Est-ce encore utilisé, ce qui résiste', 'La suite décidée sur des faits'] },
];

const LIVRABLES = [
  { num: '01', title: 'Ce qui freine, sur une page', desc: 'Avec les mots de vos équipes, et ce que ça coûte.' },
  { num: '02', title: 'Trois priorités au maximum', desc: "Classées selon ce qu'elles rapportent, l'effort demandé et les conditions pour que ça tienne." },
  { num: '03', title: 'Un premier changement en pratique', desc: 'Construit avec votre équipe, utilisé sur de vrais cas, avec la différence avant / après.' },
  { num: '04', title: 'Une feuille de route à 30 jours', desc: 'Qui fait quoi, pour quand, et comment on voit que ça marche.' },
];

const CHANGEMENTS = [
  { title: 'Qui décide quoi', desc: 'Ex. : une décision = un responsable et une date.' },
  { title: "La circulation de l'info", desc: 'Ex. : un point hebdo de 30 min qui tranche.' },
  { title: 'Les fichiers et les outils', desc: 'Ex. : une version qui fait foi.' },
  { title: 'Les passages de relais', desc: 'Ex. : une règle claire entre deux équipes.' },
  { title: 'Les demandes et leur suivi', desc: 'Ex. : un seul endroit où les demandes arrivent.' },
  { title: 'Les rôles', desc: 'Ex. : ce qui ne repose plus sur une seule personne.' },
];

const RESULTATS = [
  { icon: '⚡', value: '48h → 20 min', desc: "Un process terrain simplifié après deux jours d'immersion.", who: 'BDR Thermea · industrie thermique' },
  { icon: '📈', value: '+3 185 h', desc: 'Récupérées par an en simplifiant la coordination. Investissement remboursé 4,5 fois.', who: 'PME de services · 30 personnes' },
  { icon: '⚙️', value: '+12 %', desc: 'De temps facturable, délais en baisse de 12 %, rôles clarifiés entre les équipes.', who: 'PME IT · 90 personnes' },
];

const APPORT = [
  { title: "Ce que j'apporte", items: ['Le terrain, aux côtés de la direction et des équipes', 'Un regard qui croise le technique et l’humain, sur le terrain', 'Repérer où agir en premier, et faire décider', "Un premier changement qui s'accorde avec le reste de l'organisation"] },
  { title: 'Ce que vous engagez', items: ['Votre présence au cadrage et à l’atelier', 'Un référent interne nommé dès le départ', 'Quatre créneaux d’entretien réservés', 'Un créneau pour mettre en pratique le premier changement'] },
];

const INCLUS = [
  'Un fonctionnement prioritaire, sur un site',
  "Jusqu'à 4 personnes clés, une journée terrain",
  'Trois priorités au maximum',
  'Un premier changement mis en pratique avec votre référent',
  'Feuille de route 30 jours et point d’étape',
  'Déplacements inclus jusqu’à 50 km de Lyon',
];

const SUITE = [
  { title: 'Vous avancez seuls', desc: 'Avec la feuille de route, les priorités et un premier changement qui tourne.' },
  { title: 'Le chantier suivant, ensemble', desc: 'On ouvre le chantier suivant, avec un périmètre, un budget et un critère de réussite définis à l’avance.' },
  { title: 'Le Diagnostic complet', desc: 'Trois semaines pour cartographier et chiffrer l’ensemble des flux, quand le sujet le demande.' },
];

const sectionReveal = {
  initial: { opacity:  0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

function BulletList({ items, symbol = '→' }: { items: string[]; symbol?: string }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2" style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6 }}>
          <span aria-hidden="true" style={{ color: 'var(--primary)', fontWeight: 700, flexShrink: 0 }}>{symbol}</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function OfferPlaceNette() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden" style={{ minHeight: '70vh', paddingTop: '140px', paddingBottom: '80px' }}>
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(118,107,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(118,107,255,0.04) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 100%)',
          }} />
          <Container className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-6">
                <IndexLabel text="OFFRE D'ENTRÉE — PME & PMI de 15 à 50 personnes" />
              </motion.div>
              <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="mb-5" style={{ color: 'var(--text)' }}>
                Faire <span style={{ color: 'var(--primary)' }}>place nette</span>
              </motion.h1>
              <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
                Trouver ce qui freine le plus le travail. Mettre un premier changement en pratique avec vos équipes. Vérifier qu'il tient.
              </motion.p>
              <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
                {STATS.map((stat) => (
                  <div key={stat.value} className="card-base p-4" style={{ background: 'var(--surface)', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '-0.03em' }}>{stat.value}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '4px' }}>{stat.label}</div>
                  </div>
                ))}
              </motion.div>
              <motion.p custom={4} variants={fadeUp} initial="hidden" animate="visible" className="mt-6" style={{ fontSize: '0.78rem', color: 'var(--muted)', opacity: 0.6 }}>
                3 semaines · deux journées sur place · un premier changement utilisé sur un vrai cas
              </motion.p>
              <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-2 justify-center items-center mt-4">
                <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>Par où commencer :</span>
                <span style={{ padding: '3px 10px', borderRadius: 'var(--r-pill)', background: 'var(--primary)', color: 'white', fontSize: '0.78rem', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>Offre d'entrée</span>
                <Link to="/entreprises" style={{ padding: '3px 10px', borderRadius: 'var(--r-pill)', border: '1px solid var(--border-strong)', color: 'var(--muted)', fontSize: '0.78rem', textDecoration: 'none' }}>Programme Entreprises</Link>
              </motion.div>
            </div>
          </Container>
        </section>

        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <Container>
            <motion.div {...sectionReveal} className="max-w-2xl mx-auto text-center">
              <div className="mb-6"><IndexLabel text="POUR COMMENCER — Une question" /></div>
              <h2 className="mb-5" style={{ color: 'var(--text)', fontSize: 'clamp(1.4rem, 4vw, 2rem)' }}>
                Quel problème revient chaque semaine sur votre bureau, que plusieurs personnes subissent, et que <span style={{ color: 'var(--primary)' }}>personne n'a le temps de régler ?</span>
              </h2>
              <p style={{ color: 'var(--muted)' }}>C'est par là qu'on commence.</p>
            </motion.div>
          </Container>
        </section>

        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: '48px' }}>
          <Container>
            <motion.div {...sectionReveal} className="max-w-3xl mx-auto mb-10">
              <div className="mb-4"><IndexLabel text="LE CONSTAT — Ça tourne, mais ça coûte" /></div>
              <h2 className="mb-5" style={{ color: 'var(--text)' }}>Ça tourne. Mais sans organisation claire, <span style={{ color: 'var(--primary)' }}>ça coûte tous les jours.</span></h2>
            </motion.div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {CONSTAT.map((col, i) => (
                <motion.div key={col.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="card-base p-6" style={{ background: 'var(--surface2)' }}>
                  <h3 className="mb-4" style={{ color: 'var(--text)', fontSize: '1rem' }}>{col.title}</h3>
                  <BulletList items={col.items} />
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <section style={{ paddingTop: '48px', paddingBottom: 'var(--spacing-section-v)' }}>
          <Container>
            <motion.div {...sectionReveal} className="max-w-3xl mx-auto mb-10">
              <div className="mb-4"><IndexLabel text="LA DIFFÉRENCE — Pas un audit" /></div>
              <h2 className="mb-5" style={{ color: 'var(--text)' }}>Pas un audit. Un travail <span style={{ color: 'var(--primary)' }}>avec vous</span>, sur place.</h2>
              <p style={{ color: 'var(--muted)' }}>On part de ce qui vous gêne. Sur place, on vérifie où agir en premier — le symptôme visible n'est pas toujours la cause.</p>
            </motion.div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div {...sectionReveal} className="card-base p-6" style={{ background: 'var(--surface)', borderLeft: '3px solid var(--border-strong)' }}>
                <div style={{ fontWeight: 600, color: 'var(--accent)', fontSize: '0.9rem', marginBottom: '12px' }}>Ce n'est pas</div>
                <BulletList items={CE_NEST_PAS} symbol="✕" />
              </motion.div>
              <motion.div {...sectionReveal} className="card-base p-6" style={{ background: 'var(--surface)', borderLeft: '3px solid var(--primary)' }}>
                <div style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '0.9rem', marginBottom: '12px' }}>C'est</div>
                <BulletList items={CEST} />
              </motion.div>
            </div>
          </Container>
        </section>

        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <Container>
            <motion.div {...sectionReveal} className="max-w-3xl mx-auto">
              <div className="mb-4"><IndexLabel text="LA DÉMARCHE — Trois semaines, quatre temps" /></div>
              <h2 className="mb-5" style={{ color: 'var(--text)' }}>Trois semaines, <span style={{ color: 'var(--primary)' }}>quatre temps.</span></h2>
              <p className="mb-10" style={{ color: 'var(--muted)' }}>Deux journées sur place, le reste en préparation, analyse et suivi : environ 3 jours dédiés à votre entreprise.</p>
            </motion.div>
            <div className="max-w-3xl mx-auto relative">
              <div aria-hidden="true" className="absolute left-4 top-0 bottom-0 w-px hidden md:block" style={{ background: 'linear-gradient(to bottom, var(--border-strong), var(--border), transparent)' }} />
              <div className="flex flex-col gap-6">
                {TIMELINE.map((phase, i) => (
                  <motion.div key={phase.phase} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="card-base p-6 md:ml-12 relative" style={{ background: 'var(--surface2)' }}>
                    <div aria-hidden="true" className="absolute hidden md:block" style={{ left: '-44px', top: '24px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary)', border: '3px solid var(--bg)', boxShadow: '0 0 0 2px var(--primary)' }} />
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <IndexLabel text={phase.phase} />
                      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--text)', fontSize: '1rem' }}>{phase.title}</span>
                      <span style={{ padding: '3px 10px', background: 'rgba(118,107,255,0.08)', borderRadius: 'var(--r-pill)', fontSize: '0.72rem', color: 'var(--accent)', fontFamily: 'var(--font-heading)', fontWeight: 500 }}>{phase.days}</span>
                    </div>
                    <BulletList items={phase.items} />
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)' }}>
          <Container>
            <motion.div {...sectionReveal} className="max-w-3xl mx-auto mb-10">
              <div className="mb-4"><IndexLabel text="LIVRABLES — Ce que vous avez en main" /></div>
              <h2 className="mb-5" style={{ color: 'var(--text)' }}>Quatre résultats <span style={{ color: 'var(--primary)' }}>concrets.</span></h2>
              <p style={{ color: 'var(--muted)' }}>Ils vous servent même si on s'arrête là.</p>
            </motion.div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {LIVRABLES.map((item, i) => (
                <motion.div key={item.num} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="card-base p-6" style={{ background: 'var(--surface2)' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)', opacity: 0.5, marginBottom: '8px' }}>{item.num}</div>
                  <h3 className="mb-2" style={{ color: 'var(--text)', fontSize: '1.05rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <section style={{ paddingTop: '48px', paddingBottom: 'var(--spacing-section-v)', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <Container>
            <motion.div {...sectionReveal} className="max-w-3xl mx-auto mb-10">
              <div className="mb-4"><IndexLabel text="EXEMPLES — Les premiers changements" /></div>
              <h2 className="mb-5" style={{ color: 'var(--text)' }}>Des changements simples, <span style={{ color: 'var(--primary)' }}>qui tiennent.</span></h2>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>C'est réussi quand : quelqu'un en est responsable, ça a servi sur de vrais cas, on voit la différence avant / après, et c'est encore utilisé 30 jours plus tard. Les vôtres sont choisis après le terrain, jamais avant.</p>
            </motion.div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CHANGEMENTS.map((item, i) => (
                <motion.div key={item.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: 'var(--surface2)', border: '1px solid var(--border)' }}>
                  <span aria-hidden="true" style={{ color: 'var(--primary)', fontWeight: 700, flexShrink: 0 }}>→</span>
                  <div>
                    <span style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.9rem' }}>{item.title}</span>
                    <div style={{ color: 'var(--muted)', fontSize: '0.82rem', marginTop: '2px' }}>{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)' }}>
          <Container>
            <motion.div {...sectionReveal} className="max-w-3xl mx-auto mb-10">
              <div className="mb-4"><IndexLabel text="RÉSULTATS — Le terrain d'abord" /></div>
              <h2 className="mb-5" style={{ color: 'var(--text)' }}>Le terrain d'abord. <span style={{ color: 'var(--primary)' }}>Les résultats suivent.</span></h2>
            </motion.div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {RESULTATS.map((result, i) => (
                <motion.div key={result.value} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="card-base p-6" style={{ background: 'var(--surface2)' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '-0.03em', marginBottom: '10px' }}>{result.icon} {result.value}</div>
                  <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '10px' }}>{result.desc}</p>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 600 }}>{result.who}</div>
                </motion.div>
              ))}
            </div>
            <p className="max-w-3xl mx-auto mt-8" style={{ fontSize: '0.78rem', color: 'var(--muted)', opacity: 0.6, textAlign: 'center' }}>Plus de 150 organisations accompagnées, plus de 15 ans de terrain. Résultats de missions complètes, cités pour montrer la démarche — ils ne constituent pas l'engagement de cette offre.</p>
          </Container>
        </section>

        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <Container>
            <motion.div {...sectionReveal} className="max-w-2xl mx-auto">
              <div className="text-center mb-8"><IndexLabel text="L'INVESTISSEMENT — Un forfait, un périmètre clair" /></div>
              <div className="mb-8 p-8 rounded-2xl text-center" style={{ background: 'rgba(118,107,255,0.08)', border: '1px solid var(--border-strong)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 700, color: 'var(--primary)', letterSpacing: '-0.03em' }}>3 400 €</div>
                <div style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: '4px' }}>HT, prix ferme</div>
                <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.7, marginTop: '12px' }}>50 % à la commande · 50 % après le premier test et la remise de la feuille de route.</p>
              </div>
              <div className="card-base p-6" style={{ background: 'var(--surface2)' }}>
                <h3 className="mb-5" style={{ color: 'var(--text)', fontSize: '1.1rem' }}>Ce qui est inclus</h3>
                <ul className="flex flex-col gap-2.5 mb-6">
                  {INCLUS.map((item) => <li key={item} className="flex items-start gap-2" style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6 }}><span aria-hidden="true" style={{ color: 'var(--primary)', fontWeight: 700, flexShrink: 0 }}>→</span>{item}</li>)}
                </ul>
                <div className="p-4 rounded-xl" style={{ background: 'var(--surface)', borderLeft: '3px solid var(--success)' }}>
                  <div style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.9rem', marginBottom: '10px' }}>Ce que ça peut valoir</div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between gap-4" style={{ fontSize: '0.875rem', color: 'var(--muted)' }}><span>Forfait + temps de vos équipes (≈ 20 h)</span><span style={{ fontWeight: 600, color: 'var(--text)', whiteSpace: 'nowrap' }}>≈ 4 200 €</span></div>
                    <div className="flex justify-between gap-4 pt-1" style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--success)' }}><span>Le repère : ≈ 800 € / semaine récupérés</span><span style={{ whiteSpace: 'nowrap' }}>sur un an</span></div>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted)', opacity: 0.6, marginTop: '12px', lineHeight: 1.6 }}>Ordre de grandeur, pas une promesse. On le calcule ensemble au cadrage : personnes concernées × heures perdues par semaine × 45 semaines × coût horaire × part vraiment récupérée.</p>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)' }}>
          <Container>
            <motion.div {...sectionReveal} className="max-w-3xl mx-auto mb-10">
              <div className="mb-4"><IndexLabel text="ENGAGEMENT — Pour que ça prenne" /></div>
              <h2 className="mb-5" style={{ color: 'var(--text)' }}>Je travaille dans l'équipe. <span style={{ color: 'var(--primary)' }}>Chacun y met sa part.</span></h2>
              <p style={{ color: 'var(--muted)' }}>Les dates sont posées à la signature. C'est ce qui fait la différence entre un conseil et un changement.</p>
            </motion.div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {APPORT.map((col, i) => (
                <motion.div key={col.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="card-base p-6" style={{ background: 'var(--surface2)' }}>
                  <h3 className="mb-4" style={{ color: 'var(--text)', fontSize: '1rem' }}>{col.title}</h3>
                  <BulletList items={col.items} />
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <section style={{ paddingTop: '48px', paddingBottom: 'var(--spacing-section-v)', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <Container>
            <motion.div {...sectionReveal} className="max-w-3xl mx-auto mb-10">
              <div className="mb-4"><IndexLabel text="ET ENSUITE — Vous choisissez sur des faits" /></div>
              <h2 className="mb-5" style={{ color: 'var(--text)' }}>Au point d'étape, <span style={{ color: 'var(--primary)' }}>vous choisissez la suite.</span></h2>
              <p style={{ color: 'var(--muted)' }}>Aucun engagement sur la suite n'est pris à la signature.</p>
            </motion.div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {SUITE.map((option, i) => (
                <motion.div key={option.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="card-base p-6" style={{ background: 'var(--surface2)' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>Option {i + 1}</div>
                  <h3 className="mb-2" style={{ color: 'var(--text)', fontSize: '1.05rem' }}>{option.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>{option.desc}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)' }}>
          <Container>
            <motion.div {...sectionReveal} className="max-w-2xl mx-auto text-center">
              <h2 className="mb-5" style={{ color: 'var(--text)' }}>On fixe <span style={{ color: 'var(--primary)' }}>les dates ?</span></h2>
              <p className="mb-8" style={{ color: 'var(--muted)' }}>Bon pour accord et premier versement. Référent nommé. Cadrage, journée terrain et atelier datés. Démarrage dans les deux semaines.</p>
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <a href="https://cal.com/fabrice-liut/45-min-meeting?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem', padding: '16px 32px' }}>Prendre 45 min</a>
                <Link to="/" className="btn-secondary" style={{ fontSize: '1rem', padding: '15px 28px' }}>← Retour à l'accueil</Link>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)', opacity: 0.7 }}>Fabrice Liut · fabrice@liut.me · liut.me · cal.com/fabrice-liut</p>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
