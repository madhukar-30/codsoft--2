import Image from 'next/image';
import React from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";
import { RxTriangleRight } from "react-icons/rx";

export const Footer = () => {
  return (
    <div className='bg-[#161C28] w-full h-auto text-[#A6A6A6] lg:px-[130px] p-0 pt-[130px] pb-8'>
        <div className='flex lg:flex-row flex-col-reverse items-center justify-center lg:gap-[100px] gap-[20px]'>

            <div className='lg:w-[50%] w-[90%] flex flex-col items-start justify-start'>
                <div>
                    <p className='lg:text-[50px] text-[30px] text-[#fff] font-semibold leading-normal w-[100%]'>People are Saying About DoWhith</p>
                    <p className='text-[18px] text-[#A6A6A6]'>Everything you need to accept to payment and grow your money of manage anywhere on planet</p>
                </div>
                <div className='my-[40px]'>
                    <Image 
                        width={45}
                        height={38}
                        src="/qoutation.png"
                        alt="" 
                        className='text-[#D9D9D9]'
                    />
                </div>
                <div>
                    <p className='text-[18px] text-[#A6A6A6] font-medium mb-[40px]'>I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍</p>
                    <p className='text-[18px] text-[#A6A6A6] font-medium mb-[40px]'>_ Aria Zinanrio</p>
                </div>
                <div className='flex flex-row flex-wrap items-center justify-start gap-[20px]'>
                    <Image 
                        width={66}
                        height={66}
                        src="/avatar-1.png" 
                        alt="" 
                        className='rounded-[66px]' 
                    />
                    <Image 
                        width={66}
                        height={66}
                        src="/avatar-2.png" 
                        alt="" 
                        className='rounded-[66px]' 
                    />
                    <Image 
                        width={66}
                        height={66}
                        src="/avatar-3.png" 
                        alt="" 
                        className='rounded-[66px]' 
                    />
                    <Image 
                        width={66}
                        height={66}
                        src="/avatar-4.png" 
                        alt="" 
                        className='rounded-[66px]' 
                    />
                    <div className='w-[66px] h-[66px] rounded-[66px] border-white border-2 flex items-center justify-center text-white text-[40px]'><RxTriangleRight /></div>
                </div>
            </div>

            <div className='lg:w-[50%] w-[90%] bg-[#222938] rounded-[20px] inline-flex flex-col gap-10px items-center lg:px-[86px] px-4 lg:pb-[66px] pb-8 lg:pt-[40px] pt-8'>
                <div className='flex flex-col justify-center items-center'>
                    <Image 
                        width={72}
                        height={86}
                        src="/Currency.png" 
                        alt="" 
                    />
                    <p className='text-[30px] text-white font-medium'>Get Started</p>
                </div>
                <div className='flex flex-col items-start w-full gap-[20px]'>
                    <label htmlFor="email" className='text-white font-medium'>Email</label>
                    <input type="text" className='w-full h-[50px] rounded-xl indent-4 outline-none' placeholder='Enter your email' />
                    <label htmlFor="message" className='text-white font-medium'>Message</label>
                    <textarea className='w-full h-[80px] rounded-xl indent-4 pt-4 outline-none' placeholder='What are you say ?' />
                    <div className='w-full flex flex-col gap-[10px]'>
                        <button className='w-full h-[60px] text-white bg-[#54BD95] rounded-xl'>Request Demo</button>
                        <p className='w-full text-right text-white'><span className='text-[#A6A6A6]'>or</span> Start Free Trial</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-row justify-evenly flex-wrap mt-[160px] mb-[60px] gap-6 lg:pl-0 pl-8'>
            <div className='lg:w-[30%] w-[90%]'>
                <p className='lg:text-[50px] text-[30px] text-[#54BD95] font-semibold leading-[45px]'>Biccas</p>
                <p className='text-[18px] text-[#A6A6A6] font-medium py-[30px]'>Get started noew try our product</p>
                <div className='lg:w-full w-auto h-[60px] rounded-[70px] border-2 border-[#A6A6A6] flex flex-row items-center'>
                    <input type="email" placeholder='Enter your email here' className='bg-transparent w-[86%] h-full indent-4 outline-none' /> <div className='w-[46px] h-[46px] bg-[#54BD95] flex items-center justify-center rounded-full text-white text-[28px]'><IoMdArrowRoundForward /></div>
                </div>
            </div>
            <div className='lg:w-[20%] w-auto text-[#A6A6A6]'>
                <p className="font-semibold mb-[24px] text-white">Support</p>
                <p className='mb-[16px]'>Help Centre</p>
                <p className='mb-[16px]'>Account Information</p>
                <p className='mb-[16px]'>About</p>
                <p className='mb-[16px]'>Contact Us</p>
            </div>
            <div className='lg:w-[20%] w-auto'>
            <p className="font-semibold mb-[24px] text-white">Help and Solution</p>
                <p className='mb-[16px]'>Talk to support</p>
                <p className='mb-[16px]'>Support docs</p>
                <p className='mb-[16px]'>System status</p>
                <p className='mb-[16px]'>Covid responde</p>
            </div>
            <div className='lg:w-[20%] w-auto'>
            <p className="font-semibold mb-[24px] text-white">Product</p>
                <p className='mb-[16px]'>Update</p>
                <p className='mb-[16px]'>Security</p>
                <p className='mb-[16px]'>Beta Test</p>
                <p className='mb-[16px]'>Pricing Product</p>
            </div>
        </div>

        <div className='flex lg:flex-row flex-col justify-start items-center'>
            <div className='flex flex-1'>© 2024 Biccas Inc. Manas Madhukar Copyright and rights reserved</div>
            <div className=''>Terms and Condtions * Privacy Policy</div>
        </div>
    </div>
  )
}
