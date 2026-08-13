import { Icons } from "@/components/icons";
import { HomeIcon, Newspaper, Contact } from "lucide-react";

export const DATA = {
  name: "Saksham Saxena",
  initials: "sakkshm",
  url: "https://sakkshm.me",
  location: "New Delhi, IN",
  locationLink: "https://www.google.com/maps/place/new-delhi",
  description:
    "Backend & DevOps Engineer 👾 building scalable backend systems and infrastructure.",
  summary:
    "I build scalable backend systems and infrastructure with a focus on performance, reliability, and systems-level design. I like going deep into how things work: from networking and kernels to databases and distributed systems.",
  avatarUrl: "/profile.jpg",
  skills: [
    "Python",
    "Golang",
    "TypeScript",
    "JavaScript",
    "C++",
    "SQL",
    "FastAPI",
    "WebSockets",
    "REST APIs",
    "PostgreSQL",
    "Redis",
    "Vector Databases",
    "Docker",
    "Kubernetes",
    "Linux",
    "eBPF",
    "Git",
    "AWS",
    "Distributed Systems",
    "System Design",
  ],
  currentlyWorking: [
    "A sandboxed execution runtime for untrusted code (Docker, REST + WebSockets, <200ms orchestration)",
    "Writing my own database from scratch (storage engine + indexing + query layer)",
    "AI infrastructure + DevOps tooling for agentic systems",
  ],
  currentlyLearning: [
    "eBPF-based observability and networking tooling",
    "Distributed systems design",
    "Low-level performance optimization (Linux internals, networking, concurrency)",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: Newspaper, label: "Blog" },
    { href: "https://dub.sh/sakkshm-resume", icon: Contact, label: "Resume" },
  ],
  contact: {
    email: "saksham.saxena404@gmail.com",
    tel: "+91 8755272005",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sakkshm",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/sakkshm",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/sakkshm",
        icon: Icons.x,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:saksham.saxena404@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Blueleaf AI Innovation Studio",
      href: "https://blueleaf.ai",
      badges: [],
      location: "Delhi NCR, India",
      title: "AI Engineering Intern",
      logoUrl: "/blueleaf.jpeg",
      start: "May 2026",
      end: "Jul 2026",
      description:
        "Designed a modular agentic OS layer and decoupled knowledge graphs to orchestrate enterprise workflows. Optimized multi-agent runtimes and retrieval pipelines by implementing context pruning to minimize token usage. Built isolated, secure microservices using MLOps workflows to enforce strict compliance boundaries.",
    },
    {
      company: "FOSSCU-K",
      href: "https://github.com/FOSSCU-KIET",
      badges: [],
      location: "Remote / KIET, India",
      title: "Open Source Contributor",
      logoUrl: "/foss.jpeg",
      start: "Oct 2024",
      end: "Present",
      description:
        "Contributed to multiple open-source projects by fixing bugs, adding features, and improving documentation. Led sessions on FOSS tools and Git best practices for new developers.",
    }
  ],

  education: [
    {
      school: "KIET Group of Institutions",
      href: "https://kiet.edu",
      degree: "Bachelor of Technology, Information Technology",
      logoUrl: "/kiet.jpeg",
      start: "2024",
      end: "Present",
    },
  ],

 projects: [
    {
        title: "Atlas",
        href: "https://github.com/sakkshm/atlas-ai",
        dates: "Jul 2026",
        active: true,
        description:
            "A voice-first AI assistant for Google Workspace that chains actions across Calendar, Tasks, Gmail, Contacts, and Maps via a LangGraph agent, streaming each step in real time over WebSocket.",
        technologies: [
            "Python", "FastAPI", "LangGraph", "Celery", "Redis", "PostgreSQL", "WebSockets", "Google OAuth2", "Gemini", "React", "TypeScript", "Docker"
        ],
        links: [
            {
                type: "GitHub",
                href: "https://github.com/sakkshm/atlas-ai",
                icon: <Icons.github className="size-3" />,
            },
            {
                type: "Live",
                href: "https://atlas.sakkshm.me",
                icon: <Icons.globe className="size-3" />,
            },
        ],
        image: "",
    },
    {
        title: "Bastion",
        href: "https://github.com/sakkshm/bastion",
        dates: "Apr 2026",
        active: true,
        description:
            "A sandboxed execution environment for AI agents to run untrusted code and manage files with a REST + WebSocket interface.",
        technologies: [
            "Go", "Docker", "REST APIs", "WebSockets", "SQLite", "Linux Containers", "System Design", "Concurrency"
        ],
        links: [
            {
                type: "GitHub",
                href: "https://github.com/sakkshm/bastion",
                icon: <Icons.github className="size-3" />,
            },
        ],
        image: "",
    },
    {
        title: "SunoHQ",
        href: "https://github.com/sakkshm/sunoHQ",
        dates: "Feb 2026",
        active: true,
        description:
            "A multilingual voice AI platform for deploying business-aware conversational agents with a full STT → RAG → LLM → TTS pipeline.",
        technologies: [
            "Python",
            "Voice AI",
            "RAG",
            "Vector Databases",
            "Telegram Bots"
        ],
        links: [
            {
                type: "GitHub",
                href: "https://github.com/sakkshm/sunoHQ",
                icon: <Icons.github className="size-3" />,
            },
            {
                type: "Live",
                href: "https://sunohq.vercel.app/",
                icon: <Icons.globe className="size-3" />,
            },
        ],
        image: "",
    },
    {
        title: "Spectra",
        href: "https://github.com/sakkshm/spectra",
        dates: "Jan 2026",
        active: false,
        description:
            "A Shazam-style audio fingerprinting and recognition engine built from scratch in Python.",
        technologies: [
            "Python", "Signal Processing", "STFT", "Audio Fingerprinting", "PostgreSQL", "Hashing"
        ],
        links: [
            {
                type: "GitHub",
                href: "https://github.com/sakkshm/spectra",
                icon: <Icons.github className="size-3" />,
            },
        ],
        image: "",
    },
    {
      title: "Fraktal",
      href: "https://github.com/fraktal-app/fraktal",
      dates: "Jun 2025 – Jul 2025",
      active: false,
      description:
        "Web3 automation platform enabling event-driven workflows between smart contracts and APIs. Built Node.js backend for triggers, PostgreSQL metadata layer, and Web3 integrations.",
      technologies: ["Node.js", "Express", "PostgreSQL", "Web3", "TypeScript"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/fraktal-app",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "",
    },
    {
        title: "Kache",
        href: "https://github.com/sakkshm/kache",
        dates: "Dec 2025 – Jan 2026",
        active: false,
        description:
            "Redis-like in-memory key-value store built from scratch in C++. Features a single-threaded event loop, intrusive hash tables, sorted sets, TTL expiration, and background thread pool. Designed for learning systems programming and low-latency data structures.",
        technologies: ["C++", "TCP", "Event Loop", "AVL Trees", "Thread Pool"],
        links: [
            {
            type: "GitHub",
            href: "https://github.com/sakkshm/kache",
            icon: <Icons.github className='size-3' />,
            },
        ],
        image: "",
    },
    {
      title: "Aether",
      href: "https://github.com/sakkshm/aether",
      dates: "Nov 2025",
      active: false,
      description:
        "A unified, privacy first memory layer for LLMs to maintain and share context across chats. ",
      technologies: ["Typescript",  "Chrome Extension", "Chrome Built-In AI", "Vector DB", "RAG"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/sakkshm/aether",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "",
    },
    {
      title: "json-parse",
      href: "https://github.com/sakkshm/json-parse",
      dates: "Oct 2025",
      active: false,
      description:
        "Lightweight C++ library for fast JSON parsing and serialization with zero dependencies.",
      technologies: ["C++", "Parsing", "Serialization"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/sakkshm/json-parse",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "",
    },
    {
      title: "TweetMap",
      href: "https://github.com/sakkshm/tweetmap",
      dates: "Oct 2025",
      active: false,
      description:
        "Generate GitHub-like contribution heatmaps for Twitter/X activity, visualizing your consistency and posting patterns.",
      technologies: ["Python", "Matplotlib", "Twitter API"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/sakkshm/tweetmap",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "",
    },
    {
      title: "TypeClash",
      href: "https://github.com/sakkshm/typeclash",
      dates: "Sep 2025 – Present",
      active: true,
      description:
        "Real-time multiplayer typing game with live WebSocket sync, Google OAuth, and persistent match history. Built with Next.js, Express, Prisma, and PostgreSQL.",
      technologies: ["Next.js", "Express", "WebSockets", "Prisma", "PostgreSQL"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/sakkshm/typeclash",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "",
    },
    {
      title: "Kreon Labs",
      href: "https://github.com/sakkshm/kreon-labs",
      dates: "Jun 2025",
      active: false,
      description:
        "Decentralized IP provenance & infringement detection using C2PA, watermarking, and Story Protocol to verify on-chain authenticity.",
      technologies: ["TypeScript", "C2PA", "Story Protocol", "Web3"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/sakkshm/kreon-labs",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "",
    },
    {
      title: "TinyRayTracer",
      href: "https://github.com/sakkshm/tinyraytracer",
      dates: "Jun 2025",
      active: false,
      description:
        "Minimal ray tracer written from scratch in C++ featuring materials, lighting, and anti-aliasing, built for learning graphics fundamentals.",
      technologies: ["C++", "Computer Graphics", "Ray Tracing"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/sakkshm/tinyraytracer",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "",
    }
  ],

  hackathons: [
    {
      title: "Surreal World Asset Builathon",
      dates: "June 2025",
      location: "Online",
      description:
        "Built a decentralized IP provenance & infringement detection using C2PA, watermarking, and Story Protocol to verify on-chain authenticity — Winner (1st place out of 200+ teams).",
      win: "Winner",
      links: [],
    },
    {
      title: "Agents of the Permaweb",
      dates: "Aug 2025",
      location: "Online",
      description:
        "Built a decentralized automation layer connecting Web2 APIs to the Permaweb — Finalist (Top 6 out of 100 teams).",
      win: "Finalist",
      links: [],
    },
    {
      title: "World Computer Hacker League (ICP)",
      dates: "Sept 2025",
      location: "Online",
      description:
        "Developed Fraktal — a Zapier-like automation platform for Web3 using Azle & ICP — Finalist (Asia-level selection).",
      win: "Finalist",
      links: [],
    },
    {
      title: "PSB FinShield Hackathon, IIT Hyderabad",
      dates: "Sept 2025",
      location: "IIT Hyderabad",
      description:
        "Built a graph-based fraud detection and adaptive risk scoring engine for real-time authentication — Finalist (Top 75 out of 2000+ teams).",
      win: "Finalist",
      links: [],
    },
  ],


};
