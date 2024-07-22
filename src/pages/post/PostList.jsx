import React, { Suspense } from "react";
import { styles } from "../../styles";
import { Filter } from "../../components/search";
import { listData } from "../../contants/Dummy";
import { PostCard } from "../../components/post";
import { Map } from "../../components/map";
function PostList() {
  return (
    <div className={` ${styles.paddingX} h-full w-full`}>
      <div className="container flex flex-col md:flex-row mx-auto justify-between">
       
        <div className=" w-full   flex flex-col justify-center ">
          <Suspense fallback={<div>Loading...</div>}>
            <h1 className="text-xl text-black font-semibold">Posts</h1>
          </Suspense>
          <Filter />
          <div className=" pr-2 flex flex-row flex-wrap gap-6">
            {listData.map((item) => (
            <PostCard key={item.id} item={item} />
          ))}
          </div>
          
        </div>
       
        <Map data={listData} />
        
      </div>
      
    </div>
  );
}

export default PostList;
