import React from 'react'
import Navbar from './sections/Navbar'
import ThreeBanner from './sections/ThreeBanner'
import { Routes, Route } from 'react-router'
import Projects from './Projects.jsx'
import { Link } from 'react-router'

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
      <main className='max-w-7xl mx-auto'>
        <Navbar/>
        <ThreeBanner/>

        <section className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 pt-2 pb-8">
        <div className="bg-gray-100 rounded-xl border-l-4 border-[#F7882F] p-6">
        <h1
        className="text-4xl md:text-4xl font-bold"
        style={{
          fontFamily: "'Qumpellkano', serif",
          color: '#F7882F',
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
            className="relative h-240 bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url('/corkboard.jpg')" }}
            >
              
              <svg
              className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none -translate-y-68"
              viewBox="0 0 1000 600"
              preserveAspectRatio="xMidYMid meet"
              >
                <path
                d="M 0 10 Q 500 180 1000 100"
                stroke="#3f3025"
                strokeWidth="6"
                fill="none"
                />

                {[
                  [50, 28],
                  [150, 57],
                  [250, 79],
                  [350, 97],
                  [450, 111],
                  [550, 120],
                  [650, 126],
                  [750, 126],
                  [850, 120],
                  [950, 110],
                ].map(([x, y], i) => ( 
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="10"
                    fill="#F7C331"
                    className="fairy-bulb"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </svg>

            <img
            src="/Note.png"
            className="absolute top-[10%] left-[2%] w-[42%]"
            />

            <img
            src="/Polaroid.png"
            className="absolute right-[5%] w-[45%]"
            />

            
            <Link
              to="/projects"
              className="absolute bottom-[15%] left-[7%] w-[50%] lg:w-[60%]"
            >
              <img
                src="/Projects.png"
                alt="Projects"
                className="block w-full"
              />
            </Link>
      
            </div>
        </section>
      </main>
      }
      />

      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}

export default App
