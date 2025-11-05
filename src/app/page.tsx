'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getLatestBlogPost } from './blog/blogData';

// Simple background component (no animations)
// Background removed - clean static design only
// Deployment trigger

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-lg font-bold text-gray-800"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.2,
              type: "spring"
            }}
          >
            <motion.div 
              className="text-xl font-bold text-gray-800"
              whileHover={{ x: 3 }}
            >
              Lakshmipathiraju Pericharla
            </motion.div>
            <motion.div 
              className="text-sm font-medium text-blue-600 mt-1"
              animate={{
                textShadow: [
                  "0 0 0px rgba(59, 130, 246, 0)",
                  "0 0 8px rgba(59, 130, 246, 0.5)",
                  "0 0 0px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              United States
            </motion.div>
          </motion.div>
          <div className="flex space-x-4">
            <motion.a
              href="https://github.com/Plpraju2001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors relative"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.4,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ scale: 1.15, rotate: 5, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </motion.svg>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/lakshmipathirajup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors relative"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.5,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ scale: 1.15, rotate: -5, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </motion.svg>
            </motion.a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    setLetters('Raju'.split(''));
  }, []);

  // Generate particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-br from-blue-400/30 to-purple-400/30"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Multiple floating animated background elements for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 200, -100, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -150, 100, 0],
            y: [0, 100, -50, 0],
            scale: [1, 0.9, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-indigo-400/15 to-violet-400/15 rounded-full blur-3xl"
          animate={{
            x: [-200, 200, 0],
            y: [0, 0, -200],
            scale: [0.8, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ 
            duration: 1.2,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 tracking-tight"
            style={{ display: "inline-block" }}
          >
            Hello, I&apos;m{' '}
            <span className="inline-flex">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  className="gradient-text"
                  initial={{ opacity: 0, y: -100, rotate: -180, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    rotate: 0,
                    scale: 1
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{
                    scale: 1.5,
                    rotate: [0, 10, -10, 0],
                    y: [0, -20, 0],
                    transition: { duration: 0.5 }
                  }}
                  style={{ 
                    display: "inline-block",
                    marginLeft: "0.05em"
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
          >
            Data Scientist with Advanced Data Engineering & Business Analytics Expertise
          </motion.p>
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-gray-500 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
          >
            Data Scientist with 3+ years of experience applying advanced data science and analytics to marketing and financial product domains. 
            Specializing in campaign measurement, causal inference, econometrics, and ROI-driven optimization with proven results in campaign performance and retention.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1, 
              delay: 0.8,
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
          >
            <motion.a
              href="#projects"
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl overflow-hidden group text-lg"
              whileHover={{ scale: 1.15, y: -5, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 10px 40px rgba(59, 130, 246, 0.6), 0 0 0 0 rgba(59, 130, 246, 0.4)",
                  "0 20px 60px rgba(59, 130, 246, 0.8), 0 0 0 4px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <span className="relative z-10">View My Work</span>
              {/* Animated gradient wave */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                animate={{
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              className="relative border-2 border-blue-600 text-blue-600 px-10 py-5 rounded-2xl font-bold shadow-2xl overflow-hidden group text-lg bg-white"
              whileHover={{ scale: 1.15, y: -5, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 10px 40px rgba(59, 130, 246, 0.3), 0 0 0 0 rgba(59, 130, 246, 0.4)",
                  "0 20px 60px rgba(59, 130, 246, 0.5), 0 0 0 4px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <motion.span 
                className="relative z-10"
                initial={{ color: "#2563eb" }}
                whileHover={{ color: "white" }}
              >
                Get In Touch
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              {/* Glowing border */}
              <motion.div
                className="absolute inset-0 border-2 border-blue-500 rounded-2xl"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Decorative animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-1/4 w-32 h-32 border-2 border-blue-200/40 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-24 h-24 border-2 border-purple-200/40 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.21, 1.02, 0.73, 1]
          }}
          viewport={{ once: false, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-8 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              About 
            </motion.span>
            <motion.span
              className="gradient-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              Me
            </motion.span>
          </motion.h2>
          

          <motion.p 
            className="text-lg text-gray-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, x: -100, rotateX: 90 }}
            whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: [0.21, 1.02, 0.73, 1]
            }}
            viewport={{ once: false, margin: "-100px" }}
          >
            My journey into data science began with a simple question: &quot;What if we could predict the future?&quot; This curiosity led me down a path where I discovered that data isn&apos;t just numbers—it&apos;s stories waiting to be told. 
            I&apos;ve spent the last few years transforming complex datasets into actionable insights that drive real business impact.
          </motion.p>
          <motion.p 
            className="text-lg text-gray-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, x: 100, rotateX: -90 }}
            whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              ease: [0.21, 1.02, 0.73, 1]
            }}
            viewport={{ once: false, margin: "-100px" }}
          >
            What excites me most is the challenge of finding causality in a world full of correlation. I love diving deep into sophisticated statistical methods, 
            but I&apos;m equally passionate about making complex concepts accessible to everyone. As a lifelong continuous learner, I&apos;m always exploring new methodologies 
            and staying current with the latest developments in data science. Whether I&apos;m building advanced causal inference models or teaching others 
            through my blog, I believe knowledge should be shared and understood.
          </motion.p>
          <motion.p 
            className="text-lg text-gray-600 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
            viewport={{ once: false, margin: "-100px" }}
          >
            My vision is to bridge the gap between cutting-edge data science research and practical business applications. I want to help organizations make better decisions 
            through data, while also contributing to the data science community by sharing what I learn along the way. The future of data science is collaborative, 
            and I&apos;m excited to be part of that evolution.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Advanced Data Science', desc: 'Causal Inference, Econometrics, Regression, Time-Series, A/B Testing', icon: '🎯', gradient: 'from-blue-600 via-purple-600 to-pink-600', hoverGradient: 'from-blue-50 via-purple-50 to-pink-50' },
              { title: 'High-End Data Engineering', desc: 'SQL/Python Pipelines, AWS Glue, Lambda, Terabyte+ Data Processing', icon: '⚡', gradient: 'from-purple-600 via-indigo-600 to-blue-600', hoverGradient: 'from-purple-50 via-indigo-50 to-blue-50' },
              { title: 'Business Analytics & BI', desc: 'Tableau, Power BI, Executive Dashboards, ROI Measurement', icon: '📊', gradient: 'from-pink-600 via-purple-600 to-blue-600', hoverGradient: 'from-pink-50 via-purple-50 to-blue-50' }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                className="bg-white p-8 rounded-2xl shadow-2xl border-2 border-gray-100 relative overflow-hidden group cursor-pointer transform-3d"
                initial={{ opacity: 0, y: 100, rotateY: 90, scale: 0.5 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.2, 
                  type: "spring",
                  stiffness: 150,
                  damping: 20
                }}
                viewport={{ once: false, margin: "-50px" }}
                whileHover={{ y: -15, scale: 1.05, rotateY: 8, rotateX: 5, rotateZ: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated gradient border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-20`}
                  initial={false}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Pulsing glow */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.gradient}`}
                  animate={{
                    opacity: [0.05, 0.1, 0.05],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Hover gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.hoverGradient} opacity-0 group-hover:opacity-100`}
                  initial={false}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
                  initial={{ x: "-200%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 1 }}
                />
                
                {/* Animated icon with background */}
                <motion.div
                  className="relative z-10 mb-6"
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-5xl mb-4"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                </motion.div>
                
                {/* Pulse effect rings */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 rounded-full bg-blue-500"
                  animate={{
                    scale: [1, 2.5, 1],
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 2,
                    delay: index * 0.3,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 rounded-full border-2 border-blue-500"
                  animate={{
                    scale: [1, 3, 1],
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: index * 0.5,
                    repeat: Infinity,
                  }}
                />
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 tracking-tight relative z-10">{skill.title}</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PersonalInterests = () => {
  return (
    <section id="interests" className="py-20 bg-gradient-to-br from-white to-purple-50/20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-8 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7, 
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            viewport={{ once: false, margin: "-100px" }}
          >
            Personal Interests
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              type: "spring",
              stiffness: 80
            }}
            viewport={{ once: false, margin: "-100px" }}
          >
            When I&apos;m not diving deep into data science, here&apos;s what keeps me inspired and energized:
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: '🎵 Music & Singing', 
                desc: 'I love to sing and explore different genres. Music helps me think creatively and find new perspectives on problems.',
                color: 'from-purple-500 to-pink-500'
              },
              { 
                title: '📚 Horror Books', 
                desc: "There's something thrilling about a good horror novel. It keeps my mind sharp and my imagination active.",
                color: 'from-gray-700 to-gray-900'
              },
              { 
                title: '🚗 Long Drives', 
                desc: "Nothing beats a long drive with good music. It's my way of clearing my mind and getting fresh ideas.",
                color: 'from-blue-500 to-cyan-500'
              },
              { 
                title: '🥾 Hiking & Nature', 
                desc: 'Hiking helps me disconnect from technology and reconnect with nature. Great for problem-solving and reflection.',
                color: 'from-green-500 to-emerald-500'
              },
              { 
                title: '👨‍🍳 Cooking', 
                desc: 'Cooking is like data science - you experiment, measure, and create something amazing from raw ingredients.',
                color: 'from-orange-500 to-red-500'
              },
              { 
                title: '🎯 Team Collaboration', 
                desc: "I thrive in group settings and love being a team player. I'm also comfortable working independently when needed.",
                color: 'from-indigo-500 to-purple-500'
              },
              { 
                title: '😄 Sarcastic Humor', 
                desc: "I bring a joyful and sarcastic perspective to everything. Life's too short to take everything seriously!",
                color: 'from-yellow-500 to-orange-500'
              },
              { 
                title: '🚀 Continuous Learning', 
                desc: "I'm always exploring new technologies and methodologies. The data science field never stops evolving.",
                color: 'from-blue-600 to-purple-600'
              }
            ].map((interest, index) => (
              <motion.div
                key={interest.title}
                className="bg-white p-6 rounded-2xl border-2 border-gray-200 relative overflow-hidden group cursor-pointer transform-3d"
                initial={{ opacity: 0, y: 100, rotateX: -45, scale: 0.5 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.08, 
                  type: "spring",
                  stiffness: 150,
                  damping: 20
                }}
                viewport={{ once: false, margin: "-50px" }}
                whileHover={{ y: -12, scale: 1.08, rotateX: -5, rotateY: 3, rotateZ: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Continuous gradient glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${interest.color} rounded-2xl`}
                  animate={{
                    opacity: [0.03, 0.08, 0.03],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Gradient border on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 rounded-2xl`}
                  initial={false}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full"
                  initial={false}
                  whileHover={{ translateX: "100%" }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Floating emoji with bounce */}
                <motion.h3 
                  className="text-2xl font-bold text-gray-800 mb-4 relative z-10 flex items-center gap-2"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2.5 + index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1
                  }}
                >
                  <motion.span
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.15
                    }}
                  >
                    {interest.title.split(' ')[0]}
                  </motion.span>
                  <span className="text-base">{interest.title.split(' ').slice(1).join(' ')}</span>
                </motion.h3>
                
                {/* Glow dot */}
                <motion.div
                  className="absolute top-3 right-3 w-2 h-2 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${interest.color.includes('purple') ? 'rgb(147, 51, 234)' : interest.color.includes('blue') ? 'rgb(59, 130, 246)' : 'rgb(168, 85, 247)'})`
                  }}
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [1, 0.5, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(0, 0, 0, 0)",
                      "0 0 10px 5px rgba(147, 51, 234, 0.5)",
                      "0 0 0 0 rgba(0, 0, 0, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                />
                
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{interest.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface Repository {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  html_url: string;
  homepage: string | null;
  private: boolean;
}

const ProjectCard = ({ repo, index, getLanguageColor, formatDate }: { repo: Repository; index: number; getLanguageColor: (lang: string) => string; formatDate: (date: string) => string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      key={repo.id}
      className="bg-white rounded-xl shadow-lg overflow-hidden relative group cursor-pointer transform-3d"
      initial={{ opacity: 0, y: 60, rotateX: 20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.08,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      viewport={{ once: false, margin: "-50px" }}
      whileHover={{ y: -10, scale: 1.03, rotateX: 5, rotateY: 2 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glowing border on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-bl-full pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.3,
        }}
      />
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-xl font-semibold text-gray-800">{repo.name}</h4>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            {repo.private ? 'Private' : 'Public'}
          </span>
        </div>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {repo.description || 'No description available'}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {repo.language && (
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLanguageColor(repo.language)}`}>
              {repo.language}
            </span>
          )}
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
            ⭐ {repo.stargazers_count}
          </span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
            🍴 {repo.forks_count}
          </span>
        </div>
        
        <div className="text-sm text-gray-500 mb-4">
          Updated: {formatDate(repo.updated_at)}
        </div>
        
        <div className="flex gap-3 relative z-10">
          <motion.a
            href={`/projects/${repo.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold relative"
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project
            <motion.svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  // Upcoming/Planned Data Science Projects
  const upcomingProjects = [
    {
      title: 'Advanced Causal Inference Framework',
      description: 'Developing sophisticated causal inference models for marketing attribution and campaign lift measurement. Implementing advanced econometric techniques to quantify true incremental impact of marketing campaigns.',
      tech: ['Python', 'R', 'Causal Inference', 'Econometrics', 'Propensity Score Matching'],
      github: 'https://github.com/Plpraju2001',
      status: 'In Development',
      type: 'upcoming',
      slug: 'causal-inference-framework'
    },
    {
      title: 'Real-time Customer Churn Prediction System',
      description: 'Building end-to-end ML pipeline for real-time churn prediction using advanced time-series analysis and ensemble methods. Features automated model retraining and A/B testing framework.',
      tech: ['Python', 'MLOps', 'Time Series', 'Ensemble Methods', 'AWS'],
      github: 'https://github.com/Plpraju2001',
      status: 'In Development',
      type: 'upcoming',
      slug: 'churn-prediction-system'
    },
    {
      title: 'Marketing Mix Modeling (MMM) Platform',
      description: 'Creating comprehensive MMM solution using Bayesian methods and hierarchical modeling to optimize marketing spend allocation across channels and measure long-term brand effects.',
      tech: ['Python', 'Bayesian Statistics', 'Hierarchical Modeling', 'Marketing Analytics'],
      github: 'https://github.com/Plpraju2001',
      status: 'In Development',
      type: 'upcoming',
      slug: 'marketing-mix-modeling'
    },
    {
      title: 'Advanced A/B Testing & Experimentation Platform',
      description: 'Developing statistical testing framework with proper power analysis, sequential testing, and causal inference capabilities for large-scale marketing experiments.',
      tech: ['Python', 'Statistics', 'Sequential Testing', 'Power Analysis'],
      github: 'https://github.com/Plpraju2001',
      status: 'In Development',
      type: 'upcoming',
      slug: 'ab-testing-platform'
    }
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Plpraju2001/repos?sort=updated&per_page=100');
        if (response.ok) {
          const repos = await response.json();
          // Filter out unwanted repositories
          const filteredRepos = repos.filter((repo: Repository) => 
            !['raju-portfolio', 'cursor', 'portf'].includes(repo.name.toLowerCase())
          );
          setRepositories(filteredRepos);
        } else {
          setRepositories([]);
        }
      } catch (error) {
        console.error('Error fetching repositories:', error);
        setRepositories([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchRepos();
  }, []);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'Python': 'bg-yellow-100 text-yellow-800',
      'JavaScript': 'bg-yellow-100 text-yellow-800',
      'TypeScript': 'bg-blue-100 text-blue-800',
      'Java': 'bg-orange-100 text-orange-800',
      'R': 'bg-blue-100 text-blue-800',
      'Jupyter Notebook': 'bg-orange-100 text-orange-800',
      'HTML': 'bg-red-100 text-red-800',
      'CSS': 'bg-blue-100 text-blue-800',
      'SQL': 'bg-purple-100 text-purple-800',
      'Shell': 'bg-gray-100 text-gray-800',
      'PowerShell': 'bg-blue-100 text-blue-800'
    };
    return colors[language] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            type: "spring",
            stiffness: 80,
            damping: 20
          }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: false, margin: "-100px" }}
          >
            Data Science & Engineering <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3,
              type: "spring"
            }}
            viewport={{ once: false, margin: "-100px" }}
          >
            A combination of completed GitHub projects and upcoming advanced data science initiatives 
            focusing on causal inference, high-end data engineering, and sophisticated analytics solutions.
          </motion.p>
        </motion.div>

        {/* GitHub Projects Section */}
        {repositories.length > 0 && (
          <div className="mb-16">
            <motion.h3 
              className="text-2xl font-bold text-gray-800 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Completed Projects (GitHub)
            </motion.h3>
            
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <motion.div 
                  className="rounded-full border-2 border-blue-600"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  style={{ width: 48, height: 48 }}
                >
                  <motion.div
                    className="rounded-full bg-blue-600"
                    initial={{ width: 4, height: 4 }}
                    animate={{ width: 16, height: 16 }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ margin: 'auto', marginTop: 4 }}
                  />
                </motion.div>
                <span className="ml-3 text-gray-600">Loading projects...</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {repositories.map((repo, index) => (
                  <ProjectCard 
                    key={repo.id}
                    repo={repo}
                    index={index}
                    getLanguageColor={getLanguageColor}
                    formatDate={formatDate}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Upcoming Projects Section */}
        <div>
          <motion.h3 
            className="text-2xl font-bold text-gray-800 mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: false, margin: "-50px" }}
          >
            Upcoming Data Science Projects
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden relative group cursor-pointer transform-3d"
              initial={{ opacity: 0, y: 60, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              viewport={{ once: false, margin: "-50px" }}
              whileHover={{ y: -10, scale: 1.03, rotateX: -5, rotateY: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Pulse animation overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-yellow-200/30 pointer-events-none"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "linear",
                }}
              />
              <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-semibold text-gray-800">{project.title}</h4>
                  <motion.span 
                    className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                    animate={{
                      boxShadow: [
                        "0 0 0 0px rgba(234, 88, 12, 0.4)",
                        "0 0 0 4px rgba(234, 88, 12, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    {project.status}
                  </motion.span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed relative z-10">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: techIndex * 0.05,
                        type: "spring",
                        stiffness: 200,
                        damping: 10
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <motion.a
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold relative z-10"
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                  <motion.svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: 'Data Scientist - Marketing Analytics',
      company: 'UnitedHealth Group',
      period: 'Jul 2024 - Present',
      logo: '/logos/unitedhealth-group-logo.png',
      logoFallback: 'https://logos-world.net/wp-content/uploads/2020/11/UnitedHealth-Group-Logo.png',
      achievements: [
        'Drove **22% engagement lift** and **15% churn reduction** through advanced causal inference analysis across multi-channel marketing campaigns',
        'Engineered **scalable SQL/Python pipelines** processing **terabyte-scale** datasets, cutting data prep time by **45%**',
        'Built **production-grade ML models** (regression, time-series) to quantify cross-channel ROI, informing multi-million dollar budget allocations',
        'Delivered **executive dashboards** in Tableau translating complex analytics into actionable insights for C-suite decision making',
        'Led **statistically rigorous A/B experiments** with marketing teams, applying hypothesis testing to validate campaign strategies',
        'Advanced **causal modeling** capabilities to measure true incremental impact, driving channel optimization and budget reallocation'
      ]
    },
    {
      title: 'Marketing Data Analyst',
      company: 'Brane Enterprises',
      period: 'Jan 2021 - Dec 2022',
      logo: '/logos/brane-enterprises-logo.png',
      logoFallback: 'https://via.placeholder.com/150?text=Brane+Enterprises',
      achievements: [
        'Analyzed **50K+ records** across customer lifecycle and campaigns, uncovering targeting insights that improved precision marketing',
        'Developed **automated ETL pipelines** (SQL, Python) reducing manual reporting errors by **35%** and enabling faster campaign iterations',
        'Applied **econometric techniques** to measure attribution and retention, building predictive models for customer lifetime value',
        'Created **interactive BI dashboards** (Tableau, Power BI) tracking campaign KPIs in real-time for executive monitoring',
        'Partnered with product teams to design **experimental frameworks** for acquisition funnel optimization and conversion testing',
        'Delivered data-driven insights that contributed to **22% ROI improvement** across marketing channel mix'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            Experience
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            My professional journey in data science and analytics.
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="bg-white rounded-xl shadow-lg p-6 mb-6 flex items-start gap-6 relative overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 80,
                damping: 20
              }}
              viewport={{ once: false, margin: "-50px" }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Animated border on hover */}
              <motion.div
                className="absolute inset-0 border-2 border-blue-500 opacity-0 group-hover:opacity-100 rounded-xl"
                initial={false}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Subtle gradient overlay */}
              <motion.div
                className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-bl-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              />

              <div className="flex-1 relative z-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <motion.h3 
                      className="text-xl font-semibold text-gray-800"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.3 }}
                    >
                      {exp.title}
                    </motion.h3>
                    <motion.p 
                      className="text-blue-600 font-medium"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {exp.company}
                    </motion.p>
                  </div>
                  <motion.span 
                    className="text-gray-500 text-sm mt-1 md:mt-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {exp.period}
                  </motion.span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.li 
                      key={idx} 
                      className="text-gray-600 leading-relaxed flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 3 }}
                    >
                      <motion.span 
                        className="text-blue-600 font-bold mr-2"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                      >
                        •
                      </motion.span>
                      <span dangerouslySetInnerHTML={{ __html: achievement.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-800 font-semibold">$1</strong>') }} />
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0 flex items-center justify-center relative z-10">
                <motion.div 
                  className="min-w-[130px] min-h-[130px] max-w-[150px] max-h-[150px] bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center p-4 shadow-sm"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} Logo`}
                    width={130}
                    height={130}
                    className="object-contain w-auto h-auto max-w-full max-h-full"
                    onError={(e) => {
                      // Fallback to external URL if local image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.src = exp.logoFallback;
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  const latestPost = getLatestBlogPost();
  
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            Data Science Blog
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            Insights, tutorials, and deep dives into advanced data science concepts, 
            causal inference, and marketing analytics.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-lg shadow-md p-8 text-center"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, margin: "-50px" }}
          >
            <div className="mb-6">
              <svg className="w-16 h-16 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon: Advanced Data Science Content</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I&apos;m currently working on comprehensive blog posts covering advanced topics in causal inference, 
              marketing mix modeling, and sophisticated analytics techniques. Stay tuned for deep dives into 
              the methodologies that drive real business impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Causal Inference</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Marketing Analytics</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Econometrics</span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">A/B Testing</span>
            </div>
            <motion.div
              className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-6 text-white shadow-2xl max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Latest Deep Dive</h3>
                    <p className="text-sm text-white/80">{latestPost.date}</p>
                  </div>
                </div>
                <div className="bg-white/20 px-2 py-1 rounded-full text-xs font-semibold">
                  NEW
                </div>
              </div>
              
              <h4 className="text-lg font-bold mb-2">&quot;{latestPost.title}&quot;</h4>
              <p className="text-white/90 mb-4 text-sm leading-relaxed">
                {latestPost.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 text-xs text-white/80">
                  <span className="flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    {latestPost.readTime}
                  </span>
                </div>
                <motion.a
                  href="/blog"
                  className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read Deep Dive
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Education = () => (
  <section id="education" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, margin: "-100px" }}
        className="text-center mb-16"
      >
        <motion.h2 
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          Education & Certifications
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          My academic background and professional certifications that drive my expertise.
        </motion.p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4"
            initial={{ opacity: 0, y: 60, x: -60 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, margin: "-50px" }}
            whileHover={{ y: -5, x: 3 }}
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Master of Science in Information Technology</h3>
              <p className="text-blue-600 font-medium mb-2">Clark University, Worcester, MA</p>
              <p className="text-gray-600">Advanced studies in high-end data science, machine learning, cloud computing, database systems, and information systems management. Specialized coursework in data analytics, business intelligence, and enterprise architecture.</p>
            </div>
            <div className="flex-shrink-0 flex items-center justify-center">
              <div className="min-w-[120px] min-h-[120px] max-w-[140px] max-h-[140px] bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center p-4 shadow-sm">
                <Image
                  src="/logos/clark-university-logo.png"
                  alt="Clark University Logo"
                  width={120}
                  height={120}
                  className="object-contain w-auto h-auto max-w-full max-h-full"
                  onError={(e) => {
                    // Fallback to external URL if local image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Clark_University_seal.svg/200px-Clark_University_seal.svg.png';
                  }}
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4"
            initial={{ opacity: 0, y: 60, x: 60 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, margin: "-50px" }}
            whileHover={{ y: -5, x: -3 }}
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Bachelor of Technology in Mechanical Engineering</h3>
              <p className="text-blue-600 font-medium mb-2">JNTUK, Visakhapatnam, Andhra Pradesh</p>
              <p className="text-gray-600">Strong foundation in critical thinking and basic aptitude skills with good understanding of analytical problem-solving methodologies.</p>
            </div>
            <div className="flex-shrink-0 flex items-center justify-center">
              <div className="min-w-[120px] min-h-[120px] max-w-[140px] max-h-[140px] bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center p-4 shadow-sm">
                <Image
                  src="/logos/jntuk-logo.png"
                  alt="JNTUK Logo"
                  width={120}
                  height={120}
                  className="object-contain w-auto h-auto max-w-full max-h-full"
                  onError={(e) => {
                    // Fallback to external URL if local image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://jntuk.edu.in/wp-content/uploads/2019/05/JNTUK_logo.png';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: false, margin: "-50px" }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.a
              href="https://www.linkedin.com/in/lakshmipathirajup/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <h4 className="font-semibold text-gray-800">View All Certifications</h4>
              </div>
              <p className="text-sm text-gray-600">Click to view my LinkedIn certifications</p>
            </motion.a>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-800">AWS Certified Data Analytics</h4>
              <p className="text-sm text-gray-600">Amazon Web Services</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-800">Power BI Data Analyst Associate</h4>
              <p className="text-sm text-gray-600">Microsoft Certified</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-800">Azure Database Administrator</h4>
              <p className="text-sm text-gray-600">Microsoft Certified</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);


const Contact = () => (
  <section id="contact" className="py-20">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, margin: "-100px" }}
        className="text-center max-w-2xl mx-auto"
      >
        <motion.h2 
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          I&apos;m always interested in new opportunities and collaborations. 
          Let&apos;s discuss how we can work together to solve complex data challenges and drive business growth.
        </motion.p>
        
        {/* Contact Information in Smaller Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg"
            initial={{ opacity: 0, x: -60, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, margin: "-50px" }}
            whileHover={{ y: -5, scale: 1.03, rotate: 1 }}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-sm mb-3">Plpraju.2000@gmail.com</p>
          <motion.a
            href="mailto:Plpraju.2000@gmail.com"
                className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Email
          </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-green-600 to-teal-600 rounded-xl p-6 text-white shadow-lg"
            initial={{ opacity: 0, x: 60, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: false, margin: "-50px" }}
            whileHover={{ y: -5, scale: 1.03, rotate: -1 }}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-sm mb-3">+1 (508) 410-3136</p>
              <motion.a
                href="tel:+15084103136"
                className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Additional Links */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.a
            href="https://www.linkedin.com/in/lakshmipathirajup"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect on LinkedIn
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/lakshmipathirajup/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Certifications
          </motion.a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-100 text-gray-800 py-8">
    <div className="container mx-auto px-6 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <motion.a
          href="https://github.com/Plpraju2001"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/lakshmipathirajup"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </motion.a>
      </div>
      <p className="text-gray-400">&copy; 2024 Lakshmipathiraju Pericharla. All rights reserved.</p>
    </div>
      </footer>
);

// Fixed Profile Picture Component
const FixedProfilePicture = () => {
  const [imageError, setImageError] = useState(false);
  const profileImage = '/profile-picture.jpg'; // Profile picture - updated

  return (
    <div className="fixed top-24 right-6 z-50 hidden lg:block">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-gray-200/50">
        {!imageError ? (
          <img
            src={profileImage}
            alt="Lakshmipathiraju Pericharla"
            width={128}
            height={128}
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
            style={{ objectPosition: 'center 30%', objectFit: 'cover' }}
            onError={() => setImageError(true)}
            loading="eager"
          />
        ) : (
          <div className="w-32 h-32 rounded-full border-4 border-blue-500 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
            LP
          </div>
        )}
        <div className="mt-3 text-center">
          <h3 className="text-sm font-semibold text-gray-800 tracking-tight">Raju P</h3>
        </div>
        
        {/* Navigation Menu */}
        <div className="mt-4 space-y-2">
          {['About', 'Interests', 'Projects', 'Experience', 'Blog', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={item === 'Blog' ? '/blog' : `#${item.toLowerCase()}`}
              className="block text-xs text-gray-700 hover:text-blue-600 transition-colors duration-300 py-1 px-2 rounded hover:bg-blue-50"
              whileHover={{ x: 2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
        <>
          <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
            * {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            h1, h2, h3, h4, h5, h6 {
              font-weight: 700;
              letter-spacing: -0.025em;
            }
            .gradient-text {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
          `}</style>
      <div className="min-h-screen bg-white">
      <Header />
        <FixedProfilePicture />
      <Hero />
      <About />
      <PersonalInterests />
      <Projects />
      <Experience />
      <Blog />
      <Education />
      <Contact />
      <Footer />
    </div>
    </>
  );
}