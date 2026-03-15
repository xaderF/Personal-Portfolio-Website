import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { ProjectsAuroraBackground } from "../components/ProjectsAuroraBackground";
import { Footer } from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";
import { AllProjectsSection } from "../components/AllProjectsSection";

export const Projects = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const id = decodeURIComponent(location.hash.replace("#", ""));
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen relative bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <ProjectsAuroraBackground />
      <Navbar />
      <main className="relative z-10">
        <AllProjectsSection />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
