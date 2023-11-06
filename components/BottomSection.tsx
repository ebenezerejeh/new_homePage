import React from 'react'
import Image from 'next/image'

const BottomSection = () => {
  return (
    <div className='bottom__section'>

      <div className='bottomSection__leftContainer'>
         <Image src={'/image-about-dark.jpg'} alt='desktopImage'
            height={500} width={500} className='w-full h-full'          
              />
      </div>
      
      <div className='bottomSection__centerContainer'>
        <div className='w-[320px] h-[204px] sm:h-[200px] md:h-[180px] lg:h-[150px] lg:w-[438px]'>
          <div className='uppercase font-bold tracking-[0.4em] sm:tracking-[0.21em] md:tracking-[0.3em] lg:tracking-[0.4em]'>
            <p>About our furniture</p>
            </div>
          <div className='  text-dark-gray sm:text-sm'><p>Our multifunctional collection blends design and function to suit your individual taste.
                Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                or anything in between. Product specialists are available to help you create your dream space.</p>
          </div>

        </div>
        
      </div>
      
      <div className='bottomSection__rightContainer'>
        <Image src={'/image-about-light.jpg'} alt='desktopImage'
            height={500} width={500} className='w-full h-full'          
              />
              </div>
        </div>
  )
}

export default BottomSection