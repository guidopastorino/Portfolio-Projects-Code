import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import ReactDOM from 'react-dom'

const DropdownBtn = ({ btnIcon, dropdownContent }) => {

    const btnRef = useRef()
    const menuRef = useRef()

    const [dropdown, setDropdown] = useState(false)
    const [mobileDropdown, setMobileDropdown] = useState(false)

    useEffect(() => {
        let handler = e => {
            if (e.target === btnRef.current) return false;
            if (!menuRef.current.contains(e.target)) {
                setDropdown(false)
                setMobileDropdown(false)
            }
        }

        document.addEventListener('mousedown', handler)

        return () => document.removeEventListener('mousedown', handler)
    }, [dropdown])


    useEffect(() => {
        if (mobileDropdown) {
            document.querySelector('#root').classList.add('brightness-50')
            document.querySelector('#root').classList.add('md:brightness-100')
            document.querySelector('#root').classList.add('pointer-events-none')
            document.querySelector('#root').classList.add('md:pointer-events-auto')
        } else {
            document.querySelector('#root').classList.remove('brightness-50')
            document.querySelector('#root').classList.remove('md:brightness-100')
            document.querySelector('#root').classList.remove('pointer-events-none')
            document.querySelector('#root').classList.remove('md:pointer-events-auto')
        }
    }, [mobileDropdown])


    return (
        <div className='relative'>
            {/* button */}
            <button ref={btnRef} onClick={() => {
                window.visualViewport.width < 640
                    ? setMobileDropdown(true)
                    : setMobileDropdown(false)
                // 
                setDropdown(!dropdown)
            }} className={`${dropdown ? 'bg-white sm:bg-gray-200' : ''} w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-200 active:bg-gray-300 text-[#222] text-lg shrink-0 duration-100`}>
                {btnIcon}
            </button>
            {/* content */}
            {
                mobileDropdown
                    ? ReactDOM.createPortal(
                        <div ref={menuRef} style={{ boxShadow: '#22222224 0px 0px 15px' }} className={`${dropdown ? 'block' : 'hidden'} rounded-none overflow-x-hidden overflow-y-auto p-2 fixed z-50 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] md:hidden`}>
                            {dropdownContent}
                        </div>,
                        document.body
                    )
                    : <div ref={menuRef} style={{ boxShadow: '#22222224 0px 0px 15px' }} className={`${dropdown ? 'block' : 'hidden'} rounded-xl top-[120%] right-0 p-2 w-max absolute z-auto h-auto bg-white z-50`}>
                        {dropdownContent}
                    </div>
            }
        </div>
    )
}

export default DropdownBtn

{/* <i class="bi bi-camera-video"></i> */ }
{/* <i class="bi bi-bell"></i> */ }
{/* <i class="bi bi-person"></i> */ }