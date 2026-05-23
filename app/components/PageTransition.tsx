'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type ReactNode } from 'react';

type Props = { children: ReactNode };

/**
 * Cross-fades between routes. Animates the *outgoing* tree out, then mounts
 * the new one and fades it in. Pure CSS, no dependencies.
 */
export default function PageTransition({ children }: Props) {
  const pathname = usePathname();
  const [display, setDisplay] = useState(children);
  const [stage, setStage] = useState<'in' | 'out'>('in');
  const last = useRef(pathname);
  const pending = useRef<ReactNode>(children);

  // When the route changes, kick the outgoing animation
  useEffect(() => {
    if (pathname === last.current) {
      pending.current = children;
      setDisplay(children);
      return;
    }
    pending.current = children;
    setStage('out');
    const t = setTimeout(() => {
      setDisplay(pending.current);
      last.current = pathname;
      // Scroll to top on route change so the new page reveals from the top
      window.scrollTo({ top: 0, behavior: 'auto' });
      // Next frame, flip to in
      requestAnimationFrame(() => setStage('in'));
    }, 240);
    return () => clearTimeout(t);
  }, [pathname, children]);

  return (
    <div className={`page-transition page-${stage}`}>
      {display}
    </div>
  );
}
