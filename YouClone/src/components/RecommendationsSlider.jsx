import React, { useRef, useState, useEffect, useContext } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import RecommendationsContextProvider, { RecommendationsContext } from '../Context/recommendationsContext'



const RecommendationsSlider = () => {

    const scrollContainerRef = useRef()
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
        // swiper
        <RecommendationsContextProvider>
            <div style={{ borderBottom: '1px solid #00000012' }} className='px-2 grid grid-cols-[1fr] bg-white mb-6 sticky top-[63.9773px] left-0 z-40 w-full relative'>
                {/* swiper content */}
                <div ref={scrollContainerRef} style={{ scrollBehavior: 'smooth' }} className='scroll py-2 w-full flex justify-start overflow-x-auto items-center gap-2.5 snap-mandatory snap-x' onScroll={e => scrollHandler(e)}>
                    {
                        tags.map((el, i) => (
                            <SpanItem key={i} tag={el} />
                        ))
                    }
                </div>

                {buttons && (
                    <>
                        {btnLeft && <button onClick={() => scrollContainerRef.current.scrollLeft -= scrollContainerRef.current.clientWidth} className='w-7 h-7 rounded-full bg-white border p-1 cursor-pointer text-sm flex justify-center items-center absolute hover:bg-gray-50 active:bg-gray-100 left-0 top-1/2 translate-y-[-50%] shrink-0'><IoIosArrowBack /></button>}

                        {btnRight && <button onClick={() => scrollContainerRef.current.scrollLeft += scrollContainerRef.current.clientWidth} className='w-7 h-7 rounded-full bg-white border p-1 cursor-pointer text-sm flex justify-center items-center absolute hover:bg-gray-50 active:bg-gray-100 right-0 top-1/2 translate-y-[-50%] shrink-0'><IoIosArrowForward /></button>}
                    </>
                )}
            </div>
        </RecommendationsContextProvider>

    )
}

export default RecommendationsSlider


const SpanItem = ({ tag }) => {

    const { activeTag, setactiveTag } = useContext(RecommendationsContext)


    return (
        <span onClick={(e) => {
            if (activeTag === tag) {
                setactiveTag('All')
            } else {
                setactiveTag(e.target.textContent)
            }
        }} className={`${activeTag === tag ? 'bg-black text-white hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} select-none py-1 px-2 rounded-lg shrink-0 text-sm border text-align-center snap-center cursor-pointer duration-150`}>{tag}</span>
    )
}

const tags = [
    'All', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Python', 'Ruby', 'SQL', 'Node.js', 'React', 'Angular',
    'Vue.js', 'Bootstrap', 'jQuery', 'WordPress', 'Django', 'Flask', 'API', 'Ajax', 'Framework',
    'CMS', 'Front-end', 'Back-end', 'Full-stack', 'Web design', 'User experience (UX)',
    'User interface (UI)', 'Responsive design', 'Cross-browser compatibility', 'Search engine optimization (SEO)',
    'Accessibility', 'Performance optimization', 'Version control (Git)', 'Agile development', 'Scrum',
    'Test-driven development (TDD)', 'Continuous integration (CI)', 'DevOps', 'Cloud computing', 'Docker',
    'Kubernetes'
];