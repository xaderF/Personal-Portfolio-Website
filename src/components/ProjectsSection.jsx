import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projectsData";
import { getSafeExternalUrl } from "@/lib/utils";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A quick look at the projects I am most proud of. Click a project title to
          open the full in-depth version with more screenshots.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const safeDemoUrl = getSafeExternalUrl(project.demoUrl);
            const safeGithubUrl = getSafeExternalUrl(project.githubUrl);

            return (
              <article
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover border border-border/70"
              >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6 text-left">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={`${project.slug}-${tag}`}
                          className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="mb-3">
                      <Link
                        to={`/projects#${project.slug}`}
                        className="inline-flex items-center rounded-md bg-primary/10 hover:bg-primary/20 px-3 py-1.5 text-lg font-semibold text-primary transition-colors duration-300"
                      >
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-muted-foreground text-sm mb-5">
                      {project.shortDescription}
                    </p>

                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        {safeDemoUrl ? (
                          <a
                            href={safeDemoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            aria-label={`Open ${project.title} live demo`}
                          >
                            <ExternalLink size={20} />
                          </a>
                        ) : null}
                        {safeGithubUrl ? (
                          <a
                            href={safeGithubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            aria-label={`Open ${project.title} GitHub repository`}
                          >
                            <Github size={20} />
                          </a>
                        ) : null}
                      </div>
                    </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link className="cosmic-button w-fit flex items-center mx-auto gap-2" to="/projects">
            All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
