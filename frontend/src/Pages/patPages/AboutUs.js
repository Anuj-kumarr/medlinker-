// import { Box } from "@chakra-ui/react";
import React from "react";
import "./AboutUs.css"

// import { Flex } from "@chakra-ui/react";
// import { Image } from "@chakra-ui/react";

const AboutUs=()=>{
    return(

        
       
   <>
            
        
  <section class="about-us">
    <div class="about">
      <img src="https://res.cloudinary.com/dojpukez0/image/upload/v1710492570/1710492345074_tn8ilb.jpg" height={"50%"} class="pic"/>
      <div class="text">
        <h2> Anuj Kumar</h2>
        <h5>Front-end Developer & <span>Designer</span></h5>
          <p>Hello guys,Myself AnujKumar crrently in btech 3rd year pursuing elcetrical engineering from MNNIT Allahabad.I am a frontend developer who is passionate about website designing </p>
        <div class="data">
        <a href="#" class="hire">Hire Me</a>
        </div>
      </div>
    </div>
    </section>
     <section class="about-us">
    <div class="about">
      <img src="https://res.cloudinary.com/dojpukez0/image/upload/v1710455242/mahendra_kohsti.jpg" height={"50%"} class="pic"/>
      <div class="text">
        <h2>About Us</h2>
        <h5>Back-end Developer</h5>
          <p>Hello guys,myself Mahendra Singh in btech 3rd year currently pursuing electrical engineering from MNNIT Allahabad.i love to do backend development and i am  quite efficient in mongodb,express js and node js.</p>
        <div class="data">
        <a href="#" class="hire">Hire Me</a>
        </div>
      </div>
    </div>
    </section>
    </>

        
    )
}
export default AboutUs;