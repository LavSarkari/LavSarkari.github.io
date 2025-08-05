'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, User, Code, Mail, ExternalLink, Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { portfolioConfig } from '@/config/portfolio'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const { navigation } = portfolioConfig

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-xl bg-white/10 dark:bg-zinc-900/10 border-b border-white/20 dark:border-zinc-700/20 shadow-lg shadow-black/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('hero')}
          >
            {navigation.logo}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.button>
              )
            })}

            {/* Theme Toggle - Stylish Switch */}
            <motion.button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="relative flex items-center gap-2 p-1 rounded-full bg-gray-200 dark:bg-zinc-700 w-14 h-7 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <motion.div
                className="absolute w-5 h-5 bg-white dark:bg-zinc-800 rounded-full shadow-sm flex items-center justify-center"
                animate={{
                  x: theme === 'light' ? 2 : 32,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                {theme === 'light' ? (
                  <Sun size={12} className="text-yellow-500" />
                ) : (
                  <Moon size={12} className="text-blue-400" />
                )}
              </motion.div>
            </motion.button>

            {/* Blog Link */}
            <motion.a
              href={navigation.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={14} />
              {navigation.blogName}
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MobileMenu navItems={navItems} />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

function MobileMenu({ navItems }: { navItems: any[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { navigation } = portfolioConfig

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-zinc-600 dark:text-zinc-300"
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`} />
        </div>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border-b border-white/20 dark:border-zinc-700/20"
        >
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 p-2"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                )
              })}

              {/* Mobile Theme Toggle */}
              <motion.button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="flex items-center gap-3 p-2 text-zinc-600 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {theme === 'light' ? (
                  <Moon size={18} />
                ) : (
                  <Sun size={18} />
                )}
                <span className="font-medium">
                  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </span>
              </motion.button>

              <motion.a
                href={navigation.blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} />
                {navigation.blogName} Blog
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}