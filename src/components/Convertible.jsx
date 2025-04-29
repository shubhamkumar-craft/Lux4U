import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Convertible = () => {
const i=useRef();
const j=useRef();
   useEffect(()=>{
    gsap.from(i.current,{
      scale:0,
      
      scrollTrigger:{
        trigger:i.current,
        start:"top 80%",
        end:"bottom 50%",
        ease:"power2.out",
        toggleActions:"play none none reverse"

      }
    });
   },[]);
   useEffect(()=>{
    gsap.from(j.current,{
      x:-700,
      delay:1.5,
      scrollTrigger:{
        trigger:j.current,
        start:"top 80%",
        end:"bottom 50%",
        ease:"power2.out",
        toggleActions:"play none none reverse",
      }

    }
    )
   })
  return (
    <div>
       <div ref={i}  className='grid  lg:flex   w-full h-fit lg:h-[420px] mt-10 px-0 md:px-4  '>
      <div  className='order-2 lg:w-1/2   ' ><img  src="/pexels-mikebirdy-977003.jpg" alt="" /></div>
        <div ref={j} className='py-8 lg:py-0 lg:w-1/2 bg-white px-4 lg:px-8 py:8 flex flex-col justify-center ' >
             <div className='space-y-3  '>
              <h1 className='font-Merriweather font-extralight text-gray-900 text-2xl lg:text-4xl '>The Joy of Driving a Convertible.</h1>
              <p className='text-gray-700 '>There's nothing like driving with the top down. The sun on your face, the wind in your hair - it makes every drive feel special. Whether you're cruising along the coast or taking a weekend trip, a convertible turns ordinary drives into memorable adventures.</p>
             </div>
             <div className='flex mt-5   ' ><button className='bg-blue-700 text-white font-semibold  hover:scale-95 px-4 rounded-sm py-2 '>Book Now</button></div>
        </div>
        
      </div>
    </div>
  )
}

export default Convertible
