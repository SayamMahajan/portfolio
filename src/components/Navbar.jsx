import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60 px-4 lg:px-2 shadow-lg'>
      <div className='max-w-7xl mx-auto flex h-16 items-center'>
        <div className='md:mr-4 flex justify-between w-full'>
          <a href="#" className='mr-6 flex items-center space-x-2 text-xl font-bold'>
            @Sayam<span className='bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>Mahajan</span>
          </a>
          <nav className='md:flex hidden items-center space-x-8 text-lg font-semibold'>
            <a href="#about" className='transition-colors hover:text-purple-600 text-gray-700 hover:scale-105 transform duration-200'>About</a>
            <a href="#experience" className='transition-colors hover:text-purple-600 text-gray-700 hover:scale-105 transform duration-200'>Experience</a>
            <a href="#projects" className='transition-colors hover:text-purple-600 text-gray-700 hover:scale-105 transform duration-200'>Projects</a>
            <a href="#certificates" className='transition-colors hover:text-purple-600 text-gray-700 hover:scale-105 transform duration-200'>Certificates</a>
            <a href="#contact" className='transition-colors hover:text-purple-600 text-gray-700 hover:scale-105 transform duration-200'>Contact</a>
          </nav>
        </div>
        <button className='inline-flex items-center justify-center rounded-md md:hidden p-2 hover:bg-gray-100 transition-colors' onClick={handleMobileMenuClick}>
          <span className='sr-only'>Open main menu</span>
          {mobileMenuOpen ? (
            <X className='w-6 h-6' aria-hidden='true' />
          ) : (
            <Menu className='w-6 h-6' aria-hidden='true' />
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className='md:hidden bg-white/95 backdrop-blur-lg border-t'> 
          <div className='space-y-1 px-4 pb-4 pt-2'>
            <a href="#about" className='block rounded-lg px-4 py-3 text-base font-semibold text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all'>About</a>
            <a href="#experience" className='block rounded-lg px-4 py-3 text-base font-semibold text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all'>Experience</a>
            <a href="#projects" className='block rounded-lg px-4 py-3 text-base font-semibold text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all'>Projects</a>
            <a href="#certificates" className='block rounded-lg px-4 py-3 text-base font-semibold text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all'>Certificates</a>
            <a href="#contact" className='block rounded-lg px-4 py-3 text-base font-semibold text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all'>Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar