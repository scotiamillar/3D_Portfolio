import React from 'react'


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-pink-200 px-4 sm:px-8 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">Scotia Millar</h1>
      <div className="flex items-center gap-3 sm:gap-6">
        <a href="#home" className="text-white hover:text-zinc-300 transition-colors duration-200">Home</a>
        <a href="#projects" className="text-white hover:text-zinc-300 transition-colors duration-200">Projects</a>
        <a href="#about" className="text-white hover:text-zinc-300 transition-colors duration-200">About</a>
        <a href="#contact" className="text-white hover:text-zinc-300 transition-colors duration-200">Contact</a>
        </div>
    </div>
    </nav>
  )
}

export default Navbar