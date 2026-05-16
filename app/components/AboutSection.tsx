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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

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
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-white mb-6"
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
          <motion.p
            className="text-lg text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            I&apos;m Krish Arora, a 3rd-year Bachelor of Mathematics (Statistics) student at the University of Waterloo, graduating May 2027.
          </motion.p>
          <motion.p
            className="text-lg text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            I build AI-powered tools and full-stack applications — from automated invoice processing pipelines using the OpenAI API to enterprise chatbots deployed on Azure. My work spans Python backends, LLM integrations, and React/Next.js frontends. My statistics background gives me a stronger foundation in ML fundamentals than most developers coming from pure CS.
          </motion.p>
          <motion.p
            className="text-lg text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            I&apos;m actively seeking AI/ML Engineering and Software Development internships for Fall 2026.
          </motion.p>
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
