import React from 'react'

const Card = ({item}) => {
  return (
    <div className='bg-white rounded-xl shadow-xl overflow-hidden w-[350px] lg:w-[400px] transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-200'>
      <div className='relative overflow-hidden'>
        <img 
          src={item.image} 
          alt={item.title} 
          className='w-full h-48 object-cover transition-transform duration-300 hover:scale-110'
        />
        <div className='absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300'></div>
      </div>
      
      <div className='p-6'>
        <h1 className='font-bold text-xl mb-3 text-gray-800 hover:text-red-600 transition-colors'>
          {item.title}
        </h1>
        <p className='text-gray-600 leading-relaxed mb-4 text-sm'>
          {item.desc}
        </p>
        
        {/* Technology Tags */}
        {item.technologies && (
          <div className='flex flex-wrap gap-2 mb-4'>
            {item.technologies.map((tech, index) => (
              <span 
                key={index}
                className='px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium hover:bg-red-100 hover:text-red-700 transition-colors'
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <div className='flex gap-3'>
          <button className='bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 rounded-lg hover:from-gray-900 hover:to-black transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'>
            <a href={item.github} target='_blank' rel="noopener noreferrer" className='flex items-center gap-2'>
              <img src="/images/githubwhite.png" alt="github" className='w-5 h-5'/>
              <span className='font-medium'>View Code</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card