import React from "react";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import AboutUs from "./AboutUs";






// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Infonavbar = ()=>{
  const history = useHistory();
const handleClick=()=>{
  history.push("/Aboutus");
}
const handleContact = ()=>{
    history.push("/ContactUs");
}
const handleFaq = ()=>{
    history.push("/FAQSection");
}





  

   

  
   
   

    return (
        <> 

          
          <Box  display={"flex"} flexDirection={"row"} position={"relative"} justifyContent={"space-between"}>
             {/* starting segemenet  */}
             <Box width={"20%"} height={"10vh"}  display={"flex"} flexDir={"row"} >
              <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/healthcare-3099180-2578767.png?f=webp&w=256"/> 
            <Text fontStyle={"Bold"} fontSize={"26px"} marginTop={"8px"} marginLeft={"25px"}>MedLinker</Text>
             </Box>

             {/* middle segmenet  */}
             <Box width={"60%"} height={"12vh"} display={ "flex"} flexDirection={"row"}   justifyContent={"flex-end"} alignItems={"center"}>

                <Button  className = {"btn"} variant={"ghost"} width={"auto"} color={"black"} margin={"5px"} > Home</Button>
                <Button className = {"btn"} variant={"ghost"}  width={"auto"} margin={"5px"} onClick={handleClick}> About Us</Button>
                <Button  className = {"btn"} variant={"ghost"}  width={"auto"}  margin={"5px"} onClick={handleContact}> contact us</Button>
                <Button className = {"btn"} variant={"ghost"}  width={"auto"}  margin={"5px"} onClick={handleFaq} > FAQ's</Button>
             </Box>
              {/* end segmenet */}
              {/* <Box width={"20%"} height={"10vh"} display={"flex"} flexDirection={"row-reverse"} alignItems={"center"}>
              
                <ProfileModal  user={user}/> 
              </Box> */}

          
             
          </Box>


        
        </>
        
    )
};

export default Infonavbar;