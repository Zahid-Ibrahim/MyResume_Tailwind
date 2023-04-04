import Image from "next/image";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const HomeHero = () => {
  return (
    <section className=" max-w-4xl mx-auto flex md:flex-row flex-col mt-16 ">
      {/* left start here */}

        

      <div className="p-5 max-w-lg  ">
        <h1>I am a ASP.NET Developer</h1>
        <p>
        Throughout my Academic years and Professional Experience, I have been doing projects that involved extensive analytical and quantitative skills.
 Most of the projects I worked on are related to Web Application. Currently I’m working as a Web Developer in Agar International Pvt Limited. My specialities includes developing ASP.net Application using MVC Architecture. 
Currently enrolled in Web 3.0 and Artificial Intelligence course. I would welcome the opportunity to discuss my qualifications with you, and will be looking forward to a positive response from you. 

        </p>

        {/* <button className="bg-gradient-to-b to-cyan-500 from-blue-500  py-2 px-4 rounded-lg">
          Profile-u
        </button>
        <button className="bg-gradient-to-b from-cyan-500 to-blue-500  py-2 px-4 rounded-lg">
          Profile-b
        </button> */}
        <button className="group flex  items-center bg-gradient-to-r from-cyan-500 to-blue-500  py-2 px-4 rounded-lg">
          Profile
          <MdOutlineKeyboardArrowRight
            size={20}
            className="group-hover:rotate-90 duration-500"
          />
        </button>
      </div>
      {/* left ends here */}
      {/* right */}
      <div className="flex justify-center w-full md:w-5/12">
        <div className="overflow-hidden h-72 max-w-[200px] lg:max-w-[400px]">
        {/* <a
          href=""
          className="inline-block p-2 px-6 bg-white border-2 border-gray-700 shadow-lg rounded-3xl hover:bg-gray-700"
        >
          Contact
        </a> */}
       
           <img 
            src="https://wallpapers.com/images/high/cool-profile-picture-l0hzjr9omwan07nt.webp"
            alt="Alex Smith"
               /> 
        </div>
      </div>
      {/* right ends */}
    </section>
  );
};
export default HomeHero;