import Image from 'next/image'
import React from 'react'
import logo from '../public/images/logo_white.png';
import profile_photo from '../public/images/profile_photo.jpg';

const Header = () => {
  return (
    <div className='flex justify-between p-4 border-b-[1.5px]'>
        <div className='flex text-black items-center'>
            <Image src={logo} width={50} height={50} alt={''} className='cursor-pointer'/>
            <h1 className='text-2xl font-semibold items-center cursor-pointer'>WhatBytes</h1>
        </div>

        <div className='flex text-black items-center gap-2 border-2 border-gray-200 px-1 py-1 rounded-md cursor-pointer'>
            <Image src={profile_photo} width={28} height={28} alt={''} className='rounded-[200px]'/>
            <h1 className='font-semibold'>Rahil Siddique</h1>
        </div>
    </div>
  )
}

export default Header
