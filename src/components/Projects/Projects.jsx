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
    <section id='projects' className='relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent'>
            My Projects
          </h2>
          <div className='w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8'></div>
          <p className='text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed'>
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