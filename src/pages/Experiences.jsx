import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";
import Orb from "../components/Orb";
import GradientText from "../components/GradientText";
import Timeline3D from "../components/Timeline3D";
import { experienceTimelinePlaceholders } from "../data/experienceTimelineTemplates";

export const Experiences = () => (
  <div className="min-h-screen relative bg-background text-foreground overflow-x-hidden flex flex-col">
    <ThemeToggle />
    <div className="fixed top-0 inset-x-0 h-[62vh] pointer-events-none z-0 overflow-hidden">
      <Orb
        hoverIntensity={2}
        rotateOnHover
        hue={0}
        forceHoverState={false}
        backgroundColor="#000000"
      />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />
    </div>
    <Navbar />
    <main className="relative z-10 flex-1">
      <section className="pt-32 pb-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-card/55 border border-border/55 rounded-2xl p-8 md:p-12 shadow-lg text-left">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Experiences
            </p>
            <h1 className="mb-4">
              <GradientText
                colors={["var(--aurora-stop-1)", "var(--aurora-stop-2)", "var(--aurora-stop-3)"]}
                animationSpeed={8}
                showBorder={false}
                className="text-3xl md:text-5xl font-bold leading-tight"
              >
                My Professional Journey
              </GradientText>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl">
              This page is under construction. All internships, leadership, hackathons,
              and other milestones will be added here.
            </p>
          </div>

          <div className="mt-14 relative left-1/2 -translate-x-1/2 w-[min(96vw,120rem)]">
            <Timeline3D events={experienceTimelinePlaceholders} />
          </div>
        </div>
      </section>
    </main>
    <div className="relative z-10">
      <Footer />
    </div>
  </div>
);

export default Experiences;
