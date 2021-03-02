import React from "react";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Ellen"
        message="Yo whats up!"
        timestamp="35 minutes ago"
        profilePic="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed560d07fe4060006bbce1e%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D422%26cropX2%3D1300%26cropY1%3D0%26cropY2%3D879"
      />
      <Chat
        name="Sandra"
        message="Ola!"
        timestamp="55 minutes ago"
        profilePic=""
      />
      <Chat
        name="Sarah"
        message="Hey! how are you ?? :)"
        timestamp="1 week ago"
        profilePic=""
      />
    </div>
  );
}

export default Chats;
