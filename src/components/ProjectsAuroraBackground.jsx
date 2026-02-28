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
    ? ["#10b3ff", "#3fffd2", "#7dffae"]
    : ["#0ea5b7", "#34d399", "#38bdf8"];

  return (
    <div className={`projects-aurora-bg ${isDark ? "is-dark" : "is-light"}`} aria-hidden="true">
      <div className="projects-aurora-layer">
        <Aurora colorStops={colorStops} blend={0.5} amplitude={1.0} speed={1} />
      </div>
      <div className="projects-aurora-vignette" />
    </div>
  );
};
