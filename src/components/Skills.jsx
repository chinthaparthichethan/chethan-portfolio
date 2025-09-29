import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data/data'

const SkillBubble = ({ skill, index, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: delay + index * 0.1, 
        duration: 0.6, 
        type: "spring", 
        stiffness: 200 
      }}
      whileHover={{ 
        scale: 1.1, 
        rotate: 5,
        transition: { duration: 0.2 }
      }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary-300">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Floating decoration */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
        
        {/* Content - Only skill name, no icon */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-2">
          <span className="font-semibold text-gray-800 text-sm group-hover:text-primary-600 transition-colors duration-300">
            {skill.name}
          </span>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
      </div>
    </motion.div>
  )
}

const SkillCategory = ({ category, skillList, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="space-y-6"
    >
      {/* Category Header with Decorative Elements */}
      <div className="relative">
        <div className="flex items-center justify-center space-x-3">
          <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-primary-300 to-primary-500 rounded-full"></div>
          <motion.h3 
            whileHover={{ scale: 1.05 }}
            className="text-lg font-bold text-gray-900 capitalize bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent px-4 py-2 border border-gray-200 rounded-full bg-white shadow-md whitespace-nowrap"
          >
            {category}
          </motion.h3>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-primary-500 via-primary-300 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {skillList.map((skill, index) => (
          <SkillBubble 
            key={skill.name} 
            skill={skill} 
            index={index} 
            delay={delay}
          />
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            My <span className="gradient-text">Technical Skills</span>
          </motion.h2>
          
          {/* Decorative underline */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
            ></motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="w-2 h-2 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full"
            ></motion.div>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full"
            ></motion.div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive technical expertise across multiple domains
          </motion.p>
        </motion.div>

        {/* Skills Categories - 6 categories based on resume */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          <SkillCategory category="Programming Languages" skillList={skills.languages} delay={0.1} />
          <SkillCategory category="Frameworks & Libraries" skillList={skills.frameworks} delay={0.2} />
          <SkillCategory category="Web Technologies" skillList={skills.webTech} delay={0.3} />
          {/* <SkillCategory category="Python Libraries" skillList={skills.libraries} delay={0.4} /> */}
          <SkillCategory category="Databases" skillList={skills.databases} delay={0.5} />
          <SkillCategory category="Tools & Platforms" skillList={skills.tools} delay={0.6} />
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Professional <span className="gradient-text">Skills</span>
            </h3>
            <div className="w-20 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {skills.softSkills.map((skill, index) => (
              <SkillBubble 
                key={skill.name} 
                skill={skill} 
                index={index} 
                delay={0.8}
              />
            ))}
          </div>
        </motion.div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-primary-200/20 to-secondary-200/20 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-secondary-200/20 to-primary-200/20 rounded-full blur-3xl"
          ></motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
