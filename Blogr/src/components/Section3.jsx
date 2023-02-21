import React from 'react'

const Section3 = () => {
    return (
        <section className='section3'>
            <div className='section3__content'>
                <div className='section3__img'>
                    <img src={require('../assets/illustration-laptop-desktop.svg').default} alt="header image" />
                    <img src={require('../assets/illustration-laptop-mobile.svg').default} alt="header image" />
                </div>

                <div className='section3__text'>
                    <div>
                        <h3>Free, open, simple</h3>
                        <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                    </div>
                    <div>
                        <h3>Powerful tooling</h3>
                        <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3