import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Find = () => {
const d=useRef();
     useEffect(()=>{
        gsap.from(d.current,{
          x:-500,
          duration:1,
          scrollTrigger:{
            trigger:d.current,
            start:"top 80%",
            end:"bottom 60%",
            ease:"power2.out",
            toggleActions: "play none none reverse", 

          }  
        });
     },[]);

  return (
    <div ref={d} className='bg-[#FDFAF6]' >
        <div  ><h1 className='text-xl  md:text-3xl font-poppins px-3 py-3 text-center  '>Find Your Wheels</h1></div>
      <div className='grid md:flex justify-evenly items-center h-fit-content gap-14 py-8 '>
        <div className='w-44  flex flex-col items-center gap-y-8 '>
            <div><img className='w-24' src="/car.avif" alt="car" /> </div>
            <button className='border-[1px] border-black rounded-sm px-3 py-1 text-bold hover:border-[2px]  ' >Book Now</button>
        </div>
        <div className='w-44  flex flex-col items-center gap-y-8 '>
            <div><img className='w-24' src="/car.avif" alt="car" /> </div>
            <button className='border-[1px] border-black rounded-sm px-3 py-1 text-bold hover:border-[2px]  ' >Explore Collection</button>
        </div>
        <div className='w-44  flex flex-col items-center gap-y-8 '>
            <div><img className='w-24' src="/car.avif" alt="car" /> </div>
            <button className='border-[1px] border-black rounded-sm px-3 py-1 text-bold  hover:border-[2px] ' >Discover Deals</button>
        </div>

      </div>
    </div>
  )
}

export default Find
