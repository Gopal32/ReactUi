import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import {
  AttachFile,
  Send,
  VideocamOutlined,
  PhoneOutlined
} from "@material-ui/icons";
import "./Chat.css";

function Chat() {
  
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You type >>> ", input);
    setInput("");
  }
    
  return (
    <div className="chat">
    <div className="chat__header">
       <div className="chat__headerInfo">
    <h3>Dr. Rajesh M</h3>
    </div>
    <div className="chat__headerRight">
    <IconButton>
      <VideocamOutlined  style={{color:'#00b386'}} />
    </IconButton>
    <IconButton>
      <PhoneOutlined style={{color:'#00b386'}} />
    </IconButton>
    </div>
    </div>

    <div className="chat__body" >
      <p className='chat__message'>
       Hello
       <span className="chat__timestamp">3:25pm</span>
       </p>

      <p className={`chat__message ${true && 'chat__receiver'}` }>
       Hey Guys
       <span className="chat__timestamp">3:25 pm</span>
       </p>
    </div>

    <div className="chat__footer">

        <form>
          <input
            type="text"
            value={input}
            id="chatInput"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
          />
          <AttachFile style={{color:'#00b386', marginTop:'7px'}} />
          <button onClick={sendMessage}  type="submit">
            <Send style={{color:'#00b386', marginLeft: '5px'}} />
          </button>
        </form>
        
          
      </div>

    </div>

  );
}

export default Chat;