import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

export default function Hero() {
  const statRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = statRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = 'x4,5';
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const target = 4.5;
        const duration = 1600;
        const startTime = performance.now();

        function update(now: number) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el!.textContent = 'x' + (eased * target).toFixed(1).replace('.', ',');
          if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      aria-label="Introduction"
      style={{
        paddingTop: 'calc(var(--s-32) + 64px)',
        paddingBottom: 'var(--s-24)',
        borderBottom: '1px solid var(--rule)',
      }}
    >
      <Container>
        <div style={{ maxWidth: '760px' }}>

          {/* Eyebrow */}
          <p
            className="hero-animate"
            style={{
              '--delay': '0ms',
              fontSize: 'var(--step--1)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              color: 'var(--ink-muted)',
              marginBottom: 'var(--s-6)',
            } as React.CSSProperties}
          >
            Fabrice Liut — Associé Opérationnel &amp; Stratégique
          </p>

          {/* H1 */}
          <h1
            className="hero-animate"
            style={{
              '--delay': '80ms',
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'var(--step-5)',
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              color: 'var(--ink)',
              marginBottom: 'var(--s-12)',
              textWrap: 'balance',
            } as React.CSSProperties}
          >
            J'accompagne des dirigeants de PME&nbsp;&amp;&nbsp;PMI{' '}
            <em style={{ color: 'var(--accent)' }}>dans la structuration de leur entreprise.</em>
          </h1>

          {/* Stat cinématique x4.5 */}
          <div
            className="hero-animate"
            style={{
              '--delay': '160ms',
              display: 'flex',
              alignItems: 'baseline',
              gap: 'var(--s-4)',
              marginBottom: 'var(--s-4)',
              paddingBottom: 'var(--s-8)',
              borderBottom: '1px solid var(--rule)',
            } as React.CSSProperties}
          >
            <span
              ref={statRef}
              data-stat
              aria-label="Retour x4,5"
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'var(--step-6)',
                fontWeight: 700,
                color: 'var(--accent)',
                lineHeight: 1,
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              x0,0
            </span>
            <p
              style={{
                fontSize: 'var(--step-0)',
                color: 'var(--ink-muted)',
                lineHeight: 1.4,
                maxWidth: '220px',
                margin: 0,
              }}
            >
              retour moyen observé sur +150 organisations accompagnées
            </p>
          </div>

          {/* Supporting stats */}
          <div
            className="hero-animate"
            style={{
              '--delay': '200ms',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--s-6)',
              marginBottom: 'var(--s-12)',
            } as React.CSSProperties}
          >
            {[
              { value: '+15 ans', label: 'de terrain' },
              { value: '10–90', label: 'salariés' },
              { value: 'Lyon', label: 'basé, déplacements France' },
            ].map((s) => (
              <div key={s.value} style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--s-2)' }}>
                <span
                  data-stat
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 'var(--step-2)',
                    fontWeight: 700,
                    color: 'var(--ink)',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {s.value}
                </span>
                <span style={{ fontSize: 'var(--step--1)', color: 'var(--ink-muted)' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Subtext */}
          <p
            className="hero-animate"
            style={{
              '--delay': '280ms',
              fontSize: 'var(--step-1)',
              color: 'var(--ink-muted)',
              lineHeight: 1.65,
              maxWidth: '520px',
              marginBottom: 'var(--s-10)',
            } as React.CSSProperties}
          >
            Basé à Lyon, je viens sur place, j'écoute ce qui coince, et on avance ensemble.
            Vous me dites ce qui bloque. J'observe, je mets en place. On teste, on ajuste, on continue.
          </p>

          {/* CTAs */}
          <div
            className="hero-animate"
            style={{
              '--delay': '360ms',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--s-4)',
            } as React.CSSProperties}
          >
            <a
              href="https://cal.com/fabrice-liut/45-min-meeting?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M5 1.5V4.5M11 1.5V4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                <path d="M2 7h12" stroke="currentColor" strokeWidth="1.4"/>
              </svg>
              Prendre 45 min
            </a>
            <Link to="/entreprises" className="btn-secondary">
              Découvrir le programme
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}


