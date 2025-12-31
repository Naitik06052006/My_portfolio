import React from 'react'
import { navMenu } from '../assets/asstes'
import { FaArrowRight, FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion";

const text = "THE-NAITIK";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const letter = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { ease: "easeOut", duration: 0.4 },
    },
};
const Navbar = () => {
    return (
        <div className='fixed w-full py-2 z-50 backdrop-blur-lg'>
            <div className='max-w-7xl mx-auto px-6'>
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <NavLink to={"/"} className='text-2xl font-bold text-zinc-800'>
                        {/* 🔥 Animated Logo */}
                    <motion.div
                        className="flex text-2xl font-bold uppercase"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        {text.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={letter}
                                className={
                                    index >= 4   // NAITIK starts from index 4
                                        ? "text-teal-800"
                                        : "text-zinc-900"
                                }
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.div>

                    </NavLink>
                    {/* Menu */}
                    <div className='hidden md:flex space-x-8 border border-gray-500 rounded-full px-4 md:px-10 py-3'>
                        {
                            navMenu.map((item, index) => (
                                <NavLink
                                    key={index}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `hover:text-blue-400 ${isActive ? "animate-bounce text-blue-500" : ""}`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))
                        }
                    </div>
                    {/* button */}
                    <div className='md:block hidden'>
                        <NavLink to={"/contact"} className='px-3 py-2 border border-zinc-800 rounded-full 
                        flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-800 
                        hover:translate-y-1 transition duration-300 hover:animate-pulse '>
                            Get In Touch
                            <FaArrowRight className='text-gray-500 text-sm' />
                        </NavLink>
                    </div>
                    <div className='md:hidden flex gap-2'>
                        <a href="https://www.linkedin.com/in/naitik-garg-b99730214/" target="_blank"
                            ><FaLinkedin className='text-2xl' /></a>
                        <a href="https://github.com/Naitik06052006" target="_blank"
                            ><FaGithub className='text-2xl' /></a>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar


