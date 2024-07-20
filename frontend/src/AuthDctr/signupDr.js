import { Box, Button, FormControl, FormLabel, Input,VStack
} from "@chakra-ui/react";
import { color } from "framer-motion";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SignupDr = ()=>{

     const toast = useToast();
     const history = useHistory();
   const[name,setName] = useState();
     const[email,setEmail] = useState();
      const[password,setPassword] = useState();
       const[phnumber,setPhnumber] = useState();
     const[pic,setPic] = useState();
     const[qualification,setQualfication] = useState();
     const[mproficiency,setMproficiency] =useState();
      const[loading,setLoading] =useState(false);

     const postDetails=(pics)=>{
        setLoading(true);
        if(pics == undefined){
            toast({
                title:"please select an image!",
                status:"warning",
                duration:5000,
                isClosable:true,
                position:"bottom",

            });
            return;
        }
        if(pics.type ==="image/jpeg" || pics.type==="image/png"){
            const data = new FormData();
            data.append("file",pics);
            data.append("upload_preset","chat-app");
            data.append("cloud_name","mahisingh");
            fetch("https://api.cloudinary.com/v1_1/mahisingh/image/upload",{
                method:"post",
                body:data,

            }).then((res)=>res.json())
              .then((data)=>{
                setPic(data.url.toString());
                // console.log(data.url.toString());
                setLoading(false);
              })
              .catch((err)=>{
                console.log(err);
                setLoading(false);
              });

        }
        else{
            toast({
                title:"please select an image!",
                status:"warning",
                duration:5000,
                isClosable:true,
                position:"bottom",

            });
            setLoading(false);
            return;
            
        }
      }


      const submitHandler = async()=>{
        setLoading(true);
        if(!name || !email|| !password  ){
           toast({
               title:"sarri field fill karo yrr!",
               status:"warning",
               duration:5000,
               isClosable:true,
               position:"bottom",
   
           });
           setLoading(false);
           return; 
        }

        
        try{
         const config = {
           header:{
               "Content-type":"application/json",
           },
         };
         const {data} = await axios.post(
           "/api/Dctr",
           {name,email,phnumber ,password,pic,qualification,mproficiency},
            config
           ); 
           toast({
               title:"Registration Successful",
               status:"warning",
               duration:5000,
               isClosable:true,
               position:"bottom",
   
           });
           localStorage.setItem("userInfo",JSON.stringify(data));
   
           setLoading(false);
           history.push("/DHome")
   
        }
        catch(error){
           toast({
               title:"error  occurend in backend",
               status:"error",
               duration:5000,
               isClosable:true,
               position:"bottom",
   
           });
           setLoading(false);
        }
       };
   return (
   <>
         <VStack spacing={"1px"} color={"white"}>
         <Box overflowY={"scroll"} height={"400px"}>
         <FormControl id='first-name' isRequired>
       <FormLabel>Name</FormLabel>
       <Input
           placeholder="Enter Your Name"
           onChange={(e)=>setName(e.target.value)}
       />

   </FormControl>
     <FormControl id='email' isRequired>
       <FormLabel>email</FormLabel>
       <Input
           placeholder="Enter Your Email"
           onChange={(e)=>setEmail(e.target.value)}
       />

   </FormControl> 
  
    
<FormControl id='phone-no' isRequired>
       <FormLabel>phoneno</FormLabel>
       <Input
           placeholder="Enter Your phone-no"
           onChange={(e)=>setPhnumber(e.target.value)}
       />

   </FormControl>
   <FormControl id='password' isRequired>
       <FormLabel>password</FormLabel>
       <Input
           placeholder="Enter Your password"
           onChange={(e)=>setPassword(e.target.value)}
       />

   </FormControl>
    <FormControl id='picture' isRequired>
       <FormLabel>upload your picture</FormLabel>
       <Input
           type="file"
           p={.5}
           accept="image/"

           onChange={(e)=>postDetails(e.target.files[0])}
       />

   </FormControl> 
  
    <FormControl id='qualification' isRequired>
       <FormLabel>Qualification</FormLabel>
       <Input
           placeholder="Enter Your qualification"
           onChange={(e)=>setQualfication(e.target.value)}
       />

   </FormControl>
    <FormControl id='field' isRequired>
       <FormLabel>medical proficiency</FormLabel>
       <Input
           placeholder="enter your field of expertise"
           onChange={(e)=>setMproficiency(e.target.value)}
       />

   </FormControl>
   <Button
   bgColor={"rgb(28, 112, 112)"}
   borderRadius={"1px"}
   
   margin marginTop={"8px"} 
    onClick={submitHandler}
   >Submit</Button>


</Box>
   
         </VStack>
   </>
   )
}

export default SignupDr;
