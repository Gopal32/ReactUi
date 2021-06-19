import React from "react";

import SidebarChat from "../SidebarChat/SidebarChat";
import SidebarChats from "../SidebarChat/SidebarChats";

import "./Sidebar.css";

function Sidebar() {
  
  return (
    <div className="sidebar">

      <div className="sidebar__chats">
        <SidebarChats />
        <SidebarChat />
        <SidebarChats  />
        <SidebarChats  />
        <SidebarChats  />
        <SidebarChats />
      </div>
    </div>
  );
}

export default Sidebar;
