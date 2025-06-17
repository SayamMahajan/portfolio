import React from 'react'

const SocialLinks = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/sayammahajan14/",
      src: "/images/insta.png",
      alt: "Instagram",
      label: "Follow on Instagram"
    },
    {
      href: "https://www.linkedin.com/in/sayammahajan8/",
      src: "/images/linkedin.png",
      alt: "LinkedIn",
      label: "Connect on LinkedIn"
    },
    {
      href: "https://github.com/SayamMahajan",
      src: "/images/Github.png",
      alt: "GitHub",
      label: "View GitHub Profile"
    },
    {
      href: "https://leetcode.com/u/SayamMahajan/",
      src: "/images/Leetcode.png",
      alt: "LeetCode",
      label: "View LeetCode Profile"
    }
  ]

  return (
    <div className='absolute top-48 right-10 hidden bg-white/90 backdrop-blur-sm p-2 lg:flex flex-col gap-3 rounded-2xl shadow-lg border border-gray-200'>
      {socialLinks.map((link, index) => (
        <a 
          key={index}
          href={link.href} 
          className='hover:scale-110 transition-all duration-300 p-2 rounded-xl hover:bg-gray-100'
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
        >
          <img 
            src={link.src} 
            alt={link.alt} 
            className={`w-12 h-12 ${link.alt === 'LeetCode' ? 'rounded-full' : ''}`}
          />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks