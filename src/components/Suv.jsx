import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Suv = () => {
const f=useRef();
      useEffect(()=>{
        gsap.from(f.current,{
          x:-500,
          duration:1,
          scrollTrigger:{
            trigger:f.current,
            start:"top 80%",
            end:"bottom 50%",
            ease:"power2.out",
            toggleActions: "play none none reverse", 
            
          }

        })
      })
  return (
    <div>
      <div ref={f} className='grid  lg:flex   w-full h-fit lg:h-[420px] mt-8 px-0 md:px-4 '>
      <div className='order-2 lg:order-none lg:w-1/2 ' ><img  src="/suv.jpg" alt="" /></div>
        <div className='py-8 lg:py-0 lg:w-1/2 bg-white px-4 lg:px-8 flex flex-col justify-center ' >
             <div className='space-y-3  '>
              <h1 className='font-Merriweather font-extralight text-gray-900 text-2xl lg:text-4xl '>Find Your Perfect SUV – Explore the Best Options for Every Lifestyle.</h1>
              <p className='text-gray-700 '>you need a family-friendly hauler, an off-road adventurer, or a sleek city cruiser, SUVs offer the perfect blend of space, performance, and comfort. At 
                <span className='font-Merriweather' > Lux4u </span>
          ,we help you discover the best SUVs to match your needs and budget.</p>
             </div>
             <div className='flex mt-5   ' ><button className='bg-blue-700  hover:scale-95 text-white font-semibold  px-4 rounded-sm py-2 '>Book Now</button></div>
        </div>
        
      </div>

    </div>
  )
}

export default Suv
