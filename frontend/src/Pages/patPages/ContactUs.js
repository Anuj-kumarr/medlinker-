import { Box, Image } from "@chakra-ui/react";
import React from "react";
import ContactForm from "./ContactForm";
const ContactUs=()=>{
    return(
        <>
            <Box height={"100vh"} width={"100vw"}  >
                <Image position={"fixed"} height={"100vh"} width={"100%"} src="https://res.cloudinary.com/dojpukez0/image/upload/v1710507950/contact_page_lt6eox.webp" objectFit={"cover"} ></Image>
                <Box position={"relative"} height={"100vh"} width={"100%"} display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                    <ContactForm/>
                </Box>
                
            </Box>
        </>
    )
}
export default ContactUs;