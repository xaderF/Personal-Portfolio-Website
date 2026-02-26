import { ThemeToggle } from "../components/ThemeToggle";
import { HomeParticlesBackground } from "@/components/HomeParticlesBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
        <div className="min-h-screen relative bg-background text-foreground overflow-x-hidden home-text-color-lock">
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Background Effects */}
            <HomeParticlesBackground />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="relative z-10">
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
            </main>

            {/* Footer */}
            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    );
};
