import { ProjectsSection } from "../components/ProjectsSection";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { Footer } from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";

export const Projects = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <ThemeToggle />
    <StarBackground />
    <Navbar />
    <main>
      <ProjectsSection />
    </main>
    <Footer />
  </div>
);

export default Projects;
