import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className=' hidden sm:flex h-4 w-7/12 top-[60px] border border-black absolute z-5'>
        
        <div className='sm:ml-[1vw] sm:mr-[1vw] md:ml-[2vw] md:mr-[2vw] lg:ml-[4.6vw] lg:mr-[4.6vw]'>
        <Image className='h-3.5 w-14' src={'/logo.svg'}
        width={500} height={500}
        alt='Header-icon'
        />
        </div>
        
        <div className='h-3.5 '>
            <ul className='flex border sm: space-x-3 md:space-x-4 lg:space-x-5 items-center border-black h-3.5 pt-1 text-white'>
                <li>home</li>
                <li>shop</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header