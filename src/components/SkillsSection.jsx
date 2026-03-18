import { useState } from "react";
import { cn } from "@/lib/utils";
import LogoLoop from "./LogoLoop";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPostgresql,
  SiPython,
  SiR,
  SiRailway,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiUnity,
  SiVercel,
} from "react-icons/si";

// Skills data: grouped by category, tiered, and ranked within each tier
const skills = [
  // Proficient
  { name: "Python", tier: "proficient", category: "programming-languages", rank: 1 },
  { name: "JavaScript", tier: "proficient", category: "programming-languages", rank: 2 },
  { name: "TypeScript", tier: "proficient", category: "programming-languages", rank: 3 },
  { name: "FastAPI", tier: "proficient", category: "backend", rank: 4 },
  { name: "Flask", tier: "proficient", category: "backend", rank: 5 },
  { name: "Node.js", tier: "proficient", category: "backend", rank: 6 },
  { name: "React", tier: "proficient", category: "frontend", rank: 7 },
  { name: "HTML/CSS", tier: "proficient", category: "frontend", rank: 8 },
  { name: "Tailwind CSS", tier: "proficient", category: "frontend", rank: 9 },
  { name: "Git/Github", tier: "proficient", category: "engineering-practices", rank: 10 },
  { name: "VS Code", tier: "proficient", category: "engineering-practices", rank: 11 },

  // Working Knowledge
  { name: "Java", tier: "working", category: "programming-languages", rank: 1 },
  { name: "R", tier: "working", category: "programming-languages", rank: 2 },
  { name: "MongoDB", tier: "working", category: "infrastructure-databases", rank: 3 },
  { name: "SQL (Postgres/SQLite)", tier: "working", category: "infrastructure-databases", rank: 4 },
  { name: "Vercel", tier: "working", category: "infrastructure-databases", rank: 5 },
  { name: "Railway", tier: "working", category: "infrastructure-databases", rank: 6 },
  { name: "Docker", tier: "working", category: "infrastructure-databases", rank: 7 },
  { name: "AWS (S3)", tier: "working", category: "infrastructure-databases", rank: 8 },
  { name: "PostgreSQL", tier: "working", category: "infrastructure-databases", rank: 9 },
  { name: "SQL", tier: "working", category: "infrastructure-databases", rank: 10 },
  { name: "SQLite", tier: "working", category: "infrastructure-databases", rank: 11 },
  { name: "NumPy", tier: "working", category: "data-analytics", rank: 12 },
  { name: "CI/CD", tier: "working", category: "engineering-practices", rank: 13 },
  { name: "Clean Architecture", tier: "working", category: "engineering-practices", rank: 14 },
  { name: "SOLID Principles", tier: "working", category: "engineering-practices", rank: 15 },

  // Familiar
  { name: "Next.js", tier: "familiar", category: "frontend", rank: 1 },
  { name: "Unity", tier: "familiar", category: "engineering-practices", rank: 2 },
  { name: "C", tier: "familiar", category: "programming-languages", rank: 3 },
  { name: "C#", tier: "familiar", category: "programming-languages", rank: 4 },
  { name: "C++", tier: "familiar", category: "programming-languages", rank: 5 },
];

const categoryOptions = [
  { value: "all", label: "All" },
  { value: "programming-languages", label: "Programming Languages", triggerLabel: "Languages" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "data-analytics", label: "Data & Analytics", triggerLabel: "Data" },
  { value: "infrastructure-databases", label: "Infrastructure & Databases", triggerLabel: "Infra/DB" },
  { value: "engineering-practices", label: "Engineering Practices", triggerLabel: "Practices" },
];
const tierOrder = ["proficient", "working", "familiar"];
const tierOptions = [
  { value: "all", label: "All" },
  { value: "proficient", label: "Proficient" },
  { value: "working", label: "Working Knowledge", triggerLabel: "Working" },
  { value: "familiar", label: "Familiar" },
];
const tierLabels = {
  proficient: "Proficient",
  working: "Working Knowledge",
  familiar: "Familiar",
};
const tierBarWidths = {
  proficient: "100%",
  working: "60%",
  familiar: "30%",
};

const skillIconMap = {
  "C++": SiCplusplus,
  Docker: SiDocker,
  Python: SiPython,
  FastAPI: SiFastapi,
  Flask: SiFlask,
  "Git/Github": SiGithub,
  React: SiReact,
  JavaScript: SiJavascript,
  NumPy: SiNumpy,
  PostgreSQL: SiPostgresql,
  R: SiR,
  Railway: SiRailway,
  "Tailwind CSS": SiTailwindcss,
  SQLite: SiSqlite,
  TypeScript: SiTypescript,
  Unity: SiUnity,
  Vercel: SiVercel,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  "Next.js": SiNextdotjs
};

const skillLogos = Array.from(new Set(skills.map((skill) => skill.name)))
  .filter((name) => skillIconMap[name])
  .map((name) => {
    const Icon = skillIconMap[name];
    return { node: <Icon />, title: name };
  });

const VerticalPopoutMenu = ({ id, label, options, activeValue, onChange, openMenu, setOpenMenu }) => {
  const isOpen = openMenu === id;
  const activeOption = options.find((option) => option.value === activeValue) || options[0];
  const activeText = activeOption.triggerLabel || activeOption.label;

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpenMenu(isOpen ? null : id)}
        className={cn(
          "inline-flex w-auto items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1.5 text-sm font-medium transition-all duration-300",
          isOpen
            ? "bg-transparent text-primary border border-primary/60 shadow-[0_0_12px_rgba(139,92,246,0.25)]"
            : "bg-transparent text-foreground border border-border/70 hover:border-primary/45 hover:text-primary"
        )}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <span className="text-[0.68rem] uppercase tracking-[0.12em] opacity-85">{label}</span>
        <span className="text-sm font-semibold">{activeText}</span>
        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>

      {isOpen ? (
        <div className="absolute top-full left-0 mt-3 z-30 inline-flex flex-col items-start gap-2 rounded-2xl border border-border/70 bg-card/80 p-2 backdrop-blur-md shadow-lg max-w-[calc(100vw-2rem)]">
          <div className="flex flex-col items-start gap-2">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setOpenMenu(null);
                }}
                className={cn(
                  "w-auto whitespace-nowrap rounded-full border px-3 py-1.5 text-left text-sm font-medium transition-all duration-300",
                  activeValue === option.value
                    ? "bg-transparent text-primary border-primary shadow-[0_0_10px_rgba(139,92,246,0.2)]"
                    : "bg-transparent text-foreground border-border/70 hover:text-primary hover:border-primary/45"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeTier, setActiveTier] = useState("all");
  const [openMenu, setOpenMenu] = useState(null);

  const filteredSkills = skills
    .filter(
      (skill) =>
        (activeCategory === "all" || skill.category === activeCategory) &&
        (activeTier === "all" || skill.tier === activeTier)
    )
    .sort((a, b) => {
      const tierDiff = tierOrder.indexOf(a.tier) - tierOrder.indexOf(b.tier);
      if (tierDiff !== 0) return tierDiff;
      return a.rank - b.rank;
    });

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-7 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="mb-7">
          <LogoLoop
            logos={skillLogos}
            speed={85}
            direction="left"
            logoHeight={34}
            gap={34}
            hoverSpeed={18}
            scaleOnHover
            fadeOut
            fadeOutColor="hsl(var(--background))"
            className="skills-logo-loop"
            ariaLabel="Skills and frameworks"
          />
        </div>

        <div className="mt-4 relative">
          <div className="xl:hidden mb-8">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <VerticalPopoutMenu
                id="category"
                label="Category"
                options={categoryOptions}
                activeValue={activeCategory}
                onChange={setActiveCategory}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              />
              <VerticalPopoutMenu
                id="skill-depth"
                label="Skill Depth"
                options={tierOptions}
                activeValue={activeTier}
                onChange={setActiveTier}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              />
            </div>
          </div>

          <aside className="hidden xl:flex absolute top-0 -left-[21rem] z-20 items-start gap-3">
            <VerticalPopoutMenu
              id="category"
              label="Category"
              options={categoryOptions}
              activeValue={activeCategory}
              onChange={setActiveCategory}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
            <VerticalPopoutMenu
              id="skill-depth"
              label="Skill Depth"
              options={tierOptions}
              activeValue={activeTier}
              onChange={setActiveTier}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
          </aside>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:translate-x-24">
            {filteredSkills.map((skill, idx) => (
              <div key={`${skill.name}-${skill.category}-${idx}`} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className={
                      skill.tier === "proficient"
                        ? "bg-primary h-2 rounded-full"
                        : skill.tier === "working"
                          ? "bg-primary/80 h-2 rounded-full"
                          : "bg-primary/40 h-2 rounded-full"
                    }
                    style={{ width: tierBarWidths[skill.tier] }}
                  />
                </div>
                <div className="text-right mt-1">
                  <span className="text-xs text-muted-foreground">{tierLabels[skill.tier]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
