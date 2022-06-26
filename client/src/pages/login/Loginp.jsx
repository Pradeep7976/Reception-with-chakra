import React, { useState } from "react";
import axios from "axios";
import "./Loginp.css";

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Loginp() {
  const [usernamed, setusername] = useState("");
  const [passwordd, setpassword] = useState("");
  const [check, setcheck] = useState(false);
  let navigate = useNavigate();
  function clicki() {
    const dat = {
      username: usernamed,
      password: passwordd,
    };
    axios.post("http://localhost:7000/login", dat).then((Response) => {
      setcheck(Response.data);
      console.log(Response.data);
    });
    if (check) {
      let path = "/doctors";
      console.log(path);
      navigate(path);
    } else {
      alert("Username a password are not correct");
    }
  }
  return (
    <div className="Logi">
      <Stack
        className="login"
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading className="text" fontSize={"2xl"}>
              Sign in to your account
            </Heading>
            <FormControl className="text" id="email">
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                onChange={(e) => {
                  setusername(e.target.value);
                }}
              />
            </FormControl>
            <FormControl className="text" id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox className="text">Remember me</Checkbox>
                <Link color={"white"}>Forgot password?</Link>
              </Stack>
              <Button colorScheme={"blue"} variant={"solid"} onClick={clicki}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            className="imagei"
            alt={"Login Image"}
            objectFit={"cover"}
            src={"https://ik.imagekit.io/aj4rz7nxsa/DOC/Doctors_HlHpTwDZX.jpg"}
          />
        </Flex>
      </Stack>
    </div>
  );
}
export default Loginp;
