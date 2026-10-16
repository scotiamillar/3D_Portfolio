import React from 'react'
import Navbar from './sections/Navbar'
import ExperienceTerminal from './sections/ExperienceTerminal'

const Experience = () => {
  return (
    <>
    <Navbar/>

    <main className="max-w-5xl mx-auto px-6 md:px-8 pt-28 pb-20">

    <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold" style={{
          fontFamily: "'Qumpellkano', serif",
          color: '#F7882F',
          }}
          >
        My Experience
        </h1>
        <div className="mt-6 rounded-xl bg-gray-100 border-l-4 border-[#F7882F] p-5 shadow-sm">
            <p className="text-lg leading-8 tracking-wide">
                Try typing in this terminal to look at my experience! If you've never used a command line, try typing 'help' to get started. (Note: I will add a pdf version of my resume in the future)
            </p>
        </div>
    </header>

    <ExperienceTerminal />

    </main>
    </>
  )
}

export default Experience
