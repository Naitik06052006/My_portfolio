import React from 'react'
import { skillsData } from '../assets/asstes'
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <div id='skills' className='py-20'>
            <div className='max-w-7xl mx-auto px-6'>
                <motion.div 
                                initial={{ opacity: 0, y: 50 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 1, ease: "easeOut" }} 
                                viewport={{ once: false }} >
                <div className='text-center mb-16'>
                    <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
                         <span className='text-teal-500'>Technical</span>Skills
                    </h2>
                    <p className='text-xl mb-6 max-w-3xl mx-auto'>Matering the tools that power modern web experience</p>
                </div>
                </motion.div>
                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    whileHover={{ scale: 1.05 }}>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-6'>
                    {
                        skillsData.map((skillsData, index) =>(
                            <div key={index} className='p-6 border bg-teal-50/10 border-teal-700 rounded-xl text-center cursor-pointer hover:border-b-4 hover:border-b-teal-800 hover:border-r-4 hover:border-r-teal-800 hover:-translate-y-1 transition-all duration-300'>
                               <div className='w-16 h-16 mx-auto rounded-full flex items-center justify-center border border-gray-300 bg-gray-50 mb-4'>
                                    <skillsData.icon className='w-8 h-8 text-teal-800' />
                                </div> 
                                <h3 className='text-xl mb-2 font-bold text-zinc-600'>{skillsData.title}</h3>
                                <p className='text-sm text-zinc-500'>
                                    {skillsData.technologies.join(', ')}
                                </p>
                            </div>
                        ))
                    }
                </div>
                </motion.div>
            </div>
        </div>
    )
} 

export default Skills