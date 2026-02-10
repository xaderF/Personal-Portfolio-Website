import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projectsData";

const getWrappedOffset = (index, activeIndex, total) => {
  let offset = index - activeIndex;
  const half = total / 2;

  if (offset > half) offset -= total;
  if (offset < -half) offset += total;
  return offset;
};

export const AllProjectsSection = () => {
  const [selectedImageByProject, setSelectedImageByProject] = useState({});
  const updateSelectedImage = (projectSlug, imageIndex) => {
    setSelectedImageByProject((prev) => ({
      ...prev,
      [projectSlug]: imageIndex
    }));
  };

  const cycleImage = (projectSlug, totalImages, delta) => {
    setSelectedImageByProject((prev) => {
      const currentIndex = prev[projectSlug] ?? 0;
      const nextIndex = (currentIndex + delta + totalImages) % totalImages;
      return {
        ...prev,
        [projectSlug]: nextIndex
      };
    });
  };

  return (
    <section className="pt-32 pb-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-card/90 border border-border/70 rounded-2xl p-8 md:p-12 shadow-lg mb-10 text-left">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            All Projects
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">In-Depth Project Showcase</h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl">
            Full breakdowns of my work, including context, implementation goals, and
            additional screenshots for each project.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-10"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="space-y-12">
          {projects.map((project) => {
            const allImages = [
              { src: project.image, alt: `${project.title} main screenshot` },
              ...project.gallery
            ];
            const selectedImageIndex = selectedImageByProject[project.slug] ?? 0;
            const selectedImage = allImages[selectedImageIndex] ?? allImages[0];

            return (
              <article
                id={project.slug}
                key={project.id}
                className="scroll-mt-28 bg-card border border-border/70 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="grid lg:grid-cols-[1.35fr_0.9fr]">
                  <div className="p-4 md:p-6 lg:p-7">
                    <div className="rounded-xl overflow-hidden border border-border/70">
                      <img
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        className="w-full h-full object-cover min-h-[320px] md:min-h-[360px] lg:min-h-[420px]"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="p-6 md:p-8 text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h2>

                    <p className="text-muted-foreground mb-3">{project.shortDescription}</p>
                    {project.details.map((paragraph, index) => (
                      <p key={`${project.slug}-detail-${index}`} className="text-muted-foreground mb-3">
                        {paragraph}
                      </p>
                    ))}

                    {project.statusNote ? (
                      <p className="text-sm text-primary mb-4">{project.statusNote}</p>
                    ) : null}

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={`${project.slug}-detail-${tag}`}
                          className="px-2.5 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-foreground/85 hover:text-primary transition-colors"
                      >
                        <Github size={18} />
                        View Project
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-foreground/85 hover:text-primary transition-colors"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>

                <div className="px-4 md:px-6 lg:px-7 pb-6 md:pb-7">
                  <h3 className="text-lg font-semibold text-left mb-4">More Photos</h3>

                  <div className="md:hidden flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
                    {allImages.map((image, index) => {
                      const isSelected = index === selectedImageIndex;

                      return (
                        <button
                          key={`${project.slug}-${image.src}`}
                          type="button"
                          onClick={() => updateSelectedImage(project.slug, index)}
                          className={`shrink-0 rounded-lg border overflow-hidden transition-all duration-300 ${
                            isSelected
                              ? "border-primary ring-2 ring-primary/50"
                              : "border-border/70 hover:border-primary/70"
                          }`}
                          aria-label={`Show ${project.title} image ${index + 1}`}
                          aria-pressed={isSelected}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-44 h-28 object-cover snap-center"
                            loading="lazy"
                          />
                        </button>
                      );
                    })}
                  </div>

                  <div className="hidden md:block">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <button
                        type="button"
                        onClick={() => cycleImage(project.slug, allImages.length, -1)}
                        className="p-2 rounded-full border border-border/70 hover:border-primary/70 text-foreground/80 hover:text-primary transition-colors"
                        aria-label={`Previous ${project.title} image`}
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        type="button"
                        onClick={() => cycleImage(project.slug, allImages.length, 1)}
                        className="p-2 rounded-full border border-border/70 hover:border-primary/70 text-foreground/80 hover:text-primary transition-colors"
                        aria-label={`Next ${project.title} image`}
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>

                    <div className="relative h-44 [perspective:1200px] overflow-hidden">
                      {allImages.map((image, index) => {
                        const offset = getWrappedOffset(index, selectedImageIndex, allImages.length);
                        const absOffset = Math.abs(offset);
                        const isSelected = offset === 0;

                        if (absOffset > 3) {
                          return null;
                        }

                        const translateX = offset * 170;
                        const rotateY = offset * -24;
                        const scale = isSelected ? 1 : absOffset === 1 ? 0.82 : 0.66;
                        const opacity = isSelected ? 1 : absOffset === 1 ? 0.75 : 0.38;

                        return (
                          <button
                            key={`${project.slug}-carousel-${image.src}`}
                            type="button"
                            onClick={() => updateSelectedImage(project.slug, index)}
                            className={`absolute left-1/2 top-1/2 w-64 h-36 rounded-lg overflow-hidden border transition-all duration-500 ${
                              isSelected
                                ? "border-primary ring-2 ring-primary/40"
                                : "border-border/70 hover:border-primary/70"
                            }`}
                            style={{
                              transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                              opacity,
                              zIndex: 50 - absOffset
                            }}
                            aria-label={`Select ${project.title} image ${index + 1}`}
                            aria-pressed={isSelected}
                          >
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
