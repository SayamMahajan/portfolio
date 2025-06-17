import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

const ProjectCard = ({ project }) => {
  return (
    <div className='bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-[400px] transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-200'>
      <div className='relative overflow-hidden group'>
        <img 
          src={project.image} 
          alt={project.title} 
          className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300'></div>
        
        {/* Overlay with links */}
        <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <div className='flex gap-4'>
            <a 
              href={project.github} 
              target='_blank' 
              rel="noopener noreferrer"
              className='bg-white/90 p-3 rounded-full hover:bg-white transition-colors'
              aria-label={`View ${project.title} source code`}
            >
              <Github className='w-6 h-6 text-gray-800' />
            </a>
            {project.live && (
              <a 
                href={project.live} 
                target='_blank' 
                rel="noopener noreferrer"
                className='bg-white/90 p-3 rounded-full hover:bg-white transition-colors'
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink className='w-6 h-6 text-gray-800' />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className='p-6'>
        <h3 className='font-bold text-xl mb-3 text-gray-800 hover:text-red-600 transition-colors'>
          {project.title}
        </h3>
        <p className='text-gray-600 leading-relaxed mb-4 text-sm'>
          {project.desc}
        </p>
        
        {/* Technology Tags */}
        {project.technologies && (
          <div className='flex flex-wrap gap-2 mb-4'>
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className='px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium hover:bg-red-100 hover:text-red-700 transition-colors'
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <div className='flex gap-3'>
          <a 
            href={project.github} 
            target='_blank' 
            rel="noopener noreferrer" 
            className='flex-1'
          >
            <button className='w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 rounded-lg hover:from-gray-900 hover:to-black transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2'>
              <Github className='w-4 h-4' />
              <span className='font-medium'>View Code</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard