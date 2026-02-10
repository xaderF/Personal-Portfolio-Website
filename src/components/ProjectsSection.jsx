import { Github, ExternalLink, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "VeloXType",
        description: "Velotype is a competitive typing game that combines speed, accuracy, and consistency with ranked progression and skill-based matchmaking.",
        image: "/projects/project1/project1_main_menu_photo.png",
        tags: ["TypeScript", "Vite", "React", "PostgreSQL", "Prisma"],
        demoUrl: "https://veloxtype.vercel.app/",
        githubUrl: "https://github.com/xaderF/VeloXType",
    },
    {
        id: 2,
        title: "HiReady",
        description: "An intelligent training and analytics platform that uses AI-powered video intelligence to detect learning friction and provide actionable insights for trainers and HR departments. Built with privacy-first design principles, HiReady.tech transforms workplace training and educational content delivery through advanced analytics and behavioral clustering.",
        image: "/projects/project2/project2_login_page_photo.png",
        tags: ["Languages used", "Stuff used", "like CSS and Java"],
        demoUrl: "https://hi-ready-continued.vercel.app/",
        githubUrl: "https://github.com/xaderF/HiReady",
    },
    {
        id: 3,
        title: "FlusherFinder",
        description: "FlushFinder is a web application designed to help people with IBS, Crohn's disease, ulcerative colitis, and other digestive conditions find clean, accessible restrooms nearby. Built during NewHacks 25, this project addresses a real-world accessibility challenge that affects millions of people worldwide.",
        image: "/projects/project3/project3_main_menu_photo.png",
        tags: ["Languages used", "Stuff used", "like CSS and Java"],
        demoUrl: "https://flusherfinder.web.app/, (Backend Deployment Expired but the code is available on GitHub)",
        githubUrl: "https://github.com/xaderF/FlusherFinder?tab=readme-ov-file",
    },
]



export const ProjectsSection = () => {

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here put a small paragraph, saying these are like most notable projects or whatever.
                Little bit of a description of the section.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div 
                        key={key} 
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden">
                            <img 
                                src={project.image} 
                                alt={project.title + ' screenshot'} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                loading="lazy"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) =>(
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1"> 
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a 
                                        href={project.demoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    > 
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a 
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    > 
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a 
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank" 
                    href="http://github.com/xaderF"
                >
                    Check out My Github <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>;
}