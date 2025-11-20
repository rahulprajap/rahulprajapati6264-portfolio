import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: 'code',
      title: 'Web Development',
      description:
        'Creating responsive, fast, and scalable websites using modern technologies. I focus on clean architecture, reusable components, and optimized performance to deliver seamless user experiences across all devices. Whether it s a landing page, dashboard, or full-stack web app — I build solutions that are secure, efficient, and future-ready.',
    },
    {
      icon: 'design_services',
      title: 'UI/UX Design',
      description:
        'Designing intuitive, user-centered interfaces that combine functionality with aesthetic appeal. I craft clean layouts, smooth interactions, and consistent visual experiences to improve usability and engagement. From wireframes to pixel-perfect designs, I ensure your product feels modern, simple, and enjoyable to use.',
    },
    {
      icon: 'hub',
      title: 'API Integration',
      description:
        'Integrating your application with third-party services and custom backend systems to ensure smooth data flow. I build secure, scalable REST APIs, handle authentication, and optimize communication between client and server. Whether its payments, authentication, cloud storage, or automation — I make your app smarter and more connected.',
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
    <section ref={ref} className="py-20 sm:py-28 lg:py-32" id="services">
      <div className="mx-4 md:mx-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            What I Do
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            I provide end-to-end development services — from concept and design to deployment — to help bring your ideas to reality.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-xl glassmorphism shadow-soft transition-all duration-300 hover:shadow-lift border-primary/20 border group"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-white shadow-lift"
              >
                <span className="material-symbols-outlined text-2xl">
                  {service.icon}
                </span>
              </motion.div>
              <h3 className="mb-3 font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services

