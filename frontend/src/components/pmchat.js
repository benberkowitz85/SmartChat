import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import "./styles.css";
import { IconButton, Spinner, useToast } from "@chakra-ui/react";
import { getSender, getSenderFull } from "../config/ChatLogics";
import { useEffect, useState } from "react";
import {ChatStates} from '../Context/chatHandler';
import Lottie from "react-lottie";





import io from "socket.io-client";
var socket, selectedChatCompare;
const ENDPOINT = "http://localhost:5000" //THIS CHANGES WHEN WE HOST THE SITE

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
    //establish duel state variables
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [newMessage, setNewMessage] = useState("");
    const [socketConnected, setSocketConnected] = useState(false);
    const [typing, setTyping] = useState(false);
    const [istyping, setIsTyping] = useState(false);
    const toast = useToast();

    const {selectedChat, setSelectedChat, user, notification, setNotification} = ChatStates();
        //Get messages, causes to fail if authentication fails, toggle loading display for use elsewhere, display errors
    const getMessages = async () =>{
        if(!selectedChat) return;
        try{
            const config ={
                headers:{
                    Authorization: `Bearer ${user.token}`,
                },
            };

            setLoading(true);

            const { data } = await axios.get(
                `api/message/${selectedChat._id}`,
                config
            );

            setMessages(data);
            setLoading(false);
            
            socket.emit("join chat", selectedChat._id);
        }catch (error) {
            toast({
                title: "Error!",
                description: "Failed to load messages",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "bottom",
            });
        }

        }
        //on enter key, authenticate user and send the contents of the message to (THIS NEEDS TO BE LINKED WITH BACKEND) 
        const sendMessage = async (event) =>{
            if  (event.key === "Enter" && newMessage){
                socket.emit("stop typing", selectedChat._id);
                try{
                    const config = {
                        headers: {
                            "Content-type": "application/json",
                            Authorization: `Bearer ${user.token}`,
                        },
                    };
                    setNewMessage("");
                    const { data } = await axios.post(
                        "/api/?",//FUTURE FILES RELEVENT
                        {
                            content: newMessage,
                            chatId: selectedChat,
                        },
                        config
                    );
                    socket.emit('new message', data);
                    setMessages([...messages, data]);
                }catch (error) {
                    toast({
                        title: "Error!",
                        description: "Failed to load messages",
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                        position: "bottom", 
                    });
                }
                }
            };
                //This needs a sanity check, I've double checked it against the reference and Socket docs but still don't trust me
            useEffect(() => {
                socket = io(ENDPOINT);
                socket.emit("setup", user);
                socket.on("connected", () => setSocketConnected(true));
                socket.on("typing", () => setIsTyping(true));
                socket.on("stop typing", () => setIsTyping(false));
            }, []);


            useEffect(() =>{
                getMessages();

                selectedChatCompare= selectedChat;
            }, [selectedChat]);
            //This SHOULD send notifications when a message is received
            useEffect(() =>{
                socket.on("message received", (newMessageRecieved) =>{
                    if(
                        !selectedChatCompare || selectedChatCompare._id !== newMessageRecieved.chat._id
                    ){
                        if(!notification.includes(newMessageRecieved)){
                            setNotification([newMessageRecieved, ...notification]);
                            setFetchAgain(!fetchAgain);
                        }
                    } else {
                        setMessages([...messages, newMessageRecieved]);
                    }
                });
            });
            const handleTyping = (e) =>{
                setNewMessage(e.target.value);
                //if not connected to socket end
                if (!socketConnected) return;
                //deal with typing states
                if(!typing){
                    setTyping(true);
                    socket.emit("typing", selectedChat._id);
                }
                //This is a big complicated mess to deal with "someone started typing, stopped but still hasn't sent"
                let lastTypingTime = new Date().getTime();
                var timer = 2000;
                setTimeout(() => {
                    var currentTime = new Date().getTime();
                    var timediff = currentTime - lastTypingTime;
                    if (timediff >= timer && typing){
                        socket.emit("stop typing", selectedChat._id);
                        setTyping(false);
                    }
                }, timer);
            };
            //Impliment all the above logic into a display
            return(
                <>
                {selectedChat ? (
                  <>
                    <Text
                    >
                      <IconButton

                        icon={<ArrowBackIcon />}
                        onClick={() => setSelectedChat("")}
                      />
                      {messages &&
                        (!selectedChat.isGroupChat ? (
                          <>
                            {getSender(user, selectedChat.users)}
                            <ProfileModal
                              user={getSenderFull(user, selectedChat.users)}
                            />
                          </>
                        ) : (
                          <>
                            {selectedChat.chatName.toUpperCase()}
                            <UpdateGroupChatModal
                              getMessages={getMessages}
                              fetchAgain={fetchAgain}
                              setFetchAgain={setFetchAgain}
                            />
                          </>
                        ))}
                    </Text>
                    <Box>
                      {loading ? (
                        <Spinner
                        />
                      ) : (
                        <div className="messages">
                          <ScrollableChat messages={messages} />
                        </div>
                      )}
          
                      <FormControl
                        onKeyDown={sendMessage}
                        id="first-name"
                        isRequired
                      >
                        {istyping ? (
                          <div>
                            <Lottie
                              options={defaultOptions}
                            />
                          </div>
                        ) : (
                          <></>
                        )}
                        <Input
                          placeholder="Enter a message.."
                          value={newMessage}
                          onChange={typingHandler}
                        />
                      </FormControl>
                    </Box>
                  </>
                ) : (

                  <Box>
                    <Text>
                      Click on a user to start chatting
                    </Text>
                  </Box>
                )}
              </>
            )};
