import React from 'react'

const Scrollbar = () => {
  return (
    <div>
        <div><h1 className='px-4 lg:px-12  font-Merriweather  font-light text-gray-900 text-2xl md:text-3xl lg:text-4xl mt-14  '>Our Top Collection </h1></div>
       <div className='flex overflow-x-auto scrollbar-custom scroll-smooth snap-x snap-mandatory mt-8' >
          <div className='grid w-[300px] md:w-[400px] cursor-pointer lg:w-[500px] shrink-0 hover:scale-95 ease-in-out mx-4 md:mx-8 lg:mx-12 ' >
            <div className=' h-[350px] rounded-lg bg-center bg-cover bg-[url("/pexels-mikebirdy-93632.jpg")] ' ></div>
            <div className='flex flex-col gap-y-3 my-4 ' > <h2 className=' px-2 font-bold text-xl ' >Mercedes-benz c-class coupe</h2> 
            <p className='px-2 font-bold  '>&#8377;   25000/day</p>
            <button className='flex mx-2 bg-blue-700 rounded-sm px-4 py-2 font-semibold w-fit ' >Book Now</button>
            </div>
          </div>
      {/* second */}
      <div className='grid w-[300px] md:w-[400px]  lg:w-[500px] shrink-0  hover:scale-95 ease-in-out mx-4 md:mx-8 lg:mx-12 ' >
            <div className=' h-[350px] cursor-pointer rounded-lg bg-center bg-cover bg-[url("/d-panyukov-bYR-hWhX2so-unsplash.jpg")] ' ></div>
            <div className='flex flex-col gap-y-3 my-4 ' > <h2 className=' px-2 font-bold text-xl ' >Mercedes-Benz G-Class</h2> 
            <p className='px-2 font-bold  '>&#8377;   35000/day</p>
            <button className='flex mx-2 bg-blue-700 rounded-sm px-4 py-2 font-semibold w-fit ' >Book Now</button>
            </div>
          </div>
      {/* third */}
      <div className='grid w-[300px] md:w-[400px]  lg:w-[500px] shrink-0 hover:scale-95 ease-in-out mx-4 md:mx-8 lg:mx-12 ' >
            <div className=' h-[350px] rounded-lg bg-center bg-cover bg-[url("public/suv.jpg")] ' ></div>
            <div className='flex flex-col gap-y-3 my-4 ' > <h2 className=' px-2 font-bold text-xl ' >Mercedes-Benz M-Class</h2> 
            <p className='px-2 font-bold  '>&#8377;   25000/day</p>
            <button className='flex mx-2 bg-blue-700 rounded-sm px-4 py-2 font-semibold w-fit ' >Book Now</button>
            </div>
          </div>
        {/* fourth  */}
        <div className='grid w-[300px] md:w-[400px]  lg:w-[500px] shrink-0 hover:scale-95 ease-in-out mx-4 md:mx-8 lg:mx-12 ' >
            <div className=' h-[350px] rounded-lg bg-center bg-cover bg-[url("/sam-pearce-warrilow-Ho98UeVC_nQ-unsplash.jpg")] ' ></div>
            <div className='flex flex-col gap-y-3 my-4 ' > <h2 className=' px-2 font-bold text-xl ' >Land Rover</h2> 
            <p className='px-2 font-bold  '>&#8377;   35000/day</p>
            <button className='flex mx-2 bg-blue-700 rounded-sm px-4 py-2 font-semibold w-fit ' >Book Now</button>
            </div>
          </div>
        {/* fifth  */}
        <div className='grid w-[300px] md:w-[400px]  lg:w-[500px] shrink-0  hover:scale-95 ease-in-out mx-4 md:mx-8 lg:mx-12 ' >
            <div className='rounded-lg h-[350px] bg-center bg-cover bg-[url("/agustin-segura-eDXRq-2LfNM-unsplash.jpg")] ' ></div>
            <div className='flex flex-col gap-y-3 my-4 ' > <h2 className=' px-2 font-bold text-xl ' >Ford Mustang</h2> 
            <p className='px-2 font-bold  '>&#8377;   50000/day</p>
            <button className='flex mx-2 bg-blue-700 rounded-sm px-4 py-2 font-semibold w-fit ' >Book Now</button>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Scrollbar
