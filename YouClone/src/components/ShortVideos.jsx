import React, { useState, useRef, useEffect } from 'react'
import { CgPlayButtonO } from 'react-icons/cg'
import { Link } from 'react-router-dom';
import { getRoundedNumber } from '../getRoundedNumber';
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'



// shorts array
const shortVideosContent = [
    { channel: 'AdventureTraveler', shortTitle: 'Exploring hidden waterfalls in Bali' },
    { channel: 'FitnessGuru', shortTitle: '10 minute home workout for toned abs and arms' },
    { channel: 'GamingPro', shortTitle: 'Beating the final boss in Dark Souls III' },
    { channel: 'TechWizard', shortTitle: 'Unboxing and testing the new iPhone 13 Pro Max' },
    { channel: 'Fashionista', shortTitle: 'Trying out TikTok\'s viral clothing hacks' },
    { channel: 'FoodieFrenzy', shortTitle: 'Making the perfect homemade pizza from scratch' },
    { channel: 'ComedyKing', shortTitle: 'Reacting to the funniest TikTok videos of the week' },
    { channel: 'NatureExplorer', shortTitle: 'Camping and hiking in the Grand Canyon' },
    { channel: 'MusicMania', shortTitle: 'Live concert footage of Billie Eilish\'s latest tour' },
    { channel: 'ScienceGeek', shortTitle: 'Breaking down the science behind black holes and wormholes' }
];


const ShortVideos = () => {
    const scrollContentRef = useRef()
    const [btnLeft, setBtnLeft] = useState(false)
    const [btnRight, setBtnRight] = useState(true)
    const [buttons, setButtons] = useState(true)

    useEffect(() => {
        const { userAgent } = navigator
        console.log(userAgent)
        if (userAgent.includes('Android')) {
            setButtons(false)
        } else if (userAgent.includes('iPhone')) {
            setButtons(false)
        } else {
            setButtons(true)
        }
    }, [])

    const scrollHandler = (e) => {
        if (e.target.scrollLeft <= 0) {
            setBtnLeft(false)
        } else {
            setBtnLeft(true)
        }

        // 

        if (e.target.scrollLeft + e.target.offsetWidth === e.target.scrollWidth) {
            setBtnRight(false)
        } else {
            setBtnRight(true)
        }
    }


    return (
        <div style={{ gridColumn: '1/-1' }} className='w-full mb-4'>
            <span className='text-lg pl-1.5 font-medium block mb-4'>ShortVideos</span>
            {/* slider */}
            <div className='relative scrollShorts'>
                {/* slider content */}
                <div ref={scrollContentRef} style={{ scrollBehavior: 'smooth' }} className='scroll overflow-x-auto overflow-y-hidden flex justify-start items-center gap-2.5 px-1.5' onScroll={e => scrollHandler(e)}>

                    {
                        shortVideosContent.map((el, i) => (
                            <ShortVideo
                                author={el.channel}
                                imageBg={`https://source.unsplash.com/collection/random/${i * 10}`}
                                title={el.shortTitle}
                                key={i}
                            />
                        ))
                    }

                    <div className='w-[170px] shrink-0 snap-start h-[260px]'>
                        <Link to={`/shorts`} className='p-2 flex justify-center items-center gap-2.5 flex-col w-full h-full relative bg-white cursor-pointer overflow-hidden rounded-xl active:brightness-75 hover:bg-gray-200'>
                            <div className='text-3xl'>
                                <CgPlayButtonO />
                            </div>
                            <span className='text-center'>See more shorts</span>
                        </Link>
                    </div>

                </div>

                {/* slider btns */}

                {buttons && (
                    <>
                        {
                            btnLeft && <button className='w-10 h-10 rounded-full bg-white border p-1 cursor-pointer text-lg hidden justify-center items-center absolute hover:bg-gray-50 active:bg-gray-100 left-[3px] top-1/2 translate-y-[-50%] shrink-0 z-30' onClick={() => scrollContentRef.current.scrollLeft -= scrollContentRef.current.clientWidth}><IoIosArrowBack /></button>
                        }

                        {
                            btnRight && <button className='w-10 h-10 rounded-full bg-white border p-1 cursor-pointer text-lg hidden justify-center items-center absolute hover:bg-gray-50 active:bg-gray-100 right-[3px] top-1/2 translate-y-[-50%] shrink-0 z-30' onClick={() => scrollContentRef.current.scrollLeft += scrollContentRef.current.clientWidth}><IoIosArrowForward /></button>
                        }
                    </>
                )}


            </div>
        </div>
    )
}

export default ShortVideos


const ShortVideo = ({ author, title, imageBg }) => {

    const [views, setViews] = useState(getRoundedNumber())

    return (
        <div className='w-[170px] shrink-0 snap-start h-[260px]'>
            <Link to={`/shorts`} className='block w-full h-full relative bg-black cursor-pointer overflow-hidden rounded-xl active:brightness-75'>
                {/* shadow */}
                <div className="absolute top-0 left-0 z-20 w-full h-full" style={{ background: 'linear-gradient(to top, #000002, transparent)' }}></div>
                {/* info */}
                <div className="absolute top-0 left-0 z-30 w-full h-full text-white flex justify-end items-start p-2 gap-1.5 flex-col">
                    <span style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        wordBreak: 'break-word',
                        WebkitLineClamp: '2'
                    }} className='overflow-hidden leading-tight text-sm text-slate-200' title={author}>{author}</span>

                    <span style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        wordBreak: 'break-word',
                        WebkitLineClamp: '2'
                    }} className='text-md overflow-hidden leading-tight font-medium' title={title}>{title}</span>

                    <span className='text-sm text-slate-300'>{views} views</span>
                </div>
                {/* image bg */}
                <img className='object-cover absolute top-0 left-0 z-10 w-full h-full' src={imageBg} alt="image bg" />
            </Link>
        </div>
    )
}