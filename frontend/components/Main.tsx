import React from 'react'
import Image from 'next/image'

export const Main = () => {
  return (
    <div>
      <div className='flex lg:flex-row flex-col lg:px-32 px-8 mt-32 lg:gap-0 gap-8'>
        <div className='lg:w-[50%] w-[100%] h-auto flex flex-col lg:items-start items-center'>
          <div className='lg:text-[80px] text-[40px] font-semibold lg:leading-[90px] leading-normal lg:text-left text-center'>We’re here to Increase your Productivity</div>
          <div className='lg:mt-[30px] mt-[10px] text-center'>
            <Image 
              width={480}
              height={26}
              src="/Vector-32.png"
              alt="Vector Image 1" 
            />
          </div>
          <div className='lg:mt-[50px] mt-[20px] text-[18px] leading-[30px] w-[70%] font-medium lg:text-left text-center'>
          Let&apos;s make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.
          </div>
          <div className='lg:mt-[50px] mt-[20px] flex flex-row gap-[30px] lg:justify-start justify-center'>
            <button className='bg-[#54BD95] text-[18px] rounded-[40px] text-white py-[20px] px-[30px]'>Try free trial</button>
            <button className='text-black text-[18px]'>View Demo</button>
          </div>
        </div>
        <div className='lg:w-[50%] w-[100%] h-auto'>
          <Image 
            width={700}
            height={526}
            src="/Group-138.png"
            alt="Vector Image 2" 
          />
        </div>
      </div>

      <Image 
        width={1317}
        height={1904}
        src="/Ellipse-37.png"
        alt="Ellipse Backgroung" 
        className='absolute right-0 top-0 z-[-100]' 
      />

      <div className='flex flex-col items-center justify-center lg:px-32 px-4 text-center lg:py-[100px] py-[30px] gap-[60px]'>
        <div className='font-bold text-[40px]'>More than 25,000 teams use Collabs</div>
        <div className='flex lg:flex-row flex-col flex-wrap items-center lg:gap-[60px] gap-[40px]'>
          <Image 
            width={180}
            height={38}
            src="/Group-141.png"
            alt="Company Logo"
          />
          <Image 
            width={180}
            height={38}
            src="/Group-142.png"
            alt="Company Logo"
          />
          <Image 
            width={180}
            height={38}
            src="/Group-143.png"
            alt="Company Logo"
          />
          <Image 
            width={180}
            height={38}
            src="/Group-144.png"
            alt="Company Logo"
          />
          <Image 
            width={180}
            height={38}
            src="/Group-145.png"
            alt="Company Logo"
          />
        </div>
      </div>
    </div>
  )
}
