import React from 'react'
import { Box, Container } from "@chakra-ui/react";

const Homepage = () => {
  return (
   <Container maxW = 'xl' centerContent>
     <Box
       d= 'flex'
       justifyContent= 'center'
       p={3}
       bg={"white"}
       w="100%"
       m="40px 0 15px 0"
       borderRadius="lg"
       borderWidth="1px"
     >
       <Text fontSize="4xl" fontFamily="Work sans" color="black">
         SmartChat
       </Text>
     </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px"></Box>

   </Container>

<div>Homepage</div>
  )
}

export default Homepage