'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const messages = [
  { text: "Accessing your IP...", duration: 800 },
  { text: "Decrypting cookies...", duration: 1000 },
  { text: "Uploading to LavSarkari.me 🔥", duration: 1200 }
]

export default function HackerTerminal() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [showFinalMessage, setShowFinalMessage] = useState(false)
  const [showLoadingBar, setShowLoadingBar] = useState(true)

  useEffect(() => {
    const sequence = async () => {
      for (let i = 0; i < messages.length; i++) {
        await new Promise(resolve => setTimeout(resolve, messages[i].duration))
        setCurrentMessage(i + 1)
      }
      await new Promise(resolve => setTimeout(resolve, 800))
      setShowLoadingBar(false)
      setShowFinalMessage(true)
    }

    sequence()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md p-4 rounded-lg bg-black/90 border border-green-500/30 font-mono text-sm overflow-hidden"
    >
      <div className="flex items-center gap-2 mb-3 opacity-60">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      <div className="space-y-2">
        {messages.slice(0, currentMessage).map((msg, i) => (
          <div key={i} className="text-green-500">
            <span className="text-green-300">$</span> {msg.text}
          </div>
        ))}

        {showLoadingBar && (
          <motion.div 
            className="h-1 bg-green-900 mt-3 overflow-hidden"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3 }}
          >
            <motion.div
              className="h-full bg-green-500"
              animate={{
                x: ["-100%", "100%"]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        )}

        {showFinalMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="pt-2 text-purple-400"
          >
            <span className="text-purple-300">{">"}</span> Just kidding. Or am I? 😈
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
