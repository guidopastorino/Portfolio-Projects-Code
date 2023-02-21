import React from 'react'
import ItemMenuLg from './MenuLgItems'
// icons
import { IoHomeOutline } from 'react-icons/io5'
import { IoHomeSharp } from 'react-icons/io5'
import { MdOutlineVideoLibrary } from 'react-icons/md'
import { MdVideoLibrary } from 'react-icons/md'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { MdPeopleAlt } from 'react-icons/md'
import { AiOutlinePlaySquare } from 'react-icons/ai'
import { AiFillPlaySquare } from 'react-icons/ai'
import { RxReload } from 'react-icons/rx'
import { RiPlayCircleLine } from 'react-icons/ri'
import { RiPlayCircleFill } from 'react-icons/ri'
import { MdOutlineWatchLater } from 'react-icons/md'
import { MdWatchLater } from 'react-icons/md'
import { RiThumbUpLine } from 'react-icons/ri'
import { RiThumbUpFill } from 'react-icons/ri'
import { AiOutlineFire } from 'react-icons/ai'
import { AiFillFire } from 'react-icons/ai'
import { RiMusicLine } from 'react-icons/ri'
import { RiMusicFill } from 'react-icons/ri'
import { MdOutlineMovie } from 'react-icons/md'
import { MdMovie } from 'react-icons/md'
import { CiStreamOn } from 'react-icons/ci'
import { IoGameControllerOutline } from 'react-icons/io5'
import { IoGameController } from 'react-icons/io5'
import { IoNewspaperOutline } from 'react-icons/io5'
import { IoNewspaperSharp } from 'react-icons/io5'
import { AiOutlineTrophy } from 'react-icons/ai'
import { AiFillTrophy } from 'react-icons/ai'
import { MdLightbulbOutline } from 'react-icons/md'
import { MdLightbulb } from 'react-icons/md'

const MenuLg = ({ mobile }) => {
    return(
        !mobile
        ? <aside style={{ height: 'calc(100vh - 64px)' }} className='w-full overflow-y-auto overflow-x-hidden sticky top-[64px] bg-white hidden md:block'>
            <ul className='p-3'>
                <ItemMenuLg
                    iconUnactive={<IoHomeOutline />}
                    iconActive={<IoHomeSharp />}
                    text={'Home'}
                    link={'/'}
                />
                <ItemMenuLg
                    iconUnactive={<MdOutlineVideoLibrary />}
                    iconActive={<MdVideoLibrary />}
                    text={'Shorts'}
                    link={'/shorts'}
                />
                <ItemMenuLg
                    iconUnactive={<MdOutlinePeopleAlt />}
                    iconActive={<MdPeopleAlt />}
                    text={'Subscriptions'}
                    link={'/subscriptions'}
                />
                <hr className='my-3' />
                <ItemMenuLg
                    iconUnactive={<AiOutlinePlaySquare />}
                    iconActive={<AiFillPlaySquare />}
                    text={'Library'}
                    link={'/library'}
                />
                <ItemMenuLg
                    iconUnactive={<RxReload />}
                    iconActive={<RxReload />}
                    text={'History'}
                    link={'/history'}
                />
                <ItemMenuLg
                    iconUnactive={<RiPlayCircleLine />}
                    iconActive={<RiPlayCircleFill />}
                    text={'My videos'}
                    link={'/profile'}
                />
                <ItemMenuLg
                    iconUnactive={<MdOutlineWatchLater />}
                    iconActive={<MdWatchLater />}
                    text={'Watch later'}
                    link={'/watch-later'}
                />
                <ItemMenuLg
                    iconUnactive={<RiThumbUpLine />}
                    iconActive={<RiThumbUpFill />}
                    text={'Liked videos'}
                    link={'/liked-videos'}
                />
                <hr className='my-3' />
                <span className='px-3 text-lg mb-2 block'>Explore</span>
                <ItemMenuLg
                    iconUnactive={<AiOutlineFire />}
                    iconActive={<AiFillFire />}
                    text={'Trends'}
                    link={'/trends'}
                />
                <ItemMenuLg
                    iconUnactive={<RiMusicLine />}
                    iconActive={<RiMusicFill />}
                    text={'Music'}
                    link={'/music'}
                />
                <ItemMenuLg
                    iconUnactive={<MdOutlineMovie />}
                    iconActive={<MdMovie />}
                    text={'Movies'}
                    link={'/movies'}
                />
                <ItemMenuLg
                    iconUnactive={<CiStreamOn />}
                    iconActive={<CiStreamOn />}
                    text={'Live'}
                    link={'/live'}
                />
                <ItemMenuLg
                    iconUnactive={<IoGameControllerOutline />}
                    iconActive={<IoGameController />}
                    text={'Gaming'}
                    link={'/gaming'}
                />
                <ItemMenuLg
                    iconUnactive={<IoNewspaperOutline />}
                    iconActive={<IoNewspaperSharp />}
                    text={'News'}
                    link={'/news'}
                />
                <ItemMenuLg
                    iconUnactive={<AiOutlineTrophy />}
                    iconActive={<AiFillTrophy />}
                    text={'Sports'}
                    link={'/sports'}
                />
                <ItemMenuLg
                    iconUnactive={<MdLightbulbOutline />}
                    iconActive={<MdLightbulb />}
                    text={'Learning'}
                    link={'/learning'}
                />
            </ul>
            <span className='p-3 my-3 text-center text-xs text-slate-600 block'>Website clone made by Guido Pastorino</span>
        </aside>
        : <>
            <ul className='p-3'>
                <ItemMenuLg
                    iconUnactive={<IoHomeOutline />}
                    iconActive={<IoHomeSharp />}
                    text={'Home'}
                    link={'/'}
                />
                <ItemMenuLg
                    iconUnactive={<MdOutlineVideoLibrary />}
                    iconActive={<MdVideoLibrary />}
                    text={'Shorts'}
                    link={'/shorts'}
                />
                <ItemMenuLg
                    iconUnactive={<MdOutlinePeopleAlt />}
                    iconActive={<MdPeopleAlt />}
                    text={'Subscriptions'}
                    link={'/subscriptions'}
                />
                <hr className='my-3' />
                <ItemMenuLg
                    iconUnactive={<AiOutlinePlaySquare />}
                    iconActive={<AiFillPlaySquare />}
                    text={'Library'}
                    link={'/library'}
                />
                <ItemMenuLg
                    iconUnactive={<RxReload />}
                    iconActive={<RxReload />}
                    text={'History'}
                    link={'/history'}
                />
                <ItemMenuLg
                    iconUnactive={<RiPlayCircleLine />}
                    iconActive={<RiPlayCircleFill />}
                    text={'My videos'}
                    link={'/profile'}
                />
                <ItemMenuLg
                    iconUnactive={<MdOutlineWatchLater />}
                    iconActive={<MdWatchLater />}
                    text={'Watch later'}
                    link={'/watch-later'}
                />
                <ItemMenuLg
                    iconUnactive={<RiThumbUpLine />}
                    iconActive={<RiThumbUpFill />}
                    text={'Liked videos'}
                    link={'/liked-videos'}
                />
                <hr className='my-3' />
                <span className='px-3 text-lg mb-2 block'>Explore</span>
                <ItemMenuLg
                    iconUnactive={<AiOutlineFire />}
                    iconActive={<AiFillFire />}
                    text={'Trends'}
                    link={'/trends'}
                />
                <ItemMenuLg
                    iconUnactive={<RiMusicLine />}
                    iconActive={<RiMusicFill />}
                    text={'Music'}
                    link={'/music'}
                />
                <ItemMenuLg
                    iconUnactive={<MdOutlineMovie />}
                    iconActive={<MdMovie />}
                    text={'Movies'}
                    link={'/movies'}
                />
                <ItemMenuLg
                    iconUnactive={<CiStreamOn />}
                    iconActive={<CiStreamOn />}
                    text={'Live'}
                    link={'/live'}
                />
                <ItemMenuLg
                    iconUnactive={<IoGameControllerOutline />}
                    iconActive={<IoGameController />}
                    text={'Gaming'}
                    link={'/gaming'}
                />
                <ItemMenuLg
                    iconUnactive={<IoNewspaperOutline />}
                    iconActive={<IoNewspaperSharp />}
                    text={'News'}
                    link={'/news'}
                />
                <ItemMenuLg
                    iconUnactive={<AiOutlineTrophy />}
                    iconActive={<AiFillTrophy />}
                    text={'Sports'}
                    link={'/sports'}
                />
                <ItemMenuLg
                    iconUnactive={<MdLightbulbOutline />}
                    iconActive={<MdLightbulb />}
                    text={'Learning'}
                    link={'/learning'}
                />
            </ul>
            <span className='p-3 my-3 text-center text-xs text-slate-600 block'>Website clone made by Guido Pastorino</span>
        </>
    )
}

export default MenuLg