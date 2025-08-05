'use client'

import { useEffect, useState } from 'react'

interface Section {
  id: string
  emoji: string
}

const sections: Section[] = [
  { id: 'hero', emoji: '👨‍💻' },
  { id: 'projects', emoji: '🚀' },
  { id: 'contact', emoji: '📬' }
]

export default function DynamicFavicon() {
  const [currentEmoji, setCurrentEmoji] = useState('👨‍💻')

  useEffect(() => {
    // Create or get favicon link
    let link = document.querySelector("link[rel='icon']") as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link') as HTMLLinkElement
      link.rel = 'icon'
      document.head.appendChild(link)
    }

    // Update favicon function
    const updateFavicon = (emoji: string) => {
      const svg = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${emoji}</text></svg>`
      ;(link as HTMLLinkElement).href = svg
      setCurrentEmoji(emoji)
    }

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = sections.find(s => s.id === entry.target.id)
            if (section) {
              updateFavicon(section.emoji)
            }
          }
        })
      },
      { threshold: 0.5 } // Trigger when section is 50% visible
    )

    // Observe all sections
    sections.forEach(section => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    // DevTools detection
    const detectDevTools = () => {
      if (window.outerWidth - window.innerWidth > 100) {
        updateFavicon('👾')
      } else {
        // Restore section emoji
        const visibleSection = sections.find(section => {
          const element = document.getElementById(section.id)
          if (!element) return false
          const rect = element.getBoundingClientRect()
          return rect.top >= 0 && rect.bottom <= window.innerHeight
        })
        if (visibleSection) {
          updateFavicon(visibleSection.emoji)
        }
      }
    }

    window.addEventListener('resize', detectDevTools)

    // Set initial favicon
    updateFavicon('👨‍💻')

    // Cleanup
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', detectDevTools)
    }
  }, [])

  // Component doesn't render anything
  return null
}
