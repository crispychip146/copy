import React from 'react'
import { companyLogos } from '../constants'

const CompanyLogo = ({className}) => {
  return (
    <div className={className} >
    <h5 className='mb-15 text-center text-neutral-50 font-semibold' >
    Presented to you by
    </h5>
    <ul className='flex' >
        {companyLogos.map((logo,index)=>
        <li className='flex items-center justify-center flex-1 h-[8.5 rem]' key={index} >
            <img 
            src={logo}
            width={200}
            height={350}
            alt={logo}
            />
        </li>
        )}
    </ul>
    </div>
  )
}

export default CompanyLogo