import React from 'react'
import Card from './Card'

const Projects = () => {
  const projectJson = [
    {
      title: 'OneClickAway',
      desc: 'A digital wallet based on the MERN stack, featuring PayPal integration, a dynamic interface, secure money transfer, and transaction history.',
      image: "/images/oneclick.png",
      github: "https://github.com/SayamMahajan/Digital_Wallet",
    },
    {
      title: 'Swaasthya',
      desc: "A web portal designed to manage queues for OPDs and patient management in hospitals.",
      image: "/images/swaasthya.png",
      github: "https://github.com/SayamMahajan/Swaasthya",
    },
    {
      title: 'C3V',
      desc: 'An e-commerce portal similar to eBay for VIT Bhopal, where students can buy and sell goods.',
      image: "/images/c3v.png",
      github: "https://github.com/AngadSingh04/C3V_2",
    },
    {
      title: 'Sahej',
      desc: 'A disaster management portal for tracking disasters across the country and providing help and assistance.',
      image: "/images/sahej.png",
      github: "https://github.com/SayamMahajan/sahej-DSN",
    },
    {
      title: 'Myntra Clone',
      desc: 'A Myntra clone portal designed to analyze the styling of Myntra in order to gain knowledge.',
      image: "/images/myntra.png",
      github: "https://github.com/SayamMahajan/Myntra_Clone",
    },
  ]
  
  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 mt-3 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-10'>
          {projectJson.map((items) =>{
            return <Card key={items.title} item={items} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
