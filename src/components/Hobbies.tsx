'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { portfolioConfig } from '@/config/portfolio'

interface Hobby {
  name: string
  description: string
  icon: string
  link: string | null
}

export default function Hobbies() {
  const hobbies: Hobby[] = portfolioConfig.hobbies || []

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

  if (!hobbies.length) return null

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <motion.h3 
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        🎯 Hobbies & Interests
      </motion.h3>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            whileTap={{ y: 0 }}
            className="card p-6 group cursor-pointer relative overflow-hidden"
            {...(hobby.link && {
              onClick: () => window.open(hobby.link!, '_blank', 'noopener,noreferrer')
            })}
          >
            {/* Hover gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg group-hover:scale-110 transition-transform duration-200">
              {hobby.icon}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-xl group-hover:text-blue-500 transition-colors duration-200">
                  {hobby.name}
                </h4>
                {hobby.link && (
                  <ExternalLink 
                    size={16} 
                    className="text-gray-400 group-hover:text-blue-500 transition-all duration-200 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1" 
                  />
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {hobby.description}
              </p>
              {hobby.link && (
                <div className="mt-3 text-sm text-blue-500 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  View more →
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
