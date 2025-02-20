import React from 'react'

const nav = () => {
  return (
    <div className='flex justify-between py-7 px-4 md:w-100 bg-[#1a1a18] text-white'>
          <h1 className=' uppercase w-30'> Tim Seo</h1>
      <ul className='hidden md:flex py-0 '>
              <li className='px-4'>Home</li>
              <li className='px-4'>About </li>
              <li className='px-4'>Services</li>
              <li className='px-4'>Blog</li>
              <li className='px-4'>Contact</li>
         </ul>
    </div>
  )
}

export default nav