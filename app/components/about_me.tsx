import React from 'react'

import Image from "next/image";
import tim_three from "../assets/tim_three.jpeg";

const about_me = () => {
  return (
      <div className='flex justify-center md:h-96 my-20'>
          <div className='flex flex-col  md:px-0 md:flex-row md:w-3/4 justify-center  items-center'>
              <div className='w-100 md:px-5  text-center md:text-left md:w-2/3  md:mr-10'>
                <h1 className='uppercase md:text-[32px] py-5'>Meet Tim</h1>
                  <p className='py-2'>
                      I&rsquo;m the person behind the (business/brand)...</p>

                  <p className='py-1'>Add a quick intro about who you are and how you help your clients. Share your transformation story here. How did you get to where you are now? How does this position you as the right person to help them? Remember your story should still be focused on your ideal client and what they want.</p>

                      <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                      <button className='text-[#fdfffc] py-3 my-5 px-8 bg-[#1a1a18] uppercase'>get to know me</button>
              </div>
              <div className='md:w-2/3 flex justify-center'>
                <Image src={tim_three} alt='tim three' className=' my-10 md:my-0 block w-100 md:w-72 rounded-sm'/>
              </div>
          </div>
      </div>
  )
}

export default about_me