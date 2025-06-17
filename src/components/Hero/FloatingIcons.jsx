import React from 'react'

const FloatingIcons = () => {
  const icons = [
    { src: "/images/git.png", alt: "Git", className: "absolute w-10 top-1 left-20 rounded-full md:hidden animate-bounce" },
    { src: "/images/React.png", alt: "React", className: "absolute w-10 top-28 left-16 rounded-full md:hidden animate-pulse" },
    { src: "/images/Express.png", alt: "Express", className: "absolute w-10 top-10 left-4 rounded-full md:hidden" },
    { src: "/images/NodeLogo.png", alt: "Node.js", className: "absolute w-10 top-5 right-20 rounded-full md:hidden animate-pulse" },
    { src: "/images/cpp.png", alt: "C++", className: "absolute w-10 top-20 right-14 rounded-full md:hidden" },
    { src: "/images/mongodb.svg", alt: "MongoDB", className: "absolute w-10 bottom-48 right-24 rounded-full md:hidden animate-bounce" },
    { src: "/images/docker.png", alt: "Docker", className: "absolute w-10 bottom-48 right-4 rounded-full md:hidden" },
    { src: "/images/Golang.png", alt: "Go", className: "absolute w-10 bottom-36 right-11 rounded-full md:hidden" },
    { src: "/images/postgre.png", alt: "PostgreSQL", className: "absolute w-12 bottom-36 left-5 rounded-full md:hidden" }
  ]

  return (
    <>
      {icons.map((icon, index) => (
        <img 
          key={index}
          src={icon.src} 
          alt={icon.alt} 
          className={icon.className}
        />
      ))}
      
      {/* AWS badges */}
      <div className='absolute top-32 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold md:hidden animate-pulse'>
        AWS SAA
      </div>
      <div className='absolute bottom-60 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold md:hidden animate-pulse'>
        AWS CP
      </div>
    </>
  )
}

export default FloatingIcons