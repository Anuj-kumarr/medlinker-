import React from "react";
import SideGallery from "./SideGallery";
// import SideGallery from "./SideGallery";
import MainReport from "./MainReport";
import { Box } from "@chakra-ui/react";
import Navbarp from "./Navbarp";
const Preports=()=>{
    return(
        <>
        <Box height={"100vh"} width={"100%"} >
        <Box borderColor={"black"} borderWidth={"2px"}><Navbarp/></Box>
        
        <Box display={"flex"} flex-direction={"row"} marginTop={"1px"}>
        <Box width={"30%"} height={"100vh"} borderWidth={"2px"} borderColor={"black"} >
        <SideGallery/>
        </Box>
        <Box width={"70%"} height={"100vh"} border={"1px"} borderColor={"black"} borderRadius={"2px"} >
        <MainReport/>
        </Box>
        </Box>
        </Box>
        

        </>
    )

}
export default Preports; 