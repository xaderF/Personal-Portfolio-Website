import { ContactSection } from "../components/ContactSection";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { Footer } from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";

export const Contact = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <ThemeToggle />
    <StarBackground />
    <Navbar />
    <main>
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Contact;
