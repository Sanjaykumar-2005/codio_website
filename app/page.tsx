import Link from 'next/link';
import Reveal from './components/Reveal';
import StatCounter from './components/StatCounter';
import ScrollExpand from './components/ScrollExpand';

type Release = {
  title: string;
  body: string;
  date: string;
  category: string;
  cta: string;
  href: string;
};

const SELECTED: Release[] = [
  {
    title: 'Checkout 2.0',
    body: 'Rebuilt Northwind Retail’s legacy checkout into a Next.js + Stripe flow that lifted conversion 34% across mobile and desktop.',
    date: 'April 16, 2026',
    category: 'Web · E-commerce',
    cta: 'Read the engagement',
    href: '/portfolio',
  },
  {
    title: 'Lumen Cloud Re-Platform',
    body: 'Migrated a HIPAA-bound workload from EC2 to ECS Fargate with full IaC, 24/7 observability, and a 41% drop in monthly spend.',
    date: 'February 4, 2026',
    category: 'Cloud · Healthcare',
    cta: 'Read the engagement',
    href: '/portfolio',
  },
  {
    title: 'Roam Companion App',
    body: 'A cross-platform React Native app with offline-first itineraries — iOS and Android shipped on the same day, 4.8★ in the App Store.',
    date: 'January 30, 2026',
    category: 'Mobile · Travel',
    cta: 'Read the engagement',
    href: '/portfolio',
  },
];

const SERVICES = [
  { n: '01', name: 'Web Platforms', sub: 'Next.js · React · TypeScript' },
  { n: '02', name: 'Mobile Applications', sub: 'React Native · Swift · Kotlin' },
  { n: '03', name: 'Cloud & Infrastructure', sub: 'AWS · GCP · Terraform · K8s' },
  { n: '04', name: 'Product Design', sub: 'Discovery · UX · Design Systems' },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="frame pt-20 pb-28 max-md:pt-12 max-md:pb-16">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12 items-start">
          {/* Left: bold sans h1 with underlined keywords */}
          <div className="col-span-12 lg:col-span-8">
            <Reveal>
              <h1
                className="font-sans font-extrabold leading-[1.02] tracking-[-0.035em] text-[clamp(2.8rem,1.6rem+5.6vw,5.6rem)]"
                style={{ color: 'var(--color-ink)' }}
              >
                Senior <span className="u-word">engineering</span> and <span className="u-word">design</span> for software that has to keep working
              </h1>
            </Reveal>
          </div>

          {/* Right: serif body */}
          <div className="col-span-12 lg:col-span-4 lg:pt-6">
            <Reveal delay={150}>
              <p
                className="text-[1.0625rem] md:text-[1.1875rem] leading-relaxed"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-ink-2)' }}
              >
                iMax is a small senior engineering studio. We partner with founders and product teams to design, build, and ship web platforms, mobile apps, and cloud infrastructure that survive their first quarter.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Start a project
                </Link>
                <Link href="/portfolio" className="btn btn-secondary">
                  Selected work
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FEATURED ENGAGEMENT (Project-Glasswing scroll-expand) ============ */}
      <ScrollExpand travel={1.4}>
        <article className="feature-panel">
          <div className="feature-panel-inner">
            {/* Copy */}
            <div>
              <h2
                className="font-serif-display"
                style={{ fontSize: 'clamp(2.6rem, 1.4rem + 4vw, 5rem)', color: 'var(--color-paper)' }}
              >
                Project<br />Northwind
              </h2>
              <p className="feature-sub">
                Rebuilding the checkout that carries 18M sessions a year.
              </p>
              <div className="mt-10">
                <Link href="/portfolio" className="btn btn-light">
                  Continue reading
                </Link>
              </div>
            </div>

            {/* Art (kinetic SVG) */}
            <div className="feature-art">
              <svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <defs>
                  <pattern id="dot" width="6" height="6" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.7" fill="rgba(244,243,238,0.18)" />
                  </pattern>
                  <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="rgba(244,243,238,0.22)" />
                    <stop offset="1" stopColor="rgba(244,243,238,0.02)" />
                  </linearGradient>
                </defs>
                <rect width="600" height="600" fill="url(#dot)" />
                <g fill="none" stroke="rgba(244,243,238,0.55)" strokeWidth="0.9">
                  <path d="M40 480 Q 160 220 280 360 T 540 180" />
                  <path d="M120 540 Q 240 320 360 420 T 580 260" />
                  <path d="M60 320 Q 200 120 320 240 T 560 100" />
                  <path d="M100 200 Q 220 80  320 200 T 560 360" />
                </g>
                <g fill="none" stroke="rgba(201,100,66,0.45)" strokeWidth="0.7">
                  <path d="M40 80 Q 200 260 360 180 T 560 460" />
                </g>
                <rect x="0" y="0" width="600" height="600" fill="url(#g)" />
              </svg>
              <span className="badge">imax.studio / case-01</span>
            </div>
          </div>
        </article>
      </ScrollExpand>

      {/* ============ LATEST ENGAGEMENTS (3 release cards) ============ */}
      <section className="frame py-20 max-md:py-12">
        <div className="mb-10">
          <h2
            className="font-sans font-bold text-[clamp(1.6rem,1.2rem+1vw,2.25rem)] tracking-[-0.022em]"
            style={{ color: 'var(--color-ink)' }}
          >
            Latest engagements
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {SELECTED.map((r) => (
            <Reveal key={r.title} className="col-span-12 md:col-span-4">
              <article className="release-card">
                <h3 className="release-title">{r.title}</h3>
                <p className="release-body">{r.body}</p>

                <div className="release-meta">
                  <div className="release-meta-row">
                    <span className="label">Date</span>
                    <span className="value">{r.date}</span>
                  </div>
                  <div className="release-meta-row">
                    <span className="label">Discipline</span>
                    <span className="value">{r.category}</span>
                  </div>
                </div>

                <div className="release-cta">
                  <Link href={r.href} className="btn btn-primary">
                    {r.cta}
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex items-baseline justify-between">
          <span className="mono">Three of twenty-four shown</span>
          <Link href="/portfolio" className="btn btn-secondary">
            All projects
          </Link>
        </div>
      </section>

      {/* ============ MANIFESTO (serif headline + serif body) ============ */}
      <section className="frame py-28 max-md:py-16">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12">
          <div className="col-span-12 md:col-span-6">
            <Reveal>
              <h2
                className="font-serif-display"
                style={{ fontSize: 'clamp(2.2rem, 1.4rem + 3vw, 4.4rem)', color: 'var(--color-ink)' }}
              >
                We don’t sell sprints. We sell things that survive their first quarter.
              </h2>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-4">
            <Reveal delay={150}>
              <p className="mb-5 leading-relaxed" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-ink-2)' }}>
                Most software fails not at launch but at month four — when the demo wears off and the actual scale arrives. We design for that month. Senior people on every project, no juniors learning on your timeline, no agency-of-agency relay.
              </p>
              <p className="leading-relaxed" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-ink-2)' }}>
                Every Friday you get a deploy and a one-page note. Every Monday we’re in your standup. That’s the whole rhythm.
              </p>
              <Link href="/about" className="btn btn-secondary mt-8">
                Read the studio brief
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ SERVICES (editorial slab) ============ */}
      <section className="frame py-20 max-md:py-12">
        <div className="grid grid-cols-12 gap-6 items-end hairline-b pb-4 mb-2">
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-sans font-bold text-[clamp(1.6rem,1.2rem+1vw,2.25rem)] tracking-[-0.022em]" style={{ color: 'var(--color-ink)' }}>
              What we do
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right mono">
            Four disciplines, one team
          </div>
        </div>

        <div>
          {SERVICES.map((s) => (
            <Link
              key={s.n}
              href={`/services#${s.name.split(' ')[0].toLowerCase()}`}
              className="service-slab"
            >
              <span className="slab-idx ink-mute">{s.n}</span>
              <span className="slab-title">{s.name}</span>
              <span className="mono justify-self-end">{s.sub}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ NUMBERS ============ */}
      <section className="frame py-24 max-md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 hairline pt-12">
          <Stat n="01" value={<StatCounter target={124} />} label="Projects shipped" sub="2017 — 2026" />
          <Stat n="02" value={<StatCounter target={41} />} label="Active partners" sub="across 6 industries" />
          <Stat n="03" value={<StatCounter target={99.9} suffix="%" decimals={1} />} label="Uptime delivered" sub="rolling 12 months" />
          <Stat n="04" value={<StatCounter target={11} suffix="d" />} label="Median kickoff" sub="brief → first commit" />
        </div>
      </section>

      {/* ============ TESTIMONIAL (pull-quote style) ============ */}
      <section className="frame py-24 max-md:py-16">
        <Reveal>
          <blockquote className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-10 md:col-start-2">
              <p
                className="font-serif-display italic"
                style={{ fontSize: 'clamp(1.8rem, 1.2rem + 2vw, 3.2rem)', lineHeight: '1.18', color: 'var(--color-ink)' }}
              >
                “iMax rebuilt our checkout in six weeks and we lifted conversion thirty-four percent. They were senior, fast, and the code is the cleanest we have ever inherited. The bar is permanently higher now.”
              </p>
              <footer className="mt-8 hairline pt-5 flex flex-wrap items-baseline gap-3">
                <cite className="not-italic font-sans font-semibold text-lg" style={{ color: 'var(--color-ink)' }}>
                  Maria Chen
                </cite>
                <span className="mono">Head of Product · Northwind Retail</span>
              </footer>
            </div>
          </blockquote>
        </Reveal>
      </section>

      {/* ============ CTA — bold ink slab ============ */}
      <section className="frame pb-24 max-md:pb-16">
        <Reveal>
          <div className="feature-panel">
            <div className="feature-panel-inner" style={{ gridTemplateColumns: '1.4fr 1fr', minHeight: '320px' }}>
              <div>
                <h2
                  className="font-sans font-extrabold leading-[1.02] tracking-[-0.03em]"
                  style={{ fontSize: 'clamp(2.4rem, 1.4rem + 3.5vw, 4.6rem)', color: 'var(--color-paper)' }}
                >
                  Got something <span style={{ color: 'var(--color-signal-soft)' }}>worth building?</span>
                </h2>
                <p className="feature-sub" style={{ color: 'var(--color-paper-mute)' }}>
                  Tell us what you’re working on. We’ll reply by tomorrow.
                </p>
              </div>
              <div className="md:text-right flex md:justify-end items-start md:items-center">
                <Link href="/contact" className="btn btn-light">
                  Start a project
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function Stat({ n, value, label, sub }: { n: string; value: React.ReactNode; label: string; sub: string }) {
  return (
    <Reveal>
      <div className="flex flex-col gap-3">
        <span className="mono">{n}</span>
        <span className="stat-num text-[clamp(2.6rem,1.6rem+3vw,4.5rem)] tabular-nums">
          {value}
        </span>
        <div className="hairline pt-3">
          <div className="font-sans font-semibold text-base tracking-tight" style={{ color: 'var(--color-ink)' }}>
            {label}
          </div>
          <div className="mono mt-1">{sub}</div>
        </div>
      </div>
    </Reveal>
  );
}
