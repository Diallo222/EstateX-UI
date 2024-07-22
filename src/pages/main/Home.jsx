import React from "react";
import { styles } from "../../styles";
import { SearchBar } from "../../components/search";
function Home() {
  return (
    <div
      className={` ${styles.paddingX} h-full w-full   `}
    >
      <div className="container flex flex-col md:flex-row mx-auto justify-between">
        <div className=" w-full md:w-1/2  flex flex-col justify-center ">
          <h1 className="text-6xl text-black font-semibold">
           Welcome to EstateX - Find Real Estate & Get Your Dream Place
          </h1>
          <p className="text-zinc-700 mt-4 md:mt-10 ">
          Discover your dream home with [Your Company Name], where we turn your property aspirations into reality. Our comprehensive platform offers a seamless experience for buying, selling, and renting properties, catering to diverse needs and preferences.
          </p>
         <SearchBar /> 
         <div className="text-zinc-700 flex space-x-10 mt-4 md:mt-10 ">
            <div className="text-xs md:text-lg text-black flex flex-col justify-center items-center">
              <h1>+10</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="text-xs md:text-lg text-black flex flex-col justify-center items-center">
              <h1>100</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="text-xs md:text-lg text-black flex flex-col justify-center items-center">
              <h1>+1000</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
        <div className=" h-5/6 w-full mt-4 md:mt-0 md:w-1/3 bg-zinc-700 ">
          <img
            className="object-cover w-full"
            src="https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>
      
     
    </div>
  );
}

export default Home;
