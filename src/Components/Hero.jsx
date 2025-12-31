import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { assets } from '../assets/asstes'
import { NavLink } from 'react-router-dom'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, useGSAP);


const Hero = () => {
      const picRef = useRef(null)
  const badgeRef = useRef(null)

  // GSAP animation
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: picRef.current,
        start: 'top 85%',
        toggleActions: "play reverse play reverse"
      },
    })

    // Image animation
    tl.from(picRef.current, {
      scale: 0,
    //   rotate: 360,
      opacity: 0,
      duration: 2,
      ease: 'power2.out',
    })

    // Badge animation slightly after image
    tl.from(badgeRef.current, {
      y: 50,           // moves up 20px
      opacity: 0,      // fades in
      scale: 0,      // slight pop effect
      duration: 1,
      ease: 'back.out(1.7)',
    }, '-=0.3')       // overlap slightly with image animation
  }, [])
    return (
        <div id='home' className='flex items-center pt-16 min-h-[85svh] lg:min-h-screen'>
            <div className='max-w-7xl mx-auto px6 py-20'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    <div className='text-center lg:text-left'>
                        <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold mb-10'>
                            <span className='text-zinc-700'>MernStack Developer</span>
                            <br />
                            <span className='text-cyan-700'>React</span>
                        </h1>
                        <p className='text-[16px] md:text-xl text-zinc-900 mb-6'>
                            I craft immersive web experience at the intersection of designing and technology.
                        </p>
                        <div className='flex flex-col md:flex-row items-center gap-4'>
                            <NavLink to={"/work"} className='flex gap-2 items-center px-10 py-4 bg-black rounded-full text-slate-200 hover:text-white cursor-pointer'>
                                View My Work
                                <FaArrowRight />
                            </NavLink>
                            <NavLink to={"/contact"} className='flex gap-2 items-center border border-slate-400 rounded-full px-10 py-4 hover:border-slate-800 transition duration-300 cursor-pointer'>
                                Contact Me
                                <FaArrowRight />
                            </NavLink>
                        </div>
                    </div>

                    {/* Image-Section on right */}
                    <div className="overflow-hidden">
                    <section ref={picRef} className="flex items-center justify-center px-10 py-20">

                        {/* Floating Image */}
                        <div className="relative">
                            <img
                                src={assets.profileImg}
                                alt="profile"
                                className="w-90 h-90 object-cover rounded-2xl shadow-xl floating-image" />

                            {/* bottom badge */}
                            <div ref={badgeRef} className="absolute bottom-1 right-1 bg-white/80 px-3 py-1 rounded-xl backdrop-blur-md shadow floating-image">
                                <p className="text-xl font-bold text-center">1+</p>
                                <p className="text-sm text-gray-700">years Exp</p>
                            </div>
                        </div>
                    </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero