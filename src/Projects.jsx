import React from 'react'
import Navbar from './sections/Navbar'
import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import DemoComputer from './sections/DemoComputer';


const projects = [
  {
    title: 'Transform Hierarchy of An Animated Character',
    video: '/videos/Dragon.mp4',
    description: 'Used numpy and trimesh to create a character and keyframe animation using canonical transformations',
  },
  {
    title: 'Anaglyphs and Depth of Field',
    video: '/videos/Frustum.mp4',
    description: "Drew a scene with blur due to depth of field, and drew anaglyphs that allow for 3D viewing with color filter glasses using Open GL and PyGLM."
  },
  {
    title: 'The ClubHub',
    video: '/videos/ClubHub.mp4',
    description: "Developed website using Next.js, React.js, Tailwind CSS, MongoDB, and Gemini API to easily find McGill clubs catered to described personality and interests"
  },
  {
    title: 'Interactive 3D Portfolio',
    video: '/videos/Portfolio.mp4',
    description: "Built responsive UI components using React and Tailwind CSS. Integrated interactive 3D scenes and animated objects using Three.js and React Three Fiber. Experimented with camera controls, animation, lighting, and visual design to create an engaging user experience. Deployed the website with Vercel"
  },
];


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const project = projects[selectedProject];

  return (
    <>
    <Navbar/>
    <main className="max-w-7xl mx-auto p-8 pt-24">
      <h1 className="text-4xl font-bold" style={{
          fontFamily: "'Qumpellkano', serif",
          color: '#F7882F',
          }}
          >
        My Projects </h1>

        <div className="mt-8 h-[400px] w-full overflow-hidden rounded-2xl bg-gray-100">
          <Canvas camera={{ position: [0, 1, 4], fov: 45 }}>
            <ambientLight intensity={1.5} />

            <directionalLight
              position={[3, 5, 5]}
              intensity={2}
            />

            <Suspense fallback={null}>
              <DemoComputer
                key={project.video}
                texture={project.video}
                position={[0, -1, 0]}
                scale={1}
              />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          onClick={() =>
            setSelectedProject(
              (selectedProject - 1 + projects.length) % projects.length
            )
          }
          aria-label="Previous project"
          className="rounded-full bg-[#F7882F] p-2 text-2xl text-white transition hover:bg-[#F7C331] hover:text-white duration-200"
        >
          ←
        </button>

        <div className="text-center">
          <h2 className="text-2xl font-bold">
            {project.title}
          </h2>
          <p className="mt-2 text-zinc-400">
            {project.description}
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            {selectedProject + 1} / {projects.length}
          </p>
        </div>

        <button
          onClick={() =>
            setSelectedProject(
              (selectedProject + 1) % projects.length
            )
          }
          aria-label="Next project"
          className="rounded-full bg-[#F7882F] p-2 text-2xl text-white transition hover:bg-[#F7C331] hover:text-white duration-200"
        >
          →
        </button>
      </div>
    </main>

    {/* Credit the model creator */}
    <footer className="mt-16 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
      <p>
        3D computer model:{" "}
        <a
          href="https://skfb.ly/oERVN"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-800"
        >
          "3d computer - Sketchfab Weekly - 11 Mar '23"
        </a>{" "}
        by BrushDip, licensed under{" "}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-800"
        >
          Creative Commons Attribution 4.0 International (CC BY 4.0)
        </a>. Modified for use in this portfolio.
      </p>
    </footer>
    </>
  )
}

export default Projects
