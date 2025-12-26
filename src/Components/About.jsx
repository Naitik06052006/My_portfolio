
import React from 'react'
import { profileData } from '../assets/asstes'
import { FaCode } from 'react-icons/fa'
import { assets } from '../assets/asstes'
import { motion } from "framer-motion";

const About = () => {


    return (
        <section className="py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: false }}
                        >
                            <div>
                                <h2 className="about-heading text-4xl md:text-5xl font-bold mb-6">
                                    <span className="text-teal-800">About </span>Me
                                </h2>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <div>
                                <p className="about-text mb-4 text-zinc-700 leading-8">
                                    I'm a frontend developer with a passion for creating immersive digital experiences.
                                    With over 5 years in the industry, I've worked with startups and Fortune 500 companies.
                                </p>

                                <p className="about-text mb-8 text-zinc-700 leading-8">
                                    My approach combines technical expertise with creative design thinking to build
                                    applications that are functional and visually stunning.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {profileData.map((data) => (
                                    <div
                                        key={data.title}
                                        className="about-card min-h-\[240px\] p-6 border border-zinc-300 rounded-lg bg-white
                  transition hover:-translate-y-1 hover:border-zinc-800"
                                    >
                                        <FaCode className="text-3xl mb-4" />
                                        <h1 className="text-xl font-bold mb-4">{data.title}</h1>
                                        <p className="text-zinc-600">{data.technologies.join(', ')}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: false }}>
                            <div>
                                <a href="/resume.pdf">
                                    <button className="px-8 py-4 bg-zinc-800 text-white rounded-full hover:bg-zinc-900 transition">
                                        Download Resume
                                    </button>
                                </a>
                            </div>
                        </motion.div>

                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.3 }}>
                        <div className="about-image flex justify-center">
                            <div className="w-full max-w-md rounded-3xl overflow-hidden">
                                <img
                                    src={assets.profileImg}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default About

