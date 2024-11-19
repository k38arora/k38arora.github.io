'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    title: "SLC Student Manager",
    company: "Waterloo Undergraduate Student Association",
    location: "Waterloo, ON",
    date: "Jan 2024 - Present",
    description: [
      "Improved Live Chat satisfaction by 32% by analyzing user data, training staff on Dialogflow modules, and creating a standardized FAQ resource.",
      "Managed accounting at the service desk, overseeing discrepancy resolution and staff training."
    ],
    color: "#FF6B6B"
  },
  {
    title: "Technology Research Analyst",
    company: "ABC Leathers",
    location: "Gurgaon, Haryana",
    date: "Aug 2022 - Oct 2022",
    description: [
      "Created and managed a SQL database to enhance competitive analysis, strengthening strategic positioning and decision-making.",
      "Cut cloth wastage by 15% through recycling initiatives, boosting production efficiency and revenue in blazer and coat manufacturing."
    ],
    color: "#4ECDC4"
  },
  {
    title: "Marketing Coordinator",
    company: "UW Computer Science Club",
    location: "Waterloo, ON",
    date: "May 2023 - Apr 2024",
    description: [
      "Managed social media channels, including videography for reels and creation of engaging posts and stories with captivating captions.",
      "Utilized Instagram insights to identify optimal posting times, resulting in a 28% increase in views and likes."
    ],
    color: "#FFD93D"
  }
]

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="experience" className="py-20 bg-black/40 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8 relative"
            >
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-transparent"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                transition={{ duration: 0.5, delay: 0.2 }}
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="ml-6 bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:shadow-orange-500/20"
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
    </section>
  )
}