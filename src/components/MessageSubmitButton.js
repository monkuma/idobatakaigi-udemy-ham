import { IconButton } from "@material-ui/core";
import React from "react";
import { pushMessage } from "../.firebase-config";
import SendIcon from "@material-ui/icons/Send";
const MessageSubmitButton = ({ name, text, setText }) => {
  return (
    <IconButton
      disabled={text === ""}
      onClick={() => {
        pushMessage({ name, text });
        setText("");
      }}
    >
      <SendIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;
