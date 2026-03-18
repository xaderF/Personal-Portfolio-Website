import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";
import { HomeParticlesBackground } from "../components/HomeParticlesBackground";
import { SkillsSection } from "../components/SkillsSection";

export const Skills = () => (
  <div className="min-h-screen relative bg-background text-foreground overflow-x-hidden flex flex-col">
    <ThemeToggle />
    <HomeParticlesBackground />
    <Navbar />
    <main className="relative z-10 flex-1">
      <SkillsSection />
    </main>
    <div className="relative z-10">
      <Footer />
    </div>
  </div>
);

export default Skills;
