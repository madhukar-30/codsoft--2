import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

export const Benefits = () => {
  return (
    <div className='w-full h-auto'>

      <div className='lg:w-full w-[100%] flex flex-col items-start lg:px-32 px-0 lg:py-[65px] py-[20px] bg-white'>

        <div className='w-full flex lg:flex-row flex-col items-center justify-start lg:gap-[100px] gap-6 lg:text-left text-center lg:px-0 px-4'>
          <div className='lg:text-[50px] text-[30px] font-semibold lg:leading-[60px] leading-normal'>Our Features you can get</div>
          <div className='text-[18px] text-[#A6A6A6]'>We offer a variety of interesting features that you can help increase yor productivity at work and manage your project esaly</div>
          <div className='leading-[30px] bg-[#54BD95] text-[18px] text-white rounded-[70px] lg:w-[22%] w-auto py-2 lg:px-0 px-4 text-center h-auto'>Get Started</div>
        </div>

        <div className='flex flex-row flex-wrap items-center justify-center gap-8 mt-[70px]'>

          <div className='lg:w-[364px] w-[350px] h-auto lg:px-0 px-8 py-4 flex flex-col '>
            <Image
              height={430}
              width={364}
              src="/card-1.png"
              alt="Card 1"
              className='shadow-xl rounded-2xl'
            />
            <div className='flex flex-col gap-4 mt-2'>
              <p className='text-[30px] font-semibold'>Collboration Teams </p>
              <p className='text-[18px] text-[#A6A6A6] font-medium'>Here you can handle projects together with team virtually</p>
            </div>
          </div>

          <div className='lg:w-[364px] w-[350px] h-auto lg:px-0 px-8 py-4 flex flex-col '>
            <Image
              height={430}
              width={364}
              src="/card-2.png"
              alt=""
              className='shadow-xl rounded-2xl'
            />
            <div className='flex flex-col gap-4 mt-2'>
              <p className='text-[30px] font-semibold'>Cloud Storage</p>
              <p className='text-[18px] text-[#A6A6A6] font-medium'>No nedd to worry about storage because we provide storage up to 2 TB</p>
            </div>
          </div>

          <div className='lg:w-[364px] w-[350px] h-auto lg:px-0 px-8 py-4 flex flex-col '>
            <Image
              height={430}
              width={364}
              src="/card-3.png"
              alt=""
              className='shadow-xl rounded-2xl'
            />
            <div className='flex flex-col gap-4 mt-2'>
              <p className='text-[30px] font-semibold'>Daily Analytics</p>
              <p className='text-[18px] text-[#A6A6A6] font-medium'>We always provide useful informatin to make it easier for you every day</p>
            </div>
          </div>

        </div>
      </div>

      <div className='w-full flex lg:flex-row flex-col items-center justify-center lg:gap-0 gap-4 lg:px-32 px-0 lg:py-[65px] py-[20px]'>

        <div className='lg:w-full w-[90%] text-[#191A15] flex flex-col lg:gap-[50px] gap-8'>
          <div className='lg:w-full w-[90%] lg:text-[50px] text-[30px] font-bold'>What Benifit Will You Get</div>

          <div className='w-full flex flex-col items-start lg:justify-start justify-center lg:gap-8 gap-4'>
            <div className='flex flex-row gap-2' >
              <div className='flex items-center justify-center w-[32px] h-[32px] bg-[#54BD95] text-[12px] text-white rounded-full'><FaCheck /> </div>
              <div className='text-[18px]'>Free Consulting With Experet Saving Money</div>
            </div>
            <div className='flex flex-row gap-2' >
              <div className='flex items-center justify-center w-[32px] h-[32px] bg-[#54BD95] text-[12px] text-white rounded-full'><FaCheck /> </div>
              <div className='text-[18px]'>Online Banking</div>
            </div>
            <div className='flex flex-row gap-2' >
              <div className='flex items-center justify-center w-[32px] h-[32px] bg-[#54BD95] text-[12px] text-white rounded-full'><FaCheck /> </div>
              <div className='text-[18px]'>Investment Report Every Month</div>
            </div>
            <div className='flex flex-row gap-2' >
              <div className='flex items-center justify-center w-[32px] h-[32px] bg-[#54BD95] text-[12px] text-white rounded-full'><FaCheck /> </div>
              <div className='text-[18px]'>Saving Money For The Future</div>
            </div>
            <div className='flex flex-row gap-2' >
              <div className='flex items-center justify-center w-[32px] h-[32px] bg-[#54BD95] text-[12px] text-white rounded-full'><FaCheck /> </div>
              <div className='text-[18px]'>Online Transection</div>
            </div>
          </div>
        </div>

        <div className='lg:w-full w-[90%]'>
          <Image
            width={574}
            height={529}
            src="/Group-139.png"
            alt=""
          />
        </div>
      </div>

      <Image
        width={1317}
        height={2634}
        src="/Ellipse-40.png"
        alt="Ellipse Backgroung"
        className='absolute lg:top-[2300px] top-1/2 right-0 z-[-100]'
      />

      <div className='lg:px-32 px-0 lg:py-[65px] py-[20px]'>

        <div className='flex flex-col items-center justify-center text-center'>
          <div className='p-4 text-center lg:text-[50px] text-[30px] font-semibold lg:mb-[40px] mb-0'>Choose Plan <br /> That’s Right For You</div>
          <div className='p-4 text-[18px] text-[#A6A6A6] lg:mb-[40px] mb-6'>Choose plan that works best for you, feel free to contact us</div>
          <div className='flex flex-row bg-white lg:w-[340px] w-auto lg:h-[70px] h-auto lg:mb-[65px] mb-10 shadow-lg p-2 rounded-lg'>
            <div className='flex items-center justify-center bg-[#fff] h-[56px] w-[160px] rounded-lg text-black p-2 font-medium'>Bit Monthly</div>
            <div className='flex items-center justify-center bg-[#54BD95] h-[56px] w-[160px] rounded-lg text-white p-2 font-medium'>Bit Yearly</div>
          </div>
        </div>

        <div className='flex lg:flex-row flex-col items-center justify-center gap-[30px]'>

          <div className='lg:w-[374px] w-[90%] p-[20px] h-[644px] flex flex-col items-center justify-center bg-[#fff] rounded-lg shadow-lg'>
            <div className='text-center pt-[40px]'>
              <div className='text-black text-[30px] font-semibold'>Free</div>
              <div>Have a go and test your superpowers</div>
              <div className='text-black text-[50px] font-semibold'><span className='text-[18px]'>$</span> 0</div>
            </div>
            <div className='lg:w-[334px] w-[95%] lg:h-[380px] h-auto flex flex-col items-start gap-[26px] px-[30px] py-[24px] bg-[#F9FAFB] rounded-lg'>
              <div className='flex flex-row gap-2' >
                <div className='flex items-center justify-center w-[26px] h-[26px] bg-[#54BD95] text-[12px] text-white rounded-full'><FaCheck /> </div>
                <div className='text-[18px]'> 2 Users</div>
              </div>
              <div className='flex flex-row gap-2' >
                <div className='flex items-center justify-center w-[26px] h-[26px] bg-[#54BD95] text-[12px] text-white rounded-full'><FaCheck /> </div>
                <div className='text-[18px]'> 2 Files</div>
              </div>
              <div className='flex flex-row gap-2' >
                <div className='flex items-center justify-center w-[26px] h-[26px] bg-[#54BD95] text-[12px] text-white rounded-full'><FaCheck /> </div>
                <div className='text-[18px]'> Public Share & Components</div>
              </div>
              <div className='flex flex-row gap-2' >
                <div className='flex items-center justify-center w-[26px] h-[26px] bg-[#54BD95] text-[12px] text-white rounded-full'><FaCheck /> </div>
                <div className='text-[18px]'> Chat Support</div>
              </div>
              <div className='flex flex-row gap-2' >
                <div className='flex items-center justify-center w-[26px] h-[26px] bg-[#54BD95] text-[12px] text-white rounded-full'><FaCheck /> </div>
                <div className='text-[18px]'> New income apps</div>
              </div>
              <button className='w-full text-[#54BD95] text-[18px] font-semibold px-[37px] py-[17px] bg-white shadow-lg rounded-[20px]'>Signup for free</button>
            </div>
          </div>

          <div className='lg:w-[374px] w-[90%] p-[20px] h-[684px] flex flex-col items-center justify-center bg-[#54BD95] rounded-lg'>
            <div className='flex flex-col items-center justify-center text-center mb-[15px]'>
              <div className='text-white text-[30px] font-semibold'>Pro</div>
              <div className='text-[18px] text-white font-medium'>Experiment the power of infinite possibilities</div>
              <div className='text-white text-[50px] font-semibold'><span className='text-[18px]'>$</span> 8</div>
              <div className='w-[130px] h-[40px] grid place-content-center text-[14px] text-white bg-[#85DAB9] rounded-lg'>Save $50 a year</div>
            </div>
            <div className='lg:w-[334px] w-[95%] lg:h-[380px] h-auto flex flex-col items-start gap-[26px] px-[30px] py-[24px] bg-[#F9FAFB] rounded-lg'>
              <div className='flex flex-row gap-2' >
                <div className='flex items-center justify-center w-[26px] h-[26px] bg-[#54BD95] text-[12px] text-white rounded-full'><FaCheck /> </div>
                <div className='text-[18px]'> All Users</div>
              </div>
              <div className='flex flex-row gap-2' >
                <div className='flex items-center justify-center w-[26px] h-[26px] bg-[#54BD95] text-[12px] text-white rounded-full'><FaCheck /> </div>
                <div className='text-[18px]'> All Apps</div>
              </div>
              <div className='flex flex-row gap-2' >
                <div className='flex items-center justify-center w-[26px] h-[26px] bg-[#54BD95] text-[12px] text-white rounded-full'><FaCheck /> </div>
                <div className='text-[18px]'> Unlimited editable exports</div>
              </div>
              <div className='flex flex-row gap-2' >
                <div className='flex items-center justify-center w-[26px] h-[26px] bg-[#54BD95] text-[12px] text-white rounded-full'><FaCheck /> </div>
                <div className='text-[18px]'> Folders and collaboration</div>
              </div>
              <div className='flex flex-row gap-2' >
                <div className='flex items-center justify-center w-[26px] h-[26px] bg-[#54BD95] text-[12px] text-white rounded-full'><FaCheck /> </div>
                <div className='text-[18px]'> All incoming apps</div>
              </div>

              <button className='w-full text-[#fff] text-[18px] font-semibold px-[37px] py-[17px] bg-[#54BD95] shadow-lg rounded-[20px]'>Go to pro</button>
            </div>
            <Image src='/Ellipse-53.png' alt='Ellipse Green' width={374} height={600} className='absolute z-[-1]' />
          </div>

          <div className='lg:w-[374px] w-[90%] p-[20px] h-[644px] flex flex-col items-center justify-center bg-[#fff] rounded-lg shadow-lg'>
            <div className='text-center pt-[40px]'>
              <div className='text-black text-[30px] font-semibold'>Business</div>
              <div>Unveil new superpowers and join the Design Leaque</div>
              <div className='text-black text-[50px] font-semibold'><span className='text-[18px]'>$</span> 16</div>
            </div>
            <div className='lg:w-[334px] w-[95%] lg:h-[380px] h-auto flex flex-col items-start gap-[26px] px-[30px] py-[24px] bg-[#F9FAFB] rounded-lg'>
              <div className='flex flex-row gap-2' >
                <div className='flex items-center justify-center w-[26px] h-[26px] bg-[#54BD95] text-[12px] text-white rounded-full'><FaCheck /> </div>
                <div className='text-[18px]'> All the features of pro plan</div>
              </div>
              <div className='flex flex-row gap-2' >
                <div className='flex items-center justify-center w-[26px] h-[26px] bg-[#54BD95] text-[12px] text-white rounded-full'><FaCheck /> </div>
                <div className='text-[18px]'> Account success Manager</div>
              </div>
              <div className='flex flex-row gap-2' >
                <div className='flex items-center justify-center w-[26px] h-[26px] bg-[#54BD95] text-[12px] text-white rounded-full'><FaCheck /> </div>
                <div className='text-[18px]'> Single Sign-On (SSO)</div>
              </div>
              <div className='flex flex-row gap-2' >
                <div className='flex items-center justify-center w-[26px] h-[26px] bg-[#54BD95] text-[12px] text-white rounded-full'><FaCheck /> </div>
                <div className='text-[18px]'> Co-conception program</div>
              </div>
              <div className='flex flex-row gap-2' >
                <div className='flex items-center justify-center w-[26px] h-[26px] bg-[#54BD95] text-[12px] text-white rounded-full'><FaCheck /> </div>
                <div className='text-[18px]'> Collaboration-Soon</div>
              </div>

              <button className='w-full text-[#54BD95] text-[18px] font-semibold px-[37px] py-[17px] bg-white shadow-lg rounded-[20px]'>Goto Business</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
