import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
    'HTML',
    'CSS',
    'Tailwind',
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'SQL'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 lg:py-32 bg-white dark:bg-slate-900/50"
      id="about"
    >
      <div className="mx-4 md:mx-20">
        <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center lg:items-start my-4 lg:my-10">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden"
            >
              <img 
                src="/images/about-rahul-image.png" 
                alt="Rahul Prajapati - About" 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-6 text-center lg:text-left flex-1"
          >
            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                About Me
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Get to know the person behind the code.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                A passionate developer creating seamless user experiences.
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
                I am a full-stack developer with a passion for building beautiful
                and functional web applications. With a strong foundation in both
                front-end and back-end technologies,I loves turning ideas into clean, 
                modern, and fully functional web applications. I work across both the 
                front end and back end, giving me the ability to take a project from 
                initial concept all the way to deployment.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              variants={itemVariants}
              className="flex gap-2.5 flex-wrap justify-center lg:justify-start"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{
                    duration: 0.3,
                    delay: 0.4 + index * 0.1,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 dark:bg-primary/30 px-4 border border-primary/30 dark:border-primary/40"
                >
                  <p className="text-primary text-sm font-medium">{skill}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default About

