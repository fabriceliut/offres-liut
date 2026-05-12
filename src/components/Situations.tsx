import Container from './Container';
import IndexLabel from './IndexLabel';

const SITUATIONS = [
  {
    num: '01',
    title: 'La croissance brouille les repères',
    desc: "Vous passez de 10 à 30, 50, 90 personnes. Les process informels craquent, la coordination devient lourde, des coûts cachés apparaissent.",
    signal: "Réunions qui s’allongent, doublons, délais qui glissent",
  },
  {
    num: '02',
    title: 'La communication coince entre les équipes',
    desc: "Les informations se perdent, les décisions traînent, les équipes travaillent en silo. Tout le monde s’active mais le système perd de l’énergie.",
    signal: "Emails sans réponse, réunions qui n’aboutissent pas, turn-over en hausse",
  },
  {
    num: '03',
    title: 'Un sujet qui traîne',
    desc: "Un chantier ERP, lean, réorg — et ça patine. Résistances, manque d’adoption. Personne n’arrive à le faire avancer seul.",
    signal: "Équipes qui contournent les nouvelles procédures, retour aux anciennes habitudes",
  },
  {
    num: '04',
    title: 'Une direction qui porte tout',
    desc: "Vous faites le travail de 3 personnes. Votre entreprise repose trop sur vous. Déléguer est compliqué : sans vous, rien n’avance.",
    signal: "Vous êtes sur le chemin critique de tout, votre agenda déborde d’opérationnel",
  },
];

export default function Situations() {
  return (
    <section
      id="situations"
      style={{ paddingTop: 'var(--spacing-section-v)', paddingBottom: 'var(--spacing-section-v)' }}
    >
      <Container>
        <div className="reveal mb-4">
          <IndexLabel text="03 — Situations" />
        </div>

        <h2 className="reveal mb-4" style={{ color: 'var(--text)' }}>
          Vous vous reconnaissez ?
        </h2>

        <p className="reveal mb-12 max-w-xl" style={{ color: 'var(--muted)' }}>
          Ce sont les situations les plus fréquentes que je rencontre.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {SITUATIONS.map((s, i) => (
            <div
              key={i}
              className="card-base reveal p-6"
              style={{ '--reveal-delay': `${i * 60}ms` } as React.CSSProperties}
            >
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--step-3)',
                color: 'var(--muted)',
                opacity: 0.3,
                lineHeight: 1,
                marginBottom: 'var(--s-3)',
                fontVariantNumeric: 'tabular-nums',
              }}>
                {s.num}
              </div>
              <h3 style={{ color: 'var(--text)', marginBottom: 'var(--s-3)', fontStyle: 'normal', fontSize: 'var(--step-1)' }}>{s.title}</h3>
              <p style={{ fontSize: 'var(--step--1)', color: 'var(--muted)', lineHeight: 1.65, marginBottom: 'var(--s-4)' }}>
                {s.desc}
              </p>
              <div style={{
                fontSize: 'var(--step--1)',
                color: 'var(--accent)',
                paddingTop: 'var(--s-3)',
                borderTop: '1px solid var(--border)',
              }}>
                Signal : {s.signal}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
