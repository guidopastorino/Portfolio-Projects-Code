import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useRef } from 'react'
import { useContext } from 'react'
import { MenuContext } from '../Context/menuContext'
import MenuLg from './MenuLg'
import { BiArrowBack } from 'react-icons/bi'
import DropdownBtn from './DropdownBtn'
import { MdOutlineSmartDisplay } from 'react-icons/md'
import { CiStreamOn } from 'react-icons/ci'


const Navbar = () => {

    const { menu, setMenu } = useContext(MenuContext)

    const [searchBar, setSearchBar] = useState(false)

    const [menuMobile, setMenuMobile] = useState(false)

    const menuRef = useRef()

    useEffect(() => {
        if (menuMobile) {
            document.querySelector('#root').classList.add('brightness-75')
            document.querySelector('#root').classList.add('md:brightness-100')
            document.querySelector('#root').classList.add('pointer-events-none')
            document.querySelector('#root').classList.add('md:pointer-events-auto')
        } else {
            document.querySelector('#root').classList.remove('brightness-75')
            document.querySelector('#root').classList.remove('md:brightness-100')
            document.querySelector('#root').classList.remove('pointer-events-none')
            document.querySelector('#root').classList.remove('md:pointer-events-auto')
        }
    }, [menuMobile])

    useEffect(() => {
        let handler = e => {
            if (e.target.id === 'btnMenuHamburger') return false;
            if (!menuRef.current.contains(e.target)) setMenuMobile(false)
        }

        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    })


    return (
        <>
            <header className='z-50 flex justify-between items-center py-3 px-4 gap-2.5 sticky top-0 bg-white'>

                <div className='flex justify-start items-center gap-2'>
                    <button id='btnMenuHamburger' onClick={() => {
                        if (window.visualViewport.width < 768) {
                            setMenuMobile(!menuMobile)
                        } else {
                            setMenu(!menu)
                        }
                    }} className='w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-200 active:bg-gray-300 text-[#222] text-2xl shrink-0 duration-100'>
                        <i class="bi bi-list"></i>
                    </button>

                    <a href="#" className='flex justify-start items-center gap-2 px-2'>
                        <i class="bi bi-youtube text-[#ff0000] text-3xl"></i>
                        <span className='font-medium text-black text-md'>YouClone</span>
                    </a>
                </div>

                <div className='flex justify-end sm:justify-center items-center gap-2.5 w-full'>
                    <div className='max-w-[600px] sm:w-full flex justify-center items-center h-10'>
                        <input className='w-full h-full border p-3 rounded-l-full outline-0 focus:border-[#b0b0b0] hidden sm:block' type="search" placeholder='Search...' />
                        <button onClick={() => {
                            if (window.visualViewport.width < 640) {
                                setSearchBar(true)
                            }
                        }} className='bg-transparent w-10 h-10 rounded-full shrink-0 text-[md] text-[#222] sm:bg-gray-100 sm:w-auto sm:h-full sm:border sm:border-l-0 sm:px-5 sm:rounded-r-full sm:rounded-l-none hover:bg-gray-200 active:bg-gray-300 duration-50'>
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                    <button className='w-10 h-10 hidden sm:block flex justify-center items-center rounded-full hover:bg-gray-200 active:bg-gray-300 text-[#222] text-lg shrink-0 duration-100'>
                        <i class="bi bi-mic-fill"></i>
                    </button>
                </div>

                <div className='hidden justify-end items-center gap-2.5 min-[350px]:flex'>
                    <DropdownBtn
                        btnIcon={<i class="bi bi-camera-video"></i>}
                        dropdownContent={
                            <>
                                <ul className='bg-white'>
                                    <li className='flex justify-start items-center gap-2 p-2 cursor-pointer hover:bg-gray-200 active:bg-gray-300 select-none rounded-none sm:rounded-xl text-3xl sm:text-xl'>
                                        <MdOutlineSmartDisplay />
                                        <span className='text-base sm:text-sm'>Upload video</span>
                                    </li>
                                    <li className='flex justify-start items-center gap-2 p-2 cursor-pointer hover:bg-gray-200 active:bg-gray-300 select-none rounded-none sm:rounded-xl text-3xl sm:text-xl'>
                                        <CiStreamOn />
                                        <span className='text-base sm:text-sm'>Live video</span>
                                    </li>
                                </ul>
                            </>
                        }
                    />
                </div>
            </header>

            {searchBar && <div className='z-50 flex justify-between items-center py-3 px-4 gap-2.5 fixed w-full top-0 bg-white block sm:hidden'>

                <button onClick={() => setSearchBar(false)} className='w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-200 active:bg-gray-300 text-[#222] text-2xl shrink-0 duration-100'>
                    <BiArrowBack />
                </button>

                {/*  */}
                <div className='w-full flex justify-center items-center h-10'>
                    <input className='w-full h-full border p-3 rounded-l-full outline-0 focus:border-[#b0b0b0] block' type="search" placeholder='Search...' />
                    <button onClick={() => {
                        if (window.visualViewport.width < 640) {
                            setSearchBar(true)
                        }
                    }} className='bg-transparent w-10 h-10 rounded-full shrink-0 text-[md] text-[#222] bg-gray-100 w-auto h-full border border-l-0 px-5 rounded-r-full rounded-l-none hover:bg-gray-200 active:bg-gray-300 duration-50'>
                        <i class="bi bi-search"></i>
                    </button>
                </div>
            </div>}

            {
                ReactDOM.createPortal(
                    <div ref={menuRef} className={`${menuMobile ? 'left-0' : 'left-[-100%]'} h-full fixed top-0 w-[70%] max-w-[600px] bg-white z-50 block md:hidden duration-300 shadow-lg overflow-y-auto`}>
                        <MenuLg mobile={true} />
                    </div>,
                    document.body
                )
            }
        </>
    )
}

export default Navbar