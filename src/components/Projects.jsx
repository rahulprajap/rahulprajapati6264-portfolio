import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'Project Management Tool',
      description:
        'A collaborative platform for teams to manage tasks, track progress, and communicate effectively.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDc1xriTpAK9AbF3jgkPcRJu2erubisa_P_axlB3TA8KV-1_tdNTiGIZAymBbo7T6IumATbSM2Hx7_pM17iUnj4uw4NBSZd5OJnEy0iMjymGpy5zMfUTkLTwIDoEpHkUrzxI8wduFEzviZQLdUfsyA7JEz6V03_y7NpD1ZcVjhPQcOpypSQbHA0V-fnMqADezFdNq6vBrVipWG5QVqtYQjKm5fjRKOTIPDEnv2EVI9Sir5hJj7QxnexCtfKgMlVQnzfmYdXuCsVsnU',
      tags: ['React', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'E-commerce Platform',
      description:
        'A feature-rich online store with product catalogs, shopping cart, and secure checkout.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAfJBY3Fglly7wUPKQMaPlylutZvwwCijtY5b9NwErHENcZcxMI2FA-zHv5WChgXi_AmTzEIdnRtfTlhlhF59nwx2gyyBC08TCye0HDVTTwWX1uowWZ0ETIn0rfp7558YrWyud6jA3yjNeHHvFg_1T6Xk2Z6IaBN01221ikWF4fMO6R4XACJZO1t203ku1KGVpyQr_EUbMGDM9l3nDkN7civ92yq_W37oYopuKkk7D1iIH95veLJSQdhnwuAnHBX4E6dLEXmldrpQY',
      tags: ['Next.js', 'Stripe', 'GraphQL'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Social Media App',
      description:
        'A social networking application with real-time chat, user profiles, and content sharing features.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuACjQbm7Gdo0sFqaTiyvwkjbqoxURZZpOgii5VoJ3M9B2rtuwR73MF_rwZTMBJXC2LHhR83bQZXO2GCNc-d8Xnu9tJEWsjIIjtsyCHn9pYTV72t5L5RegptCxN4lyLiM-TarNVRxyitZZyJg4U8FIITmNq8WhRyIJWsYNd7Z1_nj6lja1hIjZ2AtGT0QvO2P_j-KrP60q8A2sFIdvKGt_ZNMPgGvo8LAlKu0-X6JB07JPuQ6c_IIfNLInnlw7B7s-lkvoRXgiJSNPg',
      tags: ['React Native', 'Firebase', 'Socket.IO'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
      id="projects"
    >
      <div className="mx-4 md:mx-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Here's a selection of projects I've worked on. Feel free to explore.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="flex flex-col overflow-hidden rounded-xl bg-background-light dark:bg-slate-800 shadow-soft hover:shadow-lift transition-all duration-300 group"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-primary bg-primary/20 dark:bg-primary/30 rounded-full px-3 py-1.5 border border-primary/30 dark:border-primary/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <span className="truncate">Live Demo</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center rounded-lg h-10 px-4 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <span className="truncate">GitHub</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects

