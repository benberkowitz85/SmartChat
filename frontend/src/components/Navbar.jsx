import {Flex, Heading, Box, Text, Button, Spacer, HStack } from "@chakra-ui/react"

export default function Navbar() {
    return (
        <Flex as="nav" p="10px" alignItems="center">
            <Heading as="h1">Navbar</Heading>
            <Spacer />
            <HStack spacing="20px">
                <Box bg="gray.200" p="10px"></Box>
                <Text></Text>
                <Button colorScheme="purple">LogOut</Button>
            </HStack>
        </Flex>


    )
}