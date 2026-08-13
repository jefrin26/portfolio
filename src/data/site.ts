export const site = {
  name: "Jefrin",
  handle: "jefrin",
  role: "Network Engineer",
  tagline:
    "Final-year B.Tech IT student engineering networks that stay up — learning Cisco IOS, automating with Python, and building apps with Flutter.",
  bio: [
    "Final-year B.Tech Information Technology student with 1.4 years of internship experience across R&D and software development. My lab is my playground — Cisco Packet Tracer topologies, IOS configs, and breaking things until they work.",
    "Currently working toward my CCNA while building a foundation in routing, switching, and network automation. When I'm not in the lab, you'll find me writing Flutter apps or chasing a red car on a track day.",
  ],
  location: "Kanyakumari, TN",
  email: "jefrin.j@outlook.com",
  github: "https://github.com/jefrin26",
  linkedin: "https://www.linkedin.com/in/jefrin--/",
  availability: "Open to network roles & internships",
  uptime: "99.9%",
  est: "B.TECH IT · FINAL YEAR",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certs", href: "#certs" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const stats = [
  { label: "internship_years", value: "1.4", unit: "yrs" },
  { label: "certifications", value: "1", unit: "cnt" },
  { label: "network_uptime", value: "99.9", unit: "%" },
  { label: "always_on", value: "24/7", unit: "h" },
] as const;

export const skills = [
  {
    id: "routing_switching",
    label: "Routing & Switching",
    icon: "router",
    items: ["Cisco IOS", "Cisco Packet Tracer", "VLAN / STP", "OSPF", "Subnetting"],
  },
  {
    id: "languages",
    label: "Languages & Frameworks",
    icon: "terminal",
    items: ["Python", "Flutter", "Dart", "Bash"],
  },
  {
    id: "platforms",
    label: "Platforms & Tools",
    icon: "cloud",
    items: ["Linux", "Git / GitHub", "VS Code"],
  },
  {
    id: "learning",
    label: "Currently Learning",
    icon: "shield",
    items: ["BGP", "Network Automation", "Ansible", "Wireshark"],
  },
] as const;

export const certs = [
  {
    name: "CCNA",
    issuer: "Cisco",
    year: "2025",
    status: "in-progress",
  },
  {
    name: "B.Tech — Information Technology",
    issuer: "Final year",
    year: "2026",
    status: "in-progress",
  },
] as const;

export const projects = [
  {
    id: "camber-f1",
    name: "Camber — F1 Tire Health Dashboard",
    command: "python ingest.py --telemetry",
    summary:
      "Real-time F1 tire health dashboard that ingests live telemetry to model tire degradation, visualize thermal windows, and predict optimal pit strategies. Built for fans, by fans.",
    tags: ["Python", "Telemetry", "Data Modeling", "Dashboards"],
    links: { demo: "#", repo: "https://github.com/jefrin26/camber-f1" },
  },
  {
    id: "react-quiz-app",
    name: "React Quiz Engine",
    command: "npm run dev",
    summary:
      "Dynamic, JSON-driven quiz engine built with React — create and customize quizzes by editing a single data file, no coding required.",
    tags: ["React", "JavaScript", "JSON", "Templates"],
    links: { demo: "#", repo: "https://github.com/jefrin26/react-quiz-app" },
  },
] as const;

export const experience = [
  {
    hop: 1,
    role: "R&D & Software Development Intern",
    company: "Flutter Frog Software Solutions",
    period: "2024 — 2025",
    points: [
      "Worked R&D and software development in parallel at the same company — prototyping ideas and shipping features.",
      "Built with Flutter, Python, and JavaScript while learning real development workflows end to end.",
    ],
  },
  {
    hop: 2,
    role: "Final Year B.Tech IT",
    company: "CCNA in progress",
    period: "2025 — 2026",
    points: [
      "Deep-diving Cisco IOS, routing, and switching in Packet Tracer labs.",
      "Building this portfolio to land the first network engineering role.",
    ],
  },
] as const;