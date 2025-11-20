import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Hero = () => {
  const words = ['React Developer','Backend Developer','MERN Developer']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const typingSpeed = isDeleting ? 100 : 150
    
    let timer
    
    if (!isDeleting && currentText.length === currentWord.length) {
      // Finished typing, wait then start deleting
      timer = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
    } else if (isDeleting && currentText.length === 0) {
      // Finished deleting, move to next word
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    } else {
      // Continue typing or deleting
      timer = setTimeout(() => {
        if (!isDeleting) {
          setCurrentText(currentWord.substring(0, currentText.length + 1))
        } else {
          setCurrentText(currentWord.substring(0, currentText.length - 1))
        }
      }, typingSpeed)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [currentText, isDeleting, currentWordIndex])
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28 lg:h-screen lg:pt-0 lg:pb-0 lg:flex lg:items-center"
      id="home"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 right-0 h-64 w-64 sm:h-80 sm:w-80 bg-primary/20 dark:bg-primary/30 rounded-full blur-3xl opacity-50"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-0 left-0 h-64 w-64 sm:h-80 sm:w-80 bg-primary/20 dark:bg-primary/30 rounded-full blur-3xl opacity-50"
        />
      </div>

      <div className="mx-4 md:mx-20">
      <div className="container mx-auto px-4 sm:px-6 lg:h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center my-8 lg:my-0 lg:h-full">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 text-center lg:text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-slate-900 dark:text-white"
            >
              Hi, I'm Rahul Prajapati,<br />
              <span className="text-slate-900 dark:text-white">hire me as...</span>
              <br />
              <span className="text-primary text-5xl sm:text-6xl lg:text-7xl inline-flex items-center">
                {currentText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="inline-block w-0.5 h-12 sm:h-14 lg:h-16 bg-primary ml-1"
                />
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              A Full-Stack Developer specializing in React, Node.js, MongoDB, UI/UX Design, and API Integration — building fast, scalable, and user-focused web applications.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity shadow-lift"
              >
                <span className="truncate">Hire Me</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors shadow-soft"
              >
                <span className="truncate">Download Resume</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image with Rotating Tech Stack */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex w-full items-center justify-center min-h-[450px] sm:min-h-[500px] md:min-h-[450px] lg:min-h-[500px] my-8 lg:my-0"
          >
            <div className="relative w-full max-w-[600px] sm:max-w-[700px] md:max-w-[800px] lg:max-w-[900px] aspect-square overflow-visible">
              {/* Center Profile Image */}
              <div className="absolute inset-[20%] flex items-center justify-center">
                  {/* Green Shadow/Glow Effect */}
                  <div className="absolute inset-0 bg-primary/30 dark:bg-white/30 rounded-full blur-3xl scale-110 animate-pulse"></div>
                  <div className="absolute inset-0 bg-primary/20 dark:bg-white/20 rounded-full blur-2xl scale-105"></div>
                  <img 
                    src="/images/about-rahul-image.png" 
                    alt="Rahul Prajapati - Full-Stack Developer"
                    className="relative w-full h-full object-cover rounded-full border-2 border-primary/50 shadow-[0_0_60px_rgba(29,191,115,0.5)] dark:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
                  />
              </div>
              
              {/* React - Top Left */}
              <div className="absolute top-[5%] left-[20%] flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:size-20 p-2 sm:p-3 bg-green-100/80 dark:bg-green-900/50 border-2 border-primary/50 rounded-full shadow-lg animate-float">
                <img 
                  alt="React" 
                  className="w-full h-full rounded-full object-contain" 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                />
              </div>

              {/* Node.js - Bottom Right */}
              <div className="absolute bottom-[15%] right-[5%] flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:size-14 p-2 sm:p-2.5 bg-green-100/80 dark:bg-green-900/50 border-2 border-primary/50 rounded-full shadow-lg animate-float" style={{ animationDelay: '0.8s' }}>
                <img 
                  alt="Node.js" 
                  className="w-full h-full rounded-full object-contain" 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                />
              </div>

              {/* MongoDB - Bottom Center */}
              <div className="absolute bottom-[0%] right-[35%] flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:size-20 p-2 sm:p-3 bg-green-100/80 dark:bg-green-900/50 border-2 border-primary/50 rounded-full shadow-lg animate-float" style={{ animationDelay: '0.4s' }}>
                <img 
                  alt="MongoDB" 
                  className="w-full h-full rounded-full object-contain" 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                />
              </div>

              {/* Tailwind CSS - Bottom Left */}
              <div className="absolute bottom-[5%] left-[10%] flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 md:size-16 p-2 bg-green-100/80 dark:bg-green-900/50 border-2 border-primary/50 rounded-full shadow-lg animate-float" style={{ animationDelay: '1.2s' }}>
                <img 
                  alt="Tailwind CSS" 
                  className="w-full h-full rounded-full object-contain" 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                />
              </div>

              {/* MySQL - Top Right */}
              <div className="absolute top-[10%] right-[10%] flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 md:size-16 p-2 bg-green-100/80 dark:bg-green-900/50 border-2 border-primary/50 rounded-full shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <img 
                  alt="MySQL" 
                  className="w-full h-full rounded-full object-contain" 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                />
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

