'use client'

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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Background3D />
      <NavBar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </motion.div>
  )
}
