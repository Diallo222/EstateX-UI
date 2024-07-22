import { Link } from "react-router-dom";
import { MdBedroomParent } from "react-icons/md";
import { IoMdPin, IoIosSave, IoMdChatboxes } from "react-icons/io";
import { MdBathroom } from "react-icons/md";

const iconsStyle = { fontSize: "20px", color: "black" };
const PostCard = ({ item }) => {
  return (
    <div className=" flex flex-col my-4 bg-white pt-3 pb-1  rounded-xl items-center">
      <Link to={`/${item.id}`}>
        <img
          className=" w-80 h-56 object-cover rounded-lg"
          src={item.images[0]}
          alt=""
        />
      </Link>
      <div className="flex flex-col justify-between w-full ">
       
          <Link
            className="text-black text-center font-medium text-lg px-4 hover:text-sky-700"
            to={`/${item.id}`}
          >
            {item.title}
          </Link>
      
        <p className=" text-zinc-800  text-lg md:text-xl flex my-2 items-center px-3">
          <IoMdPin style={iconsStyle} />
          <span>{item.address}</span>
        </p>
        <p className=" text-lg md:text-xl text-sky-700 px-4 font-medium  ">
          $ {item.price}
        </p>
       
          <div className="flex">
            <p className=" text-zinc-800  text-md md:text-lg flex my-2 items-center px-3">
              <MdBedroomParent style={iconsStyle} />
              <span>{item.bedroom} bedroom</span>
            </p>
            <p className=" text-zinc-800  text-md md:text-lg flex my-2 items-center px-3">
              <MdBathroom style={iconsStyle} />
              <span>{item.bathroom} bathroom</span>
            </p>
          </div>
          
     
        <div className="flex">
            <button className="bg-transparent text-white md:px-4 py-2 rounded-lg">
              <IoIosSave style={iconsStyle} />
            </button>

            <button className="bg-transparent text-white md:px-4 py-2 rounded-lg">
              <IoMdChatboxes style={iconsStyle} />
            </button>
          </div>
      </div>
    </div>
  );
};

export default PostCard;
