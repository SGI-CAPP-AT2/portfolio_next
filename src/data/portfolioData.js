export const personalInfo = {
  name: "Shubham Ingale",
  role: "Computer Science & AI Engineer",
  subheading: "BTech Student at VIT Pune | AI & Software Developer",
  bio: "Passionate engineer with experience building production-ready Spring Boot APIs, Agentic AI systems, cross-platform Flutter apps for Google Summer of Code, and full-stack cloud applications.",
  email: "shubhamingale779@gmail.com",
  location: "Pune, India",
  github: "https://github.com/SGI-CAPP-AT2",
  linkedin: "https://www.linkedin.com/in/shgi/",
  resumeUrl: "/resume.tex",
  highlights: [
    { label: "JPMorgan Chase & Co.", badge: "Summer Intern" },
    { label: "Google Summer of Code", badge: "CCExtractor Contributor" },
    { label: "CGPA 9.27", badge: "VIT Pune" },
  ]
};

export const experiences = [
  {
    company: "JPMorgan Chase & Co.",
    role: "Summer Intern",
    location: "Pune, India",
    period: "June 2026 - July 2026",
    color: "from-blue-500 to-indigo-600",
    bullets: [
      "Developed production-ready backend APIs using Spring Boot for a live application.",
      "Developed an Agentic AI project utilizing tool calling and LLM-driven multi-step workflows.",
      "Provisioned and managed cloud infrastructure (EC2, S3, IAM) directly via the AWS Console."
    ],
    tech: ["React","Spring Boot", "Java", "Agentic AI", "LLMs", "AWS", "REST APIs"]
  },
  {
    company: "Google Summer of Code",
    role: "Contributor | CCExtractor",
    location: "Remote",
    period: "May 2025 - Sept 2025",
    color: "from-amber-500 to-emerald-600",
    bullets: [
      "Built cross-platform mobile features for the Taskwarrior open-source app using Flutter.",
      "Automated end-to-end CI/CD pipelines to build and publish release builds to the F-Droid repository.",
      "Embedded a Rust library into Mobile App for high-performance mobile execution."
    ],
    tech: ["Flutter", "Dart", "Rust", "CI/CD", "F-Droid", "GitHub Actions", "Open Source"]
  }
];

export const projects = [
  {
    title: "Gateway & Token Issuer",
    subtitle: "Automated Transit Ticketing System",
    description: "Aimed to solve long wait times and manual ticketing inefficiencies in public transport by automating token distribution software. Connected hardware components with web interfaces for seamless real-time operation.",
    tech: ["React", "Firebase", "Google Cloud Functions", "Arduino", "IoT"],
    github: "https://github.com/SGI-CAPP-AT2/GNTI-app",
    featured: true,
    accent: "from-cyan-500 to-blue-600"
  },
  {
    title: "P2P File Sharing Android App",
    subtitle: "Offline High-Speed Mobile Data Transfer",
    description: "Aimed to solve high data costs and slow transfers when sharing files locally without internet. Enabled direct mobile peer-to-peer file sharing leveraging Wi-Fi Direct technology.",
    tech: ["Java", "Android SDK", "TCP", "Wi-Fi Direct"],
    github: "https://github.com/SGI-CAPP-AT2/FileShareApp",
    featured: true,
    accent: "from-emerald-500 to-teal-600"
  },
  {
    title: "Code Highlight & PDF CLI",
    subtitle: "Developer Terminal Source Formatting Tool",
    description: "Aimed to solve the difficulty of viewing and printing unformatted source code directly from terminal environments. Built a developer CLI utility with automatic syntax highlighting.",
    tech: ["JavaScript", "Node.js", "Express", "CLI Utility"],
    github: "https://github.com/SGI-CAPP-AT2/chnp-cli",
    featured: true,
    accent: "from-purple-500 to-pink-600"
  }
];

export const skillCategories = [
  {
    category: "Languages",
    skills: ["Java", "C++", "Node.js", "Go", "Dart", "Python", "JavaScript", "SQL"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Flutter", "Spring Boot", "Express.js", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "AWS", "GitHub Actions", "Android Studio", "VS Code", "Bruno", "Docker"]
  },
  {
    category: "Databases",
    skills: ["SQL", "MongoDB", "SQLite", "Firebase Firestore"]
  }
];

export const education = [
  {
    institution: "Vishwakarma Institute of Technology (VIT)",
    degree: "BTech in Computer Science and Engineering (AI)",
    period: "Sept 2024 - May 2027",
    location: "Pune, India",
    score: "CGPA: 9.27",
    badge: "BTech"
  },
  {
    institution: "Ajeenkya DY Patil School of Engineering",
    degree: "Diploma in Computer Engineering",
    period: "Sept 2021 - May 2024",
    location: "Pune, India",
    score: "Percentage: 93.2%",
    badge: "Diploma"
  }
];

export const certifications = [
  {
    title: "React Web Development Training",
    issuer: "Internshala Trainings",
    link: "https://trainings.internshala.com/s/v/3076764/022c73f8",
    skills: ["React.js", "Frontend Development", "Component Architecture", "JSX & State"]
  },
  {
    title: "IBM Mainframe Developer Specialization",
    issuer: "IBM & LearnQuest (Coursera)",
    link: "https://www.coursera.org/account/accomplishments/specialization/CDZ3SF7AITDX",
    skills: ["IBM Mainframe", "Enterprise Systems", "COBOL / System Architecture"]
  }
];
