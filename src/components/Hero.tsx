'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Download, Instagram } from 'lucide-react'
import ThreeBackground from './ThreeBackground'
import { portfolioConfig } from '@/config/portfolio'

export default function Hero() {
  const { personal, social } = portfolioConfig

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ThreeBackground />
      
      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          {personal.name}
        </motion.h1>
        
        <motion.h2 
          className="text-2xl md:text-3xl font-semibold text-zinc-300 mb-4"
          variants={itemVariants}
        >
          {personal.title}
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {personal.tagline}
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.a
            href="/resume.pdf"
            download
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download Resume
          </motion.a>
          
          <motion.a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            GitHub
          </motion.a>
          
          <motion.a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={20} />
            LinkedIn
          </motion.a>

          <motion.a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram size={20} />
            Instagram
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}