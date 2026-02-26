import { ContactSection } from "../components/ContactSection";
import { Navbar } from "../components/Navbar";
import { ContactPrismBackground } from "../components/ContactPrismBackground";
import { Footer } from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";

export const Contact = () => (
  <div className="min-h-screen relative bg-background text-foreground overflow-x-hidden">
    <ThemeToggle />
    <ContactPrismBackground />
    <Navbar />
    <main className="relative z-10">
      <ContactSection />
    </main>
    <div className="relative z-10">
      <Footer />
    </div>
  </div>
);

export default Contact;
