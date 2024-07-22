import React, { Suspense } from "react";
import { styles } from "../../styles";
import { Filter } from "../../components/search";
import { listData } from "../../contants/Dummy";
import { PostCard } from "../../components/post";
function PostList() {
  return (
    <div className={` ${styles.paddingX} h-full w-full`}>
      <div className="container flex flex-col md:flex-row mx-auto justify-between">
       
        <div className=" w-full md:pr-4  flex flex-col justify-center ">
          <Suspense fallback={<div>Loading...</div>}>
            <h1 className="text-xl text-black font-semibold">Posts</h1>
          </Suspense>
          <Filter />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {listData.map((item) => (
            <PostCard key={item.id} item={item} />
          ))}
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

export default PostList;
