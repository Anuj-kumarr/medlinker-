import "./index.css"
import React from 'react';
import  App from "./App"
import ReactDom from 'react-dom';
import {BrowserRouter} from "react-router-dom"; 
import { ChakraProvider } from '@chakra-ui/react';
import DataProvider from "./context/DataProvider";


ReactDom.render(
  <BrowserRouter>
  <DataProvider>
  <ChakraProvider> 
        <App/>
  </ChakraProvider>
  </DataProvider>
  </BrowserRouter>
  ,
  document.getElementById("root")

  
);
