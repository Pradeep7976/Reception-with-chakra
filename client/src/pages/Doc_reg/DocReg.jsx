import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Box,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";

import React, { useState } from "react";
import axios from "axios";
import { Navigator, useNavigate } from "react-router-dom";

function DocForm() {
  const [usernamed, setusername] = useState("");
  const [emaild, setemail] = useState("");
  const [passwordd, setpassword] = useState("");
  const [Specializationd, setspecialization] = useState("");
  const check = false;

  let navigate = useNavigate();
  function routeChange() {
    let path = "/doctors";
    console.log(path);
    navigate(path);
  }

  async function clicki() {
    console.log("clicked");
    const dat = {
      username: usernamed,
      password: passwordd,
      email: emaild,
      Specialization: Specializationd,
    };
    await axios.post("http://localhost:7000/docreg", dat).then((resp) => {
      check = resp.data;
      routeChange();
    });
    if (check) {
      alert("User name already exists");
    } else {
    }
  }
  return (
    <Box>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            User Profile Edit
          </Heading>
          <FormControl id="userName">
            <FormLabel>User Icon</FormLabel>
            <Stack direction={["column", "row"]} spacing={6}>
              <Center>
                <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                  <AvatarBadge
                    as={IconButton}
                    size="sm"
                    rounded="full"
                    top="-10px"
                    colorScheme="red"
                    aria-label="remove Image"
                    icon={<SmallCloseIcon />}
                  />
                </Avatar>
              </Center>
              <Center w="full">
                <Button w="full">Change Icon</Button>
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="userName" isRequired>
            <FormLabel>User name</FormLabel>
            <Input
              placeholder="UserName"
              _placeholder={{ color: "gray.500" }}
              type="text"
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="password"
              _placeholder={{ color: "gray.500" }}
              type="password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </FormControl>
          <FormControl id="Specialization" isRequired>
            <FormLabel>Specialization</FormLabel>
            <Input
              placeholder="Specialization"
              _placeholder={{ color: "gray.500" }}
              type="text"
              onChange={(e) => {
                setspecialization(e.target.value);
              }}
            />
          </FormControl>
          <Stack spacing={6} direction={["column", "row"]}>
            <Button
              bg={"red.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "red.500",
              }}
            >
              Cancel
            </Button>
            <Button
              bg={"blue.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "blue.500",
              }}
              onClick={clicki}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}

export default DocForm;
