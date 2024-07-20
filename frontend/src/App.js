import React from "react";
import Info from "./Pages/Info";
import { Route } from "react-router-dom";
import PRegistration from "./Auth/PRegistration";
// import Testing from "./Testing";
import DrRegisteration from "./AuthDctr/DrRegistration";
import Mianp from "./Pages/patPages.js/Mainp";
import Commu from "./Pages/patPages.js/Commu";
import FindDctr from "./Pages/patPages.js/FindDctr";
import AboutUs from "./Pages/patPages.js/AboutUs";
import Preports from "./Pages/patPages.js/Preports";
// import Maind from "./Pages/dctrPages/Maind";
import DctrProfilep from "./Pages/patPages.js/DctrProfilep";
const App = ()=>{

  return (
    <>
       <div className="App">
        <Route path ="/" component ={Info} exact / >
        <Route path = "/Ptrgtn" component = {PRegistration}/>
        {/* <Route path  = "/testing" component = {Testing}> */}
        <Route path = "/Dtrgtn" component = {DrRegisteration} />
        <Route path = "/pHome" component = {Mianp}/>
        <Route path = "/pCommu" component = {Commu}/>
        <Route path = "/pfindDctr" component = {FindDctr}/>
        {/* <Route path = "/maind" component = {Maind}/> */}
        <Route path = "/DctrProfilep" component = {DctrProfilep}/>
        <Route path="/Preports" component={Preports}/>
        <Route path="/AboutUs" component={AboutUs}/>
        
        


        
        
    </div>
    </>
  )
};

export default App;
