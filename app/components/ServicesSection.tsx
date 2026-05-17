'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BrainCircuit, Monitor, Database, Cloud, Wrench } from 'lucide-react'

const categories = [
  {
    icon: BrainCircuit,
    title: 'AI & Machine Learning',
    filename: 'ai-ml.md',
    techs: ['Python', 'OpenAI API', 'LangChain', 'scikit-learn', 'PyTorch', 'NLTK', 'spaCy', 'Streamlit'],
  },
  {
    icon: Monitor,
    title: 'Frontend',
    filename: 'frontend.md',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    icon: Database,
    title: 'Backend & Data',
    filename: 'backend.md',
    techs: ['Node.js', 'PostgreSQL', 'MySQL', 'pandas', 'NumPy', 'Matplotlib', 'REST APIs'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Automation',
    filename: 'cloud.md',
    techs: ['Microsoft Azure', 'Azure AI', 'Gmail API', 'Docker', 'n8n', 'Git', 'Vercel'],
  },
  {
    icon: Wrench,
    title: 'Developer Tools',
    filename: 'tools.md',
    techs: ['VS Code', 'Claude Code', 'GitHub', 'PyCharm', 'python-dotenv', 'uv'],
  },
]

const headerVariants = {
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
    transition: { type: 'spring', stiffness: 75, damping: 18, mass: 1 },
  },
}

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={headerVariants}
          className="mb-14"
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
            className="text-xl text-center text-gray-300"
            variants={itemVariants}
          >
            Tools and technologies I work with
          </motion.p>
        </motion.div>

        {/* Cards — justify-center keeps the 5th card centered on its own row */}
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((cat, index) => {
            const delay = 0.2 + index * 0.12;
            return (
              <motion.div
                key={cat.title}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] relative rounded-xl overflow-hidden border border-gray-800 bg-[#0d0d0d] hover:border-orange-500/40 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 75, damping: 18, mass: 1, delay }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  initial={{ clipPath: 'inset(0 0 100% 0)' }}
                  animate={isInView ? { clipPath: 'inset(0 0 0% 0)' } : { clipPath: 'inset(0 0 100% 0)' }}
                  transition={{ duration: 1.4, ease: 'linear', delay }}
                >
                  {/* Title bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-800">
                    <span className="w-3 h-3 rounded-full bg-orange-500/80" />
                    <span className="w-3 h-3 rounded-full bg-orange-500/40" />
                    <span className="w-3 h-3 rounded-full bg-orange-500/20" />
                    <span className="ml-3 text-gray-400 text-xs font-mono">{cat.filename}</span>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <cat.icon className="w-5 h-5 text-orange-500 shrink-0" />
                      <h3 className="text-orange-500 font-semibold text-sm uppercase tracking-widest">{cat.title}</h3>
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
                  </div>
                </motion.div>

                {/* Scan line */}
                <motion.div
                  className="absolute left-0 right-0 h-px pointer-events-none"
                  style={{ background: '#ea580c', boxShadow: '0 0 10px 4px rgba(234,88,12,0.85)' }}
                  initial={{ top: 0, opacity: 1 }}
                  animate={isInView ? { top: '100%', opacity: [1, 1, 0] } : { top: 0, opacity: 0 }}
                  transition={{ duration: 1.4, ease: 'linear', delay }}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  )
}
