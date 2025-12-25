// import React from 'react'
// import { profileData } from '../assets/asstes'
// import { FaCode } from 'react-icons/fa'
// import { assets } from '../assets/asstes'

// const About = () => {
//     return (
//         <div className='py-20'>
//             <div className='max-w-7xl mx-auto px-6'>
//                 <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
//                     <div className='order-1'>
//                         <h2 className='text-4xl md:text-5xl font-bold mb-4'>
//                             <span className='text-teal-800'>About</span>
//                             <span>Me</span>
//                         </h2>
//                         <p className='text-md mb-2 leading-8'>I'm a frontend developer with a passion for creating immersive digital experiences. With over 5 years in the industry, I've worked with startups and Fortune 500 companies to bring their visions to life.</p>
//                         <p className='text-md mb-2 leading-8'>My approach combines technical expertise with creative design thinking to build applications that are not only functional but also visually stunning.</p>
//                         <div className='grid grid-cols-2 lg:grid-cols-3 items-center justify-between gap-6 mb-6'>
//                             {
//                                 profileData.map((data, index) => (
//                                     <div key={index} className='w-full h-60 sm:w-50 p-6 border border-zinc-400 rounded hover:border-zinc-600 cursor-pointer hover:border-b-4 hover:border-r-4 hover:border-b-zinc-800 hover:border-r-zinc-800 transition duration-300 hover:-translate-y-1'>
//                                         <FaCode className='text-3xl mb-4' />
//                                         <h1 className='text-xl font-bold mb-4'>
//                                             {data.title}</h1>
//                                         <p>{data.technologies.join(', ')}</p>
//                                     </div>
//                                 ))
//                             }
//                         </div>
//                         <a href="/resume.pdf">
//                             <button className='px-8 py-4 bg-zinc-700 text-white rounded-full cursor-pointer transition duration-300 hover:bg-zinc-900 '>
//                                 Download Resume
//                             </button>
//                         </a>
//                     </div>
//                     <div className='order-1 lg:order-2 flex justify-center'>
//                         <div className='relative w-full max-w-md'>
//                             <div className='rounded-4xl overflow-hidden'>
//                                 <img className='w-full h-full object-cover' src={assets.profileImg} alt="Profile" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default About

import React, { useRef, useEffect } from 'react'
import { profileData } from '../assets/asstes'
import { FaCode } from 'react-icons/fa'
import { assets } from '../assets/asstes'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from('.about-heading', {
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 20%',
          end: 'bottom 20%',
          toggleActions: "play reverse play reverse"
        //   once: true,
        
        },
      })

      gsap.from('.about-text', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
         start: 'top 20%',
         end: 'bottom 20%',
        //   once: true,
        toggleActions: "play reverse play reverse"
        },
      })

      gsap.fromTo(
  '.about-card',
  {
    opacity: 0,
    y: 60,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionRef.current,
          start: 'top 20%',
          end: 'bottom 20%',
      
    //   once: true,
    toggleActions: "play reverse play reverse"
    },
  }
)

      gsap.from('.about-image', {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 20%',
          end: 'bottom 20%',
          markers: true,
        //   once: true,
        toggleActions: "play reverse play reverse"
        },
      })

    }, sectionRef)

    ScrollTrigger.refresh()

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h2 className="about-heading text-4xl md:text-5xl font-bold mb-6">
              <span className="text-teal-800">About </span>Me
            </h2>

            <p className="about-text mb-4 text-zinc-700 leading-8">
              I'm a frontend developer with a passion for creating immersive digital experiences.
              With over 5 years in the industry, I've worked with startups and Fortune 500 companies.
            </p>

            <p className="about-text mb-8 text-zinc-700 leading-8">
              My approach combines technical expertise with creative design thinking to build
              applications that are functional and visually stunning.
            </p>

            {/* CARDS */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {profileData.map((data) => (
                <div
                  key={data.title}
                  className="about-card min-h-[240px] p-6 border border-zinc-300 rounded-lg bg-white
                  transition hover:-translate-y-1 hover:border-zinc-800"
                >
                  <FaCode className="text-3xl mb-4" />
                  <h1 className="text-xl font-bold mb-4">{data.title}</h1>
                  <p className="text-zinc-600">{data.technologies.join(', ')}</p>
                </div>
              ))}
            </div>

            <a href="/resume.pdf">
              <button className="px-8 py-4 bg-zinc-800 text-white rounded-full hover:bg-zinc-900 transition">
                Download Resume
              </button>
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="about-image flex justify-center">
            <div className="w-full max-w-md rounded-3xl overflow-hidden">
              <img
                src={assets.profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
