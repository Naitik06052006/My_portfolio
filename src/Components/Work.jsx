import React from 'react'
import { projectData } from '../assets/asstes'
import { motion } from "framer-motion";

const Work = () => {
    return (
        <div id='Work' className='py-20'>
            <div className='max-w-7xl mx-auto px-4 py-6'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: false }} >
                    <div className='mb-16 text-center'>
                        <h2 className='text-3xl md:text-4xl font-bold text-slate-700 mb-6 text-center'>
                            Featured
                            <span className='text-teal-600'>Projects</span>
                        </h2>
                        <p className='text-xl max-w-3xl mx-auto '>Cutting-edge web application built with modern technologies</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1,delay:0., ease: "easeOut" }}
                    viewport={{ once: false }}
                    whileHover={{ scale: 1.05,  amount: 0.3}}>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-12'>
                        {
                            projectData.map((project, index) => (
                                <div key={index} className='group rounded overflow-hidden hover:shadow-lg transition cursor-pointer border border-gray-200 hover:-translate-y-1 duration-300'>
                                    <div className='relative flex items-center justify-center'>
                                        <img src={project.image} className='group-hover:opacity-100' alt="" />
                                    </div>
                                    <div className='p-6'>
                                        <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                                        <p className='text-slate-900 text-sm'>{project.description}</p>
                                        <div className='flex flex-wrap gap-2 mt-6'>
                                            {project.tech.map((language, index) => (
                                                <span key={index} className='px-4 py-1 bg-gray-100 text-xs font-semibold rounded-full'>
                                                    {language}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Work