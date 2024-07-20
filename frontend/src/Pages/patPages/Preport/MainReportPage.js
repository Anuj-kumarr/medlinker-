import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const MianReportp = () => {
  return (
    <Box p="6" flex="3" bg="gray.100" borderRadius="md" mr="6" width={"100%"} display={"flex"} justifyContent={"center"} borderWidth={"2px"} borderColor={"black"}>
      <Heading size="md" mb="4">Main Medical Report</Heading>
     
      {/* Add more details of the main report here */}
    </Box>
  );
}

export default MianReportp;