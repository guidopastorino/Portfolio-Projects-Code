import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuSmItem = ({ iconUnactive, iconActive, text, link }) => {
    return (
        <li>
            <NavLink to={link} end className={({ isActive }) => "block rounded flex justify-center flex-col items-center py-2 gap-2 active:bg-gray-200" + (isActive ? " bg-gray-200" + ' hover:bg-gray-300' + ' activeLink' : " bg-white" + ' hover:bg-gray-100' + ' unactiveLink')}>
                <div className='w-10 h-10 flex justify-center items-center rounded-full text-[#222] text-xl shrink-0'>
                    {iconUnactive}
                    {iconActive}
                </div>
                <span className='px-1 text-[10px]'>{text}</span>
            </NavLink>
        </li>
    )
}

export default MenuSmItem