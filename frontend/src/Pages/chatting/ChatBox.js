import React, { useState, useEffect, useRef } from 'react';
import { Avatar, Box, FormControl, Input, Spinner, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import ChatLoading from './ChatLoading';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Navbarp from '../patPages/Navbarp';
import Navbard from '../dctrPages/Navbard';

import { Tooltip } from "@chakra-ui/tooltip";
import ScrollableFeed from "react-scrollable-feed"
// import { response } from 'express';
import io from "socket.io-client";

const ENDPOINT = "http://localhost:5000";
var socket  = io.connect(ENDPOINT);
var selectedChatCompare;

const ChatBox = () => {

  const location = useLocation();
  const { loggedUser } = location.state;
  // console.log(loggedUser);
 
  const [messages, setMessages] = useState([]);
  const[sendmessages , setSendmessages] = useState([]);

  var newMessages
  
  const[loading ,setLoading] = useState(false);
  const[chatId,setChatId] = useState();
 
  const [showFirst, setShowFirst] = useState(true);
  const [data ,setData] =useState();
  const [newmsg ,setNewmsg] = useState();
  const [psValue,setPsValue] = useState("enter your message");
  const [socketConnected, setSocketConnected] = useState(false);
 let selectedChat;
  let chatId1 =  JSON.parse(localStorage.getItem("chatId"));
  // console.log("this is chatid from chatbox",chatId1)
  let sender = localStorage.getItem("sender");

  

  // console.log(sender);
  let user;
  if(sender === "doctor"){
   user = JSON.parse(localStorage.getItem("dctrInfo"));
  }
  else{
   user = JSON.parse(localStorage.getItem("userInfo"));
  }


  // console.log(user);     
  useEffect(() => {
      fetchMessages(chatId1);         
    const timer = setTimeout(() => {
      setShowFirst(false); 
    }, 1000);

   

    return () => clearTimeout(timer);
  }, []);

 


  useEffect (()=>{
    
      socket.on("receive_msg" , (data) =>{

        const chatId  = data.chatId;
        const sender = data.sender;
        const content = data.content;
        
       
      // fetchMessages(chatId);
      setMessages(messages => [...messages, content]);
      setSendmessages(sendmessages =>[...sendmessages , sender] );
      // console.log(data);
      // console.log(messages);
      // console.log("this is msg",messages)
      })
  },[socket])


     const sendMessage = async()=>{
      // console.log(sender);
    
      const content = newmsg;
      let chatId = chatId1;
      console.log("this is new msg" ,content);
      console.log("thisis chatid",chatId);

      socket.emit("send_message" , {content : content , chatId : chatId ,sender : sender});

      try{
           
        const message = await axios.post(`/api/messages/chatId/send`, {chatId,sender,content});
        // const data = await messages
        // console.log(message);
   
     }catch(eror){
        console.log(eror);
     }
    
     setNewmsg('');


     setPsValue('enter the new msg');
     
     }

    
    const fetchMessages = async (chatId) => {
      try {
        console.log("this chat id from fetchmwsage",chatId);
        const response = await axios.post('/api/messages/chatId/fetch' ,{chatId},); // Replace with your API endpoint
        // console.log(response.data);
       const  newMessages = response.data.map(data => data.content );
          // console.log(newMessages);
          setMessages(messages => [...messages, ...newMessages]);
        //  console.log(messages);
         const  newsMessages = response.data.map(data => data.sender );  
          // console.log(newsMessages);
          setSendmessages(sendmessages => [...sendmessages, ...newsMessages]);
        
        // console.log(response.data); // Update state with fetched messages
        // setReversedEntries(Array.from(response.data.entries()).reverse());
      
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        sendMessage();
        // fetchMessages();
        setPsValue('enter the new msg');
      }
    };
   


 

 

  return (

    <>
     {sender === "patient" ? ( 
      <Box>
      <Navbarp/>
      <Box width={"100%"} borderBottomWidth={"8px"} ></Box>
      <Box bgColor="white" p={4} w="100%" h="90vh" overflowY="auto " sx={{  // Customize scrollbar appearance
        "&::-webkit-scrollbar": {
          width: "0px" 
}}} borderRadius={"10px"} alignItems={"center"} justifyContent={"center"}  >
      
      <Text fontWeight="bold" mb={2} textAlign={"center"} fontFamily={"Work sans"} borderBottomWidth={"2px"} fontSize={"30px"}>{loggedUser.nameD}</Text>
      <VStack align="flex-start" spacing={10}>
       

        {loading ?(
          <Box height={"90vh"} width={"100%"} display={"flex"} alignItems={"center"}  bgColor={"red"} flexDirection={"column"}>
              <Spinner
                size={"xl"}
                w={20}
                h={20}
                alignSelf={"center"}
                margin={"auto"}
              />

              <Text fontFamily={"Work sans"} fontSize={"30px"}> click on chat to start chat</Text>

               </Box>

           
            ):(
              <Box height={"80vh"} width={"100%"} display={"flex"} flexDirection={"column"}>
      <Box overflowY={"auto"} sx={{  // Customize scrollbar appearance
        "&::-webkit-scrollbar": {
          width: "0px"  // Hide the scrollbar
        }
      }}flex={"1"} display={"flex"}  flexDirection={"column"} bgColor={'lightblue'}  >{/* Make the message container scrollable */}
        {messages.map((message ,i) => (
           
          sendmessages[i] === "doctor" ? (
            
           <Box display={"flex"} flexDirection={"row"} >
           
            <Text marginBottom={"8px"} fontFamily={"Work sans"} fontSize={"20px"} color={"red"} marginRight={"10px"} textAlign={"left"} > <span style={{ borderRadius:"10px" , margin:"10px" ,color:"lightyellow", fontFamily :"Work sans",fontWeight:"700" }}>
    {message}
  </span>
  </Text>
  </Box>
           
           ) :(
          <Text  marginBottom={"8px"} fontFamily={"Work sans"} fontSize={"20px"} marginRight={"10px"} textAlign={"right"} > <span style={{borderRadius:"10px", margin:"10px",fontFamily :"Work sans",fontSize:"20px",fontWeight:"700"}}>
    {message}
  </span>
 </Text>)
        ))}
      </Box>
      <FormControl isRequired mt={3}>
        <Input
          variant={"solid"}
          bg={"#E0E0E0"}
          placeholder={`${psValue}`}
          // onChange={typingHandler}
          // value={newmsg}

          onChange={(e)=>setNewmsg(e.target.value)}
          onKeyDown={handleKeyDown} 

        />
      </FormControl>
    </Box>
            )}
      </VStack>

    </Box>

    </Box>
      
      
      ):(

    (showFirst ? (
      <ChatLoading />
          
    ) : (
      <>
      <Box>
       <Navbard/>
       <Box width={"100%"} borderBottomWidth={"8px"} ></Box> 
      <Box bg="white" p={4} w="100%" h="90vh" overflowY="auto " sx={{  // Customize scrollbar appearance
        "&::-webkit-scrollbar": {
          width: "0px"  // Hide the scrollbar
        }
      }} borderRadius={"10px"} alignItems={"center"} justifyContent={"center"}  bgColor={'lightblue'} >
      <Text borderBottomWidth={"2px"} fontWeight="bold" mb={2} textAlign={"center"} fontSize={"30px"}>{loggedUser.nameP}</Text>
      <VStack align="flex-start" spacing={2}>
       

        {loading ?(
          <Box height={"90vh"} width={"100%"} display={"flex"} alignItems={"center"}  bgColor={"red"} flexDirection={"column"}>
              <Spinner
                size={"xl"}
                w={20}
                h={20}
                alignSelf={"center"}
                margin={"auto"}
              />

              <Text fontFamily={"Work sans"} fontSize={"30px"}> click on chat to start chat</Text>

               </Box>

            ):(
              <Box height={"80vh"} width={"100%"} display={"flex"}   flexDirection={"column"}>
      <Box overflowY={"auto"}height={"90vh"}  flex={"1"} display={"flex"}  flexDirection={"column"} >{/* Make the message container scrollable */}
        {messages.map((message,i) => (
          sendmessages[i] === "doctor" ? (
            <Box>
           
             <Text  marginBottom={"8px"}  fontFamily={"Work sans"} fontSize={"20px"} marginRight={"10px"} textAlign={"right"} ><span style={{borderRadius:"10px" ,margin:"10px", fontFamily:"Work sans", fontWeight:"700" }}>
    {message}
  </span>
 </Text>
  </Box>
          ) :(
            <Box display={"flex"} flexDirection={"row"}  >
             <Text marginBottom={"8px"} fontFamily={"Work sans"} fontSize={"20px"} marginRight={"10px"} textAlign={"left"} > <span style={{borderRadius:"10px" ,margin:"10px" ,fontFamily:"Work sans", fontWeight:"700",color:"lightyellow"}}>
    {message}
  </span> 
 </Text>
  </Box>)
        ))}
      </Box>
      <FormControl isRequired mt={3}>
        <Input
          variant={"solid"}
          bg={"#E0E0E0"}
          placeholder={`${psValue}`}
          // onChange={typingHandler}
          value={newmsg}

          onChange={(e)=>setNewmsg(e.target.value)}
          onKeyDown={handleKeyDown} 

        />
      </FormControl>
    </Box>
            )}
      </VStack>

    </Box>
    </Box>
        
      </>
    ))
    )
    }
    

        

    
  </>
  );
};

export default ChatBox;

