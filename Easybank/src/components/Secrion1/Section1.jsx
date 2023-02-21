import React from 'react'
import './Section1.css'

const Section1 = () => {
  return (
    <section className='section-1'>
      <div>
        <div className='section-1__txt'>
          <span>Next generation digital banking</span>
          <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
          <a href="#" className='link-green-gradient'>
            Request Invite
          </a>
        </div>
        <div className='section-1__img'>
          {/* mobile bg */}
          <img className='mobile-bg' src={require('../../images/bg-intro-mobile.svg').default} alt="heading image bg" />
          {/* desktop bg */}
          <img className='desktop-bg' src={require('../../images/bg-intro-desktop.svg').default} alt="heading image bg" />
          <img className='mockup' src={require('../../images/image-mockups.png')} alt="heading image" />
        </div>
      </div>
    </section>
  )
}

export default Section1