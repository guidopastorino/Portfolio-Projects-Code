import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MenuContext } from '../Context/menuContext'
import { getRoundedNumber } from '../getRoundedNumber'
import MenuLg from './MenuLg'
import MenuSmItem from './MenuSmItem'
import RecommendationsSlider from './RecommendationsSlider'
import ShortVideos from './ShortVideos'
// icons
import { AiFillPlaySquare, AiOutlinePlaySquare } from 'react-icons/ai'
import { IoHomeOutline, IoHomeSharp } from 'react-icons/io5'
import { MdOutlinePeopleAlt, MdOutlineVideoLibrary, MdPeopleAlt, MdVideoLibrary } from 'react-icons/md'



const videoContentInfo = [
  {
    videoTitle: "10 Best Ab Workouts for a Stronger Core",
    channel: "Fit Buzz",
    duration: "10:23",
    date: "1 year ago"
  },
  {
    videoTitle: "The Art of Charcoal Drawing: Tips and Techniques",
    channel: "Art Zone",
    duration: "45:17",
    date: "6 months ago"
  },
  {
    videoTitle: "Healthy Meal Prep Ideas for the Week",
    channel: "Wholesome Eats",
    duration: "20:15",
    date: "2 years ago"
  },
  {
    videoTitle: "Exploring the Hidden Gems of Tokyo",
    channel: "Urban Adventures",
    duration: "30:50",
    date: "9 months ago"
  },
  {
    videoTitle: "The Science of Happiness: Key Findings",
    channel: "Positive Mindspace",
    duration: "15:40",
    date: "just now"
  },
  {
    videoTitle: "Mastering the Basics of Python Programming",
    channel: "CodeCraft",
    duration: "40:05",
    date: "1 year ago"
  },
  {
    videoTitle: "5 Minute Yoga for Stress Relief",
    channel: "Zen Zone",
    duration: "5:25",
    date: "3 months ago"
  },
  {
    videoTitle: "Budget Travel Tips for Solo Travelers",
    channel: "Nomad Nation",
    duration: "25:30",
    date: "2 years ago"
  },
  {
    videoTitle: "Learn to Play Piano: Beginner's Guide",
    channel: "Piano Pathways",
    duration: "50:11",
    date: "11 months ago"
  },
  {
    videoTitle: "Plant-Based Meal Ideas for a Healthier You",
    channel: "Green Grub",
    duration: "30:40",
    date: "1 year ago"
  },
  {
    videoTitle: "How to Boost Your Confidence: Key Strategies",
    channel: "Empowerment Zone",
    duration: "15:20",
    date: "4 months ago"
  },
  {
    videoTitle: "The Magic of Origami: Paper Folding Techniques",
    channel: "PaperCrafts",
    duration: "45:58",
    date: "1 year ago"
  },
  {
    videoTitle: "DIY Home Decor: Creative Ideas and Projects",
    channel: "Creative Nest",
    duration: "30:10",
    date: "6 months ago"
  },
  {
    videoTitle: "The Psychology of Stress: Key Findings",
    channel: "Mindful Insights",
    duration: "20:30",
    date: "2 years ago"
  },
  {
    videoTitle: "Minimalist Wardrobe Essentials for Men and Women",
    channel: "Simple Living Hub",
    duration: "25:45",
    date: "1 year ago"
  },
  {
    videoTitle: "The Wonders of Our Solar System: Discovering Our Universe",
    channel: "Stellar Science",
    duration: "50:20",
    date: "3 months ago"
  },
  {
    videoTitle: "Discovering Your Passion: Key Tips and Exercises",
    channel: "Passion Quest",
    duration: "10:55",
    date: "just now"
  },
  {
    videoTitle: "Travel Hacks for Planning Your Dream Vacation",
    channel: " Wanderlust Adventures",
    duration: "35:05",
    date: "2 years ago"
  },
  {
    videoTitle: "Mastering Adobe Illustrator: Tips and Techniques",
    channel: "Pixel Perfect",
    duration: "40:25",
    date: "1 year ago"
  },
  {
    videoTitle: "The Power of Mindfulness: Key Habits for a Happier Life",
    channel: "Mindful Insights",
    duration: "15:10",
    date: "5 months ago"
  }
]


const Content = () => {

  const { menu, setMenu } = useContext(MenuContext)

  return (
    <div className={`grid grid-cols-[1fr] ${menu ? 'md:grid-cols-[65px_1fr]' : 'md:grid-cols-[250px_1fr]'} gap-2.5`}>
      {/* menu LG */}
      {!menu && <MenuLg mobile={false} />}
      {/* menu SM */}
      {menu && <aside role='aside' style={{ height: 'calc(100vh - 64px)' }} className='w-full overflow-y-auto overflow-x-hidden sticky top-[64px] w-max bg-white hidden md:block'>
        <ul className='py-1'>
          <MenuSmItem
            iconUnactive={<IoHomeOutline />}
            iconActive={<IoHomeSharp />}
            text={'Home'}
            link={'/'}
          />
          <MenuSmItem
            iconUnactive={<MdOutlineVideoLibrary />}
            iconActive={<MdVideoLibrary />}
            text={'Shorts'}
            link={'/shorts'}
          />
          <MenuSmItem
            iconUnactive={<MdOutlinePeopleAlt />}
            iconActive={<MdPeopleAlt />}
            text={'Subscriptions'}
            link={'/subscriptions'}
          />
          <MenuSmItem
            iconUnactive={<AiOutlinePlaySquare />}
            iconActive={<AiFillPlaySquare />}
            text={'Library'}
            link={'/library'}
          />
          
        </ul>
      </aside>}

      {/* CONTENT */}
      <div className='h-max mx-auto max-w-screen-2xl px-2 pb-2 relative'>
        {/* slider */}
        <RecommendationsSlider />

        {/* videos container */}
        <div className='gap-x-1.5 md:gap-y-6 gap-y-2 w-100' style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gridAutoFlow: 'row dense' }}>
          {
            videoContentInfo.map((el, i) => (
              <>
                {i === 12
                  ? <ShortVideos />
                  : <Video
                  poster={`https://source.unsplash.com/collection/random/${i}`}
                  duration={el.duration}
                  channelImg={`https://source.unsplash.com/collection/random/${i * 30}`}
                  videoTitle={el.videoTitle}
                  channel={el.channel}
                  views={getRoundedNumber()}
                  date={el.date}
                  key={i}
                />}
              </>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Content


const Video = ({ poster, duration, channelImg, videoTitle, channel, views, date }) => {

  return (
    <>
      <Link to={`/video/${videoTitle}`} href='#' className='mb-2 block w-full text-[#222] active:brightness-75 bg-white rounded-xl overflow-hidden p-1.5'>
        <div className="overflow-hidden pb-[57%] relative">
          <img className='video-thumbnail w-full object-cover rounded-xl overflow-hidden' src={poster} alt="video poster" />
          <div className='absolute bottom-[10px] right-[10px] text-white p-1 rounded-lg bg-black text-xs'>{duration}</div>
        </div>
        <div className="mt-2 flex justify-start items-start gap-2">
          <Link to={`/${channel}`} className="block w-10 h-10 rounded-full overflow-hidden shrink-0" title={channel}>
            <img className='w-full h-full object-cover' src={channelImg} alt="channel img" />
          </Link>
          <div className='flex flex-col justify-start items-start gap-1'>
            <span style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              wordBreak: 'break-word',
              WebkitLineClamp: '2'
            }} className='overflow-hidden leading-tight font-medium' title={videoTitle}>{videoTitle}</span>

            <Link to={`/${channel}`} style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              wordBreak: 'break-all',
              WebkitLineClamp: '1'
            }} className='no-underline hover:underline text-sm overflow-hidden' title={channel}>{channel}</Link>

            <p style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              wordBreak: 'break-all',
              WebkitLineClamp: '1'
            }} className='text-sm overflow-hidden'>{views === 0 ? <span>No views yet</span> : <span>{views} views</span>} &#8226; {date}</p>
          </div>
        </div>
      </Link>
    </>
  )
}