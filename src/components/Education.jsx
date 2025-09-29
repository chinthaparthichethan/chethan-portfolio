import React from 'react'
import { motion } from 'framer-motion'
import { education } from '../data/data'

const Education = () => {
  return (
    <section id="education" className="section-padding bg-white/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-effect rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 md:mb-4">
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary-600 font-semibold text-sm md:text-base">{edu.institution}</p>
                  <p className="text-secondary-600 font-medium text-sm md:text-base">CGPA: {edu.cgpa}</p>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <p className="text-gray-600 font-medium text-sm md:text-base">{edu.duration}</p>
                  <p className="text-gray-500 text-xs md:text-sm">{edu.location}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">{edu.description}</p>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {edu.relevant_courses.map((course) => (
                    <span
                      key={course}
                      className="px-2 md:px-3 py-0.5 md:py-1 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-xs md:text-sm font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
