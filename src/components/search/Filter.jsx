import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    bedroom: searchParams.get("bedroom") || "",
  });

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    setSearchParams(query);
  };

  return (
    <div className="w-full bg-transparent mt-4 md:mt-10">
      <h2 className="text-black text-xl">
        Search results for <b>{searchParams.get("city")}</b>
      </h2>
      <div className="flex flex-col">
        <label className="text-black" htmlFor="city">
          Location
        </label>
        <input
          type="text"
          id="city"
          name="city"
          className="bg-white text-black py-2 border-transparent focus:border-sky-700 focus:ring-sky-700 w-3/4 rounded-xl mt-1"
          placeholder="City Location"
          onChange={handleChange}
          defaultValue={query.city}
        />
      </div>
      <div className="flex flex-row flex-wrap mt-4 gap-4">
        <div className="flex flex-col">
          <label className="text-black" htmlFor="type">
            Type
          </label>
          <select
            className="rounded-xl mt-1 text-black"
            name="type"
            id="type"
            onChange={handleChange}
            defaultValue={query.type}
          >
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-black" htmlFor="property">
            Property
          </label>
          <select
            className="rounded-xl mt-1 text-black"
            name="property"
            id="property"
            onChange={handleChange}
            defaultValue={query.property}
          >
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-black" htmlFor="minPrice">
            Min Price
          </label>
          <input
            className="rounded-xl mt-1 text-black"
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.minPrice}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-black" htmlFor="maxPrice">
            Max Price
          </label>
          <input
            className="rounded-xl mt-1 text-black"
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.maxPrice}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-black" htmlFor="bedroom">
            Bedroom
          </label>
          <input
            className="rounded-xl mt-1 text-black"
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.bedroom}
          />
        </div>
        <button
          onClick={handleFilter}
          className=" block text-white hover:text-black bg-sky-700 rounded-xl w-40 "
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Filter;
