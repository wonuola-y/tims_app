import React from "react";
import Image from "next/image";
import tim from "@/app/assets/tim.jpg"
import MainBody from './components/main_body';
import Nav from './components/Nav'
import Services from "./components/Services";
import AboutMe from './components/about_me';
import Banner from './components/banner'
import Footer from './components/footer'
import Pintrest from './assets/pintrest.png';
import Instagram from './assets/instagram.png';
import Facebook from './assets/facebook.png';
import YouTube from './assets/youtube.png';
import SnapChat from './assets/snapchat.png';
const PersonalBrand: React.FC = () => {
  return (
    <div className=" bg-[#fdfffc]">
      <div className="">
        <Nav />
        <div className=" w-100 md:p-20 h-screen ">
          <div className="w-100 flex flex-col md:flex-row  justify-between items-center">
            <div className="flex flex-col justify-center my-7 md:0 w-4/6 md:w-2/4  ">
              <h1 className="text-xl text-black md:text-3xl text-center md:text-left md:leading-normal tracking-wide mt-4 uppercase pt-5 md:py-0">Personalized
                Social Media Strategies Tailored for Your Success</h1>
              <p className="border-none border-b-black border-[1px] w-1/3 md:py-3"  ></p>
              <p className="text-gray-600 mt-5 text-center md:text-left">Write an attention-grabbing statement or simple phase about your business here</p>
              <button className="bg-[#1a1a18] text-white  py-3 my-5 md:w-2/6">
                Learn more
              </button>
            </div>
            <div>
              <Image
                src={tim}
                alt="Profile"
                className="w-96 mx-auto rounded-xl  shadow-2xl"
              />
            </div>
           
          </div>
         <div  className="hidden md:block w-full overflow-hidden py-4 ">
         <div className="whitespace-nowrap flex gap-10 my-20 mt-30 items-center w-100 h-1/6 animate-marquee overflow-hidden ">
             <div className="flex w-full  justify-between"> 
              <Image src={Instagram} alt="social icons"  className="w-16 mx-4 "/>
              <Image src={Pintrest} alt="social icons" className="w-16 mx-4 "/>
              <Image src={YouTube} alt="social icons" className="w-16 mx-4 "/>
              <Image src={Facebook} alt="social icons" className="w-16 mx-4 "/>
              <Image src={SnapChat} alt="social icons" className="w-16 mx-4 "/>
             
              </div>
             
            </div>
         </div>
        </div>
        <MainBody />
        <Services />
        <AboutMe />
        <Banner/>
        <Footer/>
      </div>

    </div>
  );
};

export default PersonalBrand;
