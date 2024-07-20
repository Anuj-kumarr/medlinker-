
import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import { color } from "framer-motion";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
// import {  } from "framer-motion";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const SignupPr = ()=>{

    const toast = useToast();
    const history =useHistory();
    const[name,setName] = useState();
     const[age,setAge] = useState();
      const[email,setEmail] = useState();
       const[password,setPassword] = useState();
       const[cnfpassword,setCnfpassword] = useState();
        const[sex,setSex] = useState();
        const[phnumber,setPhnumber] = useState();
      const[pic,setPic] = useState();
      const[show,setShow] =useState(false);

      const[loading,setLoading] = useState(false);


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
      const handleClick = ()=>{
        setShow(!show);
      }

      const submitHandler = async()=>{
        setLoading(true);
        if(!name || !email|| !password || !cnfpassword ){
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
        if(password !==cnfpassword){
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
        try{
         const config = {
           header:{
               "Content-type":"application/json",
           },
         };
         const {data} = await axios.post(
           "/api/patient",
           {name,email,phnumber,age,sex,password,pic},
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
           history.push("/pHome")
   
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
       return(
        <>
<VStack spacing={"1px"}  color={"white"}>

    <Box overflowY={"scroll"} maxHeight={"400px"}>
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
    <FormControl id='age' isRequired>
        <FormLabel>age</FormLabel>
        <Input
            placeholder="Enter Your age"
            onChange={(e)=>setAge(e.target.value)}
        />

    </FormControl>
     <FormControl id='sex' isRequired>
        <FormLabel>sex</FormLabel>
        <Input
            placeholder="Enter Your sex"
            onChange={(e)=>setSex(e.target.value)}
        />

    </FormControl>
 <FormControl id='phoneno' isRequired>
        <FormLabel>phnumber</FormLabel>
        <Input
            placeholder="Enter Your phoNumber"
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
    <FormControl id='cnfpassword' isRequired>
        <FormLabel>confirm password</FormLabel>
        <InputGroup>
        <Input
         type={show ? "text" :"password"}
            placeholder="Confirm Paasowrd"
            onChange={(e)=>setCnfpassword(e.target.value)}
        />
        <InputRightElement width={"4.5rem"}>
            <Button h= "1.75rem" size={"sm"} onClick={handleClick}>
                {show ?"Hide" :"Show"}
            </Button>
        </InputRightElement>
        </InputGroup>

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
    <Button
    bgColor={"rgb(28, 112, 112)"}
    borderRadius={"1px"}
    
    margin marginTop={"8px"
    
    
    } 
    onClick={submitHandler}>Submit</Button>



    </Box>
          </VStack>
          </>
       )
}

       export default SignupPr;
