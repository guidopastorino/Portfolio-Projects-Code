import React from 'react'
import './Section2.css'

const Section2 = () => {
    return (
        <section className="section-2">
            <div>
                <div className="section-2__txt">
                    <span>Why choose Easybank?</span>
                    <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                </div>
                <div className="section-2__cards">
                    <Card
                        img={require('../../images/icon-online.svg').default}
                        title={'Online Banking'}
                        description={'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'}
                    />
                    <Card
                        img={require('../../images/icon-budgeting.svg').default}
                        title={'Simple Budgeting'}
                        description={'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'}
                    />
                    <Card
                        img={require('../../images/icon-onboarding.svg').default}
                        title={'Fast Onboarding'}
                        description={'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'}
                    />
                    <Card
                        img={require('../../images/icon-api.svg').default}
                        title={'Open API'}
                        description={'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'}
                    />
                </div>
            </div>
        </section>
    )
}

export default Section2

const Card = ({ img, title, description }) => {
    return (
        <>
            <div className="card">
                <div className="card__img">
                    <img src={img} alt="card image" />
                </div>
                <div className="card__title">
                    <span>{title}</span>
                </div>
                <div className="card__description">
                    <span>{description}</span>
                </div>
            </div>
        </>
    )
}