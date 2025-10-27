import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Saksham Saxena",
  initials: "sakkshm",
  url: "https://sakkshm.me",
  location: "New Delhi, IN",
  locationLink: "https://www.google.com/maps/place/new-delhi",
  description:
    "CS student exploring systems, full-stack/backend engineering, Web3, and DevOps 👾 - building, learning, and open source 💚",
  summary:
    "I'm a CS student who loves learning about systems and programming. I enjoy building projects, contributing to open-source, and diving deep into low-level programming, backend design, and DevOps. Currently working on Fraktal: a Web3 automation platform, and contributing to open source at FOSSCU-K.",
  avatarUrl: "/profile.jpg",
  skills: [
    "C",
    "C++",
    "Go",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "PostgreSQL",
    "Docker",
    "Linux",
    "DevOps",
    "WebSockets",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
      company: "FOSSCU-K",
      href: "https://github.com/FOSSCU-KIET",
      badges: [],
      location: "Remote / KIET, India",
      title: "Open Source Contributor",
      logoUrl: "/fosscu.png",
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
      logoUrl: "/kiet.png",
      start: "2024",
      end: "Present",
    },
  ],

 projects: [
    {
      title: "Fraktal",
      href: "https://fraktal.app",
      dates: "Jun 2025 – Present",
      active: true,
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
      title: "Lumio",
      href: "https://github.com/sakkshm/lumio",
      dates: "Oct 2025",
      active: false,
      description:
        "AI-powered autonomous community maintainer that lives forever on the Permaweb. Designed for self-sustaining open-source projects.",
      technologies: ["TypeScript", "AI", "Arweave", "Permaweb"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/sakkshm/lumio",
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
        "Minimal ray tracer written from scratch in C++ featuring materials, lighting, and anti-aliasing — built for learning graphics fundamentals.",
      technologies: ["C++", "Computer Graphics", "Ray Tracing"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/sakkshm/tinyraytracer",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "",
    },
    {
      title: "MUN Website",
      href: "https://github.com/sakkshm/MUN-website",
      dates: "Mar 2025",
      active: false,
      description:
        "Dynamic website for KIET MUN handling 250+ registrations with Razorpay integration and JWT-based authentication.",
      technologies: ["JavaScript", "Node.js", "JWT", "Razorpay"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/sakkshm/MUN-website",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "",
    }
  ],

  hackathons: [
    {
      title: "PSB FinShield Hackathon, IIT Hyderabad",
      dates: "Sept 2025",
      location: "IIT Hyderabad",
      description:
        "Built a graph-based fraud detection and adaptive risk scoring engine for real-time authentication — Finalist (Top 72).",
      win: "Finalist",
      links: [],
    },
    {
      title: "World Computer Hacker League (ICP)",
      dates: "Sept 2025",
      location: "Online",
      description:
        "Developed Fraktal — a Zapier-like automation platform for Web3 using Azle & ICP — Regional Finalist (Asia).",
      win: "Finalist",
      links: [],
    },
    {
      title: "Agents of the Permaweb",
      dates: "Aug 2025",
      location: "Online",
      description:
        "Built a decentralized automation layer connecting Web2 APIs to the Permaweb — Finalist (Top 12).",
      win: "Finalist",
      links: [],
    },
    {
      title: "Surreal World Asset Builathon",
      dates: "June 2025",
      location: "Online",
      description:
        "Built a decentralized IP provenance & infringement detection using C2PA, watermarking, and Story Protocol to verify on-chain authenticity — Winner (IP Detection and Enforcement Track).",
      win: "Winner",
      links: [],
    },
  ],


};
