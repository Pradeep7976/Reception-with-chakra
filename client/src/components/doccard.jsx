import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

import { Navigate, useNavigate } from "react-router-dom";

function Doccard(props) {
  let navigate = useNavigate();
  function routeChange() {
    let path = "/contact/" + props.username;
    console.log(path);
    navigate(path);
  }
  return (
    <Box
      maxW={"245px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      textAlign={"center"}
      onClick={routeChange}
      style={{ cursor: "pointer" }}
    >
      <Avatar
        size={"xl"}
        src={"https://ik.imagekit.io/aj4rz7nxsa/DOC/doctor-_vav7_UjCa.jpg"}
        alt={"Avatar Alt"}
        mb={4}
        pos={"relative"}
        _after={{
          content: '""',
          w: 4,
          h: 4,
          bg: "green.300",
          border: "2px solid white",
          rounded: "full",
          pos: "absolute",
          bottom: 0,
          right: 3,
        }}
      />
      <Heading fontSize={"2xl"} fontFamily={"body"}>
        {props.name}
      </Heading>
      <Text fontWeight={600} color={"gray.500"} mb={4}>
        {props.username}
      </Text>
      <Text
        textAlign={"center"}
        color={useColorModeValue("gray.700", "gray.400")}
        px={3}
      >
        {props.specialization}
      </Text>
    </Box>
  );
}

export default Doccard;
