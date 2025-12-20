import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa6';
const Footer = () => {
    return (
    <div className='py-12 border-t border-zinc-200'>
        <div className='max-w-7xl mx-auto px-6'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='mb-6 md:mb-0'>
                    <span className='uppercase text-2xl font-bold'>The-</span>
                    <span className='uppercase text-teal-800 text-2xl  font-bold'>Naitik</span>
                </div>
                <div className='flex space-x-6 mb-6 md:mb-0'>
                    <a href="https://www.facebook.com/naitik.garg.1690" target="_blank" rel="noopener noreferrer">
                   <FaFacebook className="text-blue-500 w-8 h-8" />
                   </a>
                   <a href="https://www.instagram.com/naitik_._06/" target="_blank" rel="noopener noreferrer"> 
                   <FaInstagram className="text-pink-500 w-8 h-8" />
                   </a>
                   <a href="https://wa.me/917599966668" target="_blank" rel="noopener noreferrer">
                   <FaWhatsapp className="text-green-500 w-8 h-8" />
                   </a>
                </div>
                <div className='text-zinc-900 sm:text-sm pb-5'>
                    @ 2025 The-Naitik Developer. All rights reserved
                </div>
            </div>
        </div>
    </div>
    )
}
export default Footer