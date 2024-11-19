'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin } from 'lucide-react'

export default function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="contact" className="py-20 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Let&apos;s Connect</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300">
              Cultivating Connections: Reach Out And Connect With Me
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center text-center"
            >
              <Mail className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">Email</h3>
              <a
                href="mailto:krish.arora161003@gmail.com"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                krish.arora161003@gmail.com
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center text-center"
            >
              <Linkedin className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/krish6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                linkedin.com/in/your-profile
              </a>
            </motion.div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-center text-gray-400 mt-12"
          >
            I&apos;m always open to new opportunities and collaborations. 
            Feel free to reach out through email or connect with me on LinkedIn!
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}