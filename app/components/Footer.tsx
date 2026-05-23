import Link from 'next/link';

type Item = { href: string; label: string; external?: boolean };

const SERVICES: Item[] = [
  { href: '/services#web', label: 'Web Platforms' },
  { href: '/services#mobile', label: 'Mobile Applications' },
  { href: '/services#cloud', label: 'Cloud & Infrastructure' },
  { href: '/services#design', label: 'Product Design' },
  { href: '/services#discovery', label: 'Discovery & Strategy' },
  { href: '/services#audit', label: 'Code & Cloud Audits' },
];

const STUDIO: Item[] = [
  { href: '/about', label: 'Studio' },
  { href: '/portfolio', label: 'Selected work' },
  { href: '/about#team', label: 'Team' },
  { href: '/about#values', label: 'How we work' },
  { href: '/contact', label: 'Contact' },
];

const RESOURCES: Item[] = [
  { href: '/portfolio', label: 'Case studies' },
  { href: '/services', label: 'Engagement models' },
  { href: 'mailto:hello@imax.studio', label: 'hello@imax.studio', external: true },
  { href: '/about', label: 'Hiring' },
  { href: '/about', label: 'Press kit' },
];

const NETWORK: Item[] = [
  { href: 'https://github.com', label: 'GitHub', external: true },
  { href: 'https://www.linkedin.com', label: 'LinkedIn', external: true },
  { href: 'https://read.cv', label: 'Read.cv', external: true },
  { href: 'https://x.com', label: 'X / Twitter', external: true },
];

export default function Footer() {
  return (
    <footer className="footer-dark mt-32">
      <div className="frame pt-20 pb-12">
        {/* Top — wordmark + tagline */}
        <div className="grid grid-cols-12 gap-8 pb-16 hairline-b border-color-[rgba(244,243,238,0.1)]" style={{ borderColor: 'rgba(244,243,238,0.12)' }}>
          <div className="col-span-12 md:col-span-5">
            <Link
              href="/"
              aria-label="iMax — home"
              className="inline-flex items-baseline gap-0 font-sans font-extrabold text-[1.35rem] tracking-[-0.04em] uppercase"
              style={{ color: 'var(--color-paper)' }}
            >
              <span>IMAX</span>
              <span aria-hidden="true" style={{ color: 'var(--color-signal)' }}>\</span>
              <span>STUDIO</span>
            </Link>
            <p className="mt-6 max-w-[36ch] text-[1.0625rem]" style={{ color: 'var(--color-paper-mute)', fontFamily: 'var(--font-serif)' }}>
              A small senior engineering studio. We design, build and ship durable software for ambitious teams — web, mobile, cloud.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7 md:text-right flex md:justify-end items-start">
            <Link href="/contact" className="btn btn-light">
              Start a project
            </Link>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-12 gap-8 pt-16">
          <FCol title="Services" items={SERVICES} />
          <FCol title="Studio" items={STUDIO} />
          <FCol title="Resources" items={RESOURCES} />
          <FCol title="Elsewhere" items={NETWORK} />
        </div>

        {/* Bottom strip */}
        <div
          className="mt-20 pt-6 flex flex-wrap items-center justify-between gap-3 mono"
          style={{ borderTop: '1px solid rgba(244,243,238,0.12)', color: 'var(--color-paper-faint)' }}
        >
          <span>© {new Date().getFullYear()} iMax Studio</span>
          <span>San Francisco · Remote-first</span>
          <span>v.2026.05</span>
        </div>
      </div>
    </footer>
  );
}

function FCol({ title, items }: { title: string; items: Item[] }) {
  return (
    <div className="col-span-6 md:col-span-3">
      <h4 className="col-title">{title}</h4>
      <ul className="list-none p-0 space-y-3">
        {items.map((i) => (
          <li key={i.href + i.label}>
            {i.external ? (
              <a href={i.href} target="_blank" rel="noreferrer">
                {i.label}
              </a>
            ) : (
              <Link href={i.href}>{i.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
