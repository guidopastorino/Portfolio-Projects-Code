import React from 'react'





const Section2 = () => {
    return (
        <section className="section2">
            <div>
                <div className='section2__images'>
                    <img src={require('../assets/illustration-phones.svg').default} alt="image" />
                </div>
                <div className='section2__text'>
                    <h2>State of the Art Infrastructure</h2>
                    <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                </div>
            </div>
        </section>
    )
}

export default Section2