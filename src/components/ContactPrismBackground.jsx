import { useEffect, useMemo, useState } from "react";
import Prism from "./Prism";
import "./Prism.css";

export const ContactPrismBackground = () => {
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

  const settings = useMemo(
    () =>
      isDark
        ? {
            timeScale: 0.4,
            height: 3.6,
            baseWidth: 5.6,
            scale: 3.55,
            hueShift: 4.82,
            colorFrequency: 0.66,
            noise: 0.01,
            glow: 0.74,
            bloom: 0.9,
            saturation: 0.72,
          }
        : {
            timeScale: 0.36,
            height: 3.4,
            baseWidth: 5.2,
            scale: 3.25,
            hueShift: 4.72,
            colorFrequency: 0.6,
            noise: 0.008,
            glow: 0.58,
            bloom: 0.72,
            saturation: 0.62,
          },
    [isDark]
  );

  return (
    <div className={`contact-prism-bg ${isDark ? "is-dark" : "is-light"}`} aria-hidden="true">
      <div className="contact-prism-layer">
        <Prism
          animationType="rotate"
          timeScale={settings.timeScale}
          height={settings.height}
          baseWidth={settings.baseWidth}
          scale={settings.scale}
          hueShift={settings.hueShift}
          colorFrequency={settings.colorFrequency}
          noise={settings.noise}
          glow={settings.glow}
          bloom={settings.bloom}
          saturation={settings.saturation}
          suspendWhenOffscreen
        />
      </div>
    </div>
  );
};
