import React from "react";
import { createContext, useContext, useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
const DataContext = createContext();

const DataProvider = ({children})=>{
    const [user,setUser] = useState();
    const history =useHistory();
     
    useEffect(()=>{
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        setUser(userInfo);
        console.log(userInfo);

        if(!userInfo) history.push("/");  
    },[history]);
    return (
        <DataContext.Provider value={{user,setUser}}>
            {children}
        </DataContext.Provider>
    );
};

export const DataState = ()=>{
  return useContext(DataContext);
  
};
export default DataProvider;
