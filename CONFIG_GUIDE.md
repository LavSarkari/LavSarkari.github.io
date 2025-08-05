# Portfolio Configuration Guide 🚀

This guide shows you how to easily update your portfolio content without touching the code!

## 📁 Configuration File Location
All dynamic content is managed in: `src/config/portfolio.ts`

## ⚙️ How to Update Content

### 1. Personal Information
```typescript
personal: {
  name: "Your Name",                    // Changes hero title
  title: "Your Title | Role | Status",  // Changes hero subtitle  
  tagline: "Your personal tagline",     // Changes hero description
  // ... rest of personal info
}
```

### 2. Journey/Roadmap 🗺️
```typescript
journey: {
  title: "🚀 My Journey Title",        // Main roadmap title (easy to change!)
  subtitle: "Optional subtitle",       // Shows under main title
  phases: [
    {
      phase: "Phase 1",                // Phase number/name
      title: "Phase Title",            // Phase title
      description: "What you're doing", // Phase description  
      status: "current",               // "current", "completed", "upcoming"
      target: "2024-2025",            // Time period
      icon: "shield"                   // Icon type: shield, zap, target, brain, rocket
    },
    // Add more phases here...
  ]
}
```

**🎯 Status Options:**
- `"current"` - Shows **"In Progress"** badge (blue) with pulsing animation
- `"completed"` - Shows **"Completed"** badge (green) 
- `"upcoming"` - Shows **"Upcoming"** badge (gray)

### 3. Skills & Focus Areas
```typescript
skills: [
  "Python", "JavaScript", "Your Skills"  // Updates skill tags
],

currentFocus: [
  "What you're working on now",          // Updates current focus list
  "Another focus area"
]
```

### 4. Social Links
```typescript
social: {
  github: "https://github.com/username",
  twitter: "https://twitter.com/username", 
  linkedin: "https://linkedin.com/in/username",
  blog: "https://your-blog.com"
}
```

### 5. Contact Section
```typescript
contact: {
  title: "📬 Your Contact Title",
  description: "Your contact description",
  availability: "Your status message",
  methods: [
    {
      name: "Platform",
      value: "Username", 
      href: "URL",
      description: "Description",
      color: "bg-color-class",
      icon: "icon-name"  // github, twitter, linkedin, discord
    }
  ]
}
```

### 6. Navigation
```typescript
navigation: {
  logo: "Your Logo Text",
  blogName: "Your Blog Name",  // Changes nav button text
  blogUrl: "https://your-blog.com"
}
```

## 🎯 Quick Updates Examples

### Change Journey Title
```typescript
// From: "🚀 My Cybersecurity Journey"  
// To: "🎯 My Hacking Path"
journey: {
  title: "🎯 My Hacking Path"
}
```

### 🔥 Update Active Phase (Most Common!)
```typescript
// When you complete Phase 1 and start Phase 2:
phases: [
  {
    phase: "Phase 1",
    title: "Academic Foundation",
    status: "completed",    // ✅ Change from "current" to "completed"
    // ... rest stays same
  },
  {
    phase: "Phase 2", 
    title: "Practical Experience",
    status: "current",      // ✅ Change from "upcoming" to "current"  
    // ... rest stays same
  }
  // ... other phases stay "upcoming"
]
```

### Add New Phase
```typescript
journey: {
  phases: [
    // ... existing phases
    {
      phase: "Phase 6",
      title: "Industry Leadership", 
      description: "Leading cybersecurity initiatives",
      status: "upcoming",
      target: "2030+",
      icon: "rocket"
    }
  ]
}
```

### Update Skills
```typescript
skills: [
  "Python", "Go", "Rust",      // Add new languages
  "Penetration Testing",       // Add new skills
  "Cloud Security"             // Update as you learn
]
```

### Change Blog Link
```typescript
navigation: {
  blogName: "MyThoughts",                    // Button text
  blogUrl: "https://thoughts.yourdomain.com" // URL
}
```

## 🔧 Available Icons

### Journey Phase Icons:
- `"shield"` - Shield icon (security/foundation) 
- `"zap"` - Lightning bolt (energy/speed)
- `"target"` - Target icon (goals/precision)
- `"brain"` - Brain icon (learning/intelligence)
- `"rocket"` - Rocket icon (growth/launch)

### Contact Method Icons:
- `"github"` - GitHub icon
- `"twitter"` - Twitter/X icon  
- `"linkedin"` - LinkedIn icon
- `"discord"` - Discord icon

## 💡 Pro Tips

1. **Journey Title**: The most common change! Update `journey.title` to match your current goals
2. **Phase Status**: Mark phases as "completed" when done, "current" for active work
3. **Skills**: Keep this updated as you learn new technologies
4. **Contact**: Update availability status for current opportunities
5. **Blog Name**: Change this if you rebrand your blog

## 🚫 What NOT to Change

- Don't modify the structure/keys of the config object
- Don't change icon names to non-existent icons
- Keep status values as: "current", "completed", or "upcoming"

## 🔄 After Making Changes

1. Save the `portfolio.ts` file
2. Restart your dev server: `npm run dev`
3. Check the website to see your updates!

---

That's it! Now you can update your entire portfolio by just editing one config file. No more digging through component code! 🎉