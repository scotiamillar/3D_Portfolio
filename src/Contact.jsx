import React from 'react'
import Navbar from './sections/Navbar'
import { Link } from 'react-router'
import ThreeDIcon from './sections/ThreeDIcon'

const Contact = () => {
  const contacts = [
    {
      name: 'GitHub',
      image: '/Github.png',
      href: 'https://github.com/scotiamillar',
      external: true,
    },
    {
      name: 'LinkedIn',
      image: '/Linkedin.png',
      href: 'https://www.linkedin.com/in/scotia-millar-b13100348/',
      external: true,
    },
    {
      name: 'Email',
      image: '/Mail.png',
      href: 'mailto:scotia.millar@mail.mcgill.ca',
      external: false,
    },
  ]

  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 md:px-8 pt-28 pb-20">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F7882F]"
          style={{
          fontFamily: "'Qumpellkano', serif",
          color: '#F7882F',
          }}
          >
            Contact Me
          </h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {contacts.map((contact) => {
            const card = (
              <div className="h-full flex flex-col items-center text-center p-7 rounded-2xl border border-gray-200
               bg-white/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#F7882F]/60">
                <div className="w-16 h-16 mb-5 flex items-center justify-center rounded-xl bg-[#F7882F]/10">
                  <ThreeDIcon src={contact.image} />
                </div>

                <h2 className="text-xl font-bold">
                  {contact.name}
                </h2>

                <span className="mt-2 text-sm font-semibold text-[#F7882F]">
                  {contact.name === 'Email'
                    ? 'Send an email →'
                    : 'View profile →'}
                </span>
              </div>
            )

            return contact.external ? (
              <a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus-visible:outline-2 focus-visible:outline-[#F7882F] rounded-2xl"
              >
                {card}
              </a>
            ) : (
              <a
                key={contact.name}
                href={contact.href}
                className="block focus-visible:outline-2 focus-visible:outline-[#F7882F] rounded-2xl"
              >
                {card}
              </a>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default Contact
