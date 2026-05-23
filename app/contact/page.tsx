import type { Metadata } from 'next';
import Reveal from '../components/Reveal';
import ContactForm from '../components/ContactForm';
import { IconMail, IconPin, IconClock } from '../components/Icon';

export const metadata: Metadata = {
  title: 'Contact — Start a project',
  description:
    "Tell us about your project. One business day, no sales loop. We'll come back with concrete next steps.",
};

const LINES = [
  { icon: <IconMail size={16} />, label: 'Mail', value: 'hello@codio.studio', href: 'mailto:hello@codio.studio' },
  { icon: <IconPin size={16} />, label: 'Studio', value: 'San Francisco · Remote-first' },
  { icon: <IconClock size={16} />, label: 'Hours', value: 'Mon — Fri · 09 — 18 PT' },
];

const FAQS = [
  {
    q: 'How fast can you start?',
    a: 'Median kickoff is eleven days from first call. Two slots open for August 2026. Urgent fixes for existing partners always jump the queue.',
  },
  {
    q: 'What does an engagement cost?',
    a: 'A Sprint is fixed at $18k for two weeks. A Build runs $80k — $260k depending on scope. An Embed is a day-rate with a monthly cap.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes — happy to sign yours, or we have a one-page mutual NDA we can send in two minutes.',
  },
  {
    q: 'Will my code be readable after you leave?',
    a: 'That is the point. Every project ends with an architecture brief, a README that actually documents the system, and a one-hour walk-through with your team.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="frame pt-20 pb-20 max-md:pt-12 max-md:pb-12">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10 items-start">
          <div className="col-span-12 lg:col-span-8">
            <Reveal>
              <h1 className="font-sans font-extrabold leading-[1.02] tracking-[-0.035em] text-[clamp(2.6rem,1.6rem+5vw,5.2rem)]" style={{ color: 'var(--color-ink)' }}>
                Tell us what you&apos;re <span className="u-word">building</span>.
              </h1>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pt-6">
            <Reveal delay={150}>
              <p className="text-[1.0625rem] md:text-[1.1875rem] leading-relaxed" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-ink-2)' }}>
                One business day, no sales loop. Tell us where you are — first call, mid-build, or trying to rescue something. We&apos;ll come back with concrete next steps.
              </p>
              <div className="mt-4"><span className="live">Open · reply &lt; 24h</span></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FORM + LINES ============ */}
      <section className="frame pb-24">
        <div className="grid grid-cols-12 gap-x-8 gap-y-16 items-start">
          {/* Left column — lines */}
          <aside className="col-span-12 md:col-span-4">
            <Reveal>
              <div className="hairline-b pb-3 mb-8">
                <span className="mono">Direct lines</span>
              </div>

              <ul className="list-none p-0 space-y-6">
                {LINES.map((l) => (
                  <li key={l.label}>
                    <div className="flex items-baseline gap-3 mono mb-1">
                      <span aria-hidden="true">{l.icon}</span>
                      <span>{l.label}</span>
                    </div>
                    {l.href ? (
                      <a href={l.href} className="font-sans font-semibold text-lg tracking-tight u-link" style={{ color: 'var(--color-ink)' }}>
                        {l.value}
                      </a>
                    ) : (
                      <div className="font-sans font-semibold text-lg tracking-tight" style={{ color: 'var(--color-ink)' }}>{l.value}</div>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-12 hairline pt-6 mono leading-relaxed">
                Form goes straight to a founder. Avg. reply 4h 12m during business hours.
              </div>
            </Reveal>
          </aside>

          {/* Right column — form */}
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <Reveal>
              <div className="hairline-b pb-3 mb-8 flex items-baseline justify-between">
                <span className="mono">Project brief</span>
                <span className="mono">4 fields</span>
              </div>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="frame py-24 max-md:py-16">
        <div className="mb-10 hairline-b pb-4">
          <h2 className="font-sans font-bold text-[clamp(1.6rem,1.2rem+1vw,2.25rem)] tracking-[-0.022em]" style={{ color: 'var(--color-ink)' }}>
            Frequently asked
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {FAQS.map((f) => (
            <Reveal key={f.q} className="col-span-12 md:col-span-6">
              <details className="hairline-b py-6 group">
                <summary className="flex items-baseline justify-between cursor-pointer list-none">
                  <h3 className="font-sans font-bold text-xl leading-tight tracking-[-0.018em]" style={{ color: 'var(--color-ink)' }}>
                    {f.q}
                  </h3>
                  <span className="mono group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <p className="leading-relaxed mt-4 max-w-[62ch]" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-ink-2)' }}>{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
