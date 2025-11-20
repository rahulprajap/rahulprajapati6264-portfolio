import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Preloader from './components/Preloader'

// Lazy load components
const Header = lazy(() => import('./components/Header'))
const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))
const Experience = lazy(() => import('./components/Experience'))
const Services = lazy(() => import('./components/Services'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const NotFound = lazy(() => import('./components/NotFound'))



function LandingPage() {
  return (
    <div className="relative w-full overflow-x-hidden font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Suspense fallback={<Preloader />}>
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </Suspense>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path='/e-shopify' element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  )
}

export default App

