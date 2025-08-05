'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Github, Linkedin, ExternalLink } from 'lucide-react'
import { portfolioConfig } from '@/config/portfolio'
import ContactForm from './ContactForm'

// Icon mapping for dynamic contact icons
const iconMap = {
  github: Github,
  twitter: MessageCircle,
  linkedin: Linkedin,
  discord: Mail,
}

export default function Contact() {
  const { contact } = portfolioConfig

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="contact" className="section-padding bg-gray-50 dark:bg-zinc-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {contact.title}
        </motion.h2>

        <motion.p 
          className="text-center text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {contact.description}
        </motion.p>

        {contact.form.enabled && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <ContactForm />
          </motion.div>
        )}

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contact.methods.map((method) => {
            const Icon = iconMap[method.icon as keyof typeof iconMap] || Mail
            return (
              <motion.a
                key={method.name}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 group cursor-pointer block"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`${method.color} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold group-hover:text-blue-500 transition-colors">
                        {method.name}
                      </h3>
                      <ExternalLink 
                        size={16} 
                        className="text-gray-400 group-hover:text-blue-500 transition-colors opacity-0 group-hover:opacity-100" 
                      />
                    </div>
                    
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {method.value}
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {method.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            {contact.availability}
          </div>
        </motion.div>

        <motion.div 
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Built with Next.js, Tailwind CSS, Framer Motion & Three.js
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © 2024 Lav Sarkari. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}