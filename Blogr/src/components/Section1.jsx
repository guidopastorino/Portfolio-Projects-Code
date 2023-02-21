import React from 'react'

const Section1 = () => {
    return (
        <section className='section1'>
            <h2>Designed for the future</h2>
            <div className='section1__content'>
                <div className='section1__text'>
                    {/* intro */}
                    <div>
                        <h3>Introducing an extensible editor</h3>
                        <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
                    </div>
                    {/* robust */}
                    <div>
                        <h3>Robust content management</h3>
                        <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
                    </div>
                </div>
                {/* img */}
                <div className='section1__img'>
                    <img src={require('../assets/illustration-editor-desktop.svg').default} alt="header image" />
                    <img src={require('../assets/illustration-editor-mobile.svg').default} alt="header image" />
                </div>
            </div>
        </section>
    )
}

export default Section1