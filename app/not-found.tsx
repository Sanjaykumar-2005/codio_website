import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="frame min-h-[80vh] grid place-items-center pt-16 pb-24">
      <div className="grid grid-cols-12 gap-x-8 gap-y-10 w-full items-end">
        <div className="col-span-12 md:col-span-7">
          <span className="mono">404 — not found</span>
          <h1
            className="font-sans font-extrabold leading-[0.95] tracking-[-0.05em] text-[clamp(4rem,2rem+9vw,10rem)] mt-6"
            style={{ color: 'var(--color-ink)' }}
          >
            404
          </h1>
          <p
            className="font-serif-display italic mt-4"
            style={{ fontSize: 'clamp(1.8rem, 1.2rem + 2vw, 3rem)', color: 'var(--color-signal-deep)' }}
          >
            This page slipped its mooring.
          </p>
        </div>

        <div className="col-span-12 md:col-span-4 md:col-start-9 pb-8">
          <p className="leading-relaxed mb-8" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-ink-2)' }}>
            The URL you followed doesn&apos;t exist — or doesn&apos;t exist yet. Try one of these instead.
          </p>
          <ul className="list-none p-0 space-y-1 mono">
            <li className="hairline-b py-3"><Link href="/" className="u-link" style={{ color: 'var(--color-ink)' }}>01 — Index</Link></li>
            <li className="hairline-b py-3"><Link href="/services" className="u-link" style={{ color: 'var(--color-ink)' }}>02 — Services</Link></li>
            <li className="hairline-b py-3"><Link href="/portfolio" className="u-link" style={{ color: 'var(--color-ink)' }}>03 — Work</Link></li>
            <li className="hairline-b py-3"><Link href="/about" className="u-link" style={{ color: 'var(--color-ink)' }}>04 — Studio</Link></li>
            <li className="hairline-b py-3"><Link href="/contact" className="u-link" style={{ color: 'var(--color-ink)' }}>05 — Contact</Link></li>
          </ul>
          <div className="mt-8">
            <Link href="/" className="btn btn-primary">Return home</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
