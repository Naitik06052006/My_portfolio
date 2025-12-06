import React from 'react'
import { NavLink } from 'react-router-dom'
import { navMenu } from '../assets/asstes'

const FooterNav = () => {
    return (
        <div>
            <div className='md:hidden flex space-x-8 fixed left-1/2 -translate-x-1/2 bottom-1 
                    border border-gray-500 backdrop-blur-xl rounded-full px-10 py-3'>
                {/* {
                    navMenu.map((item, index) => (
                        <NavLink className='hover:text-blue-400' key={index} to={item.path}>
                            {item.name}
                        </NavLink>
                    ))
                } */}
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
        </div>
    )
}

export default FooterNav
