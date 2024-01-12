import {Heading, Text, Box, Flex } from "@chakra-ui/react";
import './App.css'
import { Button, } from '@chakra-ui/react'

function App() {
  return (
    <Flex
        width={"100vw"}
        heigth={"100vh"}
        alignContent={"center"}
        justifyContent={"center"}
    >
      <Box maxW="2xl" m=") auto">
        <Heading as="h1" textAlign="center" fontSize="5xl" mt="100px">
             Welcome to SmartChat!
        </Heading>
        <Text fontSize="xl" textAlign="center" mt="30px">
        A Scholarly-focused chat, where researchers, academics, students and thinkers can find articles, create discussion threads and find resources. 
        </Text>
        <Text
          w="fit-content"
          p="4"
          px="50"
          bg="blue.300"
          borderRadius="10px"
          m="0 auto"
          mt="8"
          fontWeight="bold"
          color="white"
          fontSize="xl"
      >
        Get Started
      </Text>
      </Box>
    </Flex>   
      
  )
}

export default App;
