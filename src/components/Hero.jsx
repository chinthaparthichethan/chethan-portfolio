import React from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '../data/data'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-max">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-6 md:mb-8 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 p-0.5 md:p-1"
          >
            <img 
              src={personalInfo.photo || "/images/chethan-photo.jpg"} 
              alt={personalInfo.name}
              className="w-full h-full rounded-full object-cover bg-white"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold gradient-text" style={{display: 'none'}}>
              {personalInfo.name.split(' ').map(n => n[0]).join('')}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-4"
          >
            Hi, I'm{' '}
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 md:mb-6"
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-gray-500 mb-6 md:mb-8 max-w-2xl mx-auto"
          >
            {personalInfo.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 text-sm md:text-base"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-2.5 md:py-3 glass-effect text-gray-700 rounded-full font-semibold hover:bg-white/20 transition-colors duration-300 text-sm md:text-base"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 md:mt-12 flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {Object.entries(personalInfo.social).map(([platform, url]) => (
              <motion.a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 glass-effect rounded-full text-gray-600 hover:text-primary-600 hover:bg-white/20 transition-all duration-300 text-sm md:text-base font-medium capitalize"
              >
                {platform === 'github' && 'GitHub'}
                {platform === 'linkedin' && 'LinkedIn'}
                {platform === 'twitter' && 'Twitter'}
                {platform === 'portfolio' && 'Portfolio'}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}

export default Hero
