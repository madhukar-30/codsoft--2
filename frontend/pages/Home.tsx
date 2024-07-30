import Image from 'next/image'

import { Main } from '@/components/Main'
import { About } from '@/components/About'
import { Benefits } from '@/components/Benefits'

import React from 'react'
import { Footer } from '@/components/Footer'

const Home = () => {
  return (
    <div>
      <Image 
        fill
        src="/Ellipse-36.png" 
        alt="Ellipse Backgroung" 
        className='absolute top-0 z-[-100]'
      />

      <Main />

      <About />

      <Benefits />

      <Footer />
      
    </div>
  )
}

export default Home
