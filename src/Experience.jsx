import React from 'react'
import Navbar from './sections/Navbar'

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
    </header>

    <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <span className="w-2 h-8 rounded-full bg-[#F7882F]"/>
        Work Experience
        </h2>

        <div className="space-y-5">

        <article className="p-6 md:p-8 rounded-2xl border border-gray-200 bg-white/70 shadow-sm">
            <h3 className="text-xl font-bold">Girls Who Code Facilitator</h3>
            <p className="mt-3 text-gray-700 leading-7">
            Taught Python at Sacred Hearts High School.
            </p>
        </article>
        
        <article className="p-6 md:p-8 rounded-2xl border border-gray-200 bg-white/70 shadow-sm">
            <h3 className="text-xl font-bold">Private Tutor</h3>
            <p className="mt-3 text-gray-700 leading-7">
            Worked closely with a high school student with dyslexia and dyscalculia to complete an accelerated self-study
            college Statistics course in 1.5 months. Additional tutoring subjects include Precalculus and NY specialized 
            high school entrance exam (SHSAT).
            </p>
        </article>

        <article className="p-6 md:p-8 rounded-2xl border border-gray-200 bg-white/70 shadow-sm">
            <h3 className="text-xl font-bold">
            Docent, National Museum of Mathematics
            </h3>
            <p className="mt-3 text-gray-700 leading-7">
            Explained exhibits and mathematical concepts to visitors of all
            ages in English and French. Operated and repaired exhibits, and
            onboarded new volunteers.
            </p>
        </article>

        </div>
    </section>

    <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <span className="w-2 h-8 rounded-full bg-[#F7882F]" />
        Volunteering
        </h2>

        <article className="p-6 md:p-8 rounded-2xl border border-gray-200 bg-white/70 shadow-sm">
        <h3 className="text-xl font-bold leading-snug">
            YPC National Conductor and Chorister Mentor, Audition Facilitator,
            and Costumes
        </h3>
        <p className="mt-3 text-gray-700 leading-7">
            Worked with conductors from around the US at YPC National providing advice and feedback in conducting masterclasses. 
            Mentored elementary school children in choral singing and dance summer camp. Facilitated YPC auditions, helped behind
             the scenes at concerts, organized tour uniforms, taught dances and led sectional rehearsals.
        </p>
        </article>
    </section>

    </main>
    </>
  )
}

export default Experience
