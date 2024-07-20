// model ko direct use karo using chakra ui
import { ViewIcon } from "@chakra-ui/icons";
import { IconButton, useDisclosure,Modal,ModalContent ,ModalOverlay,ModalHeader,ModalCloseButton ,ModalBody,
    ModalFooter,
    Button,
    Image,
    Text
    } from "@chakra-ui/react";
import React  from "react";

const ProfileModal = ({user,children})=>{
  


    
    const {isOpen,onOpen,onClose} = useDisclosure();
   

    return <>
        {
            children?<span onClick={onOpen}> {children}</span>:(
                <IconButton d={{base:"flex"}}
                icon={<ViewIcon></ViewIcon>}
                 onClick={onOpen}
                />
            )
        }
        <Modal  size="lg" isOpen={isOpen} onClose={onClose} isCentered >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
          fontSize={"40px"}
          fontFamily={"work sans"}
          d="flex"
          justifyContent={"center"}>{user.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody 
          d="flex"
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-between"}
          
          >
          <Image borderRadius={"full"} boxSize={"150px"} src={user.pic} alt = {user.name} />

          <Text fontSize={{base:"28px" ,md:"30px"}}
             fontFamily="work snas">
                Email:{user.email}
             </Text>
             <Text fontSize={{base:"28px" ,md:"30px"}}
             fontFamily="work snas">
             </Text>   
           
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

};

export default ProfileModal;

