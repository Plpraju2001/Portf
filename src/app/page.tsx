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
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-lg font-bold text-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-xl font-bold text-gray-800">Lakshmipathiraju Pericharla</div>
            <div className="text-sm font-medium text-blue-600 mt-1">United States</div>
          </motion.div>
          <div className="flex space-x-4">
            <motion.a
              href="https://github.com/Plpraju2001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/lakshmipathirajup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

const Hero = () => {

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Clean static background - no animations */}
      <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 tracking-tight">
            Hello, I&apos;m <span className="gradient-text">Raju</span>
          </h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Data Scientist with Advanced Data Engineering & Business Analytics Expertise
          </motion.p>
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-gray-500 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Data Scientist with 3+ years of experience applying advanced data science and analytics to marketing and financial product domains. 
            Specializing in campaign measurement, causal inference, econometrics, and ROI-driven optimization with proven results in campaign performance and retention.
          </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#projects"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);
};

const About = () => {

  return (
    <section id="about" className="py-20 bg-gray-50 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
          <h2 className="text-4xl font-bold text-gray-800 mb-8 tracking-tight">About Me</h2>
          

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          My journey into data science began with a simple question: &quot;What if we could predict the future?&quot; This curiosity led me down a path where I discovered that data isn&apos;t just numbers—it&apos;s stories waiting to be told. 
          I&apos;ve spent the last few years transforming complex datasets into actionable insights that drive real business impact.
        </p>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          What excites me most is the challenge of finding causality in a world full of correlation. I love diving deep into sophisticated statistical methods, 
          but I&apos;m equally passionate about making complex concepts accessible to everyone. As a lifelong continuous learner, I&apos;m always exploring new methodologies 
          and staying current with the latest developments in data science. Whether I&apos;m building advanced causal inference models or teaching others 
          through my blog, I believe knowledge should be shared and understood.
        </p>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          My vision is to bridge the gap between cutting-edge data science research and practical business applications. I want to help organizations make better decisions 
          through data, while also contributing to the data science community by sharing what I learn along the way. The future of data science is collaborative, 
          and I&apos;m excited to be part of that evolution.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Advanced Data Science', desc: 'Causal Inference, Econometrics, Regression, Time-Series, A/B Testing' },
            { title: 'High-End Data Engineering', desc: 'SQL/Python Pipelines, AWS Glue, Lambda, Terabyte+ Data Processing' },
            { title: 'Business Analytics & BI', desc: 'Tableau, Power BI, Executive Dashboards, ROI Measurement' }
          ].map((skill, index) => (
            <motion.div
              key={skill.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3 tracking-tight">{skill.title}</h3>
              <p className="text-gray-600 leading-relaxed">{skill.desc}</p>
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
    <section id="interests" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 tracking-tight">Personal Interests</h2>
          
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            When I&apos;m not diving deep into data science, here&apos;s what keeps me inspired and energized:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: '🎵 Music & Singing', 
                desc: 'I love to sing and explore different genres. Music helps me think creatively and find new perspectives on problems.' 
              },
              { 
                title: '📚 Horror Books', 
                desc: "There's something thrilling about a good horror novel. It keeps my mind sharp and my imagination active." 
              },
              { 
                title: '🚗 Long Drives', 
                desc: "Nothing beats a long drive with good music. It's my way of clearing my mind and getting fresh ideas." 
              },
              { 
                title: '🥾 Hiking & Nature', 
                desc: 'Hiking helps me disconnect from technology and reconnect with nature. Great for problem-solving and reflection.' 
              },
              { 
                title: '👨‍🍳 Cooking', 
                desc: 'Cooking is like data science - you experiment, measure, and create something amazing from raw ingredients.' 
              },
              { 
                title: '🎯 Team Collaboration', 
                desc: "I thrive in group settings and love being a team player. I'm also comfortable working independently when needed." 
              },
              { 
                title: '😄 Sarcastic Humor', 
                desc: "I bring a joyful and sarcastic perspective to everything. Life's too short to take everything seriously!" 
              },
              { 
                title: '🚀 Continuous Learning', 
                desc: "I'm always exploring new technologies and methodologies. The data science field never stops evolving." 
              }
            ].map((interest) => (
              <div
                key={interest.title}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{interest.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{interest.desc}</p>
              </div>
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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Data Science & Engineering Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A combination of completed GitHub projects and upcoming advanced data science initiatives 
            focusing on causal inference, high-end data engineering, and sophisticated analytics solutions.
          </p>
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
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <span className="ml-3 text-gray-600">Loading projects...</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {repositories.map((repo, index) => (
                  <motion.div
                    key={repo.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
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
                      
                      <div className="flex gap-3">
                        <motion.a
                          href={`/projects/${repo.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                          whileHover={{ x: 5 }}
                        >
                          View Project
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Upcoming Projects Section */}
        <div>
          <motion.h3 
            className="text-2xl font-bold text-gray-800 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Upcoming Data Science Projects
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-semibold text-gray-800">{project.title}</h4>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <motion.a
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  whileHover={{ x: 5 }}
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
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
      description: 'Conducted descriptive and causal inference analysis for multi-channel campaigns, improving engagement by 22% and reducing churn by 15%. Built SQL/Python pipelines for large-scale (terabyte+) marketing data ingestion and transformation, reducing preparation time by 45%. Designed regression and time-series models to evaluate ROI across email, web, and in-app campaigns. Delivered campaign performance dashboards in Tableau and Keynote, enabling leaders to track CTR, conversion, and retention in real time. Partnered with marketing managers to design and analyze A/B experiments, applying significance testing to guide strategy. Developed causal models to measure incremental campaign lift, directly informing budget reallocations to higher-performing channels. Collaborated with scientists to prototype pipelines for large-scale marketing data ingestion and campaign filtering workflows.'
    },
    {
      title: 'Marketing Data Analyst',
      company: 'Brane Enterprises',
      period: 'Jan 2021 - Dec 2022',
      description: 'Collected, cleaned, and analyzed 50K+ customer and campaign records, uncovering insights that improved targeting strategies. Built SQL queries and Python ETL scripts for campaign pipelines, reducing reporting errors and manual effort by 35%. Conducted exploratory data analysis and econometric modeling to measure channel performance, customer retention, and attribution across campaigns. Developed Tableau and Power BI dashboards for campaign KPIs (conversion, churn, ROI), delivering actionable insights to stakeholders. Partnered with product managers to define success metrics for customer acquisition and funnel optimization experiments. Delivered recurring insights reports, contributing to a 22% lift in campaign ROI. Scoped and validated datasets for machine learning workflows supporting customer acquisition analytics.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey in data science and analytics.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="bg-white rounded-lg shadow-md p-6 mb-6"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-500 text-sm mt-1 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{exp.description}</p>
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Data Science Blog</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, tutorials, and deep dives into advanced data science concepts, 
            causal inference, and marketing analytics.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-lg shadow-md p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Education & Certifications</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          My academic background and professional certifications that drive my expertise.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Master of Science in Information Technology</h3>
            <p className="text-blue-600 font-medium mb-2">Clark University, Worcester, MA</p>
            <p className="text-gray-600">Advanced studies in high-end data science, machine learning, cloud computing, database systems, and information systems management. Specialized coursework in data analytics, business intelligence, and enterprise architecture.</p>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Bachelor of Technology in Mechanical Engineering</h3>
            <p className="text-blue-600 font-medium mb-2">JNTUK, Visakhapatnam, Andhra Pradesh</p>
            <p className="text-gray-600">Strong foundation in critical thinking and basic aptitude skills with good understanding of analytical problem-solving methodologies.</p>
          </motion.div>
        </div>

        <motion.div
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-600 mb-12">
          I&apos;m always interested in new opportunities and collaborations. 
          Let&apos;s discuss how we can work together to solve complex data challenges and drive business growth.
        </p>
        
        {/* Contact Information in Smaller Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -3, scale: 1.02 }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -3, scale: 1.02 }}
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
  const profileImage = 'https://media.licdn.com/dms/image/v2/D4E35AQELk1KhBtqpOA/profile-framedphoto-shrink_100_100/B4EZn.xfxkIIAk-/0/1760916012507?e=1762322400&v=beta&t=yZnBKwe6bmQW7J3WBbkQb1TfBFRcOEV89TWzXz_vUHk'; // LinkedIn profile picture

  return (
    <div className="fixed top-24 right-6 z-50 hidden lg:block">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-gray-200/50">
        <Image
          src={profileImage}
          alt="Lakshmipathiraju Pericharla"
          width={128}
          height={128}
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
        />
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