import React from "react";
import { useState } from "react";
import Main from "./Main";
import SignIn from "./Signin";

export default () => {
  const [name, setName] = useState("");
  console.log({ name }, "in App.js");

  if (name === "") {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />;
  }
};
