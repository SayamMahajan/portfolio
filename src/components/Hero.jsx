import React from 'react'

const Hero = () => {
  return (
    <section className="relative mb-10 lg:px-2">
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-between lg:h-[90vh]'>
          <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
            <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>Hi There, <br />I'm Sayam <span className='text-red-500'>Mahajan</span> </h1>
            <p className='md:text-2xl text-xl mb-4'>FullStack Web Developer & Cloud Solutions Architect</p>
            <p className='mb-4'>I'm a passionate web developer with expertise in Node.js, React, MongoDB, PostgreSQL, and AWS cloud services. I build scalable, cloud-native applications that solve real-world problems.</p>
            
            {/* AWS Certifications Badges */}
            <div className='flex flex-wrap gap-3 my-4'>
              <div className='bg-orange-100 border-2 border-orange-400 px-3 py-2 rounded-lg flex items-center gap-2 shadow-md'>
                <div className='w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center'>
                  <span className='text-white font-bold text-xs'>AWS</span>
                </div>
                <span className='text-sm font-semibold text-orange-700'>Solutions Architect Associate</span>
              </div>
              <div className='bg-blue-100 border-2 border-blue-400 px-3 py-2 rounded-lg flex items-center gap-2 shadow-md'>
                <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center'>
                  <span className='text-white font-bold text-xs'>AWS</span>
                </div>
                <span className='text-sm font-semibold text-blue-700'>Cloud Practitioner</span>
              </div>
            </div>
            
            <br />
            <a href="/path/to/resume.pdf" download="Resume_Sayam_Mahajan">
              <button className="bg-black text-white px-3 py-2 w-max rounded-md hover:bg-gray-800 transition-colors">Download Resume</button>
            </a>
          </div>
          <div className='md:w-1/2 relative flex justify-center items-end'>
            <img src='/images/portfolioImage.png' alt='profile image' className='lg:h-[90vh] h-96 w-auto object-contain' />
            
            {/* Enhanced floating tech icons */}
            <img src="/images/git.png" alt="git" className='absolute w-10 top-1 left-20 rounded-full md:hidden animate-bounce'/>
            <img src="/images/React.png" alt="react" className='absolute w-10 top-28 left-16 rounded-full md:hidden animate-pulse'/>
            <img src="/images/Express.png" alt="express" className='absolute w-10 top-10 left-4 rounded-full md:hidden'/>
            <img src="/images/NodeLogo.png" alt="node" className='absolute w-10 top-5 right-20 rounded-full md:hidden animate-pulse'/>
            <img src="/images/cpp.png" alt="cpp" className='absolute w-10 top-20 right-14 rounded-full md:hidden'/>
            <img src="/images/mongodb.svg" alt="mongo" className='absolute w-10 bottom-48 right-24 rounded-full md:hidden animate-bounce'/>
            <img src="/images/docker.png" alt="docker" className='absolute w-10 bottom-48 right-4 rounded-full md:hidden'/>
            <img src="/images/Golang.png" alt="golang" className='absolute w-10 bottom-36 right-11 rounded-full md:hidden'/>
            <img src="/images/postgre.png" alt="postgre" className='absolute w-12 bottom-36 left-5 rounded-full md:hidden'/>
            
            {/* AWS badges around profile */}
            <div className='absolute top-32 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold md:hidden animate-pulse'>
              AWS SAA
            </div>
            <div className='absolute bottom-60 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold md:hidden animate-pulse'>
              AWS CP
            </div>
          </div>
        </div>
      </div>
      <div className='absolute top-48 right-10 hidden bg-gray-200 p-1 lg:flex flex-col gap-3 rounded-full'>
        <a href="https://www.instagram.com/sayammahajan14/" className='hover:scale-110 transition-transform'><img src="/images/insta.png" alt="insta" className='w-14'/></a>
        <a href="https://www.linkedin.com/in/sayammahajan8/" className='hover:scale-110 transition-transform'><img src="/images/linkedin.png" alt="linkedin" className='w-14'/></a>
        <a href="https://github.com/SayamMahajan" className='hover:scale-110 transition-transform'><img src="/images/Github.png" alt="github" className='w-14'/></a>
        <a href="https://leetcode.com/u/SayamMahajan/" className='hover:scale-110 transition-transform'><img src="/images/Leetcode.png" alt="leetcode" className='w-14 rounded-full'/></a>
      </div>
    </section>
  )
}

export default Hero