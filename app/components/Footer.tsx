'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Instagram, Linkedin, Github, Mail } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About me', href: '#about' },
  { name: 'Portfolio', href: '#projects' },
  { name: 'Contact me', href: '#contact' },
]

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/krish7847', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/in/krish6', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/k38arora', label: 'Github' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
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

export default function Footer() {
  return (
    <footer className="bg-black/60 backdrop-blur-sm py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <motion.div variants={itemVariants} className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-white">
            KA
          </Link>
        </motion.div>

        <motion.nav variants={itemVariants} className="mb-8">
          <ul className="flex flex-wrap justify-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>

        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center space-y-4 mb-8">
          <a
            href="mailto:k38arora@uwaterloo.ca"
            className="flex items-center justify-center gap-2 text-gray-400 hover:text-orange-500 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>k38arora@uwaterloo.ca</span>
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center text-sm text-gray-500"
        >
          <p>© {new Date().getFullYear()} Krish Arora. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  )
}