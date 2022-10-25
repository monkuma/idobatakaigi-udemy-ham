import React from "react";
import { useState } from "react";
import SignIn from "./Signin";

export default () => {
  const [name, setName] = useState("");
  return (
    <div>
      <SignIn setName={setName} />
    </div>
  );
};
