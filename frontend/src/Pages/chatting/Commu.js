import React, { useEffect, useState } from "react";
import Navbar from "./NavbarChat";
import SideDrawer from "./SideDrawer";
import ChatBox from "./ChatBox";
import ChatLoading from "./ChatLoading";
import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
const Commu = ()=>{
  const [showFirst, setShowFirst] = useState(true);
  const[chaton,setChaton] =useState(false);

  // const chaton1 = JSON.parse(localStorage.getItem("chaton"));
  
  // const chaton2 = JSON.parse(chaton1);
 
  //  localStorage.removeItem("chaton");

  const location = useLocation();
  const { sender } = location.state;


  console.log(sender);
    if(chaton){
      setChaton(true);
    }
 console.log(chaton);

  

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirst(false); 
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>

      <Navbar/>
      <Box display={"flex"} flexDirection={"row"}>
      {showFirst ? <ChatLoading /> : <SideDrawer sender = {sender}/>}
      
      {/* {chaton  ?  <ChatBox />:<ChatLoading/> } */}
      </Box>
    </>
  )
}
export default Commu;