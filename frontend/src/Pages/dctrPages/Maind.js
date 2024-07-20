import React, { useEffect, useState }  from "react";
import Footer from "../patPages/Footer.js";
import "../patPages/Footer.css";
// import Navbarp from "./Navbard.js";
import PatientReq from "./PatientReq.js";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import Navbard from "./Navbard.js";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";

const Maind = ()=>{

  const user1 = localStorage.getItem("dctrInfo");
  const user = JSON.parse(user1);
  const history = useHistory();

  const [time, setTime] = useState(new Date());



 const AddPatient = ()=>{
  history.push("/AddPatient");
 }
      
  


  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []); 
    return (
        <>
          
        
          <Box  display={"flex"} flexDirection={"row"} width={"100%"} bgColor={"#2a3970"} height={"100vh"}>
      <Box marginLeft={"1%"}  width={"5%"} >
      <Navbard />
      </Box>

      <Box width={"80%"}  display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Box width={"100%"} height={"15vh"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} flexDirection={"row"}  >
        <Text textAlign={"left"} marginLeft={"3%"} color={"white"}  textTransform={"capitalize"} fontSize={"35px"} fontStyle={"oblique"} fontWeight={"700"}> MedLinker</Text>
        <Button className="btn" marginRight={"4%"} onClick={AddPatient} > + Add Patients</Button>

        </Box>  
        <Box   width={"90%"} height={"25vh"} borderRadius={"30px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} flexDirection={"row"} bgColor={"#3484d9"} >
               <Image src="https://i.pinimg.com/736x/6a/e1/59/6ae1599c62af3dc358f95d68bf344298.jpg" width={"15%"} marginLeft={"2%"} borderRadius={"full"}></Image>
               <Box marginLeft={"2%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                    <Text fontSize={"35px"} textTransform={"capitalize"} fontWeight={"800"} color={"white"}>Welcome , {user.name}</Text>
                    <Text fontSize={"20px"} textTransform={"capitalize"} fontWeight={"400"} color={"white"}>Have a nice  day at work </Text>
               </Box>
               <Box marginRight={"2%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                      <Text fontSize={"25px"} textTransform={"capitalize"} fontWeight={"800"} color={"white"}>{time.toLocaleTimeString()}</Text>
                      <Text fontSize={"25px"} textTransform={"capitalize"} fontWeight={"800"} color={"white"}>{time.toLocaleDateString()}</Text>
               </Box>
        </Box>
      <Box display={"flex"} flexDirection={"column"} width={"90%"} marginTop={"5%"} >
       <Text textAlign={"left"} fontSize={"35px"} textTransform={"capitalize"} fontWeight={"800"} color={"white"}>Your personalize Report's </Text> 
        <Box display={"flex"} flexDirection={"row"} justifyContent={"flex-start"} marginTop={"2%"}>
         <Button margin={"1%"} width={"20vh"} height={"25vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}  backgroundImage="url(https://as1.ftcdn.net/v2/jpg/02/01/85/72/500_F_201857296_cBMHRtLaHBQVomr8UGJftVQDgiMPkN8D.jpg)" backgroundSize="cover"
      backgroundPosition="center"></Button>
         <Button margin={"1%"}  width={"20vh"} height={"25vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}  backgroundImage="url(https://as1.ftcdn.net/v2/jpg/02/01/85/72/500_F_201857296_cBMHRtLaHBQVomr8UGJftVQDgiMPkN8D.jpg)" backgroundSize="cover"
      backgroundPosition="center"></Button>
         <Button margin={"1%"}  width={"20vh"} height={"25vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}  backgroundImage="url(https://as1.ftcdn.net/v2/jpg/02/01/85/72/500_F_201857296_cBMHRtLaHBQVomr8UGJftVQDgiMPkN8D.jpg)" backgroundSize="cover"
      backgroundPosition="center"></Button>
         <Button margin={"1%"}  width={"20vh"} height={"25vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}  backgroundImage="url(https://as1.ftcdn.net/v2/jpg/02/01/85/72/500_F_201857296_cBMHRtLaHBQVomr8UGJftVQDgiMPkN8D.jpg)" backgroundSize="cover"
      backgroundPosition="center" ></Button>
        </Box>
      </Box>  
      </Box>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignContent={"center"} bgColor={"#111536"} width={"15%"}>
      <Text marginTop={"10%"}  marginLeft={"20%"} textAlign={"left"} color={"white"} fontSize={"25px"}  textTransform={"capitalize"} > my profile</Text>
      <Image margin={"15%"} borderRadius={"full"} boxSize={"150px"} src={ "https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png"} alt = "name" />
      <Text  marginLeft={"0%"} textAlign={"center"} color={"white"} fontSize={"35px"} textTransform={"capitalize"} > {user.name}</Text>

      {/* <SideDrawerp sender = {"patient"}/> */}
      </Box>
        
      </Box>


        </>
    )
}
export default Maind;
