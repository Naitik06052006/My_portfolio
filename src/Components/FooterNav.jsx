import React from 'react'
import { NavLink } from 'react-router-dom'
import { navMenu } from '../assets/asstes'

const FooterNav = () => {
    return (
        <div>
            <div className=' md:hidden flex space-x-8 fixed left-2 bottom-1 border border-gray-500 backdrop-blur-xl rounded-full px-10 py-3'>
                {
                    navMenu.map((item, index) => (
                        <NavLink className='hover:text-blue-400' key={index} to={item.path}>{item.name}</NavLink>
                    ))
                }
            </div>
        </div>
    )
}

export default FooterNav
