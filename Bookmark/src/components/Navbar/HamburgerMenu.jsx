import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import { MenuContext } from '../../context/MenuContext'

const HamburgerMenu = () => {

    const { menuActive, setMenuActive } = useContext(MenuContext)

    useEffect(() => {
        menuActive
            ? document.body.style.overflow = 'hidden'
            : document.body.style.overflow = 'hidden auto'
    }, [menuActive])

    return (
        <>
            <button onClick={() => setMenuActive(!menuActive)}>
                {
                    menuActive
                        ? <img src={require('../../images/icon-close.svg').default} alt="Logo" />
                        : <img src={require('../../images/icon-hamburger.svg').default} alt="Logo" />
                }
            </button>

            {
                ReactDOM.createPortal(
                    <div className={`menu ${menuActive ? 'menuOpen' : 'menuClose'}`}>
                        <div className="menu__content">
                            <ul className='menu__links'>
                                <li>
                                    <a href="#">Features</a>
                                </li>
                                <li>
                                    <a href="#">Pricing</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#">Login</a>
                                </li>
                            </ul>
                            <div className='menu__socials'>
                                <a href="#">
                                    <img src={require('../../images/icon-facebook.svg').default} alt="" />
                                </a>
                                <a href="#">
                                    <img src={require('../../images/icon-twitter.svg').default} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>,
                    document.body
                )
            }
        </>
    )
}

export default HamburgerMenu