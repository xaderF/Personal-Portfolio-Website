const defaultImages = {
  internship:
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format",
  leadership:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format",
  project:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format",
  hackathon:
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format"
};

export const createInternshipEntry = ({ date = "Add term + year", ...overrides } = {}) => ({
  id: "internship-placeholder",
  date,
  title: "Internship (Placeholder)",
  description:
    "This section will be updated with internship role details, responsibilities, and impact once finalized.",
  category: "Internship",
  type: "internship",
  color: "#4f46e5",
  image: defaultImages.internship,
  ...overrides
});

export const createLeadershipEntry = ({ date = "Add month/year range", ...overrides } = {}) => ({
  id: "leadership-placeholder",
  date,
  title: "Leadership (Placeholder)",
  description:
    "Leadership and team initiatives will be documented here, including planning, collaboration, and outcomes.",
  category: "Leadership",
  type: "leadership",
  color: "#7c3aed",
  image: defaultImages.leadership,
  ...overrides
});

export const createProjectEntry = ({ date = "Add completion month + year", ...overrides } = {}) => ({
  id: "project-placeholder",
  date,
  title: "Large Project Milestone (Placeholder)",
  description:
    "Major shipped projects and launch milestones will be documented here with build goals, release notes, and outcomes.",
  category: "Project",
  type: "project",
  color: "#10b981",
  image: defaultImages.project,
  ...overrides
});

export const createHackathonEntry = ({ date = "Add month + year (or exact weekend)", ...overrides } = {}) => ({
  id: "hackathon-placeholder",
  date,
  title: "Hackathon Milestones (Placeholder)",
  description:
    "Hackathon projects and technical wins will be listed here with concise project summaries and links.",
  category: "Hackathon",
  type: "hackathon",
  color: "#0ea5e9",
  image: defaultImages.hackathon,
  ...overrides
});

export const experienceTimelinePlaceholders = [
  createInternshipEntry({
    id: "upcoming-2026",
    date: "May-Aug 2026",
    title: "Upcoming",
    description: "Template entry for now. Empty for now."
  }),
  createHackathonEntry({
    id: "hack-the-student-life-2026",
    date: "Mar 2026",
    title: "Hack The Student Life",
    projectSlug: "utransit",
    image: "/Experience_Thumbnails/HackTheStudentLife_Thumbnail.png",
    description:
      "At Hack The Student Life 2026, a U of T AWS hackathon focused on practical campus solutions, our team placed Top 10. We built UTransit, a student-friendly transit app that combines route planning, schedules, and digital ticket management into one platform."
  }),
  createHackathonEntry({
    id: "uofthacks-13-2026",
    date: "Jan 2026",
    title: "UofTHacks 13",
    projectSlug: "hiready",
    image: "/Experience_Thumbnails/UofTHacks_Thumbnail.png",
    description:
      "At UofTHacks 13, a student-run hackathon bringing together 500+ participants to build creative, practical tech projects, our team placed Top 40. We built HiReady, an AI-powered training analytics platform that detects learning friction in videos and gives trainers actionable insights while keeping learner identities private."
  }),
  createHackathonEntry({
    id: "newhacks-2025",
    date: "Oct 2025",
    title: "NewHacks",
    projectSlug: "flushfinder",
    image: "/Experience_Thumbnails/NewHacks_Thumbnail.png",
    description:
      "At NewHacks, a beginner-friendly 24-hour hackathon at the University of Toronto for new hackers, our team placed Top 25. We built FlusherFinder, a web app that helps people with digestive conditions find clean, accessible restrooms nearby."
  })
];
