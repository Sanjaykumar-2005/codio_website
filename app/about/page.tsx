import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../components/Reveal';
import StatCounter from '../components/StatCounter';

export const metadata: Metadata = {
  title: 'Studio — Engineers, designers, strategists',
  description:
    'Codio is an eight-person engineering studio. Senior, end-to-end, deliberately small.',
};

const VALUES = [
  {
    n: '01',
    title: 'Ship over polish',
    body: 'Real users teach more than reviews. We get a credible v1 in front of them quickly, then refine on signal — not in a vacuum.',
  },
  {
    n: '02',
    title: 'Maintainability is a feature',
    body: 'Anyone can write code that works today. We write code your team can change six months from now without flinching.',
  },
  {
    n: '03',
    title: 'Senior, end-to-end',
    body: 'The engineer who scopes your project is the one who builds it. No junior handoffs, no telephone game.',
  },
  {
    n: '04',
    title: 'Transparency by default',
    body: 'You see our Linear board, our commits, our deploys. If something is slipping you hear it from us first.',
  },
];

const TEAM = [
  { initials: 'SR', name: 'Sara Reyes', role: 'Founder · Engineering', bio: 'Backend & cloud architecture. Previously staff engineer at two Series-B SaaS companies.', tag: 'AWS · Postgres · Go' },
  { initials: 'JM', name: 'Jamal Martin', role: 'Founder · Design', bio: 'Product design & UX systems. Twelve years across consumer and B2B.', tag: 'Figma · Design Systems' },
  { initials: 'PK', name: 'Priya Kapoor', role: 'Lead · Mobile', bio: 'React Native & Swift specialist. Shipped fourteen apps to the App Store.', tag: 'RN · Swift · Kotlin' },
  { initials: 'TO', name: 'Tom Olsen', role: 'Lead · Cloud / DevOps', bio: 'AWS Solutions Architect Pro. Loves shaving milliseconds off cold starts.', tag: 'AWS · Terraform · K8s' },
  { initials: 'LF', name: 'Lena Fischer', role: 'Senior · Frontend', bio: 'React, TypeScript, accessibility. Writes interfaces people forget are made of code.', tag: 'React · A11y · Motion' },
  { initials: 'AN', name: 'Alex Nakamura', role: 'Senior · Backend', bio: 'Distributed systems, databases, performance work. Postgres optimizer whisperer.', tag: 'Distributed · Postgres' },
];

export default function AboutPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="frame pt-20 pb-24 max-md:pt-12 max-md:pb-14">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10 items-start">
          <div className="col-span-12 lg:col-span-8">
            <Reveal>
              <h1 className="font-sans font-extrabold leading-[1.02] tracking-[-0.035em] text-[clamp(2.6rem,1.6rem+5vw,5.2rem)]" style={{ color: 'var(--color-ink)' }}>
                Eight <span className="u-word">people</span>. One inbox each. No middle layer.
              </h1>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pt-6">
            <Reveal delay={150}>
              <p className="text-[1.0625rem] md:text-[1.1875rem] leading-relaxed" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-ink-2)' }}>
                Codio began as a two-person studio in San Francisco — a backend engineer and a designer tired of well-funded ideas dying in long discovery phases. Today we are eight, deliberately small, and still hands-on.
              </p>
              <p className="mt-5 leading-relaxed" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-ink-2)' }}>
                Every project gets senior attention because there is no one for it to roll downhill to.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ NUMBERS STRIP ============ */}
      <section className="bg-paper-2 hairline hairline-b py-16 max-md:py-10">
        <div className="frame grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          <Num n="01" v={<StatCounter target={8} />} label="People on the team" />
          <Num n="02" v={<StatCounter target={9} suffix=" yrs" />} label="Average tenure in role" />
          <Num n="03" v={<StatCounter target={124} />} label="Projects shipped" />
          <Num n="04" v={<StatCounter target={6} />} label="Industries served" />
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section id="values" className="frame py-24 max-md:py-16">
        <div className="mb-10">
          <h2 className="font-sans font-bold text-[clamp(1.6rem,1.2rem+1vw,2.25rem)] tracking-[-0.022em]" style={{ color: 'var(--color-ink)' }}>
            What we believe
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {VALUES.map((v) => (
            <Reveal key={v.n} className="col-span-12 md:col-span-6">
              <article className="release-card">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="mono">{v.n}</span>
                </div>
                <h3 className="release-title">{v.title}</h3>
                <p className="release-body">{v.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ TEAM ============ */}
      <section id="team" className="frame py-24 max-md:py-16">
        <div className="mb-10 flex items-end justify-between hairline-b pb-4">
          <h2 className="font-sans font-bold text-[clamp(1.6rem,1.2rem+1vw,2.25rem)] tracking-[-0.022em]" style={{ color: 'var(--color-ink)' }}>
            The team
          </h2>
          <span className="mono">People you actually work with</span>
        </div>

        <div className="grid grid-cols-12 gap-x-8 gap-y-2">
          {TEAM.map((p) => (
            <Reveal key={p.name} className="col-span-12 md:col-span-6">
              <article className="hairline-b py-8 grid grid-cols-[56px_1fr] sm:grid-cols-[72px_1fr_auto] gap-x-4 gap-y-2 sm:gap-x-6 items-baseline">
                <div className="font-sans font-extrabold text-[2.4rem] sm:text-[3rem] leading-none tracking-[-0.04em]" style={{ color: 'var(--color-ink-faint)' }}>
                  {p.initials}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xl leading-tight tracking-[-0.018em]" style={{ color: 'var(--color-ink)' }}>{p.name}</h4>
                  <div className="mono mt-1">{p.role}</div>
                  <p className="mt-3 max-w-[42ch] leading-relaxed" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-ink-2)' }}>{p.bio}</p>
                </div>
                <div className="mono sm:text-right col-start-2 sm:col-start-3 -mt-1 sm:mt-0">{p.tag}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="frame pb-24 max-md:pb-16">
        <Reveal>
          <div className="feature-panel cta-panel">
            <div className="feature-panel-inner">
              <div>
                <h2 className="font-sans font-extrabold leading-[1.02] tracking-[-0.03em]" style={{ fontSize: 'clamp(2.4rem, 1.4rem + 3.5vw, 4.4rem)', color: 'var(--color-paper)' }}>
                  Bring us in <span style={{ color: 'var(--color-signal-soft)' }}>early</span>. Or late. We’ve seen both.
                </h2>
                <p className="feature-sub">
                  Whether you are at the napkin-sketch stage or three sprints from launch, we can help. Most engagements start with a 30-minute call.
                </p>
              </div>
              <div className="md:text-right flex md:justify-end items-start md:items-center">
                <Link href="/contact" className="btn btn-light">Get in touch</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function Num({ n, v, label }: { n: string; v: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="mono">{n}</span>
      <span className="stat-num text-[clamp(2.6rem,1.6rem+3vw,4.5rem)] tabular-nums">{v}</span>
      <span className="mono">{label}</span>
    </div>
  );
}
