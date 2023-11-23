"use client"
import Image from 'next/image'
import React from 'react'
import { useGlobalContext } from '@/context/BackgroundContext'

const Buttons = () => {
  const {nextItem, prevItem} = useGlobalContext();
  return (
    <div className='slideShow_buttonsContainer'>
      
      <div className=' flex items-center justify-center w-3/6 hover:bg-Very-Dark-Gray hover:cursor-pointer' onClick={nextItem}>
        <Image src={'/icon-angle-left.svg'} alt='leftIcon'
        height={500} width={500} className='h-6 w-4' />
      </div>
      
      <div className=' flex items-center justify-center w-3/6 hover:bg-Very-Dark-Gray hover:cursor-pointer' onClick={prevItem}>
      <Image src={'/icon-angle-right.svg'} alt='leftIcon'
        height={500} width={500} className='h-6 w-4' />       

      </div>
        
    </div>
  )
}

export default Buttons