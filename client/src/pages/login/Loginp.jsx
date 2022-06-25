import React, { useState } from "react";
import "./Loginp.css";
import axios from "axios";

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
    <div id="loginform">
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

// const Form = (props) => (
//   <div>
//     <div class="row">
//       <label>Username</label>
//       <input type="text" placeholder="Enter your username" />
//     </div>

//     <div class="row">
//       <label>Password</label>
//       <input type="text" placeholder="Enter your password" />
//     </div>
//     <div id="button" class="row">
//       <button>Log in</button>
//     </div>
//   </div>
// );

// const Form = (props) => (
//   <div>
//     <FormInput
//       description="Username"
//       placeholder="Enter your username"
//       type="text"
//     />

//     <FormInput
//       description="Password"
//       placeholder="Enter your password"
//       type="password"
//     />
//     <FormButton title="Log in" />
//   </div>
// );

// const FormButton = (props) => (
//   <div id="button" class="row">
//     <button>{props.title}</button>
//   </div>
// );

// const FormInput = (props) => (
//   <div class="row">
//     <label>{props.description}</label>
//     <input type={props.type} placeholder={props.placeholder} />
//   </div>
// );

export default Loginp;
