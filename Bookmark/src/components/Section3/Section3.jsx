import React from 'react'
import './section3.css'

const Section3 = () => {
    return (
        <section className="section-3">
            <h2>Download the extension</h2>
            <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
            <div className="navigators">
                <NavigatorCard
                    logo={'chrome'}
                    navigator={'Chrome'}
                    version={'62'}
                />

                <NavigatorCard
                    logo={'firefox'}
                    navigator={'Firefox'}
                    version={'55'}
                />

                <NavigatorCard
                    logo={'opera'}
                    navigator={'Opera'}
                    version={'46'}
                />
            </div>
        </section>
    )
}

export default Section3

const NavigatorCard = ({ logo, navigator, version }) => {
    return (
        <div className="navigator">
            <div>
                <img src={require(`../../images/logo-${logo}.svg`)} alt="navigator" />
                <span>Add to {navigator}</span>
                <span>Minimum version {version}</span>
            </div>
            <div>
                <img src={require('../../images/bg-dots.svg').default} alt="bg dots" />
                <a className='anchor blueAnchor' href="#">Add & Install extension</a>
            </div>
        </div>
    )
}