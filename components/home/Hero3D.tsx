"use client";

import { useMemo } from "react";
import { Hero3DScene, Hero3DFallback } from "./Hero3DScene";
import { HeroContent } from "./HeroContent";
import { useParallax } from "./useParallax";

export function Hero3D() {
  const { mouse, scrollY, reducedMotion } = useParallax();

  const sceneProps = useMemo(() => ({ mouse, scrollY, reducedMotion }), [mouse, scrollY, reducedMotion]);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {reducedMotion ? (
        <Hero3DFallback />
      ) : (
        <Hero3DScene {...sceneProps} />
      )}
      <HeroContent />
    </section>
  );
}