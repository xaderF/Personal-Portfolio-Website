import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";
import { ResumeFloatingLinesBackground } from "../components/ResumeFloatingLinesBackground";

export const Resume = () => (
  <div className="min-h-screen relative bg-background text-foreground overflow-x-hidden">
    <ThemeToggle />
    <ResumeFloatingLinesBackground />
    <Navbar />
    <main className="relative z-10">
      <section className="py-24 px-4 relative flex flex-col items-center justify-center">
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
              download="Ryan-Yu-Resume.pdf"
              className="cosmic-button bg-transparent border border-primary text-primary hover:bg-primary/10"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </main>
    <div className="relative z-10">
      <Footer />
    </div>
  </div>
);

export default Resume;
