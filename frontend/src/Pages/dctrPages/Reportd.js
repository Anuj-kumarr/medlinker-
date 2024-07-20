import React, { useState } from "react";
import SideDrawer from "../chatting/SideDrawer";
import Navbard from "./Navbard";
import { Avatar, Box, Button, FormControl, FormLabel, Image, Input, Menu, MenuButton, MenuItem, MenuList, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import ChatLoading from "../chatting/ChatLoading";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { set } from "mongoose";
let patientId =null;
const Reportd = ()=>{
    const toast = useToast();
    
    const [search ,setSearch] = useState();
    const [showFirst, setShowFirst] = useState(false);
    const [searchResult, setSearchResult] =useState();
    const [regisform,setRegisfrom] =useState();
    const [bpreport ,setBpreport] =useState();
    const [ureport ,setUreport] =useState();
    const[xreport ,setXreport] =useState();
    const [ereport,setEreport] =useState();
    const [mreport,setMreport] =useState();
    // const [patientId, setPatientId] = useState();
    const [pic ,setPic] = useState();
    const [pic2 ,setPic2] =useState();
    const handleshowchatloading = () => {
         setShowFirst(true);
        setTimeout(() => {
          setShowFirst(false);
        }, 2000);
      };
    const handleClick = async()=>{
        if(!search){
                toast({
                    title:"! Please tpye the username",
                    status:"warning",
                    duration:5000,
                    isClosable:true,
                    position:"bottom",
        
                });
                
                return; 
        }

        try{
            const config = {
              header:{
                  "Content-type":"application/json",
              },
            };
            const {data} = await axios.post(
              "/api/patient/login/dctr",
              {search},
               config
              ); 
              console.log(data);
              setSearchResult(data);
          
              toast({
                  title:"Retrive Successful",
                  status:"warning",
                  duration:5000,
                  isClosable:true,
                  position:"bottom",
       
              });
         
            handleshowchatloading();
       
           }
           catch(error){
              toast({
                  title:"error occured",
                  status:"error",
                  duration:5000,
                  isClosable:true,
                  position:"bottom",
       
              });
            //   setLoading(false);
           }
        
        //    const timer = setTimeout(() => {
        //     setShowFirst(true); 
        //   }, 2000);
        //   timer();
          
          setShowFirst(true);


    }

    const handleReport = async(userId)=>{

        if(!userId){
            console.log("user id not found");
            return;
        }
        try{
            const {userReport} = await axios.post(
                "/api/report",
                {userId},
                ); 
                // console.log(userReport);
              
            
                
                toast({
                    title:"Report created succesfully",
                    status:"warning",
                    duration:5000,
                    isClosable:true,
                    position:"bottom",
         
                });
                 
                console.log(userId);
                patientId = userId;
                console.log("theis is patient id" ,patientId);
                
           
               
           


        }catch(error){
            toast({
                title:"error occured",
                status:"error",
                duration:5000,
                isClosable:true,
                position:"bottom",
     
            }); 
        }
    }

    const postDetails=(pics)=>{

        
        if(pics == undefined){
            toast({
                title:"please select an imaghe!",
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
                // setLoading(false);

                // if(sender =="registration"){
                //     setRegisfrom(data.url.toString());
                // }
                // if(sender =="BloodReport"){
                //     setBpreport(data.url.toString());
                // }
                // if(sender =="UrineReport"){
                //     setUreport(data.url.toString());
                // }
                // if(sender =="Xreport"){
                //     setXreport(data.url.toString());
                // }
                // if(sender =="ECGReport"){
                //     setEreport(data.url.toString());
                // }
                // if(sender =="MRIReport"){
                //     setMreport(data.url.toString());
                // }
              })
              .catch((err)=>{
                console.log(err);
                // setLoading(false);
              });

        }
        else{
            toast({
                title:"please select an file!",
                status:"warning",
                duration:5000,
                isClosable:true,
                position:"bottom",

            });
           
            return;
            
        }
      }
    const HandlePost = async(sender)=>{
        if(!pic)return;
        console.log(patientId);
        console.log("this is the sender " ,sender);
        console.log("this is pic",)
        const {data} = await axios.post("/api/report/update",{patientId,pic,sender},);
        toast({
            title:"! suceess",
            status:"warning",
            duration:5000,
            isClosable:true,
            position:"bottom",

        });
          
    }  

    const HandleGet = async (sender)=>{
    
        console.log(patientId);
        console.log("this is the sender " ,sender);
        console.log("this is pic",patientId)
        const {data} = await axios.post("/api/report/view",{patientId,sender},);
        console.log(data);

               if(sender =="registration"){
                    setPic2(data.Rreport);
                }
                if(sender =="BloodReport"){
                    setPic2(data.Bpreport);
                }
                if(sender =="UrineReport"){
                    setPic2(data.Ureport);
                }
                if(sender =="Xreport"){
                    setPic2(data.Xreport);
                }
                if(sender =="ECGReport"){
                    setPic2(data.ECGreport);
                }
                if(sender =="MRIReport"){
                    setPic2(data.MRIreport);
                }
        
        toast({
            title:"! suceess",
            status:"warning",
            duration:5000,
            isClosable:true,
            position:"bottom",

        });


        
    }
    

    return (
        <>
        <Box display={"flex"} flexDirection={"row"}>
          
        <Box width={"5%"} height={"100vh"}>
         <Navbard/>
         </Box>
         <Box width={"100%"} display={"flex"} flexDirection={"row"} bgColor={"#2a3970"}  >
            <Box width={"30%"} borderRadius={"10px"} borderWidth={"4px"} height={"100vh"} display={"flex"}flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"} overflowY={"scroll"}>
                    <Text textAlign={"center"} fontFamily={"Work sans"} fontSize={"30px"} textTransform={"capitalize"} borderBottomWidth={"2px"} height={"70px"}> please select the patient</Text>
                    <FormControl id='first-name' isRequired >
                       {/* <FormLabel>Search</FormLabel> */}
                     <Input width={"80%"}
                       placeholder="Search"
                       onChange={(e)=>setSearch(e.target.value)}
                    />
                  <Button width={"70px"} marginLeft={"5px"} bgColor={"lightblue"} onClick={handleClick}> Submit</Button>
                   {showFirst ? <ChatLoading/> : <>
                   </>}
                 
                 {searchResult ?(
                    <>
                 { searchResult.map((data,i)=> (    
                     <Box key={i} width={"100%"} height={"100px"} borderRadius={"10px"} borderWidth={"2px"}  _hover={{ background: "#38B2AC",color: "white", }} display={"flex"} flexDirection={"row"} alignContent={"space-evenly"} cursor={"pointer"} onClick={()=>{handleReport(data._id)}} >
                               <Avatar mr={2} marginTop={"2%"} marginLeft={"2%"}   size="sm" cursor="pointer" name= {data.name} src={data.pic} />  
                               <Box>
                              <Text marginLeft={"2%"} >{data.name}</Text> 
                              <Text marginLeft={"0%"}>{data.email}</Text>
                              </Box>
                        </Box>
                   ))}
                   </>
                ):(
                    <Text>No dtaa found</Text>
                   )}
                        
                        

                       </FormControl>
                </Box>
               <Box display={"flex"} flexDirection={"column"}  width={"70%"} >
                   <Box height={"70px"} width={"100%"}  borderRadius={"10px"} borderWidth={"5px"} display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}> 
                   
                   <Menu>
                    <MenuButton variant={"ghost"} as={Button} rightIcon={<ChevronDownIcon />}>
                      Registration Form
                    </MenuButton>
                   <MenuList>
                     <MenuItem onClick={ ()=>{HandleGet("registration")}}>View</MenuItem>
                     <MenuItem>   <Input
                     placeholder="Upload"
                    type="file"
                    p={0.5}
                    accept="image/" // Specify accepted file types as PDF
                    onChange={(e) => postDetails(e.target.files[0])}
                    /> </MenuItem>
                    <MenuItem onClick={()=>{HandlePost("registration")}}>upload</MenuItem>
                   </MenuList>
                    </Menu>
                    <Menu>
                    <MenuButton variant={"ghost"} as={Button} rightIcon={<ChevronDownIcon />}>
                    Blood Report
                    </MenuButton>
                   <MenuList>
                     <MenuItem onClick={()=>{HandleGet("BloodReport")}}>View</MenuItem>
                     <MenuItem>   <Input
                     placeholder="Upload"
                    type="file"
                    p={0.5}
                    accept="image/" // Specify accepted file types as PDF
                    onChange={(e) => postDetails(e.target.files[0])}
                    />
                    </MenuItem>
                    <MenuItem onClick={()=>{HandlePost("BloodReport")}}>upload</MenuItem>
                   </MenuList>
                    </Menu>
                   
                    <Menu>
                    <MenuButton variant={"ghost"} as={Button} rightIcon={<ChevronDownIcon />}>
                    Urine Report
                    </MenuButton>
                   <MenuList>
                     <MenuItem onClick={()=>{HandleGet("UrineReport")}}>View</MenuItem>
                     <MenuItem>   <Input
                     placeholder="Upload"
                    type="file"
                    p={0.5}
                    accept="image/" // Specify accepted file types as PDF
                    onChange={(e) => postDetails(e.target.files[0])}
                    /></MenuItem>
                     <MenuItem onClick={()=>{HandlePost("UrineReport")}}>upload</MenuItem>
                   </MenuList>
                    </Menu>
                    <Menu>
                    <MenuButton variant={"ghost"} as={Button} rightIcon={<ChevronDownIcon />}>
                    X-Ray Report
                    </MenuButton>
                   
                   <MenuList>
                     <MenuItem onClick={()=>{HandleGet("Xreport")}}>View</MenuItem>
                     <MenuItem>   <Input
                     placeholder="Upload"
                    type="file"
                    p={0.5}
                    accept="image/" // Specify accepted file types as PDF
                    onChange={(e) => postDetails(e.target.files[0] )}
                    /></MenuItem>
                      <MenuItem onClick={()=>{HandlePost("Xreport")}}>upload</MenuItem>
                   </MenuList>
                 
                    </Menu>
                    <Menu>
                    <MenuButton variant={"ghost"} as={Button} rightIcon={<ChevronDownIcon />}>
                    ECG Report
                    </MenuButton>
                   <MenuList>
                     <MenuItem onClick={()=>{HandleGet("ECGReport")}}>View</MenuItem>
                     <MenuItem>   <Input
                     placeholder="Upload"
                    type="file"
                    p={0.5}
                    accept="image/" // Specify accepted file types as PDF
                    onChange={(e) => postDetails(e.target.files[0])}
                    /></MenuItem>
                      <MenuItem onClick={()=>{HandlePost("ECGReport")}}>upload</MenuItem>
                   </MenuList>
                    </Menu>
                    <Menu>
                    <MenuButton  variant={"ghost"} as={Button} rightIcon={<ChevronDownIcon />}>
                    MRI Report
                    </MenuButton>
                   <MenuList>
                     <MenuItem onClick={()=>{HandleGet("MRIReport")}}>View</MenuItem>
                     <MenuItem>   <Input
                     placeholder="Upload"
                    type="file"
                    p={0.5}
                    accept="image/" // Specify accepted file types as PDF
                    onChange={(e) => postDetails(e.target.files[0])}
                    /></MenuItem>
                      <MenuItem onClick={()=>{HandlePost("MRIReport")}}>upload</MenuItem>
                   </MenuList>
                    </Menu>
                  
                  
                   
                   
                   

                    </Box>
                   <Box display={"flex"} justifyContent={"center"} alignContent={"center"}  borderRadius={"10px"} borderWidth={"5px"} height={"90vh"} overflowY={"scroll"} maxHeight={"90vh"} bgColor={"#2a3970"} >
                    {pic2 ? <Image src={pic2} />:<><Text fontFamily={"Work Sans"} color={"white"} fontSize={"30px"} textAlign={"center"} textTransform={"capitalize"}> please  select  a Report Option</Text></> }
                    
                   </Box> 
            </Box>
           
         </Box>
         </Box>
         
        </>
    )
}

export default Reportd;