import { lazy, Suspense, useEffect, useState } from 'react';

/**
 * Defers the (heavy) Three.js hero scene until the browser is idle, so the
 * ~900 KB WebGL bundle is fetched *after* first paint instead of competing
 * with it. The hero's gradient backdrop covers the gap, and the canvas fades
 * in via CSS once mounted.
 */
const HeroScene = lazy(() => import('./HeroScene'));

export default function HeroSceneLazy() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Skip the 3D entirely for users who asked for reduced motion.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const start = () => setReady(true);

    // Safari only shipped requestIdleCallback recently, so fall back to a timer.
    const ric = window.requestIdleCallback as
      | ((cb: () => void, opts?: { timeout: number }) => number)
      | undefined;

    if (ric) {
      const idleId = ric(start, { timeout: 1500 });
      return () => window.cancelIdleCallback?.(idleId);
    }

    const timeoutId = window.setTimeout(start, 400);
    return () => window.clearTimeout(timeoutId);
  }, []);

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <HeroScene />
    </Suspense>
  );
}
