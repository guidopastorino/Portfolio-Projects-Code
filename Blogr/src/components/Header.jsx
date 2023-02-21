import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="header__img">
                <img src={require('../assets/bg-pattern-intro-desktop.svg').default} alt="header image" draggable={'false'} />
            </div>
            <div className="header__content">
                <h1>A modern publishing platform</h1>
                <p>Grow your audience and build your online brand</p>

                <div>
                    <a className='white-anchor' href="#">Start for Free</a>
                    <a className='ghost-anchor' href="#">Learn More</a>
                </div>
            </div>
        </header>
    )
}

export default Header