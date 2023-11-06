import Image from 'next/image'
import React from 'react'

const Buttons = () => {
  return (
    <div className='slideShow_buttonsContainer'>
      
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