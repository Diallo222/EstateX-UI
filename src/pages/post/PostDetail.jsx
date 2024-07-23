import { useLoaderData } from "react-router-dom";
import { IoMdPin } from "react-icons/io";
import { FaTools, FaPaw, FaMoneyBillAlt, FaRuler, FaBed, FaBath, FaSchool, FaBus, FaUtensils, FaComments } from 'react-icons/fa';
import { Map } from "../../components/map";
import { singlePostData, userData } from "../../contants/Dummy";
import { styles } from "../../styles";
import { Slider } from "../../components/post";

const iconsStyle = { fontSize: "20px", color: "black" };

const PostDetail = () => {
  // const post = useLoaderData();

  return (
    <div className={` ${styles.paddingX} h-full w-full   `}>
      <div className="container flex flex-col md:flex-row mx-auto justify-between md:gap-10">
      <div className="w-full lg:w-2/3 flex flex-col justify-center p-4">
      <Slider images={singlePostData.images} />
      <div className="mt-4 md:mt-10 flex flex-col">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="flex flex-col gap-2 md:gap-4">
            <h1 className="text-xl text-black font-semibold">
              {singlePostData.title}
            </h1>
            <p className="text-zinc-800 text-lg md:text-xl flex items-center my-2">
              <IoMdPin style={iconsStyle} />
              <span>{singlePostData.address}</span>
            </p>
            <p className="text-lg md:text-xl text-sky-700 font-medium">
              $ {singlePostData.price}
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4 mt-4 md:mt-0">
            <img
              src={userData.img}
              className="rounded-full h-32 w-32 object-cover"
              alt=""
            />
            <p className="text-zinc-900 text-center md:text-left">{userData.name}</p>
          </div>
        </div>
        <p className="text-zinc-700 mt-2 md:mt-4">
          {singlePostData.description}
        </p>
      </div>
    </div>
        <div className=" w-full lg:w-1/3 flex flex-col justify-center bg-white rounded-xl">
        <div className="features">
      <div className="wrapper p-4">
        <p className="title text-xl text-black font-bold mb-4">General</p>
        <div className="listVertical space-y-4">
          <div className="feature flex items-center">
            <FaTools className="w-6 h-6 mr-2 text-black" />
            <div className="featureText">
              <span className="font-semibold text-black">Utilities</span>
              <p className="text-black">Owner is responsible</p>
            </div>
          </div>
          <div className="feature flex items-center">
            <FaPaw className="w-6 h-6 mr-2 text-black" />
            <div className="featureText">
              <span className="font-semibold text-black">Pet Policy</span>
              <p className="text-black">Pets Allowed</p>
            </div>
          </div>
          <div className="feature flex items-center">
            <FaMoneyBillAlt className="w-6 h-6 mr-2 text-black" />
            <div className="featureText">
              <span className="font-semibold text-black">Income Policy</span>
              <p className="text-black">Free</p>
            </div>
          </div>
        </div>
        <p className="title text-xl text-black font-bold mt-4 mb-4">Sizes</p>
        <div className="sizes flex space-x-4">
          <div className="size flex items-center">
            <FaRuler className="w-6 h-6 mr-2 text-black" />
            <span className="text-black">70 sqft</span>
          </div>
          <div className="size flex items-center">
            <FaBed className="w-6 h-6 mr-2 text-black" />
            <span className="text-black">2 beds</span>
          </div>
          <div className="size flex items-center">
            <FaBath className="w-6 h-6 mr-2 text-black" />
            <span className="text-black">1 bathroom</span>
          </div>
        </div>
        <p className="title text-xl text-black font-bold mt-4 mb-4">Nearby Places</p>
        <div className="flex flex-wrap space-x-4">
          <div className="feature flex items-center">
            <FaSchool className="w-6 h-6 mr-2 text-black" />
            <div className="featureText">
              <span className="font-semibold text-black">School</span>
              <p className="text-black">200m away</p>
            </div>
          </div>
          <div className="feature flex items-center">
            <FaBus className="w-6 h-6 mr-2 text-black" />
            <div className="featureText">
              <span className="font-semibold text-black">Bus Stop</span>
              <p className="text-black">60m away</p>
            </div>
          </div>
          <div className="feature flex items-center">
            <FaUtensils className="w-6 h-6 mr-2 text-black" />
            <div className="featureText">
              <span className="font-semibold text-black">Restaurant</span>
              <p className="text-black">50m away</p>
            </div>
          </div>
        </div>
        <div className="buttons mt-2 flex space-x-4">
          <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded">
            <FaComments className="w-4 h-4 mr-2" />
            Send a Message
          </button>
          {/* <button
            onClick={handleSave}
            className={`flex items-center px-4 py-2 rounded ${
              saved ? "bg-yellow-500 text-white" : "bg-white text-black border"
            }`}
          >
            <FaSave className="w-4 h-4 mr-2" />
            {saved ? "Place Saved" : "Save the Place"}
          </button> */}
        </div>
      </div>
    </div>
    <p className="title text-xl px-4  text-black font-bold my-1">Location</p>
          <div className="w-full px-4  h-[250px] mt-2">
            <Map data={[singlePostData]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
