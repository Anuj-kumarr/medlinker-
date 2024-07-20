import React  from "react";
import Navbarp from "./Navbarp";
import SideDrawer from "./SideDraw";

const  Commu = ()=>{

   const location = useLocation();
   const dctrData = location.state.dctrData;
   return (
    <>

       <Navbarp/>
       <SideDrawer/>
    </>
   )
}

export default Commu;