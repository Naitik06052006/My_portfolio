import React from 'react'
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa6';
const Footer = () => {
    return (
    <div className='py-12 border-t border-zinc-200'>
        <div className='max-w-7xl mx-auto px-6'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='mb-6 md:mb-0'>
                    <span className='uppercase text-2xl font-bold'>The-Naitik</span>
                </div>
                <div className='flex space-x-6 mb-6 md:mb-0'>
                    <a href="">
                   <FaTwitter className="text-blue-500 w-8 h-8" />
                   </a>
                   <a href="">
                   <FaInstagram className="text-pink-500 w-8 h-8" />
                   </a>
                   <a href="">
                   <FaLinkedin className="text-blue-500 w-8 h-8" />
                   </a>
                </div>
                <div className='text-zinc-900 text-sm'>
                    @ 2025 The-Naitik Developer. All rights reserved
                </div>
            </div>
        </div>
    </div>
    )
}
export default Footer