import Image from 'next/image'
import React from 'react'

const Buttons = () => {
  return (
    <div className=' flex absolute w-[29.87vw] h-[56px] sm:h-[70px] sm:w-[11.07vw] top-[303px] sm:top-[410px] right-[0.1px] sm:left-[58.08%] bg-black z-5'>
      
      <div className=' flex items-center justify-center w-3/6 hover:bg-Very-Dark-Gray hover:cursor-pointer'>
        <Image src={'/icon-angle-left.svg'} alt='leftIcon'
        height={500} width={500} className='h-6 w-4' />
      </div>
      
      <div className=' flex items-center justify-center w-3/6 hover:bg-Very-Dark-Gray hover:cursor-pointer'>
      <Image src={'/icon-angle-right.svg'} alt='leftIcon'
        height={500} width={500} className='h-6 w-4' />       

      </div>
        
    </div>
  )
}

export default Buttons