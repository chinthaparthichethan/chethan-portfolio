import React from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '../data/data'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white section-padding">
      <div className="container-max">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg md:text-2xl font-bold gradient-text mb-3 md:mb-4">Portfolio</h3>
            <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base">
              Building digital experiences with modern technologies and creative solutions.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              {Object.entries(personalInfo.social).map(([platform, url]) => (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-300 text-sm md:text-base"
                >
                  {platform === 'github' && '🐙'}
                  {platform === 'linkedin' && '💼'}
                  {platform === 'twitter' && '🐦'}
                  {platform === 'portfolio' && '🌐'}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
            <div className="space-y-1.5 md:space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Contact Info</h4>
            <div className="space-y-1.5 md:space-y-2 text-gray-400 text-sm md:text-base">
              <p>{personalInfo.email}</p>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.location}</p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-4 md:pt-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            © 2025 {personalInfo.name}. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
