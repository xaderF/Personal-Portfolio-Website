import { Github, Linkedin, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Reach out directly through email or connect with me on LinkedIn and GitHub.
        </p>

        <div className="rounded-2xl overflow-hidden border border-border/70 shadow-lg mb-10 bg-card">
          <div className="relative">
            <img
              src="/Contact_photo.png"
              alt="Ryan Yu contact banner"
              className="w-full h-72 md:h-96 lg:h-[28rem] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
            <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8 text-left">
              <p className="text-sm uppercase tracking-[0.18em] text-primary/90 mb-2">
                Open to Opportunities
              </p>
              <h3 className="text-white text-2xl md:text-4xl font-bold">
                Let&apos;s Build Something Great
              </h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card p-6 rounded-lg border border-border/70 text-left">
            <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-3">Email</h3>
            <div className="flex flex-col gap-1">
              <a
                href="mailto:ryanyu365@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors break-words"
              >
                <span className="font-semibold">Personal:</span> ryanyu365@gmail.com
              </a>
              <a
                href="mailto:ryanrui.yu@mail.utoronto.ca"
                className="text-muted-foreground hover:text-primary transition-colors break-words"
              >
                <span className="font-semibold">School:</span> ryanrui.yu@mail.utoronto.ca
              </a>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border/70 text-left">
            <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
              <Linkedin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-3">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/ryan-yu-383721273/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors break-words"
            >
              linkedin.com/in/ryan-yu-383721273/
            </a>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border/70 text-left">
            <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
              <Github className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-3">GitHub</h3>
            <a
              href="https://github.com/xaderF"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors break-words"
            >
              github.com/xaderF
            </a>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border/70">
          <h3 className="font-medium mb-4 text-center">Connect With Me</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/ryan-yu-383721273/"
              target="_blank"
              rel="noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/xaderF"
              target="_blank"
              rel="noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
