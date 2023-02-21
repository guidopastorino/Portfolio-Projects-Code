import React from 'react'
import './section4.css'

const Section4 = () => {
  return (
    <section className="section-4">
      <h2>Frequently Asked Questions</h2>
      <p>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>

      <div className="accordion">
        <Accordion
          title={'What is Bookmark?'}
          description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum non, reprehenderit, id distinctio atque doloremque quos excepturi sunt quibusdam corrupti quidem. Reprehenderit nobis excepturi ut dolorem corrupti praesentium doloribus alias!'}
        />

        <Accordion
          title={'How can I request a new browser?'}
          description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum non, reprehenderit, id distinctio atque doloremque quos excepturi sunt quibusdam corrupti quidem. Reprehenderit nobis excepturi ut dolorem corrupti praesentium doloribus alias!'}
        />

        <Accordion
          title={'Is there a mobile app?'}
          description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum non, reprehenderit, id distinctio atque doloremque quos excepturi sunt quibusdam corrupti quidem. Reprehenderit nobis excepturi ut dolorem corrupti praesentium doloribus alias!'}
        />

        <Accordion
          title={'What about other Chromium browsers?'}
          description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum non, reprehenderit, id distinctio atque doloremque quos excepturi sunt quibusdam corrupti quidem. Reprehenderit nobis excepturi ut dolorem corrupti praesentium doloribus alias!'}
        />
      </div>

      <a href="#" className='anchor blueAnchor'>More info</a>

    </section>
  )
}

export default Section4


const Accordion = ({ title, description }) => {
  return (
    <>
      <details>
        <summary>
          <span>{title}</span>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </summary>
        <p>{description}</p>
      </details>
    </>
  )
}