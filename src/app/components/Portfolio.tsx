import Image from "next/image";
import React from "react";

const Portolio = () => {
  return (
    <div
      className=" flex items-center max-w-7xl mx-auto leading-8 mb-10"
      id="portfolio"
    >
      <div className="text-gray-500 px-10 mt-32 mx-auto">
        <h1 className="text-center text-4xl text-white mb-10">Professional Projects</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-24 mx-auto w-full  ">
          {/* card 1 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img
                src="https://www.gulfhr.com/img/background-mobile-01.jpg"
             //   src={"images/portfolio/6.avif"}
                className="w-60 h-40 rounded-t-md"
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}

          {/* card 2 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img
                src="https://www.itacksolutions.com/wp-content/uploads/2011/08/LABORATUAR-BANNER-2-150x150.jpg"
                className="w-60 h-40 rounded-t-md "
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}

          {/* card 3 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img
                src="https://www.itacksolutions.com/wp-content/uploads/2011/08/google-clinic-150x150.jpg"
                className="w-60 h-40 rounded-t-md"
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}

          {/* card 4 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img
                src="https://media.licdn.com/dms/image/C4E12AQFZTrjnkiUL9w/article-cover_image-shrink_423_752/0/1637197392847?e=1686182400&v=beta&t=HZ7EtfZghDNnWD3E6XVzOvAwzxwAsxcZT1Nl2Ns28Nk"
                className="w-60 h-40 rounded-t-md"
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}

          {/* card 5 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img
                src="https://www.sourcecodester.com/sites/default/files/images/muskaan.sahu.3/3.png"
                className="w-60 h-40 rounded-t-md"
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}
          {/* card 6 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img
                src={"images/portfolio/5.jpeg"}
                className="w-60 h-40 rounded-t-md"
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}
        </div>
      </div>
    </div>
  );
};
export default Portolio;