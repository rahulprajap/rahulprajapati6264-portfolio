import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-slate-200/80 dark:border-slate-800/80 pt-6 text-center text-sm text-slate-500 dark:text-slate-400"
        >
          <p>© {new Date().getFullYear()} Rahul. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

