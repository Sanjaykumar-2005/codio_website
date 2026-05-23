import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../components/Reveal';
import PortfolioGrid from '../components/PortfolioGrid';

export const metadata: Metadata = {
  title: 'Selected work — Archive 2024 — 2026',
  description: 'A selection of recent iMax engagements across web, mobile and cloud.',
};

export default function PortfolioPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="frame pt-20 pb-20 max-md:pt-12 max-md:pb-12">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10 items-start">
          <div className="col-span-12 lg:col-span-8">
            <Reveal>
              <h1 className="font-sans font-extrabold leading-[1.02] tracking-[-0.035em] text-[clamp(2.6rem,1.6rem+5vw,5.2rem)]" style={{ color: 'var(--color-ink)' }}>
                <span className="u-word">Outcomes</span>, not outputs.
              </h1>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pt-6">
            <Reveal delay={150}>
              <p className="text-[1.0625rem] md:text-[1.1875rem] leading-relaxed" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-ink-2)' }}>
                A snapshot of recent engagements — what we built, who we built it with, and what it changed for the business. Filter by discipline.
              </p>
              <div className="mt-4 mono">24 projects · 2017 — 2026</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ GRID ============ */}
      <section className="pb-24">
        <PortfolioGrid />
      </section>

      {/* ============ CTA ============ */}
      <section className="frame pb-24 max-md:pb-16">
        <Reveal>
          <div className="feature-panel">
            <div className="feature-panel-inner" style={{ minHeight: '320px' }}>
              <div>
                <h2 className="font-sans font-extrabold leading-[1.02] tracking-[-0.03em]" style={{ fontSize: 'clamp(2.4rem, 1.4rem + 3.5vw, 4.4rem)', color: 'var(--color-paper)' }}>
                  Want to see your name <span style={{ color: 'var(--color-signal-soft)' }}>in the archive?</span>
                </h2>
                <p className="feature-sub">Most of these started with one email. Yours can too.</p>
              </div>
              <div className="md:text-right flex md:justify-end items-start md:items-center">
                <Link href="/contact" className="btn btn-light">Start a project</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
