import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import Dropdown from './Dropdown'



const HamburgerMenu = () => {
    const [menu, setMenu] = useState(false)

    const MenuRef = useRef()
    const btnMenuRef = useRef()


    useEffect(() => {
        menu
            ? document.querySelector('body').classList.add('bodyOverflow')
            : document.querySelector('body').classList.remove('bodyOverflow')

        // 

        let handleMenu = e => {
            if (e.target === btnMenuRef.current) return false
            if (!MenuRef.current.contains(e.target)) setMenu(false)
        }

        document.addEventListener('mousedown', handleMenu)

        return () => document.removeEventListener('mousedown', handleMenu)
    })

    return (
        <>
            <button onClick={() => setMenu(!menu)} ref={btnMenuRef}>
                {
                    menu
                        ? <img src={require('../assets/icon-close.svg').default} alt="header image" />
                        : <img src={require('../assets/icon-hamburger.svg').default} alt="header image" />
                }
            </button>

            {
                ReactDOM.createPortal(
                    <div className={`menu ${menu ? 'openMenu' : 'closeMenu'}`} ref={MenuRef}>
                        <div>
                            <Dropdown name={'Product'}>
                                <ul>
                                    <li><a href="#">Overview</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Marketplace</a></li>
                                    <li><a href="#">Features</a></li>
                                    <li><a href="#">Integrations</a></li>
                                </ul>
                            </Dropdown>

                            <Dropdown name={'Company'}>
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </Dropdown>

                            <Dropdown name={'Connect'}>
                                <ul>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Newsletter</a></li>
                                    <li><a href="#">LinkedIn</a></li>
                                </ul>
                            </Dropdown>
                        </div>

                        <div>
                            <a className='ghost-anchor ghost-anchor--no-border ghost-anchor--menu' href="#">Login</a>
                            <a className='gradient-anchor' href="#">Sign Up</a>
                        </div>
                    </div>,
                    document.querySelector('body'))
            }
        </>
    )
}

export default HamburgerMenu