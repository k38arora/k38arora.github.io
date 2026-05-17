'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BrainCircuit, CloudCog, Link2 } from 'lucide-react';
import Image from 'next/image';

type IconType = string | React.ComponentType<{ className?: string }>;

interface Skill {
  icon?: IconType;
  iconText?: string;
  label: string;
  percentage: number;
}

const CircularProgress = React.memo(({ percentage, icon, iconText, label, inView }: {
  percentage: number;
  icon?: IconType;
  iconText?: string;
  label: string;
  inView: boolean;
}) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
      transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
    >
      {/* Responsive circle size — viewBox ensures content always scales correctly */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
        <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 112 112">
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-800"
          />
          <motion.circle
            cx="56"
            cy="56"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-orange-500"
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: circumference - (percentage / 100) * circumference } : { strokeDashoffset: circumference }}
            transition={{ duration: 2, ease: "easeInOut" }}
            strokeDasharray={circumference}
          />
        </svg>
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-gray-300"
          initial={{ opacity: 0, rotate: -90 }}
          animate={inView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -90 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {iconText ? (
            <span className="text-[10px] font-bold text-orange-500 text-center leading-tight max-w-[60px] break-words">{iconText}</span>
          ) : typeof icon === 'string' ? (
            <Image src={icon} alt={label} width={32} height={32} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          ) : icon ? (
            React.createElement(icon, { className: "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" })
          ) : null}
        </motion.div>
      </div>
      <motion.div
        className="text-center mt-2 sm:mt-4"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="text-lg sm:text-2xl font-bold text-orange-500">{percentage}%</div>
        <div className="text-xs sm:text-sm text-gray-400 mt-1 text-center">{label}</div>
      </motion.div>
    </motion.div>
  );
});

CircularProgress.displayName = 'CircularProgress';

const skills: Skill[] = [
  {
    icon: "/icons/python-icon.svg",
    label: 'Python',
    percentage: 90
  },
  {
    icon: "/icons/react-icon.svg",
    label: 'React/Next.js',
    percentage: 85
  },
  {
    icon: "/icons/SQL-icon.svg",
    label: 'SQL/Postgres',
    percentage: 82
  },
  {
    icon: BrainCircuit,
    label: 'OpenAI API',
    percentage: 85
  },
  {
    icon: CloudCog,
    label: 'Azure AI',
    percentage: 80
  },
  {
    icon: Link2,
    label: 'LangChain',
    percentage: 78
  }
];


export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Only scale — opacity from scroll-transform conflicted with the variant fade-in
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <motion.section
      ref={sectionRef}
      id="about"
      className="py-20"
      style={{ scale }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-6">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-orange-500 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
            {/* Card 1 — Overview */}
            <motion.div
              className="relative rounded-xl overflow-hidden border border-gray-800 bg-[#0d0d0d] hover:border-orange-500/40 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 75, damping: 18, mass: 1, delay: 0.7 }}
            >
              <motion.div
                initial={{ clipPath: 'inset(0 0 100% 0)' }}
                animate={isInView ? { clipPath: 'inset(0 0 0% 0)' } : { clipPath: 'inset(0 0 100% 0)' }}
                transition={{ duration: 1.4, ease: 'linear', delay: 0.7 }}
              >
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-800">
                  <span className="w-3 h-3 rounded-full bg-orange-500/80" />
                  <span className="w-3 h-3 rounded-full bg-orange-500/40" />
                  <span className="w-3 h-3 rounded-full bg-orange-500/20" />
                  <span className="ml-3 text-gray-400 text-xs font-mono">overview.md</span>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-4">Overview</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    I build AI-powered tools and full-stack applications — from automated invoice processing pipelines using the OpenAI API, to enterprise chatbots deployed on Azure. My work spans Python backends, LLM integrations, and React/Next.js frontends.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    My statistics foundation gives me a stronger grasp of ML fundamentals than most developers coming from pure CS — probability theory, linear models, and experimental design aren&apos;t electives for me, they&apos;re core curriculum.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="absolute left-0 right-0 h-px pointer-events-none"
                style={{ background: '#ea580c', boxShadow: '0 0 10px 4px rgba(234,88,12,0.85)' }}
                initial={{ top: 0, opacity: 0 }}
                animate={isInView ? { top: '100%', opacity: [1, 1, 0] } : { top: 0, opacity: 0 }}
                transition={{ duration: 1.4, ease: 'linear', delay: 0.7 }}
              />
            </motion.div>

            {/* Card 2 — Education */}
            <motion.div
              className="relative rounded-xl overflow-hidden border border-gray-800 bg-[#0d0d0d] hover:border-orange-500/40 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 75, damping: 18, mass: 1, delay: 0.95 }}
            >
              <motion.div
                initial={{ clipPath: 'inset(0 0 100% 0)' }}
                animate={isInView ? { clipPath: 'inset(0 0 0% 0)' } : { clipPath: 'inset(0 0 100% 0)' }}
                transition={{ duration: 1.4, ease: 'linear', delay: 0.95 }}
              >
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-800">
                  <span className="w-3 h-3 rounded-full bg-orange-500/80" />
                  <span className="w-3 h-3 rounded-full bg-orange-500/40" />
                  <span className="w-3 h-3 rounded-full bg-orange-500/20" />
                  <span className="ml-3 text-gray-400 text-xs font-mono">education.md</span>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-4">Education</h3>
                  <div className="mb-3">
                    <p className="text-white font-medium text-sm">🎓 Bachelor of Mathematics — Statistics (Honours, Co-op)</p>
                    <p className="text-gray-400 text-xs mt-1">University of Waterloo · Sep 2022 – May 2027 (Expected)</p>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">🏆 President&apos;s Scholarship of Distinction · 2023</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">Relevant Coursework</p>
                  <div className="overflow-x-auto">
                    <div className="space-y-3 font-mono text-xs min-w-max">
                      <div>
                        <p className="text-gray-300 mb-1">Machine Learning &amp; Statistics</p>
                        <p className="text-gray-500">├── Probability (STAT 230)</p>
                        <p className="text-gray-500">├── Statistics (STAT 231)</p>
                        <p className="text-gray-500">├── Applied Linear Models (STAT 331)</p>
                        <p className="text-gray-500">└── Sampling &amp; Experimental Design (STAT 332)</p>
                      </div>
                      <div>
                        <p className="text-gray-300 mb-1">Mathematics &amp; Computing</p>
                        <p className="text-gray-500">├── Linear Algebra I &amp; II (MATH 136, 235)</p>
                        <p className="text-gray-500">├── Intro to Computational Mathematics (CS 371)</p>
                        <p className="text-gray-500">├── Data Types and Structures (CS 234)</p>
                        <p className="text-gray-500">└── Differential Equations (AMATH 250)</p>
                      </div>
                      <div>
                        <p className="text-gray-300 mb-1">Business &amp; Entrepreneurship</p>
                        <p className="text-gray-500">├── Business Technology &amp; Infrastructure (BET 210)</p>
                        <p className="text-gray-500">├── Foundations of Entrepreneurial Practice (BET 100)</p>
                        <p className="text-gray-500">└── Business Finance (ECON 371)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="absolute left-0 right-0 h-px pointer-events-none"
                style={{ background: '#ea580c', boxShadow: '0 0 10px 4px rgba(234,88,12,0.85)' }}
                initial={{ top: 0, opacity: 0 }}
                animate={isInView ? { top: '100%', opacity: [1, 1, 0] } : { top: 0, opacity: 0 }}
                transition={{ duration: 1.4, ease: 'linear', delay: 0.95 }}
              />
            </motion.div>
          </div>
          <motion.a
            href="/Krish_Arora_CV.pdf"
            download="Krish_Arora_CV.pdf"
            className="inline-flex items-center px-8 py-3 bg-orange-500 text-black rounded-full hover:bg-orange-600 transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <span className="font-semibold">Download CV</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </motion.a>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-2 sm:px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="flex flex-col items-center bg-black/20 rounded-lg p-3 sm:p-4 md:p-6"
            >
              <CircularProgress
                percentage={skill.percentage}
                icon={skill.icon}
                iconText={skill.iconText}
                label={skill.label}
                inView={isInView}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
