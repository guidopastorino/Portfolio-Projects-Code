import React from 'react'
import './section1.css'

const Section1 = () => {
    return (
        <section className="section-1">
            <div className='section-1__txt'>
                <h1>A Simple Bookmark Manager</h1>
                <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div>
                    <a className='anchor blueAnchor' href="#">Get it on Chrome</a>
                    <a className='anchor whiteAnchor' href="#">Get it on Firefox</a>
                </div>
            </div>
            <div className='section-1__image'>
                <img src={require('../../images/illustration-hero.svg').default} alt="" />
                <div className='section-1__bg'></div>
            </div>
        </section>
    )
}

export default Section1