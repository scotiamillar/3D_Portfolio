import React from 'react'
import Navbar from './sections/Navbar'
import ThreeBanner from './sections/ThreeBanner'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar/>
      <ThreeBanner/>

      <section className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 pt-2 pb-8">
      <div className="bg-gray-100 rounded-xl border-l-4 border-pink-300 p-6">
       <h1
       className="text-4xl md:text-4xl font-bold"
       style={{
        fontFamily: "'Qumpellkano', serif",
        color: '#F9A8D4',
        }}
        >
          About Me
          </h1>

          <p
          className="text-lg font-normal text-black mt-4 pl-4"
          > I'm a third-year Mathematics and Computer Science 
          student at McGill University with a strong interest in computer graphics, 3D, animation, simulation, and
          game development. I enjoy working on projects that combine programming, mathematics, and creativity. 
          Through my coursework and personal projects, I've been exploring real-time graphics, character animation, 
          and Unreal Engine.</p>
          </div>

          <div
          className="relative min-h-160 bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/corkboard.jpg')" }}
          >
          <img
          src="/Note.png"
          className="absolute top-[8%] left-[5%] w-[42%]"
          />

          <img
          src="/Polaroid.png"
          className="absolute right-[5%] w-[45%]"
          />
          </div>
      </section>
    </main>
  )
}

export default App
