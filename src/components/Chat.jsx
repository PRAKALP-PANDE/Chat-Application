import React from 'react';
import Cam from "../img/cam.png";
import Add from "../img/Add.png";
import More from "../img/More.png";
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Prakalp</span>
        <div className="chatIcon">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat