import React from 'react'
import { motion } from 'framer-motion'
import { experience } from '../data/data'

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-effect rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 md:mb-4">
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-primary-600 font-semibold text-sm md:text-base">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <p className="text-gray-600 font-medium text-sm md:text-base">{exp.duration}</p>
                  <p className="text-gray-500 text-xs md:text-sm">{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-primary-500 mt-1 text-xs md:text-sm">•</span>
                    <span className="text-gray-600 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 md:px-3 py-0.5 md:py-1 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-xs md:text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
