'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
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
  const [isBgReady, setIsBgReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsBgReady(true), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {isBgReady && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Background3D />
        </motion.div>
      )}
      <NavBar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
