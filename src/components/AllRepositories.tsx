'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, GitFork, ExternalLink, Search } from 'lucide-react'
import { Repository } from '@/lib/github'

export default function AllRepositories() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [filteredRepos, setFilteredRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('')

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('/api/github/repos')
        const allRepos = await response.json()
        setRepos(allRepos)
        setFilteredRepos(allRepos)
      } catch (error) {
        console.error('Error fetching repositories:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  useEffect(() => {
    let filtered = repos

    if (searchTerm) {
      filtered = filtered.filter(repo =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    if (selectedLanguage) {
      filtered = filtered.filter(repo =>
        repo.primaryLanguage?.name === selectedLanguage
      )
    }

    setFilteredRepos(filtered)
  }, [repos, searchTerm, selectedLanguage])

  const languages = Array.from(
    new Set(repos.map(repo => repo.primaryLanguage?.name).filter(Boolean))
  ).sort()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
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
      <section className="section-padding bg-gray-50 dark:bg-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">📂 All Repositories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="card p-4 animate-pulse">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-full mb-1"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-2/3 mb-3"></div>
                <div className="flex justify-between items-center">
                  <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-16"></div>
                  <div className="flex gap-3">
                    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-8"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-8"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-gray-50 dark:bg-zinc-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          📂 All Repositories
        </motion.h2>

        <motion.div 
          className="flex flex-col md:flex-row gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search repositories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          >
            <option value="">All Languages</option>
            {languages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredRepos.map((repo) => (
            <motion.div
              key={repo.id}
              className="card p-4 group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -3 }}
              onClick={() => window.open(repo.url, '_blank')}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold group-hover:text-blue-500 transition-colors truncate">
                  {repo.name}
                </h3>
                <ExternalLink 
                  size={16} 
                  className="text-gray-400 group-hover:text-blue-500 transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0 ml-2" 
                />
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                {repo.description || 'No description available'}
              </p>

              <div className="flex justify-between items-center text-sm">
                {repo.primaryLanguage && (
                  <div className="flex items-center gap-1">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: repo.primaryLanguage.color }}
                    />
                    <span className="text-gray-600 dark:text-gray-400 text-xs">
                      {repo.primaryLanguage.name}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Star size={14} />
                    <span className="text-xs">{repo.stargazerCount}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={14} />
                    <span className="text-xs">{repo.forkCount}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredRepos.length === 0 && !loading && (
          <div className="text-center text-gray-600 dark:text-gray-400 mt-8">
            <p>No repositories found matching your criteria.</p>
          </div>
        )}

        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredRepos.length} of {repos.length} repositories
          </p>
        </motion.div>
      </div>
    </section>
  )
}