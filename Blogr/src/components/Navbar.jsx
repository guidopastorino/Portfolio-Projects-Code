import React from 'react'
import Dropdown from './Dropdown'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
    return (
        <div className='navbarWrapper'>
            <nav className="navbar">
                <div className='navbar__left'>
                    <div className="navbar__logo">
                        <a href="#">
                            <img src={require('../assets/logo.svg').default} alt="header image" />
                        </a>
                    </div>
                    <div className="navbar__dropdowns">
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
                </div>
                <div className='navbar__right'>
                    <div className="navbar__anchors">
                        <a className='ghost-anchor ghost-anchor--no-border' href="#">Login</a>
                        <a className='white-anchor' href="#">Sign Up</a>
                    </div>
                    <div className="navbar__hamburguer-menu">
                        <HamburgerMenu />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar