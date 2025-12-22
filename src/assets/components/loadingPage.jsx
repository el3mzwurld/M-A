import { Box, Text } from "@chakra-ui/react";

const LoadingScreen = () => {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
      className="loader"
    >
      <Text fontSize="24px" fontWeight={600}>
        MARC & ASSOCIATES
      </Text>
    </Box>
  );
};

export default LoadingScreen;
