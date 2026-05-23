'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  /** total scroll distance over which the expansion happens, in viewport heights */
  travel?: number;
};

/**
 * Wraps a "card" so it grows from contained → full-bleed as the user scrolls.
 * The wrapper reserves `travel * 100vh` of scroll height so the card can stay
 * pinned (position: sticky) while the page scrolls past it. Progress 0..1
 * is exposed as the CSS variable `--p` on the inner panel, plus an
 * `is-pinned` class once expansion completes.
 */
export default function ScrollExpand({ children, travel = 1.4 }: Props) {
  const outer = useRef<HTMLDivElement | null>(null);
  const inner = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = outer.current;
    const panel = inner.current;
    if (!wrap || !panel) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const compute = () => {
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      // Begin when the wrapper top hits the viewport top, end after travel*vh
      const total = (travel) * vh;
      const passed = Math.min(total, Math.max(0, -rect.top));
      const p = total > 0 ? passed / total : 0;
      panel.style.setProperty('--p', String(p));
      panel.classList.toggle('is-pinned', p >= 0.995);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        compute();
        raf = 0;
      });
    };
    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [travel]);

  return (
    <div
      ref={outer}
      className="scroll-expand"
      style={{ height: `calc(${travel + 1} * 100vh)` }}
    >
      <div ref={inner} className="scroll-expand-pin" style={{ ['--p' as never]: 0 }}>
        {children}
      </div>
    </div>
  );
}
