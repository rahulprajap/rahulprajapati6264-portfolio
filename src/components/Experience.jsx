import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      id:  1,
      date: 'Sep 2025 -  present',
      title: 'Fullstack Developer',
      company: 'Oak Tree Software | Indore',
      description: [
        'Developed and maintained web applications using the MERN stack (MongoDB, Express.js, React, Node.js).',
        'Contributed to the entire software development lifecycle, from concept and design to testing.',
        'Worked with an agile team to deliver high-quality software on a consistent basis.',
        'Gained hands-on experience in building scalable and performant back-end services.',
      ],
      alignLeft: true,
    },
    {
      id: 2,
      date: 'Feb 2024 - Sep 205',
      title: 'Software Engineer',
      company: 'Sculptsoft Private Limited | Ahmedabad',
      description: [
        'Designed and implemented RESTful APIs with Node.js and Express.js, and developed dynamic frontends using React.js for seamless user experience.',
        'Managed state efficiently with Redux Toolkit and Context API.',
        'Implemented test code coverage using Jest for components to ensure application quality.',
        'Integrated Security with JWT/OAuth2 for authentication and authorization in REST APIs.',
      ],
      alignLeft: false,
    },
    {
      id: 3,
      date: 'July 2023 - Feb 2024',
      title: 'Fullstack Developer',
      company: 'Covobites Private Limited | Ahmedabad',
      description: [
        'Created RESTful APIs using Node.js and integrated them with front-end frameworks.',
        'Applied problem-solving techniques to resolve complex technical issues and improve system reliability.',
        'Designed databases and implemented indexing techniques to optimize query performance.',
        'Collaborated with clients and cross-functional teams to gather requirements and propose solutions.',
      ],
      alignLeft: true,
    },
  ]

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
      className="py-24 sm:py-32 bg-white dark:bg-slate-900/50"
      id="experience"
    >
      <div className="mx-4 md:mx-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              Work Experience
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              My professional journey as a developer.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-slate-200 dark:bg-slate-800 rounded-full hidden md:block" />

            <div className="relative flex flex-col gap-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row ${
                    experience.alignLeft ? '' : 'md:flex-row-reverse'
                  } items-center gap-8 w-full relative`}
                >
                  {/* Left/Right Content Card */}
                  <div
                    className={`md:w-1/2 ${
                      experience.alignLeft
                        ? 'md:pr-8 md:text-right'
                        : 'md:pl-8 md:text-left'
                    } w-full`}
                  >
                    <motion.div
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="bg-white dark:bg-slate-900/50 p-6 rounded-xl shadow-soft border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-lift hover:border-primary/50"
                    >
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
                        {experience.date}
                      </p>
                      <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {experience.company}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full flex items-center hidden md:flex">
                    <div className="size-5 bg-primary rounded-full ring-4 ring-background-light dark:ring-background-dark flex items-center justify-center">
                      <div className="size-2 bg-white dark:bg-slate-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Right/Left Description Card */}
                  <div
                    className={`md:w-1/2 ${
                      experience.alignLeft ? 'md:pl-8' : 'md:pr-8'
                    } w-full`}
                  >
                    <motion.div
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="bg-white dark:bg-slate-900/50 p-6 rounded-xl shadow-soft border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-lift hover:border-primary/50"
                    >
                      <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm list-disc pl-5">
                        {experience.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

