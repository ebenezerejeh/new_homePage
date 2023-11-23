"use client"
import React from 'react'
import Image from 'next/image'
import { useGlobalContext } from '@/context/BackgroundContext'

const SideBar = () => {
  const {isOpen, openSideBar} = useGlobalContext();
  return (
    <div className= {isOpen ? `side__bar` : `side__bar close__sideBar`}>
      <div className='h-[100px] w-full flex items-center justify-center bg-white'>
        <div className=' h-4 w-[82.3%] flex '>
          <div className='w-[27.2%]'>
          <Image className='hover:cursor-pointer h-4 w-4 mt-1' src={'/icon-close.svg'}
        width={500} height={500}
        alt='close-icon'  onClick={openSideBar}
        />
            
          </div>
          <div className='w-[72.8%]'>
          <ul className='navList_Sidebar'>
                <li>home</li>
                <li>shop</li>
                <li>about</li>
                <li>contact</li>
            </ul>

          </div>

        </div>

      </div>
    </div>
  )
}

export default SideBar