import { useState } from "react";
import { cn } from "@/lib/utils";

// Skills data: grouped by category, tiered, and ranked within each tier
const skills = [
  // Proficient
  { name: "Python", tier: "proficient", category: "backend", rank: 1 },
  { name: "FastAPI", tier: "proficient", category: "backend", rank: 2 },
  { name: "Flask", tier: "proficient", category: "backend", rank: 3 },
  { name: "Git/Github", tier: "proficient", category: "tools", rank: 4 },
  { name: "React", tier: "proficient", category: "frontend", rank: 5 },
  { name: "Node.js", tier: "proficient", category: "backend", rank: 6 },
  { name: "VS Code", tier: "proficient", category: "tools", rank: 7 },

  // Working Knowledge
  { name: "Java", tier: "working", category: "languages", rank: 1 },
  { name: "JavaScript", tier: "working", category: "frontend", rank: 2 },
  { name: "HTML/CSS", tier: "working", category: "frontend", rank: 3 },
  { name: "Tailwind CSS", tier: "working", category: "frontend", rank: 4 },
  { name: "MongoDB", tier: "working", category: "backend", rank: 5 },
  { name: "Vercel", tier: "working", category: "tools", rank: 6 },
  { name: "Railway", tier: "working", category: "tools", rank: 7 },
  { name: "Docker", tier: "working", category: "tools", rank: 8 },

  // Familiar
  { name: "Unity", tier: "familiar", category: "tools", rank: 1 },
  { name: "Next.js", tier: "familiar", category: "frontend", rank: 2 },
  { name: "C", tier: "familiar", category: "languages", rank: 3 },
  { name: "SQL (Postgres/SQLite)", tier: "familiar", category: "backend", rank: 4 },
  { name: "C#", tier: "familiar", category: "languages", rank: 5 },
];

const categories = ["all", "frontend", "backend", "tools", "languages"];
const tiers = ["proficient", "working", "familiar"];
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

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeTier, setActiveTier] = useState("all");

  const filteredSkills = skills
    .filter(
      (skill) =>
        (activeCategory === "all" || skill.category === activeCategory) &&
        (activeTier === "all" || skill.tier === activeTier)
    )
    .sort((a, b) => {
      const tierDiff = tiers.indexOf(a.tier) - tiers.indexOf(b.tier);
      if (tierDiff !== 0) return tierDiff;
      return a.rank - b.rank;
    });

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-scondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Clickable legend for skill tiers */}
        <div className="flex justify-center mb-8">
          <div className="bg-secondary/40 rounded-lg px-4 py-2 text-sm text-muted-foreground flex items-center gap-4">
            <span className="font-semibold">Skill Depth:</span>
            <button
              className={cn(
                "px-3 py-1 rounded-full transition-colors duration-300",
                activeTier === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-scondary"
              )}
              onClick={() => setActiveTier("all")}
            >
              All
            </button>
            {tiers.map((tier) => (
              <button
                key={tier}
                className={cn(
                  "px-3 py-1 rounded-full transition-colors duration-300",
                  activeTier === tier
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-scondary"
                )}
                onClick={() => setActiveTier(tier)}
              >
                {tierLabels[tier]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </section>
  );
};
