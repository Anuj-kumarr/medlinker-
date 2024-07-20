
import React, { useEffect, useState } from "react";
import Navbarp from "./Navbarp";
import { Box, Button, Flex, Image, Img, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const FindDctr = ()=>{
  const toast =useToast();
  const history =useHistory();
  const [loading,setLoading] =useState();
  const[user,setUser] = useState();
  const idx1 =0;
  const [data ,setData] = useState();

  useEffect(() => {
    // Function to be called only once
    allDctr()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


    const handelinfopage = (item)=>{
      
      console.log(item);
      history.push("/DctrProfilep" ,{dctrData : item});
         
    }
    const allDctr = async()=>{
        try{
            const config = {
              header:{
                  "Content-type":"application/json",
              },
            };
            const {data} = await axios.post(
              "/api/dctr/allDctr",
              {},
               config
              ); 
            
              localStorage.setItem("MediInfo",JSON.stringify(data));
            //  console.log(data);
            setUser(data);
              setLoading(false);
             
       
           }
           catch(error){
              toast({
                  title:"network Issue",
                  status:"error",
                  duration:5000,
                  isClosable:true,
                  position:"bottom",
       
              });
              setLoading(false);
           }
    }

    // allDctr();

  
     return (
        <>
         <Navbarp/>
         {/* <button type="button" className="btn" > FindDctr</button> */}
         <Box display={"flex "} marginLeft={"20px"} marginTop={"20px"}>
         
          
         
         <Flex flexWrap="wrap" justifyContent="space-between">
      {user &&
        user.map((item, index) => (
          <Box
            margin={"10px"}
            width={ "300px"}
            height={"450px"}
            
            boxShadow={"3px 3px 6px rgba(0, 0, 0, 0.16)"}
            borderWidth={"2px"}
            _hover={
              { transition :"width 0.3s ease-in-out", width:"320px",height:"470", boxShadow : "3px 3px 6px rgba(0, 255,252, 0.16)"} 
                    
                  }
            key={index}
            marginBottom={"80px"}

          >
            <Image src={item.pic} />
            <Text fontSize={"20px"} textAlign={"center"} fontFamily={"work snas"} >{item.name}         ( {item.mproficiency}) </Text>
            <Text fontSize={"16px"} textAlign={"center"}> Email : {item.email}</Text>
            <Text fontSize={"14"} textAlign={"center"} >Studies : {item.qualification}</Text>
            <Text fontSize={"14"} textAlign={"center"} >Rating : {item.rating}</Text>
            <Button marginLeft={"50px"} marginTop={"8px"} className="btn" onClick={()=>{
               setData(item);
                handelinfopage(item);

            }}> click</Button> 
          </Box>
        ))}
    </Flex>

              
               
           
         </Box>
         
        </>
     )
}
export default FindDctr;