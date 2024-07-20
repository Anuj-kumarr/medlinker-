
import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from "@chakra-ui/react";
// import { DataState } from "../../context/DataProvider";
import ProfileModal from "./ProfileModal";
import { ChevronDownIcon } from "@chakra-ui/icons";



import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import MianReportp from "./Preport/MainReportPage";

const Navbarp = ()=>{

const history =useHistory();

let sender = "patient";
  

    
  const user1 = localStorage.getItem("userInfo");
  const user = JSON.parse(user1);
    // console.log(user);

  const logoutHandler = ()=>{
    localStorage.removeItem("userInfo");
    history.push("/");
  }

  const Home = ()=>{
    history.push("/pHome");
  }

  const communication = ()=>{
    history.push("/Commu" , { sender});
  }
  const FindDctr = ()=>{
    history.push("/pFindDctr");
  }

  const Reportp = ()=>{
    history.push("/MainReportp");
  }
   
   

    return (
        <> 

          
          <Box  display={"flex"} flexDirection={"row"} >
             {/* starting segemenet  */}
             <Box width={"20%"} height={"10vh"}  display={"flex"} flexDir={"row"} >
              <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/healthcare-3099180-2578767.png?f=webp&w=256"/> 
            <Text fontStyle={"Bold"} fontSize={"26px"} marginTop={"8px"} marginLeft={"25px"}>MedLinker</Text>
             </Box>

             {/* middle segmenet  */}
             <Box width={"60%"} height={"10vh"} display={ "flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>

                <Button  className = {"btn"} variant={"ghost"} width={"auto"} margin={"5px"} onClick={Home} > Home</Button>
                <Button className = {"btn"} variant={"ghost"}  width={"auto"} margin={"5px"}   onClick={communication} > Communication</Button>
                <Button  className = {"btn"} variant={"ghost"}  width={"auto"}  margin={"5px"}   onClick={Reportp} > Report's</Button>
                <Button className = {"btn"} variant={"ghost"}  width={"auto"}  margin={"5px"}   onClick={FindDctr}> find Doctor's</Button>
             </Box>
              {/* end segmenet */}
              {/* <Box width={"20%"} height={"10vh"} display={"flex"} flexDirection={"row-reverse"} alignItems={"center"}>
              
                <ProfileModal  user={user}/> 
              </Box> */}

              <Menu variant={"ghost"}>
                    <MenuButton margin={"auto"} as={Button} variant={"ghost"}  rightIcon={<ChevronDownIcon/>}>
                       <Avatar size={"sm"} cursor={"pointer"} name={user.name} src={user.pic}></Avatar>
                    </MenuButton>
                    <MenuList variant={"ghost"}  >
                         <ProfileModal user={user}>
                         <MenuItem  variant={"ghost"} color={"black"}>My Profile</MenuItem>
                         </ProfileModal>
                       
                        <MenuDivider></MenuDivider>
                        <MenuItem  variant ={"ghost"}color={"black"} onClick={logoutHandler}>Logout</MenuItem>
                    </MenuList>
                </Menu>
             
          </Box>


        
        </>
        
    )
};

export default Navbarp;