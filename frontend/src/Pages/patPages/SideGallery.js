// components/SideGallery.js
import React from 'react';
import { Box, Heading, VStack,Text } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const SideGallery = () => {
  // Sample data for different types of medical reports
  const reports = [
    { type: "X-Ray", description: "X-Ray Report Description" },
    { type: "Blood Test", description: "Blood Test Report Description" },
    { type: "MRI", description: "MRI Report Description" },
    { type: "medicines", description: "Medicines For Treatment"  },

    // { type : "Medicines", description: "medicines for treatment"},                                    }
    // Add more report types as needed
  ];
  const history=useHistory();
  const handleClick =()=>{
     history.push("/Xray")
  }

  return (
    <Box p="6" flex="1" bg="gray.100" borderRadius="md" height={"100%"}>
      <Heading size="md" mb="4">Side Gallery</Heading>
      <Box marginTop={"60px"}>
      <VStack spacing="4" align="stretch">
        {reports.map((report, index) => (
          <Box cursor={"pointer"} key={index} p="4" bg="white" borderRadius="md" onClick={handleClick}>
            <Heading size="sm">{report.type}</Heading>
            <Text>{report.description}</Text>
          </Box>
        ))}
      </VStack>
      </Box>
    </Box>
  );
}

export default SideGallery;
