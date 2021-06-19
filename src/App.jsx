import React from 'react';
import Navbar from './componet/Navbar/Navbar';
import Sidebar from './componet/Sidebar/Sidebar';
import Chat from './componet/Chat/Chat';
import "./App.css";

const App = () => {

    return(
        <div className="app">
        
        <Navbar />
        <div className="app__body">
        <Sidebar />
        <Chat />      
        </div>
        </div>
    )
}

export default App;
