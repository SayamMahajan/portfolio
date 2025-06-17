import React from 'react'
import SocialLinks from './SocialLinks'
import TechBadges from './TechBadges'
import FloatingIcons from './FloatingIcons'

const Hero = () => {
  return (
    <section className="relative mb-10 lg:px-2">
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-between lg:h-[90vh]'>
          <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
            <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>
              Hi There, <br />
              I'm Sayam <span className='text-red-500'>Mahajan</span> 
            </h1>
            <p className='md:text-2xl text-xl mb-4'>
              FullStack Web Developer & Cloud Solutions Architect
            </p>
            <p className='mb-4 text-gray-600 leading-relaxed'>
              I'm a passionate web developer with expertise in Node.js, React, MongoDB, PostgreSQL, 
              and AWS cloud services. I build scalable, cloud-native applications that solve real-world problems.
            </p>
            
            <TechBadges />
            
            <div className='pt-4'>
              <a href="/path/to/resume.pdf" download="Resume_Sayam_Mahajan">
                <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold">
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