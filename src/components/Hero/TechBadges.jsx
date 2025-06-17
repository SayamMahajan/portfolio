import React from 'react'

const TechBadges = () => {
  return (
    <div className='flex flex-wrap gap-3 my-4'>
      <div className='bg-orange-100 border-2 border-orange-400 px-4 py-2 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105'>
        <div className='w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center'>
          <span className='text-white font-bold text-xs'>AWS</span>
        </div>
        <span className='text-sm font-semibold text-orange-700'>Solutions Architect Associate</span>
      </div>
      <div className='bg-blue-100 border-2 border-blue-400 px-4 py-2 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105'>
        <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center'>
          <span className='text-white font-bold text-xs'>AWS</span>
        </div>
        <span className='text-sm font-semibold text-blue-700'>Cloud Practitioner</span>
      </div>
    </div>
  )
}

export default TechBadges