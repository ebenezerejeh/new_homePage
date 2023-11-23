"use client"
import React from 'react'
import Image from 'next/image'
import { data } from '@/Constants/data'
import { useGlobalContext } from '@/context/BackgroundContext'


const TopSection = () => {
  const {value, openSideBar, setValue} = useGlobalContext();
  // console.log(value);
  const {id, name, header, body} = data[value];
  return (
    <div className='top__section'>

        
        <Image className='mobile__hambuger hover:cursor-pointer h-3.5 w-6' src={'/icon-hamburger.svg'}
        width={500} height={500}
        alt='icon-hamburger' onClick={openSideBar}
        />
        

      
      <div className='mobileheader__container'>
      <Image className='h-3.5 w-14' src={'/logo.svg'}
        width={500} height={500}
        alt='Header-icon'
        />

      </div>

      <div className='topSection__leftContainer'>
            <Image src={`/${name}.jpg`} alt='desktopImage'
            height={500} width={500} className='w-full h-full'          
              />

       </div>

        <div className='topSection__rightContainer' >
              <div className='topRightContainer__textBox'>

                <div className=' mb-2 sm:mb-2 md:mb-3 lg:mb-5'>
                  <p className='text-[35px] sm:text-[32px] md:text-[35px]  lg:text-[40px] leading-10 font-bold'>
                    {header}
                    </p>
                </div>

                <div className='text-dark-gray sm:text-sm mb-2 sm:mb-2 md:mb-3 lg:mb-5 '>
                  <p>{body}</p></div>

                <div className='w-[210px] flex items-center justify-between'>
                  <p className='tracking-[0.6em] font-bold hover:text-dark-gray hover:cursor-pointer'>SHOP NOW</p>
                <Image src={'/icon-arrow.svg'} alt='iconArrow'
                height={500} width={500} className='h-2 w-10'/>
                </div>

              </div>

        </div>
    </div>
  )
}

export default TopSection