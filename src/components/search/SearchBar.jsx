import { useState } from "react";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="w-full bg-transparent mt-4 md:mt-10 ">
      <div className="">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={`
              ${
                query.type === type
                  ? "bg-black text-white"
                  : " bg-white text-black"
              }
              hover:border-black hover:text-neutral-700
                w-40 rounded-none first:rounded-ss-xl last:rounded-se-xl
            `}
          >
            {type === "buy" ? "Buying" : "Renting"}
          </button>
        ))}
      </div>
      <div className="flex flex-col md:flex-row bg-white py-4 rounded-b-xl">
        <div className=" p-2 border-r-zinc-200 w-full md:w-1/4 bg-white md:border-r-[0.5px]">
          <p className="text-black">Enter Your City</p>
          <input
            type="text"
            name="city"
            className="bg-white text-black py-2 border-transparent focus:border-sky-700 focus:ring-sky-700 w-full rounded-md"
            placeholder="City"
            onChange={handleChange}
          />
        </div>
        <div className=" p-2 border-r-zinc-200 w-full md:w-1/4 bg-white md:border-r-[0.5px]">
          <p className="text-black">Min Price</p>
          <input
            type="number"
            name="minPrice"
            min={0}
            max={10000000}
            className="bg-white text-black py-2 border-transparent focus:border-sky-700 focus:ring-sky-700 w-full rounded-md"
            placeholder="Min Price"
            onChange={handleChange}
          />
        </div>
        <div className=" p-2 border-r-zinc-200 w-full md:w-1/4 bg-white md:border-r-[0.5px]">
          <p className="text-black">Max Price</p>
          <input
            type="number"
            name="maxPrice"
            min={0}
            max={10000000}
            className="bg-white text-black py-2 border-transparent focus:border-sky-700 focus:ring-sky-700 w-full rounded-md"
            placeholder="Max Price"
            onChange={handleChange}
          />
        </div>
        <div className="p-2 w-full md:w-1/4 flex justify-center items-center">
          <Link
            to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
          >
            <button className=" block text-white hover:text-black bg-sky-700 rounded-xl w-40 ">
              Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
