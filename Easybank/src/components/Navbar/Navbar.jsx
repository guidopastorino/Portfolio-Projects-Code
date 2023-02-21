import React, { useEffect, useRef } from 'react'
import HamburgerMenu from './HamburgerMenu'
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
        <nav>
            <a href="#" className='nav__logo'>
                <img src={require('../../images/logo.svg').default} alt="logo" />
            </a>

            <ul className='nav__links'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
            </ul>

            <a href="#" className='link-green-gradient link-green-gradient--navbar'>
                Request Invite
            </a>

            <HamburgerMenu />
        </nav>
    </header>
  )
}

export default Navbar