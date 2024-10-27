import React from 'react'
import { SiSimpleanalytics } from "react-icons/si";
import { RiAwardFill } from "react-icons/ri";
import { MdContactPage } from "react-icons/md";

const Hero = () => {
  return (
    <div>
      <div className='w-1/5 border-r-[1.5px] h-[510px] py-8 font-semibold'>
        <div className='text-black/80 mt-6 pl-5 py-3.5 flex items-center gap-3 cursor-pointer text-lg mr-2 rounded-r-full hover:bg-blue-50 hover:text-blue-600'>
            <SiSimpleanalytics className='text-xl'/>
            <h1>Dashboard</h1>
        </div>
        <div className='text-blue-600 mt-6 pl-5 py-3.5 flex items-center gap-3 cursor-pointer text-lg mr-2 rounded-r-full hover:bg-blue-50'>
            <RiAwardFill className='text-xl'/>
            <h1>Skill Test</h1>
        </div>
        <div className='text-black/80 mt-6 pl-5 py-3.5 flex items-center gap-3 cursor-pointer text-lg mr-2 rounded-r-full hover:bg-blue-50 hover:text-blue-600'>
            <MdContactPage className='text-xl'/>
            <h1>Internship</h1>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Hero
