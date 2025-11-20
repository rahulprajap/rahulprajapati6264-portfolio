import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const ImportantUpdates = () => {
  const { darkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(() => {
    const saved = localStorage.getItem('importantUpdatesClosed')
    return saved !== 'true'
  })

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('importantUpdatesClosed', 'true')
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('bannerClosed'))
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`${
            darkMode ? 'bg-[#112119]' : 'bg-primary'
          } text-white fixed top-0 left-0 right-0 z-[60] transition-colors duration-300`}
        >
          <div className="container mx-auto px-6 py-2.5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 text-center">
                <p className="text-sm font-medium">
                  <span className="font-bold">Now Available!</span> I’m currently open for new freelance projects. Let’s build something amazing together.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-4">
                <button
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={handleClose}
                  aria-label="Close banner"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ImportantUpdates

