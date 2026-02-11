export const projects = [
  {
    id: 1,
    slug: "veloxtype",
    title: "VeloXType",
    shortDescription:
      "A competitive typing platform focused on ranked progression, match fairness, and measurable improvement over time.",
    details: [
      "VeloXType turns typing practice into a structured multiplayer experience. Instead of single-run tests, the project emphasizes repeatable performance in competitive rounds where consistency matters as much as raw speed.",
      "The app is designed to be scalable and type-safe, with clear separation between gameplay logic, progression systems, and data storage. This made it easier to iterate quickly on ranking and challenge features while keeping the experience responsive."
    ],
    image: "/projects/project1/project1_main_menu_photo.png",
    gallery: [
      {
        src: "/projects/project1/project1_gameplay_photo.png",
        alt: "VeloXType gameplay screen"
      },
      {
        src: "/projects/project1/project1_career_rank_photo.png",
        alt: "VeloXType ranked career view"
      },
      {
        src: "/projects/project1/project1_stats_graph_photo.png",
        alt: "VeloXType performance stats graph"
      },
      {
        src: "/projects/project1/project1_freetype_photo.png",
        alt: "VeloXType free typing mode"
      }
    ],
    tags: ["TypeScript", "Vite", "React", "PostgreSQL", "Prisma"],
    demoUrl: "https://veloxtype.vercel.app/",
    githubUrl: "https://github.com/xaderF/VeloXType"
  },
  {
    id: 2,
    slug: "hiready",
    title: "HiReady",
    shortDescription:
      "An AI-assisted training and analytics platform built to detect learning friction and improve trainer feedback loops.",
    details: [
      "HiReady combines video-based interaction with analytics workflows so trainers can understand where learners get stuck and why. The project focuses on making signals useful instead of just collecting data.",
      "The system is structured around privacy-first design and role-based experiences, with dedicated flows for learners and instructors. This supports both content delivery and post-session analysis in one interface."
    ],
    image: "/projects/project2/project2_login_page_photo.png",
    gallery: [
      {
        src: "/projects/project2/project2_student_end_photo.png",
        alt: "HiReady student workflow screen"
      },
      {
        src: "/projects/project2/project2_instructor_upload_video_photo.png",
        alt: "HiReady instructor upload screen"
      },
      {
        src: "/projects/project2/project2_instructor_end_photo.png",
        alt: "HiReady instructor dashboard"
      },
      {
        src: "/projects/project2/project2_AI_chatroom_photo.png",
        alt: "HiReady AI chatroom interface"
      }
    ],
    tags: ["React", "JavaScript", "Analytics", "AI Tools"],
    demoUrl: "https://hi-ready-continued.vercel.app/",
    githubUrl: "https://github.com/JacobChan182/HiReadyContinued"
  },
  {
    id: 3,
    slug: "flushfinder",
    title: "FlushFinder",
    shortDescription:
      "A hackathon-built accessibility app that helps users quickly locate nearby restrooms during urgent situations.",
    details: [
      "FlushFinder was created to support people with IBS, Crohn's disease, ulcerative colitis, and similar digestive conditions where immediate restroom access is essential.",
      "The project prioritizes speed and clarity in the interface, reducing friction from search to decision. It was developed during NewHacks 25 around a real-world accessibility challenge."
    ],
    image: "/projects/project3/project3_main_menu_photo.png",
    gallery: [
      {
        src: "/projects/project3/project3_login_page_photo.png",
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
