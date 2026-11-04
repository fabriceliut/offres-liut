import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Container from '../components/Container';
import IndexLabel from '../components/IndexLabel';
import ProofBand from '../components/ProofBand';
import HowWeWork from '../components/HowWeWork';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const ENTRY_POINTS = [
  {
    num: '01',
    label: 'Un problème concret vous bloque',
    title: 'Faire place nette',
    desc: 'On part d’un irritant précis, on vient voir le travail réel et on met un premier changement en pratique avec vos équipes.',
    meta: '3 semaines · 3 400 € HT',
    to: '/place-nette',
    featured: true,
    cta: 'Commencer par là',
  },
  {
    num: '02',
    label: 'Vous voulez comprendre le système',
    title: 'Diagnostic Flux & Leviers',
    desc: 'On cartographie les flux, chiffre les leviers et vous donne une décision claire sur ce qu’il faut structurer en premier.',
    meta: '2–3 semaines · forfait fixe',
    to: '/diagnostic',
    featured: false,
    cta: 'Voir les leviers',
  },
];

const LAYERS = [
  {
    num: '02',
    label: 'STRUCTURER',
    title: 'Programme Entreprises',
    desc: 'L’organisation devient lisible, les rôles s’alignent et les flux tiennent dans la durée.',
    to: '/entreprises',
  },
  {
    num: '03',
    label: 'PILOTER',
    title: 'Cockpit Dirigeant',
    desc: 'Vous récupérez de la hauteur, une vue d’ensemble et du temps pour décider plutôt que rattraper.',
    to: '/entrepreneurs',
  },
  {
    num: '04',
    label: 'ACCÉLÉRER',
    title: 'Intégration IA',
    desc: 'L’IA s’intègre dans vos flux existants pour réduire le bruit et amplifier ce qui fonctionne.',
    to: '/ia',
  },
];

const PATHWAYS = [
  { title: 'Le quotidien déborde', path: 'Faire place nette → Diagnostic si nécessaire', desc: 'Un premier déblocage concret, puis une vision plus large seulement si elle devient utile.' },
  { title: 'La croissance désorganise', path: 'Diagnostic → Structurer → Piloter', desc: 'On remet de la clarté dans le système avant d’ajouter des outils ou des personnes.' },
  { title: 'Le dirigeant veut sortir du centre', path: 'Cockpit → IA', desc: 'On installe le pilotage, puis on automatise les flux qui consomment encore du temps.' },
];

export default function OfferPMI() {
  return (
    <>
      <Header />
      <main>
        <section id="hero" className="relative flex items-center overflow-hidden" style={{ minHeight: 'min(840px, 100vh)', paddingTop: '128px', paddingBottom: '88px' }} aria-label="Introduction">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(118,107,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(118,107,255,0.045) 1px, transparent 1px)', backgroundSize: '64px 64px', maskImage: 'radial-gradient(ellipse 75% 70% at 50% 38%, black 35%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 75% 70% at 50% 38%, black 35%, transparent 100%)' }} />
          <div aria-hidden="true" className="absolute pointer-events-none" style={{ width: '560px', height: '560px', top: '8%', right: '-160px', background: 'radial-gradient(circle, rgba(118,107,255,0.14), transparent 68%)' }} />
          <Container className="relative z-10">
            <div className="max-w-4xl">
              <div className="mb-6">
                <IndexLabel text="Fabrice Liut — Organisation, pilotage & IA pour PME/PMI" />
              </div>
              <h1 className="mb-6" style={{ color: 'var(--text)', maxWidth: '900px' }}>
                Faire avancer votre entreprise commence par <span style={{ color: 'var(--primary)' }}>faire place nette.</span>
              </h1>
              <p className="text-lg mb-9 max-w-2xl" style={{ color: 'var(--muted)' }}>
                Je viens sur le terrain, je regarde où l’énergie se perd, puis je construis avec vous le prochain changement utile. Pas un catalogue de conseil : un parcours qui s’ajuste à votre point de départ.
              </p>
              <div className="flex flex-wrap gap-3 mb-12">
                <Link to="/place-nette" className="btn-primary">Commencer par Faire place nette →</Link>
                <a href="#parcours" className="btn-secondary">Voir le parcours</a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
                {[['+150', 'organisations accompagnées'], ['+15 ans', 'de terrain'], ['10–90', 'salariés'], ['x4,5', 'retour moyen observé']].map(([value, label]) => (
                  <div key={value} className="card-base p-4" style={{ background: 'rgba(13,13,20,0.7)' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--primary)' }}>{value}</div>
                    <div style={{ marginTop: '4px', color: 'var(--muted)', fontSize: '0.74rem', lineHeight: 1.35 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section id="parcours" style={{ padding: 'clamp(72px, 10vw, 132px) 0', background: 'var(--surface)' }} aria-labelledby="parcours-title">
          <Container>
            <div className="max-w-2xl mb-12">
              <IndexLabel text="01 — Choisir son point de départ" />
              <h2 id="parcours-title" className="mt-5 mb-4" style={{ color: 'var(--text)' }}>Vous n’avez pas besoin de tout transformer pour commencer.</h2>
              <p>Deux portes d’entrée. Une même logique : partir d’un problème réel, rendre visible ce qui bloque, puis décider de la suite sur des faits.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {ENTRY_POINTS.map((entry) => (
                <Link key={entry.to} to={entry.to} className="card-base group block p-6 md:p-8" style={{ background: entry.featured ? 'rgba(118,107,255,0.11)' : 'var(--bg)', borderColor: entry.featured ? 'rgba(118,107,255,0.55)' : 'var(--border)' }}>
                  <div className="flex items-center justify-between mb-12">
                    <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em' }}>{entry.num}</span>
                    <span style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>{entry.meta}</span>
                  </div>
                  <div style={{ color: 'var(--primary)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{entry.label}</div>
                  <h3 className="mt-3 mb-3" style={{ color: 'var(--text)', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>{entry.title}</h3>
                  <p className="mb-8" style={{ maxWidth: '44ch' }}>{entry.desc}</p>
                  <span style={{ color: entry.featured ? 'var(--primary)' : 'var(--text)', fontFamily: 'var(--font-heading)', fontSize: '0.88rem', fontWeight: 700 }}>{entry.cta} <span aria-hidden="true">→</span></span>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section id="offres" style={{ padding: 'clamp(72px, 10vw, 132px) 0' }} aria-labelledby="offres-title">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <IndexLabel text="02 — Les briques complémentaires" />
                <h2 id="offres-title" className="mt-5 mb-4" style={{ color: 'var(--text)' }}>Une fois le premier nœud défait, on construit ce qui doit tenir.</h2>
                <p>Chaque offre répond à une question différente. Vous pouvez les enchaîner, pas les subir toutes d’un coup.</p>
              </div>
              <div className="hidden md:block" style={{ color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontSize: '0.8rem', fontWeight: 700 }}>VOIR → STRUCTURER → PILOTER → ACCÉLÉRER</div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {LAYERS.map((layer) => (
                <Link key={layer.to} to={layer.to} className="card-base block p-6" style={{ background: 'var(--surface)' }}>
                  <div className="flex items-center justify-between mb-12"><span style={{ color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em' }}>{layer.num}</span><span aria-hidden="true" style={{ color: 'var(--border-strong)' }}>↗</span></div>
                  <div style={{ color: 'var(--primary)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em' }}>{layer.label}</div>
                  <h3 className="mt-3 mb-3" style={{ color: 'var(--text)' }}>{layer.title}</h3>
                  <p style={{ fontSize: '0.92rem' }}>{layer.desc}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section id="situations" style={{ padding: 'clamp(72px, 10vw, 132px) 0', background: 'var(--surface)' }} aria-labelledby="situations-title">
          <Container>
            <div className="max-w-2xl mb-12">
              <IndexLabel text="03 — Exemples de parcours" />
              <h2 id="situations-title" className="mt-5 mb-4" style={{ color: 'var(--text)' }}>Le bon parcours dépend de ce qui vous coûte aujourd’hui.</h2>
              <p>La première conversation sert à choisir la bonne profondeur d’intervention, pas à vous faire entrer dans une case.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {PATHWAYS.map((item) => (
                <div key={item.title} className="card-base p-6" style={{ background: 'var(--bg)' }}>
                  <h3 className="mb-4" style={{ color: 'var(--text)', fontSize: '1.15rem' }}>{item.title}</h3>
                  <div className="mb-4" style={{ color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontSize: '0.86rem', fontWeight: 700, lineHeight: 1.45 }}>{item.path}</div>
                  <p style={{ fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="resultats" aria-label="Résultats et preuves">
          <ProofBand />
          <Testimonials />
        </section>

        <section id="methode" aria-label="Méthode de travail">
          <HowWeWork />
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
