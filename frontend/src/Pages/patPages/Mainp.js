import React from "react";
import Navbarp from "./Navbarp";
import { Box} from "@chakra-ui/react";
import MediAi from "./ourAi/MediAi";
import Footer from "./Footer";
// import UserDetails from "./UserDetail";





const Mainp = () => {
       
  const user1 = localStorage.getItem("userInfo");
  const user = JSON.parse(user1);
    // console.log(user);

 


  return (
    <>
      <Navbarp />
     
      
      <div>

        <video autoPlay
          muted
          loop
          style={{
            position: 'relative',
            top: '0',
            left: '0',
            width: '100%',
            height: '100vh',
            backgroundSize:'cover',
           

          }}
        >
          <source
            src="https://res.cloudinary.com/dojpukez0/video/upload/v1710004594/nbilyuoajdus7qwx3qqh.mp4"
            type="video/mp4"
          />

        </video>




      
       <Box width={"30%"} position={"absolute"}
       top="20px"
        left="20px"
        borderRadius="8px"
          borderColor="black" // Set border color to blue with intensity 500
      borderWidth="2px" 
      backdropFilter={"blur(3px)"}// Set border width
      borderStyle="solid"
      marginTop={"70px"}
      marginBottom={"20px"}>
       
        <MediAi/>
      </Box>


    <Footer/>
      


      </div>
    </>
      )

        }

        export default Mainp;