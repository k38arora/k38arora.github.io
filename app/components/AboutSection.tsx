'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

type IconType = string | React.ComponentType<{ className?: string }>;

interface Skill {
  icon: IconType;
  label: string;
  percentage: number;
}

const CircularProgress = React.memo(({ percentage, icon, label, inView }: { 
  percentage: number;
  icon: IconType;
  label: string;
  inView: boolean;
}) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90 transform">
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
            animate={{ strokeDashoffset: inView ? circumference - (percentage / 100) * circumference : circumference }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            strokeDasharray={circumference}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-gray-300">
          {typeof icon === 'string' ? (
            <Image src={icon} alt={label} width={32} height={32} className="w-8 h-8" />
          ) : (
            React.createElement(icon, { className: "w-8 h-8" })
          )}
        </div>
      </div>
      <div className="text-center mt-4">
        <div className="text-2xl font-bold text-orange-500">{percentage}%</div>
        <div className="text-sm text-gray-400 mt-1">{label}</div>
      </div>
    </div>
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
    label: 'React',
    percentage: 85
  },
  {
    icon: "/icons/SQL-icon.svg",
    label: 'SQL',
    percentage: 85
  },
  {
    icon: "/icons/msexcel-icon.svg",
    label: 'Excel',
    percentage: 80
  },
  {
    icon: "/icons/hubspot-icon.svg",
    label: 'HubSpot',
    percentage: 85
  }
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-black/40 backdrop-blur-sm"
      style={{ opacity, scale }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 mb-6">
            I'm Krish Arora, a Bachelor of Mathematics student at the University of Waterloo,
            combining my analytical skills with hands-on experience in data analysis,
            programming, and project management. I'm passionate about technology and finance,
            with a particular interest in stock market analysis and cryptocurrency.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            I enjoy researching different companies and upcoming technologies, staying ahead
            of trends that shape the future. My technical skills in Python, data visualization,
            and AI applications drive my projects, including personal finance tracking and
            interactive chatbot development.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Outside of coding, I unwind by going to the gym, exploring new books, and creating
            content around home decor on Pinterest.
          </p>
          <motion.a
            href="/Krish_Arora_CV.pdf"
            download="Krish_Arora_CV.pdf"
            className="inline-flex items-center px-8 py-3 bg-orange-500 text-black rounded-full hover:bg-orange-600 transition-all group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
          >
            <span className="font-semibold">Download CV</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </motion.a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl mx-auto px-4">
          {skills.map((skill, index) => (
            <div
              key={skill.label}
              className="flex flex-col items-center bg-black/20 rounded-lg p-6"
            >
              <CircularProgress
                percentage={skill.percentage}
                icon={skill.icon}
                label={skill.label}
                inView={isInView}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}