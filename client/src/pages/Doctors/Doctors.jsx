import { SimpleGrid, Spacer, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

import Doccard from "../../components/doccard";
import { docdata } from "./docdat";
import Navbar from "../../components/Navbar";

function Doctors() {
  const [docdatai, setdocdatai] = useState("");
  return (
    <Flex
      textAlign={"center"}
      pt={10}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
    >
      <SimpleGrid columns={[2, 3, 5]} spacing={"20"} mt={4} mx={10}>
        {docdata.map((cardinfo, index) => {
          return (
            <Doccard
              name={cardinfo.name}
              username={cardinfo.username}
              specialization={cardinfo.specialization}
            />
          );
        })}
      </SimpleGrid>
    </Flex>
  );
}

export default Doctors;
