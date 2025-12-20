import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { assets } from '../assets/asstes'
import { NavLink } from 'react-router-dom'


const Hero = () => (
    <div id='home' className='min-h-screen flex items-center pt-16'>
        <div className='max-w-7xl mx-auto px6 py-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                <div className='text-center lg:text-left'>
                    <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold mb-10'>
                        <span className='text-zinc-700'>MernStack Developer</span>
                        <br />
                        <span className='text-cyan-700'>Python</span>
                    </h1>
                    <p className='text-[16px] md:text-xl text-zinc-900 mb-6'>
                        I craft immersive web experience at the intersection of designing and technology.
                    </p>
                    <div className='flex flex-col md:flex-row items-center gap-4'>
                        <NavLink to={"/Work"} className='flex gap-2 items-center px-10 py-4 bg-black rounded-full text-slate-200 hover:text-white cursor-pointer'>
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
                <section className="flex items-center justify-center px-10 py-20">

                    {/* Floating Image */}
                    <div className="relative">
                        <img
                            src={assets.profileImg}
                            alt="profile"
                            className="w-90 h-90 object-cover rounded-2xl shadow-xl floating-image" />

                        {/* bottom badge */}
                        <div className="absolute bottom-1 right-1 bg-white/80 px-3 py-1 rounded-xl backdrop-blur-md shadow floating-image">
                            <p className="text-xl font-bold text-center">1+</p>
                            <p className="text-sm text-gray-700">years Exp</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
)

export default Hero