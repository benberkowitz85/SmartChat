import{ Box, Container, Tab, TabList, TabPanels, TabPanel, Text, Tabs } from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";

function homePage() {


    return(
        <Container>
            <Box>
                <Text></Text>
            </Box>
            <Box>
                <Tabs>
                    <TabList>
                        <Tab></Tab>
                        <Tab></Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login/>
                        </TabPanel>
                        <TabPanel>
                            <Signup/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    );
}

export default homePage;