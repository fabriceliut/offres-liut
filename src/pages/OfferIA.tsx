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

const TRAPS = [
  {
    icon: '🔧',
    title: 'Le bricolage interne',
    desc: "On teste des outils dans son coin, on perd du temps à configurer des prompts qui ne tiennent pas. On finit par abandonner.",
  },
  {
    icon: '✨',
    title: "L'objet brillant",
    desc: "On met de l'IA partout par peur de rater le train. On complexifie le travail au lieu de l'alléger.",
  },
];

const WHY_ME = [
  {
    icon: '⚡',
    title: '40h d\'essais → 1h de diagnostic',
    desc: "Là où beaucoup passent des semaines à tester, j'identifie vite le maillon faible et j'y injecte la bonne solution.",
  },
  {
    icon: '🔄',
    title: 'Veille permanente',
    desc: "L'IA bouge plus vite que tout. Dès qu'une évolution concerne votre secteur, je l'adapte à votre structure.",
  },
  {
    icon: '🔒',
    title: 'Sécurité',
    desc: "Bricoler seul, c'est souvent exposer ses données sans le savoir. Je sécurise vos flux.",
  },
];

const PERFORMANCE = [
  { title: 'Fin des tâches répétitives', desc: "Automatisation des tâches à faible valeur. Vos équipes se concentrent sur ce qui compte." },
  { title: 'Décisions augmentées', desc: "Analyse de vos données en temps réel. Moins d'intuition, plus de lucidité." },
  { title: 'Workflows autonomes', desc: "Des flux qui tournent tout seuls. Moins d'interventions manuelles." },
];

const QVT = [
  { title: 'Moins de charge mentale', desc: "L'IA gère le bruit — tris, résumés, rappels. Vos équipes se concentrent sur leur zone de génie." },
  { title: "Moins d'erreurs", desc: "Moins de stress lié aux oublis. Les machines sont meilleures que nous pour ça." },
  { title: '1 à 2h récupérées par jour', desc: "Du répit et de la créativité rendus à vos collaborateurs. Chaque jour." },
];

const STEPS = [
  {
    num: '01',
    title: 'Diagnostic "Flux & Valeur"',
    desc: "J'analyse votre quotidien pour trouver où l'IA apporte un ROI immédiat. On ne touche qu'à ce qui a de la valeur.",
  },
  {
    num: '02',
    title: 'Intégration sur-mesure',
    desc: "Mise en place de solutions connectées à vos outils actuels. Pas de migration, pas de révolution.",
  },
  {
    num: '03',
    title: 'Formation des équipes',
    desc: "Je ne pose pas des outils et je pars. Je forme vos collaborateurs pour qu'ils s'en servent au quotidien.",
  },
  {
    num: '04',
    title: 'Suivi & évolution',
    desc: "L'IA bouge vite. On ajuste vos systèmes au fil des avancées. Votre intégration reste à jour.",
  },
];

export default function OfferIA() {
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
                <IndexLabel text="PROGRAMME — Intégration IA" />
              </motion.div>

              <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="mb-5" style={{ color: 'var(--text)' }}>
                L'IA aux bons moments,{' '}
                <span style={{ color: 'var(--primary)' }}>aux bons endroits.</span>
                <br />
                Pas plus.
              </motion.h1>

              <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="text-lg mb-4 max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
                Intégrez l'intelligence artificielle là où elle crée de la valeur. Et nulle part ailleurs.
              </motion.p>
            </div>
          </Container>
        </section>

        {/* Le paradoxe */}
        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: '48px' }}>
          <Container>
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <IndexLabel text="CONSTAT — Le paradoxe de l'IA" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="mb-4"
                style={{ color: 'var(--text)' }}
              >
                Tout le monde en parle.{' '}
                <span style={{ color: 'var(--primary)' }}>Presque personne ne l'utilise bien.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="mb-8"
                style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7 }}
              >
                La plupart des entreprises tombent dans deux pièges :
              </motion.p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {TRAPS.map((trap, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="card-base p-5"
                    style={{ borderLeft: '3px solid #ef5350' }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span style={{ fontSize: '1.2rem' }}>{trap.icon}</span>
                      <h3 style={{ color: '#ef5350', fontSize: '0.95rem', fontWeight: 600 }}>{trap.title}</h3>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65 }}>{trap.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
                className="card-base p-5"
                style={{ borderLeft: '3px solid var(--success)' }}
              >
                <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                  <strong style={{ color: 'var(--text)' }}>Mon approche :</strong> aider les dirigeants à naviguer entre ces deux écueils.
                  On identifie ensemble où ça a de la valeur — et on ne touche qu'à ça.
                </p>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Pourquoi moi */}
        <section style={{ paddingTop: '48px', paddingBottom: 'var(--spacing-section-v)' }}>
          <Container>
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <IndexLabel text="EXPERTISE — Pourquoi un intégrateur" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="mb-8"
                style={{ color: 'var(--text)' }}
              >
                Je ne vends pas un outil.{' '}
              <span style={{ color: 'var(--primary)' }}>Je vous montre où ça crée de la valeur.</span>
              </motion.h2>

              <div className="flex flex-col gap-4">
                {WHY_ME.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                  >
                    <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <span style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.9rem' }}>{item.title}</span>
                      <p style={{ color: 'var(--muted)', fontSize: '0.875rem', marginTop: '4px', lineHeight: 1.65 }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Performance & QVT */}
        <section style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <Container>
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <IndexLabel text="PROMESSE — Performance & Qualité de Vie" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="mb-4"
                style={{ color: 'var(--text)' }}
              >
                L'IA n'est pas là pour remplacer l'humain.{' '}
                <span style={{ color: 'var(--primary)' }}>Elle lui rend son temps de cerveau.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="mb-10"
                style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7 }}
              >
                Deux axes. Les deux comptent autant.
              </motion.p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Performance */}
                <div>
                  <h3 className="mb-4 flex items-center gap-2" style={{ color: 'var(--primary)', fontSize: '1.05rem' }}>
                    🚀 Performance
                  </h3>
                  <div className="flex flex-col gap-3">
                    {PERFORMANCE.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ delay: i * 0.06, duration: 0.4 }}
                        className="p-4 rounded-xl"
                        style={{ background: 'var(--surface2)', border: '1px solid var(--border)' }}
                      >
                        <span style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.9rem' }}>{item.title}</span>
                        <p style={{ color: 'var(--muted)', fontSize: '0.82rem', marginTop: '4px', lineHeight: 1.65 }}>{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* QVT */}
                <div>
                  <h3 className="mb-4 flex items-center gap-2" style={{ color: 'var(--success)', fontSize: '1.05rem' }}>
                    🌱 Qualité de Vie au Travail
                  </h3>
                  <div className="flex flex-col gap-3">
                    {QVT.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ delay: i * 0.06, duration: 0.4 }}
                        className="p-4 rounded-xl"
                        style={{ background: 'var(--surface2)', border: '1px solid var(--border)' }}
                      >
                        <span style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.9rem' }}>{item.title}</span>
                        <p style={{ color: 'var(--muted)', fontSize: '0.82rem', marginTop: '4px', lineHeight: 1.65 }}>{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Comment on travaille */}
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
                <IndexLabel text="MÉTHODE — Approche chirurgicale" />
              </div>
              <h2 className="mb-4" style={{ color: 'var(--text)' }}>
                Pas de déploiement massif.{' '}
                <span style={{ color: 'var(--primary)' }}>On est chirurgical.</span>
              </h2>
              <p className="mb-8" style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                On touche uniquement là où ça a de la valeur. Le reste, on n'y touche pas.
              </p>

              <div className="flex flex-col gap-4">
                {STEPS.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                    className="card-base p-5"
                    style={{ borderTop: '2px solid var(--primary)' }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)' }}>{step.num}</span>
                      <h3 style={{ color: 'var(--text)', fontSize: '0.95rem', fontWeight: 600 }}>{step.title}</h3>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65 }}>{step.desc}</p>
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
              <h2 className="mb-4" style={{ color: 'var(--text)' }}>
                On en discute ?{' '}
                <span style={{ color: 'var(--primary)' }}>45 minutes.</span>
              </h2>
              <p className="mb-3" style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                Vous me dites ce qui vous prend du temps. Je vous dis où l'IA peut aider.
                On décide après.
              </p>
              <p className="mb-8" style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.7, fontStyle: 'italic', opacity: 0.8 }}>
                L'objectif n'est pas de mettre de l'IA partout. C'est de la mettre là où elle change vraiment la donne pour vous.
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
