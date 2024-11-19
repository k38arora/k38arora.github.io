'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Instagram, Linkedin, Github, Mail } from 'lucide-react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'

export default function Hero() {
  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "3+", label: "Projects Done" },
    { number: "4+", label: "Certifications" }
  ]

  const socialLinks = [
    { Icon: Instagram, href: "https://instagram.com/krish7847", label: "Instagram" },
    { Icon: Linkedin, href: "https://linkedin.com/in/krish6", label: "LinkedIn" },
    { Icon: Github, href: "https://github.com/k38arora", label: "GitHub" },
    { Icon: Mail, href: "mailto:k38arora@uwaterloo.ca", label: "Email" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.section 
      className="min-h-screen relative flex items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
        >
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div className="space-y-4" variants={fadeInUpVariants}>
              <motion.p 
                className="text-xl text-gray-400"
                variants={fadeInUpVariants}
              >
                Hi, I am
              </motion.p>
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white"
                variants={fadeInUpVariants}
              >
                Krish Arora
              </motion.h1>
              <motion.div 
                className="text-4xl md:text-5xl text-orange-500 font-bold h-[1.5em]"
                variants={fadeInUpVariants}
              >
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
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex gap-4" 
              variants={scaleInVariants}
            >
              {socialLinks.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                  variants={scaleInVariants}
                  custom={index}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4" 
              variants={fadeInUpVariants}
            >
              <Link href="#contact" passHref>
                <motion.a
                  className="px-8 py-3 bg-orange-500 text-black rounded-full font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2 group"
                  whileHover={{ x: 5 }}
                  variants={scaleInVariants}
                >
                  Hire Me
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </Link>
              <motion.a
                href="/Krish_Arora_CV.pdf"
                download="Krish_Arora_CV.pdf"
                className="px-8 py-3 border border-gray-700 text-white rounded-full hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={scaleInVariants}
              >
                Download CV
              </motion.a>
            </motion.div>

            <motion.div 
              className="flex gap-4"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  className="flex-1 bg-black/20 p-4 rounded-lg text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  variants={scaleInVariants}
                  custom={index}
                >
                  <motion.div 
                    className="text-3xl font-bold text-orange-500"
                    variants={fadeInUpVariants}
                  >
                    {stat.number}
                  </motion.div>
                  <motion.div 
                    className="text-sm text-gray-400 mt-2 whitespace-nowrap"
                    variants={fadeInUpVariants}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:flex justify-center items-center"
            variants={scaleInVariants}
          >
            <div className="relative w-[500px] h-[500px]">
              <motion.div
                className="absolute inset-0 rounded-full overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-20" />
                <Image
                  src="/images/profile-image.jpg"
                  alt="Krish Arora - Data Analyst & Developer"
                  width={500}
                  height={500}
                  className="object-cover"
                  priority
                />
              </motion.div>
              
              <motion.div
                className="absolute inset-0 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-full w-px bg-black/10"
                    style={{
                      left: `${(i + 1) * (100 / 12)}%`,
                      transform: 'translateX(-50%)',
                    }}
                    initial={{ height: 0 }}
                    animate={{ height: '100%' }}
                    transition={{ duration: 0.5, delay: 1 + (i * 0.1) }}
                  />
                ))}
              </motion.div>
              
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-orange-500/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}