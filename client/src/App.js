import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";

import LoginP from "./pages/login/Loginp";
import RegesterR from "./pages/Regester_Receps/RegesterR";
import DocForm from "./pages/Doc_reg/DocReg";
import Doctors from "./pages/Doctors/Doctors";

import backimg from "./assets/Loginimage.jpg";

import "./App.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App" style={{ backgroundImage: `url('${backimg}')` }}>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginP />} />
            <Route path="/regesterr" element={<RegesterR />} />
            <Route path="/docreg" element={<DocForm />} />
            <Route path="/doctors" element={<Doctors />} />
          </Routes>
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
