'use client';
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

import { FaBars } from "react-icons/fa"

export const Navbar = () => {

  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offset = 50;

      if (scrollPosition > offset) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className={`fixed top-0 w-full h-[100px] flex items-center duration-200 transition-all ${isActive ? 'active' : ''} ${isScrolled ? 'bg-gray-900 h-[70px] transition-all' : 'bg-transparent'}`}>

      <div className='w-[100vw] flex items-center justify-between lg:px-[130px] px-[30px]'>
            <div className='flex flex-row items-center justify-center gap-2 text-[25px]'>
              <a href="/" className='text-[50px] font-bold text-[#54BD95]'>Biccas</a>
            </div>

            <div id="menu-btn" onClick={toggleNavbar} className="text-[18px] cursor-pointer text-white lg:hidden block">
              <FaBars id='bars-nav' className='w-[2rem] h-[2rem] text-[#54BD95] drop-shadow-lg' />
                <div className="secNav">
                    <Link href="/">Home</Link>
                    <Link href="/Services">Product</Link>
                    <Link href="/About">FAQ</Link>
                    <Link href="/Contact">Blog</Link>
                    <Link href="/About">About Us</Link>

                    <Link href="/Login">Login</Link>
                    <Link href="/Login">Sign Up</Link>
                </div>
            </div>

            <nav id='main-nav' className={`lg:flex hidden flex-row text-center justify-center gap-[2rem] text-[18px] text-[#A6A6A6]`}>
                <Link href="/" className='flex-prop'>Home</Link>
                <Link href="/Services" className='flex-prop'>Product</Link>
                <Link href="/About" className='flex-prop'>FAQ</Link>
                <Link href="/Contact" className='flex-prop'>Blog</Link>
                <Link href="/About" className='flex-prop'>About Us</Link>

                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <Link href="/Login" className='flex-prop'>Login</Link>
                <Link href="/Login" className='text-[#fff] bg-[#54BD95] p-2 rounded-[10px]'>Sign Up</Link>
            </nav>

      </div>

    </div>
  )
}