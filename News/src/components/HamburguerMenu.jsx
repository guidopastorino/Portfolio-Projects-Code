import React from 'react'
import ReactDOM from 'react-dom';
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const HamburguerMenu = () => {

    const [menu, setMenu] = useState(false)

    const btnOpenMenuRef = useRef()
    const btnCloseMenuRef = useRef()
    const menuRef = useRef()

    useEffect(() => {
        if (menu) {
            document.querySelector('#app').classList.add('menuShadow')
            document.body.style.overflow = 'hidden'
        } else {
            document.querySelector('#app').classList.remove('menuShadow')
            document.body.style.overflow = ''
        }
    }, [menu])

    useEffect(() => {
        let handler = e => {
            if(!menuRef.current.contains(e.target)) setMenu(false)
        }

        document.addEventListener('mousedown', handler)

        return () => document.removeEventListener('mousedown', handler)
    })

    return (
        <>
            <div className='navbar__hamburguer'>
                <button ref={btnOpenMenuRef} className='btnMenu btnMenu--open' onClick={() => setMenu(true)}></button>

                {
                    ReactDOM.createPortal(
                        <div ref={menuRef} className={`menu ${menu ? 'menuVisible' : 'menuHidden'}`}>
                            <div className="menu__header">
                                <button ref={btnCloseMenuRef} className='btnMenu btnMenu--close' onClick={() => setMenu(false)}></button>
                            </div>
                            <div className="menu__body">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">New</a></li>
                                    <li><a href="#">Popular</a></li>
                                    <li><a href="#">Trending</a></li>
                                    <li><a href="#">Categories</a></li>
                                </ul>
                            </div>
                        </div>,
                        document.querySelector('body')
                    )
                }
            </div>
        </>
    )
}

export default HamburguerMenu