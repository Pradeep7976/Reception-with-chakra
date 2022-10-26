import "./Docc.css";

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  HStack,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const data = {
  rating: 4.0,
};

function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box d="flex" alignItems="center">
      <HStack>
        {Array(5)
          .fill("")
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: "1" }}
                  color={i < rating ? "teal.500" : "gray.300"}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
            }
            return <BsStar key={i} style={{ marginLeft: "1" }} />;
          })}
      </HStack>
    </Box>
  );
}

export default function Docc(props) {
  let navigate = useNavigate();
  function routeChange() {
    let path = "/contact/" + props.username;
    console.log(path);
    navigate(path);
  }
  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        className="docc"
        onClick={routeChange}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
          alignContent={"center"}
          className="imgbox"
        >
          <Image
            src={
              "https://ik.imagekit.io/aj4rz7nxsa/DOC/istockphoto-1189304032-612x612_sdLRC6VS-.jpg"
            }
            layout={"fill"}
            className={"docimg"}
            align={"center"}
          />
        </Box>
        <Stack>
          <Text
            color={"grey"}
            textTransform={"uppercase"}
            fontWeight={600}
            fontSize={"xs"}
            letterSpacing={1.1}
          >
            {props.specialization}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"xl"}
            fontFamily={"Open Sans"}
          >
            {"Dr. " + props.name}
          </Heading>
          <Text color={"gray.500"}>
            {/* {props.description} */}
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <HStack spacing={150}>
            <Rating rating={parseFloat(props.rating)} />
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text fontWeight={600}>With us from </Text>
              <Text color={"gray.500"}>{props.date}</Text>
            </Stack>
          </HStack>
        </Stack>
      </Box>
    </Center>
  );
}
