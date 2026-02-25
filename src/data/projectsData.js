export const projects = [
  {
    id: 1,
    slug: "instareply",
    title: "InstaReply",
    completedDate: "Feb 2026",
    isFeatured: true,
    shortDescription:
      "An AI-first Instagram DM auto-responder MVP built to showcase practical LLM API integration and automated reply generation.",
    details: [
      "InstaReply is intentionally centered on applied AI engineering: integrating LLM APIs into a real messaging workflow with guardrails, fallback logic, and deterministic policy behavior.",
      "The backend handles secure webhook ingestion, async job processing, and rule-first reply drafting with OpenAI fallback. A lightweight frontend console is included for controls, but the primary focus is backend AI decisioning and automation quality."
    ],
    image: "/projects/InstaReply/InstaReply_Homepage.png",
    gallery: [
      {
        src: "/projects/InstaReply/InstaReply_Connectionpage.png",
        alt: "InstaReply connection setup screen"
      },
      {
        src: "/projects/InstaReply/InstaReply_Contactpage.png",
        alt: "InstaReply contact segment management screen"
      },
      {
        src: "/projects/InstaReply/InstaReply_Configpage.png",
        alt: "InstaReply policy configuration screen"
      }
    ],
    tags: [
      "Node.js",
      "TypeScript",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "OpenAI",
      "Meta Graph API"
    ],
    demoUrl: null,
    githubUrl: "https://github.com/xaderF/InstaReply"
  },
  {
    id: 2,
    slug: "veloxtype",
    title: "VeloXType",
    completedDate: "Feb 2026",
    isFeatured: true,
    shortDescription:
      "A competitive typing platform focused on ranked progression, match fairness, and measurable improvement over time.",
    details: [
      "VeloXType turns typing practice into a structured multiplayer experience. Instead of single-run tests, the project emphasizes repeatable performance in competitive rounds where consistency matters as much as raw speed.",
      "The app is designed to be scalable and type-safe, with clear separation between gameplay logic, progression systems, and data storage. This made it easier to iterate quickly on ranking and challenge features while keeping the experience responsive."
    ],
    image: "/projects/veloxtype/project1_main_menu_photo.png",
    gallery: [
      {
        src: "/projects/veloxtype/project1_gameplay_photo.png",
        alt: "VeloXType gameplay screen"
      },
      {
        src: "/projects/veloxtype/project1_career_rank_photo.png",
        alt: "VeloXType ranked career view"
      },
      {
        src: "/projects/veloxtype/project1_stats_graph_photo.png",
        alt: "VeloXType performance stats graph"
      },
      {
        src: "/projects/veloxtype/project1_freetype_photo.png",
        alt: "VeloXType free typing mode"
      }
    ],
    tags: ["TypeScript", "Vite", "React", "PostgreSQL", "Prisma"],
    demoUrl: "https://veloxtype.vercel.app/",
    githubUrl: "https://github.com/xaderF/VeloXType"
  },
  {
    id: 3,
    slug: "hiready",
    title: "HiReady",
    completedDate: "Jan 2026",
    isFeatured: true,
    shortDescription:
      "An AI-assisted training and analytics platform built to detect learning friction and improve trainer feedback loops.",
    details: [
      "HiReady combines video-based interaction with analytics workflows so trainers can understand where learners get stuck and why. The project focuses on making signals useful instead of just collecting data.",
      "The system is structured around privacy-first design and role-based experiences, with dedicated flows for learners and instructors. This supports both content delivery and post-session analysis in one interface."
    ],
    image: "/projects/HiReady/project2_login_page_photo.png",
    gallery: [
      {
        src: "/projects/HiReady/project2_student_end_photo.png",
        alt: "HiReady student workflow screen"
      },
      {
        src: "/projects/HiReady/project2_instructor_upload_video_photo.png",
        alt: "HiReady instructor upload screen"
      },
      {
        src: "/projects/HiReady/project2_instructor_end_photo.png",
        alt: "HiReady instructor dashboard"
      },
      {
        src: "/projects/HiReady/project2_AI_chatroom_photo.png",
        alt: "HiReady AI chatroom interface"
      }
    ],
    tags: ["React", "JavaScript", "Analytics", "AI Tools"],
    demoUrl: "https://hi-ready-continued.vercel.app/",
    githubUrl: "https://github.com/JacobChan182/HiReadyContinued"
  },
  {
    id: 4,
    slug: "flushfinder",
    title: "FlushFinder",
    completedDate: "Oct 2025",
    isFeatured: false,
    shortDescription:
      "A hackathon-built accessibility app that helps users quickly locate nearby restrooms during urgent situations.",
    details: [
      "FlushFinder was created to support people with IBS, Crohn's disease, ulcerative colitis, and similar digestive conditions where immediate restroom access is essential.",
      "The project prioritizes speed and clarity in the interface, reducing friction from search to decision. It was developed during NewHacks 25 around a real-world accessibility challenge."
    ],
    image: "/projects/FlushFinder/project3_main_menu_photo.png",
    gallery: [
      {
        src: "/projects/FlushFinder/project3_login_page_photo.png",
        alt: "FlushFinder login view"
      }
    ],
    tags: ["React", "Accessibility", "Hackathon Project"],
    demoUrl: "https://flusherfinder.web.app/",
    githubUrl: "https://github.com/xaderF/FlusherFinder?tab=readme-ov-file",
    statusNote:
      "The public demo backend is currently expired, but the full source code is available on GitHub."
  }
];
