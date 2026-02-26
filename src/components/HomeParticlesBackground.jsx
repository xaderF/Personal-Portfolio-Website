import { useEffect, useMemo, useState } from "react";
import Particles from "./Particles";

export const HomeParticlesBackground = () => {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const updateTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const config = useMemo(
    () =>
      isDark
        ? {
            particleColors: ["#2a1652", "#7c3aed", "#4f46e5", "#1e3a8a"],
            particleCount: 240,
            particleSpread: 10,
            speed: 0.1,
            particleBaseSize: 100,
            particleHoverFactor: 1,
          }
        : {
            particleColors: ["#5b21b6", "#8b5cf6", "#60a5fa", "#1d4ed8"],
            particleCount: 220,
            particleSpread: 10,
            speed: 0.1,
            particleBaseSize: 100,
            particleHoverFactor: 1,
          },
    [isDark]
  );

  return (
    <div className={`home-particles-bg ${isDark ? "is-dark" : "is-light"}`} aria-hidden="true">
      <Particles
        className="home-particles-layer"
        particleColors={config.particleColors}
        particleCount={config.particleCount}
        particleSpread={config.particleSpread}
        speed={config.speed}
        particleBaseSize={config.particleBaseSize}
        moveParticlesOnHover
        particleHoverFactor={config.particleHoverFactor}
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={1}
      />
    </div>
  );
};
