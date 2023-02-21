import React from 'react'
import './Section3.css'

const Section3 = () => {
  return (
    <section className="section-3">
      <div>
        <span>Latest Articles</span>

        <div className='section-3__articles'>
          <Article
            img={require('../../images/image-currency.jpg')}
            author={'By Claire Robinson'}
            title={'Receive money in any currency with no fees'}
            description={'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'}
          />
          <Article
            img={require('../../images/image-restaurant.jpg')}
            author={'By Wilson Hutton'}
            title={'Treat yourself without worrying about money'}
            description={'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'}
          />
          <Article
            img={require('../../images/image-plane.jpg')}
            author={'By Wilson Hutton'}
            title={'Take your Easybank card wherever you go'}
            description={'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'}
          />
          <Article
            img={require('../../images/image-confetti.jpg')}
            author={'By Claire Robinson'}
            title={'Our invite-only Beta accounts are now live!'}
            description={'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'}
          />
        </div>
      </div>
    </section>
  )
}

export default Section3

const Article = ({ img, author, title, description }) => {
  return (
    <>
      <article>
        <div className="article__img">
          <img src={img} alt="article image" />
        </div>
        <div className="article__info">
          <span className="article__by">{author}</span>
          <a href='#' className="article__title">{title}</a>
          <span className="article__description">{description}</span>
        </div>
      </article>
    </>
  )
}