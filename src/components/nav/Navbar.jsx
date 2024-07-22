import React , { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles";

const Navbar = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <nav  className={`${styles.paddingX} w-full flex items-center`}>
      <div className="container mx-auto ">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <p className="text-xl font-medium text-black">ESTATEX</p>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-black hover:text-sky-700">
              Home
            </a>
            <a href="#" className="text-black hover:text-sky-700">
              About
            </a>
            <a href="#" className="text-black hover:text-sky-700">
              Constact
            </a>
            <a href="#" className="text-black hover:text-sky-700">
              Services
            </a>
          </div>

          <div className="hidden md:flex space-x-4">
            <button className="text-black hover:text-sky-700 bg-transparent rounded-md ">Login</button>
            <button className="text-white hover:text-black bg-sky-700 rounded-md ">Sign Up</button>
          </div>

          <button className="block md:hidden"
            onClick={() => setVisible(!visible)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className={` ${visible ? "block" : "hidden"} p-6 black-gradient bg-zinc-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <div className="space-y-4">
            <a href="#" className="block text-white hover:text-sky-700">
              Home
            </a>
            <a href="#" className="block text-white hover:text-sky-700">
              Rent
            </a>
            <a href="#" className="block text-white hover:text-sky-700">
              About
            </a>
            <a href="#" className="block text-white hover:text-sky-700">
              Contact
            </a>
            <div className="flex space-x-4 justify-center">
                 <button className="block text-white hover:text-sky-700">Login</button>
                 <button className=" block text-white hover:text-black bg-sky-700 rounded-md ">Sign Up</button>
            </div>
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;