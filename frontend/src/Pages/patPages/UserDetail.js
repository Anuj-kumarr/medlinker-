import { Button, FormControl, FormLabel, Input, Select, Text, VStack, useToast } from "@chakra-ui/react";
import React, { useState }  from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
const UserDetails = ({user ,dctrData})=>{

    const toast =useToast();
    const history =useHistory();

    const [problem ,setProblem] = useState();
    const [dctrtype,setDctrtype] = useState();
    const [deciInfo,setDeciInfo] =useState();
    const[deciTime,setDeciTime] = useState();
    const [serverity,setServerity] = useState();
    const[prevDctr,setPrevDctr] = useState();
    const[loading,setLoading] =useState(false);
    const nameP = user.name;
    const emailP = user.email;
    const phnumber = user.phnumber;
    const  nameD = dctrData.name;
    const  emailD = dctrData.email;
    const pic= user.pic;

    

    

    const submitHandler = async()=>{
            if(!problem){
                toast({
                    title:"please select the problem type",
                    status:"error",
                    duration:5000,
                    isClosable:true,
                    position:"bottom",
        
                });
            }

            try{
                const config = {
                  header:{
                      "Content-type":"application/json",
                  },
                };
                const {data} = await axios.post(
                  "/api/med",
                  {nameP,emailP,phnumber,problem,dctrtype,deciInfo,deciTime,serverity,prevDctr,nameD ,emailD ,pic},
                   config
                  ); 
                  toast({
                      title:` thanks for your detail. ${dctrData.name} will soon connect with you `,
                      status:"warning",
                      duration:5000,
                      isClosable:true,
                      position:"bottom",
           
                  });
                  localStorage.setItem("medInfo",JSON.stringify(data));
                 
           
                  setLoading(false);
                  
           
               }
               catch(error){
                  toast({
                      title:"error occured",
                      status:"error",
                      duration:5000,
                      isClosable:true,
                      position:"bottom",
           
                  });
                  setLoading(false);
               }



           
    }
    return (
        <>


           <VStack marginTop={"15px"} spacing={"1px"} color={"white"}>
           <Text fontSize={"35px"} color={"black"}>description</Text>
          <FormControl id='first-problem' isRequired>
        <FormLabel color={"black"}>Problem Selection </FormLabel>
        
           
       <Select id="problem"
        name="problem"
         color={"black"}
         placeholder="Select problem"
         borderColor={"rgb(0,255,0)"} 
         borderWidth={"2px"} 
         onChange={(event)=>{setProblem(event.target.value)}} >
        <option value="general">General Check-up</option>
        <option value="specific">Specific Ailment</option>
        <option value="consultation">Consultation</option>
        <option value={"other"}>Other</option>
       
      </Select>
     </FormControl>

     <FormControl id='Dctr-Selction' isRequired>
        <FormLabel color={"black"}>Doctor Selection </FormLabel>
       <Select id="problem"
        name="problem" 
        color={"black"} 
        placeholder="Select doctor" 
        width={"100%"} 
        borderColor={"rgb(0,255,0)"} 
        borderWidth={"2px"} 
        onChange={(event)=>{setDctrtype(event.target.value)}}  >
        <option value="Cardilogist">Cardilogist</option>
        <option value="Dermatologist">Dermatologist</option>
        <option value="Pediatrics"> Pediatrics</option>
        <option value="orthopedic surgen"> orthopedic surgeon</option>
        <option value="other"> other</option>
       
      </Select>        
     </FormControl>

     <FormControl id='Disecse-Selction' isRequired>
        <FormLabel color={"black"} > pathological conditions </FormLabel>
         
         <Input color={"black"}
          placeholder="describe  your problem" 
          height={"50px"} 
          borderColor={"rgb(0,255,0)"} 
          borderWidth={"2px"} 
          onChange={(event)=>{setDeciInfo(event.target.value)}}></Input>
     </FormControl>

     <FormControl id='Disecse-time' isRequired>
        <FormLabel color={"black"}>disease time</FormLabel>
         {/* <Input placeholder="decribe about your problem "> </Input> */}
         <Input color={"black"} 
         placeholder="time" 
         borderColor={"rgb(0,255,0)"} 
         borderWidth={"2px"}  
         height={"50px"} 
         onChange={(event)=>{setDeciTime(event.target.value)}}></Input>
           
        
     </FormControl>

     <FormControl id='Serverity' isRequired>
        <FormLabel color={"black"}> severiety </FormLabel>
        
           
       <Select id="problem" 
       name="problem" 
       color={"black"} 
       placeholder="Select severiety" 
       borderColor={"rgb(0,255,0)"} 
       borderWidth={"2px"} 
       onChange={(event)=>{setServerity(event.target.value)}} >
        <option value="mild">mild</option>
        <option value="moderate">moderate</option>
        <option value="severe"> severe</option>
      </Select>   
     </FormControl>

     <FormControl id='Dctr-Selction' isRequired>
        <FormLabel color={"black"}>Doctor Selection </FormLabel>
        
           
       <Select id="problem" name="problem" color={"black"} placeholder="Select previous to any doctor" borderColor={"rgb(0,255,0)"} borderWidth={"2px"} onChange={(event) =>{setPrevDctr(event.target.value)}}>
        <option value="yes">yes</option>
        <option value="no">No</option>
        
       
      
      </Select>        
     </FormControl>

    



   
     
    <Button
        className="btn"
       
       onClick={submitHandler}
      >
        Click Me
      </Button>
      <style jsx>{`
        @keyframes sparkle {
          0% {
            transform: scale(1);
            filter: hue-rotate(0deg);
          }
          100% {
            transform: scale(1.1);
            filter: hue-rotate(360deg);
          }
        }
      `}</style>



    
          </VStack>
        </>
    )
}

export default UserDetails;