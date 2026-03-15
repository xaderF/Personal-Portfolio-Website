import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";
import Orb from "../components/Orb";
import GradientText from "../components/GradientText";
import Timeline3D from "../components/Timeline3D";

const placeholderTimelineEvents = [
  {
    id: "exp-1",
    date: "Summer 2026",
    title: "Internship (Placeholder)",
    description:
      "This section will be updated with internship role details, responsibilities, and impact once finalized.",
    category: "Internship",
    type: "internship",
    postSlug: "internship-placeholder",
    color: "#4f46e5",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format"
  },
  {
    id: "exp-2",
    date: "2025 - 2026",
    title: "Leadership (Placeholder)",
    description:
      "Leadership and team initiatives will be documented here, including planning, collaboration, and outcomes.",
    category: "Leadership",
    type: "achievement",
    postSlug: "leadership-placeholder",
    color: "#7c3aed",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format"
  },
  {
    id: "exp-3",
    date: "2025",
    title: "Hackathon Milestones (Placeholder)",
    description:
      "Hackathon projects and technical wins will be listed here with concise project summaries and links.",
    category: "Hackathon",
    type: "hackathon",
    projectSlug: "utransit",
    color: "#0ea5e9",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format"
  },
  {
    id: "exp-4",
    date: "2026",
    title: "Large Product Shipment (Placeholder)",
    description:
      "Major shipped products and launch milestones will be documented here with build goals, release notes, and outcomes.",
    category: "Project",
    type: "product-shipment",
    projectSlug: "instareply",
    color: "#10b981",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format"
  }
];

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
            <Timeline3D events={placeholderTimelineEvents} />
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
