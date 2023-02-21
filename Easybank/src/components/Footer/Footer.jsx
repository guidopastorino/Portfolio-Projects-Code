import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div>
                <div className='footer__left'>
                    <div className='footer__media'>
                        <a href="#">
                            <img src={require('../../images/logo-footer.svg').default} alt="" />
                        </a>

                        <ul>
                            <li>
                                <a href="#">
                                    <img src={require('../../images/icon-facebook.svg').default} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={require('../../images/icon-youtube.svg').default} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={require('../../images/icon-twitter.svg').default} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={require('../../images/icon-pinterest.svg').default} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={require('../../images/icon-instagram.svg').default} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ul className='footer__links'>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className='footer__right'>
                    <a href="#" className='link-green-gradient'>Request Invite</a>
                    <span>© Easybank. All Rights Reserved</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer