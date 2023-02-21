import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import HamburguerMenu from './HamburguerMenu'

const Navbar = () => {

    const navbarRef = useRef()

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 79) {
                navbarRef.current.style.boxShadow = '1px 1px 5px #0000004a'
            } else {
                navbarRef.current.style.boxShadow = 'none'
            }
        })
    })


    return (
        <div className="navbarWrapper" ref={navbarRef}>
            <div className="navbar">
                <div className="navbar__left">
                    <a href="/">
                        <img src={require('../assets/images/logo.svg').default} alt="" />
                    </a>
                </div>
                <div className="navbar__right">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">New</a></li>
                        <li><a href="#">Popular</a></li>
                        <li><a href="#">Trending</a></li>
                        <li><a href="#">Categories</a></li>
                    </ul>
                </div>
                <HamburguerMenu />
            </div>
        </div>
    )
}

export default Navbar