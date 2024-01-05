import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ChatContext = createContext();

//Duel state variables to assign User, chatroom, notification and specific message
const ChatHandler = ({children})=>{
    const history = useHistory();
    const [selectedChat, setSelectedChat] = useState();
    const [user, setUser] = useState();
    const [notification, setNotification] = useState([]);
    const [chats, setChats] = useState();
   //get userid from local storage and assign to message
    useEffect(() =>{
        const userId = JSON.parse(localStorage.getItem("userId"));
        setUser(userId);

        if(!userId){history.push('/');}

    },[history]);
// put information into context
    return (
        <ChatContext.Provider
        value={{selectedChat, user, notification, chats,
             setSelectedChat, useState, setNotification, setChats}
        }
        >
            {children}
        </ChatContext.Provider>
    );
};
//export
export const ChatStates = () => {
    return useContext(ChatContext);
};

export default ChatHandler;
