import React from 'react'
import { BsWifiOff } from 'react-icons/bs'


const OfflinePage = () => {

    const handleReload = () => {
        window.location.reload()
    }


    return (
        <div className='h-screen w-full flex justify-center items-center flex-col gap-3 p-4'>
            <div className="text-red-500">
                <BsWifiOff className="text-7xl fill-current" />
            </div>
            <span className='italic font-medium text-center text-lg'>Whoops!</span>
            <span className='text-center'>It seems like you're not connected to any network</span>
            <button className='bg-red-600 p-2 text-white active:bg-red-700' onClick={handleReload}>Try again</button>
        </div>
    )
}

export default OfflinePage