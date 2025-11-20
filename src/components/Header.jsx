import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background-light/95 dark:bg-background-dark/95 shadow-soft'
          : 'bg-background-light/80 dark:bg-background-dark/80'
      } backdrop-blur-sm`}
    >
      <div className="mx-4 md:mx-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <div className="size-6 text-primary">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="font-heading text-lg font-bold tracking-[-0.015em] text-slate-900 dark:text-white">
              Rahul Prajapati
            </h2>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-6 lg:gap-9">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>
          </nav>

          {/* Theme Toggle & CTA */}
          <div className="flex items-center gap-4 ml-6 lg:ml-8">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="px-2 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <span className="material-symbols-outlined text-xl">light_mode</span>
              ) : (
                <span className="material-symbols-outlined text-xl">dark_mode</span>
              )}
            </motion.button>

            {/* Desktop CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              <span className="truncate">Hire Me</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-900 dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background-light dark:bg-background-dark border-b border-slate-200/80 dark:border-slate-800/80"
          >
            <nav className="mx-4 md:mx-20">
              <div className="container mx-auto px-4 sm:px-6 py-4 space-y-3">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Hire Me
              </motion.button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header

