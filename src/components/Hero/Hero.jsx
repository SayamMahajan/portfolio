import React from 'react'
import SocialLinks from './SocialLinks'
import FloatingIcons from './FloatingIcons'

const Hero = () => {
  return (
    <section className="relative mb-10 lg:px-2">
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-between lg:h-[90vh]'>
          <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-6 px-6 lg:px-0 lg:mt-0 mt-10'>
            <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>
              Hi There, <br />
              I'm <span className='bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent'>Sayam Mahajan</span> 
            </h1>
            <p className='md:text-2xl text-xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold'>
              FullStack Web Developer & Cloud Solutions Architect
            </p>
            <p className='mb-6 text-gray-600 leading-relaxed text-lg'>
              I'm a passionate web developer with expertise in Node.js, React, MongoDB, PostgreSQL, 
              and AWS cloud services. I build scalable, cloud-native applications that solve real-world problems.
            </p>
            
            <div className='pt-4'>
              <a href="/path/to/resume.pdf" download="Resume_Sayam_Mahajan">
                <button className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-8 py-4 rounded-2xl hover:from-purple-700 hover:via-pink-600 hover:to-red-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-bold text-lg">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
          
          <div className='md:w-1/2 relative flex justify-center items-end'>
            <img 
              src='/images/portfolioImage.png' 
              alt='Sayam Mahajan - Full Stack Developer' 
              className='lg:h-[90vh] h-96 w-auto object-contain' 
            />
            <FloatingIcons />
          </div>
        </div>
      </div>
      <SocialLinks />
    </section>
  )
}

export default Hero