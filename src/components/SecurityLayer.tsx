'use client'

import { useEffect } from 'react'

export default function SecurityLayer() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Disable common keyboard shortcuts (optimized)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable F12 (Developer Tools)
      if (e.key === 'F12') {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+Shift+I (Developer Tools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault()
        return false
      }

      // Disable PrintScreen
      if (e.key === 'PrintScreen') {
        e.preventDefault()
        return false
      }
    }

    // Disable image drag and drop only
    const handleDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault()
        return false
      }
    }

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('dragstart', handleDragStart)

    // Additional security measures
    document.addEventListener('keyup', (e) => {
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('')
      }
    })

    // Cleanup function
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('dragstart', handleDragStart)
    }
  }, [])

  useEffect(() => {
    // Disable console access
    const devtools = {
      open: false,
    }

    const threshold = 160

    setInterval(() => {
      if (
        window.outerHeight - window.innerHeight > threshold ||
        window.outerWidth - window.innerWidth > threshold
      ) {
        if (!devtools.open) {
          devtools.open = true
          console.clear()
          console.log('%cAccess Denied! 🚫', 'color: red; font-size: 30px; font-weight: bold;')
          console.log('%cThis site is protected against unauthorized access.', 'color: orange; font-size: 16px;')
        }
      } else {
        devtools.open = false
      }
    }, 500)

    // Console warning
    console.log('%cSTOP! ⚠️', 'color: red; font-size: 50px; font-weight: bold;')
    console.log('%cThis is a browser feature intended for developers. If someone told you to copy-paste something here, it\'s probably a scam.', 'color: red; font-size: 16px;')
    console.log('%cBy LavSarkari - Ethical Hacker 🔐', 'color: blue; font-size: 14px;')
  }, [])

  return null
}