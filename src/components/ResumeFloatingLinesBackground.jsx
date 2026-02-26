import { useEffect, useMemo, useState } from "react";
import FloatingLines from "./FloatingLines";
import "./FloatingLines.css";

export const ResumeFloatingLinesBackground = () => {
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

  const themeConfig = useMemo(
    () =>
      isDark
        ? {
            linesGradient: ["#1e3a8a", "#4f46e5", "#7c3aed", "#2a1652"],
            mixBlendMode: "screen",
          }
        : {
            linesGradient: ["#1d4ed8", "#60a5fa", "#8b5cf6", "#5b21b6"],
            mixBlendMode: "screen",
          },
    [isDark]
  );

  return (
    <div className={`resume-floating-lines-bg ${isDark ? "is-dark" : "is-light"}`} aria-hidden="true">
      <FloatingLines
        className="resume-floating-lines-layer"
        linesGradient={themeConfig.linesGradient}
        enabledWaves={["top", "middle", "bottom"]}
        lineCount={[5, 7, 5]}
        lineDistance={[5, 4.2, 5]}
        bendRadius={4.8}
        bendStrength={-0.42}
        interactive
        parallax
        mouseDamping={0.045}
        parallaxStrength={0.14}
        animationSpeed={0.9}
        mixBlendMode={themeConfig.mixBlendMode}
      />
    </div>
  );
};
