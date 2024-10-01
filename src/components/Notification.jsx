import React from 'react'
import { notificationImages } from '../constants'
import { notification1 } from '../assets'

const Notification = ({className,title}) => {
  return (
    <div className={` ${className|| " "} flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5 `} >
        <div className='flex-1 items-center' >
            <h6 className='mb-1 font-semibold text-base' >
                {title}
            </h6>
                <div className='body-2 font-semibold '>
                418.69 ppm
                </div>
        </div>
    </div>
  )
}

export default Notification