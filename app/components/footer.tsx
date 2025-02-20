import React from 'react'
import Image from 'next/image'
import linkedin from '../assets/icons8-linkedin-50.png'
import twitter from '../assets/icons8-x-50.png'
const footer = () => {
    return (
        <div className='bg-[#1a1a18]  text-white flex justify-center w-100 py-10'>
          <div className="flex flex-col text-center items-center md:flex-row md:items-start md:text-left md:justify-between w-2/3 ">
          <div className='w-100 md:w-1/3 px-5'>
                <h1 className='uppercase  mt-4 md:mt-0 md:my-5 font-semibold'>Menu</h1>
                <ul>
                    <li className='py-1 md:py-3' >Home</li>
                    <li className='py-1 md:py-3'>Services</li>
                    <li className='py-1 md:py-3'>Work with me</li>
                    </ul>
                    </div>
            <div className='w-100 md:w-1/3 px-5'>
            <h1 className='uppercase mt-4 md:mt-0 md:my-5 font-semibold'>Services</h1>
                <ul>
                    <li className='py-1 md:py-3'>Seo</li>
                    <li className='py-1 md:py-3'>Marketing</li>
                    <li className='py-1 md:py-3'>Branding</li></ul></div>
            <div className='w-100 md:w-1/3 px-5'>
            <h1 className='uppercase my-5 mt-4 md:mt-0 md:my-5 font-semibold'>Connect </h1>
            <div className="flex">
                <Image src={linkedin} alt="linkedin" />
                <Image src={twitter} alt="twitter icon" className='mx-4' />
            </div>
            </div>
          </div>
        </div>
    )
}

export default footer