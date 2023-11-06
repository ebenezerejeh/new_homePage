import React from 'react'
import Image from 'next/image'

const TopSection = () => {
  return (
    <div className='top__section'>

        <Image className='mobile__hambuger h-3.5 w-6' src={'/icon-hamburger.svg'}
        width={500} height={500}
        alt='icon-hamburger'
        />

      
      <div className='mobileheader__container'>
      <Image className='h-3.5 w-14' src={'/logo.svg'}
        width={500} height={500}
        alt='Header-icon'
        />

      </div>

      <div className='topSection__leftContainer'>
            <Image src={'/desktop-image-hero-1.jpg'} alt='desktopImage'
            height={500} width={500} className='w-full h-full'          
              />

       </div>

        <div className='topSection__rightContainer' >
              <div className='topRightContainer__textBox'>

                <div className=' mb-2 sm:mb-2 md:mb-3 lg:mb-5'>
                  <p className='text-[35px] sm:text-[32px] md:text-[35px]  lg:text-[40px] leading-10 font-bold'>
                    Discover innovative ways to decorate
                    </p>
                </div>

                <div className='text-dark-gray sm:text-sm mb-2 sm:mb-2 md:mb-3 lg:mb-5 '>
                  <p>We provide unmatched quality, comfort, and style for property owners across the country. 
                Our experts combine form and function in bringing your vision to life. Create a room in your 
                own style with our collection and make your property a reflection of you and what you love.
              </p></div>

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