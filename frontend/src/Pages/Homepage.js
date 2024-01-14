import React from 'react'
import {Container, Box, Text, Tab, Tablist, TabPanel, TabPanels, Tabs,} from  "@chakra-ui/react";
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
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
      <Tabs variant='soft-rounded'>
            <Tablist mb='1em'>
              <Tab width='50%'>Login</Tab>
              <Tab width='50%'>Signup</Tab>
            </Tablist>
            <TabPanels>
              <TabPanel>
              <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
      </Box>

   </Container>


  )
}

export default Homepage