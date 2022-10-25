import React from "react";
import { useState } from "react";
import Main from "./Main";
import SignIn from "./Signin";
import config from "../config.json";

export default () => {
  const [name, setName] = useState("");
  console.log({ name }, "in App.js");

  if (config.signInEnabled && name === "") {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />;
  }
};
