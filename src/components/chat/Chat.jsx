import React from "react";
import { chatData } from "../../contants/Dummy";
import Message from "./Message";
function Chat() {
  return (
    <div className="w-full bg-white rounded-xl px-5 m:px-10 pb-5">
      <h1 className="text-2xl  text-black my-5 md:my-8">Messages</h1>

      {chatData.slice(0, 5).map((item) => (
        <Message key={item.id} message={item} />
      ))}
    </div>
  );
}

export default Chat;
