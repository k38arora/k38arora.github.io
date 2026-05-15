'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import Loading from './Loading'
import NavBar from './NavBar'
import Hero from './Hero'
import ServicesSection from './ServicesSection'
import AboutSection from './AboutSection'
import ExperienceSection from './ExperienceSection'
import ProjectsSection from './ProjectsSection'
import ContactSection from './ContactSection'
import Footer from './Footer'

const Background3D = dynamic(() => import('./Background3D'), { ssr: false })

export default function ClientLayout() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Loading />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Background3D />
          <NavBar />
          <Hero />
          <ServicesSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
