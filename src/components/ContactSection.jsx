import { useState } from "react";
import { ChevronLeft, ChevronRight, Github, Linkedin, Mail } from "lucide-react";

const personalPhotos = [
  {
    src: "/personal_photos/Contact_photo1.png",
    alt: "Ryan Yu personal photo 1"
  },
  {
    src: "/personal_photos/Contact_photo2.png",
    alt: "Ryan Yu personal photo 2"
  },
  {
    src: "/personal_photos/Contact_photo3.png",
    alt: "Ryan Yu personal photo 3"
  },
  {
    src: "/personal_photos/Contact_photo4.png",
    alt: "Ryan Yu personal photo 4"
  },
  {
    src: "/personal_photos/Contact_photo5.png",
    alt: "Ryan Yu personal photo 5"
  }
];

const getWrappedOffset = (index, activeIndex, total) => {
  let offset = index - activeIndex;
  const half = total / 2;

  if (offset > half) offset -= total;
  if (offset < -half) offset += total;
  return offset;
};

export const ContactSection = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [copiedType, setCopiedType] = useState("");
  const contactCardClass =
    "group relative w-full overflow-hidden rounded-xl border border-primary/25 bg-background/35 px-3 py-2 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(96,165,250,0.18)] cursor-pointer";

  const cyclePhoto = (delta) => {
    if (personalPhotos.length <= 1) return;
    setActivePhotoIndex((prev) => (prev + delta + personalPhotos.length) % personalPhotos.length);
  };

  const copyEmail = async (email, type) => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    setCopiedType(type);
    setTimeout(() => setCopiedType(""), 1600);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Reach out directly through email or connect with me on LinkedIn and GitHub.
        </p>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:items-start gap-2.5">
            <button
              type="button"
              onClick={() => setIsEmailModalOpen(true)}
              className={contactCardClass}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
              <div className="inline-flex items-center gap-2 font-semibold mb-1">
                <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-primary/15 text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                Email
              </div>
              <p className="text-xs md:text-[13px] leading-[1.45] text-primary/80">
                Click to email
              </p>
            </button>

            <a
              href="https://www.linkedin.com/in/ryan-yu-383721273/"
              target="_blank"
              rel="noreferrer"
              className={`${contactCardClass} block`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
              <div className="inline-flex items-center gap-2 font-semibold mb-1">
                <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-primary/15 text-primary">
                  <Linkedin className="h-4 w-4" />
                </span>
                LinkedIn
              </div>
              <p className="block mt-0.5 text-xs md:text-[13px] leading-[1.4] text-primary/80">
                Open LinkedIn
              </p>
            </a>

            <a
              href="https://github.com/xaderF"
              target="_blank"
              rel="noreferrer"
              className={`${contactCardClass} block`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
              <div className="inline-flex items-center gap-2 font-semibold mb-1">
                <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-primary/15 text-primary">
                  <Github className="h-4 w-4" />
                </span>
                GitHub
              </div>
              <p className="block mt-0.5 text-xs md:text-[13px] leading-[1.4] text-primary/80">
                Open GitHub
              </p>
            </a>
          </div>
        </div>

        {isEmailModalOpen ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <button
              type="button"
              onClick={() => setIsEmailModalOpen(false)}
              className="absolute inset-0 bg-black/65 backdrop-blur-sm"
              aria-label="Close email chooser"
            />

            <div
              className="relative w-full max-w-sm rounded-xl border border-primary/25 bg-background/40 backdrop-blur-md p-6 text-left shadow-[0_0_24px_rgba(96,165,250,0.2)]"
              role="dialog"
              aria-modal="true"
              aria-label="Choose email address"
            >
              <h3 className="text-xl font-semibold mb-2">Copy Email</h3>
              <p className="text-sm text-muted-foreground mb-5">
                Click an option to copy the address to your clipboard.
              </p>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => copyEmail("ryanyu365@gmail.com", "personal")}
                  className="w-full text-left block rounded-lg border border-primary/35 bg-background/45 px-4 py-3 hover:bg-primary/15 transition-colors"
                >
                  <span className="font-medium">Personal</span>
                  <span className="block text-sm text-muted-foreground">ryanyu365@gmail.com</span>
                  <span className="block text-xs text-primary mt-1">
                    {copiedType === "personal" ? "Copied to clipboard" : "Click to copy"}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => copyEmail("ryanrui.yu@mail.utoronto.ca", "school")}
                  className="w-full text-left block rounded-lg border border-primary/35 bg-background/45 px-4 py-3 hover:bg-primary/15 transition-colors"
                >
                  <span className="font-medium">School</span>
                  <span className="block text-sm text-muted-foreground">
                    ryanrui.yu@mail.utoronto.ca
                  </span>
                  <span className="block text-xs text-primary mt-1">
                    {copiedType === "school" ? "Copied to clipboard" : "Click to copy"}
                  </span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setIsEmailModalOpen(false)}
                className="mt-5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : null}

        <div className="mt-5">
          <div className="flex items-center justify-center gap-3 mb-0.5">
            <button
              type="button"
              onClick={() => cyclePhoto(-1)}
              className="p-2 rounded-full border border-border/70 hover:border-primary/70 text-foreground/80 hover:text-primary transition-colors disabled:opacity-40"
              aria-label="Previous photo"
              disabled={personalPhotos.length <= 1}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => cyclePhoto(1)}
              className="p-2 rounded-full border border-border/70 hover:border-primary/70 text-foreground/80 hover:text-primary transition-colors disabled:opacity-40"
              aria-label="Next photo"
              disabled={personalPhotos.length <= 1}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="relative h-[35rem] md:h-[46rem] [perspective:1700px] overflow-hidden">
            {personalPhotos.map((photo, index) => {
              const offset = getWrappedOffset(index, activePhotoIndex, personalPhotos.length);
              const absOffset = Math.abs(offset);
              const isSelected = offset === 0;

              if (absOffset > 2) return null;

              const translateX = offset * 330;
              const rotateY = offset * -24;
              const scale = isSelected ? 1 : absOffset === 1 ? 0.82 : 0.66;
              const opacity = isSelected ? 1 : absOffset === 1 ? 0.72 : 0.36;

              return (
                <button
                  key={`${photo.src}-carousel-large`}
                  type="button"
                  onClick={() => setActivePhotoIndex(index)}
                  className={`absolute left-1/2 top-1/2 w-80 md:w-[30rem] aspect-[3/4] rounded-xl overflow-hidden border shadow-lg transition-all duration-500 ${
                    isSelected
                      ? "border-primary ring-2 ring-primary/40"
                      : "border-border/70 hover:border-primary/70"
                  }`}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                    opacity,
                    zIndex: 50 - absOffset
                  }}
                  aria-label={`Select photo ${index + 1}`}
                  aria-pressed={isSelected}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
