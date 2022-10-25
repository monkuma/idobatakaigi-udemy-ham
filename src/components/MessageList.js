import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
});

const MessageList = () => {
  const calsses = useStyles();

  return <div className={calsses.root}>MessageList</div>;
};

export default MessageList;
