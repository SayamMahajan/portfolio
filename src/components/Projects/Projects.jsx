import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const projects = [
    {
      title: 'OneClickAway',
      desc: 'A comprehensive digital wallet built with the MERN stack, featuring PayPal integration, secure authentication, real-time transactions, and deployed on AWS cloud infrastructure.',
      image: "/images/oneclick.png",
      github: "https://github.com/SayamMahajan/Digital_Wallet",
      technologies: ['React', 'Node.js', 'MongoDB', 'PayPal API', 'AWS']
    },
    {
      title: 'Swaasthya',
      desc: "A smart healthcare management system designed to optimize OPD queues and streamline patient management in hospitals using modern web technologies.",
      image: "/images/swaasthya.png",
      github: "https://github.com/SayamMahajan/Swaasthya",
      technologies: ['React', 'Express.js', 'PostgreSQL', 'JWT']
    },
    {
      title: 'C3V',
      desc: 'An innovative e-commerce platform similar to eBay, specifically designed for VIT Bhopal students to buy and sell goods within the campus community.',
      image: "/images/c3v.png",
      github: "https://github.com/AngadSingh04/C3V_2",
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API']
    },
    {
      title: 'Sahej',
      desc: 'A comprehensive disaster management portal for real-time disaster tracking across the country, providing emergency assistance and resource coordination.',
      image: "/images/sahej.png",
      github: "https://github.com/SayamMahajan/sahej-DSN",
      technologies: ['React', 'Express.js', 'MySQL', 'Maps API']
    },
    {
      title: 'Myntra Clone',
      desc: 'A pixel-perfect clone of the Myntra e-commerce platform, built to understand and replicate modern e-commerce UI/UX patterns and functionality.',
      image: "/images/myntra.png",
      github: "https://github.com/SayamMahajan/Myntra_Clone",
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
    },
  ]
  
  return (
    <section id='projects' className='relative bg-gradient-to-br from-gray-800 to-gray-900 py-16 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-5xl font-bold mb-4 text-white'>My Projects</h2>
          <div className='w-24 h-1 bg-red-500 mx-auto mb-6'></div>
          <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
            A collection of full-stack applications showcasing modern web development practices, 
            cloud deployment, and user-centric design solutions.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-8'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects