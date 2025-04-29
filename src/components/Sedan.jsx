import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
const Sedan = () => {
const e=useRef();
useEffect(()=>{
  gsap.from(e.current,{
    scale:0,
    duration:1,
    scrollTrigger:{
      trigger:e.current,
      start:"top 80%",
      end:"bottom 50%",
      ease:"power2.out",
      toggleActions: "play none none reverse", 

    }  
  });
},[]);


  return (
    <div> 
       <div ref={e} className='grid  lg:flex  mt-10  w-full h-fit   lg:h-[420px]  px-0 md:px-4 '>
      <div className=' order-1 lg:w-1/2 h-[420px] lg:h-[420px] bg-[url("/pexels-mikebirdy-170811.jpg")] bg-cover bg-center  ' ></div>
        <div className=' py-8 lg:py-0 lg:w-1/2 px-4 lg:px-8 flex flex-col justify-center bg-[#fffffd] ' >
             <div className='space-y-3  '>
              <h1 className='font-Merriweather font-extralight text-gray-900 text-2xl lg:text-4xl '>Find Your Perfect Sedan – Stylish, Efficient, and Comfortable Rides.</h1>
              <p className='text-gray-700 '>A budget-friendly commuter, a sporty performance car, or a luxurious cruiser, sedans offer a perfect balance of practicality, efficiency, and driving pleasure. At 
                <span className='font-Merriweather' > Lux4u </span>
          ,we help you discover the best Sedans to match your needs and budget.</p>
             </div>
             <div className='flex mt-5   ' ><button className='bg-blue-700 text-white   hover:scale-95 font-semibold hover:border-2 outline-offset-1 px-4 rounded-sm py-2 '>Book Now</button></div>
        </div>
        
      </div>
</div>
  )
}

export default Sedan
