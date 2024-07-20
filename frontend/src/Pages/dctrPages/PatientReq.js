import { Box, Button, Flex, Image,  Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../patPages/Footer";


const PatientReq = ()=>{
    const toast =useToast();

    const[user,setUser] =useState();
    const[loading,setLoading] =useState();
    const[loadingChat ,setLoadingChat] = useState(false);

    const [chat,setChats] = useState();
    const userd = localStorage.getItem("dctrInfo");
    const userd1 = JSON.parse(userd);
    
    console.log(userd1);
     const email = userd1.email;
     const history  = useHistory();


    useEffect(() => {
        // Function to be called only once
        allPreq();
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      const allPreq = async()=>{
        try{
            const config = {
              header:{
                  "Content-type":"application/json",
              },
            };
            console.log(email);
            const {data} = await axios.post(
              "/api/med/req",
              {email},
               config
              ); 
            
              localStorage.setItem("MediInfo",JSON.stringify(data));
            //  console.log(data);
            setUser(data);
              setLoading(false);
              console.log(user);
             
       
           }
           catch(error){
              toast({
                  title:"network Issue",
                  status:"error",
                  duration:5000,
                  isClosable:true,
                  position:"bottom",
       
              });
              setLoading(false);
           }

      }


const Dropthis = async( patientId )=>{
  alert("all clear this dropped");
  

  try {
    const response = await axios.post('/api/Med/drop', {
      
      patientId,
      
      
    },);
    console.log(response);
  }
  catch(err){
       alert(err);
  }
}
const createNewChat = async (doctorId ,patientId ,userId) => {
//   const toast = useToast(); // Use the useToast hook to get the toast function

      if(!doctorId || !patientId || !userId){
        toast({
          title:" error occured",
          status:"pass",
          duration:5000,
          isClosable:true,
          position:"bottom",
    
      });
      return;
      } 
      alert("all clear")

  try {
    const response = await axios.post('/api/chats/access', {
      doctorId,
      patientId,
      userId,
    },);

     console.log("chat created");
    toast.success('Chat created', { autoClose: 5000 }); // Display success toast
    console.log(response);

    
    return response.data.chat; // Return the newly created chat object

  } catch (error) {
    console.log(error);
  }
};

      
       

    return (
        <>
           <Box   >

            <Flex flexWrap="wrap" justifyContent="space-between" position={"relative"}>
      {user &&
        user.map((item, index) => (
            <Box height={"40vh"} backdropFilter={"blur(6px)"}  width={"90%"} display={"flex"} flexDirection={"row"} key={index} margin={"5%"} marginBottom={"1%"} borderRadius={"20px"} borderWidth={"5px"}>
                  <Box width={"25%"} height={"100%"} borderRightWidth={"5px"} display={"flex" } flexDirection={"column"} alignItems={"center"}>
                  <Image marginTop={"8px"} borderRadius={"full"} boxSize={"150px"} src={item.pic}  />
                  <Text fontSize={"25px"} color={"white"}> name : {item.nameP} </Text>
                  <Text color={"white"}> phone Number : {item.phnumber}</Text>
                  <Text color={"white"}> Email : {item.emailP}</Text>
                  
                   </Box>
                  <Box width={"60%"} height={"100%"}  >
                  <Text marginLeft={"5%"} fontFamily={"work sans"} fontSize={"25px"} color={"white"}> Problem : {item.problem} </Text>
                  <Text marginLeft={"5%"} fontFamily={"work sans"} fontSize={"25px"} color={"white"}> Disease : {item.dctrtype}  </Text> 
                  <Text marginLeft={"5%"} fontFamily={"work sans"} fontSize={"25px"} color={"white"}> disease duration : {item.deciTime} </Text>
                  <Text marginLeft={"5%"} fontFamily={"work sans"} fontSize={"25px"} color={"white"}> severity : {item.serverity} </Text>
                  <Text marginLeft={"5%"} fontFamily={"work sans"} fontSize={"25px"} color={"white"}> Previous Doctor : {item.prevDctr} </Text></Box>
                  <Box width={"20%"} height={"100%"}  display={"flex"}  flexDirection ={"column" } justifyContent={"center"} alignItems={"center"}>
                  
                   <button className="btn"  onClick={()=>{
                    createNewChat(userd1._id,item._id,item.userId )}}> Connect</button>  
                    <button className="btn"  onClick={()=>{
                  Dropthis(item._id)}}> Drop</button> 
                  </Box>
                  
            </Box>
        ))}
    </Flex>

              
            
           </Box>
           
        </>
    )
}
export default PatientReq;
