import React , { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector , useDispatch , shallowEqual } from "react-redux";
import { styles } from "../../styles";

const Login = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div className={` ${styles.paddingX} h-full w-full   `}>
      <div className="container flex flex-col md:flex-row mx-auto justify-between md: gap-10">
        <div className=" w-full md:w-2/3  flex flex-col justify-center px-6 md:px-32 ">
          <h2 className="text-xl md:text-3xl mb-6 text-center text-black">
            Sign in or create an account
          </h2>
          <p className="text-zinc-700 text-center mb-6">
            Welcome back ! Please enter your details
          </p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-sky-700 text-white py-2 px-4 rounded-md hover:bg-zinc-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
              >
                Login
              </button>
            </div>
          </form>
        
            <p className="text-zinc-700 mt-4 text-center">
              {"Don't have an account? "}
            </p>
          
          <div className="mt-4 text-center">
            <Link to={"/register"} className="text-white bg-zinc-900 hover:text-white hover:bg-sky-700 px-6 py-3 rounded-md">
              Register
            </Link>
          </div>
        </div>

        <div className=" h-5/6 w-full mt-4 md:mt-0 md:w-1/2 ">
          <img
            className="object-cover w-full"
            src="https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
