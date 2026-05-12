import Container from './Container';

export default function ProofBand() {
  return (
    <div
      style={{
        background: 'var(--bg-elevated)',
        borderTop: '1px solid var(--rule)',
        borderBottom: '1px solid var(--rule)',
        padding: '28px 0',
      }}
    >
      <Container>
        <div className="reveal flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-center">
          <div style={{ color: 'var(--ink-muted)', fontSize: 'var(--step--1)', letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
            Déjà accompagné
          </div>
          {[
            'PME & PMI',
            'Équipes de direction',
            'Start-ups & Scale-ups',
            'Associations',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: 'var(--accent)',
                flexShrink: 0,
              }} aria-hidden="true" />
              <span style={{ color: 'var(--ink)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--step--1)' }}>
                {item}
              </span>
            </div>
          ))}
          <div style={{
            padding: '5px 12px',
            border: '1px solid var(--accent)',
            borderRadius: 'var(--r-pill)',
            color: 'var(--accent)',
            fontSize: 'var(--step--1)',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
          }}>
            +150 organisations depuis +15 ans
          </div>
        </div>
      </Container>
    </div>
  );
}
