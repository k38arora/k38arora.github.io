'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Instagram, Linkedin, Github, Mail } from 'lucide-react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'

// Preload the image with proper type definition
const preloadImage = () => {
  const img = document.createElement('img')
  img.src = '/images/profile-image.jpg'
}

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    preloadImage()
  }, [])

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <section className="min-h-screen relative flex items-center">
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content - Prioritized for LCP */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 
                className="text-5xl md:text-7xl font-bold text-white"
                style={{
                  contentVisibility: 'auto',
                  containIntrinsicSize: '0 150px',
                }}
              >
                Krish Arora
              </h1>
              <div className="text-4xl md:text-5xl text-orange-500 font-bold h-[1.5em]">
                <TypeAnimation
                  sequence={[
                    'Data Analyst',
                    2000,
                    'Developer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="inline-block"
                />
              </div>
            </div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { Icon: Instagram, href: "https://instagram.com/krish7847", label: "Instagram" },
                { Icon: Linkedin, href: "https://linkedin.com/in/krish6", label: "LinkedIn" },
                { Icon: Github, href: "https://github.com/k38arora", label: "GitHub" },
                { Icon: Mail, href: "mailto:k38arora@uwaterloo.ca", label: "Email" }
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                  variants={itemVariants}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Link href="#contact">
                  <motion.button
                    className="px-8 py-3 bg-orange-500 text-black rounded-full font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    Hire Me
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </motion.div>
              <motion.a
                href="/Krish_Arora_CV.pdf"
                download="Krish_Arora_CV.pdf"
                className="px-8 py-3 border border-gray-700 text-white rounded-full hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                Download CV
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="flex gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { number: "2+", label: "Years Experience" },
                { number: "3+", label: "Projects Done" },
                { number: "4+", label: "Certifications" }
              ].map((stat) => (
                <motion.div 
                  key={stat.label} 
                  className="flex-1 bg-black/20 p-4 rounded-2xl text-center transition-colors duration-300 hover:bg-orange-500 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  variants={itemVariants}
                >
                  <div className="text-3xl font-bold text-orange-500 group-hover:text-white transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 mt-2 whitespace-nowrap group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image Section - Deferred loading */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-[500px] h-[500px]">
              <div 
                className="absolute inset-0 rounded-full overflow-hidden"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-20" />
                <Image
                  src="/images/profile-image.jpg"
                  alt="Krish Arora - Data Analyst & Developer"
                  width={500}
                  height={500}
                  className="object-cover"
                  quality={75}
                  onLoadingComplete={() => setImageLoaded(true)}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
              
              <div className="absolute inset-0 rounded-full border-2 border-orange-500/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

