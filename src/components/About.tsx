'use client'

import { motion } from 'framer-motion'
import { Target, Zap, Shield, Brain, Rocket } from 'lucide-react'
import { portfolioConfig } from '@/config/portfolio'

// Icon mapping for dynamic icons
const iconMap = {
  shield: Shield,
  zap: Zap,
  target: Target,
  brain: Brain,
  rocket: Rocket,
}

export default function About() {
  const { personal, skills, currentFocus, journey } = portfolioConfig
  
  // Calculate progress
  const completedPhases = journey.phases.filter(p => p.status === 'completed').length
  const totalPhases = journey.phases.length
  const progressPercentage = (completedPhases / totalPhases) * 100

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          👨‍💻 About Me
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              {personal.bio.intro}
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              {personal.bio.philosophy}
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-xl opacity-20"></div>
            <div className="relative bg-white dark:bg-zinc-800 p-6 rounded-xl border border-gray-200 dark:border-zinc-700">
              <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {currentFocus.map((focus, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {focus}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">{journey.title}</h3>
          {journey.subtitle && (
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">{journey.subtitle}</p>
          )}
          
          {/* Progress Indicator */}
          <div className="max-w-md mx-auto mb-12">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {completedPhases}/{totalPhases} Phases
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div 
                className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${progressPercentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full hidden lg:block"></div>
            
            <div className="space-y-8">
              {journey.phases.map((phase, index) => {
                const Icon = iconMap[phase.icon as keyof typeof iconMap] || Shield
                return (
                  <motion.div
                    key={phase.phase}
                    className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex-1 max-w-md">
                      <div className={`card p-6 ${phase.status === 'current' ? 'ring-2 ring-blue-500' : ''}`}>
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className={`${phase.status === 'current' ? 'text-blue-500' : 'text-gray-500'}`} size={24} />
                          <div>
                            <h4 className="font-semibold text-lg">{phase.phase}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{phase.target}</p>
                          </div>
                        </div>
                        <h5 className="font-semibold mb-2">{phase.title}</h5>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{phase.description}</p>
                        
                        {/* Dynamic Status Badges */}
                        {phase.status === 'current' && (
                          <div className="mt-3 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium inline-flex items-center gap-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            In Progress
                          </div>
                        )}
                        
                        {phase.status === 'completed' && (
                          <div className="mt-3 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs font-medium inline-flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Completed
                          </div>
                        )}
                        
                        {phase.status === 'upcoming' && (
                          <div className="mt-3 px-3 py-1 bg-gray-100 dark:bg-gray-700/30 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium inline-block">
                            Upcoming
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="relative lg:block hidden">
                      <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                        phase.status === 'current' 
                          ? 'border-blue-500 bg-blue-500 shadow-lg shadow-blue-500/25' 
                          : phase.status === 'completed'
                          ? 'border-green-500 bg-green-500 shadow-lg shadow-green-500/25'
                          : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-800'
                      }`}>
                        <Icon className={`transition-colors duration-300 ${
                          phase.status === 'current' || phase.status === 'completed' 
                            ? 'text-white' 
                            : 'text-gray-500'
                        }`} size={20} />
                        
                        {/* Pulsing ring for current phase */}
                        {phase.status === 'current' && (
                          <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-ping opacity-30"></div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex-1 max-w-md lg:block hidden"></div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}