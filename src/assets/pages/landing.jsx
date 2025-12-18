import { Box, Button, Image, Show, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import test from "../images/house.jpg";
import data from "../data/slider.json";
import showcaseData from "../data/showcase.json";
//React Icons
import { CiMenuFries } from "react-icons/ci";

import ShowCard from "../components/showcase-card";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //Handle window Resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  //Handle Random Showcase Items

  const Arr = [...showcaseData];
  for (let i = Arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [Arr[i], Arr[j]] = [Arr[j], Arr[i]];
  }

  const [first, second, third, fourth, fifth, sixth] = Arr;

  return (
    <div className="landing">
      <Box as={"section"} className="Sc1 overflowyScroll">
        <VStack gap={"15px"} className="Sc1-stck">
          <Box
            className="header"
            display={"flex"}
            flexDirection={"row"}
            width={"100%"}
            justifyContent={"space-between"}
            alignContent={"center"}
          >
            <Text fontSize={16} fontWeight={550}>
              MARC & ASSOCIATES
            </Text>
            <Text fontSize={16} fontWeight={550}>
              ARCHITECTS
            </Text>
          </Box>
          <Box className="main" height={"auto"}>
            <Text fontSize={190} lineHeight={1.2}>
              DESIGN <br /> &BUILD
            </Text>
          </Box>
        </VStack>

        <Box className="showcase">
          <Box className="showcase01">
            <ShowCard data={first} />
          </Box>
          <Box className="showcase02">
            <ShowCard data={second} />
          </Box>
          <Box className="showcase03">
            <ShowCard data={third} />
          </Box>
          <Box className="showcase04">
            <ShowCard data={fourth} />
          </Box>
        </Box>
      </Box>
      <Box as={"section"} className="Sc2 OverflowHidden">
        {windowWidth < 768 ? <MobHero /> : <Hero />}
      </Box>
    </div>
  );
}

export default Home;

const MobHero = () => {
  return (
    <Box className="home-hero">
      <header className="Sc2-header"></header> <p>This is the Mobile Hero</p>{" "}
    </Box>
  );
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = data.length;

  const handleNext = () => {
    if (currentIndex === total - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(total - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <Box className="home-hero">
      <header
        className="Sc2-header"
        style={{
          height: "60px",
          width: "100%",
          padding: "10px 25px",
          backgroundColor: "transparent",
          zIndex: 0,
          justifyContent: "flex-end",
          display: "flex",
          alignItems: "center",
        }}
      >
        <CiMenuFries size={30} fontWeight={600} cursor={"pointer"} />
      </header>

      <Box className="Sc2-showcase" height={"62%"} overflow={"hidden"}>
        <Image
          src={data[currentIndex].image}
          width={"100%"}
          height={"100%"}
        ></Image>
      </Box>
      <VStack className="controller-info" height={"38%"}>
        <Box
          height={"44px"}
          width={"100%"}
          borderBottom={"3px solid black"}
          display={"flex"}
          className="controller"
        >
          <Box
            width={"60%"}
            height={"100%"}
            borderRight={"2px solid black"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            padding={"0px 10px"}
            fontWeight={600}
          >
            <Text>{currentIndex + 1} of 7</Text>
            <Text fontSize={"16px"}>{data[currentIndex].name}</Text>
          </Box>
          <Box
            width={"40%"}
            height={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"20px"}
          >
            <HiOutlineArrowLongLeft
              size={30}
              cursor={"pointer"}
              onClick={handlePrev}
            />
            <HiOutlineArrowLongRight
              size={30}
              cursor={"pointer"}
              onClick={handleNext}
            />
          </Box>
        </Box>
        <Box
          padding={"25px 25px 10px 25px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"25px"}
          justifyContent={"space-between"}
          alignContent={"flex-start"}
          className="info"
        >
          <Text fontSize={16} fontWeight={500} width={"90%"}>
            At Marc & Associates, we design and transform private homes with a
            focus on quality, function, and modern refinement. With 20+ years of
            experience, our work spans extensions, refurbishments, and complete
            renovations—shaping spaces that elevate everyday living.
          </Text>
          <Box
            className="button-group"
            width={"80%"}
            height={"auto"}
            display={"flex"}
            gap={"20px"}
            alignItems={"center"}
          >
            <Button
              width={"130px"}
              variant={"outline"}
              borderRadius={"100px"}
              outlineWidth={"5px"}
              border={"1.5px solid black"}
              background={"black"}
              _hover={{
                background: "transparent",
                color: "green.900",
                fontWeight: 600,
              }}
              color={"white"}
            >
              EXPLORE <HiOutlineArrowLongRight size={20} />
            </Button>
            <Text fontSize={14}>
              We pursue Modernist aesthetics alongside an environmentally
              conscious design ethos.
            </Text>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};
