import { Container, Heading, Text, Box } from "@chakra-ui/react";

export default function Dashboard() {
    return (
        <Container as="section" maxWidth="4x1" py="20px">
        <Heading my="30px" p="10px" color="blue.500">SmartChat Website</Heading>
       <Text marginLeft="30px">Using Chakra</Text>  
       
       
       <Box>
      We are progressing toward our goal!
       </Box>
        </Container>
        
        
    )
}
