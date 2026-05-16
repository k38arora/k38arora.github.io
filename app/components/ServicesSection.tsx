'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BrainCircuit, Monitor, Database, Cloud, Wrench } from 'lucide-react'

const categories = [
  {
    icon: BrainCircuit,
    title: 'AI & Machine Learning',
    techs: ['Python', 'OpenAI API', 'LangChain', 'scikit-learn', 'PyTorch', 'NLTK', 'spaCy', 'Streamlit'],
  },
  {
    icon: Monitor,
    title: 'Frontend',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    icon: Database,
    title: 'Backend & Data',
    techs: ['Node.js', 'PostgreSQL', 'MySQL', 'pandas', 'NumPy', 'Matplotlib', 'REST APIs'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Automation',
    techs: ['Microsoft Azure', 'Azure AI', 'Gmail API', 'Docker', 'n8n', 'Git', 'Vercel'],
  },
  {
    icon: Wrench,
    title: 'Developer Tools',
    techs: ['VS Code', 'Claude Code', 'GitHub', 'PyCharm', 'python-dotenv', 'uv'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 75,
      damping: 18,
      mass: 1,
    },
  },
}

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl font-bold text-center text-white mb-4"
            variants={itemVariants}
          >
            Tech Stack
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-orange-500 mx-auto mb-4 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.p
            className="text-xl text-center text-gray-300 mb-14"
            variants={itemVariants}
          >
            Tools and technologies I work with
          </motion.p>

          {/* Flexbox layout: justify-center auto-centers the 5th card on its row at all breakpoints */}
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            variants={containerVariants}
          >
            {categories.map((cat) => (
              <motion.div
                key={cat.title}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col min-h-[180px] bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-orange-500/40 transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <cat.icon className="w-6 h-6 text-orange-500 shrink-0" />
                  <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-gray-800/70 text-gray-300 border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
