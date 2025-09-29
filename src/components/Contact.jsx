import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { personalInfo } from '../data/data'

const Contact = () => {
  const form = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await emailjs.sendForm(
        'service_b4hb86c',    // Your actual Service ID
        'template_g42m7wb',   // Your actual Template ID
        form.current,
        'yR7AmYpZ3VXrqMlCd'   // Your actual Public Key
      )

      console.log('SUCCESS!', result.status, result.text)
      setSubmitStatus('success')
      
      // Reset form after successful submission
      form.current.reset()
      
    } catch (error) {
      console.log('FAILED...', error.text)
      setSubmitStatus('error')
    }

    setIsSubmitting(false)
  }

  // Success message modal
  const SuccessMessage = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={() => setSubmitStatus('')}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        className="glass-effect rounded-xl p-8 max-w-md mx-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="text-6xl mb-4"
          >
            ✅
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-bold text-gray-900 mb-2"
          >
            Message Sent Successfully!
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 mb-6"
          >
            Thank you for reaching out! I'll get back to you as soon as possible.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={() => setSubmitStatus('')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Continue
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )

  // Error message modal
  const ErrorMessage = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={() => setSubmitStatus('')}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        className="glass-effect rounded-xl p-8 max-w-md mx-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="text-6xl mb-4"
          >
            ❌
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-bold text-gray-900 mb-2"
          >
            Send Failed!
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 mb-6"
          >
            Sorry, there was an error sending your message. Please try again or contact me directly.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={() => setSubmitStatus('')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Try Again
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <section id="contact" className="section-padding">
      {submitStatus === 'success' && <SuccessMessage />}
      {submitStatus === 'error' && <ErrorMessage />}
      
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Let's Connect</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-16 h-10 md:w-20 md:h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-semibold">
                    Email
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base">Email</p>
                    <p className="text-gray-600 text-xs md:text-sm">{personalInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-16 h-10 md:w-20 md:h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-semibold">
                    Phone
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base">Phone</p>
                    <p className="text-gray-600 text-xs md:text-sm">{personalInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-20 h-10 md:w-24 md:h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-semibold">
                    Location
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base">Location</p>
                    <p className="text-gray-600 text-xs md:text-sm">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4">
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <form 
              ref={form} 
              onSubmit={handleSubmit} 
              className="glass-effect rounded-xl md:rounded-2xl p-4 sm:p-6 space-y-4 md:space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="user_name" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm md:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm md:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm md:text-base"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm md:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`w-full px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600'
                } text-white`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
