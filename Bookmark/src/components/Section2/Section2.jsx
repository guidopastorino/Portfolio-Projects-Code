import React from 'react'
import { useState } from 'react'
import './section2.css'

const Section2 = () => {

    const [activeTab, setActiveTab] = useState(1)

    return (
        <section className='section-2'>
            <h2>Features</h2>
            <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            <div className="section-2__tabs">
                <div onClick={() => setActiveTab(1)} className={activeTab === 1 ? 'activeTab' : ''}>Simple Bookmarking</div>
                <div onClick={() => setActiveTab(2)} className={activeTab === 2 ? 'activeTab' : ''}>Speedy Searching</div>
                <div onClick={() => setActiveTab(3)} className={activeTab === 3 ? 'activeTab' : ''}>Easy Sharing</div>
            </div>

            <section className="section-2__tabsContent">
                <div className='tab__image'>
                    {activeTab === 1 ? <img src={require('../../images/illustration-features-tab-1.svg').default} alt="" /> : activeTab === 2 ? <img src={require('../../images/illustration-features-tab-2.svg').default} alt="" /> : <img src={require('../../images/illustration-features-tab-3.svg').default} alt="" />}
                    <div className='tab__bg'></div>
                </div>
                <div className='tab__txt'>
                    <h2>
                        {activeTab === 1 ? 'Bookmark in one click' : activeTab === 2 ? 'Intelligent search' : 'Share your bookmarks'}
                    </h2>

                    <p>{activeTab === 1 ? 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.' : activeTab === 2 ? 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.' : 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'}</p>

                    <a href="#" className='anchor blueAnchor'>More info</a>
                </div>
            </section>
        </section>
    )
}

export default Section2