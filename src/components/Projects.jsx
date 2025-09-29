import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/data'

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            className="bg-white/95 backdrop-blur-md rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/30"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-6 border-b border-gray-100">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors duration-200 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              
              <div className="flex items-center space-x-3 mb-3">
                <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
                {project.featured && (
                  <span className="px-3 py-1 bg-gradient-to-r from-primary-400 to-secondary-400 text-white text-sm font-medium rounded-full">
                    Featured
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium border border-primary-100">
                  {project.category}
                </span>
                <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm border border-gray-100">
                  {project.duration}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Project Image/Screenshot */}
              <div className="aspect-video rounded-xl overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                
                {/* Fallback gradient background */}
                <div 
                  className={`w-full h-full bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center border border-gray-100 ${project.image ? 'hidden' : ''}`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">🚀</div>
                    <p className="text-gray-500">Project Screenshot</p>
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              {project.highlights && (
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Key Highlights</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3 p-3 bg-gray-50/50 rounded-lg border border-gray-100"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm leading-relaxed">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies Used */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-3 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200 shadow-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg"
                >
                  <span>GitHub</span>
                  <span>↗</span>
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-400 to-secondary-400 hover:from-primary-500 hover:to-secondary-500 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg"
                >
                  <span>Live Demo</span>
                  <span>↗</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const ProjectCard = ({ project, index, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
      onClick={() => onViewDetails(project)}
    >
      <div className="relative h-48 overflow-hidden">
        {/* Show image or fallback */}
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                console.log('Image failed to load:', project.image);
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
              onLoad={() => {
                console.log('Image loaded successfully:', project.image);
              }}
            />
            
            {/* Fallback gradient background */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 items-center justify-center"
              style={{ display: 'none' }}
            >
              <div className="text-center">
                <div className="text-3xl opacity-60 mb-2">🚀</div>
                <p className="text-xs text-gray-500">Image not found</p>
              </div>
            </div>
          </>
        ) : (
          // Show default when no image path provided
          <div className="w-full h-full bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl opacity-60 mb-2">🚀</div>
              <p className="text-xs text-gray-500">No image</p>
            </div>
          </div>
        )}

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-primary-400 to-secondary-400 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
            Featured
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="px-4 py-2 bg-white/95 rounded-full text-sm font-semibold text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg border border-gray-200"
          >
            View Details
          </motion.div>
        </div>
      </div>
      
      {/* Card content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-800 line-clamp-1">{project.title}</h3>
          <span className="text-xs px-2 py-1 bg-primary-50 text-primary-600 rounded-full whitespace-nowrap border border-primary-100">
            {project.category}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm line-clamp-3 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded-full border border-gray-100"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded-full border border-gray-100">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        {/* Updated buttons section - removed duration, styled buttons like modal */}
        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center space-x-1.5 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors duration-200 text-xs shadow-md"
          >
            <span>GitHub</span>
            <span>↗</span>
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center space-x-1.5 px-4 py-2 bg-gradient-to-r from-primary-400 to-secondary-400 hover:from-primary-500 hover:to-secondary-500 text-white rounded-lg font-semibold transition-all duration-200 text-xs shadow-md"
          >
            <span>Live Demo</span>
            <span>↗</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const categories = ['All', ...new Set(projects.map(p => p.category))]
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  const handleViewDetails = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 md:w-24 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Explore my portfolio of projects spanning web development, machine learning, and software engineering
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm border ${
                  filter === category
                    ? 'bg-gradient-to-r from-primary-400 to-secondary-400 text-white border-transparent shadow-lg'
                    : 'bg-white/80 border-gray-200 text-gray-600 hover:bg-white hover:border-gray-300 hover:shadow-md'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* Project Detail Modal */}
        <ProjectDetailModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  )
}

export default Projects
