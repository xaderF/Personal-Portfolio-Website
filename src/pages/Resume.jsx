import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { Footer } from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";

export const Resume = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <ThemeToggle />
    <StarBackground />
    <Navbar />
    <main>
      <section className="py-24 px-4 relative bg-secondary/30 flex flex-col items-center justify-center">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary">Resume</span>
          </h2>
          <img
            src="/resume.png"
            alt="Resume"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg border border-primary"
            style={{ background: "white" }}
          />
          <div className="flex justify-center mt-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition duration-300"
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Resume;
