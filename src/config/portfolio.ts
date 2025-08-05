// Portfolio Configuration File
// Edit this file to update your portfolio content without touching the code

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Lav Sarkari",
    title: "Cybersecurity | Ethical Hacker | Vibe Coder | Student",
    tagline: "Learning how to break the internet ethically through vibe coding and automation.",
    location: "India",
    education: {
      current: "B.Tech CSE (2025)",
      completed: "Diploma in Information Technology (2024)"
    },
    bio: {
      intro: "Hey, I'm Lav - a cybersecurity enthusiast and ethical hacker from India. Currently pursuing B.Tech CSE (2025) after completing my Diploma in Information Technology (2024).",
      philosophy: "I build things through \"vibe coding\" - creating tools like meowcode (a meme programming language), Subdomain-Enumeration-Script, and hiddennexus. When I'm not coding, I'm diving into CTFs, bug bounties, and learning how to break the internet ethically."
    }
  },

  // Skills and Technologies
  skills: [
    "Python",
    "JavaScript", 
    "Bash",
    "Cybersecurity",
    "Ethical Hacking",
    "Bug Bounty",
    "CTFs",
    "Automation",
    "Kali Linux"
  ],

  // Current Focus Areas
  currentFocus: [
    "Vibe coding unique projects",
    "Active in CTFs and bug bounties", 
    "Completing B.Tech CSE (2025)",
    "Automation and scripting projects"
  ],

  // Social Links
  social: {
    github: "https://github.com/LavSarkari",
    twitter: "https://twitter.com/mrsarkarii", 
    linkedin: "https://linkedin.com/in/lavsarkari",
    instagram: "https://instagram.com/mrsarkariji",
    discord: "https://discord.gg/s38aVM3XTg",
    blog: "https://leaks.lavsarkari.me",
    email: "mail@lavsarkari.me" // Optional
  },

  // Journey/Roadmap Configuration
  journey: {
    title: "Cybersecurity Roadmap",
    subtitle: "Path from beginner to professional",
    phases: [
      {
        phase: "Phase 1",
        title: "Education",
        description: "Pursuing B.Tech in Computer Science and covering core subjects",
        status: "current",
        target: "2024-2025",
        icon: "shield"
      },
      {
        phase: "Phase 2",
        title: "Practical Learning",
        description: "CTFs, bug bounty, personal tools, open-source practice",
        status: "upcoming",
        target: "2025-2026",
        icon: "zap"
      },
      {
        phase: "Phase 3",
        title: "Industry Entry",
        description: "Applying for entry-level cybersecurity roles and certifications",
        status: "upcoming",
        target: "2026-2027",
        icon: "target"
      },
      {
        phase: "Phase 4",
        title: "Domain Focus",
        description: "Choosing a specialization in security (web, AD, red team, etc.)",
        status: "upcoming",
        target: "2027-2029",
        icon: "brain"
      },
      {
        phase: "Phase 5",
        title: "Career Growth",
        description: "Working in higher roles, contributing to the community",
        status: "upcoming",
        target: "2029+",
        icon: "rocket"
      }
    ]
  },
  // Contact Section
  contact: {
    title: "📬 Let's Connect",
    description: "Want to collaborate on some vibe coding, discuss CTFs, or talk about breaking things ethically? Hit me up! Always down to connect with fellow hackers and tech enthusiasts.",
    availability: "Open for collaborations & internships",
    methods: [
      {
        name: "GitHub",
        value: "LavSarkari", 
        href: "https://github.com/LavSarkari",
        description: "Check out my vibe coding projects and scripts",
        color: "bg-gray-800",
        icon: "github"
      },
      {
        name: "Twitter",
        value: "@mrsarkarii",
        href: "https://twitter.com/mrsarkarii", 
        description: "Follow my cybersecurity journey and random thoughts",
        color: "bg-blue-500",
        icon: "twitter"
      },
      {
        name: "LinkedIn", 
        value: "lavsarkari",
        href: "https://linkedin.com/in/lavsarkari",
        description: "Professional networking and career updates",
        color: "bg-blue-600", 
        icon: "linkedin"
      },
      {
        name: "Discord",
        value: "Join Community",
        href: "https://discord.gg/s38aVM3XTg",
        description: "Join my Discord for tech discussions and CTF talks", 
        color: "bg-purple-600",
        icon: "discord"
      }
    ]
  },

  // Featured Projects (Static content - GitHub API will override this)
  featuredProjects: {
    title: "⭐ Featured Projects",
    fallbackMessage: "Loading awesome projects from GitHub..."
  },

  // All Repositories 
  repositories: {
    title: "📂 All Repositories", 
    searchPlaceholder: "Search repositories...",
    languageFilter: "All Languages"
  },

  // Navigation
  navigation: {
    logo: "LavSarkari",
    blogName: "LavLeaks", // Your blog name
    blogUrl: "https://leaks.lavsarkari.me"
  },

  // SEO and Metadata
  seo: {
    title: "Lav Sarkari - Cybersecurity Student & Ethical Hacker",
    description: "Learning how to break the internet ethically through vibe coding, CTFs, and automation. B.Tech CSE student passionate about cybersecurity.",
    keywords: ["cybersecurity", "ethical hacking", "CTF", "bug bounty", "student", "vibe coding", "automation"],
    twitterHandle: "@mrsarkarii"
  }
}

// Quick update examples:
// 1. Change journey title: portfolioConfig.journey.title = "🎯 My Hacking Path"
// 2. Add new phase: Push to portfolioConfig.journey.phases array
// 3. Update skills: Modify portfolioConfig.skills array
// 4. Change tagline: Update portfolioConfig.personal.tagline
