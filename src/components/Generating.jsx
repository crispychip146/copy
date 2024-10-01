import React from 'react'
import { loading } from '../assets'

const Generating = ({className}) => {
  return (
    <div className={`flex item h-[3.5rem]  p-4 bg-n-8/80 rounded-[7rem] ${className||" "} text-base `} >
        <img 
        className='w-5 h-5 mr-4 ml-16'
        src={loading}
        alt="loading"
        />
        AI is generating 
    </div>
  )
}

export default Generating