import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Avatar, Grid } from "@material-ui/core";
import gravatarPath from "../gravatar";
import MessageField from "./MessageField";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: "26px",
  },
});
const MessageInputField = ({ name }) => {
  const [text, setText] = useState("");

  const calsses = useStyles();
  const avatarPath = gravatarPath(name);

  return (
    <div className={calsses.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid item xs={10}>
          <MessageField text={text} setText={setText} name={name} />
        </Grid>
        <Grid item xs={1}>
          ボタン
        </Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;
