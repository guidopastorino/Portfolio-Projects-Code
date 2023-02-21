import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'

const HamburgerMenu = () => {

    const menuBtnRef = useRef()
    const menuRef = useRef()

    const [menu, setMenu] = useState(false)

    useEffect(() => {
        menu
        ? document.body.style.overflow = 'hidden'
        : document.body.style.overflow = 'hidden auto'
    }, [menu])

    useEffect(() => {
        let handler = e => {
            if(e.target === menuBtnRef.current) return false;
            if(!menuRef.current.contains(e.target)) setMenu(false)
        }

        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    })

    return (
        <>
            <button ref={menuBtnRef} onClick={() => setMenu(!menu)} className='nav__hamburgerBtn'>
                {
                    menu
                        ? <img src={require('../../images/icon-close.svg').default} alt="icon" />
                        : <img src={require('../../images/icon-hamburger.svg').default} alt="icon" />
                }
            </button>

            {/* menu */}

            {
                ReactDOM.createPortal(
                    <div className={`menu ${menu ? 'menuOpen' : 'menuClose'}`}>
                        <ul ref={menuRef}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>,
                    document.body
                )
            }

        </>
    )
}

export default HamburgerMenu