'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import PortalEffect from '@/components/PortalEffect'
import HackerTerminal from '@/components/HackerTerminal'
import noiseDataURL from '@/lib/noiseDataURL'

export default function NotFound() {
  useEffect(() => {
    console.log('%c🕵️‍♂️ Detective Mode Activated!', 'color: #ff66cc; font-size: 20px; font-weight: bold;');
    console.log('%cLooks like you found a secret portal to nowhere...', 'color: cyan; font-size: 16px;');
    console.log('%cFlag{404_Explorer_Found_Nothing}', 'color: #ff66cc; font-size: 12px; font-style: italic;');
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 relative overflow-hidden">
      {/* Portal animation with particles */}
      <PortalEffect />
      
      {/* Static glowing portal */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl animate-pulse" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 blur-2xl animate-ping" />
      </div>

      <motion.div
        className="relative z-10 text-center space-y-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          404
        </motion.h1>
        
        <motion.h2
          className="text-3xl font-semibold text-white/90"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Page Not Found
        </motion.h2>
        
        <motion.p
          className="text-lg text-white/60 mb-8"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4 }}
        >
          This page has vanished into the void.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <HackerTerminal />
        </motion.div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <Link 
            href="/"
            className="inline-block px-6 py-3 text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-medium 
                     hover:from-green-500 hover:to-emerald-500 transition-all duration-200 
                     shadow-lg hover:shadow-green-500/25 hover:-translate-y-1 border border-green-400/20"
          >
            {"<"} Return to safety 🏠
          </Link>
        </motion.div>
      </motion.div>

      {/* Glitch effect overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay" 
        style={{ backgroundImage: `url(${noiseDataURL})` }}
      />
    </div>
  )
}
