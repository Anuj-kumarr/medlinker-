import React  from "react";
import "./Info.css";
import Infonavbar from "./patPages.js/Infonavbar.js";
import { Box, Button, Image, Text } from "@chakra-ui/react"; 
import Video from "./Video";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import Testing from "../Testing";
// import { easeIn } from "framer-motion";

import Footer from "./patPages.js/Footer.js";
const Info = ()=>{
      const history = useHistory();
      

      const handlePatient = ()=>{
              history.push("/Ptrgtn");
      }

      const handelDoctor = ()=>{
              history.push("/Dtrgtn");
      }
      return (
        <>
    <div className="about-page">
      <div className="about-content">

      {/* <Testing images={images} />
       */}

         <Box 
           height={"100vh"}>
           
           <Image position={"fixed"} height={"100vh"} width={"100%"} src="https://cdn.dribbble.com/users/5739026/screenshots/16753501/media/bd04723f78fdce9c7df6bbb703f3ed20.jpg?resize=768x576&vertical=center"></Image>
           <Infonavbar/>
            <Box height={"100vh"} width={"100%"}  display={ "flex"} flexDirection={"column"}  position={"relative"}  alignItems={"center"} 
            
            
         >
                 {/* // yaha heading bhi  aa jayegii  */}
                 <Box bgcolor={"black"} borderColor={"black"} borderWidth={"4px"} width={"50%"} display={"flex"} justifyContent={"center"} height={"20vh"} marginTop={"40px"}  backdropFilter="blur(8px)" alignItems={"center"}>
                 <Text marginTop={"20px"} className = "transition-text" textColor={"black"}  fontSize={"120px"} fontWeight={"80px"} textAlign={"center"}  >MedLinker</Text>
                 </Box>
                 <Box  backdropFilter="blur(8px)">
                 {/* <Text className="transiton-text"  fontSize={"50px"} font-family = {"Open Sans"} color={"black"} textAlign={"center"} >Your Comprehensive Online Hub for Medical Facilities</Text> */}
                 </Box>
                 
            </Box>
           </Box>
         <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} textAlign={"center"} height={"90vh"} position={"relative"} > 
         <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
         <Box borderColor={"black"} borderWidth={"2px"} width={"90%"} backdropFilter="blur(8px)" >
         <Text fontFamily={"fantasy"}  textColor={"black"} fontSize={"100px"}className = "transition-text" fontSize={"100px"}  textAlign={"center"}> Welcome to MedLinker</Text>
         </Box>
         </Box>
         <Text position={"relative"} fontSize={"70px"}  font-family = {"Open Sans"} backdropFilter="blur(8px)"  color={"black"} >explore us as </Text>
          <Box display={"flex"}  justifyContent={"center"} alignItems={"center"} >
        
          <Button className="btn" type="button" color={"black"}  onClick={handlePatient}> As a patient</Button>
          
          <Button className="btn" type="button"  onClick={handelDoctor}> As a doctor</Button>
          
           
          </Box>
          
        


         </Box>
         
      </div>
      <div className="animated-image">
        {/* Animated hospital or healthcare-themed image */}
      </div>
    </div>
    <Box Width={"100%"} height={"30vh"} borderColor={"black"} position={"relative"} borderWidth={"2px"}>
        <Footer/>
    </Box>
       
       
    

        </>
      )
}
export default Info;
