import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="footer__content">
                <div>
                    <a href="#">
                        <img src={require('../assets/logo.svg').default} alt="header image" />
                    </a>
                </div>

                <div>
                    <span>Product</span>
                    <ul>
                        <li><a href="#">Overview</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Marketplace</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Integrations</a></li>
                    </ul>
                </div>

                <div>
                    <span>Company</span>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>

                <div>
                    <span>Connect</span>
                    <ul>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Newsletter</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer