import { Stack } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
 import React from 'react';
const ChatLoading = () => {
  return (
    <Stack>
      <Skeleton height="100px" width={"400px"}   />
      <Skeleton height="100px" width={"400px"}  />
      <Skeleton height="100px" width={"400px"}  />
      <Skeleton height="100px" width={"400px"}  />
      <Skeleton height="100px" width={"400px"}  />
      <Skeleton height="100px" width={"400px"}  />
    
    </Stack>
  );
};

export default ChatLoading;