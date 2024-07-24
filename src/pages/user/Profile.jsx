import React, { useState } from "react";
import { Link } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { styles } from "../../styles";
import { listData, userData } from "../../contants/Dummy";
import { PostCard } from "../../components/post";
import { Chat, ChatBox } from "../../components/chat";

const Profile = () => {
    const { visible } = useSelector((state) => state.chatbox, shallowEqual);
  return (
    <div className={` ${styles.paddingX} h-full w-full   `}>
      <div className="container flex flex-col md:flex-row mx-auto justify-between gap-10">
        <div className=" w-full md:w-1/2  flex flex-col justify-center ">
          <div className=" p-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl  text-black">User Information</h1>
              <Link to="/profile/update">
                <button className="bg-sky-700 text-white px-4 py-2 rounded">
                  Update Profile
                </button>
              </Link>
            </div>
            <div className="flex flex-row items-center gap-4 ">
              <img
                src={userData.img}
                alt=""
                className="w-28 h-28 rounded-full"
              />

              <div className="flex flex-col">
                <p className="text-black">{userData.name}</p>
                <p className="text-black">john@doe.com</p>
              </div>
            </div>
          </div>
          <div className=" p-4">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl  text-black">My Posts</h1>
              <Link to="/profile/update">
                <button className="bg-sky-700 text-white px-4 py-2 rounded">
                  Add POst
                </button>
              </Link>
            </div>
            <div className=" pr-2 flex flex-row flex-wrap gap-6">
              {listData.map((item) => (
                <PostCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
        <div className=" w-full md:w-1/2  flex flex-col  ">
          <Chat />
          {visible && <ChatBox />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
