import React from 'react'
import { motion } from 'framer-motion'
import { certifications } from '../data/data'

const CertificationCard = ({ certification, index }) => {
  const handleDownload = (certification) => {
    // You can add the certificate file URL to your certifications data
    if (certification.certificateFile) {
      const link = document.createElement('a')
      link.href = certification.certificateFile
      link.download = `${certification.name.replace(/\s+/g, '_')}_Certificate.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      // If no file, you could redirect to verification URL
      if (certification.verificationUrl) {
        window.open(certification.verificationUrl, '_blank')
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
    >
      {/* Certificate Info */}
      <div className="mb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 pr-3">
            <h3 className="text-lg font-bold text-gray-800 mb-1">{certification.name}</h3>
            <p className="text-primary-600 font-semibold text-sm mb-1">{certification.issuer}</p>
            <p className="text-gray-500 text-xs">{certification.date}</p>
          </div>
          <span className="text-xs px-3 py-1 bg-primary-50 text-primary-600 rounded-full whitespace-nowrap border border-primary-100 font-medium">
            Certificate
          </span>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {certification.description}
        </p>

        {/* Credential ID */}
        {/* {certification.credential && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 font-medium">Credential ID:</span>
              <span className="text-xs text-gray-700 font-mono bg-white px-2 py-1 rounded border border-gray-200">
                {certification.credential}
              </span>
            </div>
          </div>
        )} */}

        {/* Skills/Technologies */}
        {certification.skills && (
          <div className="mb-4">
            <h4 className="text-xs font-medium text-gray-500 mb-2">Skills Covered:</h4>
            <div className="flex flex-wrap gap-2">
              {certification.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded-full border border-gray-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <motion.button
          onClick={() => handleDownload(certification)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-1.5 px-4 py-2 bg-gradient-to-r from-primary-400 to-secondary-400 hover:from-primary-500 hover:to-secondary-500 text-white rounded-lg font-semibold transition-all duration-200 text-xs shadow-md"
        >
          <span>Download</span>
          <span>↓</span>
        </motion.button>
        
        {certification.verificationUrl && (
          <motion.a
            href={certification.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-1.5 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors duration-200 text-xs shadow-md"
          >
            <span>Verify</span>
            <span>↗</span>
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}

const Certifications = () => {
  return (
    <section id="certifications" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 md:w-24 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Professional certifications and achievements that validate my expertise in various technologies
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((certification, index) => (
            <CertificationCard 
              key={certification.id} 
              certification={certification} 
              index={index} 
            />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Continuous Learning</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              I'm committed to staying current with the latest technologies and best practices. 
              These certifications represent my dedication to professional development and expertise validation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
