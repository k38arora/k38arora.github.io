'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BarChart3, Code2, Globe, FolderKanban, Megaphone, Smartphone } from 'lucide-react';

export default function ServicesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const services = [
    {
      title: "Data Analysis",
      description: "Transform raw data into actionable insights using advanced statistical techniques and visualization tools.",
      Icon: BarChart3
    },
    {
      title: "Software Development",
      description: "Create robust and scalable software solutions tailored to your specific business needs.",
      Icon: Code2
    },
    {
      title: "Website Development",
      description: "Build responsive and user-friendly websites using modern frameworks and best practices.",
      Icon: Globe
    },
    {
      title: "Project Management",
      description: "Lead and deliver projects efficiently with agile methodologies and clear communication.",
      Icon: FolderKanban
    },
    {
      title: "Digital Marketing",
      description: "Drive growth through strategic digital marketing campaigns and data-driven decisions.",
      Icon: Megaphone
    },
    {
      title: "App Development",
      description: "Develop innovative mobile applications for iOS and Android platforms.",
      Icon: Smartphone
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  };

  return (
    <section ref={ref} id="services" className="py-20 relative overflow-hidden min-h-screen flex items-center">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 backdrop-blur-sm z-0"
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">Services</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Delivering comprehensive solutions across multiple domains to help
            businesses grow and succeed in the digital age.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full transition-all duration-150 hover:bg-white/10 hover:transform hover:-translate-y-1 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-radial from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none"></div>
                <div className="flex flex-col items-center text-center relative z-10">
                  <motion.div 
                    className="mb-6 p-4 rounded-full bg-orange-500/10 text-orange-500 transition-all duration-150 group-hover:bg-orange-500 group-hover:text-black"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.2 }}
                  >
                    <service.Icon size={32} />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-150">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}