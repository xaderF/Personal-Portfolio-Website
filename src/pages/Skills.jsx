import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";
import { SkillsSection } from "../components/SkillsSection";
import Threads from "../components/Threads";

export const Skills = () => (
  <div className="min-h-screen relative bg-background text-foreground overflow-x-hidden flex flex-col">
    <ThemeToggle />
    <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <Threads amplitude={1} distance={0} enableMouseInteraction />
    </div>
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
