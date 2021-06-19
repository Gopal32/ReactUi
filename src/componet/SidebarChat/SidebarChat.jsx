import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";

function SidebarChat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  
  return (

    <div className="sidebarChat">
    <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
    <div className="sidebarChat__info">
      <h2>Dr. Shilpa M
      <span className="sidebarchat__timestamp" style={{color:"#00b386"}} >3:25 pm</span>
      </h2>
      <p>
      Last message 
      <span className="sidebarchat__Circle" >3</span>
      </p>
    </div>
  </div>
  )
}

export default SidebarChat;