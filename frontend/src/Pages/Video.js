import React from "react";
// import { Flex, Box, Heading } from "@chakra-ui/react";

const Video = () => {
  return (
       <>
        <video width={"440" }  height={"150"}  autoPlay >
            <source src="https://www.gstatic.com/culturalinstitute/searchar/assets/international_space_station/desktop_dark.mp4" type="video/mp4"/>
           </video>
       </>
  );
};

export default Video;