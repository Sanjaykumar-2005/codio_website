import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../components/Reveal';

export const metadata: Metadata = {
  title: 'Services — Web, mobile, cloud, design',
  description:
    'Web platforms, mobile applications, cloud infrastructure and product design — delivered end to end by senior engineers.',
};

type Service = {
  id: string;
  n: string;
  eyebrow: string;
  title: string;
  blurb: string;
  stack: string[];
  features: string[];
};

const SERVICES: Service[] = [
  {
    id: 'web',
    n: '01',
    eyebrow: 'Web Platforms',
    title: 'Web platforms engineered for performance and growth.',
    blurb:
      'From marketing sites to mission-critical SaaS dashboards. We use Next.js, React and TypeScript the way they were designed to be used — server-rendered, accessible, and fast on every device people actually own.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Postgres', 'Redis', 'Vercel · Fly · AWS'],
    features: [
      'Marketing & content sites',
      'SaaS dashboards & admin tools',
      'Headless CMS (Sanity, Contentful)',
      'E-commerce (Shopify, Stripe)',
      'Core Web Vitals & SEO tuning',
      'Accessibility (WCAG 2.2 AA)',
    ],
  },
  {
    id: 'mobile',
    n: '02',
    eyebrow: 'Mobile Applications',
    title: 'Native-quality mobile apps on iOS and Android in parallel.',
    blurb:
      'One engineering team, two stores, one codebase. React Native or Flutter where they shine, native Swift / Kotlin when native is the right call. App Store and Play submission managed end to end.',
    stack: ['React Native', 'Expo', 'Swift', 'Kotlin', 'Firebase', 'Sentry'],
    features: [
      'Cross-platform applications',
      'Native iOS & Android',
      'Offline-first architectures',
      'Push, deep-linking, IAP',
      'CI for app distribution',
      'Store submission & review',
    ],
  },
  {
    id: 'cloud',
    n: '03',
    eyebrow: 'Cloud & Infrastructure',
    title: 'Infrastructure built for reliability, observable by default.',
    blurb:
      'AWS, GCP and Azure environments designed around your workload — not the other way around. Everything in code (Terraform, CDK), every deploy traceable, every spike alerted before users notice.',
    stack: ['Terraform', 'CDK', 'Kubernetes', 'AWS', 'GCP', 'Datadog · Grafana'],
    features: [
      'Cloud migration & re-architecture',
      'Infrastructure as Code',
      'CI/CD pipelines',
      'Kubernetes & serverless',
      'Observability stack',
      'Cost optimisation audits',
    ],
  },
  {
    id: 'design',
    n: '04',
    eyebrow: 'Product Design',
    title: 'Product design that ships with the code, not next quarter.',
    blurb:
      'Discovery, UX, design systems and component libraries — built directly in Figma and React so engineering inherits, not interprets. We work alongside your team in the same Linear cycle.',
    stack: ['Figma', 'Tokens Studio', 'Storybook', 'Radix', 'Tailwind v4', 'Motion'],
    features: [
      'Discovery & UX research',
      'Design systems',
      'UI engineering',
      'Brand-into-product',
      'Component libraries',
      'Design ops & hand-off',
    ],
  },
];

const ENGAGEMENTS = [
  { n: '01', name: 'Sprint', sub: 'Two weeks', body: 'Discovery, spike, working prototype. We hand over a written plan and a budget you can take to your board.' },
  { n: '02', name: 'Build', sub: 'Six — twelve weeks', body: 'A bounded production build with weekly demos and Friday deploys. Fixed scope, fixed price.' },
  { n: '03', name: 'Embed', sub: 'Three — twelve months', body: 'We embed senior engineers into your team for ongoing roadmap work. Day-rate, monthly cap.' },
];

export default function ServicesPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="frame pt-20 pb-24 max-md:pt-12 max-md:pb-14">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10 items-start">
          <div className="col-span-12 lg:col-span-8">
            <Reveal>
              <h1
                className="font-sans font-extrabold leading-[1.02] tracking-[-0.035em] text-[clamp(2.6rem,1.6rem+5vw,5.2rem)]"
                style={{ color: 'var(--color-ink)' }}
              >
                Four <span className="u-word">disciplines</span>, one team. End to end.
              </h1>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pt-6">
            <Reveal delay={150}>
              <p className="text-[1.0625rem] md:text-[1.1875rem] leading-relaxed" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-ink-2)' }}>
                Each discipline runs scope → shape → ship → sustain. Most engagements span two or three of them, and most start with a 30-minute call.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">Book a call</Link>
                <Link href="/portfolio" className="btn btn-secondary">See examples</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ SERVICES — long-form ============ */}
      <section className="frame">
        {SERVICES.map((s, i) => (
          <ServiceBlock key={s.id} service={s} reverse={i % 2 === 1} />
        ))}
      </section>

      {/* ============ ENGAGEMENT MODELS — 3 release cards ============ */}
      <section className="frame py-24 max-md:py-16">
        <div className="mb-10">
          <h2 className="font-sans font-bold text-[clamp(1.6rem,1.2rem+1vw,2.25rem)] tracking-[-0.022em]" style={{ color: 'var(--color-ink)' }}>
            Three ways to engage
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {ENGAGEMENTS.map((e) => (
            <Reveal key={e.n} className="col-span-12 md:col-span-4">
              <article className="release-card">
                <h3 className="release-title">{e.name}</h3>
                <p className="release-body">{e.body}</p>
                <div className="release-meta">
                  <div className="release-meta-row">
                    <span className="label">Duration</span>
                    <span className="value">{e.sub}</span>
                  </div>
                  <div className="release-meta-row">
                    <span className="label">Index</span>
                    <span className="value">{e.n}</span>
                  </div>
                </div>
                <div className="release-cta">
                  <Link href="/contact" className="btn btn-primary">Discuss this</Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ CTA — dark feature panel ============ */}
      <section className="frame pb-24 max-md:pb-16">
        <Reveal>
          <div className="feature-panel cta-panel">
            <div className="feature-panel-inner">
              <div>
                <h2
                  className="font-sans font-extrabold leading-[1.02] tracking-[-0.03em]"
                  style={{ fontSize: 'clamp(2.4rem, 1.4rem + 3.5vw, 4.4rem)', color: 'var(--color-paper)' }}
                >
                  Pick a discipline. <span style={{ color: 'var(--color-signal-soft)' }}>Or all four.</span>
                </h2>
                <p className="feature-sub">
                  Most engagements span multiple disciplines. Almost all start with a 30-minute scoping call.
                </p>
              </div>
              <div className="md:text-right flex md:justify-end items-start md:items-center">
                <Link href="/contact" className="btn btn-light">Book a scoping call</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function ServiceBlock({ service: s, reverse }: { service: Service; reverse: boolean }) {
  return (
    <article id={s.id} className="py-24 max-md:py-16 hairline-b scroll-mt-24">
      <div className="grid grid-cols-12 gap-x-8 gap-y-10">
        <div className={`col-span-12 md:col-span-5 ${reverse ? 'md:col-start-8 md:order-2' : ''}`}>
          <div className="sticky top-28">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-sans font-extrabold text-[4.5rem] leading-none tracking-[-0.04em]" style={{ color: 'var(--color-ink-faint)' }}>{s.n}</span>
              <span className="mono">{s.eyebrow}</span>
            </div>
            <Reveal>
              <h2 className="font-sans font-extrabold leading-[1.02] tracking-[-0.03em] text-[clamp(2rem,1.2rem+2.5vw,3.6rem)]" style={{ color: 'var(--color-ink)' }}>
                {s.title}
              </h2>
            </Reveal>
          </div>
        </div>

        <div className={`col-span-12 md:col-span-6 ${reverse ? 'md:col-start-1 md:order-1' : 'md:col-start-7'}`}>
          <Reveal>
            <p className="leading-relaxed mb-10" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-ink-2)' }}>{s.blurb}</p>

            <div className="hairline-b pb-5 mb-5 flex items-baseline justify-between">
              <span className="mono">Stack</span>
              <span className="mono">/ {s.stack.length.toString().padStart(2, '0')}</span>
            </div>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-6 mb-12 list-none p-0">
              {s.stack.map((t) => (
                <li key={t} className="font-sans font-semibold text-lg tracking-tight" style={{ color: 'var(--color-ink)' }}>
                  {t}
                </li>
              ))}
            </ul>

            <div className="hairline-b pb-5 mb-5 flex items-baseline justify-between">
              <span className="mono">Capabilities</span>
              <span className="mono">/ {s.features.length.toString().padStart(2, '0')}</span>
            </div>
            <ul className="grid gap-3 list-none p-0 mb-10">
              {s.features.map((f) => (
                <li key={f} className="flex items-baseline gap-3" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-ink)' }}>
                  <span className="mono mt-1">+</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact" className="btn btn-primary">Discuss a project</Link>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
