# Lav Sarkari - Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring Three.js animations, GitHub API integration, and a sleek dark/light theme toggle.

## 🚀 Features

- **Hero Section** with CSS-animated gradient background
- **Dynamic GitHub Integration** - Fetches pinned and all repositories live
- **Responsive Design** - Optimized for all devices
- **Dark/Light Mode** - Theme toggle with persistent preference
- **Smooth Animations** - Powered by Framer Motion
- **Modern Stack** - Next.js 15, TypeScript, Tailwind CSS
- **Dynamic Configuration** - Update content via single config file
- **Security Features** - Right-click protection, keyboard shortcuts disabled
- **Blur Morphism Navigation** - Aesthetic sticky navigation bar
- **Custom Cursor** - Interactive cursor effects
- **Loading Screen** - Smooth initial loading experience
- **Scroll Progress** - Visual scroll indicator
- **Back to Top** - Floating scroll-to-top button

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with @react-three/fiber
- **APIs**: GitHub GraphQL & REST API
- **Language**: TypeScript
- **Icons**: Lucide React

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/LavSarkari/lavsarkari.me.git
   cd lavsarkari.me
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:
   ```env
   GITHUB_TOKEN=your_github_personal_access_token
   NEXT_PUBLIC_GITHUB_USERNAME=LavSarkari
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── AllRepositories.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── PinnedProjects.tsx
│   ├── ThemeProvider.tsx
│   ├── ThemeToggle.tsx
│   └── ThreeBackground.tsx
└── lib/
    └── github.ts
```

## 🎨 Design Philosophy

Inspired by [hamishw.com](https://hamishw.com), this portfolio focuses on:
- **Minimalism** - Clean, uncluttered design
- **Performance** - Optimized loading and interactions
- **Accessibility** - WCAG compliant with proper contrast ratios
- **Mobile-First** - Responsive design from the ground up

## 🔧 Configuration

### GitHub Integration
The site uses both GitHub's GraphQL and REST APIs:
- **GraphQL API**: Fetches pinned repositories
- **REST API**: Fetches all public repositories

### Theme System
Custom theme provider with:
- System preference detection
- localStorage persistence
- Smooth transitions

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy with automatic CI/CD

### Environment Variables for Production
```env
GITHUB_TOKEN=your_token_here
NEXT_PUBLIC_GITHUB_USERNAME=LavSarkari
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Lav Sarkari**
- Website: [lavsarkari.me](https://lavsarkari.me)
- GitHub: [@LavSarkari](https://github.com/LavSarkari)
- LinkedIn: [lavsarkari](https://linkedin.com/in/lavsarkari)
- Email: mail@lavsarkari.me