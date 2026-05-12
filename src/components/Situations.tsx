import Container from './Container';
import IndexLabel from './IndexLabel';

const SITUATIONS = [
  {
    num: '01',
    title: 'La croissance brouille les rep\u00e8res',
    desc: "Vous passez de 10 \u00e0 30, 50, 90 personnes. Les process informels craquent, la coordination devient lourde, des co\u00fbts cach\u00e9s apparaissent.",
    signal: "R\u00e9unions qui s\u2019allongent, doublons, d\u00e9lais qui glissent",
  },
  {
    num: '02',
    title: 'La communication coince entre les \u00e9quipes',
    desc: "Les informations se perdent, les d\u00e9cisions tra\u00eenent, les \u00e9quipes travaillent en silo. Tout le monde s\u2019active mais le syst\u00e8me perd de l\u2019\u00e9nergie.",
    signal: "Emails sans r\u00e9ponse, r\u00e9unions qui n\u2019aboutissent pas, turn-over en hausse",
  },
  {
    num: '03',
    title: 'Un sujet qui tra\u00eene',
    desc: "Un chantier ERP, lean, r\u00e9org \u2014 et \u00e7a patine. R\u00e9sistances, manque d\u2019adoption. Personne n\u2019arrive \u00e0 le faire avancer seul.",
    signal: "\u00c9quipes qui contournent les nouvelles proc\u00e9dures, retour aux anciennes habitudes",
  },
  {
    num: '04',
    title: 'Une direction qui porte tout',
    desc: "Vous faites le travail de 3 personnes. Votre entreprise repose trop sur vous. D\u00e9l\u00e9guer est compliqu\u00e9\u00a0: sans vous, rien n\u2019avance.",
    signal: "Vous \u00eates sur le chemin critique de tout, votre agenda d\u00e9borde d\u2019op\u00e9rationnel",
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
          <IndexLabel text="03 \u2014 Situations" />
        </div>

        <h2 className="reveal mb-4" style={{ color: 'var(--ink)' }}>
          Vous vous reconnaissez ?
        </h2>

        <p className="reveal mb-12 max-w-xl" style={{ color: 'var(--ink-muted)' }}>
          Ce sont les situations les plus fr\u00e9quentes que je rencontre.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {SITUATIONS.map((s, i) => (
            <div
              key={i}
              className="card-base reveal p-6"
              style={{ '--reveal-delay': `${i * 60}ms` } as React.CSSProperties}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'var(--step-3)',
                color: 'var(--ink-muted)',
                opacity: 0.3,
                lineHeight: 1,
                marginBottom: 'var(--s-3)',
                fontVariantNumeric: 'tabular-nums',
              }}>
                {s.num}
              </div>
              <h3 style={{ color: 'var(--ink)', marginBottom: 'var(--s-3)', fontStyle: 'normal', fontSize: 'var(--step-1)' }}>{s.title}</h3>
              <p style={{ fontSize: 'var(--step--1)', color: 'var(--ink-muted)', lineHeight: 1.65, marginBottom: 'var(--s-4)' }}>
                {s.desc}
              </p>
              <div style={{
                fontSize: 'var(--step--1)',
                color: 'var(--accent)',
                fontStyle: 'italic',
                paddingTop: 'var(--s-3)',
                borderTop: '1px solid var(--rule)',
              }}>
                Signal\u00a0: {s.signal}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
