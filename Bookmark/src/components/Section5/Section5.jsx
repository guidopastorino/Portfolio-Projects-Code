import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import './section5.css'

const Section5 = () => {

  const inputRef = useRef()

  const [validEmail, setValidEmail] = useState(true)

  const emailRegExp = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/



  const inputValidator = (e) => {
    e.preventDefault()

    if(inputRef.current.value.length === 0) return false;

    let iptValid = emailRegExp.test(inputRef.current.value)
    setValidEmail(iptValid)


    if (validEmail) {
      // e.target.submit()
      e.target.reset()
    } else {
      return false;
    }
  }

  return (
    <section className="section-5">
      <span>35,000+ already joined</span>
      <span>Stay up-to-date with what we’re doing</span>

      <form onSubmit={e => inputValidator(e)}>
        <div className={!validEmail ? 'invalidEmail' : ''}>
          <div>
            <input ref={inputRef} type="text" placeholder="Enter your email address" />
            <img src={require('../../images/icon-error.svg').default} alt="icon error" />
          </div>
          <span>Whoops, make sure it's an email</span>
        </div>
        <button type='submit' className='redAnchor redAnchor--email'>Contact Us</button>
      </form>

    </section>
  )
}

export default Section5