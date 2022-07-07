import { Box, Flex, Heading, } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  
  const TopBar = () => {
  
    return (
      <Flex align="center" justify="space-between" borderRadius="1rem" w="100%">
        <Box color="primary">
          <Link to='/feed'><Heading>Sonder.</Heading></Link>
        </Box>
      </Flex>
    );
  };
  
  export default TopBar;