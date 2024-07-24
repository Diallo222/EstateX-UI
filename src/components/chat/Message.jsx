import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { setChatBoxVisible } from "../../store/chatbox/chatboxSlice";
const Message = ({ message }) => {
  const { visible } = useSelector((state) => state.chatbox, shallowEqual);
  const dispatch = useDispatch();

  const handleClick = () => {
    !visible && dispatch(setChatBoxVisible(!visible));
  };
  return (
    <div
      onClick={handleClick}
      className="flex items-start space-x-4 p-4 border-b"
    >
      <img
        src={message.senderAvatar}
        alt={message.senderName}
        className="w-12 h-12 rounded-full"
      />
      <div className="flex flex-col space-y-1">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-black">{message.senderName}</span>
          <span className="text-xs text-gray-500">{message.messageTime}</span>
        </div>
        <p className="text-gray-500">{message.message}</p>
      </div>
    </div>
  );
};

export default Message;
