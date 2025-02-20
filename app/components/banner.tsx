import React from 'react'

const banner = () => {
  return (
    <div className='flex justify-center py-20 text-white bg-[#8a7e72] '>
       <div className='flex flex-col items-center w-full md:w-3/5 text-center'>
       <h1 className='uppercase p-1 md:py-5 text-3xl md:text-[45px]'>Let me help you get noticed in the web space</h1>
        <p className='py-2 md:py-5'>Get an SEO audit today!  </p>
        <button className='text-[#1a1a18] mt-3 md:mt-5 py-3 px-8 bg-[#fdfffc] ' >Learn More</button>
       </div>
    </div>
  )
}

export default banner