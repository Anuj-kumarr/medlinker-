
import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text,Tooltip } from "@chakra-ui/react";

import ProfileModal from  "../patPages/ProfileModal";
import { ChevronDownIcon } from "@chakra-ui/icons";



import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Navbard = ()=>{

const history =useHistory();

let sender = "doctor";
  

    
  const user1 = localStorage.getItem("dctrInfo");
  const user = JSON.parse(user1);
    // console.log(user);

  const logoutHandler = ()=>{
    localStorage.removeItem("dctrInfo");
    history.push("/");
  }

  const Home = ()=>{
    history.push("/Maind");
  }

  const communication = ()=>{
    history.push("/Commu" ,{sender});
  }
  const Reportd =()=>{
    history.push("/Reportd");
  }
 

    return (
        <> 

          
<Box width={"10vh"} marginBottom={"10px"}  height={"100vh"} display={ "flex"} flexDirection={"column"} bgColor={"#3484d9"}  marginLeft={"1%"}borderRadius={"30px"} justifyContent={"space-between"}>
                

                <Box marginTop={"60%"}  display={"flex"} justifyContent={"space-evenly"} flexDirection={"column"} >
                <Button  variant={"ghost"}   marginBottom={"10px"} onClick={Home}  >
                <Tooltip label='Home' fontSize='md'>
                      <i class="fas fa-home "></i>
                 </Tooltip>
                 </Button>
              <Button  variant={"ghost"}  width={"auto"} marginBottom={"10px"}   onClick={communication} > <i class="fas fa-comment"></i></Button>
              <Button   variant={"ghost"}  width={"auto"}  marginBottom={"10px"}  onClick={Reportd} > 
              <i class="fas fa-notes-medical"></i>
              </Button>
            
                </Box>
                <Box marginBottom={"40%"} justifyContent={"center"} marginLeft={"17%"} >
                <Button  variant={"ghost"}  width={"auto"}    onClick={logoutHandler}> 
                <i class="fas fa-chevron-right"></i></Button>
                  
                </Box>
              
             
           </Box>

        
        </>
        
    )
};

export default Navbard;
