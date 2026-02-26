import { useEffect, useState } from "react";
import Aurora from "./Aurora";
import "./Aurora.css";

export const ProjectsAuroraBackground = () => {
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

  const colorStops = isDark
    ? ["#2a1652", "#7c3aed", "#1e3a8a"]
    : ["#5b21b6", "#a78bfa", "#3b82f6"];

  return (
    <div className={`projects-aurora-bg ${isDark ? "is-dark" : "is-light"}`} aria-hidden="true">
      <div className="projects-aurora-layer">
        <Aurora colorStops={colorStops} blend={0.5} amplitude={1.0} speed={1} />
      </div>
      <div className="projects-aurora-vignette" />
    </div>
  );
};
