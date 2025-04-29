import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { RiMenu3Fill } from "react-icons/ri";
import { div } from 'framer-motion/client';
import { MdOutlineDarkMode } from "react-icons/md";


const Nav = () => {
const [open, setopen]=useState(false);
const [dark, setdark]=useState(false);
    const a = useRef();
   
   useEffect(()=>{
    gsap.from(a.current,{
        y:-20,
        delay:0.1,
        stagger:0.5,
        ease:"power2.out",

    });
   },[]);
      
    
    useEffect(() => {
      const q = gsap.utils.selector(a);
      gsap.from(q("ul"), {
        y: -20,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
      });
    }, []);

const togglemenu=()=>{
  setopen(!open);};
const lighting=()=>{
  setdark(!dark)

};

  return (
    <div className={dark ? "bg-[#03031c]": "bg-[#000000]"} >
<div ref={a} className='h-14 flex items-center justify-between  px-5'>
<div className='font-bold font-Merriweather text-xl text-white '><a href="#"> Lux4U </a> </div>
        <div className= 'hidden  lg:flex gap-8 text-white font-poppins font-semibold '>
            <ul className='hover:scale-105 shadow-lg cursor-pointer hover:text-[#FE7743] '>Home</ul>
            <ul className='hover:scale-105 shadow-lg cursor-pointer hover:text-[#FE7743] '>Sedan</ul>
            <ul className='hover:scale-105 shadow-lg cursor-pointer hover:text-[#FE7743] '>Suv</ul>
            <ul className='hover:scale-105 shadow-lg cursor-pointer hover:text-[#FE7743] '>Convertible</ul>
            <ul className='hover:scale-105 shadow-lg cursor-pointer hover:text-[#FE7743] '>Sports Car</ul>
            <ul className='hover:scale-105 shadow-lg cursor-pointer hover:text-[#FE7743] '>About</ul>
            <MdOutlineDarkMode id='ul' onClick={lighting} className=' font-bold text-2xl cursor-pointer ' />

        </div>
        <div className='hidden lg:flex gap-3 justify-center items-center '>
          
           <button  className='text-white  font-poppins font-semibold hover:scale-90  w-16 px-1 py-1 rounded-md bg-red-700 '>Login</button>
           <button className='text-white font-poppins font-semibold w-20 px-1 py-1 hover:scale-90 rounded-md bg-red-700 text-nowrap '>Sign up</button>
        </div>
        <div className=' text-white text-3xl flex lg:hidden'>
        <RiMenu3Fill onClick={togglemenu} />
        </div>
      </div>
       {open &&( 
        <div className='grid w-[200px] text-center lg:hidden text-white bg-gray-950 gap-y-5 rounded-bl-lg px-3 py-5 absolute right-0 top-15 z-50 '>
           <ul className='hover:scale-105 font-semibold text-xl shadow-lg cursor-pointer hover:text-[#FE7743] '>Home</ul>
            <ul className='hover:scale-105 font-semibold text-xl shadow-lg cursor-pointer hover:text-[#FE7743] '>Sedan</ul>
            <ul className='hover:scale-105 font-semibold text-xl shadow-lg cursor-pointer hover:text-[#FE7743] '>Suv</ul>
            <ul className='hover:scale-105 font-semibold text-xl shadow-lg cursor-pointer hover:text-[#FE7743] '>Convertible</ul>
            <ul className='hover:scale-105 font-semibold text-xl shadow-lg cursor-pointer hover:text-[#FE7743] '>Sports Car</ul>
            <ul className='hover:scale-105 font-semibold text-xl shadow-lg  cursor-pointer hover:text-[#FE7743] '>About</ul>
            <div className='flex flex-col items-center gap-5 '>
          
            <button  className='text-white  font-poppins font-semibold hover:shadow-lg ease-in-out  w-full px-1 py-1 rounded-md bg-red-700 '>Login</button>
            <button className='text-white font-poppins font-semibold w-full px-1 py-1 hover:shadow-lg  rounded-md bg-red-700 text-nowrap '>Sign up</button>
            </div>
        </div>
       )}
       





    </div>
  )
}

export default Nav
