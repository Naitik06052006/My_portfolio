import React from 'react'
import { navMenu } from '../assets/asstes'
import {FaArrowRight, FaGithub} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
const Navbar = () => {
    return (
        <div className='fixed w-full py-2 z-50 backdrop-blur-xs'>
            <div className='max-w-7xl mx-auto px-6'>
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <div className='text-2xl font-bold text-zinc-800'>
                        <span>THE-</span>
                        <span className='text-teal-800 font-orbitron'>NAITIK</span>
                    </div>
                    {/* Menu */}
                    <div className='hidden md:flex space-x-8 border border-gray-500 rounded-full px-10 py-3'>
                        {
                            navMenu.map((item, index) => (
                                <a className='hover:text-blue-400' key={index} href={`#${item}`}>{item}</a>
                            ))
                        }
                    </div>
                    {/* button */}
                    <div className='md:block hidden'>
                        <button className='px-3 py-2 border border-zinc-800 rounded-full 
                        flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-800 
                        hover:translate-y-1 transition duration-300 '>
                            Resume
                            <FaArrowRight className='text-gray-500 text-sm' />
                        </button>
                    </div>
                    <div className='md:hidden flex gap-2'>
                        <a href=""><FaLinkedin className='text-2xl'/></a>
                        <a href=""><FaGithub className='text-2xl'/></a>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar


