import React from 'react'
import { Button } from  "../../components/LandingPageOne"

export default function Pals() {
  return (
   <section className='relative px-8 lg:px-16 py-12 lg:py-40 bg-pals bg-cover bg-center -z-10'>
    <div className='relative text-white text-center flex flex-col items-center justify-center gap-2 lg:gap-4 lg:-mt-14'>
     <h2 className='w-[700px] text-[30px] font-thin text-white'>Join our PALs network and unleash your tech skills on innovative projects. Be part of our team and shape the</h2>
     <p className='capitalize text-[25px] font-bold'>FUTURE OF TECHNOLOGY.</p>
     <Button text="Join the PALs network"></Button>
    </div>
    <div className='absolute inset-0 bg-[#263238] opacity-70'></div>
   </section>
  )
}

