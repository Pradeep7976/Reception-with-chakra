import React, { useState } from "react";
import "./Loginp.css";
import axios from "axios";

import bgimg from "../../assets/Loginimage.jpg";

function Loginp() {
  const [usernamed, setusername] = useState("");
  const [passwordd, setpassword] = useState("");

  const check = false;

  function clicki() {
    console.log("clicked");
    const dat = {
      username: usernamed,
      password: passwordd,
    };
    axios.post("http://localhost:7000/login", dat).then((resp) => {
      check = resp.data;
    });
    if (check) {
      alert("User name already exists");
    }
  }
  return (
    <div
      id="loginform"
      style={{
        backgroundImage: bgimg,
        height: 100,
        marginTop: 10,
        textAlign: "center",
      }}
    >
      <FormHeader title="Login" />
      {/* <Form /> */}
      <div>
        <div class="row">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
        </div>

        <div class="row">
          <label>Password</label>
          <input
            type="text"
            placeholder="Enter your password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <div id="button" class="row">
          <button onClick={clicki}>Log in</button>
        </div>
      </div>
    </div>
  );
}

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;
export default Loginp;
