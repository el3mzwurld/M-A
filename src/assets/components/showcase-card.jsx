import { Box, Image, Text, VStack } from "@chakra-ui/react";

const ShowCard = ({ data }) => {
  return (
    <VStack
      width={"100%"}
      height={"100%"}
      gap={{ base: "5px", md: "10px" }}
      overflow={"hidden"}
    >
      <Box
        width={"100%"}
        height={"auto"}
        padding={"5px 0px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignContent={"flex-start"}
        id="head"
      >
        <Text fontSize={14}>{data.author.toUpperCase()}</Text>
        <Text fontSize={14}>{data.name.toUpperCase()}</Text>
      </Box>
      <Box height={"80%"} width={"100%"} id="preview">
        <Image
          src={data.image}
          width={"100%"}
          height={"100%"}
          loading="lazy"
        ></Image>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        alignContent={"flex-end"}
        width={"100%"}
        height={"auto"}
        padding={"0px 5px"}
        id="bottom"
      >
        <Text fontSize={14}>{data.year}</Text>
      </Box>
    </VStack>
  );
};

export default ShowCard;
