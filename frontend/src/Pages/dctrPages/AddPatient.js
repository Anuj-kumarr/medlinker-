import React, { useEffect, useState } from "react";
import Navbard from "./Navbard";
import { Box, Image, Text } from "@chakra-ui/react";
import PatientReq from "./PatientReq";

const AddPaitent = ()=>{

    const user1 = localStorage.getItem("dctrInfo");
  const user = JSON.parse(user1);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []); 

    return (
        <>

         <Box display={"flex"} flexDirection={"row"} bgColor={"#2a3970"}>
            <Box>
                <Navbard/>
            </Box>

            <Box display={" flex"} flexDirection={"column"} alignItems={"center"} marginTop={"20px"}>
            <Box   width={"90%"} height={"25vh"} borderRadius={"30px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} flexDirection={"row"} bgColor={"#3484d9"} >
               <Image src="https://i.pinimg.com/736x/6a/e1/59/6ae1599c62af3dc358f95d68bf344298.jpg" width={"14%"} marginLeft={"2%"} borderRadius={"full"}></Image>
               <Box marginLeft={"2%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                    <Text fontSize={"35px"} textTransform={"capitalize"} fontWeight={"800"} color={"white"}>Welcome , {user.name}</Text>
                    <Text fontSize={"20px"} textTransform={"capitalize"} fontWeight={"400"} color={"white"}>these are your patient and don't forget to check patient emergency patient's </Text>
               </Box>
               <Box marginRight={"2%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                      <Text fontSize={"25px"} textTransform={"capitalize"} fontWeight={"800"} color={"white"}>{time.toLocaleTimeString()}</Text>
                      <Text fontSize={"25px"} textTransform={"capitalize"} fontWeight={"800"} color={"white"}>{time.toLocaleDateString()}</Text>
               </Box>
              </Box>
            <Box height={"69vh"} width={"80%"}  marginTop={"2%"} overflowY={"scroll"} >
                <PatientReq/>
            </Box>
        </Box>
         </Box>

        </>
    )
}

export default AddPaitent;