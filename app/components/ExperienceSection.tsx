'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react'

interface Experience {
  title: string
  company: string
  location: string
  date: string
  description: string[]
  color: string
}

const experiences: Experience[] = [
  {
    title: "Full Stack Engineer",
    company: "Garde-Robe",
    location: "Remote",
    date: "July 2025 – Oct 2025",
    description: [
      "Built Gmail API pipeline to auto-isolate fashion invoices from raw inbox data.",
      "Designed two-phase AI filter with vendor heuristics, achieving high classification accuracy.",
      "Cut manual sorting time, boosting pipeline efficiency and downstream data accuracy.",
    ],
    color: "#FF6B6B"
  },
  {
    title: "Full Stack Engineer",
    company: "IPMD Inc.",
    location: "Remote",
    date: "July 2025 – Oct 2025",
    description: [
      "Overhauled web UI with JavaScript and 3D effects, delivering a modern product design.",
      "Refactored frontend components, eliminating redundancy and improving codebase performance.",
      "Engineered prompts using Azure AI to create an accurate and empathetic user support chatbot.",
    ],
    color: "#4ECDC4"
  },
  {
    title: "SLC Student Manager",
    company: "Waterloo Undergraduate Student Association",
    location: "Waterloo, ON",
    date: "Mar 2023 – Nov 2025",
    description: [
      "Managed day-to-day SLC operations; led scheduling, staff coordination, and facility logistics for a high-traffic student hub.",
      "Boosted student satisfaction 32% in 3 months through data-driven training and FAQ revamps.",
      "Cut employee onboarding time 50% by authoring a structured orientation manual.",
    ],
    color: "#FFD93D"
  },
  {
    title: "Marketing Coordinator",
    company: "UW Computer Science Club",
    location: "Waterloo, ON",
    date: "May 2023 – Apr 2024",
    description: [
      "Managed CS Club social media; produced reels and posts driving consistent audience growth.",
      "Created high-engagement video content, expanding brand awareness across student communities.",
      "Coordinated cross-org event promotions, sustaining audience reach every semester.",
    ],
    color: "#A78BFA"
  }
]

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    }
  }
}

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })

  return (
    <motion.section
      ref={sectionRef}
      id="experience"
      className="py-20 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-6">Experience</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300">
            Milestones in My Professional Journey
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              className="mb-8 relative"
            >
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-transparent"
                initial={{ height: 0 }}
                animate={isInView ? { height: '100%' } : { height: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.02, boxShadow: `0 8px 12px -1px ${exp.color}30, 0 4px 8px -1px ${exp.color}20` }}
                className="ml-6 bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg transform transition-all duration-300"
                style={{
                  boxShadow: `0 4px 6px -1px ${exp.color}20, 0 2px 4px -1px ${exp.color}10`
                }}
              >
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-white flex items-center">
                    <Briefcase className="w-6 h-6 mr-2 text-orange-500" />
                    {exp.title}
                  </h3>
                  <span className="text-orange-500 font-medium">{exp.company}</span>
                </div>
                <div className="flex items-center text-gray-400 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{exp.location}</span>
                  <Calendar className="w-4 h-4 ml-4 mr-2" />
                  <span>{exp.date}</span>
                </div>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="list-disc list-inside text-gray-300 mt-4"
                    >
                      {exp.description.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="mb-2"
                        >
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
                <motion.button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="mt-4 text-orange-500 hover:text-orange-400 transition-colors duration-200 flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {expandedIndex === index ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-1" />
                      Hide Details
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-1" />
                      Show Details
                    </>
                  )}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

