import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";
import { ProjectsAuroraBackground } from "../components/ProjectsAuroraBackground";

export const Gallery = () => (
  <div className="min-h-screen relative bg-background text-foreground overflow-x-hidden">
    <ThemeToggle />
    <ProjectsAuroraBackground />
    <Navbar />
    <main className="relative z-10">
      <section className="pt-32 pb-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-card/90 border border-border/70 rounded-2xl p-8 md:p-12 shadow-lg text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Gallery
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Visual Archive</h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl">
              A dedicated space for selected photos and visual moments. Content coming soon.
            </p>
          </div>
        </div>
      </section>
    </main>
    <div className="relative z-10">
      <Footer />
    </div>
  </div>
);

export default Gallery;
