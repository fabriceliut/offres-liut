import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Container from '../components/Container';
import Footer from '../components/Footer';
import IndexLabel from '../components/IndexLabel';


const PAIN_POINTS = [
  "Sans vous, rien n'avance. Vous êtes le goulot d'étranglement de votre propre entreprise.",
  "Vous passez 70% de votre temps dans l'opérationnel au lieu de piloter la stratégie et le développement.",
  "Vos informations sont éparpillées : emails, carnets, fichiers, WhatsApp. Impossible d'avoir une vue d'ensemble.",
  "Déléguer est compliqué : vos collaborateurs n'ont pas les bonnes infos, alors vous reprenez la main.",
  "Le reporting vous prend des heures — et il est déjà obsolète quand vous le finissez.",
];

const BENEFITS = [
  { value: '6-8h', label: "récupérées par semaine sur l'opérationnel" },
  { value: '360°', label: "vue d'ensemble en temps réel sur votre activité" },
  { value: '×2', label: "capacité de délégation effective" },
];

const PROGRAM_STEPS = [
  { title: "Audit de votre pilotage", desc: "On cartographie votre réalité : comment circule l'information, où vous perdez du temps, ce qui dépend trop de vous. Sans filtre." },
  { title: "Priorisation des leviers", desc: "On identifie les 20% de changements qui vont libérer 80% de votre charge. On priorise par impact et facilité." },
  { title: "Design du cockpit", desc: "On dessine ensemble votre système de pilotage idéal : suivi projets, décisions, équipes, indicateurs. Sur papier d'abord." },
  { title: "Construction sur Notion", desc: "Je construis votre cockpit sur Notion. Tableaux de bord, suivi de projets, système de délégation, bases de connaissances. Je fais le gros du technique." },
  { title: "Mise en route & formation", desc: "On bascule vers votre nouveau système. Je vous forme et je forme vos managers proches pour que le système vive au quotidien." },
  { title: "Itérations terrain", desc: "On ajuste selon l'usage réel. Ce qui marche, on garde. Ce qui coince, on simplifie. Le système s'adapte à vous, pas l'inverse." },
  { title: "Structuration de la délégation", desc: "On met en place les flux pour que vos collaborateurs aient l'info sans vous solliciter. Votre présence devient stratégique, pas opérationnelle." },
  { title: "Pérennisation", desc: "On s'assure que le système tient sans moi. Vous êtes autonome. Votre entreprise peut tourner même quand vous n'êtes pas là." },
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
              <div className="reveal mb-6">
                <IndexLabel text="PROGRAMME — Pilotage Dirigeant" />
              </div>

              <h1 className="reveal mb-5" style={{ color: 'var(--text)' }}>
                Vous dirigez une PME.
                <br />
                <span style={{ color: 'var(--primary)' }}>Votre organisation repose trop sur vous.</span>
              </h1>

              <p className="reveal text-lg mb-4" style={{ color: 'var(--primary)', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>
                {"C'est une situation que je vois souvent. Voici ce que je mets en place."}
              </p>
            </div>
          </Container>
        </section>

        {/* Situation actuelle */}
        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: '48px' }}>
          <Container>
            <div className="max-w-2xl mx-auto">
              <div
                className="reveal card-base p-6"
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
              </div>

              <div
                className="reveal text-center py-6"
                style={{ color: 'var(--primary)', fontSize: '2rem' }}
              >
                {"↓"}
              </div>

              <div
                className="reveal card-base p-6"
                style={{ borderLeft: '3px solid var(--success)' }}
              >
                <h2 className="mb-5" style={{ color: 'var(--success)', fontSize: '1.3rem' }}>
                  {"✓ Ce que je vous propose"}
                </h2>
                <p className="mb-4" style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {"Un accompagnement sur "}
                  <span style={{ color: 'var(--primary)', fontWeight: 600 }}>6 mois</span>
                  {" pour structurer votre pilotage. Vue d'ensemble, délégation, temps libéré."}
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {"Le tout sur "}
                  <strong style={{ color: 'var(--text)' }}>Notion</strong>
                  {", construit sur-mesure. Je fais le technique, vous validez et pilotez."}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Benefits */}
        <section style={{ paddingTop: '48px', paddingBottom: '48px' }}>
          <Container>
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {BENEFITS.map((b, i) => (
                <div
                  key={i}
                  className="reveal card-base p-5 text-center"
                  style={{ borderLeft: '3px solid var(--primary)' }}
                >
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: 'var(--primary)' }}>
                    {b.value}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '4px' }}>{b.label}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Ce que vous obtenez */}
        <section style={{ paddingTop: '48px', paddingBottom: 'var(--spacing-section-v)' }}>
          <Container>
            <div
              className="reveal max-w-2xl mx-auto"
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
                  { title: "Tableau de bord stratégique", desc: "Vue en temps réel sur vos projets, vos indicateurs clés, et l'avancement de vos équipes. Plus besoin de demander où on en est." },
                  { title: "Système de délégation structuré", desc: "Chaque tâche déléguée a un responsable, un délai, un suivi. Vos collaborateurs savent quoi faire sans vous solliciter." },
                  { title: "Base de connaissances centralisée", desc: "Process, décisions, comptes-rendus, contacts clés : tout est au même endroit. Finie la perte d'information." },
                  { title: "Gestion de projets simplifiée", desc: "Suivi de vos chantiers en cours avec les jalons et les dépendances. Vous voyez d'un coup d'œil ce qui avance et ce qui bloque." },
                  { title: "Reporting automatisé", desc: "Les indicateurs se mettent à jour automatiquement. Le reporting mensuel qui prenait 2 jours se fait en temps réel." },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="reveal flex items-start gap-3 p-4 rounded-xl"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                  >
                    <span style={{ color: 'var(--primary)', fontWeight: 700, flexShrink: 0 }}>{"→"}</span>
                    <div>
                      <span style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.9rem' }}>{item.title}</span>
                      <p style={{ color: 'var(--muted)', fontSize: '0.875rem', marginTop: '4px', lineHeight: 1.65 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Prix */}
        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <Container>
            <div
              className="reveal max-w-2xl mx-auto text-center p-8 rounded-2xl"
              style={{ background: 'rgba(118,107,255,0.08)', border: '1px solid var(--border-strong)' }}
            >
              <h2 className="mb-3" style={{ color: 'var(--text)', fontSize: '1.5rem' }}>{"L'investissement"}</h2>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 700, color: 'var(--primary)', margin: '16px 0' }}>
                {"13 000€"}
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                {"10 jours de travail effectif sur 6 mois"}
                <br />{"Payable en 3 fois, à chaque étape validée ensemble"}
              </p>
            </div>
          </Container>
        </section>

        {/* ROI */}
        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)' }}>
          <Container>
            <div
              className="reveal max-w-2xl mx-auto"
            >
              <div className="mb-4">
                <IndexLabel text="ROI — Sans blabla" />
              </div>
              <h2 className="mb-6" style={{ color: 'var(--text)' }}>
                {"Est-ce que ça "}
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
            </div>
          </Container>
        </section>

        {/* Programme */}
        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <Container>
            <div
              className="reveal max-w-3xl mx-auto"
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
                <h3 className="mb-4" style={{ color: 'var(--primary)', fontSize: '1rem' }}>{"Format adapté à votre agenda de dirigeant"}</h3>
                <div className="flex flex-col gap-3">
                  <div style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                    <strong style={{ color: 'var(--text)' }}>{"Sessions de 1 à 2h"}</strong>{" — En présentiel ou à distance, selon votre planning"}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65, borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
                    <strong style={{ color: 'var(--text)' }}>{"Workshops demi-journée"}</strong>{" — Pour les mises en place structurantes et la formation de vos managers"}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65, borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
                    <strong style={{ color: 'var(--text)' }}>Travail asynchrone</strong>{" — Je construis le système, vous validez, on affine"}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {PROGRAM_STEPS.map((step, i) => (
                  <div
                    key={i}
                    className="reveal card-base p-5"
                    style={{ borderTop: '2px solid var(--primary)' }}
                  >
                    <h3 className="mb-2" style={{ color: 'var(--primary)', fontSize: '0.95rem' }}>
                      {i + 1}. {step.title}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Pourquoi Notion */}
        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)' }}>
          <Container>
            <div
              className="reveal max-w-2xl mx-auto"
            >
              <div className="mb-4">
                <IndexLabel text="OUTIL — Pourquoi Notion" />
              </div>
              <div className="card-base p-5" style={{ borderLeft: '3px solid var(--primary)' }}>
                <p className="mb-4" style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                  {"Notion est l'outil le plus adapté pour construire un cockpit de direction sur-mesure. Il est "}
                  <strong style={{ color: 'var(--text)' }}>flexible</strong>
                  {" (on construit exactement ce dont vous avez besoin), "}
                  <strong style={{ color: 'var(--text)' }}>{"évolutif"}</strong>
                  {" (le système grandit avec votre entreprise), et "}
                  <strong style={{ color: 'var(--text)' }}>partageable</strong>
                  {" (vos managers y accèdent facilement)."}
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                  {"Pas besoin d'être technique. Quand c'est bien conçu, c'est aussi simple qu'un tableur — mais infiniment plus puissant."}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
          <Container>
            <div
              className="reveal max-w-2xl mx-auto text-center"
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
                  {"← Retour à l'accueil"}
                </Link>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)', opacity: 0.7 }}>
                {"Pas sûr ? Pas grave. On échange, on voit si ça colle. Si ce n'est pas le bon moment, on se le dit."}
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
