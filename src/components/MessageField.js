import { TextField } from "@material-ui/core";
import React from "react";

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
          const text = e.target.value;
          setText(e.target.value);
          console.log(text);
          setText("");
          e.preventDefault();
        }
      }}
      value={text}
    />
  );
};

export default MessageField;
