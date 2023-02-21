import React, { useContext } from 'react'
import HamburgerMenu from './HamburgerMenu'
import './navbar.css'
import { MenuContext } from '../../context/MenuContext'


const Navbar = () => {

    const { menuActive, setMenuActive } = useContext(MenuContext)


    return (
        <header>
            <nav>
                <div className={`nav__logo ${menuActive ? 'whiteHeader' : ''}`}>
                    <a href="#">
                        {
                            menuActive
                            ? <img src={require('../../images/logo-bookmark-nav.svg').default} alt="Logo" />
                            : <img src={require('../../images/logo-bookmark.svg').default} alt="Logo" />
                        }
                    </a>
                </div>
                <ul className="nav__links">
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
                        <a className='redAnchor' href="#">LOGIN</a>
                    </li>
                </ul>
                <div className={`nav__hamburger ${menuActive ? 'whiteHeader' : ''}`}>
                    <HamburgerMenu />
                </div>
            </nav>
        </header>
    )
}

export default Navbar