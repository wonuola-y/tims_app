import React from 'react'
import Image from "next/image";
import tim_two from "../assets/tim_two.jpg";
const Services =() => {
  return (
      <div className='flex flex-col'>
      <h1 className='text-[56px] md:text-[100px] uppercase leading-normal tracking- text-center text-[#1a1a18] my-5 md:my-0'>Services</h1>
      <div className=' flex justify-center text-white bg-[#1a1a18]  border-white border-2 py-10'>
        <div className='flex flex-col md:flex-row text-center w-3/4 md:text-left'>
          <div className='flex flex-col md:flex-row text-white w-4/5 ml-10  '>
            <h1 className='mx-5 text-[75px] md:text-[150px] '>1</h1>
            <div className='my-10'>
              <h1 className='md:text-[45px] uppercase'>Instagram  management</h1>
              <p className='py-5'>Give an intro to what your offer is about and how it helps them here. This is a sneak peek intro what this service offering is about and how it will benefit your ideal client. This is just a preview, they will click the button below to learn more</p>
              <button className='bg-white py-3 px-8 text-[#1a1a18]'>Learn more</button>
            </div>
          </div>
          <div className='flex items-center w-1/2 '>
            <Image src={tim_two} alt='tim' className="hidden md:flex w-64 mx-auto rounded-sm " />
          </div>
        </div>
      </div>

      {/* service 2 */}
      <div className=' flex justify-center py-10 text-[#1a1a18] bg-[#fdfffc]  border-white border-2'>
        <div className='w-3/4 flex flex-col text-center md:text-left md:flex-row'>
          <div className='flex text-[#1a1a18] w-4/5 ml-10 '>
            <div className='flex items-center '>
              <Image src={tim_two} alt='tim' className="hidden md:flex w-72 mx-auto rounded-sm " />
            </div>
          </div>
          <h1 className='mx-5 text-[75px] md:text-[150px] '>2</h1>
          <div className='my-10 w-full md:w-3/4 '>
            <h1 className='md:text-[45px] uppercase'>Facebook Advertising</h1>
            <p className='py-5'>Give an intro to what your offer is about and how it helps them here. This is a sneak peek intro what this service offering is about and how it will benefit your ideal client. This is just a preview, they will click the button below to learn more</p>
            <button className='text-[#fdfffc] py-3 px-8 bg-[#1a1a18]'>Learn more</button>
          </div>
        </div>
      </div>

      {/* service 3 */}
      <div className=' flex justify-center  text-white bg-[#1a1a18]  border-white border-2 md:py-20 p-10 overflow-scroll'>
        <div className='flex text-center'>
          <div className='md:w-100 '>
            <h1 className='md:text-[45px] uppercase'>Subscribe to our newsletter</h1>
            <p className='py-5 '>
              Add a short description about how your free resource will help them and why they would want to download it.</p>
            <div className='flex justify-center my-5 overflow-scroll'><input type="text" placeholder="Type in your name"className='hidden md:block mx-4 px-5 py-3 rounded'/><input className='rounded px-5 py-3' placeholder="email@example.com"type="email" name="" id="" /></div>
            <button className='text-[#1a1a18] py-3 px-8 bg-[#fdfffc] '>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services