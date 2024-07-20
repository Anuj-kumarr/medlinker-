
import React from "react";
import { Box, Button, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import LoginPr from "./LoginPr";
import SignupPr from "./SignupPr";
const PRegistration = ()=>{
    return (
        <>
          <video src="https://static.vecteezy.com/system/resources/previews/004/747/818/global-network-medical-healthcare-system-protection-concept-futuristic-medical-health-protection-shield-icon-with-shining-wireframe-above-multiple-on-dark-blue-background-seamless-loop-4k-animation-free-video.webm"
              autoPlay loop
              
              style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
        }}
              ></video>
       <Box>
       <button></button>
       </Box>       

       <Box> 
        
              <Box  width ={"25vw"} marginTop={"40px"} height = {"80vh"} borderRadius={"20px"} 
        marginLeft={"60px"} borderColor={"rgb(28, 112, 112)" } borderWidth={"2px"}
            
        >

        <Tabs variant='soft-rounded' colorScheme='green'>

        <TabList   >
            <Tab marginTop={"10px"} width={"40%"} marginLeft={"10px"}>sign Up</Tab>
            <Tab marginTop={"10px"} width={"40%"} marginLeft={"px"}>login</Tab>
        </TabList>
        <TabPanels>
        <TabPanel>
      <SignupPr></SignupPr>
    </TabPanel>
    <TabPanel>
      <LoginPr></LoginPr>
    </TabPanel>
    
  </TabPanels>

        </Tabs>

        </Box> 
        </Box>     
            

        </>
    )
}

export default PRegistration;
