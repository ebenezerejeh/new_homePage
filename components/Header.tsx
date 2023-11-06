import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className=' hidden sm:flex h-4 w-[58.08%] top-[60px] absolute z-[5]'>
        
        <div className='sm:ml-[1vw] sm:mr-[1vw] md:ml-[2vw] md:mr-[2vw] lg:ml-[4.6vw] lg:mr-[4.6vw]'>
        <Image className='h-3.5 w-14' src={'/logo.svg'}
        width={500} height={500}
        alt='Header-icon'
        />
        </div>
        
        <div className='h-3.5 '>
            <ul className='nav_List'>
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