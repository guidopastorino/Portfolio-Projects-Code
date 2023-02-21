import React from 'react'

const Content = () => {
  return (
    <div className="content">
        <div className="content__img">
            <img src={require('../assets/images/image-web-3-desktop.jpg')} alt="image web desktop" />
        </div>

        <div className="content__new">
            <h2>New</h2>
            <div>
                <a href="#">Hydrogen VS Electric Cars</a>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>

            <hr />
            
            <div>
                <a href="#">The Downsides of AI Artistry</a>
                <p>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>

            <hr />
            
            <div>
                <a href="#">Is VC Funding Drying Up?</a>
                <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
        </div>

        <div className="content__bright">
            <span>The Bright Future of Web 3.0?</span>
        </div>

        <div className="content__we-drive">
            <span>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
            But is it really fulfilling its promise?</span>
            <a href="#">Read more</a>
        </div>

        <div className="content__card card-1">
            <div>
                <img src={require('../assets/images/image-retro-pcs.jpg')} alt="Retro PCs" />
            </div>
            <div>
                <span>01</span>
                <a href="#">Reviving Retro PCs</a>
                <span>What happens when old PCs are given modern upgrades?</span>
            </div>
        </div>

        <div className="content__card card-2">
            <div>
                <img src={require('../assets/images/image-top-laptops.jpg')} alt="Top Laptops" />
            </div>
            <div>
                <span>02</span>
                <a href="#">Top 10 Laptops of 2022</a>
                <span>Our best picks for various needs and budgets.</span>
            </div>
        </div>

        <div className="content__card card-3">
            <div>
                <img src={require('../assets/images/image-gaming-growth.jpg')} alt="Gaming Growth" />
            </div>
            <div>
                <span>03</span>
                <a href="#">The Growth of Gaming</a>
                <span>How the pandemic has sparked fresh opportunities.</span>
            </div>
        </div>
    </div>
  )
}

export default Content