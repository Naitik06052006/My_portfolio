import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
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
const Footer = () => {
    return (

        <div className='py-12 border-t border-zinc-200'>
            <div className='max-w-7xl mx-auto px-6'>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    {/* 🔥 Animated Logo */}
                    <motion.div
                        className="mb-6 md:mb-0 flex text-2xl font-bold uppercase"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false }}
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

                    <div className='flex space-x-6 mb-6 md:mb-0'>
                        <a href="https://www.facebook.com/naitik.garg.1690" target="_blank" >
                            <FaFacebook className="text-blue-500 w-8 h-8" />
                        </a>
                        <a href="https://www.instagram.com/naitik_._06/" target="_blank" >
                            <FaInstagram className="text-pink-500 w-8 h-8" />
                        </a>
                        <a href="https://wa.me/917599966668" target="_blank" >
                            <FaWhatsapp className="text-green-500 w-8 h-8" />
                        </a>
                    </div>
                    <div className="text-zinc-900 sm:text-sm text-center pb-5">
                        © 2025 The-Naitik Developer. <span className="block sm:inline">All rights reserved</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer