import { Avatar, Box, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Mychats = (chat) => {
    const toast = useToast(); // Call useToast within the functional component
    const history =useHistory();
    const [loggedUser, setLoggedUser] = useState([]);
    const [messages, setMessages] = useState([]);
    let data1;
    const[chaton ,setChaton] = useState(false);

    let sender = localStorage.getItem("sender");


    const ChatsDetails = async () => {
      
        // const [loading, setLoading] = useState(false);
        
        // console.log(patientId);
        const patientId1 = chat.patientId.patientId;
        // console.log(chat.patientId);
        // console.log(chat.patientId._id);
        
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            // console.log(patientId.patientId);
            const { data } = await axios.post(
                "/api/med/id",
                { patientId1},
                config
            );
            //  console.log(data);
            
                setLoggedUser(data);
                data1 = data;
            
            toast({
                title: "Retrieve successful",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            // setLoading(false);
            //   history.push("/");
            // console.log(data1.nameP);
        } catch (error) {
            toast({
                title: "Error occurred",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            // setLoading(false);
            
        }
    };

    

   const handleChat = async()=>{
    
    let content = "";
    let chatId = chat.patientId._id;
    console.log(chatId);
    localStorage.setItem("chaton","true");
    localStorage.setItem("chatId", JSON.stringify(chatId));
    history.push("/ChatBox" ,sender = {sender});

    // console.log(chatId);
     try{
         
        const messages = await axios.post(`/api/messages/chatId/send`, {chatId,sender,content});
        // const data = await messages
        console.log(messages);
      
        // history.push("/ChatBox");
         
        
     }catch(eror){
        console.log(eror);
     }
     
        
   }

    useEffect(() => {
        // Fetch chats for the current user
        ChatsDetails();
    }, []);

    // console.log(loggedUser.nameP);

    return (
        <>
            
            <Box
      
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      w="200%"
      d="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
      onClick={handleChat}
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name= {loggedUser.nameP}
        src={loggedUser.pic}
      />
      <Box>
        <Text>{loggedUser.nameP}</Text>
        <Text fontSize="xs">
          <b>Email : </b>
          {loggedUser.emailP}
        </Text>
      </Box>
    </Box>
        </>
    );
};

export default Mychats;
