import { SimpleGrid, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import Doccard from "../../components/doccard";
import { docdata } from "./docdat";
import data from "./docdat.json";
import Navbar from "../../components/Navbar";
import axios from "axios";

import "./Doctors.css";

const url1 = "http://localhost:7000/doctors";

function Doctors() {
  const [docdatai, setdocdatai] = useState([]);

  useEffect(() => {
    axios
      .get(url1)
      .then((Response) => {
        console.log(Response.data);
        setdocdatai(Response.data);
      })
      .catch((err) => {
        console.log("error fetching data");
      });
    console.log("fetched");
  }, []);

  return (
    <div className="scrollable-div" style={{ overflow: "scroll" }}>
      <br />
      <br />
      <SimpleGrid columns={[2, 3, 5]} spacing={"20"} mt={4} mx={10}>
        {console.log(docdatai)}
        {docdatai.map((cardinfo, index) => {
          return (
            <Doccard
              name={cardinfo.name}
              username={cardinfo.username}
              specialization={cardinfo.specializationll}
            />
          );
        })}
      </SimpleGrid>
    </div>
  );
}

export default Doctors;
