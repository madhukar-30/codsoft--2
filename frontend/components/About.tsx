import Image from 'next/image'
import React from 'react'

export const About = () => {
  return (
    <div className='bg-[#F9F8FE] flex lg:flex-row flex-col w-auto h-auto lg:px-32 p-8 py-[60px] gap-8'>

        <div className='lg:w-[55%] w-[100%] h-auto flex flex-col'>
          <div className='flex flex-col items-start justify-start gap-[30px]'>
            <p className='lg:text-[50px] text-[30px] font-semibold text-[#191A15]'>How we support our partner all over the world</p>
            <p className='text-[18px]'>
              SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software
            </p>
          </div>
          <div className='flex flex-row items-end justify-start gap-6 mt-[70px]'>
            <div className='flex flex-col gap-[12px]'>
              <div>⭐⭐⭐⭐⭐</div>
              <div>4.9 / 5 rating</div>
              <div>Databricks</div>
            </div>
            <div className='flex flex-col gap-[12px]'>
              <div>⭐⭐⭐⭐⭐</div>
              <div>4.8 / 5 rating</div>
              <div>Chainalysis</div>
            </div>
          </div>
        </div>

        <div className='lg:w-[45%] w-[100%] h-auto flex flex-col gap-[30px] pr-12'>

          <div className='flex lg:flex-row flex-col items-start justify-start gap-4'>
            <div className='w-[70px] h-[60px] flex items-center justify-center bg-[#fff] shadow-md'>
              <Image 
                width={30}
                height={30}
                src="/activity-1.png" 
                alt="" 
              />
            </div>
            <div className='h-auto w-full flex flex-col'>
              <p className='font-bold text-[28px] text-[#191A15]'>Publishing</p>
              <p className='text-[18px] text-[#A6A6A6]'>Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd</p>
            </div>
          </div>

          <div className='flex lg:flex-row flex-col items-start justify-start gap-4'>
            <div className='w-[70px] h-[60px] flex items-center justify-center bg-[#fff] shadow-md'>
              <Image 
                width={30}
                height={30}
                src="/pie-chart-1.png" 
                alt="" 
              />
            </div>
            <div className='h-auto w-full flex flex-col'>
              <p className='font-bold text-[28px] text-[#191A15]'>Analytics</p>
              <p className='text-[18px] text-[#A6A6A6]'>Analyze your performance and create goegeous report</p>
            </div>
          </div>

          <div className='flex lg:flex-row flex-col items-start justify-start gap-4'>
            <div className='w-[70px] h-[60px] flex items-center justify-center bg-[#fff] shadow-md'> 
              <Image 
                width={30}
                height={30}
                src="/command-1.png" 
                alt="" 
              />
            </div>
            <div className='h-auto w-full flex flex-col'>
              <p className='font-bold text-[28px] text-[#191A15]'>Engagement</p>
              <p className='text-[18px] text-[#A6A6A6]'>Quiuckly navigate you anda engage with your adience</p>
            </div>
          </div>

        </div>
    </div>
  )
}
