'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FileText, BrainCircuit, Mail, BarChart2, Lock, ExternalLink } from 'lucide-react'

interface Project {
  id: number
  name: string
  subtitle?: string
  description: string
  stack: string[]
  tags: string[]
  github?: string
  isPrivate?: boolean
  icon: React.ComponentType<{ className?: string }>
  gradient: string
  iconColor: string
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Invoice Automation SaaS',
    description: 'An AI-powered SaaS tool that automates invoice extraction and bulk scheduling for small business owners. Built on the OpenAI Responses API.',
    stack: ['Python', 'OpenAI API', 'Next.js', 'PostgreSQL', 'Vercel'],
    tags: ['AI/ML', 'Full Stack', 'Automation'],
    github: 'https://github.com/k38arora/Invoice-Extraction',
    icon: FileText,
    gradient: 'from-orange-500/20 to-orange-900/5',
    iconColor: 'text-orange-400',
  },
  {
    id: 2,
    name: 'AI Resume Critiquer Pro',
    description: 'An AI-powered platform that optimizes resumes for ATS compliance and automates job-specific tailoring. Reduced resume customization time by 75% using industry-aligned LaTeX templates.',
    stack: ['Python', 'OpenAI API (GPT-4-mini)', 'PyTorch', 'Streamlit'],
    tags: ['AI/ML', 'Automation', 'NLP'],
    isPrivate: true,
    icon: BrainCircuit,
    gradient: 'from-purple-500/20 to-purple-900/5',
    iconColor: 'text-purple-400',
  },
  {
    id: 3,
    name: 'Gmail API Invoice Pipeline',
    subtitle: 'Garde-Robe Internship',
    description: 'Automated fashion invoice detection and processing pipeline. Scans Gmail inboxes via OAuth, extracts invoice data with OpenAI, and routes to downstream workflows — eliminating ~80% of manual work.',
    stack: ['Python', 'Gmail API', 'OpenAI API', 'React', 'PostgreSQL'],
    tags: ['Automation', 'Full Stack', 'AI/ML'],
    isPrivate: true,
    icon: Mail,
    gradient: 'from-teal-500/20 to-teal-900/5',
    iconColor: 'text-teal-400',
  },
  {
    id: 4,
    name: 'Enhanced Expense Tracker',
    description: 'A personal finance tracker with a Tkinter GUI, visualizing spending trends through Matplotlib with data storage handled via Pandas and CSV.',
    stack: ['Python', 'Tkinter', 'Matplotlib', 'Pandas'],
    tags: ['Python', 'Data Analysis'],
    github: 'https://github.com/k38arora/ExpenseTrackerApp',
    icon: BarChart2,
    gradient: 'from-yellow-500/20 to-yellow-900/5',
    iconColor: 'text-yellow-400',
  },
]

const allTags = ['All', 'AI/ML', 'Full Stack', 'Automation', 'NLP', 'Python']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18 },
  },
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(filter))

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="py-12 sm:py-20"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Projects</h2>
          <motion.div
            className="w-16 sm:w-20 h-1 bg-orange-500 mx-auto mb-6 sm:mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: '5rem' } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Filter tags */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                filter === tag
                  ? 'bg-orange-500 text-black'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Project cards */}
        <motion.div
          className={`grid gap-6 mx-auto ${
            filteredProjects.length === 1
              ? 'grid-cols-1 max-w-xl'
              : 'grid-cols-1 sm:grid-cols-2 max-w-5xl'
          }`}
          variants={containerVariants}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500/30 transition-colors duration-300 flex flex-col"
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              {/* Banner */}
              <div className={`relative h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <project.icon className={`w-14 h-14 ${project.iconColor} opacity-70`} />
                {project.isPrivate && (
                  <span className="absolute top-3 right-3 flex items-center gap-1 text-xs bg-gray-900/70 text-gray-400 px-2 py-1 rounded-full border border-gray-700">
                    <Lock className="w-3 h-3" />
                    Private · Internship
                  </span>
                )}
                {project.subtitle && !project.isPrivate && (
                  <span className="absolute top-3 right-3 text-xs bg-gray-900/70 text-gray-400 px-2 py-1 rounded-full border border-gray-700">
                    {project.subtitle}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-1">{project.description}</p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-0.5 rounded bg-gray-800 text-gray-300 border border-gray-700/50">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Tags + GitHub */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
