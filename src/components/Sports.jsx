import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Sports = () => {
const k=useRef();
const l=useRef();
   useEffect(()=>{
    gsap.from(k.current,{
      scale:0,
      
      scrollTrigger:{
        trigger:k.current,
        start:"top 80%",
        end:"bottom 50%",
        ease:"power2.out",
        toggleActions:"play none none reverse"

      }
    });
   },[]);
   useEffect(()=>{
    gsap.from(l.current,{
      y:-700,
      delay:1.5,
      scrollTrigger:{
        trigger:l.current,
        start:"top 80%",
        end:"bottom 50%",
        duration:0.5,
        ease:"power2.out",
        toggleActions:"play none none reverse",
      }

    }
    )
   })
  return (
    <div>
       <div ref={k} className='grid  lg:flex px-0 md:px-4 mt-10  w-full h-fit   lg:h-[420px]  '>
      <div className='order-2   lg:order-none lg:w-1/2  lg:h-[420px]' ><img  src="/ildar-garifullin-uX4Bjke_xUE-unsplash.jpg" alt="" /></div>
        <div ref={l} className=' py-8 lg:py-0 lg:w-1/2 bg-white px-4 lg:px-8 flex flex-col justify-center ' >
             <div  className='space-y-3  '>
              <h1 className=' font-Merriweather font-extralight text-gray-900 text-2xl lg:text-4xl '>Sports Cars: The Ultimate Driving Machines.</h1>
              <p className=' text-gray-700 '>sports cars are all about. These aren't just cars - they're excitement on wheels. Let's break it down so you can find your perfect thrill ride.

</p>
             </div>
             <div className=' flex mt-5   ' ><button className='bg-blue-700 text-white font-semibold   hover:scale-95 px-4 rounded-sm py-2 '>Book Now</button></div>
        </div>
        
      </div>
    </div>
  )
}

export default Sports
