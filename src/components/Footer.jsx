import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='bg-[#000000] h-[800px] md:h-[400px] mt-10 grid  gap-8 py-10 md:flex items-center justify-around ' >
         <div ><a className='text-white font-Merriweather text-4xl ' href="#">Lux4U</a></div>
         <div className='grid gap-3'>
                <h1 className='text-white text-xl mb-3 font-semibold ' >Menu</h1>
                <a className='text-gray-200 hover:scale-110 font-mono ease-in-out' href="#">Partener with Lux4U</a>
                <a className='text-gray-200 hover:scale-110 font-mono ease-in-out'  href="#">Submit Requirement</a>
                <a className='text-gray-200 hover:scale-110 font-mono ease-in-out' href="# ">Contact us</a>
                <a className='text-gray-200 hover:scale-110 font-mono ease-in-out'  href="#">About us</a> 
                
                </div>
                <div className='grid text-white gap-3'>
                <h1 className='text-xl mb-3 font-semibold ' >Pages</h1>
                <a className='text-gray-200 hover:scale-110 font-mono ease-in-out' href="#">Sedans</a>
                <a className='text-gray-200 hover:scale-110 font-mono ease-in-out' href="#">Suvs</a>
                <a className='text-gray-200 hover:scale-110 font-mono ease-in-out' href="# ">Convertible</a>
                <a className='text-gray-200 hover:scale-110 font-mono ease-in-out' href="#">Sports Car</a> 
                
           </div>
                <div className='grid text-white gap-3'>
                <h1 className='text-xl mb-3 font-semibold ' >Support</h1>
                <a className='text-gray-200 hover:scale-110 font-mono ease-in-out' href="#">Support Team</a>
                <a className='text-gray-200 hover:scale-110 font-mono ease-in-out' href="#">Terms of Use</a>
                <a className='text-gray-200 hover:scale-110 font-mono ease-in-out' href="# ">Privacy Policy</a>
                <a className='text-gray-200 hover:scale-110 font-mono ease-in-out' href="#">How its Works</a>
                <a className='text-gray-200 hover:scale-110 font-mono ease-in-out' href="#">FAQ</a> 

                
                </div>
     </div>
    </div>
  )
}

export default Footer
