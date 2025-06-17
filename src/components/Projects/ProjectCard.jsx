import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

const ProjectCard = ({ project }) => {
  return (
    <div className='bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden w-full max-w-[400px] transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/25 border border-white/20'>
      <div className='relative overflow-hidden group'>
        <img 
          src={project.image} 
          alt={project.title} 
          className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
        
        {/* Overlay with links */}
        <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <div className='flex gap-4'>
            <a 
              href={project.github} 
              target='_blank' 
              rel="noopener noreferrer"
              className='bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors shadow-lg'
              aria-label={`View ${project.title} source code`}
            >
              <Github className='w-6 h-6 text-gray-800' />
            </a>
            {project.live && (
              <a 
                href={project.live} 
                target='_blank' 
                rel="noopener noreferrer"
                className='bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors shadow-lg'
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink className='w-6 h-6 text-gray-800' />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className='p-6'>
        <h3 className='font-bold text-xl mb-3 text-white hover:text-purple-400 transition-colors'>
          {project.title}
        </h3>
        <p className='text-gray-300 leading-relaxed mb-4 text-sm'>
          {project.desc}
        </p>
        
        {/* Technology Tags */}
        {project.technologies && (
          <div className='flex flex-wrap gap-2 mb-4'>
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className='px-3 py-1 bg-white/10 backdrop-blur-sm text-purple-300 text-xs rounded-full font-medium hover:bg-purple-500/20 hover:text-purple-200 transition-colors border border-white/20'
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
            <button className='w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 font-semibold'>
              <Github className='w-4 h-4' />
              <span>View Code</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard