import React from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '../data/data'

const About = () => {
  return (
    <section id="about" className="section-padding bg-white/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
>
  <div className="glass-effect rounded-2xl p-8 h-80 flex items-center justify-center">
    <div className="w-48 h-48 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 p-1">
      <img 
        src={personalInfo.photo || "/images/chethan-photo.jpg"} 
        alt={personalInfo.name}
        className="w-full h-full rounded-full object-cover bg-white"
        onError={(e) => {
          // Fallback to initials if image fails to load
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-4xl font-bold gradient-text" style={{display: 'none'}}>
        {personalInfo.name.split(' ').map(n => n[0]).join('')}
      </div>
    </div>
  </div>
</motion.div>


          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              {personalInfo.bio}
            </p>
               <div id="download-resume-btn"></div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-primary-500">📧</span>
                <span className="text-gray-700">{personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary-500">📱</span>
                <span className="text-gray-700">{personalInfo.phone}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-primary-500">📍</span>
                <span className="text-gray-700">{personalInfo.location}</span>
              </div>
            </div>
         
            <motion.a
              href={personalInfo.resume}
              
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
