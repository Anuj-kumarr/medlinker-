import React from 'react';
import { Flex, Box, Button, IconButton, Image } from '@chakra-ui/react';
import { HamburgerIcon, ChatIcon, BellIcon, SettingsIcon } from '@chakra-ui/icons';
import Navbarp from '../patPages/Navbarp';
import Navbard from "../dctrPages/Navbard";

const NavbarChat = () => {

    const loggedUser = localStorage.getItem("sender");
  return (
  <>
     
        
        {loggedUser == "patient" ? (
            <Navbarp/>
        ):(
             <Navbard/>
        )}

      
   </>
  );
};

export default NavbarChat;
