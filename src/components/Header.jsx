import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { BsTelephone } from "react-icons/bs";

const Header = () => {
    const c=useRef();
    useEffect(()=>{
        gsap.fromTo(c.current,{scale:0},{
        
            scale:1,
            duration:0.5,
            delay:2
        });
    },[]);


  return (
    <div className='h-[620px] bg-black overflow-x-hidden ' >
      <div ref={c} className=''>
      <div className="h-[620px] flex flex-col justify-center items-end px-4 gap-6  w-full bg-cover bg-center bg-no-repeat bg-[url('/public/d-panyukov-xZJ6uV5F4_k-unsplash.jpg')]">
            {/* <h1 className='text-white text-4xl hidden lg:flex font-extralight font-Merriweather '>Your Dream Car,<br /> One Click Away </h1>
            <button className='bg-red-700  hidden lg:flex text-center justify-center w-36 py-3 lux-button relative px-6  text-white  rounded-[14px] font-bold text-[17px] shadow-lg overflow-hidden z-10 hover:text-[#e8e8e8] transition-all duration-300  '>Book Now</button> */}
        </div>
      </div>
      <div className='w-14 h-14 cursor-pointer bg-white border-gray-700 border-[1px] text-2xl font-extrabold fixed bottom-32 right-8 z-50 flex rounded-full  justify-center items-center '>
      <BsTelephone />

      </div>
    </div>
  )
}

export default Header
