'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Work' },
  { href: '/about', label: 'Studio' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background] duration-300 ${
        scrolled ? 'bg-[var(--color-paper)]' : 'bg-[var(--color-paper)]'
      }`}
    >
      <div className="frame flex items-center justify-between py-5">
        {/* Wordmark */}
        <Link
          href="/"
          aria-label="Codio — home"
          className="inline-flex items-baseline gap-0 font-sans font-extrabold text-[1.35rem] tracking-[-0.04em] uppercase"
          style={{ color: 'var(--color-ink)' }}
        >
          <span>CODIO</span>
          <span aria-hidden="true" style={{ color: 'var(--color-signal)' }}>\</span>
          <span>STUDIO</span>
        </Link>

        {/* Desktop nav */}
        <nav className="max-md:hidden">
          <ul className="flex items-center gap-9 list-none p-0">
            {LINKS.map((l) => {
              const active = pathname.startsWith(l.href);
              return (
                <li key={l.href}>
                  <Link href={l.href} className={`nav-link ${active ? 'is-active' : ''}`}>
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA pill */}
        <div className="flex items-center gap-3 max-md:hidden">
          <Link href="/contact" className="btn btn-primary">
            Start a project
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="hidden max-md:inline-grid place-items-center w-11 h-11 rounded-full border border-[var(--color-border)] bg-[var(--color-paper-2)]"
        >
          <span
            className={`block w-5 h-px bg-[var(--color-ink)] transition-transform duration-300 ${open ? 'translate-y-[3px] rotate-45' : '-translate-y-1'}`}
          />
          <span
            className={`block w-5 h-px bg-[var(--color-ink)] mt-1 transition-transform duration-300 ${open ? '-translate-y-[3px] -rotate-45' : 'translate-y-1'}`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`md:hidden fixed inset-0 top-[72px] bg-[var(--color-paper)] z-30 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <div className="frame pt-12 pb-16 h-full flex flex-col">
          <ul className="list-none p-0 space-y-1 flex-1">
            {LINKS.map((l) => {
              const active = pathname.startsWith(l.href);
              return (
                <li key={l.href} className="hairline-b">
                  <Link
                    href={l.href}
                    className="flex items-baseline justify-between py-5 group"
                  >
                    <span
                      className="font-sans font-bold text-3xl tracking-tight"
                      style={{ color: active ? 'var(--color-ink)' : 'var(--color-ink-2)' }}
                    >
                      {l.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="pt-8 mt-auto">
            <Link href="/contact" className="btn btn-primary w-full justify-center">
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
