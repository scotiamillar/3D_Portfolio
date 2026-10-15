import React from 'react'
import { Link } from 'react-router'


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7C331] px-4 sm:px-8 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">Scotia Millar</Link>
      <div className="flex items-center gap-3 sm:gap-6">
        <Link to="/" className="text-white hover:text-zinc-400 transition-colors duration-200">Home</Link>
        <Link to="/projects" className="text-white hover:text-zinc-400 transition-colors duration-200">Projects</Link>
        <Link to="/experience" className="text-white hover:text-zinc-400 transition-colors duration-200">Experience</Link>
        <Link to="/contact" className="text-white hover:text-zinc-400 transition-colors duration-200">Contact</Link>
        </div>
    </div>
    </nav>
  )
}

export default Navbar