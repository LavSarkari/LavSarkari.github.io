'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ExternalLink } from 'lucide-react'
import { PinnedRepository } from '@/lib/github'

export default function PinnedProjects() {
  const [repos, setRepos] = useState<PinnedRepository[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPinnedRepos() {
      try {
        const response = await fetch('/api/github/pinned')
        const pinnedRepos = await response.json()
        setRepos(pinnedRepos)
      } catch (error) {
        console.error('Error fetching pinned repositories:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPinnedRepos()
  }, [])

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

  if (loading) {
    return (
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">⭐ Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="card p-6 animate-pulse">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-3"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-2/3 mb-4"></div>
                <div className="flex justify-between items-center">
                  <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-20"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-16"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ⭐ Featured Projects
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {repos.map((repo) => (
            <motion.div
              key={repo.id}
              className="card p-6 group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => window.open(repo.url, '_blank')}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold group-hover:text-blue-500 transition-colors">
                  {repo.name}
                </h3>
                <ExternalLink 
                  size={18} 
                  className="text-gray-400 group-hover:text-blue-500 transition-colors opacity-0 group-hover:opacity-100" 
                />
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                {repo.description || 'No description available'}
              </p>

              <div className="flex justify-between items-center">
                {repo.primaryLanguage && (
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: repo.primaryLanguage.color }}
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {repo.primaryLanguage.name}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                  <Star size={16} />
                  <span className="text-sm">{repo.stargazerCount}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {repos.length === 0 && !loading && (
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>No pinned repositories found. Make sure to pin some repositories on GitHub!</p>
          </div>
        )}
      </div>
    </section>
  )
}