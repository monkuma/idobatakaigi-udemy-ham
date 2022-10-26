import { TextField } from "@material-ui/core";
import React from "react";
import { pushMessage } from "../.firebase-config";

const MessageField = ({ name, text, setText }) => {
  return (
    <TextField
      fullWidth={true}
      onChange={(e) => {
        setText(e.target.value);
      }}
      onKeyDown={(e) => {
        if (text === "") return;
        if (e.key === "Enter") {
          pushMessage({ name: "test user", text });
          setText("");
          e.preventDefault();
        }
      }}
      value={text}
    />
  );
};

export default MessageField;
