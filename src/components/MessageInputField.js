import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
  },
});
const MessageInputField = () => {
  const calsses = useStyles();
  return <div className={calsses.root}>MessageInputField</div>;
};

export default MessageInputField;
