import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setChatBoxVisible } from "../../store/chatbox/chatboxSlice";
import Message from "./Message";
import { discussionData } from "../../contants/Dummy";
const ChatBox = ({ chats, onSendMessage }) => {
  const { visible } = useSelector((state) => state.chatbox, shallowEqual);
  const dispatch = useDispatch();
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newChat = {
        id: discussionData.length,
        senderName: "John Doe",
        senderAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
        message: newMessage,
        messageTime: new Date().toLocaleString(),
      };
      // onSendMessage(newChat);
      setNewMessage("");
    }
  };

  const toggleChatBoxVisibility = () => {
    dispatch(setChatBoxVisible(!visible));
  };

  return (
    <div className="flex flex-col shadow-md  p-4 space-y-4 w-full bg-white rounded-xl h-[500px] mt-9 ">
      <div className="flex justify-between items-center">
        <h1 className="text-xl text-black font-semibold">Discussion</h1>
        <button
          onClick={toggleChatBoxVisibility}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          {visible ? "Hide Chat" : "Show Chat"}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto ">
        {discussionData.map((chat) => (
          <Message key={chat.id} message={chat} />
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
