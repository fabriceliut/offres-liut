import { motion } from 'framer-motion';
import Container from './Container';

export default function ProofBand() {
  return (
    <div
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '28px 0',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 text-center"
        >
          <div style={{ color: 'var(--muted)', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
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
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--primary)',
                flexShrink: 0,
              }} aria-hidden="true" />
              <span style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.9rem' }}>
                {item}
              </span>
            </div>
          ))}
          <div style={{
            padding: '6px 14px',
            border: '1px solid var(--border-strong)',
            borderRadius: 'var(--r-pill)',
            color: 'var(--accent)',
            fontSize: '0.85rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
          }}>
            +150 organisations depuis +15 ans
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
