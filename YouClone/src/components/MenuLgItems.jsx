import React from 'react'
import { NavLink } from "react-router-dom"

const ItemMenuLg = ({ iconUnactive, iconActive, text, link }) => {
    return (
        <li>
            <NavLink title={text} to={link} end className={({ isActive }) =>
                "block w-full rounded-xl active:bg-gray-200 flex justify-start items-center gap-2 py-1/2 px-1 " + (isActive ? "bg-gray-200" + ' hover:bg-gray-300' + ' activeLink' : "bg-white" + ' hover:bg-gray-100' + ' unactiveLink')
            }>
                <div className='w-10 h-10 flex justify-center items-center rounded-full text-[#222] shrink-0 text-xl'>
                    {iconUnactive}
                    {iconActive}
                </div>
                <span style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    wordBreak: 'break-all',
                    WebkitLineClamp: '1'
                }} className='px-2 overflow-hidden w-full'>{text}</span>
            </NavLink>
        </li>
    )
}

export default ItemMenuLg